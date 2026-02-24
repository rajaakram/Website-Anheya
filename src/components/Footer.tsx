import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Mail, Phone, MapPin, Globe, ChevronDown } from 'lucide-react';

const languages = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'it', name: 'Italiano', flag: '🇮🇹' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
];

const footerLinks = {
  experiences: [
    { label: 'Roots Holidays', href: '/roots-holidays' },
    { label: 'Day Tours', href: '/day-tours' },
    { label: 'Weekend Breaks', href: '/weekend-breaks' },
    { label: 'All Experiences', href: '/experiences' },
  ],
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Our Story', href: '/about' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ],
  support: [
    { label: 'FAQ', href: '/#faq' },
    { label: 'Transfers', href: '/transfers' },
    { label: 'Accommodation', href: '/accommodation' },
    { label: 'Booking Info', href: '/contact' },
  ],
};

const Footer = () => {
  const [currentLang, setCurrentLang] = useState(languages[0]);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

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
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full gradient-warm flex items-center justify-center">
                <span className="text-white font-bold text-xl">F</span>
              </div>
              <div>
                <span className="font-heading font-semibold text-xl block">
                  FELIX DREAM
                </span>
                <span className="text-sm text-white/60">By Paestum Holidays</span>
              </div>
            </Link>
            <p className="text-white/70 leading-relaxed mb-6 max-w-sm">
              Boutique travel experiences in the heart of Cilento, Italy. 
              Crafted with passion by Teresa since 2009.
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
              Experiences
            </h4>
            <ul className="space-y-3">
              {footerLinks.experiences.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-white/70 hover:text-[#E8B84B] transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-white/70 hover:text-[#E8B84B] transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">
              Support
            </h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-white/70 hover:text-[#E8B84B] transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
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
              <span className="text-sm">Capaccio Paestum, Italy</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-white/50 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Felix Dream by Paestum Holidays. All rights reserved.
          </p>

          {/* Language Selector */}
          <div className="relative">
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
            >
              <Globe size={16} />
              <span className="text-sm">{currentLang.flag}</span>
              <span className="text-sm hidden sm:inline">{currentLang.name}</span>
              <ChevronDown
                size={14}
                className={`transition-transform ${langDropdownOpen ? 'rotate-180' : ''}`}
              />
            </button>

            {langDropdownOpen && (
              <div className="absolute bottom-full right-0 mb-2 bg-white rounded-lg shadow-xl overflow-hidden min-w-[150px]">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setCurrentLang(lang);
                      setLangDropdownOpen(false);
                    }}
                    className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-gray-100 transition-colors ${
                      currentLang.code === lang.code
                        ? 'bg-[#E8B84B]/10 text-[#D94F3E]'
                        : 'text-charcoal'
                    }`}
                  >
                    <span>{lang.flag}</span>
                    <span className="text-sm">{lang.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Legal Links */}
          <div className="flex items-center gap-4 text-sm">
            <a href="#" className="text-white/50 hover:text-[#E8B84B] transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-white/50 hover:text-[#E8B84B] transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>

      {/* Click outside to close language dropdown */}
      {langDropdownOpen && (
        <div className="fixed inset-0 z-[-1]" onClick={() => setLangDropdownOpen(false)} />
      )}
    </footer>
  );
};

export default Footer;
