import React from 'react';
import { 
  Compass, 
  Truck, 
  Hammer, 
  Shield, 
  Award, 
  Clock,
  Users,
  Globe
} from 'lucide-react';

interface ServicesProps {
  darkMode: boolean;
}

const Services: React.FC<ServicesProps> = ({ darkMode }) => {
  const services = [
    {
      icon: <Compass className="w-8 h-8" />,
      title: 'استشارات التصميم',
      description: 'فريق من المصممين المعتمدين لتقديم أفضل الحلول التصميمية لمساحتك',
      features: ['تصميم ثلاثي الأبعاد', 'خطط مفصلة', 'اقتراحات مبتكرة']
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: 'التوريد والشحن',
      description: 'شبكة توريد عالمية مع ضمان وصول المواد في أفضل حالة وأسرع وقت',
      features: ['شحن آمن', 'تغليف احترافي', 'تتبع الشحنات']
    },
    {
      icon: <Hammer className="w-8 h-8" />,
      title: 'التركيب الاحترافي',
      description: 'فرق تركيب مدربة ومعتمدة لضمان تنفيذ مثالي يليق بجودة المواد',
      features: ['عمالة مختصة', 'أدوات حديثة', 'تشطيب دقيق']
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'ضمان الجودة',
      description: 'ضمان شامل على جميع المواد والخدمات مع خدمة ما بعد البيع المتميزة',
      features: ['ضمان 5 سنوات', 'صيانة دورية', 'دعم فني']
    }
  ];

  const whyChooseUs = [
    {
      icon: <Award className="w-12 h-12" />,
      title: 'جودة أوروبية',
      description: 'نستورد مباشرة من أشهر المصانع الأوروبية والتركية'
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: 'فريق محترف',
      description: '15+ سنة خبرة في مجال التشطيبات الفاخرة'
    },
    {
      icon: <Clock className="w-12 h-12" />,
      title: 'التزام بالمواعيد',
      description: 'نحن ملتزمون بتسليم مشاريعنا في الوقت المحدد'
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: 'خدمة شاملة',
      description: 'من الاستشارة إلى التسليم النهائي'
    }
  ];

  return (
    <section
      id="services"
      className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-white'} transition-colors duration-300`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Services Section */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              خدماتنا المتميزة
            </span>
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            نقدم خدمة متكاملة من التصميم إلى التنفيذ بأعلى معايير الجودة
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group p-8 rounded-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 ${
                darkMode 
                  ? 'bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 hover:border-cyan-400/50' 
                  : 'bg-gray-50 hover:bg-white hover:shadow-xl border border-gray-100'
              }`}
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              {/* Icon */}
              <div className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white p-4 rounded-2xl mb-6 inline-flex group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className={`text-xl font-bold mb-4 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                {service.title}
              </h3>

              {/* Description */}
              <p className={`text-sm leading-relaxed mb-6 ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className={`text-sm flex items-center ${
                      darkMode ? 'text-gray-400' : 'text-gray-500'
                    }`}
                  >
                    <div className="w-2 h-2 bg-cyan-400 rounded-full ml-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Why Choose Us Section */}
        <div className={`rounded-3xl p-12 ${
          darkMode 
            ? 'bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700' 
            : 'bg-gradient-to-br from-gray-50 to-white shadow-2xl'
        }`}>
          <div className="text-center mb-12">
            <h3 className={`text-3xl md:text-4xl font-bold mb-6 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              لماذا تختار
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mr-3">
                إعمار الكويتية؟
              </span>
            </h3>
            <p className={`text-lg ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              نحن الخيار الأمثل للباحثين عن التميز والجودة
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className={`text-center p-6 rounded-2xl transition-all duration-300 hover:transform hover:scale-105 ${
                  darkMode 
                    ? 'bg-gray-800/50 hover:bg-gray-700/50' 
                    : 'bg-white/50 hover:bg-white hover:shadow-lg'
                }`}
              >
                <div className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white p-4 rounded-2xl mb-4 inline-flex">
                  {item.icon}
                </div>
                <h4 className={`text-lg font-bold mb-3 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {item.title}
                </h4>
                <p className={`text-sm ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <button
            onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="inline-flex items-center bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-cyan-400/25 transition-all duration-300 transform hover:scale-105"
          >
            احصل على استشارة مجانية الآن
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;