import Header from "../components/Header";
import Footer from "../components/Footer";
import ClientScripts from "../components/ClientScripts";
import Image from "next/image";

export default function whatsappAgent() {
  return (
    <>
      <Header />
      <main>
        <div className="inner-banner">
          <div className="slider-wrap">
            <div className="text">
              <h1>WhatsApp Agent</h1>
              <p>
                Turn WhatsApp into a powerful customer communication channel with Oniva. 
                Automatically capture, respond, and manage conversations in real time 
                through your mobile app and admin dashboard without missing a single message.
              </p>
              <div className="default_btn">
                <a href="https://app.oniva.app/" target="_blank" rel="noopener noreferrer">
                  get started now
                </a>
              </div>
            </div>
          </div>
          <canvas id="canvas"></canvas>
        </div>

        <section className="solutionIntro-sec">
          <div className="slider-wrap">
            <div className="imgBox">
              <Image src="/img/whatsapp-01.webp" alt="WhatsApp Agent" className="img-responsive" width={600} height={400} />
            </div>
            <div className="text">
              <div className="text-wrap">
                <p>
                  The WhatsApp Agent connects your business number directly to the Oniva platform, 
                  enabling instant message capture and real-time communication. Every incoming message 
                  is delivered to your mobile app and admin dashboard without delays.
                </p>
                <p>
                  Whether customers are asking questions, requesting quotes, or following up on services, 
                  your team can respond instantly from a unified interface. No more switching between apps 
                  or losing track of conversations across devices.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="solutionContent pt-100">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="img-box">
                  <Image src="/img/whatsapp-02.webp" alt="WhatsApp Features" className="img-responsive" width={1200} height={600} />
                </div>
              </div>

              <div className="col-sm-6">
                <h2>Key Features</h2>
                <ul className="list">
                  <li>Real-time WhatsApp message sync</li>
                  <li>Instant mobile app notifications</li>
                  <li>Unified chat dashboard</li>
                  <li>Multi-agent access & collaboration</li>
                  <li>Conversation history & tracking</li>
                </ul>

                <div className="default_btn">
                  <a href="/contact">get started now</a>
                </div>

                <br />

                <div className="small-img">
                  <Image src="/img/whatsapp-01.webp" alt="WhatsApp Dashboard" width={400} height={300} />
                </div>
              </div>

              <div className="col-sm-6">
                <h3><strong>Why use WhatsApp Agent?</strong></h3>
                <p>
                  WhatsApp is one of the most widely used communication platforms, but managing 
                  conversations manually often leads to delays and missed opportunities. 
                  The WhatsApp Agent ensures every message is captured and responded to instantly.
                </p>
                <p>
                  By centralising all chats into a single dashboard, your team can collaborate, 
                  assign conversations, and track responses without confusion. This leads to 
                  faster replies, better customer experience, and higher conversion rates.
                </p>
                <p>
                  With secure message handling, real-time delivery, and scalable infrastructure, 
                  your business can handle high volumes of conversations efficiently without 
                  increasing workload or complexity.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="advantage-sec black_bg">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="content">
                  <h2>How the WhatsApp Agent works</h2>
                  <p>
                    The setup begins by connecting your WhatsApp Business number to the Oniva platform. 
                    Once connected, all incoming messages are automatically routed through the system 
                    and delivered instantly to your mobile app and admin panel.
                  </p>

                  <blockquote>
                    <p>
                      When a customer sends a WhatsApp message, it is captured in real time and 
                      instantly forwarded to your Oniva dashboard. Your team receives a notification 
                      and can respond immediately from the app without opening WhatsApp separately.
                    </p>
                  </blockquote>

                  <p>
                    Every conversation is stored in a centralised log, allowing your team to track 
                    message history, monitor responses, and ensure no inquiry is left unanswered. 
                    Conversations can be managed, assigned, and followed up efficiently from one place.
                  </p>
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
                  <p>
                    Find answers about setup, functionality, and how WhatsApp Agent manages your conversations.
                  </p>
                </div>

                <div className="faq_main">

                  <div className="faq_row">
                    <div className="faq_question">
                      <div className="faq_question-text">
                        <h3>Do I need technical skills to set up WhatsApp Agent?</h3>
                      </div>
                      <div className="icon"><div className="icon-shape"></div></div>
                    </div>
                    <div className="answercont">
                      <div className="answer">
                        <p>
                          No. The setup process is simple and guided. You only need to connect your 
                          WhatsApp Business account, and the system handles the rest automatically.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="faq_row">
                    <div className="faq_question">
                      <div className="faq_question-text">
                        <h3>Can multiple team members manage chats?</h3>
                      </div>
                      <div className="icon"><div className="icon-shape"></div></div>
                    </div>
                    <div className="answercont">
                      <div className="answer">
                        <p>
                          Yes. Multiple agents can access and respond to conversations from the 
                          dashboard, making it easy to collaborate and manage high volumes of messages.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="faq_row">
                    <div className="faq_question">
                      <div className="faq_question-text">
                        <h3>Will I receive notifications for new messages?</h3>
                      </div>
                      <div className="icon"><div className="icon-shape"></div></div>
                    </div>
                    <div className="answercont">
                      <div className="answer">
                        <p>
                          Yes. Every incoming message triggers an instant notification on your 
                          mobile app so you can respond without delay.
                        </p>
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