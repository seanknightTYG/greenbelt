'use client';

import Script from 'next/script';

export default function ChatBubble() {
  return (
    <Script
      id="housecall-pro-chat-bubble"
      src="https://chat.housecallpro.com/proChat.js"
      strategy="afterInteractive"
      data-color="#0ebe11"
      data-organization="9b7a48d4-46b8-47f9-94f3-57e8a1525b30"
    />
  );
}
