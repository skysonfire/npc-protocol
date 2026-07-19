from fastapi import APIRouter, HTTPException, Request
from pydantic import BaseModel
from typing import Optional
import time
from datetime import datetime
from database import db
from sqlalchemy.exc import IntegrityError

router = APIRouter()

# Pydantic model for contact form data
class ContactForm(BaseModel):
    name: str
    email: str
    company: Optional[str] = None
    service: Optional[str] = None
    budget: Optional[str] = None
    message: str
    referral_source: Optional[str] = None

# Simple rate limiting using in-memory storage (in production, use Redis or similar)
rate_limits = {}

def is_rate_limited(ip_address: str) -> bool:
    """Check if an IP address has exceeded the rate limit (3 submissions per hour)"""
    current_time = time.time()
    ip_limits = rate_limits.get(ip_address, [])
    
    # Remove old entries (older than 1 hour)
    ip_limits = [timestamp for timestamp in ip_limits if current_time - timestamp < 3600]
    
    # Check if limit exceeded
    if len(ip_limits) >= 3:
        return True
    
    # Add new timestamp
    ip_limits.append(current_time)
    rate_limits[ip_address] = ip_limits
    return False

@router.post("/submit")
async def submit_contact_form(form_data: ContactForm, request: Request):
    # Get client IP address
    client_ip = request.client.host
    
    # Check rate limiting
    if is_rate_limited(client_ip):
        raise HTTPException(status_code=429, detail="Too many requests. Please try again later.")
    
    # Sanitize input data (strip HTML and limit lengths)
    sanitized_data = {
        "name": form_data.name.strip()[:100],
        "email": form_data.email.strip()[:100],
        "company": form_data.company.strip()[:100] if form_data.company else None,
        "service": form_data.service[:50] if form_data.service else None,
        "budget": form_data.budget[:50] if form_data.budget else None,
        "message": form_data.message.strip()[:2000],
        "referral_source": form_data.referral_source[:50] if form_data.referral_source else None,
        "created_at": datetime.utcnow()
    }
    
    try:
        # Save to database
        contact_id = db.save_contact(sanitized_data)
        
        # Return success response
        return {
            "success": True,
            "message": "Thank you for your message. We'll be in touch within 24 hours.",
            "id": contact_id
        }
    except IntegrityError:
        # Handle duplicate entries if any (though we should prevent this with rate limiting)
        raise HTTPException(status_code=400, detail="Invalid data provided")
    except Exception as e:
        # Log error and return generic error
        print(f"Error saving contact form: {e}")
        raise HTTPException(status_code=500, detail="An error occurred while processing your request")