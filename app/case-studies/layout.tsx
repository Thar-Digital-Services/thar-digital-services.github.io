import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Case Studies',
  description: 'Real examples of how we help startups and scale-ups build, scale, and operate reliable software products.',
};

export default function CaseStudiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
