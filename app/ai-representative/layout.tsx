import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Representative for Customer Support | AI Virtual Agent – Oniva',
  description: 'Automate customer conversations with an AI representative. Oniva’s AI virtual agent answers questions, handles support requests, and provides instant assistance across chat and email.',
};

const representativeFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is an AI Representative?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "An AI Representative is a virtual agent powered by artificial intelligence that interacts with customers, answers questions, and performs routine support tasks automatically."
      }
    },
    {
      "@type": "Question",
      "name": "Can the AI work with my existing systems?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. The AI representative integrates easily with popular platforms including customer support tools, CRM systems, and communication apps."
      }
    },
    {
      "@type": "Question",
      "name": "Is it customizable?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely. You can customize the AI's responses, personality, and workflows so they align with your brand voice and customer experience."
      }
    },
    {
      "@type": "Question",
      "name": "Does it sound like a robot?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. The system uses advanced neural text-to-speech technology to deliver fluid, natural, and professional conversations that closely resemble human interaction."
      }
    }
  ]
};

export default function representativeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>
    <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(representativeFaqSchema) }}
    />
  {children}
  </>;
}
