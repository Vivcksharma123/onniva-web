import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ClientScripts from "../components/ClientScripts";

export default function RefundPolicy() {
  return (
    <>
      <Header />
      
      <div className="inner-banner">
        <div className="slider-wrap">        
          <div className="text">
            <h1>Refund Policy</h1>
          </div>
        </div>  
        <canvas id="canvas"></canvas>
      </div>
      <section className="content_sec single-blog">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12">
                <div className="text">
                    <h3>1. Setup Fee Refund Eligibility</h3>
                    <ul>
                        <li>The <b>setup fee</b> is refundable if AI Integration has not commenced within 7 days from the date of purchase.</li>
                        <li>If the integration work has not been initiated within this 7-day window, the customer may request a refund of the setup fee.</li>
                    </ul>

                    <h3>2. Setup Fee Non-Refundable After Work Starts</h3>
                    <ul>
                        <li>Once the AI Integration process <b>has started</b>, the setup fee is non-refundable under any circumstances.</li>
                        <li>Initiation of integration work includes planning, configuration, account creation, or any action taken by our team toward onboarding.</li>
                    </ul>

                    <h3>3. Refunds Issued as Wallet Credit Only</h3>
                    <ul>
                        <li>Any approved refunds will be issued as <b>credit to the user’s platform wallet</b>.</li>
                        <li>No refunds will be processed back to the original payment method (e.g., card, PayPal, etc.).</li>
                        <li>Wallet credits can be used for future services, upgrades, add-ons, or renewals.</li>
                    </ul>

                    <h3>4. Requesting a Refund</h3>
                    <p>Refund requests must be submitted in writing to our support team within the eligible period. We reserve the right to verify eligibility before issuing wallet credit.</p>

                    <h3>5. Changes to Policy</h3>
                    <p>This refund policy may be updated from time to time to reflect business or legal requirements. Updated policies will be posted on the website.</p>
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
