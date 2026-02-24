import { useEffect, useRef, useState } from 'react';
import { Search, MapPin, FileText, Users, Camera, Home, Check, Send } from 'lucide-react';

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

const RootsHolidays = () => {
  const heroRef = useScrollAnimation();
  const servicesRef = useScrollAnimation();
  const itineraryRef = useScrollAnimation();
  const profilesRef = useScrollAnimation();
  const faqRef = useScrollAnimation();
  const formRef = useScrollAnimation();

  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const services = [
    { icon: Search, title: 'Genealogy Research', description: 'Professional research to trace your family lineage using local archives and records.' },
    { icon: MapPin, title: 'Ancestral Village Visits', description: 'Personalized visits to your family\'s hometown with local guides who know the area intimately.' },
    { icon: Users, title: 'Family Connections', description: 'We help you connect with distant relatives and discover living family members in Italy.' },
    { icon: FileText, title: 'Document Retrieval', description: 'Access to birth, marriage, and death certificates from Italian civil records.' },
    { icon: Home, title: 'Cultural Immersion', description: 'Experience authentic local life through home stays and community events.' },
    { icon: Camera, title: 'Photography Sessions', description: 'Professional documentation of your heritage journey for lasting memories.' },
  ];

  const itinerary = [
    { day: 1, title: 'Arrival & Welcome', description: 'Arrive in Naples, transfer to your accommodation in Cilento. Welcome dinner with Teresa.' },
    { day: 2, title: 'Genealogy Briefing', description: 'Review your family research findings and plan your ancestral village visits.' },
    { day: 3, title: 'Ancestral Village Visit', description: 'Visit your family\'s hometown, explore the streets your ancestors walked.' },
    { day: 4, title: 'Document Discovery', description: 'Visit local archives to see original family records and documents.' },
    { day: 5, title: 'Family Connections', description: 'Meet with local residents, potentially connect with distant relatives.' },
    { day: 6, title: 'Cultural Immersion', description: 'Experience traditional Cilento life through cooking, crafts, and local activities.' },
    { day: 7, title: 'Farewell & Departure', description: 'Final breakfast, photo session, and departure with memories to last a lifetime.' },
  ];

  const profiles = [
    { origin: 'American-Italian', description: 'Reconnect with roots from New York, Boston, or Philadelphia.' },
    { origin: 'Argentine-Italian', description: 'Trace ancestors who emigrated from Southern Italy to Argentina.' },
    { origin: 'Colombian-Italian', description: 'Discover family connections between Colombia and Campania.' },
    { origin: 'German Connection', description: 'Explore Italian heritage in German-speaking regions.' },
  ];

  const faqs = [
    { question: 'How does genealogy research work?', answer: 'We start with any information you provide about your ancestors, then search local Italian archives, church records, and civil registrations to build your family tree.' },
    { question: 'What documents can you find?', answer: 'We can locate birth, marriage, and death certificates, census records, military records, and immigration documents from Italian archives.' },
    { question: 'How long does the process take?', answer: 'Initial research typically takes 4-8 weeks. The full Roots Holiday experience is a 7-day journey in Italy.' },
    { question: 'Can you visit my ancestral village?', answer: 'Yes! We arrange personalized visits to your family\'s hometown with local guides who can show you the exact places your ancestors lived.' },
    { question: 'What if my family name is common?', answer: 'We use multiple data points including birth dates, locations, and family connections to accurately identify your specific lineage.' },
    { question: 'What\'s included in the package?', answer: 'The package includes genealogy research, 7-day accommodation, guided village visits, document retrieval, and cultural experiences.' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 3000);
  };

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/images/castellabate-village.jpg)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
        
        <div className="relative z-10 container-padding max-w-5xl mx-auto text-center pt-24 pb-16 text-white">
          <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 mb-4">
            <span className="inline-block px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium">
              Heritage Journeys
            </span>
          </div>
          <h1 className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-100 font-heading font-bold text-4xl sm:text-5xl md:text-6xl text-white leading-tight mb-6">
            Discover Your <span className="text-[#E8B84B]">Heritage</span>
          </h1>
          <p className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-200 text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Reconnect with your Italian roots through personalized genealogy research and ancestral village visits in the heart of Cilento.
          </p>
        </div>
        
        <WaveDivider color="#FEFBF7" />
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="relative section-padding bg-[#FEFBF7]">
        <div className="container-padding max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 inline-block px-4 py-2 rounded-full bg-[#D94F3E]/10 text-[#D94F3E] text-sm font-medium mb-4">
              Our Services
            </span>
            <h2 className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-100 font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-charcoal mb-6">
              How We Help You <span className="text-transparent bg-clip-text gradient-warm">Reconnect</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow"
                style={{ transitionDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-full bg-[#E8B84B]/10 flex items-center justify-center mb-4">
                  <service.icon size={24} className="text-[#E8B84B]" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-charcoal mb-2">{service.title}</h3>
                <p className="text-deep-olive text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Itinerary Section */}
      <section ref={itineraryRef} className="relative section-padding bg-[#F5EFE0]">
        <WaveDivider flip color="#F5EFE0" />
        
        <div className="container-padding max-w-4xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 inline-block px-4 py-2 rounded-full bg-[#1B8C5A]/10 text-[#1B8C5A] text-sm font-medium mb-4">
              Sample Itinerary
            </span>
            <h2 className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-100 font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-charcoal mb-6">
              Your 7-Day <span className="text-transparent bg-clip-text gradient-warm">Heritage Journey</span>
            </h2>
          </div>

          <div className="space-y-6">
            {itinerary.map((day, index) => (
              <div
                key={day.day}
                className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 flex gap-4"
                style={{ transitionDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full gradient-warm flex items-center justify-center">
                  <span className="text-white font-bold">{day.day}</span>
                </div>
                <div className="flex-1 pb-6 border-l-2 border-[#E8B84B]/30 pl-6">
                  <h3 className="font-heading font-semibold text-lg text-charcoal mb-1">{day.title}</h3>
                  <p className="text-deep-olive text-sm">{day.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <WaveDivider color="#FEFBF7" />
      </section>

      {/* Traveler Profiles */}
      <section ref={profilesRef} className="relative section-padding bg-[#FEFBF7]">
        <div className="container-padding max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 inline-block px-4 py-2 rounded-full bg-[#2B4FA0]/10 text-[#2B4FA0] text-sm font-medium mb-4">
              Who We Serve
            </span>
            <h2 className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-100 font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-charcoal mb-6">
              Traveler <span className="text-transparent bg-clip-text gradient-warm">Profiles</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {profiles.map((profile, index) => (
              <div
                key={profile.origin}
                className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 bg-white rounded-2xl p-6 text-center shadow-sm"
                style={{ transitionDelay: `${(index + 1) * 100}ms` }}
              >
                <h3 className="font-heading font-semibold text-lg text-charcoal mb-2">{profile.origin}</h3>
                <p className="text-deep-olive text-sm">{profile.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section ref={faqRef} className="relative section-padding bg-[#F5EFE0]">
        <WaveDivider flip color="#F5EFE0" />
        
        <div className="container-padding max-w-4xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 inline-block px-4 py-2 rounded-full bg-[#D94F3E]/10 text-[#D94F3E] text-sm font-medium mb-4">
              FAQ
            </span>
            <h2 className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-100 font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-charcoal mb-6">
              Common <span className="text-transparent bg-clip-text gradient-warm">Questions</span>
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 bg-white rounded-2xl overflow-hidden shadow-sm"
                style={{ transitionDelay: `${(index + 1) * 100}ms` }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left"
                >
                  <span className="font-heading font-semibold text-charcoal pr-4">{faq.question}</span>
                  <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                    openFaq === index ? 'bg-[#E8B84B] text-white' : 'bg-[#E8B84B]/10 text-[#E8B84B]'
                  }`}>
                    {openFaq === index ? '−' : '+'}
                  </span>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openFaq === index ? 'max-h-96' : 'max-h-0'}`}>
                  <div className="px-6 pb-5 pt-0">
                    <p className="text-deep-olive leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <WaveDivider color="#FEFBF7" />
      </section>

      {/* Lead Capture Form */}
      <section ref={formRef} className="relative section-padding bg-[#FEFBF7]">
        <div className="container-padding max-w-4xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 inline-block px-4 py-2 rounded-full bg-[#1B8C5A]/10 text-[#1B8C5A] text-sm font-medium mb-4">
              Start Your Journey
            </span>
            <h2 className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-100 font-heading font-bold text-3xl md:text-4xl text-charcoal mb-6">
              Begin Your <span className="text-transparent bg-clip-text gradient-warm">Heritage Search</span>
            </h2>
            <p className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-200 text-deep-olive">
              Fill out the form below and Teresa will contact you within 24 hours to discuss your heritage journey.
            </p>
          </div>

          <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-300 bg-white rounded-3xl p-8 md:p-10 shadow-xl">
            {formSubmitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-[#1B8C5A]/10 flex items-center justify-center mx-auto mb-4">
                  <Check size={32} className="text-[#1B8C5A]" />
                </div>
                <h3 className="font-heading font-bold text-2xl text-charcoal mb-2">Thank You!</h3>
                <p className="text-deep-olive">Teresa will be in touch within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-heading font-medium text-sm text-charcoal mb-2">Your Name</label>
                    <input type="text" required className="form-input" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block font-heading font-medium text-sm text-charcoal mb-2">Email Address</label>
                    <input type="email" required className="form-input" placeholder="john@example.com" />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-heading font-medium text-sm text-charcoal mb-2">Country</label>
                    <input type="text" className="form-input" placeholder="United States" />
                  </div>
                  <div>
                    <label className="block font-heading font-medium text-sm text-charcoal mb-2">Family Surname</label>
                    <input type="text" className="form-input" placeholder="Rossi, Esposito, etc." />
                  </div>
                </div>
                <div>
                  <label className="block font-heading font-medium text-sm text-charcoal mb-2">Known Ancestral Village (if any)</label>
                  <input type="text" className="form-input" placeholder="e.g., Castellabate, Agropoli" />
                </div>
                <div>
                  <label className="block font-heading font-medium text-sm text-charcoal mb-2">Trip Timeline Preferences</label>
                  <select className="form-input">
                    <option value="">Select timeframe</option>
                    <option value="3-6months">3-6 months</option>
                    <option value="6-12months">6-12 months</option>
                    <option value="1year+">1+ years</option>
                    <option value="flexible">Flexible</option>
                  </select>
                </div>
                <button type="submit" className="btn-primary w-full">
                  <Send size={18} />
                  Submit Enquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default RootsHolidays;
