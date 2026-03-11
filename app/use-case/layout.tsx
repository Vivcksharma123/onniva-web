import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Customer Support Use Cases | AI Chatbot & Automation Solutions – Oniva',
  description: 'Discover how businesses use Oniva AI automation for customer support, email responses, chatbots, and lead generation to improve efficiency and customer satisfaction.',
};

export default function UseCaseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
