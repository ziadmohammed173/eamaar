import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle, MessageSquare } from 'lucide-react';

interface ContactSectionProps {
  darkMode: boolean;
}

const ContactSection: React.FC<ContactSectionProps> = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    material: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
    setFormData({ name: '', phone: '', email: '', material: '', message: '' });
  };

  const materialOptions = [
    'رخام إيطالي',
    'سيراميك فاخر',
    'ترافرتين تركي',
    'أحجار طبيعية',
    'جميع المواد',
    'أخرى'
  ];

  return (
    <section
      id="contact"
      className="py-20 bg-white transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
            <span className="text-black">
              تواصل معنا
            </span>
          </h2>
          <p className="text-xl max-w-3xl mx-auto text-black opacity-70">
            احصل على استشارة مجانية وعرض سعر مخصص لمشروعك
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1">
            <div className="rounded-2xl p-8 h-fit bg-white shadow-xl border border-black">
              <h3 className="text-2xl font-bold mb-8 text-black">
                معلومات التواصل
              </h3>

              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start space-x-4 space-x-reverse">
                  <div className="bg-black p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-2 text-black">
                      اتصل بنا
                    </h4>
                    <a
                      href="tel:+96566303444"
                      className="text-lg hover:text-black transition-colors text-black/80"
                      dir="ltr"
                    >
                      +965 6630 3444
                    </a>
                    <p className="text-sm mt-1 text-black/60">
                      متاح 24/7
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4 space-x-reverse">
                  <div className="bg-black p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-2 text-black">
                      البريد الإلكتروني
                    </h4>
                    <a
                      href="mailto:contact@emar-demo.com"
                      className="hover:text-black transition-colors text-black/80"
                    >
                      contact@emar-demo.com
                    </a>
                    <p className="text-sm mt-1 text-black/60">
                      نرد خلال ساعة
                    </p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start space-x-4 space-x-reverse">
                  <div className="bg-black p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-2 text-black">
                      المعرض والمكتب
                    </h4>
                    <p className="text-black/80">
                      الكويت - السالمية
                      <br />
                      مجمع المواد الفاخرة
                    </p>
                  </div>
                </div>
              </div>

              {/* WhatsApp Button */}
              <a
                href="https://wa.me/96566303444"
                className="w-full bg-black text-white px-6 py-4 rounded-xl font-bold text-center flex items-center justify-center mt-8 transition-all duration-300 transform hover:bg-white hover:text-black border border-black"
                dir="ltr"
                rel="noopener noreferrer"
              >
                <MessageSquare className="w-5 h-5 ml-3" />
                تحدث معنا عبر واتساب
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="rounded-2xl p-8 bg-white shadow-xl border border-black">
              <h3 className="text-2xl font-bold mb-8 text-black">
                احصل على عرض سعر مجاني
              </h3>

              {isSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-16 h-16 text-black mx-auto mb-4" />
                  <h4 className="text-2xl font-bold mb-4 text-black">
                    تم إرسال طلبك بنجاح!
                  </h4>
                  <p className="text-lg mb-6 text-black/80">
                    سيتواصل معك أحد مختصينا خلال ساعة واحدة
                  </p>
                  <a
                    href="tel:+96566303444"
                    className="inline-flex items-center bg-black text-white px-6 py-3 rounded-full font-bold hover:bg-white hover:text-black border border-black transition-all duration-300"
                  >
                    <Phone className="w-5 h-5 ml-3" />
                    أو اتصل بنا مباشرة: +965 6630 3444
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div>
                      <label className="block text-sm font-medium mb-2 text-black/80">
                        الاسم الكامل *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-black focus:ring-2 focus:ring-black focus:border-transparent transition-colors bg-white text-black placeholder-black/40"
                        placeholder="أدخل اسمك الكامل"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-sm font-medium mb-2 text-black/80">
                        رقم الجوال *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-black focus:ring-2 focus:ring-black focus:border-transparent transition-colors bg-white text-black placeholder-black/40"
                        placeholder="+965 XXXX XXXX"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Email */}
                    <div>
                      <label className="block text-sm font-medium mb-2 text-black/80">
                        البريد الإلكتروني
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-black focus:ring-2 focus:ring-black focus:border-transparent transition-colors bg-white text-black placeholder-black/40"
                        placeholder="your@email.com"
                      />
                    </div>

                    {/* Material Type */}
                    <div>
                      <label className="block text-sm font-medium mb-2 text-black/80">
                        نوع المادة المطلوبة *
                      </label>
                      <select
                        name="material"
                        required
                        value={formData.material}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-black focus:ring-2 focus:ring-black focus:border-transparent transition-colors bg-white text-black"
                      >
                        <option value="">اختر نوع المادة</option>
                        {materialOptions.map((option, index) => (
                          <option key={index} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium mb-2 text-black/80">
                      تفاصيل المشروع
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-black focus:ring-2 focus:ring-black focus:border-transparent transition-colors resize-none bg-white text-black placeholder-black/40"
                      placeholder="أخبرنا عن مشروعك... المساحة، نوع المبنى، التفاصيل المهمة"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-black text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg border border-black hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center"
                  >
                    إرسال طلب العرض
                    <Send className="w-5 h-5 mr-3" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;