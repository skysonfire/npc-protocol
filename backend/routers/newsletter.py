from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from typing import Optional
from datetime import datetime
from database import db

router = APIRouter()

# Pydantic model for newsletter subscription
class NewsletterSubscription(BaseModel):
    email: str
    source: Optional[str] = None

@router.post("/subscribe")
async def subscribe_to_newsletter(subscription: NewsletterSubscription):
    try:
        # Check if email already exists
        existing_subscriber = db.get_newsletter_subscriber(subscription.email)
        
        if existing_subscriber:
            # Return success even for duplicates (as per requirements)
            return {
                "success": True,
                "message": "You're already subscribed to our newsletter."
            }
        
        # Save new subscriber
        subscriber_data = {
            "email": subscription.email.strip(),
            "source": subscription.source[:50] if subscription.source else None,
            "created_at": datetime.utcnow()
        }
        
        db.save_newsletter_subscriber(subscriber_data)
        
        return {
            "success": True,
            "message": "Thank you for subscribing to our newsletter!"
        }
    except Exception as e:
        print(f"Error subscribing to newsletter: {e}")
        raise HTTPException(status_code=500, detail="An error occurred while processing your subscription")