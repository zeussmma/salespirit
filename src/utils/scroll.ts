// Enhanced smooth scroll utility with performance optimization
export const smoothScrollTo = (
  elementId: string,
  offset: number = 80, // Default offset for sticky nav
  behavior: ScrollBehavior = 'smooth'
) => {
  const element = document.querySelector(elementId);
  if (!element) {
    console.warn(`Element with selector "${elementId}" not found`);
    return;
  }

  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - offset;

  window.scrollTo({
    top: offsetPosition,
    behavior
  });
};

// Smooth scroll to top
export const scrollToTop = (behavior: ScrollBehavior = 'smooth') => {
  window.scrollTo({
    top: 0,
    behavior
  });
};

// Smooth scroll to bottom
export const scrollToBottom = (behavior: ScrollBehavior = 'smooth') => {
  window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior
  });
};

// Enhanced smooth scroll with custom easing
export const smoothScrollToWithEasing = (
  elementId: string,
  offset: number = 80,
  duration: number = 800
) => {
  const element = document.querySelector(elementId);
  if (!element) {
    console.warn(`Element with selector "${elementId}" not found`);
    return;
  }

  const targetPosition = element.getBoundingClientRect().top + window.pageYOffset - offset;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  let startTime: number | null = null;

  // Easing function (ease-in-out-cubic)
  const easeInOutCubic = (t: number): number => {
    return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
  };

  const animation = (currentTime: number) => {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    const ease = easeInOutCubic(progress);

    window.scrollTo(0, startPosition + distance * ease);

    if (progress < 1) {
      requestAnimationFrame(animation);
    }
  };

  requestAnimationFrame(animation);
};

// Debounced scroll handler for performance
export const debounce = (func: Function, wait: number) => {
  let timeout: number;
  return function executedFunction(...args: any[]) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

// Check if element is in viewport
export const isInViewport = (element: Element) => {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

// Lazy loading utility
export const lazyLoad = (selector: string, callback: () => void) => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        callback();
        observer.unobserve(entry.target);
      }
    });
  });

  const elements = document.querySelectorAll(selector);
  elements.forEach((element) => observer.observe(element));
};

// Performance monitoring
export const measurePerformance = (name: string, fn: () => void) => {
  const start = performance.now();
  fn();
  const end = performance.now();
  console.log(`${name} took ${end - start} milliseconds`);
};
