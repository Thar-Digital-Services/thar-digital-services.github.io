/**
 * Site-wide constants and configuration
 */

export const SITE_CONFIG = {
  name: 'Thar Digital Services',
  tagline: 'Enterprise-level engineering teams for ambitious startups',
  description: 'Thar Digital Services helps ambitious startups and growing companies build, scale, and operate reliable software products with enterprise-level engineering teams.',
  url: 'https://thardigital.in',
  email: 'tech@thardigital.in',
  phone: '+91 90790 92676',
  address: {
    line1: 'H No. B-3-339',
    line2: 'Raj Mata Sudarshana Nagar',
    line3: 'Behind Nagnechi Ji Temple',
    city: 'Bikaner',
    state: 'Rajasthan',
    zip: '334001',
    country: 'India',
  },
  hours: 'Mon-Fri 9:00AM – 5:00PM',
  linkedin: 'https://www.linkedin.com/company/thar-digital-services/',
} as const;

export const SERVICES = [
  {
    id: 'dedicated-teams',
    title: 'Dedicated Engineering Teams',
    description: 'Long-term, integrated engineering teams that become an extension of your company.',
    icon: '👥',
  },
  {
    id: 'backend-api',
    title: 'Backend & API Development',
    description: 'Scalable, secure backend systems and RESTful/GraphQL APIs built with best practices.',
    icon: '⚙️',
  },
  {
    id: 'cloud-devops',
    title: 'Cloud & DevOps',
    description: 'AWS, GCP, and Azure infrastructure, CI/CD pipelines, and infrastructure as code.',
    icon: '☁️',
  },
  {
    id: 'frontend',
    title: 'Frontend Development',
    description: 'Modern web and mobile applications with React, Next.js, React Native, and Flutter.',
    icon: '💻',
  },
  {
    id: 'architecture',
    title: 'System Architecture & Scalability',
    description: 'Design and implement scalable, maintainable system architectures for growth.',
    icon: '🏗️',
  },
  {
    id: 'data-engineering',
    title: 'Data Engineering & Integrations',
    description: 'Data pipelines, ETL processes, and third-party API integrations.',
    icon: '📊',
  },
  {
    id: 'security',
    title: 'Security & Compliance',
    description: 'Security audits, compliance readiness (SOC 2, GDPR), and secure development practices.',
    icon: '🔒',
  },
] as const;

export const ENGAGEMENT_MODELS = [
  {
    title: 'Dedicated Teams',
    description: 'Long-term partnerships with dedicated engineers integrated into your workflow.',
  },
  {
    title: 'Project-Based Delivery',
    description: 'Fixed-scope projects with clear deliverables and timelines.',
  },
  {
    title: 'Long-Term Partnerships',
    description: 'Ongoing collaboration with flexible engagement models.',
  },
] as const;

// Navigation items
export const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
] as const;

// Social links (add more as needed)
export const SOCIAL_LINKS = {
  twitter: 'https://x.com/thardigitalsvcs',
  linkedin: 'https://www.linkedin.com/company/thar-digital-services/',
  instagram: 'https://www.instagram.com/thar.digital/',
  youtube: 'https://www.youtube.com/@TharDigitalServices',
  github: 'https://github.com/Thar-Digital-Services',
} as const;
