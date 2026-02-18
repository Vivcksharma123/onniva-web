'use client';

import Header from "../components/Header";
import Footer from "../components/Footer";
import ClientScripts from "../components/ClientScripts";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState('');
  const [phoneError, setPhoneError] = useState('');

  const phoneRegex = /^[0-9]{10,15}$/;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // 🔐 Phone validation
    if (!phoneRegex.test(formData.phone)) {
      setPhoneError('Please enter a valid phone number');
      return;
    } else {
      setPhoneError('');
    }

    setStatus('sending');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('success');
        setFormData({
          name: '',
          phone: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <>
      <Header />
      <main>
        <div className="inner-banner">
          <div className="slider-wrap">
            <div className="text" style={{ maxWidth: '750px', margin: '0 auto' }}>
              <h1>Contact Us</h1>
              <p>
                Get in touch with the Oniva team whether you need support,
                have questions about our services, or want to explore business opportunities.
              </p>
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
                    <p>
                      If you’re looking for assistance or want to speak to someone from our team,
                      you can reach out via the contact details below:
                    </p>

                    <div className="inquiries_form">
                      <form onSubmit={handleSubmit}>
                        <div className="row">
                          <div className="col-sm-6">
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Your Name"
                                required
                                value={formData.name}
                                onChange={(e) =>
                                  setFormData({ ...formData, name: e.target.value })
                                }
                              />
                            </div>
                          </div>

                          <div className="col-sm-6">
                            <div className="form-group">
                              <input
                                type="tel"
                                className="form-control"
                                placeholder="Phone Number"
                                required
                                value={formData.phone}
                                onChange={(e) => {
                                  const value = e.target.value.replace(/\D/g, '');
                                  setFormData({ ...formData, phone: value });
                                }}
                              />
                              {phoneError && (
                                <small style={{ color: 'red' }}>{phoneError}</small>
                              )}
                            </div>
                          </div>

                          <div className="col-sm-12">
                            <div className="form-group">
                              <input
                                type="email"
                                className="form-control"
                                placeholder="Your Email"
                                required
                                value={formData.email}
                                onChange={(e) =>
                                  setFormData({ ...formData, email: e.target.value })
                                }
                              />
                            </div>
                          </div>

                          <div className="col-sm-12">
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Subject"
                                value={formData.subject}
                                onChange={(e) =>
                                  setFormData({ ...formData, subject: e.target.value })
                                }
                              />
                            </div>
                          </div>

                          <div className="col-sm-12">
                            <div className="form-group">
                              <textarea
                                className="form-control"
                                rows={5}
                                placeholder="Message"
                                value={formData.message}
                                onChange={(e) =>
                                  setFormData({ ...formData, message: e.target.value })
                                }
                              ></textarea>
                            </div>
                          </div>

                          <div className="col-sm-12 text-left">
                            <div className="form-group">
                              <button
                                type="submit"
                                className="blue_btn"
                                disabled={status === 'sending'}
                              >
                                {status === 'sending'
                                  ? 'Sending...'
                                  : 'Submit Your Inquiry'}
                              </button>

                              {status === 'success' && (
                                <p style={{ color: 'green', marginTop: '10px' }}>
                                  Message sent successfully!
                                </p>
                              )}

                              {status === 'error' && (
                                <p style={{ color: 'red', marginTop: '10px' }}>
                                  Failed to send message. Please try again.
                                </p>
                              )}
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>

                  <div className="map">
                    <img
                      src="/img/contact-01.webp"
                      alt="Contact"
                      style={{
                        width: '100%',
                        height: '640px',
                        objectFit: 'cover'
                      }}
                    />
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
                <div className="offer">
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                </div>
                <h4>
                  <a href="mailto:support@oniva.app">support@oniva.app</a>
                </h4>
              </div>

              <div className="text-box">
                <div className="offer">
                  <i className="fa fa-phone" aria-hidden="true"></i>
                </div>
                <h4>
                  <a href="tel:+11231231234">(+1) 123-123-1234</a>
                </h4>
              </div>

              <div className="text-box">
                <div className="offer">
                  <i className="fa fa-clock" aria-hidden="true"></i>
                </div>
                <h4>
                  Mon - Fri : 08AM - 10PM <br /> Sat - Sun : Closed
                </h4>
              </div>

              <div className="text-box">
                <div className="offer">
                  <i className="fa fa-map-marker" aria-hidden="true"></i>
                </div>
                <h4>
                  Lorem ipsum dolor <br /> Street 123
                </h4>
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
