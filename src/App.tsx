import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import Experiences from './sections/Experiences';
import About from './sections/About';
import Testimonials from './sections/Testimonials';
import FAQ from './sections/FAQ';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const { i18n } = useTranslation();
  const locale = i18n.resolvedLanguage;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div key={locale} className="min-h-screen bg-cream overflow-x-hidden">
      <Navigation scrolled={scrolled} />
      <main>
        <Hero />
        <Experiences />
        <About />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
