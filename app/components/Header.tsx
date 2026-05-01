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
                <li>
                  <Link href="#" style={pathname.startsWith('/ai-') ? {color: '#22d3ee'} : {}}>Solutions</Link>
                  <ul>
                    <li>
                      <Link href="/ai-representative" className={pathname === '/ai-representative' ? 'active' : ''}>AI Representative</Link>
                    </li>
                    <li>
                      <Link href="/ai-chatbot" className={pathname === '/ai-chatbot' ? 'active' : ''}>AI Chatbot</Link>
                    </li>
                    <li>
                      <Link href="/ai-email-responder" className={pathname === '/ai-email-responder' ? 'active' : ''}>AI Email Responder</Link>
                    </li>
                    <li>
                      <Link href="/website-leads" className={pathname === '/website-leads' ? 'active' : ''}>Website Leads</Link>
                    </li>
                    <li>
                      <Link href="/whatsapp-agent" className={pathname === '/whatsapp-agent' ? 'active' : ''}>Whatsapp Agent</Link>
                    </li>
                  </ul>
                </li>
                <li className={pathname === '/use-case' ? 'active' : ''}><Link href="/use-case">Use Cases</Link></li>
                <li className={pathname === '/industries' ? 'active' : ''}><Link href="/industries">Industries</Link></li>
                <li className={pathname === '/pricing' ? 'active' : ''}><Link href="/pricing">Pricing</Link></li>
                <li><Link href="https://blog.oniva.app/">Latest News</Link></li>
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
