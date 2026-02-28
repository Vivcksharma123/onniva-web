import Header from "../components/Header";
import Footer from "../components/Footer";
import ClientScripts from "../components/ClientScripts";
import Image from "next/image";
import Link from "next/link";



export default function UseCase() {
  const useCases = [
    {
      title: "Home Services (Plumbing, HVAC, & Electrical)",
      icon: "HomeServices.png",
      description: "For plumbing companies, electricians, HVAC specialists, and roofing contractors, our AI Voice Representative serves as a 24/7 digital dispatcher that ensures no service call ever goes unanswered. By expertly qualifying job urgency, providing instant quotes, and booking site visits directly into your team's calendar, the system eliminates the 20% revenue loss typical of missed calls in the trades. This shift from playing phone tag to automated intake allows your technicians to remain focused on the tools while your business continues to capture high-value leads and emergency repair requests at any hour of the day or night.",
    },
    {
      title: "Real Estate & Property Management",
      icon: "Real-Estatepng.png",
      description: "Our AI solution empowers residential agencies, property managers, and commercial leasing firms to maintain a competitive edge through instantaneous lead engagement. By handling property feature inquiries, rental qualification screening, and automated viewing tours, the system dramatically reduces the response time that often dictates a closed deal. In an industry where speed is the primary currency, our AI Representative ensures that every prospective buyer or tenant receives immediate, professional attention, resulting in a 70% increase in scheduled showings and a significant reduction in manual administrative overhead. ",
    },
    {
      title: "Legal & Financial Services",
      icon: "Legal-Financial.png",
      description: "Designed for the high-trust environments of law firms, accounting practices, and insurance brokers, our AI Representative acts as a sophisticated first point of contact for client intake. The system meticulously manages initial lead screening, conflict of interest checks, and consultation scheduling, ensuring that your senior partners only spend time on pre-qualified, high-value cases. By automating the data-heavy intake process, firms can significantly lower their cost-per-acquisition while providing potential clients with the immediate, professional responsiveness expected in the legal and financial sectors. ",
    },
    {
      title: "Automotive Dealerships & Service Centers",
      icon: "AutomotiveDealerships.png",
      description: "For car dealerships, independent repair shops, and rental agencies, our AI Voice System optimizes the service bay by automating high-volume routine coordination. The AI seamlessly manages oil change and tire rotation bookings, service status updates, and test drive scheduling, allowing your service advisors to focus on complex diagnostics and customer consultations. This operational efficiency maximizes your daily throughput and ensures that routine maintenance inquiries are handled with mechanical precision, directly increasing your service center's monthly revenue and customer satisfaction scores.",
    },
    {
      title: "Hospitality & Event Venues",
      icon: "Hospitality-01.png",
      description: "Our AI Representative allows fine dining restaurants, boutique hotels, and event venues to provide 5-star service before the guest even walks through the door. By flawlessly managing table reservations, dietary inquiries, and event space availability, the system removes the burden of phone management from your floor staff during peak hours. This ensures that your team can stay present with the guests in the room, while the AI captures every incoming reservation and inquiry with the same level of hospitality and brand-perfect tone your establishment is known for.",
    },
    
  ];

  return (
    <>
      <Header />

      <main>
        {/* Banner */}
        <div className="inner-banner">
          <div className="slider-wrap">
            <div className="text">
              <h1>Industries</h1>
              <p>Transforming industries with smart technology, tailored solutions, and measurable results from finance and healthcare to eCommerce and government.</p>
              <div className="default_btn">
                <Link href="https://app.oniva.app/" target="_blank">Get started now</Link>
              </div>
            </div>
          </div>
          <canvas id="canvas"></canvas>
        </div>

        {/* Use Cases */}
        <section className="cases-sec black_bg pt-100">
          <div className="container">
            <div className="row">
              {useCases.map((item, index) => (
                <div className="col-md-12 col-sm-6" key={index}>
                  <div className="serv-box">
                    <div className="img">
                      <Image
                        src={`/img/${item.icon}`}
                        alt={item.title}
                        width={80}
                        height={80}
                        className="img-responsive"
                      />
                    </div>
                    <div className="text">
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
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
            <div
              className="geometric-background"
              id="geometric-background"
            ></div>
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
      </main>

      <Footer />
      <ClientScripts />
    </>
  );
}
