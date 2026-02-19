import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-23">
              <div className="foot_logo">
                <Link href="/">
                  <Image src="/img/logo.png" alt="Logo" width={150} height={50} />
                </Link>
              </div>
            </div>

            <div className="col-md-3 col-sm-4">
              <div className="footer_menu">
                <h4>Quick links</h4>
                <ul>
                  <li><Link href="/">Home</Link></li>
                  <li><Link href="/features">Features</Link></li>
                  <li><Link href="/industries">Industries</Link></li>
                  <li><Link href="/use-case">Use Cases</Link></li>
                  <li><Link href="/pricing">Pricing</Link></li>
                  <li><Link href="#">Latest News</Link></li>
                  <li><Link href="/contact">Contact</Link></li>
                </ul>
              </div>
            </div>

            <div className="col-md-3 col-sm-4">
              <div className="footer_menu">
                <h4>Useful Links</h4>
                <ul>
                  <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                  <li><Link href="/terms-of-uses">Terms of Uses</Link></li>
                </ul>
              </div>
            </div>

            <div className="col-md-3 col-sm-4">
              <div className="dtl-box">
                <h4>Get in Touch</h4>
                <ul>
                  <li><i className="fa fa-phone" aria-hidden="true"></i><a href="tel:+1123-231234">(+1) 123-123-1234</a></li>
                  <li><i className="fa fa-envelope" aria-hidden="true"></i><a href="mailto:support@oniva.app">support@oniva.app</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <section className="last_foot">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12">
              <div className="privacy_policy">
                <p>© 2026 Oniva.app. All rights reserved. Powered by<a href="https://www.f5buddy.com/" target="_blank">F5 Buddy Pvt Ltd</a></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <a id="BackToTop" className="show">
        <i className="fa fa-chevron-up" aria-hidden="true"></i>
      </a>
    </>
  );
}
