import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Paintbrush, Image, Building2, FileKey } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SEO } from '@/hooks/useSEO';
import ArtworkCard from '@/components/cards/ArtworkCard';
import { getFeaturedArtworks } from '@/data/artworks';
import { generateOrganizationSchema } from '@/utils/seo';
import { SITE_CONFIG } from '@/utils/constants';

const featuredArtworks = getFeaturedArtworks();

const servicesData = [
  {
    icon: Paintbrush,
    title: 'Custom Commissions',
    description:
      'Collaborate directly with Fabien to create a one-of-a-kind digital artwork tailored to your vision.',
    href: '/services',
  },
  {
    icon: Image,
    title: 'Fine Art Prints',
    description:
      'Museum-quality prints on premium paper or canvas with archival inks for exceptional longevity.',
    href: '/services',
  },
  {
    icon: Building2,
    title: 'Corporate & Interior',
    description:
      'Bespoke art solutions for hotels, restaurants, offices, and residential projects worldwide.',
    href: '/services',
  },
  {
    icon: FileKey,
    title: 'Art Licensing',
    description:
      'Flexible licensing for editorial, product design, packaging, and digital campaigns.',
    href: '/services',
  },
];

export default function Home() {
  return (
    <>
      <SEO
        title="Fair Fab Gallery | Digital Art by Fabien Ariel Abisror"
        description={SITE_CONFIG.description}
        keywords="digital art, pop art, contemporary art, digital gallery, Fabien Ariel Abisror, art commission, Tel Aviv art, limited edition prints, custom artwork"
        schema={generateOrganizationSchema()}
      />

      {/* ── HERO ───────────────────────────────────────────────────── */}
      <section
        className="relative min-h-[100svh] flex items-end overflow-hidden"
        aria-label="Hero"
      >
        {/* Background artwork image */}
        <div className="absolute inset-0">
          <img
            src="/images/artworks/artwork-01.jpg"
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover"
          />
          {/* Cinematic gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
        </div>

        {/* Grain texture overlay */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay"
          aria-hidden="true"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Hero content - bottom-aligned editorial style */}
        <div className="relative z-10 w-full">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 pb-16 sm:pb-24">
            <div className="max-w-3xl">
              {/* Accent line */}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: 80 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="h-[2px] bg-[#AAC9FF] mb-8"
              />

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-[#AAC9FF] text-sm font-medium tracking-[0.25em] uppercase mb-6"
              >
                Digital Art Gallery &mdash; Tel Aviv
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight mb-6"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Where Pop Art
                <br />
                Meets Digital
                <br />
                <span className="italic text-[#AAC9FF]">Innovation</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="text-base sm:text-lg text-white/70 max-w-xl leading-relaxed mb-10"
              >
                Explore the original digital artworks of Fabien Ariel Abisror.
                Contemporary creations that blend bold colour, modern storytelling,
                and the limitless possibilities of digital craft.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="flex flex-col sm:flex-row items-start gap-4"
              >
                <Button
                  asChild
                  className="rounded-none bg-white text-[#000000] hover:bg-[#ECF3FF] px-8 py-6 text-sm font-semibold tracking-wider uppercase transition-all duration-300 hover:-translate-y-0.5"
                >
                  <Link to="/portfolio">
                    Explore the Gallery
                    <ArrowRight className="ml-3 w-4 h-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="rounded-none border border-white/40 text-white bg-transparent hover:bg-white/10 px-8 py-6 text-sm font-semibold tracking-wider uppercase transition-all duration-300"
                >
                  <Link to="/contact">Commission Art</Link>
                </Button>
              </motion.div>
            </div>
          </div>

          {/* Bottom stats bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="border-t border-white/10 bg-black/30 backdrop-blur-sm"
          >
            <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5 flex flex-wrap items-center gap-8 sm:gap-16">
              {[
                { value: '80+', label: 'Original Works' },
                { value: '160+', label: 'Followers' },
                { value: 'Global', label: 'Audience' },
              ].map((stat) => (
                <div key={stat.label} className="flex items-baseline gap-3">
                  <span className="text-xl font-bold text-white">{stat.value}</span>
                  <span className="text-xs text-white/40 uppercase tracking-wider">{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="absolute right-6 lg:right-12 bottom-32 sm:bottom-40 flex flex-col items-center gap-3"
          aria-hidden="true"
        >
          <span
            className="text-[10px] text-white/40 uppercase tracking-[0.3em] writing-vertical"
            style={{ writingMode: 'vertical-rl' }}
          >
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
            className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent"
          />
        </motion.div>
      </section>

      {/* ── FEATURED ARTWORKS ──────────────────────────────────────── */}
      <section className="bg-white py-24 sm:py-32 px-6 lg:px-12" aria-label="Featured artworks">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-6"
          >
            <div>
              <span className="text-xs font-medium text-[#1877F2] uppercase tracking-[0.25em] mb-4 block">
                Selected Works
              </span>
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#000000] leading-[1.1]"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Featured Artworks
              </h2>
            </div>
            <Link
              to="/portfolio"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-[#1877F2] hover:text-[#2851A3] transition-colors shrink-0 pb-1 border-b border-[#1877F2]/30 hover:border-[#1877F2]"
            >
              View Full Portfolio
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {featuredArtworks.map((artwork, i) => (
              <ArtworkCard key={artwork.id} artwork={artwork} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT THE ARTIST ────────────────────────────────────────── */}
      <section className="bg-[#000000] py-24 sm:py-32 px-6 lg:px-12 overflow-hidden" aria-label="About the artist">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image side */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative order-2 lg:order-1"
            >
              <div className="relative">
                <div className="aspect-[3/4] rounded-sm overflow-hidden">
                  <img
                    src="/images/artworks/artwork-03.jpg"
                    alt="Artwork by Fabien Ariel Abisror"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Offset accent frame */}
                <div
                  className="absolute -bottom-4 -right-4 w-full h-full border border-[#AAC9FF]/20 rounded-sm pointer-events-none"
                  aria-hidden="true"
                />
              </div>
              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="absolute -bottom-6 -right-2 lg:right-auto lg:-left-6 bg-[#1877F2] text-white px-6 py-4 shadow-xl"
              >
                <p className="text-2xl font-bold leading-none">80+</p>
                <p className="text-xs mt-1 text-white/70 uppercase tracking-wider">Original Works</p>
              </motion.div>
            </motion.div>

            {/* Text side */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="order-1 lg:order-2"
            >
              <span className="text-xs font-medium text-[#AAC9FF] uppercase tracking-[0.25em] mb-5 block">
                The Artist
              </span>
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8 leading-[1.1]"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Fabien Ariel
                <br />
                <span className="italic text-[#AAC9FF]">Abisror</span>
              </h2>
              <div className="space-y-5 text-white/60 leading-relaxed text-[15px]">
                <p>
                  Fabien Ariel Abisror is a French-Israeli digital artist based in Tel Aviv,
                  working at the crossroads of Pop Art, contemporary aesthetics, and cutting-edge
                  digital techniques. His work draws on a deep love for visual culture — from the
                  bold graphics of Warhol and Lichtenstein to the restless energy of the modern internet.
                </p>
                <p>
                  Growing up between Paris and Tel Aviv, Fabien developed an instinct for contrasts:
                  between the classical and the contemporary, the analog and the digital, the personal
                  and the universal. This tension lives at the heart of every piece he creates.
                </p>
                <p>
                  Since founding Fair Fab Gallery, Fabien has built a growing international following
                  of collectors, designers, and art enthusiasts who share his belief that great art
                  should be accessible and built to last.
                </p>
              </div>
              <div className="mt-10">
                <Button
                  asChild
                  className="rounded-none bg-white text-[#000000] hover:bg-[#ECF3FF] px-8 py-6 text-sm font-semibold tracking-wider uppercase transition-all duration-300 hover:-translate-y-0.5"
                >
                  <Link to="/about">
                    Full Biography
                    <ArrowRight className="ml-3 w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── ARTWORK SHOWCASE STRIP ─────────────────────────────────── */}
      <section className="overflow-hidden py-1 bg-[#F2F3F5]" aria-hidden="true">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: '-50%' }}
          transition={{ repeat: Infinity, duration: 30, ease: 'linear' }}
          className="flex gap-1 w-max"
        >
          {[...Array(2)].flatMap((_, setIdx) =>
            [2, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((num) => (
              <div
                key={`${setIdx}-${num}`}
                className="w-32 h-32 sm:w-40 sm:h-40 shrink-0 overflow-hidden"
              >
                <img
                  src={`/images/artworks/artwork-${String(num).padStart(2, '0')}.jpg`}
                  alt=""
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  loading="lazy"
                />
              </div>
            ))
          )}
        </motion.div>
      </section>

      {/* ── SERVICES ────────────────────────────────────────────────── */}
      <section className="bg-white py-24 sm:py-32 px-6 lg:px-12" aria-label="Services">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mb-16"
          >
            <span className="text-xs font-medium text-[#1877F2] uppercase tracking-[0.25em] mb-4 block">
              What We Offer
            </span>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#000000] mb-5 leading-[1.1]"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Services
            </h2>
            <p className="text-[#444950] text-base leading-relaxed">
              From bespoke commissions to commercial licensing, Fair Fab Gallery brings
              original digital art into your world — on your terms.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#F2F3F5]">
            {servicesData.map((service, i) => (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group bg-white p-8 hover:bg-[#ECF3FF]/40 transition-colors duration-300"
              >
                <div
                  className="w-12 h-12 rounded-full bg-[#ECF3FF] flex items-center justify-center mb-6 group-hover:bg-[#1877F2] group-hover:text-white transition-colors duration-300"
                  aria-hidden="true"
                >
                  <service.icon className="w-5 h-5 text-[#1877F2] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-base font-bold text-[#000000] mb-3">
                  {service.title}
                </h3>
                <p className="text-[#444950] text-sm leading-relaxed mb-5">
                  {service.description}
                </p>
                <Link
                  to={service.href}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1877F2] uppercase tracking-wider hover:text-[#2851A3] transition-colors"
                  aria-label={`Learn more about ${service.title}`}
                >
                  Learn more
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ──────────────────────────────────────────────── */}
      <section
        className="relative py-32 sm:py-40 px-6 lg:px-12 overflow-hidden"
        aria-label="Get in touch"
      >
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="/images/artworks/artwork-09.jpg"
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#1D3C78]/85" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1D3C78]/40 to-[#000000]/60" />
        </div>

        {/* Grain */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          aria-hidden="true"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
          }}
        />

        <div className="relative max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 60 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-[2px] bg-[#AAC9FF] mx-auto mb-8"
            />
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-[1.1]"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Have a vision?
              <br />
              <span className="italic text-[#AAC9FF]">Let's create together.</span>
            </h2>
            <p className="text-white/60 text-base sm:text-lg leading-relaxed mb-12 max-w-xl mx-auto">
              Share your idea and Fabien Ariel will bring it to life — with care, skill,
              and a creative sensibility that is entirely his own.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                className="rounded-none bg-white text-[#1D3C78] hover:bg-[#ECF3FF] px-10 py-6 text-sm font-semibold tracking-wider uppercase transition-all duration-300 hover:-translate-y-0.5 shadow-lg"
              >
                <Link to="/contact">
                  Start a Commission
                  <ArrowRight className="ml-3 w-4 h-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="rounded-none border border-white/30 text-white bg-transparent hover:bg-white/10 px-10 py-6 text-sm font-semibold tracking-wider uppercase transition-all duration-300"
              >
                <Link to="/portfolio">Browse the Gallery</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
