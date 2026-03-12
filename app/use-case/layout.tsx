import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Customer Support Use Cases | AI Chatbot & Automation Solutions – Oniva',
  description: 'Discover how businesses use Oniva AI automation for customer support, email responses, chatbots, and lead generation to improve efficiency and customer satisfaction.',
};

const useCasesFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What are use cases in Oniva?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Use cases show how businesses apply Oniva to solve real challenges, such as building websites, automating content creation, and streamlining workflows across teams."
      }
    },
    {
      "@type": "Question",
      name: "Who can use Oniva?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oniva is designed for startups, small businesses, agencies, and enterprises that want to create and manage professional websites without technical complexity."
      }
    },
    {
      "@type": "Question",
      name: "Do I need technical or coding skills?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Oniva is a no-code platform that uses AI to help you build, customize, and manage websites easily, even without prior technical or coding experience."
      }
    },
    {
      "@type": "Question",
      name: "Can Oniva support different industries?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Oniva adapts to a wide range of industries including marketing, finance, healthcare, education, and e-commerce, offering flexible layouts and AI-driven content generation."
      }
    },
    {
      "@type": "Question",
      name: "How does AI improve my website?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oniva’s AI helps generate website content, optimize page layouts, suggest improvements, and maintain consistency across your website, saving time and improving performance."
      }
    },
    {
      "@type": "Question",
      name: "Can I scale my website as my business grows?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Oniva allows you to scale your website by adding new pages, expanding features, updating content, and supporting additional business use cases as your company grows."
      }
    }
  ]
};

export default function UseCaseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(useCasesFaqSchema) }}
  />
  {children}
  </>;
}
