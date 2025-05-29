import { useState, useEffect, useCallback, useRef } from 'react';

interface ScrollState {
  scrollY: number;
  scrollDirection: 'up' | 'down';
  isScrolling: boolean;
}

export const useOptimizedScroll = () => {
  const [scrollState, setScrollState] = useState<ScrollState>({
    scrollY: 0,
    scrollDirection: 'down',
    isScrolling: false,
  });

  const lastScrollY = useRef(0);
  const ticking = useRef(false);
  const scrollTimeout = useRef<number | undefined>(undefined);

  const updateScrollState = useCallback(() => {
    const scrollY = window.pageYOffset;
    const scrollDirection = scrollY > lastScrollY.current ? 'down' : 'up';

    setScrollState({
      scrollY,
      scrollDirection,
      isScrolling: true,
    });

    lastScrollY.current = scrollY;
    ticking.current = false;

    // Clear existing timeout
    if (scrollTimeout.current) {
      window.clearTimeout(scrollTimeout.current);
    }

    // Set isScrolling to false after scrolling stops
    scrollTimeout.current = window.setTimeout(() => {
      setScrollState(prev => ({ ...prev, isScrolling: false }));
    }, 150);
  }, []);

  const handleScroll = useCallback(() => {
    if (!ticking.current) {
      requestAnimationFrame(updateScrollState);
      ticking.current = true;
    }
  }, [updateScrollState]);

  useEffect(() => {
    // Set initial state
    setScrollState({
      scrollY: window.pageYOffset,
      scrollDirection: 'down',
      isScrolling: false,
    });

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout.current) {
        window.clearTimeout(scrollTimeout.current);
      }
    };
  }, [handleScroll]);

  return scrollState;
};

// Hook for detecting when element enters viewport
export const useIntersectionObserver = (
  options: IntersectionObserverInit = {}
) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasIntersected, setHasIntersected] = useState(false);
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
        if (entry.isIntersecting && !hasIntersected) {
          setHasIntersected(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
        ...options,
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [hasIntersected, options]);

  return { elementRef, isIntersecting, hasIntersected };
};

// Hook for active section detection with optimization
export const useActiveSection = (sections: string[]) => {
  const [activeSection, setActiveSection] = useState(sections[0]);
  const { scrollY } = useOptimizedScroll();
  const sectionsCache = useRef<Map<string, { top: number; height: number }>>(new Map());
  const lastUpdate = useRef(0);

  useEffect(() => {
    // Throttle section detection to every 100ms
    const now = Date.now();
    if (now - lastUpdate.current < 100) return;
    lastUpdate.current = now;

    // Cache section positions if not cached or if cache is stale
    if (sectionsCache.current.size === 0) {
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          sectionsCache.current.set(section, {
            top: element.offsetTop,
            height: element.offsetHeight,
          });
        }
      });
    }

    // Find active section
    const scrollPosition = scrollY + 100; // Offset for sticky nav

    for (const section of sections) {
      const cached = sectionsCache.current.get(section);
      if (cached) {
        const { top, height } = cached;
        if (scrollPosition >= top && scrollPosition < top + height) {
          if (activeSection !== section) {
            setActiveSection(section);
          }
          break;
        }
      }
    }
  }, [scrollY, sections, activeSection]);

  // Recalculate cache on window resize
  useEffect(() => {
    const handleResize = () => {
      sectionsCache.current.clear();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return activeSection;
};
