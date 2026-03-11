import Header from "../components/Header";
import Footer from "../components/Footer";
import ClientScripts from "../components/ClientScripts";
import Image from "next/image";

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Email Responder | Automatically Reply to Emails with AI – Oniva',
  description: 'Use Oniva’s AI email responder to automatically reply to customer emails, reduce response time, and streamline support. Smart AI automation for inbox management.',
};

export default function AIemail() {
  return (
    <>
      <Header />
      <main>
        <div className="inner-banner">
          <div className="slider-wrap">
            <div className="text">
              <h1>AI Email Responder</h1>
              <p>Automate email responses with intelligent AI that understands intent, replies instantly, and keeps your communication consistent and professional.</p>
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
              <Image src="/img/Email-Responder-intro.jpg" alt="Solution" className="img-responsive" width={600} height={400} />
            </div>
            <div className="text">
              <div className="text-wrap">
                <p><strong>Streamline your communication:</strong> the Oniva AI Email Responder uses artificial intelligence to read, understand, and reply to incoming emails automatically turning manual inbox work into a fully automated workflow.</p>
                <p>Whether you’re running customer support, sales inquiries, or internal email flows, this smart system helps you respond faster, reduce repetitive work, and keep your communication timely and professional.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="solutionContent pt-100">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="img-box">
                  <Image src="/img/Email-Responder-img-1.jpg" alt="Solution" className="img-responsive" width={1200} height={600} />
                </div>
              </div>
              <div className="col-sm-6">
                <h2>Key Features</h2>
                <ul className="list">
                  <li>Save Time & Improve Efficiency</li>
                  <li>Faster Response Times</li>
                  <li>Professional & Personalized Replies</li>
                  <li>24/7 Email Handling</li>
                </ul>
                <div className="default_btn">
                  <a href="/contact">get started now</a>
                </div>
                <br />
                <div className="small-img">
                  <Image src="/img/Email-Responder-img-2.jpg" alt="Solution" width={400} height={300} />
                </div>
              </div>
              <div className="col-sm-6">
                <h3><strong>Why Use an AI Email Responder?</strong></h3>
                <p>Managing high volumes of emails manually can slow down operations and lead to delayed or inconsistent responses. An AI Email Responder eliminates these challenges by automating routine communication while maintaining accuracy and a human-like tone. It ensures every email is acknowledged promptly, improving customer satisfaction and trust.</p>
                <p>By handling repetitive inquiries such as support questions, appointment requests, and general information emails, the AI significantly reduces workload for teams. This allows staff to focus on more complex and strategic tasks, increasing productivity without increasing headcount.</p>
                <p>An AI Email Responder also delivers consistent, on-brand communication 24/7. It works around the clock, adapts to different inquiry types, and scales effortlessly as your business grows—making it a reliable solution for faster, smarter, and more efficient email management.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="advantage-sec black_bg">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="content">
                  <h2>How the AI Email Responder Works</h2>
                  <p>The Oniva AI Email Responder continuously monitors your inbox and processes incoming emails in real time using advanced artificial intelligence and natural language processing. It understands the context, intent, and urgency of each message rather than relying on simple keyword detection, allowing it to accurately interpret customer needs and requests.</p>
                  <blockquote><p>Once an email is analyzed, the system automatically categorizes the inquiry and retrieves relevant information from your knowledge base, FAQs, or predefined workflows. Using this data, it generates a clear, human-like response that follows your brand tone and communication guidelines, ensuring every reply remains professional, consistent, and personalized.</p></blockquote>
                  <p>For routine and repetitive inquiries, responses are sent instantly without human intervention. More complex, sensitive, or high-priority emails are intelligently routed to your team for review or follow-up. Over time, the AI learns from interactions and feedback, continuously improving response accuracy, efficiency, and overall email communication quality.</p>
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
                  <p>Find quick answers to common questions about how the AI Email Responder works, its features, integrations, security, and how it helps automate and improve email communication for your business.</p>
                </div>
                <div className="faq_main">
                  <div className="faq_row">
                    <div className="faq_question">
                      <div className="faq_question-text">
                        <h3>What makes this more than a traditional auto‑responder?</h3>
                      </div>
                      <div className="icon">
                        <div className="icon-shape"></div>
                      </div>
                    </div>
                    <div className="answercont">
                      <div className="answer">
                        <p>Modern AI responders understand meaning and context not just trigger static replies leading to relevant, accurate, and personalized responses.</p>
                      </div>
                    </div>
                  </div>
                  <div className="faq_row">
                    <div className="faq_question">
                      <div className="faq_question-text">
                        <h3>Can I review replies before they’re sent?</h3>
                      </div>
                      <div className="icon">
                        <div className="icon-shape"></div>
                      </div>
                    </div>
                    <div className="answercont">
                      <div className="answer">
                        <p>Yes, you can choose between fully automatic responses or draft generation that you approve manually.</p>
                      </div>
                    </div>
                  </div>
                  <div className="faq_row">
                    <div className="faq_question">
                      <div className="faq_question-text">
                        <h3>Will it work with my current email service (Gmail, Outlook, etc.)?</h3>
                      </div>
                      <div className="icon">
                        <div className="icon-shape"></div>
                      </div>
                    </div>
                    <div className="answercont">
                      <div className="answer">
                        <p>AI email responders typically integrate with popular email platforms so you don’t need a new inbox to start automating.</p>
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
