import React from 'react';
import { Phone, Mail, Globe, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';

interface FooterProps {
  darkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ darkMode }) => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'الرئيسية', href: '#home' },
    { name: 'منتجاتنا', href: '#products' },
    { name: 'مشاريعنا', href: '#projects' },
    { name: 'خدماتنا', href: '#services' },
    { name: 'تواصل معنا', href: '#contact' }
  ];

  const socialLinks = [
    { icon: <Facebook className="w-6 h-6" />, href: '#', name: 'Facebook' },
    { icon: <Instagram className="w-6 h-6" />, href: '#', name: 'Instagram' },
    { icon: <Youtube className="w-6 h-6" />, href: '#', name: 'YouTube' }
  ];

  return (
    <footer className={`${darkMode ? 'bg-gray-900' : 'bg-gray-900'} text-white`}>
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
                شركة إعمار الكويتية
              </div>
              <div className="text-gray-400 text-sm">
                EMAR KUWAIT COMPANY
              </div>
            </div>
            
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              نحن الرواد في استيراد وتوريد أرقى مواد التشطيب من أوروبا وتركيا. 
              خبرة 15+ سنة في خدمة عملائنا بأعلى معايير الجودة والأناقة.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 space-x-reverse">
                <Phone className="w-5 h-5 text-cyan-400" />
                <a href="tel:+96566303444" className="text-gray-300 hover:text-cyan-400 transition-colors" dir="ltr">
                  +965 6630 3444
                </a>
              </div>
              <div className="flex items-center space-x-3 space-x-reverse">
                <Mail className="w-5 h-5 text-cyan-400" />
                <a href="mailto:contact@emar-demo.com" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  contact@emar-demo.com
                </a>
              </div>
              <div className="flex items-center space-x-3 space-x-reverse">
                <Globe className="w-5 h-5 text-cyan-400" />
                <a href="https://emarkuwait.com" className="text-gray-300 hover:text-cyan-400 transition-colors" dir="ltr">
                  emarkuwait.com
                </a>
              </div>
              <div className="flex items-start space-x-3 space-x-reverse">
                <MapPin className="w-5 h-5 text-cyan-400 mt-1" />
                <div className="text-gray-300">
                  الكويت - السالمية<br />
                  مجمع المواد الفاخرة
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">روابط سريعة</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">خدماتنا</h3>
            <ul className="space-y-3 text-gray-300">
              <li>رخام إيطالي فاخر</li>
              <li>سيراميك أوروبي</li>
              <li>ترافرتين تركي</li>
              <li>أحجار طبيعية</li>
              <li>استشارات التصميم</li>
              <li>التركيب الاحترافي</li>
            </ul>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-4 space-x-reverse mb-4 md:mb-0">
              <span className="text-gray-400">تابعنا على:</span>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 p-2 hover:bg-gray-800 rounded-lg"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/96566303444"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105"
            >
              تحدث معنا عبر واتساب
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-right">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} شركة إعمار الكويتية - جميع الحقوق محفوظة
            </div>
            <div className="text-gray-400 text-sm">
              مصمم بحب في الكويت 🇰🇼
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;