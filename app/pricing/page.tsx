'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ClientScripts from '../components/ClientScripts';

export default function PricingPage() {
  const [voiceMins, setVoiceMins] = useState(0);
  const [emailQty, setEmailQty] = useState(0);
  const [chatQty, setChatQty] = useState(0);
  const [totalCredits, setTotalCredits] = useState(0);
  const [totalCost, setTotalCost] = useState(0);

  const calculateCredits = () => {
    const voiceCredits = voiceMins * 60;
    const emailCredits = emailQty * 6000;
    const chatCredits = chatQty * 6000;
    const total = voiceCredits + emailCredits + chatCredits;
    const cost = (total / 2000) * 10;
    setTotalCredits(total);
    setTotalCost(cost);
  };

  useEffect(() => {
    calculateCredits();
  }, [voiceMins, emailQty, chatQty]);
  return (
    <>
      <Header />

      <div className="inner-banner">
        <div className="slider-wrap">
          <div className="text">
            <h1>Simple, Transparent, Scalable.</h1>
            <p>One professional setup. Unlimited possibilities. Pay only for what you use.</p>
            <div className="default_btn">
              <a href="https://app.oniva.app/" target="_blank">get started now</a>
            </div>
          </div>
        </div>
        <canvas id="canvas"></canvas>
      </div>

      <div className="pricing_group">
        <section className="pricing_sec pt-0">
          <div className="container">
            <div className="row">
              <div className="col-md-5">
                <div className="pricing_box">
                  <div className="heading">
                    <p>The Foundation (One-Time)</p>
                    <p>The Professional Implementation Suite</p>
                  </div>
                  <div className="price">
                    $399 <span>( One-time setup fee )</span>
                  </div>
                  <div className="text">
                    <div>What&apos;s Included:</div>
                    <hr />
                    <ul>
                      <li>Dedicated AI Phone Number Provisioning.</li>
                      <li>Custom Voice/Tone Calibration.</li>
                      <li>Initial Knowledge Base Ingestion (PDFs/Websites).</li>
                      <li>Integration with your CRM &amp; Calendars.</li>
                      <li>Full Dashboard Access &amp; Admin Training.</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-7">
                <div className="pricing_box box_2">
                  <div className="heading">
                    <p>The Fuel (Usage Credits)</p>
                    <p>Unified Credit Refills</p>
                  </div>
                  <div className="price">
                    $10 <span>( Per 2,000 Credits )</span>
                    <p>No monthly contracts. No hidden fees. Credits never expire.</p>
                  </div>
                  <div className="title">How your credits work across our tools:</div>
                  <div className="col-row">
                    <div className="col">
                      <p><strong>Tool</strong></p>
                      <ul>
                        <li>AI Voice Representative</li>
                        <li>AI Email Responder</li>
                        <li>AI Chatbot</li>
                      </ul>
                    </div>
                    <div className="col">
                      <p><strong>Credit Consumption</strong></p>
                      <ul>
                        <li>1 Credit / second</li>
                        <li>10,000 Credits / month</li>
                        <li>5,000 Credits / month</li>
                      </ul>
                    </div>
                    <div className="fullcol">
                      <p><strong>Business Impact</strong></p>
                      <ul>
                        <li>Only pay for the exact duration of the conversation.</li>
                        <li>Unlimited automated replies for one professional inbox.</li>
                        <li>24/7 web-based customer support for one domain.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="calculator-sec">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h2>How Much Will I Spend?</h2>
              </div>
              <div className="col-md-6">
                <div className="txt-box list">
                  <p>Professionals love predictable costs. Providing examples helps them visualize their monthly budget.</p>
                  <ul>
                    <li>Scenario: The Growing Small Business</li>
                    <li>One AI Chatbot active on website (6,000 credits)</li>
                    <li>One AI Email active on website (6,000 credits)</li>
                    <li>1000 mins of calls/month (6,000 credits)</li>
                    <li>Total Monthly Cost: 18,000 Credits ≈ $90/month</li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6">
                <div className="txt-box form-box">
                  <div className="form-box">
                    <div className="lebel">
                      <label>No. of chatbots?</label>
                      <p><span>6,000</span> credits</p>
                    </div>
                    <input 
                      type="number" 
                      id="chat-qty"
                      min="0"
                      max="999"
                      value={chatQty || ''}
                      onChange={(e) => setChatQty(Math.min(999, Math.max(0, Number(e.target.value))))}
                      placeholder="0"
                      style={{ outline: 'none' }}
                    />
                  </div>
                  <div className="form-box">
                    <div className="lebel">
                      <label>No. of AI Emails?</label>
                      <p><span>6,000</span> credits</p>
                    </div>
                    <input 
                      type="number" 
                      id="email-qty"
                      min="0"
                      max="999"
                      value={emailQty || ''}
                      onChange={(e) => setEmailQty(Math.min(999, Math.max(0, Number(e.target.value))))}
                      placeholder="0"
                      style={{ outline: 'none' }}
                    />
                  </div>
                  <div className="form-box">
                    <div className="lebel">
                      <label>Expected Voice Calls (Total Minutes/Month)</label>
                      <p><span>1 credit/sec</span></p>
                    </div>
                    <input 
                      type="number" 
                      id="voice-mins"
                      min="0"
                      max="999"
                      value={voiceMins || ''}
                      onChange={(e) => setVoiceMins(Math.min(999, Math.max(0, Number(e.target.value))))}
                      placeholder="0"
                      style={{ outline: 'none' }}
                    />
                  </div>
                  <div className="total">
                    <h5>Total Cost</h5>
                    <p><span id="total-credits">{totalCredits.toLocaleString()}</span> Credits ≈ <span id="total-cost">${totalCost.toFixed(2)}</span>/month</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="sec_group">
        <section className="faq-sec">
          <div className="container">
            <div className="row">
              <div className="col-md-10 col-md-offset-1 text-center">
                <div className="heading">
                  <h2>Frequently Asked Questions</h2>
                </div>
                <div className="faq_main">
                  <div className="faq_row">
                    <div className="faq_question">
                      <div className="faq_question-text">
                        <h3>Do I have to pay the $399 setup fee for each tool?</h3>
                      </div>
                      <div className="icon">
                        <div className="icon-shape"></div>
                      </div>
                    </div>
                    <div className="answercont">
                      <div className="answer">
                        <p>No. The $399 setup fee covers your entire account ecosystem, including the initial configuration of your Voice, Email, and Chatbot tools.</p>
                      </div>
                    </div>
                  </div> 
                  <div className="faq_row">
                    <div className="faq_question">
                      <div className="faq_question-text">
                        <h3>What happens if I run out of credits mid-month?</h3>
                      </div>
                      <div className="icon">
                        <div className="icon-shape"></div>
                      </div>
                    </div>
                    <div className="answercont">
                      <div className="answer">
                        <p>You can enable "Auto-Recharge" to automatically add 2,000 credits when your balance hits a certain threshold, ensuring your AI Representative never misses a call.</p>
                      </div>
                    </div>
                  </div> 
                  <div className="faq_row">
                    <div className="faq_question">
                      <div className="faq_question-text">
                        <h3>Is there a limit to how many emails the AI Email Responder can handle?</h3>
                      </div>
                      <div className="icon">
                        <div className="icon-shape"></div>
                      </div>
                    </div>
                    <div className="answercont">
                      <div className="answer">
                        <p>No. Your 10,000 credits per month cover unlimited incoming and outgoing emails for that specific mailbox.</p>
                      </div>
                    </div>
                  </div> 
                  <div className="faq_row">
                    <div className="faq_question">
                      <div className="faq_question-text">
                        <h3>Can I use my credits for just one tool?</h3>
                      </div>
                      <div className="icon">
                        <div className="icon-shape"></div>
                      </div>
                    </div>
                    <div className="answercont">
                      <div className="answer">
                        <p>Absolutely. Our Unified Credit system is designed for flexibility. You can use 100% of your credits on Voice calls one month and shift to Chat/Email the next.</p>
                      </div>
                    </div>
                  </div> 
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="ctaSec">
          <div className="sec-wrap">
            <h2>Start Your Professional AI Transformation Today.</h2>
            <p>Volume discounts available for Enterprise clients requiring over 1,000,000 credits per month.</p>
            <div className="default_btn2">
              <a href="/contact">Signup Now</a>
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
      </div>

      <Footer />
      <ClientScripts />
    </>
  );
}
