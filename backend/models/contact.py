from pydantic import BaseModel
from typing import Optional
from datetime import datetime

class ContactBase(BaseModel):
    name: str
    email: str
    company: Optional[str] = None
    service: Optional[str] = None
    budget: Optional[str] = None
    message: str
    referral_source: Optional[str] = None

class ContactCreate(ContactBase):
    pass

class Contact(ContactBase):
    id: int
    created_at: datetime
    
    class Config:
        from_attributes = True