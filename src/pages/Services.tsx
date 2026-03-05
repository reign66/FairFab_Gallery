import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SEO } from '@/hooks/useSEO';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import { services } from '@/data/services';
import { faqs } from '@/data/faqs';
import { generateFAQSchema } from '@/utils/seo';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const serviceAccentColors = [
  { bg: '#ECF3FF', icon: '#1877F2', iconBg: '#AAC9FF' },
  { bg: '#F2F3F5', icon: '#2851A3', iconBg: '#ECF3FF' },
  { bg: '#ECF3FF', icon: '#1D3C78', iconBg: '#77A7FF' },
  { bg: '#F2F3F5', icon: '#1877F2', iconBg: '#AAC9FF' },
];

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}

function FAQItem({ question, answer, isOpen, onToggle, index }: FAQItemProps) {
  return (
    <motion.div
      variants={fadeInUp}
      className="rounded-lg overflow-hidden"
      style={{ border: '1px solid #CCCCCC' }}
    >
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full flex items-center justify-between px-6 py-5 text-left transition-colors duration-200 focus:outline-none focus-visible:ring-2"
        style={{
          backgroundColor: isOpen ? '#ECF3FF' : '#ffffff',
          color: '#000000',
        }}
      >
        <span className="font-semibold text-sm sm:text-base pr-4">{question}</span>
        <ChevronDown
          size={20}
          className="flex-shrink-0 transition-transform duration-300"
          style={{
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            color: '#1877F2',
          }}
        />
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            style={{ overflow: 'hidden' }}
          >
            <div
              className="px-6 py-5 text-sm sm:text-base leading-relaxed"
              style={{ color: '#444950', backgroundColor: '#ffffff' }}
            >
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Services() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const faqSchema = generateFAQSchema(faqs);

  const handleFAQToggle = (index: number) => {
    setOpenFAQ(prev => (prev === index ? null : index));
  };

  return (
    <>
      <SEO
        title="Art Services | Digital Art Commissions & Licensing - Fair Fab Gallery"
        description="Explore Fair Fab Gallery's professional art services — custom digital commissions, art licensing, brand collaborations, and exclusive limited-edition prints. Work directly with digital Pop Art creator Fabien Ariel Abisror."
        schema={faqSchema}
      />

      <main className="min-h-screen bg-white" style={{ color: '#444950' }}>
        {/* Breadcrumbs */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
          <Breadcrumbs items={[{ label: 'Services' }]} />
        </div>

        {/* Page Header */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 lg:pt-16 lg:pb-20">
          <motion.h1
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            Art Services — Commissions, Licensing & Collaborations
          </motion.h1>
          <motion.p
            className="text-base lg:text-lg max-w-3xl leading-relaxed"
            style={{ color: '#444950' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          >
            Fair Fab Gallery offers a range of professional creative services built around the distinctive digital Pop Art vision of Fabien Ariel Abisror. Whether you are a private collector seeking a unique custom piece, a brand looking to integrate bold contemporary art into your visual identity, or a publisher in need of licensed artwork, Fabien brings the same level of craft, intentionality, and creative rigor to every project. Below you will find a detailed overview of each service — what is included, how the process works, and how to get started.
          </motion.p>
        </section>

        {/* Services Sections */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 lg:pb-24">
          <div className="space-y-20">
            {services.map((service, index) => {
              const colors = serviceAccentColors[index % serviceAccentColors.length];
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={service.id || service.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.15 }}
                  variants={staggerContainer}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start ${
                    !isEven ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Icon + Title column */}
                  <motion.div
                    variants={fadeInUp}
                    className={`${!isEven ? 'lg:order-2' : ''}`}
                  >
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
                      style={{ backgroundColor: colors.iconBg }}
                    >
                      {service.icon && (
                        <service.icon size={28} style={{ color: colors.icon }} />
                      )}
                    </div>
                    <h2
                      className="text-2xl sm:text-3xl font-bold text-black mb-4"
                    >
                      {service.title}
                    </h2>
                    <p className="text-base leading-relaxed mb-6" style={{ color: '#444950' }}>
                      {service.description}
                    </p>

                    {/* Features list */}
                    {service.features && service.features.length > 0 && (
                      <ul className="space-y-3 mb-8">
                        {service.features.map((feature: string) => (
                          <li key={feature} className="flex items-start gap-3">
                            <div
                              className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5"
                              style={{ backgroundColor: '#ECF3FF' }}
                            >
                              <Check size={12} style={{ color: '#1877F2' }} />
                            </div>
                            <span className="text-sm leading-relaxed" style={{ color: '#444950' }}>
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}

                    <Button
                      asChild
                      className="font-semibold px-8 py-2.5 rounded-md text-white transition-all duration-200 hover:opacity-90"
                      style={{ backgroundColor: '#1877F2' }}
                    >
                      <Link to="/contact">Start a Conversation</Link>
                    </Button>
                  </motion.div>

                  {/* Process steps column */}
                  {service.process && service.process.length > 0 && (
                    <motion.div
                      variants={fadeInUp}
                      className={`${!isEven ? 'lg:order-1' : ''}`}
                    >
                      <div
                        className="rounded-lg p-8"
                        style={{ backgroundColor: colors.bg }}
                      >
                        <h3
                          className="text-lg font-bold mb-6"
                          style={{ color: '#1D3C78' }}
                        >
                          How It Works
                        </h3>
                        <ol className="space-y-6">
                          {service.process.map((step: { title: string; description: string }, stepIndex: number) => (
                            <li key={step.title} className="flex gap-4">
                              <div
                                className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm text-white"
                                style={{ backgroundColor: '#1877F2' }}
                              >
                                {stepIndex + 1}
                              </div>
                              <div>
                                <p className="font-semibold text-black text-sm mb-1">
                                  {step.title}
                                </p>
                                <p className="text-sm leading-relaxed" style={{ color: '#444950' }}>
                                  {step.description}
                                </p>
                              </div>
                            </li>
                          ))}
                        </ol>
                      </div>
                    </motion.div>
                  )}

                  {/* Fallback visual if no process */}
                  {(!service.process || service.process.length === 0) && (
                    <motion.div
                      variants={fadeInUp}
                      className={`${!isEven ? 'lg:order-1' : ''}`}
                    >
                      <div
                        className="rounded-lg p-8 h-full min-h-48 flex items-center justify-center"
                        style={{ backgroundColor: colors.bg }}
                      >
                        <p
                          className="text-center text-sm italic"
                          style={{ color: '#2851A3' }}
                        >
                          Every project is tailored to your specific needs and vision.
                        </p>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* FAQ Section */}
        <section
          className="py-16 lg:py-24"
          style={{ backgroundColor: '#F2F3F5' }}
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-base lg:text-lg max-w-2xl mx-auto" style={{ color: '#444950' }}>
                Everything you need to know about working with Fair Fab Gallery. If your question is not answered below, do not hesitate to reach out directly — Fabien is always happy to discuss your project.
              </p>
            </motion.div>

            <motion.div
              className="space-y-3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={staggerContainer}
            >
              {faqs.map((faq, index) => (
                <FAQItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openFAQ === index}
                  onToggle={() => handleFAQToggle(index)}
                  index={index}
                />
              ))}
            </motion.div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section
          className="py-16 lg:py-24"
          style={{ backgroundColor: '#1877F2' }}
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              variants={staggerContainer}
            >
              <motion.h2
                variants={fadeInUp}
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4"
              >
                Ready to Bring Your Vision to Life?
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="text-base lg:text-lg max-w-2xl mx-auto mb-8 leading-relaxed"
                style={{ color: '#ECF3FF' }}
              >
                Whether you have a clear brief or just a spark of an idea, Fabien is ready to collaborate. Reach out today to discuss your project — no commitment required, just a conversation about what is possible.
              </motion.p>
              <motion.div
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Button
                  asChild
                  size="lg"
                  className="font-semibold px-10 py-3 rounded-md transition-all duration-200"
                  style={{ backgroundColor: '#ffffff', color: '#1877F2' }}
                >
                  <Link to="/contact">Start a Project</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="font-semibold px-10 py-3 rounded-md transition-all duration-200"
                  style={{
                    borderColor: '#ffffff',
                    color: '#ffffff',
                    backgroundColor: 'transparent',
                  }}
                >
                  <Link to="/gallery">Explore the Gallery</Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
