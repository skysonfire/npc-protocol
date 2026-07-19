from fastapi import APIRouter, HTTPException
from typing import List, Optional
from database import db
from models.blog import BlogPost, BlogPostCreate, BlogPostUpdate

router = APIRouter()

@router.get("/posts", response_model=List[BlogPost])
async def get_blog_posts(
    limit: int = 10,
    offset: int = 0,
    category: Optional[str] = None
):
    try:
        posts = db.get_blog_posts(limit=limit, offset=offset, category=category)
        return posts
    except Exception as e:
        print(f"Error fetching blog posts: {e}")
        raise HTTPException(status_code=500, detail="An error occurred while fetching blog posts")

@router.get("/posts/{slug}", response_model=BlogPost)
async def get_blog_post_by_slug(slug: str):
    try:
        post = db.get_blog_post_by_slug(slug)
        if not post:
            raise HTTPException(status_code=404, detail="Blog post not found")
        return post
    except Exception as e:
        print(f"Error fetching blog post: {e}")
        raise HTTPException(status_code=500, detail="An error occurred while fetching the blog post")

@router.get("/categories", response_model=List[str])
async def get_blog_categories():
    try:
        categories = db.get_blog_categories()
        return categories
    except Exception as e:
        print(f"Error fetching blog categories: {e}")
        raise HTTPException(status_code=500, detail="An error occurred while fetching blog categories")

@router.post("/posts", response_model=BlogPost)
async def create_blog_post(post: BlogPostCreate):
    try:
        created_post = db.create_blog_post(post)
        return created_post
    except Exception as e:
        print(f"Error creating blog post: {e}")
        raise HTTPException(status_code=500, detail="An error occurred while creating the blog post")

@router.put("/posts/{slug}", response_model=BlogPost)
async def update_blog_post(slug: str, post: BlogPostUpdate):
    try:
        updated_post = db.update_blog_post(slug, post)
        if not updated_post:
            raise HTTPException(status_code=404, detail="Blog post not found")
        return updated_post
    except Exception as e:
        print(f"Error updating blog post: {e}")
        raise HTTPException(status_code=500, detail="An error occurred while updating the blog post")

@router.delete("/posts/{slug}")
async def delete_blog_post(slug: str):
    try:
        deleted = db.delete_blog_post(slug)
        if not deleted:
            raise HTTPException(status_code=404, detail="Blog post not found")
        return {"message": "Blog post deleted successfully"}
    except Exception as e:
        print(f"Error deleting blog post: {e}")
        raise HTTPException(status_code=500, detail="An error occurred while deleting the blog post")