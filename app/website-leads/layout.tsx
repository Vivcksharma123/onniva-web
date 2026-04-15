import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Website Leads AI Chatbot for Customer Support & Lead Generation | Oniva',
  description: 'Deploy an AI chatbot for website leads to automate customer support and capture leads 24/7. Oniva AI chatbot instantly answers questions, reduces support workload, and improves customer experience.',
};

export default function websiteLeadsLayout({
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