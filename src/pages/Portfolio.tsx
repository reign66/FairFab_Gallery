import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import { SEO } from '@/hooks/useSEO';
import ArtworkCard from '@/components/cards/ArtworkCard';
import { artworks } from '@/data/artworks';

const SORT_OPTIONS = [
  { value: 'recent', label: 'Recent' },
  { value: 'az', label: 'A-Z' },
];

const FILTER_BUTTONS = ['All', 'Pop Art', 'Contemporary', 'Commissions', 'Limited Edition'];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [search, setSearch] = useState<string>('');
  const [sort, setSort] = useState<string>('recent');

  const filtered = useMemo(() => {
    let result = [...artworks];

    if (activeFilter !== 'All') {
      result = result.filter(
        (a) => a.category.toLowerCase() === activeFilter.toLowerCase()
      );
    }

    if (search.trim()) {
      const q = search.trim().toLowerCase();
      result = result.filter((a) => a.title.toLowerCase().includes(q));
    }

    if (sort === 'az') {
      result.sort((a, b) => a.title.localeCompare(b.title));
    } else {
      result.sort((a, b) => b.year - a.year);
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
        <section className="relative bg-[#000000] text-white pt-20 pb-16 px-6 lg:px-12 overflow-hidden">
          {/* Subtle background */}
          <div className="absolute inset-0 opacity-10" aria-hidden="true">
            <img
              src="/images/artworks/artwork-02.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/95" />

          <div className="relative max-w-7xl mx-auto">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 60 }}
              transition={{ duration: 0.8 }}
              className="h-[2px] bg-[#AAC9FF] mb-8"
            />
            <h1
              className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight mb-6"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Portfolio
            </h1>
            <p className="max-w-2xl text-white/60 text-base leading-relaxed">
              A curated collection of digital works that merge the boldness of pop art
              with contemporary aesthetics. Explore original compositions, vibrant
              portraits, limited edition prints, and bespoke commissions.
            </p>
          </div>
        </section>

        {/* Controls bar */}
        <section className="bg-white border-b border-[#CCCCCC]/40 sticky top-0 z-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
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
                      'px-4 py-1.5 text-sm font-medium transition-all duration-200 border',
                      isActive
                        ? 'bg-[#000000] text-white border-[#000000]'
                        : 'bg-white text-[#444950] border-[#CCCCCC] hover:border-[#000000] hover:text-[#000000]',
                    ].join(' ')}
                  >
                    {filter}
                  </button>
                );
              })}
            </div>

            {/* Search + Sort */}
            <div className="flex items-center gap-3 w-full sm:w-auto">
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
                  placeholder="Search by title..."
                  aria-label="Search artworks by title"
                  className="w-full pl-9 pr-3 py-2 border border-[#CCCCCC] bg-white text-sm text-[#444950] placeholder-[#CCCCCC] focus:outline-none focus:ring-1 focus:ring-[#000000] focus:border-[#000000] transition-all duration-200"
                />
              </div>

              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                aria-label="Sort artworks"
                className="px-3 py-2 border border-[#CCCCCC] bg-white text-sm text-[#444950] focus:outline-none focus:ring-1 focus:ring-[#000000] focus:border-[#000000] transition-all duration-200 cursor-pointer"
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
        <section className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
          {filtered.length === 0 ? (
            <div className="text-center py-24">
              <p className="text-[#444950] text-lg font-medium">No artworks found.</p>
              <p className="text-[#CCCCCC] mt-2 text-sm">
                Try adjusting your filters or search term.
              </p>
            </div>
          ) : (
            <>
              <p className="text-xs text-[#444950] uppercase tracking-wider mb-8">
                {filtered.length} artwork{filtered.length !== 1 ? 's' : ''}
              </p>
              <div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                role="list"
                aria-label="Artwork gallery"
              >
                {filtered.map((artwork, i) => (
                  <motion.div
                    key={artwork.slug}
                    role="listitem"
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.06, duration: 0.4, ease: 'easeOut' }}
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
