import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Oniva Pricing | AI Chatbot & Customer Support Automation Plans",
  description: "View Oniva pricing plans for AI chatbots, AI email responders, and customer support automation. Choose a flexible plan to automate conversations and support.",
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
