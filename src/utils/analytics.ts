// Analytics and tracking utilities
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

// Google Analytics tracking
export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Track page views
export const trackPageView = (url: string, title: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'GA_MEASUREMENT_ID', {
      page_title: title,
      page_location: url,
    });
  }
};

// Track conversions
export const trackConversion = (conversionType: string, value?: number) => {
  trackEvent('conversion', 'engagement', conversionType, value);
  
  // Track specific conversion events
  switch (conversionType) {
    case 'contact_form_submit':
      trackEvent('submit', 'form', 'contact_form');
      break;
    case 'phone_click':
      trackEvent('click', 'contact', 'phone_number');
      break;
    case 'email_click':
      trackEvent('click', 'contact', 'email_address');
      break;
    case 'calendar_booking':
      trackEvent('click', 'cta', 'book_consultation');
      break;
    case 'scroll_to_section':
      trackEvent('scroll', 'navigation', 'section_view');
      break;
  }
};

// Track user engagement
export const trackEngagement = (element: string, action: string) => {
  trackEvent(action, 'engagement', element);
};

// Track performance metrics
export const trackPerformance = () => {
  if (typeof window !== 'undefined' && 'performance' in window) {
    window.addEventListener('load', () => {
      setTimeout(() => {
        const perfData = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        
        if (perfData) {
          // Track page load time
          const loadTime = perfData.loadEventEnd - perfData.loadEventStart;
          trackEvent('timing_complete', 'performance', 'page_load_time', Math.round(loadTime));
          
          // Track DOM content loaded time
          const domTime = perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart;
          trackEvent('timing_complete', 'performance', 'dom_ready_time', Math.round(domTime));
          
          // Track first contentful paint
          const paintEntries = performance.getEntriesByType('paint');
          const fcp = paintEntries.find(entry => entry.name === 'first-contentful-paint');
          if (fcp) {
            trackEvent('timing_complete', 'performance', 'first_contentful_paint', Math.round(fcp.startTime));
          }
        }
      }, 0);
    });
  }
};

// Initialize analytics
export const initAnalytics = () => {
  // Track performance metrics
  trackPerformance();
  
  // Track initial page view
  if (typeof window !== 'undefined') {
    trackPageView(window.location.href, document.title);
  }
};

// Error tracking
export const trackError = (error: Error, errorInfo?: any) => {
  trackEvent('exception', 'error', error.message);
  
  // In production, you might want to send this to an error tracking service
  console.error('Application Error:', error, errorInfo);
};
