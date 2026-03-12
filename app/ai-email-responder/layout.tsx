
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Email Responder | Automatically Reply to Emails with AI – Oniva',
  description: 'Use Oniva’s AI email responder to automatically reply to customer emails, reduce response time, and streamline support. Smart AI automation for inbox management.',
};

const emailResponderFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What makes this more than a traditional auto-responder?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Modern AI responders understand the meaning and context of messages instead of relying on static trigger-based replies. This allows them to deliver more relevant, accurate, and personalized responses to customer emails."
      }
    },
    {
      "@type": "Question",
      "name": "Can I review replies before they’re sent?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. You can choose between fully automated email responses or draft generation mode where replies are created by AI and reviewed manually before sending."
      }
    },
    {
      "@type": "Question",
      "name": "Will it work with my current email service (Gmail, Outlook, etc.)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. AI email responders typically integrate with popular email platforms such as Gmail and Outlook, allowing you to automate responses without changing your existing inbox."
      }
    }
  ]
};

export default function emailResponderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>
    <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(emailResponderFaqSchema) }}
    />
  {children}
  </>;
}
