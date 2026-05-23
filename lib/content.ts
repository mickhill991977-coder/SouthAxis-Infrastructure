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

export const stats = [
  { value: "6+", label: "Core disciplines" },
  { value: "24h", label: "Enquiry response" }
];

export const services = [
  {
    title: "Groundworks",
    description: "Bulk excavations, reduced levels, trenching, reinstatement and robust site formation for active building programmes.",
    icon: Shovel,
    points: ["Reduced dig and formation", "Trenching and reinstatement", "Sub-base preparation"]
  },
  {
    title: "Foundations",
    description: "Foundation preparation and concrete-ready works for residential plots, commercial footprints and extension projects.",
    icon: Layers3,
    points: ["Strip and pad foundations", "Oversite preparation", "Concrete coordination"]
  },
  {
    title: "Drainage",
    description: "Foul, storm and surface water drainage packages delivered with careful falls, access planning and inspection readiness.",
    icon: Droplets,
    points: ["Foul and storm systems", "Manholes and inspection chambers", "Soakaways and attenuation prep"]
  },
  {
    title: "External Works",
    description: "Finishing infrastructure around buildings, yards and access routes, built for durability and clean handover.",
    icon: Fence,
    points: ["Kerbs and edgings", "Paving preparation", "Hardstanding build-ups"]
  },
  {
    title: "Site Preparation",
    description: "Early works that make construction possible, from clearance and access preparation to compound-ready surfaces.",
    icon: Construction,
    points: ["Site clearance", "Temporary access", "Enabling works"]
  },
  {
    title: "Commercial Infrastructure",
    description: "Civil and groundwork support for developers and contractors managing multi-trade site environments.",
    icon: Building2,
    points: ["Developer packages", "Contractor support", "Programme-led sequencing"]
  },
  {
    title: "Residential Groundworks",
    description: "Domestic groundwork projects delivered with clear communication, tidy working methods and practical planning.",
    icon: LandPlot,
    points: ["Extensions and plots", "Driveway preparation", "Private drainage"]
  },
  {
    title: "Utility Preparation",
    description: "Ducting, service trenches and route preparation for coordinated utility installation and site infrastructure.",
    icon: Cable,
    points: ["Service trenches", "Duct routes", "Backfill and reinstatement"]
  }
];

export const featuredProjects = [
  {
    title: "Distribution Yard Enabling Works",
    sector: "Commercial",
    summary: "Site clearance, formation and drainage coordination for a logistics yard upgrade."
  },
  {
    title: "Multi-Plot Foundation Package",
    sector: "Residential development",
    summary: "Sequenced foundation preparation and external works support across a compact development site."
  },
  {
    title: "Private Drainage Renewal",
    sector: "Residential",
    summary: "Targeted excavation and drainage replacement with controlled access around an occupied property."
  }
];

export const projects = featuredProjects.map((project, index) => ({
  ...project,
  metrics: [
    { value: index === 0 ? "8 wk" : index === 1 ? "12" : "3 d", label: index === 0 ? "Programme" : index === 1 ? "Plots" : "Duration" },
    { value: index === 0 ? "4,800m2" : index === 1 ? "1,100m" : "42m", label: index === 0 ? "Formation" : index === 1 ? "Trenching" : "Drain run" },
    { value: "0", label: "Lost-time incidents" }
  ]
}));

export const blogPosts = [
  {
    slug: "planning-groundworks-before-mobilisation",
    category: "Planning",
    title: "Planning groundworks before mobilisation",
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
