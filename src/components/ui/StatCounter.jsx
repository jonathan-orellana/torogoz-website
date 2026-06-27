import { useRef, useEffect } from 'react';
import { animateCountUp } from '../../utils/animateCountUp';

export function StatCounter({ value, className }) {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCountUp(element);
            observer.unobserve(element);
          }
        });
      },
      { threshold: 0.6 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <b ref={elementRef} className={className}>
      {value}
    </b>
  );
}
