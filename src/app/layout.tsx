import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Thanapon | Yoke-TH',
  description:
    'Welcome to Thanapon, the portfolio website of Yoke-TH, showcasing projects, skills, and experiences in software development.',
  keywords: ['Thanapon', 'Yoke-TH', 'portfolio', 'developer', 'software engineering', 'projects'],
  authors: [{ name: 'Thanapon', url: 'https://yoke-th.me' }],
  viewport: 'width=device-width, initial-scale=1.0',
  robots: 'index, follow',
  openGraph: {
    title: 'Thanapon | Yoke-TH Portfolio',
    description: 'Explore the portfolio of Yoke-TH, featuring projects and experiences in software development.',
    url: 'https://yoke-th.me',
    siteName: 'Thanapon | Yoke-TH Portfolio',
    images: [
      {
        url: 'https://yoke-th.me/me.jpg',
        width: 2048,
        height: 1365,
        alt: 'Thanapon Portfolio Preview',
      },
    ],
    type: 'website',
    locale: 'en_US',
  },
  alternates: {
    canonical: 'https://yoke-th.me',
  },
  themeColor: '#ffffff',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
