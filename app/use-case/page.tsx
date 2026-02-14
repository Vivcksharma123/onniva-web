import Header from "../components/Header";
import Footer from "../components/Footer";
import ClientScripts from "../components/ClientScripts";
import Image from "next/image";

export default function UseCase() {
  const useCases = [
    { img: "marketing-ico.png", title: "Marketing Campaign Builder" },
    { img: "financial-ico.png", title: "Financial Forecasting" },
    { img: "content-ico.png", title: "Creative Content Generation" },
    { img: "ai-ico.png", title: "Customer Support Automation" },
    { img: "hr-ico.png", title: "HR Talent Acquisition" },
    { img: "development-ico.png", title: "Product Development Insights" }
  ];

  return (
    <>
      <Header />
      <main>
        <div className="inner-banner">
          <div className="slider-wrap">
            <div className="text">
              <h1>Use Case</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tincidunt tempor nulla,</p>
              <div className="default_btn">
                <a href="#">get started now</a>
              </div>
            </div>
          </div>
          <canvas id="canvas"></canvas>
        </div>

        <section className="cases-sec black_bg pt-100">
          <div className="container">
            <div className="row">
              {useCases.map((useCase, idx) => (
                <div className="col-md-4 col-sm-6" key={idx}>
                  <div className="serv-box">
                    <div className="img">
                      <Image src={`/img/${useCase.img}`} alt={useCase.title} className="img-responsive" width={80} height={80} />
                    </div>
                    <div className="text">
                      <h3>{useCase.title}</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tincidunt tempor nulla,</p>
                      <div className="default_btn">
                        <a href="#">Read more</a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="sec_group">
          <section className="ctaSec2">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="text text-center">
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
      </main>
      <Footer />
      <ClientScripts />
    </>
  );
}
