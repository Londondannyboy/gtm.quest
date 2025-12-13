"""
Pydantic AI extraction for Fractional.Quest
Uses pydantic-ai with Google Gemini for structured preference extraction
"""
import os
from typing import Optional
from fastapi import FastAPI, Request
from fastapi.responses import JSONResponse
from pydantic import BaseModel, Field
from pydantic_ai import Agent

app = FastAPI()


# Pydantic models for structured output
class ExtractedPreference(BaseModel):
    type: str = Field(description="One of: role, industry, location, availability, day_rate, skill")
    values: list[str] = Field(description="The extracted values")
    confidence: float = Field(ge=0.0, le=1.0, description="Confidence score")
    raw_text: str = Field(description="The original text")
    requires_hard_validation: bool = Field(default=False, description="True if needs explicit confirmation")


class ExtractionResult(BaseModel):
    preferences: list[ExtractedPreference] = Field(default_factory=list)
    should_confirm: bool = Field(default=False)


# Pydantic AI Agent
extraction_agent = Agent(
    model="google-gla:gemini-2.0-flash",
    result_type=ExtractionResult,
    system_prompt="""You are a career preference extraction agent for Fractional.Quest.

Extract career preferences from conversation transcripts.

For each preference:
- type: role, industry, location, availability, day_rate, or skill
- values: list of extracted values
- confidence: 0.0-1.0 based on clarity
- raw_text: the exact quote
- requires_hard_validation: true for constraints/deal-breakers

Set requires_hard_validation=true when user says:
- "only", "must", "minimum", "at least", "nothing below"
- Any hard constraint or deal-breaker

Set requires_hard_validation=false for:
- General interests, flexible preferences

Only extract EXPLICIT preferences. Set should_confirm=true if any hard validations exist."""
)


@app.post("/api/extract")
async def extract(request: Request):
    """Extract preferences using Pydantic AI"""
    try:
        body = await request.json()
        transcript = body.get("transcript", "")

        if not transcript.strip():
            return JSONResponse({"preferences": [], "should_confirm": False})

        result = await extraction_agent.run(f"Extract preferences from:\n\n{transcript}")

        return JSONResponse(result.data.model_dump())

    except Exception as e:
        print(f"[Extract] Error: {e}")
        return JSONResponse({"preferences": [], "should_confirm": False, "error": str(e)})


@app.get("/api/health")
async def health():
    return {"status": "ok", "agent": "pydantic-ai", "model": "gemini-2.0-flash"}


# Vercel serverless handler
from mangum import Mangum
handler = Mangum(app)
