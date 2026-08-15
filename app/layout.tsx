import type { Metadata } from "next";
import { Inter, Oswald, Roboto_Mono } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { JsonLd } from "@/components/json-ld";
import { organizationJsonLd, websiteJsonLd } from "@/lib/seo";
import { SITE_NAME, SITE_URL } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const mono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Groundworks Contractors Portsmouth & Hampshire | SouthAxis",
    template: "%s | SouthAxis Infrastructure",
  },
  description:
    "SouthAxis Infrastructure delivers professional groundworks in Portsmouth and Hampshire — foundations, drainage, external works and civil infrastructure for commercial and residential developments.",
  applicationName: SITE_NAME,
  authors: [{ name: "SouthAxis Infrastructure Ltd" }],
  creator: SITE_NAME,
  publisher: "SouthAxis Infrastructure Ltd",
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "Groundworks Contractors Portsmouth & Hampshire | SouthAxis",
    description:
      "Professional groundworks, foundations, drainage and infrastructure packages for developers and contractors across Portsmouth, Hampshire and the South Coast.",
    images: [
      {
        url: "/website_header.jpg",
        width: 1200,
        height: 630,
        alt: "SouthAxis Infrastructure groundworks and civil infrastructure",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Groundworks Contractors Portsmouth & Hampshire | SouthAxis",
    description:
      "Professional groundworks and infrastructure contractors serving Portsmouth, Hampshire and the South Coast.",
    images: ["/website_header.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en-GB"
      className={`${inter.variable} ${mono.variable} ${oswald.variable}`}
    >
      <body className="font-sans antialiased">
        <JsonLd data={[organizationJsonLd(), websiteJsonLd()]} />
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
