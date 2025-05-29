import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp } from 'lucide-react';
import { trackConversion } from '../utils/analytics';
import { scrollToTop } from '../utils/scroll';

const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when page is scrolled down 300px
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', toggleVisibility);

    // Clean up
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const handleScrollToTop = () => {
    trackConversion('back_to_top_click');
    // Use enhanced smooth scrolling
    scrollToTop('smooth');
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.3 }}
          onClick={handleScrollToTop}
          className="fixed bottom-8 right-8 z-40 bg-primary-500 hover:bg-primary-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 group"
          aria-label="Back to top"
        >
          <ChevronUp
            size={24}
            className="group-hover:-translate-y-0.5 transition-transform duration-200"
          />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;
