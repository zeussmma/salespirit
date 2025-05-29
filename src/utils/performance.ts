// Performance monitoring utilities

export const measurePerformance = (name: string, fn: () => void) => {
  const start = performance.now();
  fn();
  const end = performance.now();
  console.log(`${name} took ${end - start} milliseconds`);
};

export const reportWebVitals = (onPerfEntry?: (metric: any) => void) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    // Web vitals would be imported here in a real app
    console.log('Web vitals reporting would be implemented here');
  }
};

// Lazy loading utility
export const lazyLoad = (importFunc: () => Promise<any>) => {
  return importFunc();
};

// Image preloading
export const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = src;
  });
};

// Critical resource hints
export const addResourceHint = (href: string, rel: 'preload' | 'prefetch' | 'preconnect') => {
  const link = document.createElement('link');
  link.rel = rel;
  link.href = href;
  document.head.appendChild(link);
};
