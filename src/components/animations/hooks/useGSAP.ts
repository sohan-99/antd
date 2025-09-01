import { useEffect, useRef, MutableRefObject } from "react";
import { gsap } from "gsap";
import { gsapUtils } from "@/utils/gsap";

// Hook for fade in animation
export const useFadeIn = (delay = 0, duration = 1) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      gsap.fromTo(ref.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration,
          delay,
          ease: "power2.out"
        }
      );
    }
  }, [delay, duration]);

  return ref;
};

// Hook for fade in on scroll (using Intersection Observer)
export const useFadeInOnScroll = (options?: any) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      const element = ref.current;

      // Create intersection observer
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              gsapUtils.scroll.fadeInOnScroll(element, options);
              observer.unobserve(element);
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: "0px 0px -100px 0px"
        }
      );

      observer.observe(element);

      return () => {
        observer.disconnect();
      };
    }
  }, [options]);

  return ref;
};// Hook for stagger animation
export const useStagger = (selector: string, delay = 0) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const elements = containerRef.current.querySelectorAll(selector);
      gsap.fromTo(elements,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          stagger: 0.15,
          delay
        }
      );
    }
  }, [selector, delay]);

  return containerRef;
};

// Hook for hover animations
export const useHoverScale = (scale = 1.05) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      const element = ref.current;

      const handleMouseEnter = () => {
        gsap.to(element, { scale, duration: 0.3, ease: "power2.out" });
      };

      const handleMouseLeave = () => {
        gsap.to(element, { scale: 1, duration: 0.3, ease: "power2.out" });
      };

      element.addEventListener("mouseenter", handleMouseEnter);
      element.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        element.removeEventListener("mouseenter", handleMouseEnter);
        element.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, [scale]);

  return ref;
};

// Hook for scroll-triggered stagger animation (using Intersection Observer)
export const useScrollStagger = (selector: string, options?: any) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const container = containerRef.current;
      const elements = container.querySelectorAll(selector);

      // Create intersection observer
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              gsapUtils.scroll.staggerOnScroll(elements as any, options);
              observer.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: "0px 0px -100px 0px"
        }
      );

      observer.observe(container);

      return () => {
        observer.disconnect();
      };
    }
  }, [selector, options]);

  return containerRef;
};

// Hook for page transitions
export const usePageTransition = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      gsapUtils.pageTransition.enter(ref.current);
    }
  }, []);

  return ref;
};

// Hook for loading animations
export const useLoadingAnimation = (isLoading: boolean) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      if (isLoading) {
        // Show loading animation
        gsap.set(ref.current, { opacity: 1, scale: 1 });
      } else {
        // Hide loading with animation
        gsapUtils.loading.fadeOut(ref.current);
      }
    }
  }, [isLoading]);

  return ref;
};
