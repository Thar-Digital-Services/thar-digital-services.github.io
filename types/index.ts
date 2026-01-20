/**
 * TypeScript type definitions
 */

export interface Service {
  id: string;
  title: string;
  description: string;
  icon?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  expertise: string[];
  bio: string;
  image?: string;
  linkedin?: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  problem: string;
  solution: string;
  techStack: string[];
  outcomes: string[];
  image?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  message: string;
}
