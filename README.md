# NPC Protocol - Agency Delivery System

NPC Protocol is a reusable, production-grade base system for building client websites. This system provides a foundation that can be cloned and rebranded for each new client project.

## Stack
- Next.js 14+ (App Router), TypeScript
- Tailwind CSS with a strict token-based config — no arbitrary values allowed anywhere
- MDX for blog content (file-based, statically generated)
- Deploy target: Vercel

## Design Tokens

The system uses a comprehensive token-based design system with the following tokens:

### Color Palette
- `--brand` - Primary brand color
- `--brand-dark` - Darker variant of brand color
- `--accent` - Accent color for highlights
- `--surface` - Background surface color
- `--text-primary` - Primary text color
- `--text-secondary` - Secondary text color

### Typography
- `--font-heading` - Font family for headings
- `--font-body` - Font family for body text

### Spacing Scale
- `--spacing-xs` - Extra small spacing
- `--spacing-sm` - Small spacing
- `--spacing-md` - Medium spacing
- `--spacing-lg` - Large spacing
- `--spacing-xl` - Extra large spacing
- `--spacing-xxl` - Extra extra large spacing

### Radius Scale
- `--radius-sm` - Small border radius
- `--radius-md` - Medium border radius
- `--radius-lg` - Large border radius
- `--radius-full` - Full border radius (pill shape)

### Shadow Scale
- `--shadows-sm` - Small shadow
- `--shadows-md` - Medium shadow
- `--shadows-lg` - Large shadow

## Folder Structure

```
/app
  /page.tsx              → home
  /about/page.tsx
  /services/page.tsx
  /contact/page.tsx
  /blog/page.tsx          → blog index
  /blog/[slug]/page.tsx    → post template, generateStaticParams from /content/blog

/components
  /ui        → Button, Badge, Card, Input, Container — primitives, brand-agnostic
  /sections  → Hero, ServicesGrid, Testimonials, PricingTable, CTA, FAQ
  /layout    → Nav, Footer, PageWrapper
  /blog      → PostCard, PostLayout, BlogIndexGrid

/content/blog  → sample .mdx posts
/lib           → content loaders, utils

/content/client-config.ts  → client configuration file (swapped per client)
```

## Component Variants

All components are built with multiple structurally distinct variants to ensure no two clients in the same niche look identical:

### Hero: 3 variants
- Centered
- Split (image one side)
- Video-bg

### ServicesGrid: 2 variants
- Card grid
- Alternating rows

### Testimonials: 2 variants
- Carousel
- Grid

## Quality Standards

The system follows these quality standards:
- WCAG 2.1 AA accessibility: proper semantic HTML, ARIA where needed, full keyboard navigation, sufficient color contrast using only the token palette
- Responsive by default: mobile-first, test breakpoints at sm/md/lg/xl
- No layout shift, no unused CSS, optimize for Core Web Vitals
- Every component must render correctly with placeholder/empty data (no crashes on missing optional fields)

## Images

Placeholder image slots are included in Hero, Testimonials, and blog post templates with descriptive alt text.

## Usage

To create a new client site:
1. Clone this repository
2. Replace the `client-config.ts` file with client-specific configuration
3. Customize content as needed
4. Deploy to Vercel

## Client Configuration

The client configuration (`/content/client-config.ts`) contains all client-specific content and settings that will be used throughout the system.