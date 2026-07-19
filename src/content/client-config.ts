// Client configuration file - this would be swapped per client
export const clientConfig = {
  // Brand colors
  brand: "#3B82F6",      // blue-500
  brandDark: "#1D4ED8",  // blue-700
  accent: "#10B981",     // emerald-500
  surface: "#FFFFFF",    // white
  textPrimary: "#1F2937", // gray-800
  textSecondary: "#6B7280", // gray-500
  
  // Fonts
  fontHeading: "Inter, sans-serif",
  fontBody: "Inter, sans-serif",
  
  // Spacing scales
  spacingXS: "0.25rem",
  spacingSM: "0.5rem",
  spacingMD: "1rem",
  spacingLG: "1.5rem",
  spacingXL: "2rem",
  
  // Radius scales
  radiusSM: "0.375rem",
  radiusMD: "0.5rem",
  radiusLG: "0.75rem",
  
  // Shadow scales
  shadowSM: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)",
  shadowMD: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
  
  // Client-specific content
  companyName: "NPC Protocol",
  companyTagline: "Next-Generation Digital Solutions",
  companyDescription: "We build cutting-edge digital experiences that transform businesses and engage audiences.",
  
  // Navigation
  navLinks: [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" }
  ],
  
  // Hero section
  hero: {
    title: "Transform Your Digital Presence",
    subtitle: "We create innovative solutions that drive growth and engagement",
    ctaText: "Get Started"
  },
  
   // Services section
   services: {
     title: "Our Services",
     description: "Comprehensive digital solutions tailored to your business needs",
     items: [
       {
         title: "Web Development",
         description: "Custom websites and web applications built with modern technologies",
         icon: "💻"
       },
       {
         title: "UI/UX Design",
         description: "User-centered design that creates engaging digital experiences",
         icon: "🎨"
       },
       {
         title: "Mobile Apps",
         description: "Cross-platform mobile applications for iOS and Android",
         icon: "📱"
       }
     ]
   },
  
   // Testimonials section
  testimonials: {
    title: "What Our Clients Say",
    description: "Hear from businesses we've helped transform",
    testimonials: [
      {
        name: "Sarah Johnson",
        role: "Marketing Director",
        company: "TechCorp",
        content: "The team delivered beyond our expectations. Their attention to detail and creative approach made all the difference."
      },
      {
        name: "Michael Chen",
        role: "CEO",
        company: "StartupXYZ",
        content: "Working with NPC Protocol was a game-changer for our digital presence. Highly recommended!"
      },
      {
        name: "Emily Rodriguez",
        role: "Product Manager",
        company: "InnovateInc",
        content: "Exceptional work and professional service throughout the entire project. Will definitely work together again."
      }
    ]
  },
  
  // Contact section
  contact: {
    title: "Get In Touch",
    description: "Ready to start your next project? We'd love to hear from you."
  },
  
  // Footer section
  footer: {
    copyright: "© 2026 NPC Protocol. All rights reserved."
  }
};
