import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Award, Users, Globe, Calendar, Star } from 'lucide-react';

const useScrollAnimation = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-8');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = ref.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return ref;
};

const WaveDivider = ({ flip = false, color = '#FEFBF7' }: { flip?: boolean; color?: string }) => (
  <div className={`w-full overflow-hidden ${flip ? 'transform rotate-180' : ''}`}>
    <svg viewBox="0 0 1200 80" preserveAspectRatio="none" className="w-full h-16 md:h-20 lg:h-24">
      <path d="M0,40 Q300,0 600,40 T1200,40 L1200,80 L0,80 Z" fill={color} opacity="1" />
    </svg>
  </div>
);

const About = () => {
  const heroRef = useScrollAnimation();
  const storyRef = useScrollAnimation();
  const valuesRef = useScrollAnimation();
  const teamRef = useScrollAnimation();
  const trustRef = useScrollAnimation();
  const galleryRef = useScrollAnimation();

  const values = [
    { icon: Heart, title: 'Passion', description: 'We pour our hearts into every experience we create.' },
    { icon: Award, title: 'Excellence', description: 'We strive for the highest quality in everything we do.' },
    { icon: Users, title: 'Personal Connection', description: 'Every guest becomes part of our extended family.' },
    { icon: Globe, title: 'Authenticity', description: 'We showcase the real Cilento, not tourist traps.' },
  ];

  const stats = [
    { value: '15+', label: 'Years of Experience' },
    { value: '5000+', label: 'Happy Guests' },
    { value: '4', label: 'Languages Spoken' },
    { value: '4.9', label: 'Average Rating' },
  ];

  const galleryImages = [
    { src: '/images/paestum-temples.jpg', alt: 'Paestum Temples' },
    { src: '/images/amalfi-coast.jpg', alt: 'Amalfi Coast' },
    { src: '/images/castellabate-village.jpg', alt: 'Castellabate' },
    { src: '/images/marina-camerota.jpg', alt: 'Marina di Camerota' },
    { src: '/images/cilento-sunset.jpg', alt: 'Cilento Sunset' },
    { src: '/images/ravello-gardens.jpg', alt: 'Ravello Gardens' },
  ];

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/images/cilento-panoramic.jpg)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
        
        <div className="relative z-10 container-padding max-w-5xl mx-auto text-center pt-24 pb-16 text-white">
          <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 mb-4">
            <span className="inline-block px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium">
              Our Story
            </span>
          </div>
          <h1 className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-100 font-heading font-bold text-4xl sm:text-5xl md:text-6xl text-white leading-tight mb-6">
            About <span className="text-[#E8B84B]">Felix Dream</span>
          </h1>
          <p className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-200 text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Crafting unforgettable experiences in the heart of Cilento since 2009.
          </p>
        </div>
        
        <WaveDivider color="#FEFBF7" />
      </section>

      {/* Teresa's Story */}
      <section ref={storyRef} className="relative section-padding bg-[#FEFBF7]">
        <div className="container-padding max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
              <div className="blob-mask overflow-hidden">
                <img
                  src="/images/castellabate-village.jpg"
                  alt="Cilento village"
                  className="w-full h-[400px] md:h-[500px] object-cover"
                />
              </div>
            </div>

            <div>
              <span className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 inline-block px-4 py-2 rounded-full bg-[#D94F3E]/10 text-[#D94F3E] text-sm font-medium mb-4">
                Teresa's Story
              </span>
              <h2 className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-100 font-heading font-bold text-3xl md:text-4xl text-charcoal mb-6">
                A Lifelong Love Affair with <span className="text-transparent bg-clip-text gradient-warm">Cilento</span>
              </h2>
              <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-200 space-y-4 text-deep-olive leading-relaxed">
                <p>
                  I was born and raised in Capaccio Paestum, surrounded by the ancient Greek temples, 
                  rolling olive groves, and the endless blue of the Mediterranean. This land is not 
                  just where I live—it's who I am.
                </p>
                <p>
                  After years of sharing my favorite local spots with friends and family, I realized 
                  that my passion for Cilento could become something more. In 2009, Felix Dream was born 
                  with a simple mission: to help others experience the authentic beauty of my homeland.
                </p>
                <p>
                  Every experience I create is deeply personal. I know the best buffalo mozzarella farms, 
                  the hidden beaches only locals know about, and the families who will welcome you like 
                  one of their own. This isn't just a business for me—it's my way of sharing the magic 
                  of Cilento with the world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section ref={valuesRef} className="relative section-padding bg-[#F5EFE0]">
        <WaveDivider flip color="#F5EFE0" />
        
        <div className="container-padding max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 inline-block px-4 py-2 rounded-full bg-[#1B8C5A]/10 text-[#1B8C5A] text-sm font-medium mb-4">
              Our Values
            </span>
            <h2 className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-100 font-heading font-bold text-3xl md:text-4xl text-charcoal mb-6">
              What We <span className="text-transparent bg-clip-text gradient-warm">Believe In</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 bg-white rounded-2xl p-6 text-center"
                style={{ transitionDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-full bg-[#E8B84B]/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon size={24} className="text-[#E8B84B]" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-charcoal mb-2">{value.title}</h3>
                <p className="text-deep-olive text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        <WaveDivider color="#FEFBF7" />
      </section>

      {/* Team Connection */}
      <section ref={teamRef} className="relative section-padding bg-[#FEFBF7]">
        <div className="container-padding max-w-4xl mx-auto text-center">
          <span className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 inline-block px-4 py-2 rounded-full bg-[#2B4FA0]/10 text-[#2B4FA0] text-sm font-medium mb-4">
            Local Expertise
          </span>
          <h2 className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-100 font-heading font-bold text-3xl md:text-4xl text-charcoal mb-6">
            Deeply Connected to <span className="text-transparent bg-clip-text gradient-warm">Cilento</span>
          </h2>
          <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-200 space-y-4 text-deep-olive leading-relaxed max-w-2xl mx-auto">
            <p>
              Over the years, I've built relationships with local farmers, artisans, chefs, and families 
              throughout Cilento. These connections allow me to offer experiences that go far beyond typical tourism.
            </p>
            <p>
              When you travel with Felix Dream, you're not just a tourist—you're a guest in our community. 
              You'll meet the people who make Cilento special, taste recipes passed down through generations, 
              and discover places that don't appear in guidebooks.
            </p>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section ref={trustRef} className="relative section-padding bg-[#F5EFE0]">
        <WaveDivider flip color="#F5EFE0" />
        
        <div className="container-padding max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 inline-block px-4 py-2 rounded-full bg-[#E8B84B]/10 text-[#E8B84B] text-sm font-medium mb-4">
              Why Choose Us
            </span>
            <h2 className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-100 font-heading font-bold text-3xl md:text-4xl text-charcoal mb-6">
              Trust <span className="text-transparent bg-clip-text gradient-warm">Signals</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 bg-white rounded-2xl p-8 text-center"
                style={{ transitionDelay: `${(index + 1) * 100}ms` }}
              >
                <p className="font-heading font-bold text-4xl md:text-5xl text-charcoal mb-2">{stat.value}</p>
                <p className="text-deep-olive text-sm">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-500 mt-12 flex flex-wrap items-center justify-center gap-8">
            <div className="flex items-center gap-2">
              <Star size={20} className="text-[#E8B84B] fill-[#E8B84B]" />
              <span className="text-charcoal font-medium">TripAdvisor Excellence</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={20} className="text-[#1B8C5A]" />
              <span className="text-charcoal font-medium">Since 2009</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe size={20} className="text-[#2B4FA0]" />
              <span className="text-charcoal font-medium">Multilingual Team</span>
            </div>
          </div>
        </div>

        <WaveDivider color="#FEFBF7" />
      </section>

      {/* Gallery Section */}
      <section ref={galleryRef} className="relative section-padding bg-[#FEFBF7]">
        <div className="container-padding max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 inline-block px-4 py-2 rounded-full bg-[#D94F3E]/10 text-[#D94F3E] text-sm font-medium mb-4">
              Gallery
            </span>
            <h2 className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-100 font-heading font-bold text-3xl md:text-4xl text-charcoal mb-6">
              Cilento <span className="text-transparent bg-clip-text gradient-warm">Through Our Eyes</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className={`animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 overflow-hidden rounded-2xl ${
                  index === 0 || index === 5 ? 'md:col-span-2 md:row-span-2' : ''
                }`}
                style={{ transitionDelay: `${(index + 1) * 100}ms` }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative section-padding bg-[#F5EFE0]">
        <div className="container-padding max-w-4xl mx-auto text-center">
          <h2 className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 font-heading font-bold text-3xl md:text-4xl text-charcoal mb-6">
            Ready to Experience Cilento?
          </h2>
          <p className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-100 text-deep-olive mb-8 max-w-xl mx-auto">
            Let Teresa create your perfect Cilento adventure. Get in touch today to start planning.
          </p>
          <Link to="/contact" className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-200 btn-primary">
            Start Planning
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
