'use client';

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

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
                <li className={pathname === '/' ? 'active' : ''}><Link href="/">Home</Link></li>
                <li className={pathname === '/features' ? 'active' : ''}><Link href="/features">Features</Link></li>
                <li className={pathname.startsWith('/ai-') ? 'active' : ''}>
                  <Link href="#">Solutions</Link>
                  <ul>
                    <li><Link href="/ai-representative">AI Representative</Link></li>
                    <li><Link href="/ai-chatbot">AI Chatbot</Link></li>
                    <li><Link href="/ai-email-responder">AI Email Responder</Link></li>
                  </ul>
                </li>
                <li className={pathname === '/use-case' ? 'active' : ''}><Link href="/use-case">Use Cases</Link></li>
                <li className={pathname === '/industries' ? 'active' : ''}><Link href="/industries">Industries</Link></li>
                <li><Link href="#">Recent News</Link></li>
                <li className={pathname === '/contact' ? 'active' : ''}><Link href="/contact">Contact</Link></li>
                <li className="login_btn"><Link href="https://app.oniva.app/" target="_blank">Get Started</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
