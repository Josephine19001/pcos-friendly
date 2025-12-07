import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StructuredData from "@/components/StructuredData";
import { LocaleProvider } from "@/contexts/LocaleContext";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PCOS Friendly - AI Food Analysis for Hormonal Health",
  description: "Snap or upload any food image to instantly see sugar content, hormone impact, inflammatory score, fiber content, and glycemic index. The #1 food scanner app optimized for PCOS management and hormonal balance.",
  keywords: [
    "PCOS",
    "PCOS diet",
    "PCOS food",
    "PCOS friendly foods",
    "PCOS meal plan",
    "PCOS nutrition",
    "PCOS weight loss",
    "polycystic ovary syndrome",
    "hormonal balance",
    "insulin resistance",
    "glycemic index",
    "anti-inflammatory diet",
    "hormone health",
    "food scanner",
    "food analysis app",
    "PCOS app",
    "PCOS tracker",
    "low glycemic foods",
    "PCOS symptoms",
    "PCOS management",
    "women's health",
    "fertility diet",
    "hormone diet",
    "sugar content",
    "fiber content",
    "inflammatory foods",
  ],
  authors: [{ name: "PCOS Friendly" }],
  creator: "PCOS Friendly",
  publisher: "PCOS Friendly",
  metadataBase: new URL("https://pcosfriendly.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://pcosfriendly.com",
    siteName: "PCOS Friendly",
    title: "PCOS Friendly - AI Food Scanner for Hormonal Health",
    description: "Instantly analyze any food's impact on PCOS. Get sugar content, glycemic index, hormone impact, and inflammatory scores. Download free on iOS.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "PCOS Friendly - AI Food Analysis App",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PCOS Friendly - AI Food Scanner for Hormonal Health",
    description: "Instantly analyze any food's impact on PCOS. Get sugar content, glycemic index, hormone impact, and inflammatory scores.",
    images: ["/og-image.png"],
    creator: "@pcosfriendly",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your verification codes here when you have them
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
  category: "Health & Fitness",
  classification: "Health App",
  other: {
    "apple-itunes-app": "app-id=6756167013",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="theme-color" content="#10B981" />
      </head>
      <body className={`${inter.variable} antialiased`}>
        <StructuredData />
        <LocaleProvider>
          {children}
        </LocaleProvider>
      </body>
    </html>
  );
}
