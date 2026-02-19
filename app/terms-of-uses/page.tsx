import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ClientScripts from "../components/ClientScripts";

export default function PrivacyPolicy() {
  return (
    <>
      <Header />
      
      <div className="inner-banner">
        <div className="slider-wrap">        
          <div className="text">
            <h1>Terms of Uses</h1>
          </div>
        </div>  
        <canvas id="canvas"></canvas>
      </div>
      <section className="content_sec single-blog">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12">
                <div className="text">
                    <p><strong>Effective Date:</strong> January 15, 2026</p>
                    <p>Welcome to <strong>Oniva</strong> (“we,” “our,” or “us”). By accessing or using our website <a href="https://mywebprovider.com/oniva/">https://mywebprovider.com/oniva/</a> and related services, including AI chatbots, AI email responders, and AI representatives (collectively, the “Services”), you agree to comply with and be bound by these Terms of Use.</p>
                    <p>If you do not agree to these terms, please do not use our Services.</p>
                    <h3>1. Use of Services</h3>
                    <p>You agree to use Oniva’s Services only for lawful purposes and in accordance with these Terms. You must not:</p>
                    <ul>
                        <li>Use the Services for any illegal, fraudulent, or unauthorized purpose.</li>
                        <li>Attempt to gain unauthorized access to our systems or data.</li>
                        <li>Interfere with or disrupt the performance or security of the Services.</li>
                        <li>Use the Services to transmit harmful, abusive, or misleading content</li>
                    </ul>
                    <h3>2. AI-Generated Content</h3>
                    <p>Oniva provides AI-powered tools designed to assist with customer communication, automation, and productivity.</p>
                    <ul>
                        <li>AI-generated responses are provided for informational and operational purposes only.</li>
                        <li>You are responsible for reviewing, verifying, and approving AI-generated outputs before using them for business or customer interactions.</li>
                        <li>Oniva is not responsible for decisions made based on AI-generated content.</li>
                    </ul>
                    <h3>3. User Responsibilities</h3>
                    <p>By using our Services, you agree to:</p>
                    <ul>
                        <li>Provide accurate and up-to-date information when required.</li>
                        <li>Maintain the confidentiality of your account credentials.</li>
                        <li>Ensure that any data you upload or share complies with applicable laws and does not infringe on third-party rights.</li>
                    </ul>
                    <h3>4. Intellectual Property</h3>
                    <p>All content on this website, including text, graphics, logos, software, and AI models, is the property of Oniva or its licensors and is protected by intellectual property laws.</p>
                    <p>You may not copy, modify, distribute, sell, or lease any part of our Services without prior written permission.</p>
                    <h3>5. Third-Party Services</h3>
                    <p>Our Services may integrate or link to third-party platforms, tools, or websites. Oniva is not responsible for the content, policies, or practices of any third-party services. Your use of such services is subject to their respective terms and policies.</p>
                    <h3>6. Limitation of Liability</h3>
                    <p>To the maximum extent permitted by law:</p>
                    <ul>
                        <li>Oniva shall not be liable for any indirect, incidental, or consequential damages arising from your use of the Services.</li>
                        <li>We do not guarantee uninterrupted, error-free, or secure operation of the Services.</li>
                    </ul>
                    <p>Your use of the Services is at your own risk.</p>
                    <h3>7. Disclaimer of Warranties</h3>
                    <p>The Services are provided “as is” and “as available,” without warranties of any kind, whether express or implied, including but not limited to merchantability, fitness for a particular purpose, or accuracy of AI-generated outputs.</p>
                    <h3>8. Termination</h3>
                    <p>We reserve the right to suspend or terminate your access to the Services at any time, without notice, if you violate these Terms or engage in activities that may harm Oniva or its users.</p>
                    <h3>9. Changes to Terms</h3>
                    <p>We may update these Terms of Use from time to time. Any changes will be effective immediately upon posting. Continued use of the Services after updates constitutes acceptance of the revised terms.</p>
                    <h3>10. Governing Law</h3>
                    <p>These Terms shall be governed by and interpreted in accordance with applicable laws, without regard to conflict of law principles.</p>
                    <h3>11. Contact Information</h3>
                    <p>If you have any questions regarding these Terms of Use, please contact us:</p>
                    <p><strong>Email:</strong> <a href="mailto:support@oniva.app">support@oniva.app</a><br />
                    <strong>Website:</strong> <a href="https://mywebprovider.com/oniva/">https://mywebprovider.com/oniva/</a></p>
                </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ClientScripts />
    </>
  );
}
