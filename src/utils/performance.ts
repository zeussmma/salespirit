// Performance monitoring and optimization utilities

export const measurePerformance = (name: string, fn: () => void) => {
  const start = performance.now();
  fn();
  const end = performance.now();
  console.log(`${name} took ${end - start} milliseconds`);
};

// Debounce function for scroll events
export const debounce = <T extends (...args: any[]) => void>(
  func: T,
  wait: number,
  immediate?: boolean
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout | null = null;

  return (...args: Parameters<T>) => {
    const later = () => {
      timeout = null;
      if (!immediate) func(...args);
    };

    const callNow = immediate && !timeout;

    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(later, wait);

    if (callNow) func(...args);
  };
};

// Throttle function for high-frequency events
export const throttle = <T extends (...args: any[]) => void>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;

  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

// Check if user prefers reduced motion
export const prefersReducedMotion = (): boolean => {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

// Get device performance tier
export const getPerformanceTier = (): 'low' | 'medium' | 'high' => {
  const cores = navigator.hardwareConcurrency || 1;
  const memory = (navigator as any).deviceMemory || 4;
  const connection = (navigator as any).connection;
  const effectiveType = connection?.effectiveType || '4g';

  if (cores <= 2 || memory <= 2 || effectiveType === 'slow-2g' || effectiveType === '2g') {
    return 'low';
  } else if (cores <= 4 || memory <= 4 || effectiveType === '3g') {
    return 'medium';
  } else {
    return 'high';
  }
};

// Adaptive animation configuration
export const getAnimationConfig = () => {
  const tier = getPerformanceTier();
  const reducedMotion = prefersReducedMotion();

  if (reducedMotion) {
    return { duration: 0, delay: 0, enabled: false };
  }

  switch (tier) {
    case 'low':
      return { duration: 0.3, delay: 0, enabled: true, reducedComplexity: true };
    case 'medium':
      return { duration: 0.5, delay: 0.1, enabled: true, reducedComplexity: false };
    case 'high':
    default:
      return { duration: 0.6, delay: 0.1, enabled: true, reducedComplexity: false };
  }
};

// Image preloading with performance optimization
export const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = src;
  });
};

// Preload multiple images
export const preloadImages = (imageUrls: string[]) => {
  imageUrls.forEach(url => {
    const img = new Image();
    img.src = url;
  });
};

// Critical resource hints
export const addResourceHint = (href: string, rel: 'preload' | 'prefetch' | 'preconnect') => {
  const link = document.createElement('link');
  link.rel = rel;
  link.href = href;
  document.head.appendChild(link);
};
