import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Legal Notice',
  description: 'Legal Notice for Thar Digital Services',
};

export default function LegalNoticeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
