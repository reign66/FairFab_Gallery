import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SEO } from '@/hooks/useSEO';
import Breadcrumbs from '@/components/common/Breadcrumbs';

const breadcrumbs = [{ label: 'Legal Notices' }];

interface SectionProps {
  title: string;
  children: React.ReactNode;
  delay?: number;
}

function Section({ title, children, delay = 0 }: SectionProps) {
  return (
    <motion.section
      aria-labelledby={`section-${title.toLowerCase().replace(/\s+/g, '-')}`}
      className="mb-10"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
    >
      <h2
        id={`section-${title.toLowerCase().replace(/\s+/g, '-')}`}
        className="text-xl font-semibold text-[#1D3C78] mb-3 pb-2 border-b border-[#AAC9FF]"
      >
        {title}
      </h2>
      <div className="text-[#444950] leading-relaxed space-y-3 text-sm sm:text-base">
        {children}
      </div>
    </motion.section>
  );
}

export default function LegalNotices() {
  return (
    <>
      <SEO
        title="Legal Notices | Fair Fab Gallery"
        description="Legal notices for Fair Fab Gallery — site owner, hosting provider, intellectual property rights, terms of use, and liability limitations."
      />

      <main className="min-h-screen bg-[#F2F3F5]">
        {/* Header */}
        <header className="bg-[#000000] py-14 px-4">
          <div className="max-w-4xl mx-auto">
            <Breadcrumbs items={breadcrumbs} />
            <motion.h1
              className="mt-6 text-3xl sm:text-4xl font-bold text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Legal Notices
            </motion.h1>
            <motion.p
              className="mt-3 text-[#AAC9FF] text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              Last updated: March 2026
            </motion.p>
          </div>
        </header>

        {/* Content */}
        <article className="max-w-4xl mx-auto px-4 py-12">
          <Section title="1. Site Owner" delay={0.05}>
            <p>
              This website is published by <strong>Fabien Ariel Abisror</strong>, operating as an
              independent artist and art gallery under the trading name <strong>Fair Fab Gallery</strong>.
            </p>
            <p>
              <strong>Address:</strong> Tel Aviv, Israel
              <br />
              <strong>Email:</strong>{' '}
              <a href="mailto:contact@fair-fab-gallery.com" className="text-[#1877F2] hover:text-[#2851A3] underline">
                contact@fair-fab-gallery.com
              </a>
              <br />
              <strong>Phone:</strong>{' '}
              <a href="tel:+97250123456" className="text-[#1877F2] hover:text-[#2851A3] underline">
                +972 50 123 4567
              </a>
            </p>
            <p>
              As a private individual publisher operating outside the European Union, Fabien Ariel
              Abisror is not required to register a VAT number under Israeli law for the activities
              described on this website. If you require additional legal documentation for any
              commercial purpose, please contact us directly.
            </p>
          </Section>

          <Section title="2. Hosting Provider" delay={0.1}>
            <p>
              This website is hosted by <strong>IONOS SE</strong> (formerly 1&amp;1 Internet SE), a
              company registered under German law.
            </p>
            <p>
              <strong>Registered office:</strong> Elgendorfer Str. 57, 56410 Montabaur, Germany
              <br />
              <strong>Commercial Register:</strong> Amtsgericht Montabaur, HRB 24498
              <br />
              <strong>Website:</strong>{' '}
              <a
                href="https://www.ionos.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1877F2] hover:text-[#2851A3] underline"
              >
                www.ionos.com
              </a>
            </p>
            <p>
              IONOS provides web hosting, domain registration, and related infrastructure services.
              Any complaints regarding the availability or technical performance of this website may
              be directed to their customer support team.
            </p>
          </Section>

          <Section title="3. Intellectual Property" delay={0.15}>
            <p>
              All content published on this website — including but not limited to paintings,
              drawings, digital artworks, photographs of artworks, written descriptions, titles,
              artist statements, logos, graphic elements, and the overall website design — is the
              exclusive property of <strong>Fabien Ariel Abisror</strong> or is used with explicit
              authorisation from the respective rights holders.
            </p>
            <p>
              These works are protected under applicable intellectual property laws, including the
              Israeli Copyright Law (5768-2007) and, where applicable, international conventions
              such as the Berne Convention for the Protection of Literary and Artistic Works.
            </p>
            <p>
              Any reproduction, representation, modification, publication, adaptation, or
              exploitation of all or part of the content of this website — by any means or process
              whatsoever — without the prior written consent of Fabien Ariel Abisror is strictly
              prohibited and constitutes an infringement of copyright, which may result in civil
              and/or criminal proceedings.
            </p>
            <p>
              Trademarks and logos reproduced on this website are registered trademarks belonging to
              their respective owners. Their inclusion does not imply any endorsement or affiliation.
            </p>
          </Section>

          <Section title="4. Copyright Notice" delay={0.2}>
            <p>
              &copy; 2024–2026 Fabien Ariel Abisror — Fair Fab Gallery. All rights reserved.
            </p>
            <p>
              Permission for personal, non-commercial use may be requested by contacting us at{' '}
              <a href="mailto:contact@fair-fab-gallery.com" className="text-[#1877F2] hover:text-[#2851A3] underline">
                contact@fair-fab-gallery.com
              </a>
              . Such permission must be explicitly granted in writing prior to any use. Citing the
              source and clearly attributing the work to the artist does not in itself constitute
              authorisation.
            </p>
            <p>
              For licensing inquiries — including editorial, commercial, or derivative use — please
              use the{' '}
              <Link to="/contact?type=art-licensing" className="text-[#1877F2] hover:text-[#2851A3] underline">
                licensing inquiry form
              </Link>{' '}
              on our Contact page.
            </p>
          </Section>

          <Section title="5. Terms of Use" delay={0.25}>
            <p>
              By accessing and browsing this website, you agree to comply with these Legal Notices
              and all applicable laws and regulations. If you do not agree with any part of these
              terms, you must discontinue your use of the website immediately.
            </p>
            <p>
              The website and its content are provided for informational and promotional purposes
              only. Fair Fab Gallery reserves the right to modify, suspend, or discontinue any
              aspect of the website at any time without prior notice.
            </p>
            <p>
              Links to external websites are provided for convenience only. Fair Fab Gallery does
              not control, endorse, or accept responsibility for the content or practices of any
              third-party websites. Visiting linked websites is at your own risk.
            </p>
            <p>
              Users agree not to use this website for any unlawful purpose, to transmit any
              harmful, offensive, or infringing material, to attempt to gain unauthorised access
              to any systems or data, or to engage in any activity that disrupts or interferes with
              the proper functioning of the website.
            </p>
          </Section>

          <Section title="6. Limitation of Liability" delay={0.3}>
            <p>
              Fair Fab Gallery endeavours to ensure that the information published on this website
              is accurate and up to date. However, Fair Fab Gallery makes no warranties or
              representations — express or implied — as to the accuracy, completeness, timeliness,
              or fitness for a particular purpose of any information contained on the website.
            </p>
            <p>
              To the fullest extent permitted by applicable law, Fair Fab Gallery shall not be
              liable for any direct, indirect, incidental, consequential, or punitive damages
              arising from the use of, or inability to use, this website or its content, including
              damages resulting from errors, omissions, interruptions, deletion of files, viruses,
              delays, or failure of performance.
            </p>
            <p>
              The website may be temporarily unavailable due to maintenance, technical issues, or
              circumstances beyond our control. Fair Fab Gallery accepts no responsibility for any
              loss arising from such unavailability.
            </p>
            <p>
              Prices, availability, and descriptions of artworks are subject to change without
              notice. The display of an artwork on this website does not constitute a binding offer
              to sell. All sales are subject to a separate written agreement.
            </p>
          </Section>

          <Section title="7. Applicable Law and Jurisdiction" delay={0.35}>
            <p>
              These Legal Notices are governed by the laws of the State of Israel, without regard
              to conflict of law provisions. Any dispute arising in connection with these notices or
              the use of this website shall be subject to the exclusive jurisdiction of the
              competent courts of Tel Aviv, Israel, unless otherwise required by mandatory
              applicable law.
            </p>
            <p>
              If you access this website from a jurisdiction where its content is restricted or
              unlawful, you do so at your own initiative and are solely responsible for compliance
              with local laws.
            </p>
          </Section>

          <Section title="8. Contact" delay={0.4}>
            <p>
              For any questions regarding these Legal Notices, intellectual property matters, or
              to report any issue with the website, please contact us:
            </p>
            <p>
              <strong>Email:</strong>{' '}
              <a href="mailto:contact@fair-fab-gallery.com" className="text-[#1877F2] hover:text-[#2851A3] underline">
                contact@fair-fab-gallery.com
              </a>
              <br />
              <strong>Phone:</strong>{' '}
              <a href="tel:+97250123456" className="text-[#1877F2] hover:text-[#2851A3] underline">
                +972 50 123 4567
              </a>
            </p>
            <p>
              You may also use our{' '}
              <Link to="/contact" className="text-[#1877F2] hover:text-[#2851A3] underline">
                Contact page
              </Link>{' '}
              to send a message directly.
            </p>
          </Section>
        </article>
      </main>
    </>
  );
}
