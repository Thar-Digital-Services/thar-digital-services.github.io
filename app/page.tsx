import { Metadata } from 'next';
import Script from 'next/script';
import Hero from '@/components/sections/Hero';
import ServicesSection from '@/components/sections/ServicesSection';
import WhyThar from '@/components/sections/WhyThar';
import EngagementModels from '@/components/sections/EngagementModels';
import CTA from '@/components/sections/CTA';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Enterprise-level engineering teams for ambitious startups and scale-ups. Build, scale, and operate reliable software products.',
  alternates: {
    canonical: 'https://thardigital.in',
  },
};

export default function HomePage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://thardigital.in',
      },
    ],
  };

  return (
    <>
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Hero />
      <ServicesSection />
      <WhyThar />
      <EngagementModels />
      <CTA />
    </>
  );
}
