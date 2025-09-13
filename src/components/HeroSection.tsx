import React from 'react';
import { ArrowLeft, Star, Phone } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-black"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/6969799/pexels-photo-6969799.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Luxury Italian Marble Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/70 dark:from-white/90 dark:via-white/60 dark:to-white/70"></div>
      </div>

      {/* Floating particles animation */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-black/20 dark:bg-white/20 rounded-full animate-pulse"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + i}s`
            }}
          ></div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center bg-black/10 dark:bg-white/20 backdrop-blur-md border border-black/30 dark:border-white/30 text-black dark:text-white px-6 py-2 rounded-full text-sm font-medium mb-8 animate-pulse">
            <Star className="w-4 h-4 ml-2" />
            الرائدون في مواد التشطيب الفاخرة
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-bold text-black dark:text-white mb-6 leading-tight">
            <span className="text-black dark:text-white">
              مواد تشطيب فاخرة
            </span>
            <br />
            <span className="text-black dark:text-white">لمشاريع استثنائية</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-black dark:text-white mb-4 font-light opacity-80">
            رخام إيطالي • سيراميك فاخر • ترافرتين تركي • أحجار طبيعية
          </p>

          <p className="text-lg text-black dark:text-white mb-12 max-w-2xl mx-auto leading-relaxed opacity-70">
            نحن نجلب لك أرقى المواد من أوروبا وتركيا لتحويل مساحاتك إلى تحف فنية تدوم لعقود
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="group bg-black text-white dark:bg-white dark:text-black px-8 py-4 rounded-full font-bold text-lg shadow-2xl border border-black dark:border-white hover:bg-white hover:text-black hover:border-black dark:hover:bg-black dark:hover:text-white dark:hover:border-white transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 flex items-center"
            >
              اطلب استشارة الآن
              <ArrowLeft className="w-5 h-5 mr-3 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="tel:+96566303444"
              className="group bg-white border-2 border-black text-black dark:bg-black dark:text-white dark:border-white px-8 py-4 rounded-full font-bold text-lg hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 transform hover:scale-105 flex items-center"
              dir="ltr"
            >
              <Phone className="w-5 h-5 ml-3" />
              +965 6630 3444
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-black/10 dark:border-white/10">
            {[
              { number: '500+', label: 'مشروع منجز' },
              { number: '15+', label: 'سنة خبرة' },
              { number: '50+', label: 'نوع مختلف من المواد' },
              { number: '98%', label: 'رضا العملاء' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-black dark:text-white text-sm md:text-base opacity-80">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-black/30 dark:border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-black dark:bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;