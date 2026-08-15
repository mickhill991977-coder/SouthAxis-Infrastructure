import type { Metadata } from "next";
import { absoluteUrl, BUSINESS, LEGAL_NAME, SITE_NAME, SITE_URL } from "@/lib/site";
import { socialLinks } from "@/lib/content";

const DEFAULT_OG_IMAGE = {
  url: "/website_header.jpg",
  width: 1200,
  height: 630,
  alt: `${SITE_NAME} — professional groundworks and infrastructure contractors in Portsmouth and Hampshire`,
};

type BuildMetadataInput = {
  title: string;
  description: string;
  path?: string;
  type?: "website" | "article";
  image?: string;
  noIndex?: boolean;
  absoluteTitle?: boolean;
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
};

export function buildMetadata({
  title,
  description,
  path = "/",
  type = "website",
  image = DEFAULT_OG_IMAGE.url,
  noIndex = false,
  absoluteTitle = false,
  publishedTime,
  modifiedTime,
  authors,
}: BuildMetadataInput): Metadata {
  const url = absoluteUrl(path);
  const ogImages = [
    {
      url: image,
      width: DEFAULT_OG_IMAGE.width,
      height: DEFAULT_OG_IMAGE.height,
      alt: DEFAULT_OG_IMAGE.alt,
    },
  ];

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale: "en_GB",
      type,
      images: ogImages,
      ...(type === "article"
        ? {
            publishedTime,
            modifiedTime,
            authors,
          }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}

export function organizationJsonLd() {
  const sameAs = socialLinks
    .filter((s) => s.href.startsWith("http"))
    .map((s) => s.href);

  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HomeAndConstructionBusiness", "GeneralContractor"],
    "@id": `${SITE_URL}/#organization`,
    name: LEGAL_NAME,
    alternateName: SITE_NAME,
    url: SITE_URL,
    logo: absoluteUrl("/logo.jpg"),
    image: absoluteUrl("/logo.jpg"),
    telephone: BUSINESS.phoneTel,
    email: BUSINESS.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.streetAddress,
      addressLocality: BUSINESS.addressLocality,
      addressRegion: BUSINESS.addressRegion,
      postalCode: BUSINESS.postalCode,
      addressCountry: BUSINESS.addressCountry,
    },
    areaServed: BUSINESS.areaServed.map((name) => ({
      "@type": "Place",
      name,
    })),
    sameAs,
    knowsAbout: [
      "Groundworks",
      "Foundations",
      "Drainage",
      "External works",
      "Site preparation",
      "Commercial infrastructure",
      "Residential groundworks",
      "Utility preparation",
    ],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: SITE_URL,
    publisher: { "@id": `${SITE_URL}/#organization` },
    inLanguage: "en-GB",
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function webPageJsonLd({
  path,
  name,
  description,
}: {
  path: string;
  name: string;
  description: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${absoluteUrl(path)}#webpage`,
    url: absoluteUrl(path),
    name,
    description,
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}/#organization` },
    inLanguage: "en-GB",
  };
}

export function serviceListJsonLd(
  services: { name: string; description: string; slug: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "SouthAxis Infrastructure services",
    itemListElement: services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: service.name,
        description: service.description,
        url: absoluteUrl(`/services#${service.slug}`),
        provider: { "@id": `${SITE_URL}/#organization` },
        areaServed: BUSINESS.areaServed.map((name) => ({
          "@type": "Place",
          name,
        })),
      },
    })),
  };
}

export function articleJsonLd({
  title,
  description,
  path,
  image,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    mainEntityOfPage: absoluteUrl(path),
    author: {
      "@type": "Organization",
      name: LEGAL_NAME,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: LEGAL_NAME,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl("/logo.jpg"),
      },
    },
    image: absoluteUrl(image ?? "/website_header.jpg"),
    inLanguage: "en-GB",
  };
}
