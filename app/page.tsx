import Header from "./components/Header";
import Footer from "./components/Footer";
import ClientScripts from "./components/ClientScripts";
import Image from "next/image";
import Link from "next/link";

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
                <a href="/contact">get started now</a>
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
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tincidunt tempor nulla, ac sagittis sem ultrices vitae. Aliquam mi arcu, molestie non iaculis sit amet, maximus sed justo. In vehicula placerat risus, vitae ornare justo volutpat eu. Ut ornare enim vitae porttitor pharetra. In viverra non tellus congue venenatis.</p>
                <ul>
                  <li><a href="#"><Image src="/img/icon-1.png" alt="" width={30} height={30} />AI Representative</a></li>
                  <li><Image src="/img/chat-ico.png" alt="" width={30} height={30} />AI Chatbot</li>
                  <li><a href="#"><Image src="/img/email-ico.png" alt="" width={30} height={30} />AI Email Responder</a></li>
                </ul>
                <div className="default_btn">
                  <a href="#">Read more</a>
                </div>
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
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tincidunt tempor nulla, ac sagittis sem ultrices vitae. Aliquam mi arcu, molestie non iaculis sit amet, maximus sed justo. In vehicula placerat risus, vitae ornare justo volutpat eu. Ut ornare enim vitae porttitor pharetra. In viverra non tellus congue venenatis.</p>
                </div>
              </div>
              <div className="col-md-4 col-sm-12">
                <div className="serv-box">
                  <div className="img">
                    <Image src="/img/ai-ico.png" alt="AI" className="img-responsive" width={80} height={80} />
                  </div>
                  <div className="text">
                    <h3>AI Representative</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tincidunt tempor nulla,</p>
                    <div className="default_btn">
                      <a href="#">Read more</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-12">
                <div className="serv-box">
                  <div className="img">
                    <Image src="/img/aiChatbot-ico.png" alt="Chatbot" className="img-responsive" width={80} height={80} />
                  </div>
                  <div className="text">
                    <h3>AI Chatbot</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tincidunt tempor nulla,</p>
                    <div className="default_btn">
                      <a href="#">Read more</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-12">
                <div className="serv-box">
                  <div className="img">
                    <Image src="/img/aiEmail-ico.png" alt="Email" className="img-responsive" width={80} height={80} />
                  </div>
                  <div className="text">
                    <h3>AI Email Responder</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tincidunt tempor nulla,</p>
                    <div className="default_btn">
                      <a href="#">Read more</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="ctaSec">
          <div className="sec-wrap">
            <h2>Book a Demo</h2>
            <p>Sed luctus turpis suscipit nisi vestibulum, nec volutpat erat gravida. Nunc nibh nisl, dapibus sed aliquet et, venenatis ut mi. Nam id dui eu lorem vulputate imperdiet non non urna.</p>
            <div className="default_btn2">
              <a href="#">get started now</a>
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
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tincidunt tempor nulla, ac sagittis sem ultrices vitae.</p>
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
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tincidunt tempor nulla,</p>
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
                    {[1, 2, 3, 4].map((_, idx) => (
                      <div className="item" key={idx}>
                        <div className="testimonial-bx">
                          <div className="rating"></div>
                          <p>Lorem ipsum sit amet, consectetur adipisicing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut ex ea commodo consequat. Duis aute irure dolor.</p>
                          <h4>Lorem ipsum</h4>
                        </div>
                      </div>
                    ))}
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
                    <h2>We&apos;re here to help</h2>
                    <h4>For any inquiries or to place an order, please contact us</h4>
                    <div className="default_btn">
                      <a href="#">Contact us now</a>
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
                    <p>Sed luctus turpis suscipit nisi vestibulum, nec volutpat erat gravida. Nunc nibh nisl, dapibus sed aliquet et, venenatis ut mi. Nam id dui eu lorem</p>
                  </div>
                  <div className="faq_main">
                    {[1, 2, 3, 4, 5, 6].map((_, idx) => (
                      <div className="faq_row" key={idx}>
                        <div className="faq_question">
                          <div className="faq_question-text">
                            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
                          </div>
                          <div className="icon">
                            <div className="icon-shape"></div>
                          </div>
                        </div>
                        <div className="answercont">
                          <div className="answer">
                            <p>Sed luctus turpis suscipit nisi vestibulum, nec volutpat erat gravida. Nunc nibh nisl, dapibus sed aliquet et, venenatis ut mi. Nam id dui eu lorem vulputate imperdiet non non urna.</p>
                          </div>
                        </div>
                      </div>
                    ))}
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
