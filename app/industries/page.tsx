'use client';

import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ClientScripts from '../components/ClientScripts';

const tabData = [
  {
    id: 'firstTab',
    label: 'Financial services',
    icon: '/img/financ-ico.png',
    img: '/img/financial-img.jpg',
    content: (
      <>
        <div className="img-box">
          <img src="/img/financial-img.jpg" className="img-responsive" alt="Financial services" />
        </div>
        <p>Banks, insurance providers, wealth managers, and fintech firms trust Oniva for secure, scalable solutions.</p>
        <p><strong>What we help with:</strong></p>
        <ul>
          <li>Digital banking and payment modernisation</li>
          <li>Fraud detection &amp; risk analytics</li>
          <li>Regulatory compliance automation</li>
          <li>Customer experience acceleration</li>
        </ul>
        <p><strong>Outcomes:</strong> increased security, reduced operational costs, faster service delivery.</p>
      </>
    ),
  },
  {
    id: 'secondTab',
    label: 'Healthcare',
    icon: '/img/healthcare-ico.png',
    img: '/img/financial-img.jpg',
    content: (
      <>
        <p>We support hospitals, clinics, labs, and healthtech companies to improve patient care and streamline operations.</p>
        <p><strong>What we help with:</strong></p>
        <ul>
        <li>Telehealth system integration</li>
        <li>Electronic Health Record (EHR) optimization</li>
        <li>AI‑enabled diagnostics and analytics</li>
        <li>Secure patient data workflows</li>
        </ul>
        <p><strong>Outcomes:</strong> safer, faster care with reduced administrative burden.</p>
      </>
    ),
  },
  {
    id: 'thirdTab',
    label: 'Manufacturing and Logistics',
    icon: '/img/manufactor-ico.png',
    img: '/img/financial-img.jpg',
    content: (
      <>
        <p>Oniva enables smarter factories and supply chains with real‑time insights and automation.</p>
        <p><strong>What we help with:</strong></p>
        <ul>
          <li>IoT‑powered operational monitoring</li>
          <li>Predictive maintenance</li>
          <li>Inventory automation</li>
          <li>Logistics route planning &amp; optimization</li>
        </ul>
        <p><strong>Outcomes:</strong> increased throughput, lower downtime, and improved supply reliability.</p>
      </>
    ),
  },
  {
    id: 'fourTab',
    label: 'eCommerce',
    icon: '/img/eCommerce.png',
    content: (
      <>
        <p>From online stores to multichannel marketplaces, we enhance how retailers engage customers.</p>
        <p><strong>What we help with:</strong></p>
        <ul>
          <li>Custom storefront platforms</li>
          <li>Personalization engines</li>
          <li>Integrated POS and fulfillment systems</li>
          <li>Data‑driven customer insights</li>
        </ul>
        <p><strong>Outcomes:</strong> higher conversions, loyalty growth, and seamless shopping experiences.</p>
      </>
    ),
  },
  {
    id: 'fiveTab',
    label: 'Government',
    icon: '/img/govt-ico.png',
    content: (
      <>
        <p>Secure, scalable solutions for government agencies and public programs.</p>
        <p><strong>What we help with:</strong></p>
        <ul>
          <li>Citizen services portals</li>
          <li>Digital identity and access management</li>
          <li>Data analytics for public safety</li>
          <li>Infrastructure modernization</li>
        </ul>
        <p><strong>Outcomes:</strong> better public access, faster service delivery, and improved transparency.</p>
      </>
    ),
  },
  {
    id: 'sixTab',
    label: 'Defense and Intelligence',
    icon: '/img/d-i-ico.png',
    content: (
      <>
        <p>Robust technology solutions built for security, performance, and compliance.</p>
        <p><strong>What we help with:</strong></p>
        <ul>
          <li>Secure data management</li>
          <li>Mission‑critical systems</li>
          <li>Real‑time decision platforms</li>
          <li>AI analytics and surveillance support</li>
        </ul>
        <p><strong>Outcomes:</strong> heightened situational awareness and mission readiness.</p>
      </>
    ),
  },
];

const faqData = [
  {
    question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    answer: 'Sed luctus turpis suscipit nisi vestibulum, nec volutpat erat gravida. Nunc nibh nisl, dapibus sed aliquet et, venenatis ut mi. Nam id dui eu lorem vulputate imperdiet non non urna.',
  },
  {
    question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    answer: 'Sed luctus turpis suscipit nisi vestibulum, nec volutpat erat gravida. Nunc nibh nisl, dapibus sed aliquet et, venenatis ut mi. Nam id dui eu lorem vulputate imperdiet non non urna.',
  },
  {
    question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    answer: 'Sed luctus turpis suscipit nisi vestibulum, nec volutpat erat gravida. Nunc nibh nisl, dapibus sed aliquet et, venenatis ut mi. Nam id dui eu lorem vulputate imperdiet non non urna.',
  },
  {
    question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    answer: 'Sed luctus turpis suscipit nisi vestibulum, nec volutpat erat gravida. Nunc nibh nisl, dapibus sed aliquet et, venenatis ut mi. Nam id dui eu lorem vulputate imperdiet non non urna.',
  },
  {
    question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    answer: 'Sed luctus turpis suscipit nisi vestibulum, nec volutpat erat gravida. Nunc nibh nisl, dapibus sed aliquet et, venenatis ut mi. Nam id dui eu lorem vulputate imperdiet non non urna.',
  },
  {
    question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    answer: 'Sed luctus turpis suscipit nisi vestibulum, nec volutpat erat gravida. Nunc nibh nisl, dapibus sed aliquet et, venenatis ut mi. Nam id dui eu lorem vulputate imperdiet non non urna.',
  },
];

export default function IndustriesPage() {
  const [activeTab, setActiveTab] = useState(tabData[0].id);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <Header />

      <div className="inner-banner">
        <div className="slider-wrap">
          <div className="text">
            <h1>Industries</h1>
            <p>Transforming industries with smart technology, tailored solutions, and measurable results from finance and healthcare to eCommerce and government.</p>
            <div className="default_btn">
              <a href="/contact">get started now</a>
            </div>
          </div>
        </div>
        <canvas id="canvas"></canvas>
      </div>

      <section className="indsIntro">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="sec-wrap">
                <div className="leftPart">
                  <div className="img-box">
                    <img src="/img/industries-img-1.jpg" className="img-responsive" alt="Industries" />
                  </div>
                  <div className="numbox">
                    <h2>12 <span>k</span></h2>
                    <p>Projects Done</p>
                  </div>
                </div>
                <div className="rightPart">
                  <p>At Oniva, we empower organizations across industries to leverage smart technology, enhance efficiency, and deliver better outcomes. Whether you’re a growing startup or a global enterprise, our tailored solutions meet your unique challenges — driving growth, improving operations, and fueling innovation.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="Industries-page">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="tabWrap">
                <select
                  id="mobileTabs"
                  className="mobile-tabs"
                  value={activeTab}
                  onChange={(e) => setActiveTab(e.target.value)}
                >
                  {tabData.map((tab) => (
                    <option key={tab.id} value={tab.id}>
                      {tab.label}
                    </option>
                  ))}
                </select>

                <div className="tab">
                  {tabData.map((tab) => (
                    <button
                      key={tab.id}
                      className={`tablinks ${activeTab === tab.id ? 'active' : ''}`}
                      onClick={() => setActiveTab(tab.id)}
                      id={tab.id === 'firstTab' ? 'defaultOpen' : undefined}
                    >
                      <img src={tab.icon} alt="" />
                      {tab.label}
                    </button>
                  ))}
                </div>

                {tabData.map((tab) => (
                  <div
                    key={tab.id}
                    id={tab.id}
                    className="tabcontent"
                    style={{ display: activeTab === tab.id ? 'block' : 'none' }}
                  >
                    {tab.content}
                  </div>
                ))}
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
                  <h2>Have questions or need a customized solution?</h2>
                  <h4>Contact us today for a free consultation or industry assessment. Our experts are ready to guide you.</h4>
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
                <p>Find quick answers to common questions about our industry solutions, services, and support helping you get the clarity you need fast.</p>
              </div>
              <div className="faq_main">
                <div className="faq_row">
                      <div className="faq_question">
                          <div className="faq_question-text">
                              <h3>What size organizations do you work with?</h3>
                          </div>
                          <div className="icon">
                              <div className="icon-shape"></div>
                          </div>
                      </div>
                      <div className="answercont">
                          <div className="answer">
                              <p>We serve businesses of all sizes from startups to Fortune 100 companies.</p>
                          </div>
                      </div>
                  </div>
                  <div className="faq_row">
                      <div className="faq_question">
                          <div className="faq_question-text">
                              <h3>Do you offer industry‑specific consulting?</h3>
                          </div>
                          <div className="icon">
                              <div className="icon-shape"></div>
                          </div>
                      </div>
                      <div className="answercont">
                          <div className="answer">
                              <p>Yes. Our teams include specialists with deep domain experience in each sector.</p>
                          </div>
                      </div>
                  </div>
                  <div className="faq_row">
                      <div className="faq_question">
                          <div className="faq_question-text">
                              <h3>Is Oniva compliant with industry standards?</h3>
                          </div>
                          <div className="icon">
                              <div className="icon-shape"></div>
                          </div>
                      </div>
                      <div className="answercont">
                          <div className="answer">
                              <p>Absolutely, we ensure solutions align with regulatory requirements like HIPAA, PCI‑DSS, GDPR, and more.</p>
                          </div>
                      </div>
                  </div>
                  <div className="faq_row">
                      <div className="faq_question">
                          <div className="faq_question-text">
                              <h3>What technologies do you work with?</h3>
                          </div>
                          <div className="icon">
                              <div className="icon-shape"></div>
                          </div>
                      </div>
                      <div className="answercont">
                          <div className="answer">
                              <p>We work across cloud platforms, AI/ML tools, automation frameworks, secure networking, and modern software stacks.</p>
                          </div>
                      </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ClientScripts />
    </>
  );
}
