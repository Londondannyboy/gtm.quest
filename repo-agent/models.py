from pydantic import BaseModel, Field
from enum import Enum
from typing import Optional
from datetime import datetime


class PreferenceType(str, Enum):
    ROLE = "role"
    INDUSTRY = "industry"
    LOCATION = "location"
    AVAILABILITY = "availability"
    DAY_RATE = "day_rate"
    SKILL = "skill"


class ValidationType(str, Enum):
    SOFT = "soft"
    HARD = "hard"
    VALIDATED = "validated"


class ExtractedPreference(BaseModel):
    type: PreferenceType
    values: list[str]
    confidence: float = Field(ge=0.0, le=1.0)
    raw_text: str
    requires_hard_validation: bool = False
    reason: Optional[str] = None


class ValidationRequest(BaseModel):
    id: str
    preference: ExtractedPreference
    validation_type: ValidationType
    prompt: str
    expires_at: Optional[datetime] = None


class ExtractionRequest(BaseModel):
    transcript: str
    user_id: Optional[str] = None
    context: Optional[list[str]] = None


class ExtractionResponse(BaseModel):
    preferences: list[ExtractedPreference]
    validation_requests: list[ValidationRequest]
    should_confirm: bool


class SavePreferenceRequest(BaseModel):
    user_id: str
    preference_type: PreferenceType
    values: list[str]
    validation_type: ValidationType
    raw_text: Optional[str] = None
