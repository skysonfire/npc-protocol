# NPC Protocol Website

A professional agency website for NPC Protocol - a digital services company offering web development, AI automation, marketing, lead generation, courses, and consulting services.

## Project Structure

```
.
├── frontend/                 # Static frontend files
│   ├── index.html            # Home page
│   ├── services.html         # Services page
│   ├── courses.html          # Courses page
│   ├── blog.html             # Blog list page
│   ├── blog-post.html        # Individual blog post template
│   ├── contact.html          # Contact page
│   ├── css/                  # CSS files
│   │   ├── reset.css         # CSS reset
│   │   ├── variables.css     # CSS custom properties
│   │   ├── typography.css    # Typography styles
│   │   ├── components.css    # Component styles
│   │   └── main.css          # Main stylesheet
│   ├── js/                   # JavaScript files
│   │   ├── main.js           # Shared JS (nav, scroll animations)
│   │   ├── blog.js           # Blog post fetching and rendering
│   │   └── contact.js        # Contact form handling
│   └── assets/               # Images and icons
├── backend/                  # Python + FastAPI backend
│   ├── main.py               # Main application file
│   ├── requirements.txt      # Python dependencies
│   ├── .env.example          # Environment variables example
│   ├── routers/              # API route handlers
│   │   ├── contact.py        # Contact form endpoint
│   │   ├── blog.py           # Blog CRUD endpoints
│   │   └── newsletter.py     # Email capture endpoint
│   ├── models/               # Pydantic models
│   │   ├── contact.py        # Contact model
│   │   └── blog.py           # Blog post model
│   └── database/             # Database setup and operations
│       └── db.py             # SQLite via SQLAlchemy
├── netlify.toml              # Netlify deployment configuration
├── _redirects                 # Netlify redirects for SPA routing
└── README.md                 # This file
```

## Local Development

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install Python dependencies:
   ```bash
   pip install -r requirements.txt
   ```

3. Set up environment variables by copying `.env.example`:
   ```bash
   cp .env.example .env
   ```

4. Run the FastAPI development server:
   ```bash
   uvicorn main:app --reload
   ```

### Frontend

The frontend is static HTML/CSS/JS, so no build step is needed. Simply open `index.html` in a browser to view the site locally.

For local development with live reloading, you can use any local server. For example:
```bash
# Using Python's built-in HTTP server
cd frontend
python -m http.server 8000
```

## Deployment

This project is configured for deployment on Netlify. The `netlify.toml` file handles routing and security headers.

### Netlify Setup

1. Push your code to a Git repository (GitHub, GitLab, etc.)
2. Connect the repository to Netlify
3. Set environment variables in Netlify dashboard:
   - `DATABASE_URL`
   - `CORS_ORIGINS`
   - `CONTACT_EMAIL`

### Deployment Steps

1. Make sure all dependencies are installed
2. Push code to your Git repository
3. Netlify will automatically deploy when changes are pushed

## Future Enhancements

- Add Cloudflare for additional security and performance
- Configure custom domain
- Implement authentication system
- Add more advanced analytics