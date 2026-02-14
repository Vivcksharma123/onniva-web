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
                <Link href="#">
                  <Image src="/img/logo.png" alt="Logo" width={150} height={50} />
                </Link>
              </div>
              <div className="social-icon">
                <a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                <a href="#"><i className="fa fa-pinterest-p" aria-hidden="true"></i></a>
                <a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                <a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
              </div>
            </div>

            <div className="col-md-3 col-sm-4">
              <div className="footer_menu">
                <h4>Quick links</h4>
                <ul>
                  <li><Link href="#">Home</Link></li>
                  <li><Link href="#">Features</Link></li>
                  <li><Link href="#">Solutions</Link></li>
                  <li><Link href="#">Use Cases</Link></li>
                  <li><Link href="#">Recent News</Link></li>
                  <li><Link href="#">Contact</Link></li>
                </ul>
              </div>
            </div>

            <div className="col-md-3 col-sm-4">
              <div className="footer_menu">
                <h4>Useful Links</h4>
                <ul>
                  <li><Link href="#">Privacy Policy</Link></li>
                  <li><Link href="#">Terms of Usase</Link></li>
                </ul>
              </div>
            </div>

            <div className="col-md-3 col-sm-4">
              <div className="dtl-box">
                <h4>Get in Touch</h4>
                <ul>
                  <li><i className="fa fa-map-marker" aria-hidden="true"></i><a href="#">Lorem ipsum dolor<br /> Street 123, </a></li>
                  <li><i className="fa fa-phone" aria-hidden="true"></i><a href="tel:+1 (555) 123-4567"> (XXX) XXX-XXX-1234</a></li>
                  <li><i className="fa fa-envelope" aria-hidden="true"></i><a href="mailto:hello@grolinq.com">support@Oniva.app</a></li>
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
                <p>© 2026 Oniva.app. All rights reserved.</p>
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
