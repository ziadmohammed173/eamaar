import React from 'react';
import { Menu, Moon, Sun, X } from 'lucide-react';

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  // dark mode controlled via html class 'dark'
  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark');
    // Optional: persist in localStorage
    if (document.documentElement.classList.contains('dark')) {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
  };

  const navItems = [
    { name: 'الرئيسية', href: '#home' },
    { name: 'منتجاتنا', href: '#products' },
    { name: 'مشاريعنا', href: '#projects' },
    { name: 'خدماتنا', href: '#services' },
    { name: 'تواصل معنا', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 w-full z-50 transition-all duration-300 bg-white dark:bg-black border-b border-black dark:border-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold text-black dark:text-white">
              إعمار الكويتية
            </div>
            <div className="ml-2 text-sm text-black dark:text-white opacity-70">
              EMAR KUWAIT
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 space-x-reverse">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`
                  font-medium transition-colors duration-200
                  text-black dark:text-white hover:text-white hover:bg-black dark:hover:text-black dark:hover:bg-white px-2 py-1 rounded
                `}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            {/* Dark mode toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full transition-all duration-200 bg-white dark:bg-black text-black dark:text-white border border-black dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
              aria-label="تبديل الوضع الليلي"
            >
              <Sun size={20} className="hidden dark:inline" />
              <Moon size={20} className="inline dark:hidden" />
            </button>

            {/* Call button */}
            <a
              href="tel:+96566303444"
              className="hidden sm:inline-flex bg-black text-white dark:bg-white dark:text-black px-6 py-2 rounded-full font-medium border border-black dark:border-white hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white transition-all duration-300 transform hover:scale-105"
              dir="ltr"
            >
              اتصل بنا
            </a>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-md text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 bg-white dark:bg-black border-t border-black dark:border-white">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-4 py-3 font-medium text-black dark:text-white hover:text-white hover:bg-black dark:hover:text-black dark:hover:bg-white rounded transition-colors duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <a
              href="tel:+96566303444"
              className="block mx-4 mt-4 bg-black text-white dark:bg-white dark:text-black text-center px-6 py-3 rounded-full font-medium border border-black dark:border-white hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white transition-all duration-200"
              dir="ltr"
              onClick={() => setMobileMenuOpen(false)}
            >
              اتصل بنا
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;