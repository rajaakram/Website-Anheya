import { useState, useEffect, useRef } from 'react';
import { Send, Mail, Phone, MapPin, CheckCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    experience: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { t } = useTranslation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        experience: '',
      });
    }, 3000);
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative section-padding bg-cream overflow-hidden"
    >
      {/* Wave Divider Top */}
      <div className="absolute top-0 left-0 right-0 transform rotate-180">
        <svg
          viewBox="0 0 1200 80"
          preserveAspectRatio="none"
          className="w-full h-16 md:h-20"
        >
          <path
            d="M0,40 Q300,80 600,40 T1200,40 L1200,80 L0,80 Z"
            fill="#F5EFE0"
            opacity="1"
          />
        </svg>
      </div>

      <div className="container-padding max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Side - Info */}
          <div>
            <span className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 inline-block px-4 py-2 rounded-full bg-[#0F8A50]/10 text-[#0F8A50] text-sm font-medium mb-4">
              {t('contact.badge')}
            </span>

            <h2 className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-100 font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-charcoal mb-6">
              {t('contact.titleLine1')}
              <span className="text-transparent bg-clip-text gradient-warm">
                {t('contact.titleLine2')}
              </span>
            </h2>

            <p className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-200 text-deep-olive leading-relaxed mb-8">
              {t('contact.subtitle')}
            </p>

            {/* Contact Info */}
            <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-300 space-y-6 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#C73525]/10 flex items-center justify-center">
                  <Mail size={20} className="text-coral" />
                </div>
                <div>
                  <p className="text-sm text-deep-olive">{t('contact.emailLabel')}</p>
                  <a
                    href="mailto:info@paestumholidays.com"
                    className="font-medium text-charcoal hover:text-coral transition-colors"
                  >
                    info@paestumholidays.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#0F8A50]/10 flex items-center justify-center">
                  <Phone size={20} className="text-emerald" />
                </div>
                <div>
                  <p className="text-sm text-deep-olive">{t('contact.phoneLabel')}</p>
                  <a
                    href="tel:+390123456789"
                    className="font-medium text-charcoal hover:text-emerald transition-colors"
                  >
                    +39 012 345 6789
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#F0C850]/10 flex items-center justify-center">
                  <MapPin size={20} className="text-golden" />
                </div>
                <div>
                  <p className="text-sm text-deep-olive">{t('contact.locationLabel')}</p>
                  <p className="font-medium text-charcoal">
                    {t('contact.locationValue')}
                  </p>
                </div>
              </div>
            </div>

            {/* Hosts */}
            <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-400 flex items-center gap-4 p-6 rounded-2xl bg-white shadow-sm">
              <div className="flex">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#0F8A50] to-[#1A3D9C] flex items-center justify-center border-2 border-white">
                  <span className="text-white font-bold">T</span>
                </div>
              </div>
              <div>
                <p className="font-heading font-semibold text-charcoal">
                  {t('contact.hostsName')}
                </p>
                <p className="text-sm text-deep-olive">
                  {t('contact.hostsRole')}
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-300">
            <div className="relative bg-white rounded-3xl p-8 md:p-10 shadow-xl">
              {/* Floating Decorative Blobs */}
              <div
                className="absolute -top-10 -right-10 w-32 h-32 rounded-full animate-blob pointer-events-none"
                style={{
                  background: 'radial-gradient(circle, rgba(27, 140, 90, 0.1), transparent)',
                }}
              />
              <div
                className="absolute -bottom-8 -left-8 w-24 h-24 rounded-full animate-float-slow pointer-events-none"
                style={{
                  background: 'radial-gradient(circle, rgba(232, 184, 75, 0.1), transparent)',
                }}
              />

              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-[#0F8A50]/10 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle size={32} className="text-emerald" />
                  </div>
                  <h3 className="font-heading font-bold text-2xl text-charcoal mb-2">
                    {t('contact.formSuccessTitle')}
                  </h3>
                  <p className="text-deep-olive">
                    {t('contact.formSuccessMessage')}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="block font-heading font-medium text-sm text-charcoal mb-2"
                      >
                        {t('contact.formName')}
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="form-input"
                        placeholder={t('contact.formNamePlaceholder')}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block font-heading font-medium text-sm text-charcoal mb-2"
                      >
                        {t('contact.formEmail')}
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="form-input"
                        placeholder={t('contact.formEmailPlaceholder')}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block font-heading font-medium text-sm text-charcoal mb-2"
                      >
                        {t('contact.formPhone')}
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="form-input"
                        placeholder={t('contact.formPhonePlaceholder')}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="experience"
                        className="block font-heading font-medium text-sm text-charcoal mb-2"
                      >
                        {t('contact.formExperience')}
                      </label>
                      <select
                        id="experience"
                        name="experience"
                        value={formData.experience}
                        onChange={handleChange}
                        className="form-input"
                      >
                        <option value="">{t('contact.formExperienceDefault')}</option>
                        <option value="roots">{t('contact.formExperienceRoots')}</option>
                        <option value="day-tours">{t('contact.formExperienceTours')}</option>
                        <option value="packages">{t('contact.formExperiencePackages')}</option>
                        <option value="custom">{t('contact.formExperienceCustom')}</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block font-heading font-medium text-sm text-charcoal mb-2"
                    >
                      {t('contact.formMessage')}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="form-input resize-none"
                      placeholder={t('contact.formMessagePlaceholder')}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary w-full group"
                  >
                    {t('contact.formSubmit')}
                    <Send
                      size={18}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </button>

                  <p className="text-xs text-deep-olive text-center">
                    {t('contact.formPrivacy')}
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .animate-visible {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </section>
  );
};

export default Contact;
