import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// REPLACE THE OLD METADATA WITH THIS:
export const metadata: Metadata = {
  title: 'Lux Elite Cleaning | Westchester\'s Premier Penthouse Cleaning',
  description: 'Bespoke, white-glove cleaning and estate maintenance for Westchester County’s most prestigious residences. Serving Scarsdale, Bronxville, Irvington, White Plains, New Rochelle, Yonkers and Rye with elite attention to detail.',
  keywords: [
  'Luxury Cleaning Westchester NY', 
  'Estate Maintenance Scarsdale', 
  'Penthouse Cleaning White Plains', 
  'Elite Maid Service Chappaqua', 
  'Post-Construction Cleaning Westchester',
  'Luxury Housekeeping Bronxville NY',
  'Premium Home Services Greenwich' // Optional, but great for capturing nearby CT traffic
],
  openGraph: {
    title: `Lux Elite Cleaning | Westchester's Premier Service`,
    description: 'Bespoke, white-glove cleaning and estate maintenance for Westchester’s most prestigious residences.',
    url: 'https://lux-elite-cleaning.vercel.app', // Replace with your actual domain
    siteName: 'Lux Elite Cleaning',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/img/Lux_Elite_Cleaning_White.png',
        width: 1200,
        height: 630,
        alt: 'Lux Elite Cleaning - Premium Westchester Service',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
