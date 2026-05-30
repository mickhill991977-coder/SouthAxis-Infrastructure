import {
  Building2,
  Cable,
  Construction,
  Droplets,
  Fence,
  Hammer,
  LandPlot,
  Layers3,
  Route,
  Shovel,
  UsersRound
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
  excavator: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=1600&q=82",
  drainage: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1600&q=82",
  foundations: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=82",
  concrete: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=82",
  roadworks: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=1600&q=82",
  residential: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=82",
  team: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1600&q=82"
};

export const stats = [
  { value: "18+", label: "Core Services" },
  { value: "24hr", label: "Quote Response Target" },
  { value: "100%", label: "Site-Focused Delivery" },
  { value: "Commercial", label: "& Residential Projects" }
];

export const contactDetails = {
  phone: "07385 616316",
  phoneHref: "tel:+447385616316",
  addressLines: ["6 St. Georges Square", "Portsmouth", "Hampshire", "England", "PO1 3EY"],
  companyNo: "17198562"
};

export const services = [
  {
    title: "Groundworks",
    description:
      "Bulk excavations, reduced levels, trenching, reinstatement and engineered build-ups for commercial construction sites and high-spec residential schemes.",
    icon: Shovel,
    image: imageSet.excavator,
    points: ["Reduced dig and formation", "Trenching and reinstatement", "Sub-base preparation", "Spoil strategy support"]
  },
  {
    title: "Foundations",
    description:
      "Foundation preparation and concrete-ready packages for structural footprints, extensions, pads, strips and multi-plot development programmes.",
    icon: Layers3,
    image: imageSet.foundations,
    points: ["Strip and pad foundations", "Oversite preparation", "Concrete coordination", "Inspection-ready excavations"]
  },
  {
    title: "Drainage",
    description:
      "Foul, storm and surface water drainage delivered with accurate falls, chamber coordination and a clean route to inspection and adoption.",
    icon: Droplets,
    image: imageSet.drainage,
    points: ["Foul and storm systems", "Manholes and chambers", "Soakaways and attenuation prep", "Surface water management"]
  },
  {
    title: "External Works",
    description:
      "Hardstanding, kerbs, edgings, access routes and external finishes designed around durable performance and professional handover.",
    icon: Fence,
    image: imageSet.roadworks,
    points: ["Kerbs and edgings", "Road and yard build-ups", "Paving preparation", "Finishing infrastructure"]
  },
  {
    title: "Site Preparation",
    description:
      "Early enabling works that turn constrained land into a controlled construction environment, ready for follow-on trades and plant movement.",
    icon: Construction,
    image: imageSet.concrete,
    points: ["Site clearance", "Temporary access", "Compound preparation", "Sequenced enabling works"]
  },
  {
    title: "Commercial Infrastructure",
    description:
      "Civil and groundwork packages for developers, principal contractors and commercial operators working to demanding site programmes.",
    icon: Building2,
    image: imageSet.team,
    points: ["Developer packages", "Contractor support", "Programme-led sequencing", "Multi-trade coordination"]
  },
  {
    title: "Residential Groundworks",
    description:
      "High-quality domestic groundwork for private clients, extensions, drainage improvements, driveways and small development plots.",
    icon: LandPlot,
    image: imageSet.residential,
    points: ["Extensions and plots", "Private drainage", "Driveway preparation", "Clean property protection"]
  },
  {
    title: "Utility Preparation",
    description:
      "Service trenches, duct routes and reinstatement packages planned to integrate cleanly with utilities, roads and site logistics.",
    icon: Cable,
    image: imageSet.roadworks,
    points: ["Service trenches", "Duct routes", "Backfill and reinstatement", "Route coordination"]
  }
];

export const projects = [
  {
    title: "Distribution Yard Enabling Works",
    location: "Midlands logistics corridor",
    type: "Commercial infrastructure",
    image: imageSet.roadworks,
    description:
      "Formation, drainage coordination and hardstanding preparation for a high-traffic distribution yard upgrade.",
    metrics: [
      { value: "8 wk", label: "Programme" },
      { value: "4,800m2", label: "Formation" },
      { value: "0", label: "Lost-time incidents" }
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
      { value: "12", label: "Plots" },
      { value: "1,100m", label: "Trenching" },
      { value: "4", label: "Inspection gates" }
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
      { value: "42m", label: "Drain run" },
      { value: "3 d", label: "Duration" },
      { value: "100%", label: "Access retained" }
    ]
  },
  {
    title: "Commercial Site Preparation",
    location: "Out-of-town development",
    type: "Site preparation",
    image: imageSet.excavator,
    description:
      "Clearance, reduced levels and temporary construction access for a commercial shell and core build programme.",
    metrics: [
      { value: "6 ac", label: "Site area" },
      { value: "2", label: "Access phases" },
      { value: "24h", label: "Reporting cycle" }
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
    image: imageSet.excavator,
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

export const capabilityIcons = [
  { icon: Hammer, label: "Groundworks" },
  { icon: Route, label: "External works" },
  { icon: UsersRound, label: "Site teams" }
];
