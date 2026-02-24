import { useState, useEffect, useRef } from 'react';
import { Facebook, Instagram, Mail, Phone, MapPin, ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { SUPPORTED_LANGUAGES } from '../i18n/languages';

const footerLinkHrefs = {
  experiences: ['#experiences', '#experiences', '#experiences', '#contact'],
  company: ['#about', '#about', '#testimonials', '#contact'],
  support: ['#faq', '#contact', '#faq', '#faq'],
};

const Footer = () => {
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);
  const { t, i18n } = useTranslation();

  const currentLang = SUPPORTED_LANGUAGES.find((l) => l.code === i18n.resolvedLanguage) || SUPPORTED_LANGUAGES[0];

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangDropdownOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  // Helper to get array values from translation
  const getLinks = (section: 'experienceLinks' | 'companyLinks' | 'supportLinks') => {
    return [0, 1, 2, 3].map((i) => t(`footer.${section}.${i}`));
  };

  return (
    <footer className="relative bg-[#2A2A2A] text-white overflow-hidden">
      {/* Wave Divider Top */}
      <div className="absolute top-0 left-0 right-0 transform -translate-y-[99%]">
        <svg
          viewBox="0 0 1200 100"
          preserveAspectRatio="none"
          className="w-full h-16 md:h-24"
        >
          <path
            d="M0,50 Q300,0 600,50 T1200,50 L1200,100 L0,100 Z"
            fill="#2A2A2A"
            opacity="1"
          />
        </svg>
      </div>

      <div className="container-padding max-w-7xl mx-auto pt-20 pb-8">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center gap-3 mb-6">
              <img
                src="/images/logo.svg"
                alt="Felix Dream"
                className="w-12 h-12 object-contain"
              />
              <div className="flex flex-col">
                <span className="font-heading font-bold text-2xl uppercase tracking-widest leading-none text-white">
                  Felix Dream
                </span>
                <span className="text-[0.65rem] uppercase tracking-[0.2em] text-white/60 mt-1.5 font-medium">
                  {t('nav.tagline')}
                </span>
              </div>
            </a>
            <p className="text-white/70 leading-relaxed mb-6 max-w-sm">
              {t('footer.brandDescription')}
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#E8B84B] transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#E8B84B] transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="mailto:info@paestumholidays.com"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#E8B84B] transition-colors duration-200"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Experiences Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">
              {t('footer.experiencesTitle')}
            </h4>
            <ul className="space-y-3">
              {getLinks('experienceLinks').map((label, i) => (
                <li key={i}>
                  <a
                    href={footerLinkHrefs.experiences[i]}
                    className="text-white/70 hover:text-[#E8B84B] transition-colors duration-200"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">
              {t('footer.companyTitle')}
            </h4>
            <ul className="space-y-3">
              {getLinks('companyLinks').map((label, i) => (
                <li key={i}>
                  <a
                    href={footerLinkHrefs.company[i]}
                    className="text-white/70 hover:text-[#E8B84B] transition-colors duration-200"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">
              {t('footer.supportTitle')}
            </h4>
            <ul className="space-y-3">
              {getLinks('supportLinks').map((label, i) => (
                <li key={i}>
                  <a
                    href={footerLinkHrefs.support[i]}
                    className="text-white/70 hover:text-[#E8B84B] transition-colors duration-200"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Bar */}
        <div className="border-t border-white/10 pt-8 mb-8">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
            <a
              href="mailto:info@paestumholidays.com"
              className="flex items-center gap-2 text-white/70 hover:text-[#E8B84B] transition-colors"
            >
              <Mail size={16} />
              <span className="text-sm">info@paestumholidays.com</span>
            </a>
            <a
              href="tel:+390123456789"
              className="flex items-center gap-2 text-white/70 hover:text-[#E8B84B] transition-colors"
            >
              <Phone size={16} />
              <span className="text-sm">+39 012 345 6789</span>
            </a>
            <div className="flex items-center gap-2 text-white/70">
              <MapPin size={16} />
              <span className="text-sm">{t('contact.locationValue')}</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-white/50 text-sm text-center md:text-left">
            © {new Date().getFullYear()} {t('footer.copyright')}
          </p>

          {/* Language Selector */}
          <div className="relative" ref={langRef}>
            <button
              onClick={(e) => { e.stopPropagation(); setLangDropdownOpen(!langDropdownOpen); }}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
            >
              <span className="text-sm">{currentLang.flag}</span>
              <span className="text-sm hidden sm:inline">{currentLang.name}</span>
              <ChevronDown
                size={14}
                className={`transition-transform ${langDropdownOpen ? 'rotate-180' : ''}`}
              />
            </button>

            {langDropdownOpen && (
              <div className="absolute bottom-full right-0 mb-2 bg-white rounded-xl shadow-xl overflow-hidden min-w-[160px] border border-gray-100">
                {SUPPORTED_LANGUAGES.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={(e) => {
                      e.stopPropagation();
                      i18n.changeLanguage(lang.code);
                      setLangDropdownOpen(false);
                    }}
                    className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-colors text-sm ${i18n.resolvedLanguage === lang.code
                      ? 'bg-[#E8B84B]/10 text-[#D94F3E] font-medium'
                      : 'text-charcoal hover:bg-gray-50'
                      }`}
                  >
                    <span className="text-base">{lang.flag}</span>
                    <span>{lang.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Legal Links */}
          <div className="flex items-center gap-4 text-sm">
            <a
              href="#"
              className="text-white/50 hover:text-[#E8B84B] transition-colors"
            >
              {t('footer.privacy')}
            </a>
            <a
              href="#"
              className="text-white/50 hover:text-[#E8B84B] transition-colors"
            >
              {t('footer.terms')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
