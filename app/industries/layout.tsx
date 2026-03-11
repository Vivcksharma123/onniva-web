import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Automation Solutions for Different Industries | Oniva AI',
  description: 'Explore AI chatbot and automation solutions for industries including SaaS, ecommerce, healthcare, and customer support. Oniva helps businesses scale support with AI.',
};

export default function IndustriesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
