import React from 'react';
import { ArrowLeft, Star, Phone } from 'lucide-react';

interface HeroSectionProps {
  darkMode: boolean;
}

const HeroSection: React.FC<HeroSectionProps> = ({ darkMode }) => {
  return (
    <section
      id="home"
      className={`relative min-h-screen flex items-center justify-center overflow-hidden ${
        darkMode ? 'bg-gray-900' : 'bg-gray-50'
      }`}
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/6969799/pexels-photo-6969799.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Luxury Italian Marble Background"
          className="w-full h-full object-cover"
        />
        <div className={`absolute inset-0 ${
          darkMode 
            ? 'bg-gradient-to-r from-gray-900/90 via-blue-900/50 to-cyan-900/60' 
            : 'bg-gradient-to-r from-blue-900/80 via-cyan-900/70 to-blue-800/75'
        }`}></div>
      </div>

      {/* Floating particles animation */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400/30 rounded-full animate-pulse"
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
          <div className="inline-flex items-center bg-cyan-400/20 backdrop-blur-md border border-cyan-400/30 text-cyan-100 px-6 py-2 rounded-full text-sm font-medium mb-8 animate-pulse">
            <Star className="w-4 h-4 ml-2" />
            الرائدون في مواد التشطيب الفاخرة
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-cyan-100 to-blue-100 bg-clip-text text-transparent">
              مواد تشطيب فاخرة
            </span>
            <br />
            <span className="text-cyan-400">لمشاريع استثنائية</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-200 mb-4 font-light">
            رخام إيطالي • سيراميك فاخر • ترافرتين تركي • أحجار طبيعية
          </p>

          <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
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
              className="group bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-8 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-cyan-400/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 flex items-center"
            >
              اطلب استشارة الآن
              <ArrowLeft className="w-5 h-5 mr-3 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-300 to-blue-400 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </button>

            <a
              href="tel:+96566303444"
              className="group bg-white/10 backdrop-blur-md border-2 border-white/20 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all duration-300 transform hover:scale-105 flex items-center"
              dir="ltr"
            >
              <Phone className="w-5 h-5 ml-3" />
              +965 6630 3444
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-white/10">
            {[
              { number: '500+', label: 'مشروع منجز' },
              { number: '15+', label: 'سنة خبرة' },
              { number: '50+', label: 'نوع مختلف من المواد' },
              { number: '98%', label: 'رضا العملاء' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;