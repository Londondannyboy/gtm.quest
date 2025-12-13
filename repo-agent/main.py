"""
Repo Agent - Pydantic AI powered preference extraction

Deploy on Railway:
1. Connect this repo-agent folder to Railway
2. Set environment variables: GOOGLE_API_KEY, DATABASE_URL
3. Railway auto-detects Python and runs uvicorn
"""
import os
import uuid
from datetime import datetime, timedelta
from typing import Optional

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic_ai import Agent
from dotenv import load_dotenv

from models import (
    ExtractedPreference,
    ExtractionRequest,
    ExtractionResponse,
    PreferenceType,
    SavePreferenceRequest,
    ValidationRequest,
    ValidationType,
)

load_dotenv()

app = FastAPI(
    title="Repo Agent",
    description="Pydantic AI agent for career preference extraction",
    version="1.0.0"
)

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "https://fractional.quest",
        "http://localhost:3000",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Pydantic AI Agent using Google Gemini
extraction_agent = Agent(
    model="google-gla:gemini-2.0-flash",
    result_type=list[ExtractedPreference],
    system_prompt="""
You are a career preference extraction agent for Fractional.Quest, a platform for fractional executive roles in the UK.

Analyze conversation transcripts and extract structured career preferences.

For each preference:
1. Identify type: role, industry, location, availability, day_rate, skill
2. Extract specific values
3. Assess confidence (0.0-1.0)
4. Determine if HARD validation needed

HARD validation (requires_hard_validation=True) when:
- Constraints: "I only want...", "Must be...", "Nothing below..."
- Deal-breakers: "I won't consider...", "Definitely not..."
- Salary minimums: "At least £X", "Minimum of..."
- Location exclusivity: "Only London", "Has to be remote"

SOFT validation when:
- General interests: "I like tech companies"
- Flexible preferences: "Maybe 2-3 days"
- Nice-to-haves

Only extract EXPLICIT preferences, not inferred ones.
Return empty list if nothing clear.
"""
)


def create_validation_request(pref: ExtractedPreference) -> ValidationRequest:
    validation_type = ValidationType.HARD if pref.requires_hard_validation else ValidationType.SOFT

    if validation_type == ValidationType.HARD:
        if pref.type == PreferenceType.ROLE:
            prompt = f"Confirm: You only want {', '.join(pref.values)} roles?"
        elif pref.type == PreferenceType.DAY_RATE:
            prompt = f"Confirm rate: {', '.join(pref.values)}?"
        elif pref.type == PreferenceType.LOCATION:
            prompt = f"Confirm: {', '.join(pref.values)} only?"
        else:
            prompt = f"Confirm {pref.type.value}: {', '.join(pref.values)}?"
    else:
        prompt = f"Adding: {pref.type.value} - {', '.join(pref.values)}"

    return ValidationRequest(
        id=str(uuid.uuid4()),
        preference=pref,
        validation_type=validation_type,
        prompt=prompt,
        expires_at=datetime.now() + timedelta(seconds=30 if validation_type == ValidationType.SOFT else 120)
    )


@app.post("/extract", response_model=ExtractionResponse)
async def extract_preferences(request: ExtractionRequest):
    """Extract career preferences using Pydantic AI + Gemini"""
    if not request.transcript or not request.transcript.strip():
        return ExtractionResponse(
            preferences=[],
            validation_requests=[],
            should_confirm=False
        )

    try:
        context_str = ""
        if request.context:
            context_str = "\n\nPrevious context:\n" + "\n".join(request.context[-5:])

        result = await extraction_agent.run(
            f"Extract preferences from:\n\n{request.transcript}{context_str}"
        )

        preferences = result.data
        validation_requests = [create_validation_request(p) for p in preferences]
        should_confirm = any(v.validation_type == ValidationType.HARD for v in validation_requests)

        return ExtractionResponse(
            preferences=preferences,
            validation_requests=validation_requests,
            should_confirm=should_confirm
        )

    except Exception as e:
        print(f"[Repo Agent] Error: {e}")
        return ExtractionResponse(
            preferences=[],
            validation_requests=[],
            should_confirm=False
        )


@app.post("/validate")
async def validate_preference(request: SavePreferenceRequest):
    """Save validated preference to Neon"""
    import asyncpg

    database_url = os.environ.get("DATABASE_URL")
    if not database_url:
        raise HTTPException(status_code=500, detail="Database not configured")

    try:
        conn = await asyncpg.connect(database_url)

        user_row = await conn.fetchrow(
            "SELECT id FROM users WHERE neon_auth_id = $1 LIMIT 1",
            request.user_id
        )

        if not user_row:
            await conn.close()
            raise HTTPException(status_code=404, detail="User not found")

        internal_user_id = user_row["id"]

        await conn.execute("""
            CREATE TABLE IF NOT EXISTS user_repo_preferences (
                id SERIAL PRIMARY KEY,
                user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
                preference_type VARCHAR(50) NOT NULL,
                preference_value TEXT NOT NULL,
                validation_type VARCHAR(20) DEFAULT 'soft',
                raw_text TEXT,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                UNIQUE(user_id, preference_type, preference_value)
            )
        """)

        saved = []
        for value in request.values:
            result = await conn.fetchrow("""
                INSERT INTO user_repo_preferences
                (user_id, preference_type, preference_value, validation_type, raw_text)
                VALUES ($1, $2, $3, $4, $5)
                ON CONFLICT (user_id, preference_type, preference_value)
                DO UPDATE SET validation_type = EXCLUDED.validation_type
                RETURNING id, preference_value, validation_type
            """, internal_user_id, request.preference_type.value, value,
                request.validation_type.value, request.raw_text)

            if result:
                saved.append(dict(result))

        await conn.close()
        return {"success": True, "saved": saved}

    except HTTPException:
        raise
    except Exception as e:
        print(f"[Repo Agent] Validate error: {e}")
        raise HTTPException(status_code=500, detail=str(e))


@app.get("/health")
async def health():
    return {"status": "ok", "agent": "repo", "model": "gemini-2.0-flash"}


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=int(os.environ.get("PORT", 8000)))
