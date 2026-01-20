import { Metadata } from 'next';
import ServicesContent from './ServicesContent';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Comprehensive engineering services: Dedicated teams, backend development, cloud & DevOps, frontend, system architecture, data engineering, and security.',
};

export default function ServicesPage() {
  return <ServicesContent />;
}
