// NPC Protocol - Client Configuration
// This file contains all client-specific content and settings
// Each client gets their own version of this file to rebrand the system

export const clientConfig = {
  // Branding
  brand: {
    name: "NPC Protocol",
    tagline: "Agency Delivery System",
    primaryColor: "#3B82F6", // blue-500
    secondaryColor: "#10B981", // emerald-500
    accentColor: "#F59E0B", // amber-500
  },

  // Typography
  fonts: {
    heading: "Inter, sans-serif",
    body: "Inter, sans-serif",
  },

  // Navigation
  nav: {
    logo: "NPC Protocol",
    links: [
      { name: "Home", href: "/" },
      { name: "About", href: "/about" },
      { name: "Services", href: "/services" },
      { name: "Contact", href: "/contact" },
      { name: "Blog", href: "/blog" },
    ],
  },

  // Home Page
  home: {
    hero: {
      title: "Build Faster, Deliver Better",
      subtitle: "The reusable system that powers our agency's client sites",
      cta: "Explore Our System",
    },
    services: {
      title: "Our Services",
      description: "How we help agencies deliver exceptional results",
    },
  },

  // About Page
  about: {
    hero: {
      title: "About NPC Protocol",
      subtitle: "The foundation of our agency's delivery system",
    },
    content: {
      title: "What We Do",
      description: "NPC Protocol is a reusable, production-grade base that every future client site gets cloned and rebranded from. It's designed to accelerate your development workflow while maintaining high quality standards.",
    },
  },

  // Services Page
  services: {
    hero: {
      title: "Our Services",
      subtitle: "Comprehensive solutions for modern agencies",
    },
    grid: {
      title: "Service Offerings",
      description: "We provide everything you need to succeed in the digital landscape.",
    },
  },

  // Contact Page
  contact: {
    hero: {
      title: "Get In Touch",
      subtitle: "Ready to start your next project?",
    },
    form: {
      name: "Name",
      email: "Email",
      message: "Message",
      submit: "Send Message",
    },
  },

  // Blog
  blog: {
    title: "Thought Leadership",
    description: "Insights from our team on the latest industry trends and best practices.",
  },

  // Footer
  footer: {
    copyright: "© 2026 NPC Protocol. All rights reserved.",
    links: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
    ],
  },
};