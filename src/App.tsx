import React, { useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import MaterialShowcase from './components/MaterialShowcase';
import ProjectsGallery from './components/ProjectsGallery';
import Services from './components/Services';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // تأكد من تطبيق scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';

    // Animation observer (اختياري)
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeInUp');
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll('section');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors duration-300">
      <Header />
      <main>
        <HeroSection />
        <MaterialShowcase />
        <ProjectsGallery />
        <Services />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;