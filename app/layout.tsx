import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { SITE_CONFIG } from '@/lib/constants';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://thardigital.in'),
  title: {
    default: 'Thar Digital Services | Enterprise Engineering Teams for Startups',
    template: '%s | Thar Digital Services',
  },
  description: 'Thar Digital Services helps ambitious startups and growing companies build, scale, and operate reliable software products with enterprise-level engineering teams.',
  keywords: [
    'dedicated engineering teams',
    'startup software development',
    'enterprise software development',
    'offshore engineering teams',
    'software development partner',
    'backend development',
    'cloud devops',
    'system architecture',
  ],
  authors: [{ name: 'Thar Digital Services' }],
  creator: 'Thar Digital Services',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://thardigital.in',
    siteName: 'Thar Digital Services',
    title: 'Thar Digital Services | Enterprise Engineering Teams for Startups',
    description: 'Enterprise-level engineering teams for ambitious startups and scale-ups.',
    images: [
      {
        url: 'https://thardigital.in/images/logos/logo-dark.png',
        width: 1200,
        height: 630,
        alt: 'Thar Digital Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Thar Digital Services | Enterprise Engineering Teams for Startups',
    description: 'Enterprise-level engineering teams for ambitious startups and scale-ups.',
    creator: '@thardigitalsvcs',
    site: '@thardigitalsvcs',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/images/logos/logo-red.png',
    apple: '/images/logos/logo-red.png',
    shortcut: '/images/logos/logo-red.png',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0A1A2E',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    logo: `${SITE_CONFIG.url}/images/logos/logo-dark.png`,
    description: SITE_CONFIG.description,
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${SITE_CONFIG.address.line1}, ${SITE_CONFIG.address.line2}, ${SITE_CONFIG.address.line3}`,
      addressLocality: SITE_CONFIG.address.city,
      addressRegion: SITE_CONFIG.address.state,
      postalCode: SITE_CONFIG.address.zip,
      addressCountry: SITE_CONFIG.address.country,
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: SITE_CONFIG.phone.replace(/\s/g, '-'),
      contactType: 'Customer Service',
      email: SITE_CONFIG.email,
      areaServed: 'Worldwide',
      availableLanguage: 'English',
    },
    sameAs: [
      SITE_CONFIG.linkedin,
      'https://x.com/thardigitalsvcs',
      'https://www.instagram.com/thar.digital/',
      'https://www.youtube.com/@TharDigitalServices',
      'https://github.com/Thar-Digital-Services',
    ],
  };

  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-background text-foreground">
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
