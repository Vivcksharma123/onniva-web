import Header from "../components/Header";
import Footer from "../components/Footer";
import ClientScripts from "../components/ClientScripts";
import Image from "next/image";

export default function WebsiteLeads() {
  return (
    <>
      <Header />
      <main>
        <div className="inner-banner">
          <div className="slider-wrap">
            <div className="text">
              <h1>Website Leads</h1>
              <p>Connect your Gravity Forms and Contact Form 7 to your oniva mobile app and admin notifications. Every inquiry submitted through any form on your website is instantly captured, delivered to your app, and sent as a real-time admin alert, no coding required.</p>
              <div className="default_btn">
                <a href="https://app.oniva.app/" target="_blank" rel="noopener noreferrer">get started now</a>
              </div>
            </div>
          </div>
          <canvas id="canvas"></canvas>
        </div>

        <section className="solutionIntro-sec">
          <div className="slider-wrap">
            <div className="imgBox">
              <Image src="/img/solution-intro-1.webp" alt="Solution" className="img-responsive" width={600} height={400} />
            </div>
            <div className="text">
              <div className="text-wrap">
                <p>A webhook bridges your WordPress forms with your mobile app the moment a visitor clicks submit. All form fields name, email, phone, message, and any custom fields are forwarded instantly. Your admin gets notified in real time and every inquiry is stored in a searchable log for follow-up.</p>
                <p>Whether you run a single contact page or dozens of lead capture forms across multiple pages, this integration works across all forms from a single setup, ensuring consistent inquiry capture without duplicating effort or missing a single submission.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="solutionContent pt-100">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="img-box">
                  <Image src="/img/contact-1.webp" alt="Solution" className="img-responsive" width={1200} height={600} />
                </div>
              </div>
              <div className="col-sm-6">
                <h2>Key Features</h2>
                <ul className="list">
                  <li>Real-time mobile app delivery</li>
                  <li>Gravity Forms support</li>
                  <li>Contact Form 7 support</li>
                  <li>Admin push notifications</li>
                  <li>Unified inquiry log dashboard</li>
                </ul>
                <div className="default_btn">
                  <a href="/contact">get started now</a>
                </div>
                <br />
                <div className="small-img">
                  <Image src="/img/chatboat-img-2.webp" alt="Solution" width={400} height={300} />
                </div>
              </div>
              <div className="col-sm-6">
                <h3><strong>Why use this integration?</strong></h3>
                <p>Businesses running WordPress sites with multiple forms often lose track of inquiries submissions sit in email inboxes or plugin dashboards while leads go cold. This integration eliminates that gap by pushing every submission directly to your mobile app and admin the moment it happens.</p>
                <p>By centralising all Gravity Form and Contact Form 7 submissions into a single feed, your team always knows what came in, from which form, and when without logging into WordPress. The result is faster response times and zero missed opportunities.</p>
                <p>With automatic retry logic, encryption in transit, and role-based access to the inquiry log, you get a reliable, secure pipeline that scales with your business without requiring any additional staff or infrastructure.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="advantage-sec black_bg">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="content">
                  <h2>How the integration operates</h2>
                  <p>The integration begins by connecting your WordPress site to the Oniva webhook endpoint. Once a webhook URL is added to your Gravity Forms notification settings or Contact Form 7 configuration, all future submissions are automatically forwarded to the pipeline without any further changes needed.</p>
                  <blockquote><p>When a visitor submits a form, the plugin fires a webhook in real time, sending the full submission payload all fields, the form ID, the source page URL, and a timestamp to the Oniva endpoint, which then routes the data simultaneously to your mobile app and admin notification channel.</p></blockquote>
                  <p>As inquiries accumulate, they are stored in your admin inquiry log, tagged by form name, source page, and submission time. Each entry can be marked as read, unread, or actioned so your team always knows which leads have been followed up on and which are still waiting.</p>
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
                  <p>Find quick answers about setup, compatibility, and how the integration handles your form data.</p>
                </div>
                <div className="faq_main">
                  <div className="faq_row">
                    <div className="faq_question">
                      <div className="faq_question-text">
                        <h3>Do I need coding skills to set this up?</h3>
                      </div>
                      <div className="icon">
                        <div className="icon-shape"></div>
                      </div>
                    </div>
                    <div className="answercont">
                      <div className="answer">
                        <p>No. Setup involves adding a webhook URL inside your Gravity Forms or CF7 notification settings and entering your app credentials. The entire process takes under 15 minutes with no custom code required.</p>
                      </div>
                    </div>
                  </div>
                  <div className="faq_row">
                    <div className="faq_question">
                      <div className="faq_question-text">
                        <h3>Will it work with all of my existing forms automatically?</h3>
                      </div>
                      <div className="icon">
                        <div className="icon-shape"></div>
                      </div>
                    </div>
                    <div className="answercont">
                      <div className="answer">
                        <p>Yes. Once the integration is active it captures submissions from all forms on your WordPress site across all pages. You can also restrict it to specific form IDs if you only want to monitor certain forms.</p>
                      </div>
                    </div>
                  </div>
                  <div className="faq_row">
                    <div className="faq_question">
                      <div className="faq_question-text">
                        <h3>Can multiple admins receive notifications?</h3>
                      </div>
                      <div className="icon">
                        <div className="icon-shape"></div>
                      </div>
                    </div>
                    <div className="answercont">
                      <div className="answer">
                        <p>Yes. Push notifications can be delivered to multiple admin accounts on the mobile app</p>
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
