/**
 * SEO configuration helpers
 * Note: In Next.js App Router, we use the Metadata API instead of next-seo
 * This file contains helper functions and constants for SEO
 */

export const siteConfig = {
  name: 'Thar Digital Services',
  url: 'https://thardigital.in',
  description: 'Thar Digital Services helps ambitious startups and growing companies build, scale, and operate reliable software products with enterprise-level engineering teams.',
  ogImage: 'https://thardigital.in/images/logos/logo-dark.png',
  twitterHandle: '@thardigital', // TODO: Add actual Twitter handle
} as const;

/**
 * Generate page metadata
 */
export function generateMetadata({
  title,
  description,
  path = '',
}: {
  title: string;
  description?: string;
  path?: string;
}) {
  const fullTitle = title.includes('|') ? title : `${title} | Thar Digital Services`;
  const url = `${siteConfig.url}${path}`;

  return {
    title: fullTitle,
    description: description || siteConfig.description,
    openGraph: {
      title: fullTitle,
      description: description || siteConfig.description,
      url,
      siteName: siteConfig.name,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: siteConfig.name,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: description || siteConfig.description,
    },
  };
}
