import Header from "./components/Header";
import Footer from "./components/Footer";
import ClientScripts from "./components/ClientScripts";
import Image from "next/image";
import Link from "next/link";

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Automation Platform | AI Chatbot & Email Responder – Oniva',
  description: 'Oniva is an AI-powered automation platform offering AI chatbots, AI email responders, and AI representatives to automate conversations, respond instantly, and improve customer experience.',
};


export default function Home() {
  return (
    <>
      <Header />
      <main>
        <div id="home-slider">
          <div className="slider-wrap">
            <div className="text">
              <h1>
                <span>AI-Driven Call, Chat & Email Automation for Smarter Customer Engagement</span>
              </h1>
              <div><p>Automate responses, streamline support, and boost conversions with intelligent AI Call, chat and email assistants no coding required.</p></div>
              <div className="default_btn">
                <a href="https://app.oniva.app/" target="_blank">get started now</a>
              </div>
            </div>
          </div>
          <div className="parallax">
            <div className="foreground">
              <Image src="/img/robot.png" alt="Robot" width={500} height={500} />
            </div>
          </div>
        </div>

        <section className="aboutUs-sec">
          <div className="slider-wrap">
            <div className="imgBox">
              <Image src="/img/about-img.webp" alt="About" className="img-responsive" width={600} height={400} />
            </div>
            <div className="text">
              <div className="text-wrap">
                <div className="heading">
                  <h5>About Us</h5>
                  <h2>Who We Are</h2>
                </div>
                <p>Oniva is empowering businesses with intelligent conversational AI that understands customer needs and delivers instant, accurate responses. Built for small teams to enterprise brands, our mission is to make customer engagement effortless and efficient.</p>
                <p>From AI-powered live chat to automated email response workflows, Oniva combines powerful machine learning with intuitive design to transform how you communicate with users.</p>
                <ul>
                  <li><a href="/ai-representative"><Image src="/img/icon-1.png" alt="" width={30} height={30} />AI Representative</a></li>
                  <li><a href="/ai-chatbot"><Image src="/img/chat-ico.png" alt="" width={30} height={30} />AI Chatbot</a></li>
                  <li><a href="/ai-email-responder"><Image src="/img/email-ico.png" alt="" width={30} height={30} />AI Email Responder</a></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="serv-sec black_bg">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="heading">
                  <h2>Our Solution</h2>
                  <p>Oniva delivers seamless AI communication tools that adapt to your business style and customer expectations. Whether you’re converting website visitors or handling support emails, our AI works 24/7 to improve experience and outcomes.</p>
                  <p>Every interaction becomes smarter over time, leveraging machine learning to refine answers, suggestions, and responses  reducing workload and increasing satisfaction.</p>
                </div>
              </div>
              <div className="col-md-4 col-sm-12">
                <div className="serv-box">
                  <div className="img">
                    <Image src="/img/ai-ico.png" alt="AI" className="img-responsive" width={50} height={50} />
                  </div>
                  <div className="text">
                    <h3>AI Representative</h3>
                    <p>Your AI-powered virtual agent that engages visitors, answers product questions, and guides users through funnels in real time.</p>
                    <div className="default_btn">
                      <a href="/ai-representative">Read more</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-12">
                <div className="serv-box">
                  <div className="img">
                    <Image src="/img/aiChatbot-ico.png" alt="Chatbot" className="img-responsive" width={50} height={50} />
                  </div>
                  <div className="text">
                    <h3>AI Chatbot</h3>
                    <p>Deploy a smart conversational assistant on your website or app that understands context and delivers helpful, human like responses.</p>
                    <div className="default_btn">
                      <a href="/ai-chatbot">Read more</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-12">
                <div className="serv-box">
                  <div className="img">
                    <Image src="/img/aiEmail-ico.png" alt="Email" className="img-responsive" width={50} height={50} />
                  </div>
                  <div className="text">
                    <h3>AI Email Responder</h3>
                    <p>Automate email replies with personalized, on brand responses that keep customers engaged without manual effort.</p>
                    <div className="default_btn">
                      <a href="/ai-email-responder">Read more</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="ctaSec">
          <div className="sec-wrap">
            <h2>Ready to see Oniva in action?</h2>
            <p>Our experts will help you tailor Oniva to your business needs and answer any questions in real time.</p>
            <div className="default_btn2">
              <a href="https://app.oniva.app/" target="_blank">get started now</a>
            </div>
          </div>
          <svg width="100%" id="wave_svg" viewBox="0 10 500 5">
            <defs>
              <linearGradient id="gradient_svg" x1="70%" y1="70%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#2e03a6" />
                <stop offset="50%" stopColor="#c025ff" />
                <stop offset="100%" stopColor="#ff049f" />
              </linearGradient>
            </defs>
          </svg>
        </section>

        <div className="sec_group">
          <div className="lines">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
          <section className="Feature-sec">
            <div className="container">
              <div className="row">
                <div className="col-md-8">
                  <div className="heading">
                    <h2>Key Feature</h2>
                    <p>Explore Oniva’s core features, each designed to automate customer engagement with AI-powered chat, email, and virtual assistance.</p>
                  </div>
                </div>
                <div className="col-md-12">
                  <div id="FeatureSlider" className="owl-carousel owl-theme">
                    {[1, 2, 3, 1, 2].map((num, idx) => (
                      <div className="item" key={idx}>
                        <div className="feature-box">
                          <a href="#">
                            <div className="img">
                              <Image src={`/img/featureimg-${num}.webp`} alt="Feature" className="img-responsive" width={300} height={200} />
                            </div>
                            <div className="text">
                              <h4>{num === 1 ? 'Phone Call Analytics' : num === 2 ? 'Case Summary' : 'Real-Time Case Transcripts'}</h4>
                              <p>{num === 1 ? 'Oniva empowers teams with powerful call analytics to understand conversations beyond the words spoken. Track sentiment, call duration, keywords, and emerging conversation trends to gain actionable insights into communication performance.' : num === 2 ? 'Oniva provides live or near-real-time transcripts during active calls, allowing teams to follow conversations as they happen. This real-time visibility improves understanding, reduces miscommunication, and supports faster, more confident decision-making.' : 'Oniva automatically transforms long and complex conversations into concise, easy-to-read case summaries. Instead of reviewing full call recordings or lengthy transcripts, teams can quickly understand the context, outcomes, and next steps at a glance.'}</p>
                            </div>
                            
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="SuccessStories-sec">
            <div className="container">
              <div className="row">
                <div className="col-md-8">
                  <div className="heading">
                    <h2>Success Stories</h2>
                  </div>
                </div>
                <div className="col-md-12">
                  <div id="StoriesSlides" className="owl-carousel owl-theme">
                    <div className="item">
                        <div className="testimonial-bx">
                          <div className="rating"></div>
                          <p>After deploying the AI chat widget on our website, we experienced a 35% increase in lead conversions within the first two months. 
          The chatbot instantly engages visitors, qualifies prospects, and routes high-intent inquiries directly to our sales team. 
          It works 24/7, ensuring we never miss an opportunity even outside business hours.</p>
                          <h4>Marketing Director</h4>
                            
                        </div>
                    </div>
                    <div className="item">
                        <div className="testimonial-bx">
                          <div className="rating"></div>
                          <p>The AI Email Responder completely transformed how we manage customer communication. It automatically categorizes, prioritizes, and responds to hundreds of daily inquiries with accurate, human-like replies. Our team now focuses on strategic growth instead of repetitive emails, and our response time has improved dramatically.</p>
                          <h4>E-Commerce Founder</h4>
                            
                        </div>
                    </div>
                    <div className="item">
                        <div className="testimonial-bx">
                          <div className="rating"></div>
                          <p>Oniva’s AI solution streamlined our entire customer support process. We reduced response times by over 50% and significantly increased customer satisfaction scores. The system handles FAQs, appointment scheduling, and common troubleshooting instantly, allowing our support agents to concentrate on complex cases.</p>
                          <h4>Support Manager</h4>
                            
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="faqSec-group">
          <section className="ctaSec2">
            <div className="container">
              <div className="row">
                <div className="col-md-8">
                  <div className="text">
                    <h2>We’re here to help</h2>
                    <h4>For any inquiries or to place an order, please contact us</h4>
                    <div className="default_btn">
                      <a href="/contact">Contact us now</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="faq-sec">
            <div className="container">
              <div className="row">
                <div className="col-md-8">
                  <div className="heading">
                    <h2>Frequently Asked Questions</h2>
                    <p>Find quick answers to common questions about Oniva’s AI tools, setup, and integrations.</p>
                  </div>
                  <div className="faq_main">
                      <div className="faq_row">
                        <div className="faq_question">
                          <div className="faq_question-text">
                            <h3>Do I need coding skills to use Oniva?</h3>
                          </div>
                          <div className="icon">
                            <div className="icon-shape"></div>
                          </div>
                        </div>
                        <div className="answercont">
                          <div className="answer">
                            <p>No, Oniva's interface is intuitive and no code is required to launch AI assistants.</p>
                          </div>
                        </div>
                      </div>
                      <div className="faq_row">
                        <div className="faq_question">
                          <div className="faq_question-text">
                            <h3>Can I customize the AI's tone and style?</h3>
                          </div>
                          <div className="icon">
                            <div className="icon-shape"></div>
                          </div>
                        </div>
                        <div className="answercont">
                          <div className="answer">
                            <p>Yes, you can tailor responses to match your brand voice and messaging.</p>
                          </div>
                        </div>
                      </div>
                      <div className="faq_row">
                        <div className="faq_question">
                          <div className="faq_question-text">
                            <h3>What platforms does Oniva integrate with?</h3>
                          </div>
                          <div className="icon">
                            <div className="icon-shape"></div>
                          </div>
                        </div>
                        <div className="answercont">
                          <div className="answer">
                            <p>Oniva integrates with most CRM systems, email platforms, and website builders via API and plugins.</p>
                          </div>
                        </div>
                      </div>
                      <div className="faq_row">
                        <div className="faq_question">
                          <div className="faq_question-text">
                            <h3>Is my data secure?</h3>
                          </div>
                          <div className="icon">
                            <div className="icon-shape"></div>
                          </div>
                        </div>
                        <div className="answercont">
                          <div className="answer">
                            <p>Yes, we follow industry best practices for data protection, encryption, and privacy compliance.</p>
                          </div>
                        </div>
                      </div>
                      <div className="faq_row">
                        <div className="faq_question">
                          <div className="faq_question-text">
                            <h3>Is there customer support?</h3>
                          </div>
                          <div className="icon">
                            <div className="icon-shape"></div>
                          </div>
                        </div>
                        <div className="answercont">
                          <div className="answer">
                            <p>Absolutely, live support and onboarding help are available for all plans.</p>
                          </div>
                        </div>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
      <ClientScripts />
    </>
  );
}
