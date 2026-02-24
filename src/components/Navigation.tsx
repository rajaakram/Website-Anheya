import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  scrolled: boolean;
}

const Navigation = ({ scrolled }: NavigationProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/experiences', label: 'Experiences' },
    { href: '/day-tours', label: 'Day Tours' },
    { href: '/roots-holidays', label: 'Roots Holidays' },
    { href: '/about', label: 'About' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#FEFBF7]/95 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-padding max-w-7xl mx-auto flex items-center justify-between py-4 md:py-5">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full gradient-warm flex items-center justify-center">
            <span className="text-white font-bold text-lg">F</span>
          </div>
          <div className="hidden sm:block">
            <span className="font-heading font-semibold text-lg text-charcoal leading-tight block">
              FELIX DREAM
            </span>
            <span className="text-xs text-deep-olive">By Paestum Holidays</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                to={link.href}
                className={`nav-link text-sm ${isActive(link.href) ? 'text-coral' : ''}`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <Link to="/contact" className="btn-primary text-sm py-3 px-6">
            Book Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 text-charcoal"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-[#FEFBF7]/98 backdrop-blur-md shadow-lg transition-all duration-300 ${
          mobileMenuOpen
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <ul className="container-padding py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                to={link.href}
                className={`block py-2 font-medium transition-colors ${
                  isActive(link.href) ? 'text-coral' : 'text-charcoal hover:text-coral'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="pt-4">
            <Link
              to="/contact"
              className="btn-primary text-sm py-3 px-6 w-full text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Book Now
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navigation;
