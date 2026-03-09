'use client';

import React, { useState, useEffect } from "react";
import "./InquiryForm.css";

export default function InquiryForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const [submitted, setSubmitted] = useState(false);
  const [status, setStatus] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [captcha, setCaptcha] = useState({ num1: 0, num2: 0, answer: "" });

  useEffect(() => {
    generateCaptcha();
  }, []);

  const generateCaptcha = () => {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    setCaptcha({ num1, num2, answer: "" });
  };

  const validateForm = () => {
    const newErrors: Record<string, boolean> = {};

    if (!formData.name.trim()) newErrors.name = true;
    if (!formData.phone.trim()) newErrors.phone = true;
    if (!formData.email.trim()) newErrors.email = true;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email && !emailRegex.test(formData.email)) {
      newErrors.email = true;
    }

    if (formData.phone && formData.phone.length < 10) {
      setPhoneError("Phone must be at least 10 digits");
      setTimeout(() => setPhoneError(""), 5000);
      newErrors.phone = true;
    } else {
      setPhoneError("");
    }

    if (!captcha.answer.trim()) {
      setPhoneError("Please answer the security question");
      setTimeout(() => setPhoneError(""), 5000);
      newErrors.captcha = true;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    if (!validateForm()) return;

    if (parseInt(captcha.answer) !== captcha.num1 + captcha.num2) {
      setPhoneError("Incorrect answer. Please try again.");
      setTimeout(() => setPhoneError(""), 5000);
      generateCaptcha();
      return;
    }

    try {
      setStatus("sending");
      
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus("success");
        setTimeout(() => setStatus(""), 5000);

        setFormData({
          name: "",
          phone: "",
          email: "",
          subject: "",
          message: "",
        });

        generateCaptcha();
        setErrors({});
        setSubmitted(false);
      } else {
        setStatus("error");
        setTimeout(() => setStatus(""), 5000);
        generateCaptcha();
      }
    } catch (error) {
      setStatus("error");
      setTimeout(() => setStatus(""), 5000);
      generateCaptcha();
    }
  };

  return (
    <>
      {phoneError && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          backgroundColor: '#dc3545',
          color: 'white',
          padding: '15px',
          textAlign: 'center',
          zIndex: 99999,
          fontWeight: '500',
          boxShadow: '0 2px 5px rgba(0,0,0,0.2)'
        }}>
          {phoneError}
        </div>
      )}
      {status === "success" && (
        <div style={{
          position: 'fixed',
          top: '20%',
          left: 0,
          right: 0,
          margin: '0 auto',
          width:'60%',
          borderRadius: '10px',
          backgroundColor: '#28a745',
          color: 'white',
          padding: '15px',
          textAlign: 'center',
          zIndex: 99999,
          fontWeight: '500',
          boxShadow: '0 2px 5px rgba(0,0,0,0.2)'
        }}>
          Thank you for contacting us! Our team will review your inquiry and get back to you as soon as possible.
        </div>
      )}
      {status === "error" && (
        <div style={{
          position: 'fixed',
          top: '20%',
          left: 0,
          right: 0,
          margin: '0 auto',
          width:'60%',
          borderRadius: '10px',
          backgroundColor: '#dc3545',
          color: 'white',
          padding: '15px',
          textAlign: 'center',
          zIndex: 99999,
          fontWeight: '500',
          boxShadow: '0 2px 5px rgba(0,0,0,0.2)'
        }}>
          Failed to send message. Please try again.
        </div>
      )}
      <div className="inquiries_form">
        <form onSubmit={handleSubmit} noValidate>
          <div className="row">
            <div className="col-sm-6">
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Your Name"
                  className={`form-control ${submitted && errors.name ? "input-error" : ""}`}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
            </div>

            <div className="col-sm-6">
              <div className="form-group">
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className={`form-control ${submitted && errors.phone ? "input-error" : ""}`}
                  value={formData.phone}
                  onChange={(e) => {
                    const value = e.target.value.replace(/\D/g, "");
                    setFormData({ ...formData, phone: value });
                  }}
                />
              </div>
            </div>

            <div className="col-sm-12">
              <div className="form-group">
                <input
                  type="email"
                  placeholder="Your Email"
                  className={`form-control ${submitted && errors.email ? "input-error" : ""}`}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                />
              </div>
            </div>

            <div className="col-sm-12">
              <div className="form-group">
                <textarea
                  rows={5}
                  placeholder="Message"
                  className="form-control"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>
            </div>

            <div className="col-sm-12">
              <div className="form-group" style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                <div>
                  <label style={{ marginBottom: '10px', display: 'block' }}>
                    Security Question: What is {captcha.num1} + {captcha.num2}?
                  </label>
                  <input
                    type="number"
                    className={`form-control ${submitted && errors.captcha ? "input-error" : ""}`}
                    placeholder="Your answer"
                    value={captcha.answer}
                    onChange={(e) => setCaptcha({ ...captcha, answer: e.target.value })}
                    style={{ maxWidth: '200px' }}
                  />
                </div>
                <button
                  type="submit"
                  className="blue_btn"
                  disabled={status === "sending"}
                  style={{ marginTop: '30px' }}
                >
                  {status === "sending" ? "Sending..." : "Submit"}
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
