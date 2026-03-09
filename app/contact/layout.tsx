import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us - Oniva | Get in Touch with Our Team',
  description: 'Contact Oniva for support, inquiries, or business opportunities. Reach out to our team via email at support@oniva.app or call us at +1 (506)901 5682',
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
