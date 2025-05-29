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

// Fast smooth scroll with optimized easing
export const smoothScrollToWithEasing = (
  elementId: string,
  offset: number = 80,
  duration: number = 600 // Reduced from 800ms to 600ms
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

  // Optimized easing function (ease-out-quart) - faster start, smooth end
  const easeOutQuart = (t: number): number => {
    return 1 - Math.pow(1 - t, 4);
  };

  const animation = (currentTime: number) => {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    const ease = easeOutQuart(progress);

    window.scrollTo(0, startPosition + distance * ease);

    if (progress < 1) {
      requestAnimationFrame(animation);
    }
  };

  requestAnimationFrame(animation);
};

// Instant smooth scroll (for immediate response)
export const smoothScrollToFast = (
  elementId: string,
  offset: number = 80,
  duration: number = 400 // Very fast for immediate feel
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

  // Ease-out-expo for very fast start, smooth landing
  const easeOutExpo = (t: number): number => {
    return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
  };

  const animation = (currentTime: number) => {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    const ease = easeOutExpo(progress);

    window.scrollTo(0, startPosition + distance * ease);

    if (progress < 1) {
      requestAnimationFrame(animation);
    }
  };

  requestAnimationFrame(animation);
};

// Instant scroll with native browser smooth scrolling (no delay)
export const smoothScrollToInstant = (
  elementId: string,
  offset: number = 80
) => {
  const element = document.querySelector(elementId);
  if (!element) {
    console.warn(`Element with selector "${elementId}" not found`);
    return;
  }

  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - offset;

  // Use native browser smooth scrolling for instant start
  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  });
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
