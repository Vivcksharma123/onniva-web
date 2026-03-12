import Header from "../components/Header";
import Footer from "../components/Footer";
import ClientScripts from "../components/ClientScripts";
import Image from "next/image";
import Script from "next/script";
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

export default function AIchatbot() {
  return (
    <>
      <Script
        id="ai-chatbot-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(chatbotFaqSchema),
        }}
      />
      <Header />
      <main>
        <div className="inner-banner">
          <div className="slider-wrap">
            <div className="text">
              <h1>AI Chatbot</h1>
              <p>Transform your website engagement with an AI Chatbot that responds instantly, captures leads, and provides 24/7 support all powered by advanced artificial intelligence. It improves customer interaction, automates responses, and helps you convert visitors into customers without human intervention.</p>
              <div className="default_btn">
                <a href="https://app.oniva.app/" target="_blank">get started now</a>
              </div>
            </div>
          </div>
          <canvas id="canvas"></canvas>
        </div>

        <section className="solutionIntro-sec">
          <div className="slider-wrap">
            <div className="imgBox">
              <Image src="/img/solution-intro-1.jpg" alt="Solution" className="img-responsive" width={600} height={400} />
            </div>
            <div className="text">
              <div className="text-wrap">
                <p>An AI Chatbot is an intelligent virtual assistant that uses advanced natural language processing (NLP) and machine learning to understand user intent and respond in real time. It analyzes conversations to deliver accurate, human-like replies, making interactions smooth and intuitive for website visitors.</p>
                <p>The chatbot can handle common inquiries, guide users through services or products, and automatically collect important information such as contact details or requirements. Available 24/7, it ensures consistent support, reduces manual workload, and continuously improves through learning helping businesses enhance engagement and scale efficiently.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="solutionContent pt-100">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="img-box">
                  <Image src="/img/chatboat-img-1.jpg" alt="Solution" className="img-responsive" width={1200} height={600} />
                </div>
              </div>
              <div className="col-sm-6">
                <h2>Key Features</h2>
                <ul className="list">
                  <li>24/7 Customer Support</li>
                  <li>Human-Like Conversations</li>
                  <li>Lead Capture & Engagement</li>
                  <li>Easy Integration</li>
                  <li>Knowledge-Driven Responses</li>
                </ul>
                <div className="default_btn">
                  <a href="/contact">get started now</a>
                </div>
                <br />
                <div className="small-img">
                  <Image src="/img/chatboat-img-2.jpg" alt="Solution" width={400} height={300} />
                </div>
              </div>
              <div className="col-sm-6">
                <h3><strong>Why Use an AI Chatbot?</strong></h3>
                <p>An AI Chatbot helps businesses engage website visitors instantly by providing fast, accurate, and consistent responses around the clock. Instead of making users wait for human support, the chatbot answers common questions, guides visitors to the right information, and ensures no inquiry goes unanswered — improving overall customer satisfaction.</p>
                <p>By automating repetitive conversations, an AI Chatbot reduces support workload and operational costs while allowing your team to focus on high-value tasks. It can capture leads, qualify prospects, and assist users throughout their journey, helping businesses increase conversions and improve response efficiency.</p>
                <p>With intelligent learning capabilities, the AI Chatbot continuously improves by understanding user intent and adapting to customer behavior. This results in smarter conversations, better engagement, and a scalable solution that grows with your business without requiring additional staff.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="advantage-sec black_bg">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="content">
                  <h2>How the AI Chatbot Operates</h2>
                  <p>The AI Chatbot begins by learning from your business content, including FAQs, product details, service pages, and support documents. This training allows the chatbot to understand your offerings, brand tone, and common customer questions, ensuring it delivers accurate and relevant responses.</p>
                  <blockquote><p>When a visitor starts a conversation, the chatbot uses natural language processing (NLP) to analyze the user’s message and identify intent. Based on this understanding, it instantly provides the most appropriate answer, guides the user to relevant pages, or asks follow-up questions to gather more information.</p></blockquote>
                  <p>As conversations continue, the AI Chatbot improves through continuous learning and performance insights. It tracks interactions, identifies common queries, and refines responses over time. This ensures smarter conversations, better engagement, and consistent support — all while operating 24/7 without human intervention.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="faq-sec">
          <div className="container">
            <div className="row">
              <div className="col-md-10 col-md-offset-1 text-center">
                <div className="heading">
                  <h2>Frequently Asked Questions</h2>
                  <p>Find quick answers to common questions about our AI Chatbot, including setup, features, and usage. This section helps you understand how the chatbot works and how it can support your business effectively.</p>
                </div>
                <div className="faq_main">
                  <div className="faq_row">
                    <div className="faq_question">
                      <div className="faq_question-text">
                        <h3>Do I need coding skills to use the AI chatbot?</h3>
                      </div>
                      <div className="icon">
                        <div className="icon-shape"></div>
                      </div>
                    </div>
                    <div className="answercont">
                      <div className="answer">
                        <p>No. It’s designed for non-technical users and installs easily on any website.</p>
                      </div>
                    </div>
                  </div>
                  <div className="faq_row">
                    <div className="faq_question">
                      <div className="faq_question-text">
                        <h3>Can it work 24/7?</h3>
                      </div>
                      <div className="icon">
                        <div className="icon-shape"></div>
                      </div>
                    </div>
                    <div className="answercont">
                      <div className="answer">
                        <p>Yes, AI chatbots never sleep and can handle queries any time, ensuring no visitor goes unanswered.</p>
                      </div>
                    </div>
                  </div>
                  <div className="faq_row">
                    <div className="faq_question">
                      <div className="faq_question-text">
                        <h3>Will it learn from my content?</h3>
                      </div>
                      <div className="icon">
                        <div className="icon-shape"></div>
                      </div>
                    </div>
                    <div className="answercont">
                      <div className="answer">
                        <p>Yes, upload your FAQs and key documents and the AI uses them to give accurate, context-aware</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ClientScripts />
    </>
  );
}
