import React, { memo } from 'react';
import { motion, MotionProps } from 'framer-motion';
import { useIntersectionObserver } from '../hooks/useOptimizedScroll';
import { getAnimationConfig } from '../utils/performance';

interface OptimizedMotionProps extends MotionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  once?: boolean;
  threshold?: number;
  rootMargin?: string;
}

// Optimized fade-in animation with intersection observer
export const FadeInWhenVisible = memo<OptimizedMotionProps>(({
  children,
  className = '',
  delay = 0,
  duration = 0.6,
  once = true,
  threshold = 0.1,
  rootMargin = '50px',
  ...motionProps
}) => {
  const { elementRef, isIntersecting, hasIntersected } = useIntersectionObserver({
    threshold,
    rootMargin,
  });

  const shouldAnimate = once ? hasIntersected : isIntersecting;
  const animConfig = getAnimationConfig();

  // Use adaptive configuration
  const finalDuration = animConfig.enabled ? (duration * (animConfig.duration / 0.6)) : 0;
  const finalDelay = animConfig.enabled ? delay + animConfig.delay : 0;

  return (
    <motion.div
      ref={elementRef}
      initial={{ opacity: 0, y: animConfig.reducedComplexity ? 10 : 20 }}
      animate={shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: animConfig.reducedComplexity ? 10 : 20 }}
      transition={{
        duration: finalDuration,
        delay: finalDelay,
        ease: animConfig.reducedComplexity ? "easeOut" : [0.25, 0.46, 0.45, 0.94],
      }}
      className={className}
      style={{ willChange: animConfig.enabled ? 'transform, opacity' : 'auto' }}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
});

FadeInWhenVisible.displayName = 'FadeInWhenVisible';

// Optimized slide-up animation
export const SlideUpWhenVisible = memo<OptimizedMotionProps>(({
  children,
  className = '',
  delay = 0,
  duration = 0.6,
  once = true,
  threshold = 0.1,
  rootMargin = '50px',
  ...motionProps
}) => {
  const { elementRef, isIntersecting, hasIntersected } = useIntersectionObserver({
    threshold,
    rootMargin,
  });

  const shouldAnimate = once ? hasIntersected : isIntersecting;

  return (
    <motion.div
      ref={elementRef}
      initial={{ opacity: 0, y: 40 }}
      animate={shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className={className}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
});

SlideUpWhenVisible.displayName = 'SlideUpWhenVisible';

// Optimized scale animation
export const ScaleWhenVisible = memo<OptimizedMotionProps>(({
  children,
  className = '',
  delay = 0,
  duration = 0.5,
  once = true,
  threshold = 0.1,
  rootMargin = '50px',
  ...motionProps
}) => {
  const { elementRef, isIntersecting, hasIntersected } = useIntersectionObserver({
    threshold,
    rootMargin,
  });

  const shouldAnimate = once ? hasIntersected : isIntersecting;

  return (
    <motion.div
      ref={elementRef}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={shouldAnimate ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className={className}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
});

ScaleWhenVisible.displayName = 'ScaleWhenVisible';

// Staggered children animation
export const StaggerContainer = memo<{
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  once?: boolean;
}>(({
  children,
  className = '',
  staggerDelay = 0.1,
  once = true,
}) => {
  const { elementRef, isIntersecting, hasIntersected } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '50px',
  });

  const shouldAnimate = once ? hasIntersected : isIntersecting;

  return (
    <motion.div
      ref={elementRef}
      initial="hidden"
      animate={shouldAnimate ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
});

StaggerContainer.displayName = 'StaggerContainer';

// Staggered child item
export const StaggerItem = memo<{
  children: React.ReactNode;
  className?: string;
}>(({ children, className = '' }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            ease: [0.25, 0.46, 0.45, 0.94],
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
});

StaggerItem.displayName = 'StaggerItem';

// Performance-optimized motion div with will-change
export const OptimizedMotionDiv = memo<MotionProps & {
  children: React.ReactNode;
  className?: string;
}>(({ children, className = '', style, ...props }) => {
  return (
    <motion.div
      className={className}
      style={{
        willChange: 'transform, opacity',
        ...style,
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
});

OptimizedMotionDiv.displayName = 'OptimizedMotionDiv';
