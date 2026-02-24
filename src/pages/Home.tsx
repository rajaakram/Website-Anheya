import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Users, MapPin, Star, Heart, Leaf, Award, Mail, Phone } from 'lucide-react';

// Wave Divider Component
const WaveDivider = ({ flip = false, color = '#FEFBF7' }: { flip?: boolean; color?: string }) => (
  <div className={`w-full overflow-hidden ${flip ? 'transform rotate-180' : ''}`}>
    <svg
      viewBox="0 0 1200 80"
      preserveAspectRatio="none"
      className="w-full h-16 md:h-20 lg:h-24"
    >
      <path
        d="M0,40 Q300,0 600,40 T1200,40 L1200,80 L0,80 Z"
        fill={color}
        opacity="1"
      />
    </svg>
  </div>
);

// Scroll Animation Hook
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

const Home = () => {
  const heroRef = useScrollAnimation();
  const aboutRef = useScrollAnimation();
  const experiencesRef = useScrollAnimation();
  const rootsRef = useScrollAnimation();
  const testimonialsRef = useScrollAnimation();
  const galleryRef = useScrollAnimation();
  const contactRef = useScrollAnimation();
  const faqRef = useScrollAnimation();

  const experiences = [
    {
      title: 'Med(eat)erranean',
      description: 'Indulge in the authentic flavors of Cilento. From buffalo mozzarella farms to family cooking classes.',
      image: '/images/pasta-making.jpg',
      duration: '5 days',
      price: 'From €1,200',
    },
    {
      title: 'Sailing South',
      description: 'Explore the stunning Amalfi Coast and hidden coves of Cilento by boat.',
      image: '/images/sailing-turquoise.jpeg',
      duration: '7 days',
      price: 'From €1,800',
    },
    {
      title: 'Nature & Adventure',
      description: 'Hike through Cilento National Park, explore ancient trails, and connect with nature.',
      image: '/images/cilento-panoramic.jpg',
      duration: '4 days',
      price: 'From €900',
    },
    {
      title: 'Culture & History',
      description: 'Discover Greek temples, Roman ruins, and the rich heritage of Campania.',
      image: '/images/paestum-temples.jpg',
      duration: '6 days',
      price: 'From €1,500',
    },
  ];

  const testimonials = [
    {
      quote: "Finding my grandmother's village with Teresa was the most emotional experience of my life. The attention to detail and personal connection made all the difference.",
      author: 'Sarah Mitchell',
      location: 'Boston, USA',
      rating: 5,
    },
    {
      quote: "The cooking class in a traditional farmhouse exceeded all expectations. Learning to make authentic pasta from a local nonna who has been doing it for 60 years was magical.",
      author: 'Maria Schmidt',
      location: 'Munich, Germany',
      rating: 5,
    },
    {
      quote: "Our honeymoon in Cilento was perfection. Every detail was thoughtfully arranged. We fell in love with Italy all over again.",
      author: 'James & Emma Wilson',
      location: 'London, UK',
      rating: 5,
    },
  ];

  const galleryImages = [
    { src: '/images/paestum-temples.jpg', alt: 'Paestum Greek Temples' },
    { src: '/images/amalfi-coast.jpg', alt: 'Amalfi Coast' },
    { src: '/images/castellabate-village.jpg', alt: 'Castellabate Village' },
    { src: '/images/marina-camerota.jpg', alt: 'Marina di Camerota' },
    { src: '/images/ravello-gardens.jpg', alt: 'Ravello Gardens' },
    { src: '/images/pompeii-vesuvius.jpg', alt: 'Pompeii with Vesuvius' },
  ];

  const faqs = [
    {
      question: 'What is included in your travel packages?',
      answer: 'Our packages typically include accommodation, guided tours, transportation within Cilento, meals as specified in the itinerary, and all entrance fees to attractions. We also provide 24/7 support during your stay.',
    },
    {
      question: 'How do I book a Roots Holiday to find my ancestral town?',
      answer: 'Start by contacting us with any information you have about your Italian ancestors. We will conduct preliminary research and create a personalized itinerary. Teresa has extensive experience with genealogical records and local archives.',
    },
    {
      question: 'What is the best time to visit Cilento?',
      answer: 'Cilento is beautiful year-round! Spring offers mild weather and blooming wildflowers. Summer is perfect for beach activities and festivals. Fall is ideal for wine harvests and fewer crowds.',
    },
    {
      question: 'Do you offer private tours for small groups?',
      answer: 'Absolutely! Most of our experiences are designed for small groups of 2-8 people to ensure personalization. We can also arrange completely private tours for couples, families, or friend groups.',
    },
  ];

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/images/agnone-cilento.jpg)' }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50" />
        
        {/* Content */}
        <div className="relative z-10 container-padding max-w-5xl mx-auto text-center pt-24 pb-32 text-white">
          <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 mb-6">
            <span className="inline-block px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium">
              Felix Dream by Paestum Holidays
            </span>
          </div>

          <h1 className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-100 font-heading font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-6">
            Discover the Soul of
            <span className="block text-[#E8B84B]">Cilento</span>
          </h1>

          <p className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-200 text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed">
            Boutique travel experiences crafted with passion by Teresa. 
            Immerse yourself in authentic Italian culture, heritage, and natural beauty.
          </p>

          <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-300 flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link to="/experiences" className="btn-primary group">
              Explore Experiences
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-white text-white font-medium transition-all duration-200 hover:bg-white/10">
              Get in Touch
            </Link>
          </div>

          <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-400 flex flex-wrap items-center justify-center gap-8 md:gap-12">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <Calendar size={20} className="text-[#E8B84B]" />
              </div>
              <div className="text-left">
                <p className="font-heading font-bold text-2xl text-white">15+</p>
                <p className="text-sm text-white/70">Years Experience</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <Users size={20} className="text-[#1B8C5A]" />
              </div>
              <div className="text-left">
                <p className="font-heading font-bold text-2xl text-white">5000+</p>
                <p className="text-sm text-white/70">Happy Travelers</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <MapPin size={20} className="text-[#E8B84B]" />
              </div>
              <div className="text-left">
                <p className="font-heading font-bold text-2xl text-white">50+</p>
                <p className="text-sm text-white/70">Unique Experiences</p>
              </div>
            </div>
          </div>
        </div>

        <WaveDivider color="#FEFBF7" />
      </section>

      {/* About Section - Chi Siamo */}
      <section ref={aboutRef} className="relative section-padding bg-[#FEFBF7]">
        <div className="container-padding max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image Side */}
            <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 relative">
              <div className="relative">
                <div className="blob-mask overflow-hidden">
                  <img
                    src="/images/cilento-sunset.jpg"
                    alt="Cilento sunset"
                    className="w-full h-[400px] md:h-[500px] object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 md:bottom-8 md:-right-8 bg-white rounded-2xl p-6 shadow-xl max-w-[200px]">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-full gradient-warm flex items-center justify-center">
                      <Heart size={20} className="text-white" />
                    </div>
                    <div>
                      <p className="font-heading font-bold text-2xl text-charcoal">15+</p>
                      <p className="text-xs text-deep-olive">Years of Love</p>
                    </div>
                  </div>
                  <p className="text-sm text-deep-olive italic">
                    "Sharing our home with the world"
                  </p>
                </div>
              </div>
              <div className="absolute -top-8 -left-8 w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white shadow-lg hidden lg:block">
                <img src="/images/olive-grove.jpg" alt="Olive grove" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Content Side */}
            <div>
              <span className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 inline-block px-4 py-2 rounded-full bg-[#1B8C5A]/10 text-[#1B8C5A] text-sm font-medium mb-4">
                About Us
              </span>

              <h2 className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-100 font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-charcoal mb-6">
                Meet <span className="text-transparent bg-clip-text gradient-warm">Teresa</span>
              </h2>

              <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-200 space-y-4 text-deep-olive leading-relaxed mb-8">
                <p>
                  Born and raised in the heart of Cilento, I have spent my life exploring 
                  every corner of this magical land. From the ancient Greek temples of 
                  Paestum to the hidden coves along the Mediterranean coast, I know 
                  Cilento like the back of my hand.
                </p>
                <p>
                  What started as sharing my favorite local spots with friends has grown 
                  into a passion for creating unforgettable travel experiences. I believe 
                  that travel should be more than sightseeing—it should be about connection, 
                  culture, and creating memories that last a lifetime.
                </p>
              </div>

              <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-300 grid grid-cols-2 gap-4">
                {[
                  { icon: Heart, title: 'Passionate Host', color: 'coral' },
                  { icon: Leaf, title: 'Sustainable Travel', color: 'emerald' },
                  { icon: Users, title: 'Small Groups', color: 'golden' },
                  { icon: Award, title: 'Local Expertise', color: 'royal' },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3 p-4 rounded-xl bg-[#F5EFE0]">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 bg-${item.color === 'coral' ? '[#D94F3E]/10' : item.color === 'emerald' ? '[#1B8C5A]/10' : item.color === 'golden' ? '[#E8B84B]/10' : '[#2B4FA0]/10'}`}>
                      <item.icon size={18} className={`text-${item.color}`} />
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold text-sm text-charcoal">{item.title}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experiences Section */}
      <section ref={experiencesRef} className="relative section-padding bg-[#F5EFE0]">
        <WaveDivider flip color="#F5EFE0" />
        
        <div className="container-padding max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 inline-block px-4 py-2 rounded-full bg-[#E8B84B]/10 text-[#D94F3E] text-sm font-medium mb-4">
              Our Experiences
            </span>
            <h2 className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-100 font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-charcoal mb-6">
              Crafted with Passion, <span className="text-transparent bg-clip-text gradient-warm">Designed for You</span>
            </h2>
            <p className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-200 text-deep-olive text-lg leading-relaxed">
              From culinary journeys to cultural adventures, each experience is thoughtfully 
              curated to immerse you in the authentic beauty of Cilento.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {experiences.map((exp, index) => (
              <div
                key={exp.title}
                className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 group"
                style={{ transitionDelay: `${(index + 3) * 100}ms` }}
              >
                <div className="card-organic h-full flex flex-col">
                  <div className="relative h-48 -mx-8 -mt-8 mb-6 overflow-hidden">
                    <img
                      src={exp.image}
                      alt={exp.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      style={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 85%, 85% 100%, 15% 100%, 0% 85%)' }}
                    />
                  </div>
                  <div className="flex-1 flex flex-col">
                    <div className="flex items-center gap-4 text-sm text-deep-olive mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar size={14} className="text-coral" />
                        {exp.duration}
                      </span>
                    </div>
                    <h3 className="font-heading font-semibold text-xl text-charcoal mb-3">{exp.title}</h3>
                    <p className="text-deep-olive text-sm leading-relaxed mb-4 flex-1">{exp.description}</p>
                    <div className="flex items-center justify-between pt-4 border-t border-[#D8D5D0]/50">
                      <span className="font-heading font-bold text-lg text-charcoal">{exp.price}</span>
                      <Link to="/experiences" className="inline-flex items-center gap-2 text-[#2A9B9B] font-medium text-sm hover:text-[#2B4FA0] transition-colors">
                        Learn More <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-700 text-center mt-12">
            <Link to="/experiences" className="btn-secondary">
              View All Experiences
            </Link>
          </div>
        </div>

        <WaveDivider color="#FEFBF7" />
      </section>

      {/* Roots Holidays Section */}
      <section ref={rootsRef} className="relative section-padding bg-[#FEFBF7]">
        <div className="container-padding max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1">
              <span className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 inline-block px-4 py-2 rounded-full bg-[#D94F3E]/10 text-[#D94F3E] text-sm font-medium mb-4">
                Roots Holidays
              </span>
              <h2 className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-100 font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-charcoal mb-6">
                Discover Your <span className="text-transparent bg-clip-text gradient-warm">Italian Heritage</span>
              </h2>
              <p className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-200 text-deep-olive leading-relaxed mb-6">
                Reconnect with your ancestral roots through our specialized heritage journeys. 
                We help you trace your family history, visit your ancestral villages, and 
                experience the authentic culture of your forebears.
              </p>
              <ul className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-300 space-y-3 mb-8">
                {[
                  'Professional genealogy research',
                  'Ancestral village visits',
                  'Family document retrieval',
                  'Cultural immersion experiences',
                  'Professional photography sessions',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-deep-olive">
                    <div className="w-5 h-5 rounded-full bg-[#1B8C5A]/10 flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-[#1B8C5A]" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/roots-holidays" className="btn-primary group">
                Explore Roots Holidays
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
            <div className="order-1 lg:order-2 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
              <div className="blob-mask-organic overflow-hidden">
                <img
                  src="/images/italian-dinner.jpg"
                  alt="Italian family heritage"
                  className="w-full h-[400px] md:h-[500px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section ref={testimonialsRef} className="relative section-padding bg-[#F5EFE0]">
        <WaveDivider flip color="#F5EFE0" />
        
        <div className="container-padding max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 inline-block px-4 py-2 rounded-full bg-[#2B4FA0]/10 text-[#2B4FA0] text-sm font-medium mb-4">
              Testimonials
            </span>
            <h2 className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-100 font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-charcoal mb-6">
              Stories from Our <span className="text-transparent bg-clip-text gradient-warm">Travelers</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 bg-white rounded-3xl p-8 shadow-lg"
                style={{ transitionDelay: `${(index + 2) * 100}ms` }}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-[#E8B84B] fill-[#E8B84B]" />
                  ))}
                </div>
                <blockquote className="text-charcoal leading-relaxed mb-6 font-accent italic">
                  "{testimonial.quote}"
                </blockquote>
                <div className="pt-4 border-t border-[#D8D5D0]/50">
                  <p className="font-heading font-semibold text-charcoal">{testimonial.author}</p>
                  <p className="text-sm text-deep-olive">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <WaveDivider color="#FEFBF7" />
      </section>

      {/* Gallery Section */}
      <section ref={galleryRef} className="relative section-padding bg-[#FEFBF7]">
        <div className="container-padding max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 inline-block px-4 py-2 rounded-full bg-[#1B8C5A]/10 text-[#1B8C5A] text-sm font-medium mb-4">
              Gallery
            </span>
            <h2 className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-100 font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-charcoal mb-6">
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

      {/* Contact Section */}
      <section ref={contactRef} className="relative section-padding bg-[#F5EFE0]">
        <WaveDivider flip color="#F5EFE0" />
        
        <div className="container-padding max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <span className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 inline-block px-4 py-2 rounded-full bg-[#1B8C5A]/10 text-[#1B8C5A] text-sm font-medium mb-4">
                Get in Touch
              </span>
              <h2 className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-100 font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-charcoal mb-6">
                Let's Plan Your <span className="text-transparent bg-clip-text gradient-warm">Dream Trip</span>
              </h2>
              <p className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-200 text-deep-olive leading-relaxed mb-8">
                Whether you're ready to book or just exploring options, I'd love to hear 
                from you. Fill out the form and I'll get back to you within 24 hours.
              </p>

              <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-300 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#D94F3E]/10 flex items-center justify-center">
                    <Mail size={20} className="text-coral" />
                  </div>
                  <div>
                    <p className="text-sm text-deep-olive">Email us at</p>
                    <a href="mailto:info@paestumholidays.com" className="font-medium text-charcoal hover:text-coral transition-colors">
                      info@paestumholidays.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#1B8C5A]/10 flex items-center justify-center">
                    <Phone size={20} className="text-emerald" />
                  </div>
                  <div>
                    <p className="text-sm text-deep-olive">Call us at</p>
                    <a href="tel:+390123456789" className="font-medium text-charcoal hover:text-emerald transition-colors">
                      +39 012 345 6789
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#E8B84B]/10 flex items-center justify-center">
                    <MapPin size={20} className="text-golden" />
                  </div>
                  <div>
                    <p className="text-sm text-deep-olive">Visit us in</p>
                    <p className="font-medium text-charcoal">Capaccio Paestum, Cilento, Italy</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-300">
              <div className="relative bg-white rounded-3xl p-8 md:p-10 shadow-xl">
                <form className="space-y-5 relative z-10">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block font-heading font-medium text-sm text-charcoal mb-2">Your Name</label>
                      <input type="text" className="form-input" placeholder="John Doe" />
                    </div>
                    <div>
                      <label className="block font-heading font-medium text-sm text-charcoal mb-2">Email Address</label>
                      <input type="email" className="form-input" placeholder="john@example.com" />
                    </div>
                  </div>
                  <div>
                    <label className="block font-heading font-medium text-sm text-charcoal mb-2">Interested In</label>
                    <select className="form-input">
                      <option value="">Select an option</option>
                      <option value="roots">Roots Holidays</option>
                      <option value="day-tours">Day Tours</option>
                      <option value="packages">Vacation Packages</option>
                      <option value="custom">Custom Experience</option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-heading font-medium text-sm text-charcoal mb-2">Your Message</label>
                    <textarea rows={4} className="form-input resize-none" placeholder="Tell us about your dream trip..." />
                  </div>
                  <Link to="/contact" className="btn-primary w-full text-center block">
                    Send Message
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" ref={faqRef} className="relative section-padding bg-[#FEFBF7]">
        <div className="container-padding max-w-4xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 inline-block px-4 py-2 rounded-full bg-[#D94F3E]/10 text-[#D94F3E] text-sm font-medium mb-4">
              FAQ
            </span>
            <h2 className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-100 font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-charcoal mb-6">
              Frequently Asked <span className="text-transparent bg-clip-text gradient-warm">Questions</span>
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
      </section>
    </div>
  );
};

export default Home;
