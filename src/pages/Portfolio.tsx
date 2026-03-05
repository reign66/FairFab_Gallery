import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import { SEO } from '@/hooks/useSEO';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import ArtworkCard from '@/components/cards/ArtworkCard';
import { artworks, categories } from '@/data/artworks';

const SORT_OPTIONS = [
  { value: 'recent', label: 'Recent' },
  { value: 'az', label: 'A-Z' },
];

const FILTER_BUTTONS = ['All', 'Pop Art', 'Contemporary', 'Commissions', 'Limited Edition'];

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.07,
      duration: 0.4,
      ease: 'easeOut',
    },
  }),
};

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [search, setSearch] = useState<string>('');
  const [sort, setSort] = useState<string>('recent');

  const filtered = useMemo(() => {
    let result = [...artworks];

    if (activeFilter !== 'All') {
      result = result.filter(
        (a) => a.category?.toLowerCase() === activeFilter.toLowerCase()
      );
    }

    if (search.trim()) {
      const q = search.trim().toLowerCase();
      result = result.filter((a) => a.title?.toLowerCase().includes(q));
    }

    if (sort === 'az') {
      result = result.sort((a, b) => (a.title ?? '').localeCompare(b.title ?? ''));
    } else {
      result = result.sort(
        (a, b) => (b.year ?? 0) - (a.year ?? 0)
      );
    }

    return result;
  }, [activeFilter, search, sort]);

  return (
    <>
      <SEO
        title="Digital Art Portfolio | Fair Fab Gallery - Contemporary Pop Art"
        description="Browse the full digital art portfolio of Fair Fab Gallery. Discover contemporary and pop art creations, limited edition prints, commissions, and original works blending vibrant colour with modern storytelling."
      />

      <main className="min-h-screen bg-[#F2F3F5]">
        {/* Hero header */}
        <section className="bg-[#000000] text-white pt-12 pb-10 px-4">
          <div className="max-w-6xl mx-auto">
            <Breadcrumbs
              items={[{ label: 'Portfolio' }]}
              className="mb-4 text-[#AAC9FF]"
            />
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight">
              Digital Art Portfolio{' '}
              <span className="text-[#77A7FF]">— Contemporary &amp; Pop Art Creations</span>
            </h1>
            <p className="mt-5 max-w-2xl text-[#CCCCCC] text-base sm:text-lg leading-relaxed">
              Step into a curated universe of digital works that merge the boldness of pop art
              with contemporary aesthetics. Fair Fab Gallery showcases original compositions,
              vibrant portraits, limited edition prints, and bespoke commissions — each piece
              crafted with intention and precision. Whether you are discovering a new favourite
              or searching for the perfect statement artwork, this portfolio brings together
              every creative chapter. Explore the full collection, filter by category, and
              find the work that speaks directly to you.
            </p>
          </div>
        </section>

        {/* Controls bar */}
        <section className="bg-white border-b border-[#CCCCCC] sticky top-0 z-20 shadow-sm">
          <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            {/* Filter buttons */}
            <div className="flex flex-wrap gap-2">
              {FILTER_BUTTONS.map((filter) => {
                const isActive = activeFilter === filter;
                return (
                  <button
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    aria-pressed={isActive}
                    className={[
                      'px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 border',
                      isActive
                        ? 'bg-[#1877F2] text-white border-[#1877F2] shadow-sm'
                        : 'bg-white text-[#444950] border-[#CCCCCC] hover:border-[#1877F2] hover:text-[#1877F2]',
                    ].join(' ')}
                  >
                    {filter}
                  </button>
                );
              })}
            </div>

            {/* Search + Sort */}
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <div className="relative flex-1 sm:w-56">
                <Search
                  size={16}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-[#CCCCCC] pointer-events-none"
                  aria-hidden="true"
                />
                <input
                  type="search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search by title…"
                  aria-label="Search artworks by title"
                  className="w-full pl-9 pr-3 py-1.5 rounded-md border border-[#CCCCCC] bg-[#F2F3F5] text-sm text-[#444950] placeholder-[#CCCCCC] focus:outline-none focus:ring-2 focus:ring-[#1877F2] focus:border-[#1877F2] transition-all duration-200"
                />
              </div>

              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                aria-label="Sort artworks"
                className="px-3 py-1.5 rounded-md border border-[#CCCCCC] bg-white text-sm text-[#444950] focus:outline-none focus:ring-2 focus:ring-[#1877F2] focus:border-[#1877F2] transition-all duration-200 cursor-pointer"
              >
                {SORT_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </section>

        {/* Grid */}
        <section className="max-w-6xl mx-auto px-4 py-10">
          {filtered.length === 0 ? (
            <div className="text-center py-24">
              <p className="text-[#444950] text-lg font-medium">No artworks found.</p>
              <p className="text-[#CCCCCC] mt-2 text-sm">
                Try adjusting your filters or search term.
              </p>
            </div>
          ) : (
            <>
              <p className="text-sm text-[#444950] mb-6">
                {filtered.length} artwork{filtered.length !== 1 ? 's' : ''} found
              </p>
              <div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                role="list"
                aria-label="Artwork gallery"
              >
                {filtered.map((artwork, i) => (
                  <motion.div
                    key={artwork.slug ?? artwork.id}
                    role="listitem"
                    custom={i}
                    initial="hidden"
                    animate="visible"
                    variants={cardVariants}
                  >
                    <ArtworkCard artwork={artwork} />
                  </motion.div>
                ))}
              </div>
            </>
          )}
        </section>
      </main>
    </>
  );
}
