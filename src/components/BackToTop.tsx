import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp } from 'lucide-react';
import { trackConversion } from '../utils/analytics';
import { scrollToTop } from '../utils/scroll';
import { useOptimizedScroll } from '../hooks/useOptimizedScroll';

const BackToTop: React.FC = () => {
  // Use optimized scroll hook
  const { scrollY } = useOptimizedScroll();
  const isVisible = scrollY > 300;

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
