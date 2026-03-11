import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Oniva | AI Customer Support Automation Platform',
  description: 'Contact the Oniva team to learn more about AI chatbots, AI email responders, and customer support automation. Get expert help to automate your business communication.',
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
