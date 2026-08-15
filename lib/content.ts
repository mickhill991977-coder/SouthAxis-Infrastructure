import {
  Building2,
  Cable,
  Construction,
  Droplets,
  Fence,
  LandPlot,
  Layers3,
  Shovel
} from "lucide-react";

export const navItems = [
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" }
];

export const imageSet = {
  hero: "/website_header.jpg",
  brand: "/logo.jpg",
  groundworks: "/services/groundworks.jpg",
  foundations: "/services/foundations.jpg",
  drainage: "/services/drainage.jpg",
  externalWorks: "/services/external-works.jpg",
  sitePreparation: "/services/site-preparation.jpg",
  commercial: "/services/commercial.jpg",
  residential: "/services/residential.jpg",
  utility: "/services/utility.jpg",
  formation: "/services/formation.jpg"
};

// PLACEHOLDER COMMERCIAL STATS — REPLACE WITH VERIFIED SOUTHAXIS FIGURES BEFORE RELYING ON THESE AS FACTUAL CLAIMS.
export const stats = [
  { value: "£5M+", label: "Project value supported" },
  { value: "50+", label: "Projects delivered" },
  { value: "100+", label: "Plots / units serviced" },
  { value: "10+", label: "Active client relationships" }
];

export const contactDetails = {
  phone: "07385 616316",
  phoneHref: "tel:+447385616316",
  addressLines: ["6 St. Georges Square", "Portsmouth", "Hampshire", "England", "PO1 3EY"],
  companyNo: "17198562"
};

/**
 * Social profiles. Only entries with a URL are rendered in the footer.
 * Add LinkedIn once the official SouthAxis company page URL is confirmed.
 */
export const socialLinks: Array<{
  label: string;
  href: string;
  network: "facebook" | "instagram" | "linkedin";
}> = [
  {
    label: "SouthAxis Infrastructure on Facebook",
    href: "https://www.facebook.com/61588941685235",
    network: "facebook"
  },
  {
    label: "SouthAxis Infrastructure on Instagram",
    href: "https://www.instagram.com/southaxis.infrastructure/",
    network: "instagram"
  }
  // LinkedIn: no verified URL found in the repository. Enable by appending:
  // { label: "SouthAxis Infrastructure on LinkedIn", href: "https://www.linkedin.com/company/...", network: "linkedin" }
];

export const services = [
  {
    title: "Groundworks",
    description:
      "Bulk excavations, reduced levels, trenching, reinstatement and engineered build-ups for commercial construction sites and high-spec residential schemes.",
    icon: Shovel,
    image: imageSet.groundworks,
    imageAlt: "Tracked excavator carrying out bulk excavation on a groundworks site",
    points: ["Bulk excavation", "Reduced levels", "Trenching", "Engineered build-ups"]
  },
  {
    title: "Foundations",
    description:
      "Foundation preparation and concrete-ready packages for structural footprints, extensions, pads, strips and multi-plot development programmes.",
    icon: Layers3,
    image: imageSet.foundations,
    imageAlt: "UK residential housing site with concrete strip foundations, excavated trenches and plant on an active building site",
    points: ["Strip foundations", "Pad foundations", "Oversite preparation", "Inspection-ready excavations"]
  },
  {
    title: "Drainage",
    description:
      "Foul, storm and surface water drainage delivered with accurate falls, chamber coordination and a clean route to inspection and adoption.",
    icon: Droplets,
    image: imageSet.drainage,
    imageAlt: "Corrugated drainage pipes being installed in a gravel-bedded trench",
    points: ["Foul drainage", "Storm drainage", "Chambers", "Surface water management"]
  },
  {
    title: "External Works",
    description:
      "Hardstanding, kerbs, edgings, access routes and external finishes designed around durable performance and professional handover.",
    icon: Fence,
    image: imageSet.externalWorks,
    imageAlt: "New UK housing estate access road with concrete kerbs and unfinished external works",
    points: ["Kerbing", "Hardstanding", "Access routes", "External finishes"]
  },
  {
    title: "Site Preparation",
    description:
      "Early enabling works that turn constrained land into a controlled construction environment, ready for follow-on trades and plant movement.",
    icon: Construction,
    image: imageSet.sitePreparation,
    imageAlt: "Excavators earthmoving and preparing formation on a construction site",
    points: ["Site clearance", "Temporary access", "Compound preparation", "Enabling works"]
  },
  {
    title: "Commercial Infrastructure",
    description:
      "Civil and groundwork packages for developers, principal contractors and commercial operators working to demanding site programmes.",
    icon: Building2,
    image: imageSet.commercial,
    imageAlt: "Large commercial civil engineering site with excavator and concrete works",
    points: ["Developer packages", "Contractor support", "Programme sequencing", "Multi-trade coordination"]
  },
  {
    title: "Residential Groundworks",
    description:
      "High-quality domestic groundwork for private clients, extensions, drainage improvements, driveways and small development plots.",
    icon: LandPlot,
    image: imageSet.residential,
    imageAlt: "Modern UK new-build houses with driveway formation and residential groundworks",
    points: ["Extensions", "Private drainage", "Driveway preparation", "Property protection"]
  },
  {
    title: "Utility Preparation",
    description:
      "Service trenches, duct routes and reinstatement packages planned to integrate cleanly with utilities, roads and site logistics.",
    icon: Cable,
    image: imageSet.utility,
    imageAlt: "Excavated UK service trench with utility ducts prepared for underground services",
    points: ["Service trenches", "Duct routes", "Backfill", "Reinstatement"]
  }
];

export const projects = [
  {
    title: "Distribution Yard Enabling Works",
    location: "Midlands logistics corridor",
    type: "Commercial infrastructure",
    image: imageSet.commercial,
    description:
      "Formation, drainage coordination and hardstanding preparation for a high-traffic distribution yard upgrade.",
    metrics: [
      { value: "Formation", label: "Hardstanding prep" },
      { value: "Drainage", label: "Coordination" },
      { value: "Access", label: "Plant routes" }
    ]
  },
  {
    title: "Multi-Plot Foundation Package",
    location: "Residential development site",
    type: "Foundations",
    image: imageSet.foundations,
    description:
      "Sequenced excavation, trench preparation and concrete coordination across a compact residential development footprint.",
    metrics: [
      { value: "Strip", label: "Foundations" },
      { value: "Pad", label: "Foundations" },
      { value: "Oversite", label: "Preparation" }
    ]
  },
  {
    title: "Primary Drainage Renewal",
    location: "Occupied private estate",
    type: "Drainage",
    image: imageSet.drainage,
    description:
      "Targeted drainage replacement with controlled excavations, protected access and clean reinstatement around live property use.",
    metrics: [
      { value: "Foul", label: "Systems" },
      { value: "Storm", label: "Systems" },
      { value: "Chambers", label: "Installed" }
    ]
  },
  {
    title: "Commercial Site Preparation",
    location: "Out-of-town development",
    type: "Site preparation",
    image: imageSet.sitePreparation,
    description:
      "Clearance, reduced levels and temporary construction access for a commercial shell and core build programme.",
    metrics: [
      { value: "Clearance", label: "Enabling works" },
      { value: "Access", label: "Temporary routes" },
      { value: "Formation", label: "Ready for build" }
    ]
  }
];

export const testimonials = [
  {
    quote:
      "SouthAxis brought the kind of site discipline you want on a pressured commercial programme. Clear communication, clean sequencing and no drama.",
    name: "Commercial Development Manager",
    company: "Regional contractor"
  },
  {
    quote:
      "Their groundwork team understood the constraints immediately and helped us protect access while still moving the foundation package forward.",
    name: "Private Client Representative",
    company: "Residential scheme"
  },
  {
    quote:
      "Drainage details were handled properly from day one. It made inspection and handover much more straightforward.",
    name: "Project Quantity Surveyor",
    company: "Construction partner"
  }
];

export const blogPosts = [
  {
    slug: "planning-groundworks-before-mobilisation",
    category: "Planning",
    title: "Planning groundworks before mobilisation",
    image: imageSet.groundworks,
    excerpt: "The strongest groundwork packages are decided before plant arrives, with access, sequencing and inspection points already understood.",
    body: [
      {
        heading: "Start with constraints",
        copy: "Access, spoil strategy, services, neighbouring properties and traffic movement should shape the method before price or programme are locked."
      },
      {
        heading: "Make handover measurable",
        copy: "Define what ready means for every follow-on trade, from formation tolerances and drainage tests to clean routes and protected surfaces."
      }
    ]
  },
  {
    slug: "why-drainage-details-drive-site-performance",
    category: "Drainage",
    title: "Why drainage details drive site performance",
    image: imageSet.drainage,
    excerpt: "Drainage design affects programme, safety and long-term performance, so the details deserve early attention.",
    body: [
      {
        heading: "Falls and access matter",
        copy: "Drainage only performs when falls, chamber positions and future access are resolved around real site levels and build sequence."
      },
      {
        heading: "Inspection readiness saves time",
        copy: "Clear records, exposed checkpoints and tidy trench management make sign-off smoother and reduce costly rework."
      }
    ]
  },
  {
    slug: "foundations-for-residential-projects",
    category: "Foundations",
    title: "Foundation preparation for residential projects",
    image: imageSet.residential,
    excerpt: "Residential groundwork benefits from the same discipline as commercial works: scope clarity, clean excavations and practical communication.",
    body: [
      {
        heading: "Keep the brief clear",
        copy: "Drawings, soil assumptions, access limits and concrete logistics should be agreed before excavation begins."
      },
      {
        heading: "Protect the rest of the property",
        copy: "Tidy working zones, clear spoil handling and considered reinstatement help domestic projects move with less disruption."
      }
    ]
  }
];

export const footerServices = services.slice(0, 6).map((service) => service.title);
