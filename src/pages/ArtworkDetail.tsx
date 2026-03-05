import { useParams, Link, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Heart, Share2, Paintbrush, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SEO } from '@/hooks/useSEO';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import ArtworkCard from '@/components/cards/ArtworkCard';
import { getArtworkBySlug, getRelatedArtworks } from '@/data/artworks';
import { generateArtworkSchema } from '@/utils/seo';

const FAVORITES_KEY = 'fairfab_favorites';

function getFavorites(): string[] {
  try {
    return JSON.parse(localStorage.getItem(FAVORITES_KEY) ?? '[]');
  } catch {
    return [];
  }
}

function toggleFavorite(slug: string): boolean {
  const favs = getFavorites();
  const idx = favs.indexOf(slug);
  let next: string[];
  if (idx === -1) {
    next = [...favs, slug];
  } else {
    next = favs.filter((s) => s !== slug);
  }
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(next));
  return next.includes(slug);
}

export default function ArtworkDetail() {
  const { slug } = useParams<{ slug: string }>();
  const artwork = slug ? getArtworkBySlug(slug) : undefined;

  const [isFavorite, setIsFavorite] = useState(false);
  const [shareLabel, setShareLabel] = useState('Share');
  const [imageZoomed, setImageZoomed] = useState(false);

  useEffect(() => {
    if (slug) {
      setIsFavorite(getFavorites().includes(slug));
    }
  }, [slug]);

  if (!artwork) {
    return <Navigate to="/404" replace />;
  }

  const relatedArtworks = getRelatedArtworks(artwork.slug, artwork.category);
  const schemaMarkup = generateArtworkSchema(artwork);

  const breadcrumbs = [
    { label: 'Portfolio', path: '/portfolio' },
    { label: artwork.category ?? 'Category', path: '/portfolio' },
    { label: artwork.title ?? 'Artwork' },
  ];

  function handleFavorite() {
    if (!slug) return;
    const next = toggleFavorite(slug);
    setIsFavorite(next);
  }

  async function handleShare() {
    const url = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({ title: artwork?.title, url });
      } catch {
        // user cancelled
      }
    } else {
      await navigator.clipboard.writeText(url);
      setShareLabel('Copied!');
      setTimeout(() => setShareLabel('Share'), 2000);
    }
  }

  return (
    <>
      <SEO
        title={`${artwork.title} | Fair Fab Gallery`}
        description={
          artwork.description
            ? artwork.description.slice(0, 160)
            : `Discover "${artwork.title}" — a ${artwork.category} digital artwork by Fair Fab Gallery.`
        }
      />

      {/* Schema.org CreativeWork */}
      {schemaMarkup && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
      )}

      <main className="min-h-screen bg-[#F2F3F5]">
        {/* Top nav */}
        <div className="bg-[#000000] px-4 py-4">
          <div className="max-w-6xl mx-auto">
            <Breadcrumbs
              items={breadcrumbs}
              className="text-[#AAC9FF]"
            />
          </div>
        </div>

        {/* Back link */}
        <div className="max-w-6xl mx-auto px-4 pt-6">
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-1.5 text-sm text-[#1877F2] hover:text-[#2851A3] transition-colors duration-200 font-medium"
            aria-label="Back to portfolio"
          >
            <ArrowLeft size={16} aria-hidden="true" />
            Back to Portfolio
          </Link>
        </div>

        {/* Main content */}
        <section className="max-w-6xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

            {/* Artwork image */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="relative"
            >
              <div
                role="button"
                tabIndex={0}
                aria-label={imageZoomed ? 'Zoom out artwork image' : 'Zoom in artwork image'}
                onClick={() => setImageZoomed((z) => !z)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') setImageZoomed((z) => !z);
                }}
                className={[
                  'overflow-hidden rounded-lg shadow-md bg-[#ECF3FF] cursor-zoom-in transition-all duration-300',
                  imageZoomed ? 'cursor-zoom-out' : 'cursor-zoom-in',
                ].join(' ')}
              >
                <img
                  src={artwork.image}
                  alt={artwork.title ?? 'Artwork'}
                  width={800}
                  height={800}
                  className={[
                    'w-full object-cover transition-transform duration-500',
                    imageZoomed ? 'scale-125' : 'scale-100 hover:scale-105',
                  ].join(' ')}
                />
              </div>
              {artwork.category === 'Limited Edition' && (
                <span className="absolute top-3 left-3 bg-[#1877F2] text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                  Limited Edition
                </span>
              )}
            </motion.div>

            {/* Details panel */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
              className="flex flex-col gap-6"
            >
              {/* Category tag */}
              {artwork.category && (
                <span className="inline-block self-start bg-[#ECF3FF] text-[#1877F2] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full">
                  {artwork.category}
                </span>
              )}

              {/* Title */}
              <h1 className="text-3xl sm:text-4xl font-bold text-[#000000] leading-tight">
                {artwork.title}
              </h1>

              {/* Meta */}
              <dl className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm">
                <dt className="text-[#CCCCCC] font-medium">Artist</dt>
                <dd className="text-[#444950] font-semibold">Fabien Ariel Abisror</dd>
                {artwork.year && (
                  <>
                    <dt className="text-[#CCCCCC] font-medium">Year</dt>
                    <dd className="text-[#444950]">{artwork.year}</dd>
                  </>
                )}
                {artwork.dimensions && (
                  <>
                    <dt className="text-[#CCCCCC] font-medium">Dimensions</dt>
                    <dd className="text-[#444950]">{artwork.dimensions}</dd>
                  </>
                )}
                <dt className="text-[#CCCCCC] font-medium">Medium</dt>
                <dd className="text-[#444950]">Digital Art</dd>
              </dl>

              {/* Techniques */}
              {artwork.techniques && artwork.techniques.length > 0 && (
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-[#CCCCCC] mb-2 flex items-center gap-1.5">
                    <Paintbrush size={13} aria-hidden="true" />
                    Techniques
                  </p>
                  <ul className="flex flex-wrap gap-2">
                    {artwork.techniques.map((t: string) => (
                      <li
                        key={t}
                        className="bg-[#F2F3F5] border border-[#CCCCCC] text-[#444950] text-xs px-3 py-1 rounded-full"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Description */}
              {artwork.description && (
                <p className="text-[#444950] leading-relaxed text-sm sm:text-base">
                  {artwork.description}
                </p>
              )}

              {/* Action buttons */}
              <div className="flex flex-col gap-3 pt-2">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <Button
                    asChild
                    className="bg-[#1877F2] hover:bg-[#2851A3] text-white font-semibold rounded-md transition-colors duration-200 flex items-center gap-2"
                  >
                    <Link to="/contact?type=commission">
                      <Paintbrush size={16} aria-hidden="true" />
                      Commission Similar
                    </Link>
                  </Button>

                  <Button
                    variant="outline"
                    onClick={handleShare}
                    aria-label="Share this artwork"
                    className="border-[#CCCCCC] text-[#444950] hover:border-[#1877F2] hover:text-[#1877F2] font-medium rounded-md transition-colors duration-200 flex items-center gap-2"
                  >
                    <Share2 size={16} aria-hidden="true" />
                    {shareLabel}
                  </Button>

                  <Button
                    variant="outline"
                    onClick={handleFavorite}
                    aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
                    aria-pressed={isFavorite}
                    className={[
                      'font-medium rounded-md transition-colors duration-200 flex items-center gap-2 border',
                      isFavorite
                        ? 'border-[#1877F2] text-[#1877F2] bg-[#ECF3FF]'
                        : 'border-[#CCCCCC] text-[#444950] hover:border-[#1877F2] hover:text-[#1877F2]',
                    ].join(' ')}
                  >
                    <Heart
                      size={16}
                      aria-hidden="true"
                      className={isFavorite ? 'fill-[#1877F2]' : ''}
                    />
                    {isFavorite ? 'Saved' : 'Favorite'}
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Related artworks */}
        {relatedArtworks && relatedArtworks.length > 0 && (
          <section className="max-w-6xl mx-auto px-4 py-12">
            <h2 className="text-xl sm:text-2xl font-bold text-[#000000] mb-6">
              Related Artworks
            </h2>
            <div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              role="list"
              aria-label="Related artworks"
            >
              {relatedArtworks.map((related, i) => (
                <motion.div
                  key={related.slug ?? related.id}
                  role="listitem"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.4, ease: 'easeOut' }}
                >
                  <ArtworkCard artwork={related} />
                </motion.div>
              ))}
            </div>
          </section>
        )}
      </main>
    </>
  );
}
