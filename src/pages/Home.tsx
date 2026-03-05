import { Link } from 'react-router-dom';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { ArrowRight, Palette, Handshake, Globe, Image, Paintbrush, Building2, FileKey } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SEO } from '@/hooks/useSEO';
import ArtworkCard from '@/components/cards/ArtworkCard';
import { getFeaturedArtworks } from '@/data/artworks';
import { generateOrganizationSchema } from '@/utils/seo';
import { SITE_CONFIG } from '@/utils/constants';

const featuredArtworks = getFeaturedArtworks();

const whyItems = [
  {
    icon: Palette,
    title: 'Unique Digital Creations',
    description:
      'Every artwork in the Fair Fab Gallery collection is an original piece, conceived and crafted entirely by Fabien Ariel. Rooted in the traditions of Pop Art and filtered through a contemporary digital sensibility, each creation is singular — impossible to replicate and designed to stand the test of time. You will not find these works anywhere else.',
  },
  {
    icon: Handshake,
    title: 'Professional & Collaborative',
    description:
      'Commission projects are built on a foundation of clear communication and shared vision. From the first conversation to the final delivery, Fabien works closely with each client to ensure the artwork reflects their identity, space, and intention. Transparent processes, honest timelines, and a commitment to exceeding expectations define every collaboration.',
  },
  {
    icon: Globe,
    title: 'Online & Accessible Worldwide',
    description:
      'Fair Fab Gallery operates entirely online, making it possible for collectors, interior designers, and art enthusiasts from every corner of the world to discover, commission, and acquire original digital art. High-resolution files are delivered securely, and print-ready formats ensure seamless reproduction at any scale.',
  },
];

const servicesData = [
  {
    icon: Paintbrush,
    title: 'Custom Commissioned Artworks',
    description:
      'Collaborate directly with Fabien Ariel to create a one-of-a-kind digital artwork tailored to your vision. Whether for personal use, a gift, or a brand identity project, each commission begins with a thorough brief and evolves through a transparent creative process. The result is a piece that is unmistakably yours.',
    href: '/services',
  },
  {
    icon: Image,
    title: 'Fine Art Digital Prints',
    description:
      'Bring original artworks into your home or office with museum-quality fine art prints. Each print is produced using archival inks on premium paper or canvas, ensuring vibrant colors and exceptional longevity. Available in standard and custom sizes to suit any interior, with or without framing options.',
    href: '/services',
  },
  {
    icon: Building2,
    title: 'Corporate & Interior Design',
    description:
      'Elevate your professional space with statement artworks that communicate your brand values and aesthetic vision. Fair Fab Gallery works with interior designers, architects, hotels, restaurants, and corporate clients to develop bespoke art solutions — from single statement pieces to complete multi-room installations.',
    href: '/services',
  },
  {
    icon: FileKey,
    title: 'Licensed Digital Assets',
    description:
      'Access the Fair Fab Gallery catalogue for commercial licensing. Whether you need artwork for editorial use, product design, packaging, or digital campaigns, Fabien Ariel offers flexible licensing agreements that protect both the integrity of the work and the needs of your project. Contact us to discuss terms.',
    href: '/services',
  },
];

// Animated title letters helper
function AnimatedTitle({ text }: { text: string }) {
  const words = text.split(' ');
  return (
    <span aria-label={text}>
      {words.map((word, wi) => (
        <span key={wi} className="inline-block mr-[0.25em] last:mr-0">
          {word.split('').map((char, ci) => (
            <motion.span
              key={ci}
              className="inline-block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: 'spring',
                stiffness: 200,
                damping: 20,
                delay: (wi * word.length + ci) * 0.025,
              }}
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </span>
  );
}

export default function Home() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const bgX = useTransform(mouseX, [0, 1], [-20, 20]);
  const bgY = useTransform(mouseY, [0, 1], [-15, 15]);

  function handleMouseMove(e: React.MouseEvent<HTMLElement>) {
    const { clientX, clientY, currentTarget } = e;
    const { width, height } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX / width);
    mouseY.set(clientY / height);
  }

  return (
    <>
      <SEO
        title="Digital Art Gallery | Fair Fab Gallery - Contemporary Pop Art"
        description={SITE_CONFIG.description}
        keywords="digital art, pop art, contemporary art, digital gallery, Fabien Ariel, art commission, Tel Aviv art, limited edition prints, custom artwork"
        schema={generateOrganizationSchema()}
      />

      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section
        className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#000000]"
        onMouseMove={handleMouseMove}
        aria-label="Hero - Fair Fab Gallery"
      >
        {/* Parallax background glow */}
        <motion.div
          style={{ x: bgX, y: bgY }}
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
        >
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-[#1877F2]/10 blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-[#2851A3]/15 blur-[100px]" />
        </motion.div>

        {/* Subtle animated grid */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.04]"
          aria-hidden="true"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg stroke='%23ffffff' stroke-width='0.5'%3E%3Cpath d='M0 0h60v60H0z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        {/* Dark gradient overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/70 pointer-events-none"
          aria-hidden="true"
        />

        {/* Hero content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-8"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#77A7FF] opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#AAC9FF]" />
            </span>
            <span className="text-[#AAC9FF] text-sm font-medium tracking-wider uppercase">
              New Collection Available
            </span>
          </motion.div>

          {/* H1 - only one on the page */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-6">
            <AnimatedTitle text="Contemporary Pop Art Meets Digital Innovation" />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="text-lg sm:text-xl text-[#CCCCCC] max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Explore unique digital artworks by Fabien Ariel. Revisiting the standards of Pop Art
            and contemporary artistic trends — one pixel at a time.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              asChild
              className="rounded-full bg-white text-[#000000] hover:bg-[#ECF3FF] px-8 py-6 text-base font-semibold shadow-lg transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5"
            >
              <Link to="/portfolio">
                Explore the Gallery
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="rounded-full border border-white/30 text-white bg-transparent hover:bg-white/10 px-8 py-6 text-base font-semibold transition-all duration-200"
            >
              <Link to="/contact">Commission an Artwork</Link>
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 1.4 }}
            className="mt-16 flex flex-wrap items-center justify-center gap-10 sm:gap-16"
          >
            {[
              { value: '80+', label: 'Artworks' },
              { value: '160+', label: 'Followers' },
              { value: 'Worldwide', label: 'Collectors' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl font-bold text-white">{stat.value}</p>
                <p className="text-sm text-[#AAC9FF] mt-1 uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          aria-hidden="true"
        >
          <span className="text-xs text-[#CCCCCC]/60 uppercase tracking-widest">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
            className="w-px h-10 bg-gradient-to-b from-[#AAC9FF]/60 to-transparent"
          />
        </motion.div>
      </section>

      {/* ── WHY FAIR FAB GALLERY ─────────────────────────────────────────────── */}
      <section className="bg-white py-24 px-6" aria-label="Why Fair Fab Gallery">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-sm font-semibold text-[#1877F2] uppercase tracking-widest mb-3 block">
              Our Approach
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#000000] mb-4">
              Why Fair Fab Gallery
            </h2>
            <p className="text-[#444950] max-w-2xl mx-auto text-lg leading-relaxed">
              A digital gallery built on artistic integrity, genuine collaboration, and worldwide
              accessibility. Here is what sets us apart.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyItems.map((item, i) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="flex flex-col items-start p-8 rounded-xl border border-[#F2F3F5] bg-white hover:shadow-md transition-shadow duration-200"
              >
                <div
                  className="w-14 h-14 rounded-full bg-[#ECF3FF] flex items-center justify-center mb-5 shrink-0"
                  aria-hidden="true"
                >
                  <item.icon className="w-6 h-6 text-[#1877F2]" />
                </div>
                <h3 className="text-lg font-semibold text-[#000000] mb-3">{item.title}</h3>
                <p className="text-[#444950] leading-relaxed text-sm">{item.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED ARTWORKS ────────────────────────────────────────────────── */}
      <section className="bg-[#F2F3F5] py-24 px-6" aria-label="Featured artworks">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4"
          >
            <div>
              <span className="text-sm font-semibold text-[#1877F2] uppercase tracking-widest mb-3 block">
                Selected Works
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#000000]">Featured Artworks</h2>
            </div>
            <Link
              to="/portfolio"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-[#1877F2] hover:text-[#2851A3] transition-colors shrink-0"
            >
              View Full Portfolio
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {featuredArtworks.map((artwork, i) => (
              <ArtworkCard key={artwork.id} artwork={artwork} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT PREVIEW ────────────────────────────────────────────────────── */}
      <section className="bg-white py-24 px-6" aria-label="About Fabien Ariel">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-sm font-semibold text-[#1877F2] uppercase tracking-widest mb-3 block">
                The Artist
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#000000] mb-6">
                About Fabien Ariel
              </h2>
              <div className="space-y-4 text-[#444950] leading-relaxed">
                <p>
                  Fabien Ariel Abisror is a French-Israeli digital artist based in Tel Aviv, working
                  at the crossroads of Pop Art, contemporary aesthetics, and cutting-edge digital
                  techniques. His work draws on a deep love for visual culture — from the bold
                  graphics of Warhol and Lichtenstein to the restless energy of the modern internet.
                </p>
                <p>
                  Growing up between Paris and Tel Aviv, Fabien developed an instinct for contrasts:
                  between the classical and the contemporary, the analog and the digital, the
                  personal and the universal. This tension lives at the heart of every piece he
                  creates. His artworks are simultaneously familiar and unexpected — rooted in
                  recognizable visual traditions yet entirely impossible without the tools of our
                  digital present.
                </p>
                <p>
                  Since founding Fair Fab Gallery, Fabien has built a growing international
                  following of collectors, interior designers, and art enthusiasts who share his
                  belief that great art should be accessible, affordable, and built to last. Every
                  artwork is produced with the same care and intentionality — whether it is a
                  personal commission or a limited edition print destined for a collector halfway
                  across the world.
                </p>
              </div>
              <div className="mt-8">
                <Button
                  asChild
                  className="rounded-full bg-[#1877F2] text-white hover:bg-[#2851A3] px-8 py-6 font-semibold transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
                >
                  <Link to="/about">
                    Discover the Full Story
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>

            {/* Image placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-gradient-to-br from-[#ECF3FF] via-[#AAC9FF]/30 to-[#1877F2]/20">
                {/* Decorative layer suggesting an artist portrait placeholder */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 opacity-40">
                  <Palette className="w-20 h-20 text-[#1877F2]" />
                  <span className="text-[#2851A3] text-sm font-medium tracking-wide">
                    Fabien Ariel · Tel Aviv
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#1D3C78]/30 to-transparent" />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-5 -left-5 bg-white rounded-xl shadow-lg px-5 py-4 border border-[#F2F3F5]">
                <p className="text-2xl font-bold text-[#1877F2]">80+</p>
                <p className="text-xs text-[#444950] font-medium">Original Artworks</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SERVICES OVERVIEW ────────────────────────────────────────────────── */}
      <section className="bg-[#F2F3F5] py-24 px-6" aria-label="Services">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-sm font-semibold text-[#1877F2] uppercase tracking-widest mb-3 block">
              What We Offer
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#000000] mb-4">
              Services Tailored to Your Vision
            </h2>
            <p className="text-[#444950] max-w-2xl mx-auto text-lg leading-relaxed">
              From bespoke commissions to commercial licensing, Fair Fab Gallery offers a range of
              services designed to bring original digital art into your world — on your terms.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {servicesData.map((service, i) => (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group bg-white rounded-xl p-8 border border-[#F2F3F5] hover:shadow-md hover:border-[#AAC9FF]/50 transition-all duration-200"
              >
                <div
                  className="w-12 h-12 rounded-lg bg-[#ECF3FF] flex items-center justify-center mb-5"
                  aria-hidden="true"
                >
                  <service.icon className="w-5 h-5 text-[#1877F2]" />
                </div>
                <h3 className="text-lg font-semibold text-[#000000] mb-3 group-hover:text-[#1877F2] transition-colors">
                  {service.title}
                </h3>
                <p className="text-[#444950] leading-relaxed text-sm mb-5">
                  {service.description}
                </p>
                <Link
                  to={service.href}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1877F2] hover:text-[#2851A3] transition-colors"
                  aria-label={`Learn more about ${service.title}`}
                >
                  Learn more
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.article>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link
              to="/services"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-[#1877F2] hover:text-[#2851A3] transition-colors"
            >
              View all services
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────────────────────── */}
      <section
        className="bg-[#1D3C78] py-24 px-6 relative overflow-hidden"
        aria-label="Commission your artwork"
      >
        {/* Background decorative elements */}
        <div
          className="absolute inset-0 pointer-events-none opacity-10"
          aria-hidden="true"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg stroke='%23ffffff' stroke-width='0.5'%3E%3Cpath d='M0 0h60v60H0z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#1877F2]/20 blur-[80px] pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-semibold text-[#AAC9FF] uppercase tracking-widest mb-4 block">
              Get in Touch
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Ready to Commission Your Artwork?
            </h2>
            <p className="text-[#AAC9FF] text-lg leading-relaxed mb-10 max-w-xl mx-auto">
              Let's create something extraordinary together. Share your vision and Fabien Ariel will
              bring it to life — with care, skill, and a creative sensibility that is entirely his own.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                className="rounded-full bg-white text-[#1D3C78] hover:bg-[#ECF3FF] px-10 py-6 text-base font-semibold shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl"
              >
                <Link to="/contact">
                  Start a Commission
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="rounded-full border border-white/30 text-white bg-transparent hover:bg-white/10 px-10 py-6 text-base font-semibold transition-all duration-200"
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
