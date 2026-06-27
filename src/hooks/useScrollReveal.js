import { useEffect } from 'react';

export function useScrollReveal(threshold = 0.12) {
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal');
    if (!revealElements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [threshold]);
}
