'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ChatWidget() {
  const pathname = usePathname();

  useEffect(() => {
    document.getElementById('oniva-bot-ai-chat-widget-window')?.remove();
    document.querySelector('script[src="https://app.oniva.app/chat-widget.js"]')?.remove();

    (window as any).aiChatConfig = {
      agentId: 'a89c8cfc-6682-41d9-8c36-08651872d919',
      apiUrl: 'https://app.oniva.app'
    };

    const script = document.createElement('script');
    script.src = 'https://app.oniva.app/chat-widget.js';
    script.async = true;
    document.head.appendChild(script);
  }, [pathname]);

  return null;
}
