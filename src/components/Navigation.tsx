import React, { useState, useMemo } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { trackConversion } from '../utils/analytics';
import { smoothScrollToInstant } from '../utils/scroll';
import { useOptimizedScroll, useActiveSection } from '../hooks/useOptimizedScroll';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Use optimized scroll hook
  const { scrollY } = useOptimizedScroll();
  const scrolled = scrollY > 20;

  // Use optimized active section detection
  const sections = useMemo(() => ['home', 'about', 'services', 'testimonials', 'contact'], []);
  const activeSection = useActiveSection(sections);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Results', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    trackConversion('scroll_to_section');
    // Use instant smooth scrolling for immediate response (no delay)
    smoothScrollToInstant(href, 80);
    setIsOpen(false);
  };

  const handleBookCall = () => {
    trackConversion('nav_scroll_to_booking');
    // Use instant smooth scrolling for booking CTA
    smoothScrollToInstant('#contact', 80);
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-neutral-200'
          : 'bg-white/90 backdrop-blur-sm'
      }`}
    >
      <div className="container">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-shrink-0"
          >
            <button
              onClick={() => scrollToSection('#home')}
              className="text-2xl font-bold text-neutral-900 hover:text-primary-500 transition-colors"
            >
              Salespirit
            </button>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => {
              const sectionId = item.href.replace('#', '');
              const isActive = activeSection === sectionId;

              return (
                <motion.button
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => scrollToSection(item.href)}
                  className={`nav-link ${isActive ? 'nav-link-active' : ''}`}
                >
                  {item.name}
                </motion.button>
              );
            })}
          </div>

          {/* CTA Button */}
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={handleBookCall}
            className="hidden lg:flex btn btn-primary btn-md group"
          >
            Book Call
            <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
          </motion.button>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-neutral-600 hover:text-neutral-900 transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-neutral-200 shadow-lg"
          >
            <div className="container py-4">
              <div className="space-y-2">
                {navItems.map((item) => {
                  const sectionId = item.href.replace('#', '');
                  const isActive = activeSection === sectionId;

                  return (
                    <button
                      key={item.name}
                      onClick={() => scrollToSection(item.href)}
                      className={`block w-full text-left px-4 py-3 text-base font-medium transition-colors rounded-lg ${
                        isActive
                          ? 'text-primary-500 bg-primary-50'
                          : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50'
                      }`}
                    >
                      {item.name}
                    </button>
                  );
                })}
                <div className="pt-4 border-t border-neutral-200">
                  <button
                    onClick={handleBookCall}
                    className="w-full btn btn-primary btn-md"
                  >
                    Book Call
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;
