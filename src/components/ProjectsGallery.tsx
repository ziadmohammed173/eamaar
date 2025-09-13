import React, { useState } from 'react';
import { X, ExternalLink, Filter } from 'lucide-react';

interface ProjectsGalleryProps {
  darkMode: boolean;
}

const ProjectsGallery: React.FC<ProjectsGalleryProps> = ({ darkMode }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const categories = [
    { id: 'all', name: 'جميع المشاريع' },
    { id: 'residential', name: 'فلل ومنازل' },
    { id: 'commercial', name: 'تجاري ومكاتب' },
    { id: 'hospitality', name: 'فنادق ومطاعم' },
    { id: 'public', name: 'مشاريع عامة' }
  ];

  const projects = [
    {
      id: 1,
      title: 'فيلا خاصة - الجهراء',
      category: 'residential',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'تشطيب فاخر لفيلا بمساحة 800 متر مربع باستخدام الرخام الإيطالي والترافرتين التركي',
      materials: ['رخام كارارا', 'ترافرتين كلاسيك', 'سيراميك بورسلين'],
      year: '2024'
    },
    {
      id: 2,
      title: 'مجمع تجاري - السالمية',
      category: 'commercial',
      image: 'https://images.pexels.com/photos/3182834/pexels-photo-3182834.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'واجهات وأرضيات لمجمع تجاري حديث بمساحة 2000 متر مربع',
      materials: ['أحجار طبيعية', 'سيراميك جرانيت', 'رخام أسود'],
      year: '2023'
    },
    {
      id: 3,
      title: 'فندق بوتيك - المهبولة',
      category: 'hospitality',
      image: 'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'تصميم داخلي فاخر لفندق بوتيك بـ50 غرفة باستخدام مواد طبيعية حصرية',
      materials: ['ترافرتين نوتشي', 'رخام كالاكاتا', 'أحجار جبلية'],
      year: '2023'
    },
    {
      id: 4,
      title: 'مقر شركة - مدينة الكويت',
      category: 'commercial',
      image: 'https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'مقر شركة حديث على مساحة 1500 متر مربع بتصميم معاصر',
      materials: ['سيراميك كبير الحجم', 'رخام رمادي', 'أحجار ملونة'],
      year: '2024'
    },
    {
      id: 5,
      title: 'مسجد الإمام الحسين',
      category: 'public',
      image: 'https://images.pexels.com/photos/2507010/pexels-photo-2507010.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'تشطيب مسجد بمساحة 1000 متر مربع باستخدام أرقى المواد الطبيعية',
      materials: ['رخام أبيض نقي', 'ترافرتين كلاسيك', 'أحجار منحوتة'],
      year: '2023'
    },
    {
      id: 6,
      title: 'منتجع صحراوي',
      category: 'hospitality',
      image: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'منتجع صحراوي فاخر بـ30 جناحاً مع تراسات ومسابح خاصة',
      materials: ['أحجار رملية', 'ترافرتين تومبولد', 'سيراميك أرضي'],
      year: '2024'
    }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section
      id="projects"
      className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} transition-colors duration-300`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              مشاريعنا المنجزة
            </span>
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            استعرض مجموعة من أبرز مشاريعنا المنجزة بنجاح باستخدام أرقى المواد
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-white shadow-lg'
                  : darkMode
                    ? 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-100 shadow-md'
              }`}
            >
              <Filter className="w-4 h-4 ml-2" />
              {category.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group cursor-pointer overflow-hidden rounded-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 ${
                darkMode 
                  ? 'bg-gray-800 shadow-2xl hover:shadow-cyan-400/20' 
                  : 'bg-white shadow-lg hover:shadow-2xl'
              }`}
              style={{
                animationDelay: `${index * 0.1}s`
              }}
              onClick={() => setSelectedProject(project)}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                
                {/* Year Badge */}
                <div className="absolute top-4 right-4 bg-cyan-400 text-black px-3 py-1 rounded-full font-bold text-sm">
                  {project.year}
                </div>

                {/* View Icon */}
                <div className="absolute bottom-4 left-4 bg-white/20 backdrop-blur-md p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <ExternalLink className="w-5 h-5 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className={`text-xl font-bold mb-2 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {project.title}
                </h3>
                <p className={`text-sm leading-relaxed mb-4 ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {project.description}
                </p>

                {/* Materials Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.materials.slice(0, 2).map((material, idx) => (
                    <span
                      key={idx}
                      className={`text-xs px-3 py-1 rounded-full ${
                        darkMode 
                          ? 'bg-gray-700 text-gray-300' 
                          : 'bg-gray-100 text-gray-600'
                      }`}
                    >
                      {material}
                    </span>
                  ))}
                  {project.materials.length > 2 && (
                    <span className="text-xs px-3 py-1 rounded-full bg-cyan-100 text-cyan-700">
                      +{project.materials.length - 2}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <div className={`relative max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-2xl ${
              darkMode ? 'bg-gray-800' : 'bg-white'
            }`}>
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 left-4 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Image */}
              <div className="h-96 overflow-hidden">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className={`text-3xl font-bold ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {selectedProject.title}
                  </h3>
                  <span className="bg-cyan-400 text-black px-3 py-1 rounded-full font-bold">
                    {selectedProject.year}
                  </span>
                </div>

                <p className={`text-lg leading-relaxed mb-6 ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {selectedProject.description}
                </p>

                <div className="mb-6">
                  <h4 className={`text-xl font-bold mb-3 ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    المواد المستخدمة:
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.materials.map((material: string, idx: number) => (
                      <span
                        key={idx}
                        className={`px-4 py-2 rounded-lg ${
                          darkMode 
                            ? 'bg-gray-700 text-gray-300' 
                            : 'bg-gray-100 text-gray-700'
                        }`}
                      >
                        {material}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => setSelectedProject(null)}
                  className="w-full bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-6 py-3 rounded-lg font-bold hover:shadow-lg transition-all duration-300"
                >
                  إغلاق
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsGallery;