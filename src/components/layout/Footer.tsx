import { Link } from 'react-router-dom';
import { Instagram, Mail, MapPin, Phone } from 'lucide-react';
import { SITE_CONFIG, NAV_LINKS } from '@/utils/constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#000000] text-white">
      <div className="mx-auto max-w-7xl px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="h-9 w-9 rounded-lg bg-[#1877F2] flex items-center justify-center">
                <span className="text-white font-bold text-sm leading-none">FF</span>
              </div>
              <div className="flex flex-col">
                <span className="text-base font-bold text-white leading-tight">Fair Fab</span>
                <span className="text-[10px] font-medium text-[#AAC9FF] uppercase tracking-[0.2em] leading-tight">Gallery</span>
              </div>
            </div>
            <p className="text-sm text-[#CCCCCC] leading-relaxed max-w-xs">
              Contemporary digital art gallery by {SITE_CONFIG.artistShort}. Revisiting the standards of Pop Art and contemporary artistic trends.
            </p>
            <div className="flex gap-3">
              <a
                href={SITE_CONFIG.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#1877F2] transition-colors duration-300"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#1877F2] transition-colors duration-300"
                aria-label="Send us an email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#AAC9FF] mb-4">Navigation</h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-[#CCCCCC] hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#AAC9FF] mb-4">Services</h3>
            <ul className="space-y-3">
              <li><Link to="/services" className="text-sm text-[#CCCCCC] hover:text-white transition-colors">Custom Commissions</Link></li>
              <li><Link to="/services" className="text-sm text-[#CCCCCC] hover:text-white transition-colors">Art Prints</Link></li>
              <li><Link to="/services" className="text-sm text-[#CCCCCC] hover:text-white transition-colors">Gallery Collaborations</Link></li>
              <li><Link to="/services" className="text-sm text-[#CCCCCC] hover:text-white transition-colors">Art Licensing</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#AAC9FF] mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-[#CCCCCC]">
                <MapPin className="w-4 h-4 text-[#77A7FF] shrink-0" />
                {SITE_CONFIG.location}
              </li>
              <li>
                <a href={`mailto:${SITE_CONFIG.email}`} className="flex items-center gap-2 text-sm text-[#CCCCCC] hover:text-white transition-colors">
                  <Mail className="w-4 h-4 text-[#77A7FF] shrink-0" />
                  {SITE_CONFIG.email}
                </a>
              </li>
              <li>
                <a href={`tel:${SITE_CONFIG.phone}`} className="flex items-center gap-2 text-sm text-[#CCCCCC] hover:text-white transition-colors">
                  <Phone className="w-4 h-4 text-[#77A7FF] shrink-0" />
                  {SITE_CONFIG.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[#CCCCCC]">
            &copy; {currentYear} {SITE_CONFIG.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/mentions-legales" className="text-xs text-[#CCCCCC] hover:text-white transition-colors">Legal Notices</Link>
            <Link to="/politique-confidentialite" className="text-xs text-[#CCCCCC] hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/plan-du-site" className="text-xs text-[#CCCCCC] hover:text-white transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
