import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Lightbulb, Monitor, Layers, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SEO } from '@/hooks/useSEO';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import { generatePersonSchema } from '@/utils/seo';
import { SITE_CONFIG } from '@/utils/constants';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const timelineMilestones = [
  {
    year: '2018',
    title: 'Early Digital Explorations',
    description:
      'Fabien began experimenting with digital tools and software, discovering the unique possibilities that technology offered for visual expression. These early explorations were defined by curiosity, trial and error, and a growing fascination with how digital media could challenge traditional artistic boundaries.',
  },
  {
    year: '2020',
    title: 'Developing a Pop Art Identity',
    description:
      'After years of experimentation, Fabien found his voice in Pop Art — a movement that resonated deeply with his love of bold color, cultural commentary, and accessible yet thought-provoking imagery. He began developing a signature style that revisits the classics of Warhol and Lichtenstein through a distinctly contemporary, digital lens.',
  },
  {
    year: '2022',
    title: 'Establishing Fair Fab Gallery',
    description:
      'With a growing body of work and an expanding online audience, Fabien launched Fair Fab Gallery as a dedicated platform to showcase, share, and sell his digital art. The gallery became a space where collectors, enthusiasts, and curious visitors could connect with his vision and acquire original digital works.',
  },
  {
    year: '2024–Present',
    title: 'Expanding International Presence',
    description:
      'Fair Fab Gallery has grown into an internationally recognized creative platform. With over 160 followers on Instagram and more than 80 published works, Fabien continues to build connections across borders, collaborate with clients worldwide, and push the boundaries of what contemporary digital Pop Art can be.',
  },
];

const processSteps = [
  {
    icon: Lightbulb,
    title: 'Inspiration & Concept',
    description:
      'Every work begins with an idea — often sparked by a cultural moment, a piece of music, a conversation, or a visual reference from popular culture. Fabien immerses himself in the theme, researching references, sketching early concepts, and defining the emotional tone he wants the piece to carry.',
  },
  {
    icon: Monitor,
    title: 'Digital Tools & Setup',
    description:
      'Using industry-leading software and a carefully curated digital toolkit, Fabien moves from concept to canvas. The digital medium allows for a level of precision and experimentation that is impossible in traditional media — layers can be reworked, colors shifted, and compositions refined without losing momentum.',
  },
  {
    icon: Layers,
    title: 'Technique Application',
    description:
      'This is where the Pop Art magic happens. Fabien applies his signature techniques — bold outlines, high-contrast palettes, halftone textures, and graphic patterns — layering them with intentionality. Each decision, from color choice to typography, carries meaning and contributes to the overall visual impact of the piece.',
  },
  {
    icon: Sparkles,
    title: 'Final Refinement',
    description:
      'The final stage is a meticulous process of review and polish. Fabien steps back from the work, reassesses it with fresh eyes, and makes the small but critical adjustments that elevate a good piece to a great one. Only when the work feels complete — balanced, bold, and true to its concept — is it published or delivered to a client.',
  },
];

export default function About() {
  const personSchema = generatePersonSchema();

  return (
    <>
      <SEO
        title="About Fabien Ariel | Digital Artist & Pop Art Creator"
        description="Learn about Fabien Ariel Abisror, a digital artist based in Tel Aviv specializing in contemporary Pop Art. Discover his journey, artistic process, and the story behind Fair Fab Gallery."
        schema={personSchema}
      />

      <main className="min-h-screen bg-white" style={{ color: '#444950' }}>
        {/* Breadcrumbs */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
          <Breadcrumbs items={[{ label: 'About' }]} />
        </div>

        {/* Hero / Introduction Section */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <motion.h1
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-12 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            About Fabien Ariel — Digital Artist & Contemporary Pop Art Creator
          </motion.h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Photo placeholder */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
              className="order-2 lg:order-1"
            >
              <div
                className="w-full aspect-square rounded-lg flex flex-col items-center justify-center"
                style={{ backgroundColor: '#ECF3FF', border: '2px dashed #AAC9FF' }}
              >
                <div
                  className="w-24 h-24 rounded-full mb-4 flex items-center justify-center"
                  style={{ backgroundColor: '#AAC9FF' }}
                >
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#1877F2" strokeWidth="1.5">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
                <p className="text-sm font-medium" style={{ color: '#2851A3' }}>
                  Fabien Ariel Abisror
                </p>
                <p className="text-xs mt-1" style={{ color: '#77A7FF' }}>
                  Digital Artist — Tel Aviv
                </p>
              </div>
            </motion.div>

            {/* Bio text */}
            <motion.div
              className="order-1 lg:order-2 space-y-5"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
            >
              <p className="text-base lg:text-lg leading-relaxed" style={{ color: '#444950' }}>
                Fabien Ariel Abisror is a digital artist based in Tel Aviv, Israel, whose work sits at the vibrant intersection of technology and contemporary Pop Art. With a deep passion for visual culture, bold aesthetics, and the expressive power of color, Fabien has spent years developing a distinctive artistic language that speaks to modern audiences while honoring the rich legacy of the Pop Art movement.
              </p>
              <p className="text-base lg:text-lg leading-relaxed" style={{ color: '#444950' }}>
                Drawing inspiration from the iconic works of Andy Warhol, Roy Lichtenstein, and the broader visual tradition of mid-20th century pop culture, Fabien revisits the fundamental standards of Pop Art — its boldness, its irony, its accessibility — and reinterprets them through a thoroughly digital and contemporary lens. His works are not imitations of the past, but conversations with it: respectful of their origins yet unafraid to challenge, subvert, and innovate.
              </p>
              <p className="text-base lg:text-lg leading-relaxed" style={{ color: '#444950' }}>
                Each piece Fabien creates is a study in contrast — between the familiar and the unexpected, between high art and popular culture, between simplicity of form and complexity of meaning. His use of saturated palettes, graphic line work, and layered digital textures gives his work an immediately recognizable visual identity that resonates with collectors and art lovers around the world.
              </p>
              <p className="text-base lg:text-lg leading-relaxed" style={{ color: '#444950' }}>
                Beyond his studio practice, Fabien is an active presence in the online art community. His Instagram page, <a href="https://www.instagram.com/fair_fab_gallery/" target="_blank" rel="noopener noreferrer" className="font-semibold underline" style={{ color: '#1877F2' }}>@fair_fab_gallery</a>, has attracted over 160 followers and features more than 80 published works — each one a window into his creative process and evolving vision. For Fabien, sharing his art online is not simply a marketing exercise; it is an integral part of his practice, a way of connecting with a global audience and participating in the living, breathing conversation of contemporary art.
              </p>
              <p className="text-base lg:text-lg leading-relaxed" style={{ color: '#444950' }}>
                Fair Fab Gallery is the formal expression of that mission: a curated space where Fabien's digital works are showcased, sold, and celebrated. Whether you are an experienced collector, a first-time buyer, or simply someone who appreciates the power of bold, intelligent visual art, Fair Fab Gallery invites you to explore, discover, and connect.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Artistic Journey Timeline */}
        <section
          className="py-16 lg:py-24"
          style={{ backgroundColor: '#ECF3FF' }}
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-14"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-4">
                Artistic Journey
              </h2>
              <p className="text-base lg:text-lg max-w-2xl mx-auto" style={{ color: '#444950' }}>
                A timeline of the key milestones that have shaped Fabien's practice and the evolution of Fair Fab Gallery.
              </p>
            </motion.div>

            <div className="relative">
              {/* Vertical line */}
              <div
                className="absolute left-6 lg:left-1/2 top-0 bottom-0 w-0.5 transform lg:-translate-x-px"
                style={{ backgroundColor: '#AAC9FF' }}
              />

              <motion.div
                className="space-y-10"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={staggerContainer}
              >
                {timelineMilestones.map((milestone, index) => (
                  <motion.div
                    key={milestone.year}
                    variants={fadeInUp}
                    className={`relative flex flex-col lg:flex-row ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-start lg:items-center gap-8`}
                  >
                    {/* Content */}
                    <div className={`flex-1 pl-16 lg:pl-0 ${index % 2 === 0 ? 'lg:pr-12 lg:text-right' : 'lg:pl-12 lg:text-left'}`}>
                      <div
                        className="inline-block px-3 py-1 rounded-full text-sm font-bold mb-3"
                        style={{ backgroundColor: '#1877F2', color: '#ffffff' }}
                      >
                        {milestone.year}
                      </div>
                      <h3 className="text-lg font-bold text-black mb-2">{milestone.title}</h3>
                      <p className="text-sm lg:text-base leading-relaxed" style={{ color: '#444950' }}>
                        {milestone.description}
                      </p>
                    </div>

                    {/* Dot */}
                    <div
                      className="absolute left-4 lg:static lg:flex-shrink-0 w-5 h-5 rounded-full border-4 border-white mt-2 lg:mt-0"
                      style={{ backgroundColor: '#1877F2' }}
                    />

                    {/* Spacer */}
                    <div className="flex-1 hidden lg:block" />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Artistic Process */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <motion.div
            className="text-center mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-4">
              How I Create
            </h2>
            <p className="text-base lg:text-lg max-w-2xl mx-auto" style={{ color: '#444950' }}>
              A behind-the-scenes look at the four-stage creative process that brings every Fair Fab Gallery artwork to life — from first spark of inspiration to final, polished piece.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  variants={fadeInUp}
                  className="flex flex-col items-center text-center p-6 rounded-lg shadow-sm"
                  style={{ backgroundColor: '#F2F3F5' }}
                >
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center mb-5"
                    style={{ backgroundColor: '#ECF3FF' }}
                  >
                    <Icon size={24} style={{ color: '#1877F2' }} />
                  </div>
                  <div
                    className="text-xs font-bold uppercase tracking-wider mb-2"
                    style={{ color: '#77A7FF' }}
                  >
                    Step {index + 1}
                  </div>
                  <h3 className="text-base font-bold text-black mb-3">{step.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#444950' }}>
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </section>

        {/* Values & Philosophy */}
        <section
          className="py-16 lg:py-24"
          style={{ backgroundColor: '#1D3C78' }}
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="max-w-3xl mx-auto text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={staggerContainer}
            >
              <motion.h2
                variants={fadeInUp}
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6"
              >
                Revisiting Standards of Pop Art
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="text-base lg:text-lg leading-relaxed mb-6"
                style={{ color: '#AAC9FF' }}
              >
                At the heart of Fabien's work is a fundamental question: what does Pop Art mean in the digital age? The movement was born from a desire to blur the line between high art and everyday life, to celebrate the visual language of mass culture. Fabien carries that spirit forward — but with new tools, new references, and a new context.
              </motion.p>
              <motion.p
                variants={fadeInUp}
                className="text-base lg:text-lg leading-relaxed mb-6"
                style={{ color: '#AAC9FF' }}
              >
                Where Warhol used silkscreen printing, Fabien uses digital layers. Where Lichtenstein referenced comic books, Fabien draws from the visual noise of social media, internet culture, and global contemporary art. The result is work that feels both familiar and fresh — rooted in a tradition, but fully alive in the present moment.
              </motion.p>
              <motion.p
                variants={fadeInUp}
                className="text-base lg:text-lg leading-relaxed mb-6"
                style={{ color: '#AAC9FF' }}
              >
                Fabien believes that art should provoke thought while remaining genuinely pleasurable to look at. He rejects the notion that accessibility and depth are mutually exclusive. His works are immediate and visually striking — but they reward closer inspection, inviting viewers to notice the details, question the references, and form their own interpretations.
              </motion.p>
              <motion.p
                variants={fadeInUp}
                className="text-base lg:text-lg leading-relaxed"
                style={{ color: '#AAC9FF' }}
              >
                Fair Fab Gallery is the embodiment of this philosophy: a space where art is celebrated without pretension, where bold creativity is valued over academic gatekeeping, and where the conversation between artist and audience is open, direct, and sincere.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={staggerContainer}
          >
            <motion.h2
              variants={fadeInUp}
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-4"
            >
              Interested in Collaborating?
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-base lg:text-lg max-w-xl mx-auto mb-8"
              style={{ color: '#444950' }}
            >
              Whether you are looking for a custom commission, a licensing arrangement, or simply want to start a conversation about art, Fabien would love to hear from you.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Button
                asChild
                size="lg"
                className="font-semibold px-10 py-3 rounded-md text-white transition-all duration-200 hover:opacity-90"
                style={{ backgroundColor: '#1877F2' }}
              >
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </motion.div>
          </motion.div>
        </section>
      </main>
    </>
  );
}
