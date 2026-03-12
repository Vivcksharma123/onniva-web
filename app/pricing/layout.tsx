import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Oniva Pricing | AI Chatbot & Customer Support Automation Plans",
  description: "View Oniva pricing plans for AI chatbots, AI email responders, and customer support automation. Choose a flexible plan to automate conversations and support.",
};

const pricingFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do I have to pay the $399 setup fee for each tool?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. The $399 setup fee covers your entire account ecosystem, including the initial configuration of your Voice, Email, and Chatbot tools."
      }
    },
    {
      "@type": "Question",
      name: "What happens if I run out of credits mid-month?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can enable Auto-Recharge to automatically add 2,000 credits when your balance reaches a set threshold, ensuring your AI Representative continues operating without interruption."
      }
    },
    {
      "@type": "Question",
      name: "Is there a limit to how many emails the AI Email Responder can handle?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Your 10,000 monthly credits allow the AI Email Responder to manage unlimited incoming and outgoing emails for that specific mailbox."
      }
    },
    {
      "@type": "Question",
      name: "Can I use my credits for just one tool?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The Unified Credit system provides flexibility. You can use all of your credits on one tool such as Voice calls in one month and shift usage to Chat or Email tools in another month."
      }
    }
  ]
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingFaqSchema) }}
      />
      {children}
    </>
  );
}
