import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'WhatsApp AI Agent for Customer Support & Lead Generation | Oniva',
  description: 'Automate WhatsApp conversations with Oniva AI Agent. Capture leads, respond instantly, and manage customer chats in real time through a unified dashboard and mobile app.',
};

export default function whatsappAgentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
    </>
  );
}