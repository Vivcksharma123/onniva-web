import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Use Cases - Oniva | Real-World Applications & Solutions',
  description: 'Explore how Oniva streamlines processes and enhances engagement. Discover use cases including easy data import, customization, analytics, integrations, and more.',
};

export default function UseCaseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
