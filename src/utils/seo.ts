export const generateOrganizationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Fair Fab Gallery',
  url: 'https://fair-fab-gallery.com',
  logo: 'https://fair-fab-gallery.com/favicon.svg',
  description: 'Contemporary digital art gallery by Fabien Ariel, based in Tel Aviv.',
  sameAs: ['https://www.instagram.com/fair_fab_gallery/'],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'Customer Service',
    email: 'contact@fair-fab-gallery.com',
    areaServed: 'Worldwide',
    availableLanguage: ['en', 'fr', 'he'],
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Tel Aviv',
    addressCountry: 'IL',
  },
});

export const generateArtworkSchema = (artwork: {
  title: string;
  description: string;
  image: string;
  slug: string;
  year: number;
  category: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'CreativeWork',
  name: artwork.title,
  creator: {
    '@type': 'Person',
    name: 'Fabien Ariel Abisror',
  },
  dateCreated: String(artwork.year),
  description: artwork.description,
  image: `https://fair-fab-gallery.com${artwork.image}`,
  url: `https://fair-fab-gallery.com/portfolio/${artwork.slug}`,
  artMedium: 'Digital Art',
  genre: artwork.category,
});

export const generatePersonSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Fabien Ariel Abisror',
  jobTitle: 'Digital Artist',
  url: 'https://fair-fab-gallery.com/about',
  description: 'Contemporary pop art digital artist based in Tel Aviv',
  sameAs: ['https://www.instagram.com/fair_fab_gallery/'],
});

export const generateFAQSchema = (faqs: { question: string; answer: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
});

export const generateServiceSchema = (name: string, description: string) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name,
  description,
  provider: {
    '@type': 'Person',
    name: 'Fabien Ariel',
  },
  areaServed: 'Worldwide',
  serviceType: 'Custom Digital Artwork',
});
