from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware
from database import db
from routers import contact, blog, newsletter
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# Initialize the FastAPI app
app = FastAPI(
    title="NPC Protocol API",
    description="API for NPC Protocol digital services company",
    version="1.0.0"
)

# Configure CORS
origins = os.getenv("CORS_ORIGINS", "http://localhost:3000,https://npcprotocol.com").split(",")
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
app.include_router(contact.router, prefix="/api/contact", tags=["contact"])
app.include_router(blog.router, prefix="/api/blog", tags=["blog"])
app.include_router(newsletter.router, prefix="/api/newsletter", tags=["newsletter"])

# Startup event
@app.on_event("startup")
async def startup_event():
    db.init_db()
    db.seed_blog_posts()

# Health check endpoint
@app.get("/health")
async def health_check():
    return {"status": "healthy"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)