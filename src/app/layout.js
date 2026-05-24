import { Inter, DM_Sans } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export const metadata = {
  title: 'NayanSaathi — AI Vision Aid for the Visually Impaired',
  description:
    'NayanSaathi is an AI-powered mobile app that helps visually impaired individuals see the world through sound. Real-time image descriptions, multilingual support, and voice-based Q&A.',
  keywords: [
    'assistive technology',
    'visually impaired',
    'blind',
    'AI',
    'vision aid',
    'NayanSaathi',
    'accessibility',
    'screen reader',
    'image description',
  ],
  openGraph: {
    title: 'NayanSaathi — AI Vision Aid for the Visually Impaired',
    description:
      'Empowering blind individuals with AI-powered real-time image descriptions, multilingual support, and interactive voice Q&A.',
    url: 'https://nayansati.com',
    siteName: 'NayanSaathi',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
