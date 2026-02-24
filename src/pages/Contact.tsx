import { useEffect, useRef, useState } from 'react';
import { Mail, Phone, MapPin, MessageCircle, Send, Check, Clock, Globe } from 'lucide-react';

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

const Contact = () => {
  const heroRef = useScrollAnimation();
  const formRef = useScrollAnimation();
  const faqRef = useScrollAnimation();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const contactInfo = [
    { icon: MessageCircle, label: 'WhatsApp', value: '+39 333 123 4567', action: 'Chat on WhatsApp', href: 'https://wa.me/393331234567' },
    { icon: Mail, label: 'Email', value: 'hello@paestumholidays.com', action: 'Send Email', href: 'mailto:hello@paestumholidays.com' },
    { icon: Phone, label: 'Phone', value: '+39 0828 123456', action: 'Call Teresa', href: 'tel:+390828123456' },
    { icon: MapPin, label: 'Address', value: 'Capaccio Paestum, Cilento, Campania, Italy', action: 'Get Directions', href: '#' },
  ];

  const languages = ['Italiano', 'English', 'Deutsch', 'Español'];

  const faqs = [
    { question: 'How quickly do you respond to enquiries?', answer: 'We aim to respond to all enquiries within 24 hours. For urgent requests, please contact us via WhatsApp.' },
    { question: 'What payment methods do you accept?', answer: 'We accept bank transfers, credit cards, and PayPal. A deposit is required to confirm your booking.' },
    { question: 'What is your cancellation policy?', answer: 'Full refund for cancellations 30+ days before the trip. 50% refund for 15-29 days. Credit for future travel within 14 days.' },
    { question: 'Can I customize my itinerary?', answer: 'Absolutely! All our experiences can be customized to your preferences, timeline, and budget.' },
  ];

  const enquiryTypes = [
    'General Enquiry',
    'Package Booking',
    'Roots Holidays',
    'Day Tours',
    'Transfers',
    'Accommodation',
    'Custom Itinerary',
    'Other',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 3000);
  };

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/images/cilento-sunset.jpg)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
        
        <div className="relative z-10 container-padding max-w-5xl mx-auto text-center pt-24 pb-16 text-white">
          <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 mb-4">
            <span className="inline-block px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium">
              Get in Touch
            </span>
          </div>
          <h1 className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-100 font-heading font-bold text-4xl sm:text-5xl md:text-6xl text-white leading-tight mb-6">
            Contact <span className="text-[#E8B84B]">Teresa</span>
          </h1>
          <p className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-200 text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Ready to plan your Cilento adventure? I'm here to help you create unforgettable memories.
          </p>
        </div>
        
        <WaveDivider color="#FEFBF7" />
      </section>

      {/* Contact Section */}
      <section ref={formRef} className="relative section-padding bg-[#FEFBF7]">
        <div className="container-padding max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left Column - Contact Info */}
            <div>
              <h2 className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 font-heading font-bold text-3xl text-charcoal mb-8">
                Let's Connect
              </h2>

              <div className="space-y-6 mb-10">
                {contactInfo.map((item, index) => (
                  <div
                    key={item.label}
                    className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 flex items-start gap-4"
                    style={{ transitionDelay: `${(index + 1) * 100}ms` }}
                  >
                    <div className="w-12 h-12 rounded-full bg-[#E8B84B]/10 flex items-center justify-center flex-shrink-0">
                      <item.icon size={20} className="text-[#E8B84B]" />
                    </div>
                    <div>
                      <p className="text-sm text-deep-olive">{item.label}</p>
                      <p className="font-medium text-charcoal">{item.value}</p>
                      <a href={item.href} className="text-sm text-[#2A9B9B] hover:text-[#2B4FA0] transition-colors">
                        {item.action} →
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-500 p-6 bg-[#F5EFE0] rounded-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <Clock size={20} className="text-[#1B8C5A]" />
                  <h3 className="font-heading font-semibold text-charcoal">Response Time</h3>
                </div>
                <p className="text-deep-olive text-sm">We respond within 24 hours. For urgent enquiries, WhatsApp is the fastest way to reach Teresa.</p>
              </div>

              <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-600 p-6 bg-[#F5EFE0] rounded-2xl mt-4">
                <div className="flex items-center gap-3 mb-4">
                  <Globe size={20} className="text-[#2B4FA0]" />
                  <h3 className="font-heading font-semibold text-charcoal">Languages</h3>
                </div>
                <p className="text-deep-olive text-sm mb-3">We speak:</p>
                <div className="flex flex-wrap gap-2">
                  {languages.map((lang) => (
                    <span key={lang} className="px-3 py-1 bg-white rounded-full text-sm text-charcoal">
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-300">
              <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl">
                {formSubmitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 rounded-full bg-[#1B8C5A]/10 flex items-center justify-center mx-auto mb-4">
                      <Check size={32} className="text-[#1B8C5A]" />
                    </div>
                    <h3 className="font-heading font-bold text-2xl text-charcoal mb-2">Message Sent!</h3>
                    <p className="text-deep-olive">Thank you for reaching out. Teresa will be in touch soon!</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label className="block font-heading font-medium text-sm text-charcoal mb-2">Your Name *</label>
                      <input type="text" required className="form-input" placeholder="John Doe" />
                    </div>
                    <div>
                      <label className="block font-heading font-medium text-sm text-charcoal mb-2">Email Address *</label>
                      <input type="email" required className="form-input" placeholder="john@example.com" />
                    </div>
                    <div>
                      <label className="block font-heading font-medium text-sm text-charcoal mb-2">Enquiry Type</label>
                      <select className="form-input">
                        {enquiryTypes.map((type) => (
                          <option key={type} value={type.toLowerCase().replace(/\s+/g, '-')}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block font-heading font-medium text-sm text-charcoal mb-2">Your Message *</label>
                      <textarea rows={5} required className="form-input resize-none" placeholder="Tell us about your travel plans..." />
                    </div>
                    <button type="submit" className="btn-primary w-full">
                      <Send size={18} />
                      Send Enquiry
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section ref={faqRef} className="relative section-padding bg-[#F5EFE0]">
        <WaveDivider flip color="#F5EFE0" />
        
        <div className="container-padding max-w-4xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 inline-block px-4 py-2 rounded-full bg-[#D94F3E]/10 text-[#D94F3E] text-sm font-medium mb-4">
              FAQ About Booking
            </span>
            <h2 className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-100 font-heading font-bold text-3xl md:text-4xl text-charcoal mb-6">
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
      </section>
    </div>
  );
};

export default Contact;
