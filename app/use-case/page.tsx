'use client';

import Header from "../components/Header";
import Footer from "../components/Footer";
import ClientScripts from "../components/ClientScripts";
import Image from "next/image";
import { useState } from "react";

export default function UseCase() {
  const [activeTab, setActiveTab] = useState('firstTab');

  const tabs = [
    { id: 'firstTab', icon: 'export-ico.png', label: 'Easy Import' },
    { id: 'secondTab', icon: 'custom-ico.png', label: 'Customization' },
    { id: 'thirdTab', icon: 'typo-ico.png', label: 'Typography' },
    { id: 'fourTab', icon: 'color-ico.png', label: 'Color Change' },
    { id: 'fiveTab', icon: 'woo-ico.png', label: 'WooCommerce' },
    { id: 'sixTab', icon: 'help-ico.png', label: 'Help Center' }
  ];

  return (
    <>
      <Header />
      <main>
        <div className="inner-banner">
          <div className="slider-wrap">
            <div className="text">
              <h1>Use Case</h1>
              <p>Explore real use cases where Oniva streamlines processes, enhances engagement, and delivers results.</p>
              <div className="default_btn">
                <a href="/contact">get started now</a>
              </div>
            </div>
          </div>
          <canvas id="canvas"></canvas>
        </div>

        <section className="features-page">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="heading text-center">
                  <h2>Our Use Cases</h2>
                  <p>Oniva is designed to help teams capture, analyze, and understand conversations effortlessly. From seamless data import to advanced analytics, our platform transforms raw communication data into clear, actionable insights that drive smarter decisions and better outcomes.</p>
                </div>
                <div className="tabWrap">
                  <div className="tab">
                    {tabs.map((tab) => (
                      <button
                        key={tab.id}
                        className={`tablinks ${activeTab === tab.id ? 'active' : ''}`}
                        onClick={() => setActiveTab(tab.id)}
                      >
                        <Image src={`/img/${tab.icon}`} alt={tab.label} width={30} height={30} /> {tab.label}
                      </button>
                    ))}
                  </div>

                  <div id="firstTab" className="tabcontent" style={{display: activeTab === 'firstTab' ? 'block' : 'none'}}>
                    <div className="img-box">
                      <Image src="/img/Import-img.jpg" alt="Import" className="img-responsive" width={1200} height={600} />
                    </div>
                    <p>Oniva makes it simple to bring all your conversation data into one centralized platform. Quickly upload audio files, call recordings, or existing transcripts from multiple sources without complex setup or technical effort.</p>
                    <p>Our intelligent ingestion system automatically processes and organizes your data, ensuring accurate transcription, consistent formatting, and secure storage from the moment it’s uploaded. Whether you’re importing historical records or syncing new conversations daily, Oniva keeps everything structured and searchable.</p>
                    <p>With automated workflows and seamless syncing, your team can spend less time managing files and more time extracting insights, identifying trends, and making informed decisions.</p>
                    <h4><strong>Key Benefits</strong></h4>
                    <ul>
                      <li>Support for audio files, call recordings, and text transcripts</li>
                      <li>Fast, reliable uploads from multiple sources</li>
                      <li>Automatic processing and organization of conversation data</li>
                      <li>Scalable ingestion for growing teams and high volumes</li>
                      <li>Minimal setup with no technical expertise required</li>
                    </ul>
                  </div>

                  <div id="secondTab" className="tabcontent" style={{display: activeTab === 'secondTab' ? 'block' : 'none'}}>
                    <div className="img-box">
                      <Image src="/img/Import-img.jpg" alt="Import" className="img-responsive" width={1200} height={600} />
                    </div>
                    <p>Oniva adapts to the way your team works. Easily tailor dashboards, filters, and reports to reflect your unique workflows, roles, and priorities. Create custom views for different teams, cases, or projects so everyone sees the most relevant data at a glance.</p>
                    <p>With powerful filtering options, you can organize conversations by date ranges, categories, keywords, or performance metrics. Whether you’re tracking individual cases, monitoring team activity, or reviewing trends over time, Oniva ensures the right insights are always front and center.</p>
                    <p>This flexibility allows teams to move faster, stay aligned, and make data-driven decisions without digging through unnecessary information.</p>
                  </div>

                  <div id="thirdTab" className="tabcontent" style={{display: activeTab === 'thirdTab' ? 'block' : 'none'}}>
                    <p>Oniva delivers clear, easy-to-read transcripts designed to help teams understand conversations faster and more accurately. Intelligent formatting structures dialogue in a clean, organized layout, making it simple to follow speaker changes and conversation flow.</p>
                    <p>Key moments within transcripts can be automatically highlighted, allowing users to quickly identify important statements, decisions, or action items. With powerful scanning and navigation tools, long conversations become easy to review—saving time while improving comprehension.</p>
                    <p>Whether you’re reviewing a single call or analyzing multiple transcripts, Oniva ensures information is accessible, searchable, and actionable.</p>
                  </div>

                  <div id="fourTab" className="tabcontent" style={{display: activeTab === 'fourTab' ? 'block' : 'none'}}>
                    <p>Oniva allows you to personalize the interface with adjustable colors and theme options that align with your brand identity. Choose layouts and color schemes that create a consistent visual experience across your organization while keeping the interface clean and professional.</p>
                    <p>Designed for extended working sessions, Oniva’s themes reduce visual fatigue and enhance usability. Whether your team prefers light or dark modes, subtle contrasts, or brand-matched colors, the platform adapts to deliver comfort without compromising clarity or performance.</p>
                    <p>This level of customization ensures a visually cohesive experience that feels familiar, intuitive, and easy to work with every day.</p>
                  </div>

                  <div id="fiveTab" className="tabcontent" style={{display: activeTab === 'fiveTab' ? 'block' : 'none'}}>
                    <p>Oniva connects effortlessly with your existing tools and platforms, ensuring your workflows remain smooth and uninterrupted. Integrate with third-party systems to sync data, reduce manual work, and keep all communication insights centralized in one place.</p>
                    <p>Whether you’re connecting CRM systems, eCommerce platforms, or internal tools, Oniva helps streamline operations by automating data flow and maintaining consistency across systems. This unified approach improves collaboration, reduces duplication, and enables teams to act on insights faster.</p>
                    <p>With flexible integration options, Oniva fits naturally into your current ecosystem without disrupting established processes.</p>
                  </div>

                  <div id="sixTab" className="tabcontent" style={{display: activeTab === 'sixTab' ? 'block' : 'none'}}>
                    <p>Oniva’s Help Center is designed to support you at every stage—from onboarding to daily usage. Access step-by-step guides, detailed documentation, and FAQs that help you get started quickly and use the platform with confidence.</p>
                    <p>When questions arise, our expert support resources are always within reach. Whether you’re exploring new features or resolving issues, Oniva ensures reliable assistance so your team stays productive and focused on results.</p>
                    <p>This ongoing support structure helps teams maximize value from the platform while ensuring a smooth and successful experience over time.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="ctaSec">
          <div className="sec-wrap">
            <h2>See Oniva in Action</h2>
            <p>Discover how Oniva transforms conversations into meaningful insights. Book a personalized demo to explore real-time transcription, automated summaries, and powerful analytics tailored to your needs.</p>
            <div className="default_btn2">
              <a href="/contact">Book a Demo</a>
            </div>
          </div>
        </section>

        <section className="Feature-sec">
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <div className="heading">
                  <h2>Explore highlighted features</h2>
                  <p>Oniva empowers professionals to turn conversations into structured intelligence. Whether you’re reviewing calls, analyzing patterns, or preparing reports, our platform ensures accuracy and efficiency at every step.</p>
                </div>
              </div>
              <div className="col-md-12">
                <div id="highlightFeature" className="owl-carousel owl-theme">
                <div className="item">
                  <div className="feature-box">
                    <div className="img">
                      <Image src={`/img/featureimg-3.webp`} alt="Feature" className="img-responsive" width={400} height={300} />
                    </div>
                    <div className="text">
                      <h4>High-Quality Outputs</h4>
                      <p>Oniva generates clear, highly accurate transcripts and structured summaries that capture every important detail of a conversation. Using advanced processing and intelligent language models, the platform ensures conversations are transcribed with precision and clarity.</p>
                      <p>Automatically generated summaries highlight key points, decisions, and action items, allowing teams to quickly understand conversations without reviewing entire recordings. This ensures nothing critical is missed while significantly reducing review time.</p>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="feature-box">
                    <div className="img">
                      <Image src={`/img/featureimg-2.webp`} alt="Feature" className="img-responsive" width={400} height={300} />
                    </div>
                    <div className="text">
                      <h4>Case Summary</h4>
                      <p>Oniva automatically transforms long and complex conversations into concise, easy-to-read case summaries. Instead of reviewing full call recordings or lengthy transcripts, teams can quickly understand the context, outcomes, and next steps at a glance.</p>
                      <p>These summaries surface critical information such as key discussion points, decisions made, and action items, helping teams stay aligned and move cases forward efficiently. By reducing manual review time, Oniva enables faster case handling and improved productivity across teams.</p>        
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="feature-box">
                    <div className="img">
                      <Image src={`/img/featureimg-3.webp`} alt="Feature" className="img-responsive" width={400} height={300} />
                    </div>
                    <div className="text">
                      <h4>Real-Time Case Transcripts</h4>
                      <p>Oniva provides live or near-real-time transcripts during active calls, allowing teams to follow conversations as they happen. This real-time visibility improves understanding, reduces miscommunication, and supports faster, more confident decision-making.</p>
                      <p>As conversations unfold, transcripts update dynamically, making it easier to capture important details, clarify information instantly, and stay aligned with all participants. This is especially valuable for complex discussions where accuracy and timing are critical.</p>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="feature-box">
                    <div className="img">
                      <Image src={`/img/featureimg-1.webp`} alt="Feature" className="img-responsive" width={400} height={300} />
                    </div>
                    <div className="text">
                      <h4>Phone Call Analytics</h4>
                      <p>Oniva empowers teams with powerful call analytics to understand conversations beyond the words spoken. Track sentiment, call duration, keywords, and emerging conversation trends to gain actionable insights into communication performance.</p>
                      <p>By analyzing patterns across multiple calls, teams can identify opportunities, monitor compliance, and uncover areas for improvement. Visual dashboards make it easy to spot trends, compare team performance, and make data-driven decisions that enhance outcomes.</p>
                    </div>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="sec_group">
          <section className="ctaSec2">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="text text-center">
                    <h2>Ready to Transform Your Conversations Into Insights?</h2>
                    <h4>Experience how Oniva simplifies communication analysis and delivers meaningful results for your organization</h4>
                    <div className="default_btn">
                      <a href="/contact">Contact us now</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="bgParticles">
            <div className="geometric-background" id="geometric-background"></div>
            <div className="particles" id="particles"></div>
          </div>
        </div>

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
                              <h3>What are use cases in Oniva?</h3>
                          </div>
                          <div className="icon">
                              <div className="icon-shape"></div>
                          </div>
                      </div>
                      <div className="answercont">
                          <div className="answer">
                              <p>Use cases show how businesses apply Oniva to solve real challenges, such as building websites, automating content creation, and streamlining workflows across teams.</p>
                          </div>
                      </div>
                  </div>
                  <div className="faq_row">
                      <div className="faq_question">
                          <div className="faq_question-text">
                              <h3>Who can use Oniva?</h3>
                          </div>
                          <div className="icon">
                              <div className="icon-shape"></div>
                          </div>
                      </div>
                      <div className="answercont">
                          <div className="answer">
                              <p>Oniva is designed for startups, small businesses, agencies, and enterprises looking to create and manage professional websites without technical complexity.</p>
                          </div>
                      </div>
                  </div>
                  <div className="faq_row">
                      <div className="faq_question">
                          <div className="faq_question-text">
                              <h3>Do I need technical or coding skills?</h3>
                          </div>
                          <div className="icon">
                              <div className="icon-shape"></div>
                          </div>
                      </div>
                      <div className="answercont">
                          <div className="answer">
                              <p>No. Oniva is a no-code platform that uses AI to help you build, customize, and manage websites easily — even without prior experience.</p>
                          </div>
                      </div>
                  </div>
                  <div className="faq_row">
                      <div className="faq_question">
                          <div className="faq_question-text">
                              <h3>Can Oniva support different industries?</h3>
                          </div>
                          <div className="icon">
                              <div className="icon-shape"></div>
                          </div>
                      </div>
                      <div className="answercont">
                          <div className="answer">
                              <p>Yes. Oniva adapts to various industries, including marketing, finance, healthcare, education, and eCommerce, with flexible layouts and AI-driven content.</p>
                          </div>
                      </div>
                  </div>
                  <div className="faq_row">
                      <div className="faq_question">
                          <div className="faq_question-text">
                              <h3>How does AI improve my website?</h3>
                          </div>
                          <div className="icon">
                              <div className="icon-shape"></div>
                          </div>
                      </div>
                      <div className="answercont">
                          <div className="answer">
                              <p>Oniva’s AI helps generate content, optimize layouts, suggest improvements, and maintain consistency across your site, saving time and improving performance.</p>
                          </div>
                      </div>
                  </div>
                  <div className="faq_row">
                      <div className="faq_question">
                          <div className="faq_question-text">
                              <h3>Can I scale my website as my business grows?</h3>
                          </div>
                          <div className="icon">
                              <div className="icon-shape"></div>
                          </div>
                      </div>
                      <div className="answercont">
                          <div className="answer">
                              <p>Absolutely. Oniva allows you to expand features, add pages, update content, and support new use cases as your business evolves.</p>
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
