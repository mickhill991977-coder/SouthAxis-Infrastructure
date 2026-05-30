import type { Metadata } from "next";
import { Inter, Oswald, Roboto_Mono } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { contactDetails } from "@/lib/content";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const mono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap"
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap"
});

export const metadata: Metadata = {
  title: {
    default: "SouthAxis Infrastructure | Groundworks & Civil Infrastructure",
    template: "%s | SouthAxis Infrastructure"
  },
  description:
    "Premium groundworks, foundations, drainage, external works and site preparation for developers, contractors and homeowners.",
  metadataBase: new URL("https://southaxis-infrastructure.vercel.app"),
  openGraph: {
    title: "SouthAxis Infrastructure",
    description:
      "Groundworks, foundations, drainage, external works and site preparation for demanding construction programmes.",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "SouthAxis Infrastructure",
    telephone: contactDetails.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: "6 St. Georges Square",
      addressLocality: "Portsmouth",
      addressRegion: "Hampshire",
      addressCountry: "England",
      postalCode: "PO1 3EY"
    },
    identifier: `Company No: ${contactDetails.companyNo}`,
    areaServed: "United Kingdom",
    serviceType: ["Groundworks", "Drainage", "Foundations", "External works", "Site preparation"]
  };

  return (
    <html lang="en" className={`${inter.variable} ${mono.variable} ${oswald.variable}`}>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
