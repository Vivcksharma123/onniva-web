import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Automation Solutions for Different Industries | Oniva AI',
  description: 'Explore AI chatbot and automation solutions for industries including SaaS, ecommerce, healthcare, and customer support. Oniva helps businesses scale support with AI.',
};

const industryFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What size organizations do you work with?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We work with organizations of all sizes, from startups and small businesses to large enterprises and Fortune 100 companies."
      }
    },
    {
      "@type": "Question",
      name: "Do you offer industry-specific consulting?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Our teams include specialists with deep industry expertise who provide consulting tailored to the unique needs of each sector."
      }
    },
    {
      "@type": "Question",
      name: "Is Oniva compliant with industry standards?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Oniva ensures its solutions align with major regulatory standards and frameworks such as HIPAA, PCI-DSS, GDPR, and other industry compliance requirements."
      }
    },
    {
      "@type": "Question",
      name: "What technologies do you work with?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We work with a wide range of modern technologies including cloud platforms, artificial intelligence and machine learning tools, automation frameworks, secure networking solutions, and modern software development stacks."
      }
    }
  ]
};

export default function IndustriesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>
  <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(industryFaqSchema) }}
      />
  {children}
  </>;
}
