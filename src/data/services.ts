import { Paintbrush, Image, Building2, FileKey } from 'lucide-react';

export interface Service {
  id: number;
  slug: string;
  title: string;
  shortTitle: string;
  icon: typeof Paintbrush;
  shortDescription: string;
  description: string;
  features: string[];
  process?: { step: number; title: string; description: string }[];
  cta: { label: string; link: string };
}

export const services: Service[] = [
  {
    id: 1,
    slug: 'custom-commissions',
    title: 'Custom Digital Art Commissions',
    shortTitle: 'Digital Art Prints',
    icon: Paintbrush,
    shortDescription: 'Bring your vision to life with a bespoke digital artwork created exclusively for you.',
    description:
      'Whether you have a specific concept in mind or want to give creative freedom, Fabien Ariel will work closely with you to create a one-of-a-kind digital artwork. From portraits to abstract compositions, each commission is treated as a unique creative journey, resulting in a piece that speaks directly to you.',
    features: [
      'Personal consultation to understand your vision',
      'Multiple concept sketches before final execution',
      'High-resolution files in multiple formats',
      'Unlimited revisions during concept phase',
      'Certificate of authenticity included',
      'Commercial usage rights available',
    ],
    process: [
      { step: 1, title: 'Consultation', description: 'We discuss your vision, preferences, and requirements in detail.' },
      { step: 2, title: 'Concept', description: 'Fabien creates 2-3 concept sketches for your review and feedback.' },
      { step: 3, title: 'Creation', description: 'The chosen concept is developed into a full digital artwork.' },
      { step: 4, title: 'Refinement', description: 'Final adjustments are made based on your feedback.' },
      { step: 5, title: 'Delivery', description: 'You receive high-resolution files and a certificate of authenticity.' },
    ],
    cta: { label: 'Request Commission', link: '/contact?type=commission' },
  },
  {
    id: 2,
    slug: 'art-prints',
    title: 'High-Quality Digital Art Prints',
    shortTitle: 'Custom Commissions',
    icon: Image,
    shortDescription: 'Museum-quality prints of original digital artworks on premium materials.',
    description:
      'Each print is produced using archival-quality materials and professional printing techniques to ensure the colors, details, and vibrancy of the original digital artwork are perfectly captured. Available on canvas, fine art paper, and metal, with various size options to suit any space.',
    features: [
      'Canvas, fine art paper, and metal options',
      'Multiple size formats available',
      'Archival-quality inks for lasting color',
      'Optional professional framing',
      'Signed and numbered limited editions',
      'Worldwide shipping available',
    ],
    cta: { label: 'Shop Prints', link: '/portfolio' },
  },
  {
    id: 3,
    slug: 'gallery-collaborations',
    title: 'Gallery Collaborations & Exhibitions',
    shortTitle: 'Gallery Collaborations',
    icon: Building2,
    shortDescription: 'Partner with Fair Fab Gallery for exhibitions and curated art experiences.',
    description:
      'Fair Fab Gallery is open to collaborations with galleries, museums, and cultural institutions worldwide. Whether you are looking to host a solo exhibition, include digital art in a group show, or create a pop-up experience, we provide turnkey solutions including artwork selection, installation guidance, and promotional materials.',
    features: [
      'Solo and group exhibition opportunities',
      'Curated artwork selection',
      'Installation and display guidance',
      'Promotional materials and press kits',
      'Digital and physical display formats',
      'International shipping coordination',
    ],
    cta: { label: 'Propose Collaboration', link: '/contact?type=collaboration' },
  },
  {
    id: 4,
    slug: 'art-licensing',
    title: 'Art Licensing & Commercial Use',
    shortTitle: 'Art Licensing',
    icon: FileKey,
    shortDescription: 'License artwork for commercial products, branding, and digital applications.',
    description:
      'Make your brand stand out with original digital artwork. Fair Fab Gallery offers flexible licensing arrangements for commercial use of existing artworks or creation of new pieces tailored to your brand identity. From product packaging to digital marketing, our artwork brings a unique creative edge to any project.',
    features: [
      'Flexible licensing terms',
      'Exclusive and non-exclusive options',
      'Brand-specific customization available',
      'Multiple resolution formats',
      'Clear usage rights documentation',
      'Ongoing creative partnership options',
    ],
    cta: { label: 'Inquire About Licensing', link: '/contact?type=licensing' },
  },
];
