'use client';

/**
 * Housecall Pro chat bubble, loaded with next/script.
 *
 * Strategy "afterInteractive" = the snippet loads after the page is hydrated and
 * interactive, so it never blocks first paint or your form. Render <ChatBubble />
 * once in app/layout.tsx (just before </body>) so it appears on every page.
 *
 * The values below come straight from the HCP snippet you were given.
 */

import Script from 'next/script';

export default function ChatBubble() {
  return (
    <Script
      id="housecall-pro-chat-bubble"
      src="https://chat.housecallpro.com/proChat.js"
      strategy="afterInteractive"
      data-color="#0E6FBE"
      data-organization="9b7a48d4-46b8-47f9-94f3-57e8a1525b30"
    />
  );
}

/* Usage in app/layout.tsx:
 *
 *   import ChatBubble from '@/components/ChatBubble';
 *
 *   export default function RootLayout({ children }) {
 *     return (
 *       <html lang="en">
 *         <body>
 *           {children}
 *           <ChatBubble />
 *         </body>
 *       </html>
 *     );
 *   }
 */
