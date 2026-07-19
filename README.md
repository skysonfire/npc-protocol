# NPC Protocol - Agency Delivery System

NPC Protocol is a production-grade, reusable foundation for client websites. This system provides a complete component library and site scaffold that can be cloned and rebranded for every new client project.

## Stack

- **Next.js 14+** (App Router)
- **TypeScript**
- **Tailwind CSS** with strict token-based configuration
- **MDX** for blog content (file-based, statically generated)
- **Deploy target**: Vercel

## Design Tokens

The system uses a strict token-based configuration for all brand-swappable values:

```css
/* CSS Custom Properties */
--brand: #3b82f6;
--brand-dark: #1d4ed8;
--accent: #10b981;
--surface: #ffffff;
--text-primary: #111827;
--text-secondary: #6b7280;

--font-heading: 'Inter', system-ui, sans-serif;
--font-body: 'Inter', system-ui, sans-serif;

/* Spacing Scale */
--spacing-xs: 0.25rem;
--spacing-sm: 0.5rem;
--spacing-md: 1rem;
--spacing-lg: 1.5rem;
--spacing-xl: 2rem;
--spacing-2xl: 3rem;
--spacing-3xl: 4rem;

/* Radius Scale */
--radius-sm: 0.25rem;
--radius-md: 0.5rem;
--radius-lg: 1rem;
--radius-full: 9999px;

/* Shadow Scale */
--shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
--shadow-md: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
--shadow-lg: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
```

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
```

## Component Variants

All components are built with multiple structurally distinct variants to ensure client sites don't look identical:

### Hero: 3 variants
- **centered**: Centered content with brand-aligned styling
- **split**: Content on one side, image/visual on the other
- **video-bg**: Video background with overlay content

### ServicesGrid: 2 variants
- **card grid**: Traditional card-based layout
- **alternating rows**: Alternating row colors for visual interest

### Testimonials: 2 variants
- **carousel**: Single testimonial with navigation dots
- **grid**: Multiple testimonials in a responsive grid

## Quality Standards

The system adheres to strict quality requirements:

### Accessibility
- WCAG 2.1 AA compliance
- Proper semantic HTML
- ARIA attributes where needed
- Full keyboard navigation support
- Sufficient color contrast using only token palette

### Responsive Design
- Mobile-first approach
- Tested at sm/md/lg/xl breakpoints
- No layout shift
- Optimized for Core Web Vitals

### Code Quality
- Every component renders correctly with placeholder/empty data
- No hardcoded content in components
- No arbitrary Tailwind values or inline styles
- Type-safe TypeScript implementation

## Client Configuration

All client-specific content flows through a single configuration file:

```typescript
// /content/client-config.ts
export const clientConfig = {
  brand: {
    name: "NPC Protocol",
    primaryColor: "#3b82f6",
    secondaryColor: "#1d4ed8",
  },
  // ... other configuration values
};
```

## Usage

To create a new client site:
1. Clone this repository
2. Replace the content of `/content/client-config.ts` with the client's brand values
3. Customize any component props as needed for specific pages
4. Deploy to Vercel

## Development

### Running Locally
```bash
npm run dev
```

### Building for Production
```bash
npm run build
```

### Testing
```bash
npm run test