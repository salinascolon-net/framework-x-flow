from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
import os
import logging
import html
import httpx
from pathlib import Path
from pydantic import BaseModel, EmailStr, field_validator
from typing import Optional

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# Emergent-managed email proxy. Constant so it survives deployment.
EMAIL_BASE_URL = "https://integrations.emergentagent.com"
EMAIL_KEY = os.environ.get("EMERGENT_EMAIL_KEY", "")
EMAIL_FROM_NAME = os.environ.get("EMAIL_FROM_NAME", "Framework X Flow")
CONTACT_EMAIL = os.environ.get("CONTACT_EMAIL", "")

EMAIL_ENABLED = bool(EMAIL_KEY) and bool(CONTACT_EMAIL)

app = FastAPI(title="Framework X Flow API")
api_router = APIRouter(prefix="/api")

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


class ContactSubmission(BaseModel):
    name: str
    email: EmailStr
    business_name: Optional[str] = ""
    business_website: Optional[str] = ""
    team_size: Optional[str] = ""
    service_interest: Optional[str] = ""
    message: str
    preferred_next_step: Optional[str] = ""
    privacy_ack: bool = False
    # Honeypot: must stay empty for real humans.
    company: Optional[str] = ""

    @field_validator("name", "message")
    @classmethod
    def not_blank(cls, v):
        if not v or not v.strip():
            raise ValueError("This field is required.")
        return v.strip()


def _row(label: str, value: str) -> str:
    if not value:
        return ""
    safe = html.escape(value).replace("\n", "<br/>")
    return (
        f'<tr>'
        f'<td style="padding:6px 12px;color:#194D4A;font-weight:600;'
        f'vertical-align:top;white-space:nowrap;">{html.escape(label)}</td>'
        f'<td style="padding:6px 12px;color:#151A18;">{safe}</td>'
        f'</tr>'
    )


def _build_email(sub: ContactSubmission) -> str:
    rows = "".join([
        _row("Name", sub.name),
        _row("Email", sub.email),
        _row("Business", sub.business_name or ""),
        _row("Website", sub.business_website or ""),
        _row("Team size", sub.team_size or ""),
        _row("Service of interest", sub.service_interest or ""),
        _row("Preferred next step", sub.preferred_next_step or ""),
        _row("Operational issue", sub.message),
    ])
    return (
        '<div style="font-family:Arial,Helvetica,sans-serif;background:#F6F3EC;'
        'padding:24px;">'
        '<table style="max-width:640px;margin:0 auto;background:#FFFFFF;'
        'border:1px solid #D9D7D0;border-collapse:collapse;">'
        '<tr><td style="background:#194D4A;color:#F6F3EC;padding:18px 12px;'
        'font-size:18px;font-weight:700;">Framework X Flow — New Contact Message</td></tr>'
        f'<tr><td style="padding:8px 0;"><table style="width:100%;'
        f'border-collapse:collapse;">{rows}</table></td></tr>'
        '<tr><td style="padding:14px 12px;color:#6b6f6c;font-size:12px;'
        'border-top:1px solid #D9D7D0;">Reply directly to this email to respond '
        'to the sender.</td></tr>'
        '</table></div>'
    )


@api_router.get("/")
async def root():
    return {"message": "Framework X Flow API"}


@api_router.get("/contact/config")
async def contact_config():
    return {"email_enabled": EMAIL_ENABLED}


@api_router.post("/contact")
async def submit_contact(sub: ContactSubmission):
    if not EMAIL_ENABLED:
        raise HTTPException(status_code=503, detail="Email service is not configured.")

    # Silent spam rejection via honeypot — report success without sending.
    if sub.company:
        logger.info("Honeypot triggered; dropping submission.")
        return {"status": "success"}

    if not sub.privacy_ack:
        raise HTTPException(status_code=422, detail="Privacy acknowledgment is required.")

    payload = {
        "to": [CONTACT_EMAIL],
        "subject": f"New inquiry from {sub.name} — Framework X Flow",
        "html": _build_email(sub),
        "from_name": EMAIL_FROM_NAME,
        "contact_email": sub.email,
    }
    try:
        async with httpx.AsyncClient(timeout=30) as client:
            resp = await client.post(
                f"{EMAIL_BASE_URL}/api/v1/email/send",
                headers={"X-Email-Key": EMAIL_KEY},
                json=payload,
            )
        resp.raise_for_status()
    except httpx.HTTPStatusError as e:
        logger.error(f"Email send failed: {e.response.status_code} {e.response.text}")
        raise HTTPException(status_code=502, detail="We could not send your message. Please try again or book a call.")
    except Exception as e:
        logger.error(f"Email send error: {str(e)}")
        raise HTTPException(status_code=500, detail="We could not send your message. Please try again or book a call.")

    return {"status": "success"}


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)
