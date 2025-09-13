import React from 'react';
import { ArrowLeft, Sparkles, Award, Shield, Zap } from 'lucide-react';

interface MaterialShowcaseProps {
  darkMode: boolean;
}

const MaterialShowcase: React.FC<MaterialShowcaseProps> = ({ darkMode }) => {
  const materials = [
    {
      id: 1,
      name: 'رخام إيطالي فاخر',
      englishName: 'Italian Luxury Marble',
      description: 'رخام كارارا الإيطالي الأصلي بجودة استثنائية ولمعان طبيعي يدوم لعقود',
      image: 'https://images.pexels.com/photos/6969799/pexels-photo-6969799.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      features: ['مقاوم للحرارة', 'سهل التنظيف', 'تصاميم متنوعة', 'جودة أوروبية'],
      icon: <Award className="w-6 h-6" />,
    },
    {
      id: 2,
      name: 'سيراميك فاخر',
      englishName: 'Premium Ceramics',
      description: 'سيراميك بورسلين عالي الجودة من أشهر المصانع الأوروبية بتقنيات حديثة',
      image: 'https://images.pexels.com/photos/6969831/pexels-photo-6969831.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      features: ['مقاوم للماء', 'أحجام متعددة', 'ألوان عصرية', 'تركيب سهل'],
      icon: <Sparkles className="w-6 h-6" />,
    },
    {
      id: 3,
      name: 'ترافرتين تركي',
      englishName: 'Turkish Travertine',
      description: 'أحجار ترافرتين طبيعية من أفضل المقالع التركية بملمس فريد وجمال أصيل',
      image: 'https://images.pexels.com/photos/6492400/pexels-photo-6492400.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      features: ['طبيعي 100%', 'مقاوم للعوامل الجوية', 'ملمس مميز', 'عازل حراري'],
      icon: <Shield className="w-6 h-6" />,
    },
    {
      id: 4,
      name: 'أحجار طبيعية',
      englishName: 'Natural Stones',
      description: 'تشكيلة واسعة من الأحجار الطبيعية المختارة بعناية لتناسب جميع الأذواق',
      image: 'https://images.pexels.com/photos/6969718/pexels-photo-6969718.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      features: ['متنوعة الألوان', 'صديقة للبيئة', 'قوة عالية', 'جمال طبيعي'],
      icon: <Zap className="w-6 h-6" />,
    }
  ];

  return (
    <section
      id="products"
      className="py-20 bg-white transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
            <span className="text-black">
              مجموعتنا الفاخرة
            </span>
          </h2>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed text-black opacity-70">
            اكتشف تشكيلتنا المتميزة من أرقى المواد المستوردة من أوروبا وتركيا
          </p>
        </div>

        {/* Materials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {materials.map((material, index) => (
            <div
              key={material.id}
              className={`group relative overflow-hidden rounded-3xl transition-all duration-500 transform hover:scale-[1.02] hover:-translate-y-2 bg-white border border-black`}
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              {/* Image Container */}
              <div className="relative h-80 overflow-hidden">
                <img
                  src={material.image}
                  alt={material.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                
                {/* Floating Icon */}
                <div className="absolute top-6 right-6 bg-black text-white p-3 rounded-full shadow-lg">
                  {material.icon}
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2 text-black">
                  {material.name}
                </h3>
                <p className="text-sm mb-4 text-black opacity-70">
                  {material.englishName}
                </p>
                <p className="text-base leading-relaxed mb-6 text-black opacity-70">
                  {material.description}
                </p>

                {/* Features */}
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {material.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="text-sm px-3 py-2 rounded-lg text-center bg-white border border-black text-black"
                    >
                      {feature}
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <a
                  href="#contact"
                  className="group w-full bg-black text-white px-6 py-4 rounded-2xl font-bold text-lg shadow-lg border border-black hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                >
                  اطلب عينة مجانية
                  <ArrowLeft className="w-5 h-5 mr-3 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="absolute inset-0 rounded-3xl bg-black/5"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button
            onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="inline-flex items-center bg-black text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg border border-black hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105"
          >
            استعرض المجموعة الكاملة
            <ArrowLeft className="w-5 h-5 mr-3" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default MaterialShowcase;