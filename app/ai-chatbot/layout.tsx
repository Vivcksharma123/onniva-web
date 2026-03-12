import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Chatbot platform for Customer Support & Lead Generation | Oniva',
  description: 'Deploy an AI chatbot platform to automate customer support and capture leads 24/7. Oniva AI chatbot instantly answers questions, reduces support workload, and improves customer experience.',
};

const chatbotFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Do I need coding skills to use the AI chatbot?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. The AI chatbot is designed for non-technical users and can be installed easily on almost any website without coding knowledge."
      }
    },
    {
      "@type": "Question",
      "name": "Can it work 24/7?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. AI chatbots operate 24/7 and can handle customer queries at any time, ensuring that no website visitor goes unanswered."
      }
    },
    {
      "@type": "Question",
      "name": "Will it learn from my content?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. You can upload FAQs, documents, and other knowledge resources. The AI chatbot uses this information to deliver accurate and context-aware responses to users."
      }
    }
  ]
};

export default function chatbotLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>
    <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(chatbotFaqSchema) }}
    />
  {children}
  </>;
}
