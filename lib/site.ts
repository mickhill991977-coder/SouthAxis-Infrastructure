/**
 * Canonical site URL — change ONLY this (or NEXT_PUBLIC_SITE_URL) when the
 * permanent SouthAxis custom domain goes live.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://south-axis-infrastructure.vercel.app"
).replace(/\/$/, "");

export const SITE_NAME = "SouthAxis Infrastructure";
export const LEGAL_NAME = "SouthAxis Infrastructure Ltd";

export const BUSINESS = {
  legalName: LEGAL_NAME,
  brandName: SITE_NAME,
  phoneDisplay: "07385 616316",
  phoneTel: "+447385616316",
  email: "info@southaxis.co.uk",
  companyNumber: "17198562",
  streetAddress: "6 St. Georges Square",
  addressLocality: "Portsmouth",
  addressRegion: "Hampshire",
  postalCode: "PO1 3EY",
  addressCountry: "GB",
  addressCountryName: "England",
  areaServed: ["Portsmouth", "Hampshire", "South Coast of England"],
} as const;

export function absoluteUrl(path = "/"): string {
  if (!path || path === "/") return SITE_URL;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}
