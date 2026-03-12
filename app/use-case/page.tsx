'use client';

import Header from "../components/Header";
import Footer from "../components/Footer";
import ClientScripts from "../components/ClientScripts";
import Image from "next/image";
import { useState } from "react";



export default function UseCase() {
  const [activeTab, setActiveTab] = useState('firstTab');

  const tabs = [
    { id: 'firstTab', icon: 'Front-Desk.png', label: 'Front-Desk & Reception (General)' },
    { id: 'secondTab', icon: 'sales.png', label: 'Sales & Lead Generation' },
    { id: 'thirdTab', icon: 'Appointment.png', label: 'Appointment & Booking Management' },
    { id: 'fourTab', icon: 'CustomerSupport.png', label: 'Customer Support & Service' },
    { id: 'fiveTab', icon: 'hr.png', label: 'Internal Operations (HR & IT)' },
    { id: 'sixTab', icon: 'Emergency.png', label: 'Emergency & Urgent Escalation' }
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
                <a href="https://app.oniva.app/" target="_blank">get started now</a>
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
                      <Image src="/img/Reception.webp" alt="Import" className="img-responsive" width={828} height={466} />
                    </div>
                    <ul>
                        <li><b>24/7 Virtual Receptionist:</b> Answering calls after hours, on weekends, or during holidays so the business never "closes."</li>
                        <li><b>Overflow Call Handling:</b> Automatically picking up the line when the human staff is already on another call, eliminating busy signals.</li>
                        <li><b>Basic FAQ Automation:</b> Answering common questions about office hours, parking, directions, or "Are you open today?"</li>
                        <li><b>Smart Call Routing:</b> Identifying the caller's needs and transferring them to the correct department or person.</li>
                    </ul>
                  </div>

                  <div id="secondTab" className="tabcontent" style={{display: activeTab === 'secondTab' ? 'block' : 'none'}}>
                    <div className="img-box">
                      <Image src="/img/Sales.webp" alt="Import" className="img-responsive" width={1200} height={600} />
                    </div>
                    <ul>
                        <li><b>Instant Lead Qualification:</b> Asking pre-set discovery questions (e.g., "What is your budget?" or "When are you looking to start?") to filter high-value prospects.</li>
                        <li><b>Outbound Follow-ups:</b> Automatically calling leads who filled out a web form to book an initial discovery call while interest is still fresh.</li>
                        <li><b>Promotion Information:</b> Providing details on current sales, discounts, or seasonal offers to callers.</li>
                        <li><b>Lead Capture:</b> Recording contact details and intent from callers even when the sales team is offline.</li>
                    </ul>
                  </div>

                  <div id="thirdTab" className="tabcontent" style={{display: activeTab === 'thirdTab' ? 'block' : 'none'}}>
                    <div className="img-box">
                      <Image src="/img/appointment.webp" alt="Import" className="img-responsive" width={1200} height={600} />
                    </div>
                    <ul>
                        <li><b>Real-time Scheduling:</b> Accessing a live calendar to book, move, or cancel appointments without human intervention.</li>
                        <li><b>Automated Reminders:</b> Calling clients to confirm upcoming appointments, reducing "no-show" rates.</li>
                        <li><b>Waitlist Management:</b> Notifying clients on a waitlist when a last-minute cancellation opens up a spot.</li>
                        <li><b>Service Check-ins:</b> Calling a customer to confirm if they are ready for their scheduled service (e.g., "Our technician is 15 minutes away").</li>
                    </ul>
                  </div>

                  <div id="fourTab" className="tabcontent" style={{display: activeTab === 'fourTab' ? 'block' : 'none'}}>
                    <div className="img-box">
                      <Image src="/img/Customer-Support.webp" alt="Import" className="img-responsive" width={1200} height={600} />
                    </div>
                    <ul>
                        <li><b>Order Status Updates:</b> Letting customers check the status of a shipment or a repair job using an order number.</li>
                        <li><b>Multi-lingual Support:</b> Communicating with non-English speaking customers in their native language without hiring a translator.</li>
                        <li><b>Troubleshooting Guides:</b> Walking a customer through basic "Level 1" technical support steps.</li>
                        <li><b>Claims Intake:</b> Gathering initial information for insurance claims or incident reports before a human adjuster takes over.</li>
                    </ul>
                  </div>

                  <div id="fiveTab" className="tabcontent" style={{display: activeTab === 'fiveTab' ? 'block' : 'none'}}>
                    <div className="img-box">
                      <Image src="/img/Internal.webp" alt="Import" className="img-responsive" width={1200} height={600} />
                    </div>
                    <ul>
                        <li><b>Employee Self-Service:</b> An internal line for employees to ask about HR policies, holiday balances, or payroll dates.</li>
                        <li><b>IT Helpdesk Intake:</b> Recording technical issues and generating a support ticket with a full transcript for the IT team.</li>
                        <li><b>Recruitment Screening:</b> Conducting initial high-volume phone interviews for basic qualifications before a recruiter reviews the log.</li>
                    </ul>
                  </div>

                  <div id="sixTab" className="tabcontent" style={{display: activeTab === 'sixTab' ? 'block' : 'none'}}>
                    
                    <div className="img-box">
                      <Image src="/img/Emergency.webp" alt="Import" className="img-responsive" width={1200} height={600} />
                    </div><ul>
                        <li><b>After-Hours Triage:</b> Determining if a call is a "true emergency" (e.g., a burst pipe or a medical urgent matter) and escalating it to an on-call staff member.</li>
                        <li><b>Crisis Communication:</b> Providing automated, consistent updates to many callers during a service outage or emergency event.</li>
                    </ul>
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
