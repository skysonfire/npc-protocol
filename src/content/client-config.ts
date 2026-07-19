// Client configuration file - this is swapped per client to rebrand the whole site.
// Every piece of client-facing copy, brand token, and content list lives here.
// Components must never hardcode copy; they only accept props sourced from this file.

export const clientConfig = {
  // Brand colors (mirrored in globals.css :root as the single source of truth for CSS)
  brand: "#16233d",
  brandDark: "#0a1220",
  accent: "#c17a3f",
  surface: "#fbfaf8",
  surfaceAlt: "#f1ede6",
  textPrimary: "#1c2027",
  textSecondary: "#5d6470",

  // Fonts
  fontHeading: "'Source Serif 4', Georgia, serif",
  fontBody: "'Work Sans', Helvetica, Arial, sans-serif",

  // Spacing scales
  spacingXS: "0.25rem",
  spacingSM: "0.5rem",
  spacingMD: "1rem",
  spacingLG: "1.5rem",
  spacingXL: "2rem",

  // Radius scales
  radiusSM: "0.25rem",
  radiusMD: "0.5rem",
  radiusLG: "1rem",

  // Shadow scales
  shadowSM: "0 1px 2px 0 rgba(22, 35, 61, 0.06)",
  shadowMD: "0 4px 10px -2px rgba(22, 35, 61, 0.10), 0 2px 4px -2px rgba(22, 35, 61, 0.06)",

  // Client-specific content
  companyName: "NPC Protocol",
  companyTagline: "Websites, Automation, and Marketing for Growing Businesses",
  companyDescription:
    "We build subscription-based websites, AI automation, and marketing systems for businesses that want to grow without hiring an in-house team.",

  // Navigation
  navLinks: [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ],

  // Hero section (home page)
  hero: {
    title: "Websites That Grow With Your Business",
    subtitle:
      "Subscription-based web design, AI automation, and marketing, built once and managed forever.",
    ctaText: "Get Started",
    ctaLink: "/contact",
    imageAlt: "Screenshot placeholder of a client dashboard showing site analytics and lead activity",
  },

  // Hero section (about page)
  aboutHero: {
    title: "About NPC Protocol",
    subtitle:
      "We build subscription-based websites, AI automation, and marketing systems for growing businesses.",
    ctaText: "See Our Services",
    ctaLink: "/services",
    imageAlt: "Placeholder portrait of the NPC Protocol founding team in a studio setting",
  },

  // Hero section (services page)
  servicesHero: {
    title: "Our Services",
    subtitle:
      "Subscription-based web design, AI automation, and marketing, built once and managed forever.",
    ctaText: "Get a Quote",
    ctaLink: "/contact",
    imageAlt: "Placeholder image of a services overview dashboard with pricing tiers",
  },

  // Hero section (contact page)
  contactHero: {
    title: "Get in Touch",
    subtitle: "Have questions about our services? We would love to hear from you.",
    ctaText: "View Pricing",
    ctaLink: "#pricing",
    imageAlt: "Placeholder image of a support team responding to client messages",
  },

  // About page content
  about: {
    missionTitle: "Our Mission",
    missionBody:
      "Small and mid-sized businesses deserve the same digital infrastructure that enterprise teams take for granted. NPC Protocol exists to close that gap with a system that ships fast and keeps improving long after launch.",
    values: [
      {
        title: "Built to Last",
        description: "Every site is production-grade from day one, not a disposable template.",
      },
      {
        title: "Managed, Not Abandoned",
        description: "We stay involved after launch through our subscription model, so the site keeps working for you.",
      },
      {
        title: "Data-Informed",
        description: "Automation and analytics are baked in, not bolted on as an afterthought.",
      },
    ],
  },

  // Services section
  services: {
    title: "Our Services",
    description: "Comprehensive digital solutions tailored to your business needs.",
    items: [
      {
        title: "Website Design",
        description: "Custom, subscription-based websites built to convert visitors into customers.",
        icon: "layout-template",
      },
      {
        title: "AI Automation",
        description: "Streamline operations with intelligent workflows that handle the repetitive work.",
        icon: "bot",
      },
      {
        title: "Marketing & Lead Gen",
        description: "Grow your pipeline with targeted campaigns built around real conversion data.",
        icon: "line-chart",
      },
    ],
  },

  // Testimonials section
  testimonials: {
    title: "What Our Clients Say",
    description: "Hear from agencies who have transformed their delivery process.",
    testimonials: [
      {
        name: "Priya Kandasamy",
        role: "Marketing Director",
        company: "Everline Logistics",
        content:
          "The team delivered beyond our expectations. Their attention to detail made all the difference in our launch.",
      },
      {
        name: "Marcus Ferreira",
        role: "Founder",
        company: "Cascade Fitness Studios",
        content:
          "Working with NPC Protocol changed how we think about our digital presence. The automation alone paid for the subscription.",
      },
      {
        name: "Devon Achebe",
        role: "Operations Lead",
        company: "Norwood & Finch",
        content:
          "Professional, responsive, and genuinely invested in our results. We have referred three other business owners already.",
      },
    ],
  },

  // Contact section
  contact: {
    title: "Get In Touch",
    description: "Ready to start your next project? We would love to hear from you.",
    formSuccessTitle: "Message Sent",
    formSuccessBody: "Thank you for reaching out. We will get back to you within one business day.",
  },

  // CTA banner (used on contact page and elsewhere)
  cta: {
    title: "Ready to Get Started?",
    description: "Contact us today for a free consultation and see how we can help your business grow.",
    buttonText: "Schedule a Call",
    buttonLink: "/contact",
  },

  // Pricing table
  pricing: {
    title: "Simple, Transparent Pricing",
    description: "Choose the plan that works best for you. All plans include our core features.",
    plans: [
      {
        name: "Starter",
        price: "$29",
        description: "Perfect for individuals and small projects.",
        features: ["Core website features", "Email support", "1GB storage", "Up to 5 pages"],
      },
      {
        name: "Professional",
        price: "$79",
        description: "Ideal for growing businesses.",
        features: [
          "Everything in Starter",
          "Priority support",
          "10GB storage",
          "Unlimited pages",
          "Marketing automation",
        ],
        isPopular: true,
      },
      {
        name: "Enterprise",
        price: "$199",
        description: "For larger organizations with custom needs.",
        features: [
          "Everything in Professional",
          "24/7 dedicated support",
          "50GB storage",
          "Unlimited pages",
          "Advanced analytics",
          "Custom integrations",
        ],
      },
    ],
  },

  // Footer section
  footer: {
    copyright: "\u00A9 2026 NPC Protocol. All rights reserved.",
  },
};

export type ClientConfig = typeof clientConfig;
