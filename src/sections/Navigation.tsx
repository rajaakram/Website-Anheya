import { useState, useRef, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { SUPPORTED_LANGUAGES } from '../i18n/languages';

interface NavigationProps {
  scrolled: boolean;
}

const Navigation = ({ scrolled }: NavigationProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);
  const { t, i18n } = useTranslation();

  const currentLang = SUPPORTED_LANGUAGES.find((l) => l.code === i18n.resolvedLanguage) || SUPPORTED_LANGUAGES[0];

  const navLinks = [
    { href: '#home', label: t('nav.home') },
    { href: '#experiences', label: t('nav.experiences') },
    { href: '#about', label: t('nav.about') },
    { href: '#testimonials', label: t('nav.testimonials') },
    { href: '#faq', label: t('nav.faq') },
    { href: '#contact', label: t('nav.contact') },
  ];

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? 'bg-[#FEFBF7]/95 backdrop-blur-md shadow-md'
        : 'bg-transparent'
        }`}
    >
      <nav className="container-padding max-w-7xl mx-auto flex items-center justify-between py-4 md:py-5">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3">
          <img
            src="/images/logo.svg"
            alt="Felix Dream"
            className="w-10 h-10 object-contain"
          />
          <div className="hidden sm:flex flex-col">
            <span className="font-heading font-bold text-xl text-charcoal uppercase tracking-widest leading-none">
              Felix Dream
            </span>
            <span className="text-[0.6rem] uppercase tracking-[0.2em] text-deep-olive mt-1.5 font-medium">
              {t('nav.tagline')}
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="nav-link text-sm">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Side: Language Switcher + CTA */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Language Switcher */}
          <div className="relative" ref={langRef}>
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-full text-sm transition-all duration-200 ${scrolled
                ? 'bg-charcoal/5 hover:bg-charcoal/10 text-charcoal'
                : 'bg-white/30 hover:bg-white/50 text-charcoal backdrop-blur-sm'
                }`}
              aria-label="Change language"
            >
              <span>{currentLang.flag}</span>
              <ChevronDown
                size={13}
                className={`transition-transform duration-200 ${langDropdownOpen ? 'rotate-180' : ''}`}
              />
            </button>

            {langDropdownOpen && (
              <div className="absolute top-full right-0 mt-2 bg-white rounded-xl shadow-xl overflow-hidden min-w-[160px] border border-gray-100 animate-in fade-in slide-in-from-top-2 duration-200">
                {SUPPORTED_LANGUAGES.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
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

          {/* CTA Button */}
          <a
            href="#contact"
            className="btn-primary text-sm py-3 px-6"
          >
            {t('nav.bookNow')}
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center gap-2">
          {/* Mobile Language Switcher */}
          <div className="relative" ref={langRef}>
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="flex items-center gap-1 p-2 text-charcoal rounded-full hover:bg-charcoal/5 transition-colors"
              aria-label="Change language"
            >
              <span className="text-base">{currentLang.flag}</span>
              <ChevronDown size={12} className={`transition-transform ${langDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {langDropdownOpen && (
              <div className="absolute top-full right-0 mt-2 bg-white rounded-xl shadow-xl overflow-hidden min-w-[150px] border border-gray-100 z-50">
                {SUPPORTED_LANGUAGES.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      i18n.changeLanguage(lang.code);
                      setLangDropdownOpen(false);
                    }}
                    className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-colors text-sm ${i18n.resolvedLanguage === lang.code
                      ? 'bg-[#E8B84B]/10 text-[#D94F3E] font-medium'
                      : 'text-charcoal hover:bg-gray-50'
                      }`}
                  >
                    <span>{lang.flag}</span>
                    <span>{lang.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            className="p-2 text-charcoal"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-[#FEFBF7]/98 backdrop-blur-md shadow-lg transition-all duration-300 ${mobileMenuOpen
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 -translate-y-4 pointer-events-none'
          }`}
      >
        <ul className="container-padding py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="block py-2 text-charcoal font-medium hover:text-coral transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-4">
            <a
              href="#contact"
              className="btn-primary text-sm py-3 px-6 w-full text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('nav.bookNow')}
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navigation;
