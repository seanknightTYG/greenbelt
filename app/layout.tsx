import type { Metadata } from 'next';
import { Source_Sans_3 } from 'next/font/google';
import './globals.css';
import ChatBubble from '@/components/ChatBubble';

const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-source-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Greenbelt Electrical — Licensed Electricians in Humboldt County',
  description:
    'Greenbelt Electrical is a licensed C-10 contractor serving Humboldt County since 2015. Panel upgrades, EV chargers, and whole-home rewiring done right.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={sourceSans.variable}>
      <body>
        {children}
        <ChatBubble />
      </body>
    </html>
  );
}
