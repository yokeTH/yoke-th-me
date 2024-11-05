import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { MyNextUiProvider } from "./myNextUiProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Thaminal",
  description: "yoke-th portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}><MyNextUiProvider>{children}</MyNextUiProvider></body>
    </html>
  );
}
