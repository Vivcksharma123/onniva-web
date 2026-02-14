import Header from "../components/Header";
import Footer from "../components/Footer";
import ClientScripts from "../components/ClientScripts";

export default function Contact() {
  return (
    <>
      <Header />
      <main>
        <div className="inner-banner">
          <div className="slider-wrap">
            <div className="text">
              <h1>Contact Us</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tincidunt tempor nulla,</p>
            </div>
          </div>
          <canvas id="canvas"></canvas>
        </div>

        <section className="contact-sec">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="row-wrap">
                  <div className="form_block">
                    <h2>Get in Touch</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada felis est</p>
                    <div className="inquiries_form">
                      <form id="contact-form" method="post" action="" role="form">
                        <div className="row">
                          <div className="col-sm-6">
                            <div className="form-group">
                              <input type="text" className="form-control" placeholder="Your Name" required />
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="form-group">
                              <input type="tel" className="form-control" placeholder="Phone Number" />
                            </div>
                          </div>
                          <div className="col-sm-12">
                            <div className="form-group">
                              <input type="email" className="form-control" placeholder="Your Email" required />
                            </div>
                          </div>
                          <div className="col-sm-12">
                            <div className="form-group">
                              <input type="text" className="form-control" placeholder="Subject" />
                            </div>
                          </div>
                          <div className="col-sm-12">
                            <div className="form-group">
                              <textarea className="form-control" rows={5} placeholder="Message"></textarea>
                            </div>
                          </div>
                          <div className="col-sm-12 text-left">
                            <div className="form-group">
                              <button className="blue_btn">Submit Your Inquiry</button>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="map">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59084.93595394232!2d-123.10111825131203!3d49.32533251225834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54867046f9232b41%3A0x6f85cb4bd4fbec5a!2sNorth%20Vancouver%2C%20BC%2C%20Canada!5e0!3m2!1sen!2sin!4v1768033315178!5m2!1sen!2sin" 
                      width="100%" 
                      height="100%" 
                      style={{border:0}} 
                      allowFullScreen 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="contactDtl-sec">
          <div className="wrap">
            <div className="sec-row">
              <div className="text-box">
                <div className="offer"><i className="fa fa-envelope" aria-hidden="true"></i></div>
                <h4><a href="mailto:support@Oniva.app">support@Oniva.app</a></h4>
              </div>
              <div className="text-box">
                <div className="offer"><i className="fa fa-phone" aria-hidden="true"></i></div>
                <h4><a href="#"> (XXX) XXX-XXX-1234</a></h4>
              </div>
              <div className="text-box">
                <div className="offer"><i className="fa fa-clock" aria-hidden="true"></i></div>
                <h4>Mon - Fri : 08AM - 10PM <br /> sat - sun : close</h4>
              </div>
              <div className="text-box">
                <div className="offer"><i className="fa fa-map-marker" aria-hidden="true"></i></div>
                <h4>Lorem ipsum <br /> dolor sit amet</h4>
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
