import sqlite3
from datetime import datetime
from typing import List, Optional, Dict, Any
from contextlib import contextmanager

# Database file path
DATABASE_PATH = "npcprotocol.db"

def get_db_connection():
    """Create and return a database connection"""
    conn = sqlite3.connect(DATABASE_PATH)
    conn.row_factory = sqlite3.Row  # This allows us to access columns by name
    return conn

@contextmanager
def get_db():
    """Context manager for database connections"""
    conn = get_db_connection()
    try:
        yield conn
    finally:
        conn.close()

def init_db():
    """Initialize the database with required tables"""
    with get_db() as conn:
        # Create contacts table
        conn.execute('''
            CREATE TABLE IF NOT EXISTS contacts (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL,
                email TEXT NOT NULL,
                company TEXT,
                service TEXT,
                budget TEXT,
                message TEXT NOT NULL,
                referral_source TEXT,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        ''')
        
        # Create blog_posts table
        conn.execute('''
            CREATE TABLE IF NOT EXISTS blog_posts (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                title TEXT NOT NULL,
                slug TEXT UNIQUE NOT NULL,
                excerpt TEXT NOT NULL,
                content TEXT NOT NULL,
                category TEXT NOT NULL,
                author TEXT NOT NULL,
                read_time INTEGER NOT NULL,
                published BOOLEAN DEFAULT 1,
                published_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        ''')
        
        # Create newsletter_subscribers table
        conn.execute('''
            CREATE TABLE IF NOT EXISTS newsletter_subscribers (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                email TEXT UNIQUE NOT NULL,
                source TEXT,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        ''')
        
        conn.commit()

def seed_blog_posts():
    """Seed the database with sample blog posts if empty"""
    with get_db() as conn:
        # Check if table is empty
        count = conn.execute('SELECT COUNT(*) FROM blog_posts').fetchone()[0]
        
        if count == 0:
            # Sample blog posts
            sample_posts = [
                {
                    "title": "Why Your Business Is Still an NPC (And How to Change That)",
                    "slug": "why-your-business-is-still-an-npc",
                    "excerpt": "Understanding the difference between reactive businesses and systematized businesses.",
                    "content": "In the world of business, there's a fundamental distinction between operating as a Non-Player Character (NPC) and being a Main Character. NPCs react to events that happen around them, while Main Characters proactively shape their environment. This article explores how to transform your business from reactive to proactive through systematic thinking.",
                    "category": "Business Systems",
                    "author": "NPC Protocol Team",
                    "read_time": 5,
                },
                {
                    "title": "The 5 Automations Every Service Business Should Have Running by Month 3",
                    "slug": "5-automations-every-service-business",
                    "excerpt": "Essential automations that can save your business hours each week.",
                    "content": "Every service business has certain repetitive tasks that consume valuable time. This article outlines the five core automations every service business should implement within their first three months to maximize efficiency and growth.",
                    "category": "AI & Automation",
                    "author": "NPC Protocol Team",
                    "read_time": 6,
                },
                {
                    "title": "How We Built a Lead Generation System That Books 3 Calls Per Week on Autopilot",
                    "slug": "lead-generation-system-autopilot",
                    "excerpt": "A case study of our lead generation system implementation.",
                    "content": "This is a detailed case study of how we built an automated lead generation system that consistently books three calls per week without additional effort from the client team.",
                    "category": "Marketing",
                    "author": "NPC Protocol Team",
                    "read_time": 8,
                },
                {
                    "title": "The Website Audit Checklist We Use Before Every Client Engagement",
                    "slug": "website-audit-checklist",
                    "excerpt": "Our comprehensive approach to website auditing.",
                    "content": "Before we begin any web development project, we conduct a thorough audit of the existing website. This checklist outlines all the critical areas we evaluate during our audits.",
                    "category": "Web Development",
                    "author": "NPC Protocol Team",
                    "read_time": 7,
                },
                {
                    "title": "Stop Selling Services. Start Selling Outcomes.",
                    "slug": "sell-outcomes-not-services",
                    "excerpt": "Reframing your offer around business outcomes.",
                    "content": "The traditional service-based model is evolving. This article explores how to position your business to sell outcomes rather than services, leading to higher value propositions and better client relationships.",
                    "category": "Business Systems",
                    "author": "NPC Protocol Team",
                    "read_time": 5,
                },
                {
                    "title": "AI Tools We Actually Use (And the Ones We Dropped After 30 Days)",
                    "slug": "ai-tools-we-use",
                    "excerpt": "Honest reviews of our AI tool selection process.",
                    "content": "We've tested numerous AI tools in our work. This article provides honest reviews of which tools we keep and which ones we've dropped after evaluating their effectiveness for our business processes.",
                    "category": "AI & Automation",
                    "author": "NPC Protocol Team",
                    "read_time": 6,
                }
            ]
            
            for post in sample_posts:
                conn.execute('''
                    INSERT INTO blog_posts (title, slug, excerpt, content, category, author, read_time)
                    VALUES (?, ?, ?, ?, ?, ?, ?)
                ''', (
                    post["title"],
                    post["slug"],
                    post["excerpt"],
                    post["content"],
                    post["category"],
                    post["author"],
                    post["read_time"]
                ))
            
            conn.commit()

def save_contact(contact_data: Dict[str, Any]) -> int:
    """Save contact form data to database"""
    with get_db() as conn:
        cursor = conn.execute('''
            INSERT INTO contacts (name, email, company, service, budget, message, referral_source)
            VALUES (?, ?, ?, ?, ?, ?, ?)
        ''', (
            contact_data["name"],
            contact_data["email"],
            contact_data["company"],
            contact_data["service"],
            contact_data["budget"],
            contact_data["message"],
            contact_data["referral_source"]
        ))
        conn.commit()
        return cursor.lastrowid

def get_blog_posts(limit: int = 10, offset: int = 0, category: Optional[str] = None) -> List[Dict[str, Any]]:
    """Get list of blog posts with optional category filter"""
    with get_db() as conn:
        if category:
            posts = conn.execute('''
                SELECT * FROM blog_posts 
                WHERE published = 1 AND category = ?
                ORDER BY published_at DESC
                LIMIT ? OFFSET ?
            ''', (category, limit, offset)).fetchall()
        else:
            posts = conn.execute('''
                SELECT * FROM blog_posts 
                WHERE published = 1
                ORDER BY published_at DESC
                LIMIT ? OFFSET ?
            ''', (limit, offset)).fetchall()
        
        return [dict(post) for post in posts]

def get_blog_post_by_slug(slug: str) -> Optional[Dict[str, Any]]:
    """Get a single blog post by slug"""
    with get_db() as conn:
        post = conn.execute('''
            SELECT * FROM blog_posts 
            WHERE slug = ? AND published = 1
        ''', (slug,)).fetchone()
        
        return dict(post) if post else None

def get_blog_categories() -> List[str]:
    """Get all unique blog categories"""
    with get_db() as conn:
        categories = conn.execute('''
            SELECT DISTINCT category FROM blog_posts 
            WHERE published = 1
            ORDER BY category
        ''').fetchall()
        
        return [category[0] for category in categories]

def create_blog_post(post_data: Dict[str, Any]) -> Dict[str, Any]:
    """Create a new blog post"""
    with get_db() as conn:
        cursor = conn.execute('''
            INSERT INTO blog_posts (title, slug, excerpt, content, category, author, read_time)
            VALUES (?, ?, ?, ?, ?, ?, ?)
        ''', (
            post_data["title"],
            post_data["slug"],
            post_data["excerpt"],
            post_data["content"],
            post_data["category"],
            post_data["author"],
            post_data["read_time"]
        ))
        conn.commit()
        
        # Get the created post
        post = get_blog_post_by_slug(post_data["slug"])
        return post

def update_blog_post(slug: str, post_data: Dict[str, Any]) -> Optional[Dict[str, Any]]:
    """Update an existing blog post"""
    with get_db() as conn:
        # Update the post
        conn.execute('''
            UPDATE blog_posts 
            SET title = ?, slug = ?, excerpt = ?, content = ?, category = ?, author = ?, read_time = ?, updated_at = CURRENT_TIMESTAMP
            WHERE slug = ?
        ''', (
            post_data.get("title"),
            post_data.get("slug"),
            post_data.get("excerpt"),
            post_data.get("content"),
            post_data.get("category"),
            post_data.get("author"),
            post_data.get("read_time"),
            slug
        ))
        conn.commit()
        
        # Return the updated post
        return get_blog_post_by_slug(post_data.get("slug", slug))

def delete_blog_post(slug: str) -> bool:
    """Delete a blog post"""
    with get_db() as conn:
        cursor = conn.execute('DELETE FROM blog_posts WHERE slug = ?', (slug,))
        conn.commit()
        return cursor.rowcount > 0

def save_newsletter_subscriber(subscriber_data: Dict[str, Any]) -> None:
    """Save newsletter subscriber to database"""
    with get_db() as conn:
        conn.execute('''
            INSERT OR IGNORE INTO newsletter_subscribers (email, source)
            VALUES (?, ?)
        ''', (
            subscriber_data["email"],
            subscriber_data["source"]
        ))
        conn.commit()

def get_newsletter_subscriber(email: str) -> Optional[Dict[str, Any]]:
    """Get a newsletter subscriber by email"""
    with get_db() as conn:
        subscriber = conn.execute('''
            SELECT * FROM newsletter_subscribers 
            WHERE email = ?
        ''', (email,)).fetchone()
        
        return dict(subscriber) if subscriber else None