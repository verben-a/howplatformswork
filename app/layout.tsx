import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "How Platforms Work — Alina Verbenchuk",
    template: "%s | How Platforms Work",
  },
  description:
    "How Platforms Work by Alina Verbenchuk — a book about the mechanics, strategy, and future of platform businesses at the intersection of technology and the creator economy.",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://howplatformswork.com",
    siteName: "How Platforms Work",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="flex min-h-screen flex-col bg-background text-foreground font-sans">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
