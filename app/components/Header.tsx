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
              <div className="mob-login">
                <Link href="https://app.oniva.app/" target="_blank">Get Started</Link>
              </div>
            </div>
            
            <div className="mainmenu">
              <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/features">Features</Link></li>
                <li>
                  <Link href="#">Solutions</Link>
                  <ul>
                    <li><Link href="/ai-representative">AI Representative</Link></li>
                    <li><Link href="#">Solutions 2</Link></li>
                    <li><Link href="#">Solutions 3</Link></li>
                  </ul>
                </li>
                <li><Link href="/use-case">Use Cases</Link></li>
                <li><Link href="/industries">Industries</Link></li>
                <li><Link href="#">Recent News</Link></li>
                <li><Link href="/contact">Contact</Link></li>
                <li className="login_btn"><Link href="https://app.oniva.app/" target="_blank">Get Started</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
