import { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import ServicesSection from '@/components/sections/ServicesSection';
import WhyThar from '@/components/sections/WhyThar';
import EngagementModels from '@/components/sections/EngagementModels';
import CTA from '@/components/sections/CTA';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Enterprise-level engineering teams for ambitious startups and scale-ups. Build, scale, and operate reliable software products.',
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <WhyThar />
      <EngagementModels />
      <CTA />
    </>
  );
}
