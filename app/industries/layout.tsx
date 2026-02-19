import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Industries - Oniva | Solutions for Finance, Healthcare, eCommerce & More',
  description: 'Discover how Oniva transforms industries with tailored technology solutions. Serving financial services, healthcare, manufacturing, eCommerce, government, and defense sectors.',
};

export default function IndustriesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
