import Header from "../components/Header";
import Footer from "../components/Footer";
import ClientScripts from "../components/ClientScripts";
import Image from "next/image";
import Link from "next/link";

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Features - AI-Powered Communication Tools | Oniva',
  description: 'Explore Oniva\'s powerful features including AI chatbot, email automation, voice representatives, real-time analytics, and seamless integrations. Transform your customer engagement with intelligent AI tools.',
};


export default function UseCase() {
  const useCases = [
    {
      title: "Marketing Campaign Builder",
      icon: "marketing-ico.png",
      description: "Oniva helps businesses launch high impact marketing campaigns fast, creating AI-powered, SEO-optimized landing pages with templates and built-in tracking no developer needed.",
    },
    {
      title: "Financial Forecasting",
      icon: "financial-ico.png",
      description: "Oniva lets you build custom dashboards and reporting pages to track key metrics and share insights all no-code, for faster data-driven decisions.",
    },
    {
      title: "Creative Content Generation",
      icon: "content-ico.png",
      description: "Oniva’s AI quickly generates website copy, blogs, product descriptions, and CTAs all SEO-friendly and tailored to your brand voice.",
    },
    {
      title: "Customer Support Automation",
      icon: "ai-ico.png",
      description: "Oniva helps you create AI-powered support pages, FAQs, and resource centers that make it easy for customers to find answers and streamline interactions.",
    },
    {
      title: "HR Talent Acquisition",
      icon: "hr-ico.png",
      description: "Oniva lets you create branded HR and careers pages to showcase culture, list jobs, and attract top talent with easy updates and customizable forms.",
    },
    {
      title: "Product Development Insights",
      icon: "development-ico.png",
      description: "Oniva helps you create central insight pages for products and services, sharing updates, guides, and documentation to boost team collaboration and customer transparency.",
    },
  ];

  return (
    <>
      <Header />

      <main>
        {/* Banner */}
        <div className="inner-banner">
          <div className="slider-wrap">
            <div className="text">
              <h1>Features</h1>
              <p>Turn conversations into actionable insights. Oniva makes it easy to analyze calls, transcripts, and data in real time helping your team make smarter decisions faster.

</p>
              <div className="default_btn">
                <Link href="https://app.oniva.app/" target="_blank">Get started now</Link>
              </div>
            </div>
          </div>
          <canvas id="canvas"></canvas>
        </div>

        {/* Use Cases */}
        <section className="cases-sec black_bg pt-100">
          <div className="container">
            <div className="row">
              {useCases.map((item, index) => (
                <div className="col-md-4 col-sm-6" key={index}>
                  <div className="serv-box">
                    <div className="img">
                      <Image
                        src={`/img/${item.icon}`}
                        alt={item.title}
                        width={80}
                        height={80}
                        className="img-responsive"
                      />
                    </div>
                    <div className="text">
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                      <div className="default_btn">
                        <Link href="/features">Read more</Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="sec_group">
          <section className="ctaSec2">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="text text-center">
                    <h2>Ready to see Oniva in action?</h2>
                    <h4>Discover how AI can simplify your digital presence.</h4>
                    <div className="default_btn">
                      <Link href="/contact">Contact us now</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="bgParticles">
            <div
              className="geometric-background"
              id="geometric-background"
            ></div>
            <div className="particles" id="particles"></div>
          </div>
        </div>

        {/* FAQ */}
        <section className="faq-sec">
          <div className="container">
            <div className="row">
              <div className="col-md-10 col-md-offset-1 text-center">
                <div className="heading">
                  <h2>Frequently Asked Questions</h2>
                  <p>Oniva is a powerful conversation intelligence platform designed to help businesses analyze, summarize, and act on communication data with confidence.</p>
                </div>
                <div className="faq_main">
                  <div className="faq_row">
                    <div className="faq_question">
                        <div className="faq_question-text">
                            <h3>What is Oniva used for?</h3>
                        </div>
                        <div className="icon">
                            <div className="icon-shape"></div>
                        </div>
                    </div>
                    <div className="answercont">
                        <div className="answer">
                            <p>Oniva is a conversation intelligence platform that helps businesses analyze call recordings and transcripts. It transforms conversations into structured insights such as summaries, trends, and performance metrics.</p>
                        </div>
                    </div>
                  </div>
                  <div className="faq_row">
                    <div className="faq_question">
                        <div className="faq_question-text">
                            <h3>What types of files can I import into Oniva?</h3>
                        </div>
                        <div className="icon">
                            <div className="icon-shape"></div>
                        </div>
                    </div>
                    <div className="answercont">
                        <div className="answer">
                            <p>Oniva supports importing audio files, call recordings, and text transcripts from multiple sources. This allows teams to centralize conversation data in one secure platform.</p>
                        </div>
                    </div>
                  </div>
                  <div className="faq_row">
                    <div className="faq_question">
                        <div className="faq_question-text">
                            <h3>Does Oniva provide real-time transcription?</h3>
                        </div>
                        <div className="icon">
                            <div className="icon-shape"></div>
                        </div>
                    </div>
                    <div className="answercont">
                        <div className="answer">
                            <p>Yes, Oniva offers real-time or near-real-time transcription, enabling users to follow conversations as they happen and quickly capture key information.</p>
                        </div>
                    </div>
                  </div>
                  <div className="faq_row">
                    <div className="faq_question">
                        <div className="faq_question-text">
                            <h3>Can I customize dashboards and reports?</h3>
                        </div>
                        <div className="icon">
                            <div className="icon-shape"></div>
                        </div>
                    </div>
                    <div className="answercont">
                        <div className="answer">
                            <p>Absolutely. Oniva allows full customization of dashboards, filters, and reports so teams can focus on metrics and insights that matter most to their workflows.</p>
                        </div>
                    </div>
                  </div>
                  <div className="faq_row">
                    <div className="faq_question">
                        <div className="faq_question-text">
                            <h3>Is Oniva suitable for large teams or enterprises?</h3>
                        </div>
                        <div className="icon">
                            <div className="icon-shape"></div>
                        </div>
                    </div>
                    <div className="answercont">
                        <div className="answer">
                            <p>Yes. Oniva is built with scalability in mind and supports growing teams, multiple users, and high volumes of conversation data without performance issues.</p>
                        </div>
                    </div>
                  </div>
                  <div className="faq_row">
                    <div className="faq_question">
                        <div className="faq_question-text">
                            <h3>How secure is my data on Oniva?</h3>
                        </div>
                        <div className="icon">
                            <div className="icon-shape"></div>
                        </div>
                    </div>
                    <div className="answercont">
                        <div className="answer">
                            <p>Data security is a top priority. Oniva uses secure storage, access controls, and compliance-ready infrastructure to protect your recordings and transcripts.</p>
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
