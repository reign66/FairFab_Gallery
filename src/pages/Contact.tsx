import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Instagram, Send, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { SEO } from '@/hooks/useSEO';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import { SITE_CONFIG } from '@/utils/constants';
import { validateEmail, validateRequired, validateMinLength } from '@/utils/validation';

const SUBJECT_OPTIONS = [
  { value: 'custom-commission', label: 'Custom Commission' },
  { value: 'gallery-collaboration', label: 'Gallery Collaboration' },
  { value: 'art-licensing', label: 'Art Licensing' },
  { value: 'general-inquiry', label: 'General Inquiry' },
];

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  rgpdConsent: boolean;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  message?: string;
  rgpdConsent?: string;
}

const breadcrumbs = [{ label: 'Contact' }];

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.08, ease: 'easeOut' },
  }),
};

export default function Contact() {
  const [searchParams] = useSearchParams();
  const typeParam = searchParams.get('type');

  const resolveSubject = (type: string | null): string => {
    if (!type) return '';
    const match = SUBJECT_OPTIONS.find(
      (o) => o.value === type || o.label.toLowerCase().replace(/\s+/g, '-') === type.toLowerCase()
    );
    return match ? match.value : '';
  };

  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    subject: resolveSubject(typeParam),
    message: '',
    rgpdConsent: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    const resolved = resolveSubject(typeParam);
    if (resolved) {
      setFormData((prev) => ({ ...prev, subject: resolved }));
    }
  }, [typeParam]);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    const nameError = validateRequired(formData.fullName, 'Full Name');
    if (nameError) newErrors.fullName = nameError;

    const emailRequiredError = validateRequired(formData.email, 'Email');
    if (emailRequiredError) {
      newErrors.email = emailRequiredError;
    } else {
      const emailFormatError = validateEmail(formData.email);
      if (emailFormatError) newErrors.email = emailFormatError;
    }

    const messageRequiredError = validateRequired(formData.message, 'Message');
    if (messageRequiredError) {
      newErrors.message = messageRequiredError;
    } else {
      const messageLengthError = validateMinLength(formData.message, 50, 'Message');
      if (messageLengthError) newErrors.message = messageLengthError;
    }

    if (!formData.rgpdConsent) {
      newErrors.rgpdConsent = 'You must consent to the processing of your data to proceed.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsLoading(true);
    setSubmitStatus('idle');

    try {
      // Simulate network request — replace with real endpoint
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitStatus('success');
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        rgpdConsent: false,
      });
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsLoading(false);
    }
  };

  const contactItems = [
    {
      icon: Mail,
      label: 'Email',
      value: 'contact@fair-fab-gallery.com',
      href: 'mailto:contact@fair-fab-gallery.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+972 50 123 4567',
      href: 'tel:+97250123456',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Tel Aviv, Israel',
      href: null,
    },
    {
      icon: Clock,
      label: 'Response Time',
      value: '24–48 hours',
      href: null,
    },
    {
      icon: Instagram,
      label: 'Instagram',
      value: '@fair_fab_gallery',
      href: 'https://www.instagram.com/fair_fab_gallery',
    },
  ];

  return (
    <>
      <SEO
        title="Contact Fair Fab Gallery | Commissions & Inquiries"
        description="Get in touch with Fair Fab Gallery for custom art commissions, gallery collaborations, licensing inquiries, or general questions. Based in Tel Aviv, Israel."
      />

      <main className="min-h-screen bg-[#F2F3F5]">
        {/* Hero banner */}
        <section className="bg-[#000000] py-14 px-4">
          <div className="max-w-6xl mx-auto">
            <Breadcrumbs items={breadcrumbs} />
            <motion.h1
              className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Get in Touch
              <span className="block text-[#AAC9FF]">Contact Fair Fab Gallery</span>
            </motion.h1>
            <motion.p
              className="mt-4 text-[#CCD6F6] text-lg max-w-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              Whether you have a commission in mind, a collaboration idea, or simply want to say hello — we'd love to hear from you.
            </motion.p>
          </div>
        </section>

        {/* Two-column content */}
        <section className="max-w-6xl mx-auto px-4 py-14 grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* LEFT — Form */}
          <motion.div
            className="lg:col-span-3 bg-white rounded-lg shadow-md p-8"
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h2 className="text-xl font-semibold text-[#000000] mb-6">Send a Message</h2>

            {submitStatus === 'success' && (
              <motion.div
                className="flex items-start gap-3 bg-[#ECF3FF] border border-[#AAC9FF] rounded-lg p-4 mb-6"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <CheckCircle className="text-[#1877F2] mt-0.5 flex-shrink-0" size={20} />
                <div>
                  <p className="font-semibold text-[#1D3C78]">Message sent successfully!</p>
                  <p className="text-sm text-[#444950] mt-1">
                    Thank you for reaching out. We'll get back to you within 24–48 hours.
                  </p>
                </div>
              </motion.div>
            )}

            {submitStatus === 'error' && (
              <motion.div
                className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <p className="font-semibold text-red-700">Something went wrong</p>
                <p className="text-sm text-red-600 mt-1">
                  Please try again or email us directly at{' '}
                  <a href="mailto:contact@fair-fab-gallery.com" className="underline">
                    contact@fair-fab-gallery.com
                  </a>
                  .
                </p>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              {/* Full Name */}
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-[#444950] mb-1">
                  Full Name <span className="text-[#1877F2]">*</span>
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Jane Doe"
                  autoComplete="name"
                  className={`w-full rounded-md border px-4 py-2.5 text-sm text-[#000000] bg-white outline-none transition-all duration-200 focus:ring-2 focus:ring-[#77A7FF] ${
                    errors.fullName ? 'border-red-400' : 'border-[#CCCCCC]'
                  }`}
                />
                {errors.fullName && (
                  <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#444950] mb-1">
                  Email <span className="text-[#1877F2]">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="jane@example.com"
                  autoComplete="email"
                  className={`w-full rounded-md border px-4 py-2.5 text-sm text-[#000000] bg-white outline-none transition-all duration-200 focus:ring-2 focus:ring-[#77A7FF] ${
                    errors.email ? 'border-red-400' : 'border-[#CCCCCC]'
                  }`}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-[#444950] mb-1">
                  Phone <span className="text-xs text-[#CCCCCC]">(optional)</span>
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+1 234 567 8900"
                  autoComplete="tel"
                  className="w-full rounded-md border border-[#CCCCCC] px-4 py-2.5 text-sm text-[#000000] bg-white outline-none transition-all duration-200 focus:ring-2 focus:ring-[#77A7FF]"
                />
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-[#444950] mb-1">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full rounded-md border border-[#CCCCCC] px-4 py-2.5 text-sm text-[#000000] bg-white outline-none transition-all duration-200 focus:ring-2 focus:ring-[#77A7FF]"
                >
                  <option value="">Select a subject…</option>
                  {SUBJECT_OPTIONS.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#444950] mb-1">
                  Message <span className="text-[#1877F2]">*</span>
                  <span className="text-xs text-[#CCCCCC] ml-1">(min. 50 characters)</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project, inquiry, or question…"
                  className={`w-full rounded-md border px-4 py-2.5 text-sm text-[#000000] bg-white outline-none transition-all duration-200 focus:ring-2 focus:ring-[#77A7FF] resize-y ${
                    errors.message ? 'border-red-400' : 'border-[#CCCCCC]'
                  }`}
                />
                <div className="flex justify-between items-center mt-1">
                  {errors.message ? (
                    <p className="text-red-500 text-xs">{errors.message}</p>
                  ) : (
                    <span />
                  )}
                  <span className={`text-xs ml-auto ${formData.message.length < 50 ? 'text-[#CCCCCC]' : 'text-[#1877F2]'}`}>
                    {formData.message.length} / 50
                  </span>
                </div>
              </div>

              {/* RGPD Consent */}
              <div>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="rgpdConsent"
                    checked={formData.rgpdConsent}
                    onChange={handleChange}
                    className="mt-0.5 h-4 w-4 rounded border-[#CCCCCC] accent-[#1877F2]"
                  />
                  <span className="text-sm text-[#444950]">
                    I consent to Fair Fab Gallery processing my personal data to handle my inquiry,
                    in accordance with the{' '}
                    <Link to="/privacy-policy" className="text-[#1877F2] underline hover:text-[#2851A3]">
                      Privacy Policy
                    </Link>
                    . <span className="text-[#1877F2]">*</span>
                  </span>
                </label>
                {errors.rgpdConsent && (
                  <p className="text-red-500 text-xs mt-1 ml-7">{errors.rgpdConsent}</p>
                )}
              </div>

              {/* Submit */}
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-[#1877F2] hover:bg-[#2851A3] text-white font-semibold py-2.5 rounded-md transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-60"
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                    </svg>
                    Sending…
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </motion.div>

          {/* RIGHT — Contact info */}
          <motion.aside
            className="lg:col-span-2 flex flex-col gap-6"
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-lg font-semibold text-[#000000] mb-5">Contact Information</h2>
              <ul className="space-y-4">
                {contactItems.map((item, i) => (
                  <motion.li
                    key={item.label}
                    custom={i}
                    variants={fadeInUp}
                    initial="hidden"
                    animate="visible"
                    className="flex items-start gap-3"
                  >
                    <span className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-md bg-[#ECF3FF]">
                      <item.icon size={16} className="text-[#1877F2]" />
                    </span>
                    <div>
                      <p className="text-xs text-[#CCCCCC] uppercase tracking-wide">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.href.startsWith('http') ? '_blank' : undefined}
                          rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="text-sm font-medium text-[#1877F2] hover:text-[#2851A3] transition-colors duration-200"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm font-medium text-[#444950]">{item.value}</p>
                      )}
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="bg-[#ECF3FF] border border-[#AAC9FF] rounded-lg p-6">
              <h3 className="text-base font-semibold text-[#1D3C78] mb-2">Commission Inquiries</h3>
              <p className="text-sm text-[#444950] leading-relaxed">
                Interested in a custom piece? Select "Custom Commission" from the subject dropdown and
                describe your vision — dimensions, style references, intended space, and budget range
                help us respond faster.
              </p>
              <Link
                to="/portfolio"
                className="inline-block mt-4 text-sm font-medium text-[#1877F2] hover:text-[#2851A3] underline transition-colors duration-200"
              >
                Browse the portfolio first &rarr;
              </Link>
            </div>
          </motion.aside>
        </section>
      </main>
    </>
  );
}
