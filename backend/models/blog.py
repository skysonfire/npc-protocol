from pydantic import BaseModel
from typing import Optional
from datetime import datetime

class BlogPostBase(BaseModel):
    title: str
    slug: str
    excerpt: str
    content: str
    category: str
    author: str
    read_time: int
    published: bool = True

class BlogPostCreate(BlogPostBase):
    pass

class BlogPostUpdate(BlogPostBase):
    title: Optional[str] = None
    slug: Optional[str] = None
    excerpt: Optional[str] = None
    content: Optional[str] = None
    category: Optional[str] = None
    author: Optional[str] = None
    read_time: Optional[int] = None
    published: Optional[bool] = None

class BlogPost(BlogPostBase):
    id: int
    published_at: datetime
    updated_at: datetime
    
    class Config:
        from_attributes = True