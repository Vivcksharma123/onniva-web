import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header id="myHeader">
      <div className="main_header">
        <div className="wrap">
          <div className="logo">
            <Link href="/">
              <Image src="/img/logo.png" alt="Logo" width={150} height={50} />
            </Link>
          </div>
          
          <div className="rightHeader">
            <div className="top_head">
              <div className="social-ico">
                <a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                <a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                <a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                <a href="#"><i className="fa fa-pinterest-p" aria-hidden="true"></i></a>
              </div>

              <div className="email">
                <a href="#"><i className="fa fa-envelope" aria-hidden="true"></i>support@Oniva.app</a>
              </div>
              <div className="mob-login">
                <a href="#">Login</a>
              </div>
            </div>
            
            <div className="mainmenu">
              <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/features">Features</Link></li>
                <li>
                  <Link href="/solutions">Solutions</Link>
                  <ul>
                    <li><Link href="#">Solutions 1</Link></li>
                    <li><Link href="#">Solutions 2</Link></li>
                    <li><Link href="#">Solutions 3</Link></li>
                  </ul>
                </li>
                <li><Link href="/use-case">Use Cases</Link></li>
                <li><Link href="#">Recent News</Link></li>
                <li><Link href="/contact">Contact</Link></li>
                <li className="login_btn"><Link href="#">Login</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
