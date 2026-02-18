'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import ClientScripts from '../components/ClientScripts';

export default function PricingPage() {
  return (
    <>
      <Header />

      <div className="inner-banner">
        <div className="slider-wrap">
          <div className="text">
            <h1>Simple, Transparent, Scalable.</h1>
            <p>One professional setup. Unlimited possibilities. Pay only for what you use.</p>
            <div className="default_btn">
              <a href="/contact">get started now</a>
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
                  <div className="default_btn">
                    <a href="#">Buy now</a>
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
                    <li>AI Chatbot active on website (5,000 credits)</li>
                    <li>AI Chatbot active on website (5,000 credits)</li>
                    <li>AI Voice handling 50 mins of calls/month (3,000 credits)</li>
                    <li>Total Monthly Cost: 18,000 Credits ≈ $90/month</li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6">
                <div className="txt-box form-box">
                  <div className="form-box">
                    <div className="lebel">
                      <label>Chatbot active on website</label>
                      <p><span>5,000</span> credits</p>
                    </div>
                    <input type="text" placeholder="Enter you choice" />
                  </div>
                  <div className="form-box">
                    <div className="lebel">
                      <label>Email Managing</label>
                      <p><span>10,000</span> credits</p>
                    </div>
                    <input type="email" placeholder="Enter you choice" />
                  </div>
                  <div className="form-box">
                    <div className="lebel">
                      <label>Voice handling 50 mins</label>
                      <p><span>10,000</span> credits</p>
                    </div>
                    <input type="text" placeholder="Enter you choice" />
                  </div>
                  <div className="total">
                    <h5>Total Monthly Cost</h5>
                    <p>18,000 Credits ≈ $90/month</p>
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
      </div>

      <Footer />
      <ClientScripts />
    </>
  );
}
