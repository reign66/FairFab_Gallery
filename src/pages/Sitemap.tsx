import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SEO } from '@/hooks/useSEO';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import { artworks } from '@/data/artworks';

const siteLinks = [
  {
    category: 'Main Pages',
    links: [
      { label: 'Home', path: '/' },
      { label: 'Portfolio', path: '/portfolio' },
      { label: 'About', path: '/about' },
      { label: 'Services', path: '/services' },
      { label: 'Contact', path: '/contact' },
    ],
  },
  {
    category: 'Legal',
    links: [
      { label: 'Legal Notices', path: '/mentions-legales' },
      { label: 'Privacy Policy', path: '/politique-confidentialite' },
      { label: 'Sitemap', path: '/plan-du-site' },
    ],
  },
];

export default function Sitemap() {
  return (
    <>
      <SEO
        title="Sitemap | Fair Fab Gallery"
        description="Complete sitemap of Fair Fab Gallery website. Find all pages, artworks, and services."
        url="https://fair-fab-gallery.com/plan-du-site"
      />
      <div className="min-h-screen bg-white">
        <div className="mx-auto max-w-4xl px-4 lg:px-8 py-12">
          <Breadcrumbs items={[{ label: 'Sitemap' }]} />
          <h1 className="text-3xl md:text-4xl font-bold text-[#000000] mb-8" tabIndex={-1}>
            Sitemap
          </h1>

          <div className="space-y-10">
            {siteLinks.map((section, i) => (
              <motion.div
                key={section.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <h2 className="text-xl font-semibold text-[#1D3C78] mb-4">{section.category}</h2>
                <ul className="space-y-2 pl-4">
                  {section.links.map((link) => (
                    <li key={link.path}>
                      <Link
                        to={link.path}
                        className="text-[#1877F2] hover:text-[#2851A3] transition-colors underline-offset-2 hover:underline"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="text-xl font-semibold text-[#1D3C78] mb-4">Artworks</h2>
              <ul className="space-y-2 pl-4">
                {artworks.map((artwork) => (
                  <li key={artwork.slug}>
                    <Link
                      to={`/portfolio/${artwork.slug}`}
                      className="text-[#1877F2] hover:text-[#2851A3] transition-colors underline-offset-2 hover:underline"
                    >
                      {artwork.title} ({artwork.year})
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
