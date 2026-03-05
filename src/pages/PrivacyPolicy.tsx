import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SEO } from '@/hooks/useSEO';
import Breadcrumbs from '@/components/common/Breadcrumbs';

const breadcrumbs = [{ label: 'Privacy Policy' }];

interface SectionProps {
  title: string;
  children: React.ReactNode;
  delay?: number;
}

function Section({ title, children, delay = 0 }: SectionProps) {
  return (
    <motion.section
      aria-labelledby={`privacy-${title.toLowerCase().replace(/\s+/g, '-')}`}
      className="mb-10"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
    >
      <h2
        id={`privacy-${title.toLowerCase().replace(/\s+/g, '-')}`}
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

export default function PrivacyPolicy() {
  return (
    <>
      <SEO
        title="Privacy Policy | Fair Fab Gallery"
        description="Learn how Fair Fab Gallery collects, uses, and protects your personal data. Includes information on cookies, GDPR rights, data retention, and third-party services."
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
              Privacy Policy
            </motion.h1>
            <motion.p
              className="mt-3 text-[#AAC9FF] text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              Last updated: March 2026 — Effective date: March 1, 2026
            </motion.p>
          </div>
        </header>

        {/* Content */}
        <article className="max-w-4xl mx-auto px-4 py-12">
          {/* Intro */}
          <motion.div
            className="bg-[#ECF3FF] border border-[#AAC9FF] rounded-lg p-5 mb-10 text-sm text-[#1D3C78]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <p>
              Fair Fab Gallery, operated by Fabien Ariel Abisror (Tel Aviv, Israel), is committed to
              protecting and respecting your privacy. This Privacy Policy explains what personal data
              we collect, how we use it, and your rights in relation to that data. By using this
              website, you acknowledge that you have read and understood this policy.
            </p>
          </motion.div>

          <Section title="1. Data Controller" delay={0.05}>
            <p>
              The data controller responsible for your personal data is:
            </p>
            <p>
              <strong>Fabien Ariel Abisror</strong> — Fair Fab Gallery
              <br />
              Tel Aviv, Israel
              <br />
              Email:{' '}
              <a href="mailto:contact@fair-fab-gallery.com" className="text-[#1877F2] hover:text-[#2851A3] underline">
                contact@fair-fab-gallery.com
              </a>
              <br />
              Phone:{' '}
              <a href="tel:+97250123456" className="text-[#1877F2] hover:text-[#2851A3] underline">
                +972 50 123 4567
              </a>
            </p>
          </Section>

          <Section title="2. Data We Collect" delay={0.1}>
            <p>We may collect the following categories of personal data:</p>
            <ul className="list-disc list-outside ml-5 space-y-2">
              <li>
                <strong>Contact form data:</strong> Full name, email address, phone number (if
                provided), subject of inquiry, and the content of your message, collected when you
                submit a form on our website.
              </li>
              <li>
                <strong>Usage data:</strong> Information about how you interact with the website,
                including pages visited, time spent, referring URLs, browser type, device type, and
                IP address. This data is collected automatically through analytics tools (see Section
                7 — Third-Party Services).
              </li>
              <li>
                <strong>Cookie data:</strong> Information stored in or retrieved from your browser
                via cookies and similar tracking technologies (see Section 4 — Cookies).
              </li>
              <li>
                <strong>Communication data:</strong> If you contact us by email or phone, we may
                retain records of that correspondence.
              </li>
            </ul>
            <p>
              We do not collect sensitive personal data (such as health, political opinions, or
              biometric data) through this website.
            </p>
          </Section>

          <Section title="3. How We Use Your Data" delay={0.15}>
            <p>We use your personal data for the following purposes and on the following legal bases:</p>
            <ul className="list-disc list-outside ml-5 space-y-2">
              <li>
                <strong>Responding to inquiries</strong> (legal basis: performance of a contract or
                pre-contractual steps, or our legitimate interests in responding to communications):
                when you submit a contact form, we use your data to reply to your request.
              </li>
              <li>
                <strong>Processing commission requests</strong> (legal basis: performance of a
                contract): if you request a custom artwork, your contact details and project
                description are used to manage that commission.
              </li>
              <li>
                <strong>Website analytics and improvement</strong> (legal basis: legitimate
                interests, with your prior consent where required by law): we analyse aggregated
                usage data to understand how visitors use the website and to improve its content and
                performance.
              </li>
              <li>
                <strong>Legal compliance</strong> (legal basis: legal obligation): we may process
                and retain data as required by applicable law.
              </li>
            </ul>
            <p>
              We do not use your data for automated decision-making or profiling that produces legal
              or similarly significant effects.
            </p>
          </Section>

          <Section title="4. Cookies" delay={0.2}>
            <p>
              This website uses cookies and similar technologies. A cookie is a small text file
              placed on your device by a website server. Cookies allow the website to recognise your
              device on subsequent visits and enable certain functionality.
            </p>
            <p>We use the following categories of cookies:</p>
            <ul className="list-disc list-outside ml-5 space-y-2">
              <li>
                <strong>Strictly necessary cookies:</strong> Required for the website to function.
                These cannot be disabled without affecting site functionality. They do not store any
                personally identifiable information.
              </li>
              <li>
                <strong>Analytics cookies:</strong> Set by Google Analytics (see Section 7) to
                collect anonymous usage data about how visitors interact with the website. These are
                only activated with your prior consent where legally required.
              </li>
              <li>
                <strong>Preference cookies:</strong> Remember your settings (e.g., language, theme)
                for a better browsing experience.
              </li>
            </ul>
            <p>
              You can manage or withdraw your cookie consent at any time by adjusting your browser
              settings. Most browsers allow you to refuse cookies or delete existing ones. Note that
              disabling certain cookies may affect the functionality of the website.
            </p>
          </Section>

          <Section title="5. Data Retention" delay={0.25}>
            <p>
              We retain your personal data only for as long as necessary for the purposes for which
              it was collected, or as required by applicable law:
            </p>
            <ul className="list-disc list-outside ml-5 space-y-2">
              <li>
                <strong>Contact form submissions:</strong> Retained for up to 3 years from the date
                of your inquiry, to enable follow-up communication.
              </li>
              <li>
                <strong>Commission and transaction records:</strong> Retained for up to 7 years for
                accounting and legal compliance purposes.
              </li>
              <li>
                <strong>Analytics data:</strong> Aggregated and anonymised usage data is retained
                according to Google Analytics' data retention settings (typically 14 months by
                default, configurable in the account settings).
              </li>
            </ul>
            <p>
              When data is no longer required, it is securely deleted or anonymised so that it can
              no longer be associated with you.
            </p>
          </Section>

          <Section title="6. Your Rights Under GDPR" delay={0.3}>
            <p>
              If you are located in the European Economic Area (EEA) or the United Kingdom, or if
              your data is processed in a way that falls within the territorial scope of the General
              Data Protection Regulation (GDPR), you have the following rights:
            </p>
            <ul className="list-disc list-outside ml-5 space-y-2">
              <li>
                <strong>Right of access:</strong> You have the right to obtain confirmation of
                whether we process your personal data and, if so, to receive a copy of that data.
              </li>
              <li>
                <strong>Right to rectification:</strong> You have the right to request the
                correction of inaccurate or incomplete personal data.
              </li>
              <li>
                <strong>Right to erasure ("right to be forgotten"):</strong> You may request the
                deletion of your personal data where it is no longer necessary for the purposes for
                which it was collected, subject to legal retention obligations.
              </li>
              <li>
                <strong>Right to restriction of processing:</strong> You may request that we limit
                the processing of your data in certain circumstances.
              </li>
              <li>
                <strong>Right to data portability:</strong> Where processing is based on your
                consent or a contract, you have the right to receive your data in a structured,
                commonly used, and machine-readable format.
              </li>
              <li>
                <strong>Right to object:</strong> You may object to processing based on our
                legitimate interests or for direct marketing purposes.
              </li>
              <li>
                <strong>Right to withdraw consent:</strong> Where processing is based on consent,
                you may withdraw it at any time without affecting the lawfulness of processing before
                withdrawal.
              </li>
            </ul>
            <p>
              To exercise any of these rights, please contact us at{' '}
              <a href="mailto:contact@fair-fab-gallery.com" className="text-[#1877F2] hover:text-[#2851A3] underline">
                contact@fair-fab-gallery.com
              </a>
              . We will respond within 30 days. If you believe your rights have not been respected,
              you have the right to lodge a complaint with the relevant supervisory authority in your
              country of residence.
            </p>
          </Section>

          <Section title="7. Third-Party Services" delay={0.35}>
            <p>
              We use the following third-party services that may process your data:
            </p>
            <ul className="list-disc list-outside ml-5 space-y-2">
              <li>
                <strong>Google Analytics (Google LLC):</strong> We use Google Analytics to collect
                anonymised statistical data about website usage (pages viewed, session duration,
                traffic sources, geographic location at country level, device type). Google Analytics
                uses cookies and may transfer data to servers in the United States. Google LLC is
                certified under the EU-US Data Privacy Framework. You can opt out of Google
                Analytics tracking by installing the{' '}
                <a
                  href="https://tools.google.com/dlpage/gaoptout"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1877F2] hover:text-[#2851A3] underline"
                >
                  Google Analytics Opt-out Browser Add-on
                </a>
                .
              </li>
              <li>
                <strong>IONOS SE (hosting):</strong> Our hosting provider processes technical data
                (server logs, IP addresses) as part of the infrastructure that powers this website.
                IONOS is based in Germany and operates under EU data protection law.
              </li>
              <li>
                <strong>Instagram / Meta:</strong> If you follow or interact with us via Instagram
                (@fair_fab_gallery), Meta Platforms Inc. processes your data according to their own
                privacy policy. We have no control over that processing.
              </li>
            </ul>
            <p>
              We do not sell, rent, or trade your personal data with any third parties for marketing
              purposes.
            </p>
          </Section>

          <Section title="8. Data Security" delay={0.4}>
            <p>
              We implement appropriate technical and organisational measures to protect your personal
              data against unauthorised access, disclosure, alteration, or destruction. These
              measures include HTTPS encryption, access controls, and regular security reviews.
            </p>
            <p>
              However, no method of transmission over the internet or method of electronic storage
              is completely secure. While we strive to use commercially acceptable means to protect
              your data, we cannot guarantee absolute security.
            </p>
          </Section>

          <Section title="9. Data Protection Officer (DPO)" delay={0.45}>
            <p>
              As a small independent operator, Fair Fab Gallery is not legally required to appoint a
              formal Data Protection Officer. However, all data protection inquiries are handled
              directly by the site owner, Fabien Ariel Abisror.
            </p>
            <p>
              For any questions, requests, or concerns relating to your personal data, please
              contact:
            </p>
            <p>
              <strong>Fabien Ariel Abisror</strong>
              <br />
              Email:{' '}
              <a href="mailto:contact@fair-fab-gallery.com" className="text-[#1877F2] hover:text-[#2851A3] underline">
                contact@fair-fab-gallery.com
              </a>
              <br />
              Phone:{' '}
              <a href="tel:+97250123456" className="text-[#1877F2] hover:text-[#2851A3] underline">
                +972 50 123 4567
              </a>
            </p>
          </Section>

          <Section title="10. Policy Updates" delay={0.5}>
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our
              practices, legal requirements, or the services we provide. When we make material
              changes, we will update the "Last updated" date at the top of this page.
            </p>
            <p>
              We encourage you to review this page periodically. Your continued use of the website
              after any changes constitutes your acknowledgement of the updated policy. If you have
              any concerns about changes to this policy, please{' '}
              <Link to="/contact" className="text-[#1877F2] hover:text-[#2851A3] underline">
                contact us
              </Link>
              .
            </p>
          </Section>
        </article>
      </main>
    </>
  );
}
