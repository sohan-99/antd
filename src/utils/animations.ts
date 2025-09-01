import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Common animation utilities
export const animationUtils = {
  // Fade in from bottom
  fadeInUp: (element: any, options = {}) => {
    const defaults = {
      duration: 0.8,
      y: 50,
      opacity: 0,
      ease: "power3.out",
      ...options
    };

    return gsap.fromTo(element,
      { opacity: 0, y: defaults.y },
      {
        opacity: 1,
        y: 0,
        duration: defaults.duration,
        ease: defaults.ease,
        ...options
      }
    );
  },

  // Fade in from left
  fadeInLeft: (element: any, options = {}) => {
    const defaults = {
      duration: 0.8,
      x: -50,
      opacity: 0,
      ease: "power3.out",
      ...options
    };

    return gsap.fromTo(element,
      { opacity: 0, x: defaults.x },
      {
        opacity: 1,
        x: 0,
        duration: defaults.duration,
        ease: defaults.ease,
        ...options
      }
    );
  },

  // Fade in from right
  fadeInRight: (element: any, options = {}) => {
    const defaults = {
      duration: 0.8,
      x: 50,
      opacity: 0,
      ease: "power3.out",
      ...options
    };

    return gsap.fromTo(element,
      { opacity: 0, x: defaults.x },
      {
        opacity: 1,
        x: 0,
        duration: defaults.duration,
        ease: defaults.ease,
        ...options
      }
    );
  },

  // Scale animation
  scaleIn: (element: any, options = {}) => {
    const defaults = {
      duration: 0.6,
      scale: 0.8,
      opacity: 0,
      ease: "back.out(1.7)",
      ...options
    };

    return gsap.fromTo(element,
      { opacity: 0, scale: defaults.scale },
      {
        opacity: 1,
        scale: 1,
        duration: defaults.duration,
        ease: defaults.ease,
        ...options
      }
    );
  },

  // Stagger animation for multiple elements
  staggerAnimation: (elements: any, animationType = "fadeInUp", options = {}) => {
    const defaults = {
      stagger: 0.1,
      ...options
    };

    switch (animationType) {
      case "fadeInUp":
        return gsap.fromTo(elements,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            stagger: defaults.stagger,
            ...options
          }
        );
      case "scaleIn":
        return gsap.fromTo(elements,
          { opacity: 0, scale: 0.8 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.6,
            ease: "back.out(1.7)",
            stagger: defaults.stagger,
            ...options
          }
        );
      default:
        return gsap.fromTo(elements,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            stagger: defaults.stagger,
            ...options
          }
        );
    }
  },

  // Scroll trigger animation
  scrollTriggerAnimation: (element: any, animationType = "fadeInUp", triggerOptions = {}) => {
    const defaultTrigger = {
      trigger: element,
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse",
      ...triggerOptions
    };

    switch (animationType) {
      case "fadeInUp":
        return gsap.fromTo(element,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: defaultTrigger
          }
        );
      case "fadeInLeft":
        return gsap.fromTo(element,
          { opacity: 0, x: -50 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: defaultTrigger
          }
        );
      case "scaleIn":
        return gsap.fromTo(element,
          { opacity: 0, scale: 0.8 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.6,
            ease: "back.out(1.7)",
            scrollTrigger: defaultTrigger
          }
        );
      default:
        return gsap.fromTo(element,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: defaultTrigger
          }
        );
    }
  },

  // Hover animations
  hoverScale: (element: any, scaleValue = 1.05) => {
    element.addEventListener('mouseenter', () => {
      gsap.to(element, { scale: scaleValue, duration: 0.3, ease: "power2.out" });
    });
    element.addEventListener('mouseleave', () => {
      gsap.to(element, { scale: 1, duration: 0.3, ease: "power2.out" });
    });
  },

  // Floating animation
  floating: (element: any, options = {}) => {
    const defaults = {
      duration: 2,
      y: -10,
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1,
      ...options
    };

    return gsap.to(element, defaults);
  },

  // Page transition
  pageTransition: (element: any, direction = "in") => {
    if (direction === "in") {
      return gsap.fromTo(element,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
      );
    } else {
      return gsap.to(element,
        { opacity: 0, y: -30, duration: 0.5, ease: "power2.in" }
      );
    }
  }
};

// Timeline utilities
export const timelineUtils = {
  // Create a master timeline
  createTimeline: (options = {}) => {
    return gsap.timeline(options);
  },

  // Sequential animations
  sequential: (animations: Array<{ element: any; animation: string; options?: any }>) => {
    const tl = gsap.timeline();

    animations.forEach(({ element, animation, options = {} }, index) => {
      const offset = index === 0 ? 0 : "-=0.3";

      switch (animation) {
        case "fadeInUp":
          tl.fromTo(element,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", ...options },
            offset
          );
          break;
        case "scaleIn":
          tl.fromTo(element,
            { opacity: 0, scale: 0.8 },
            { opacity: 1, scale: 1, duration: 0.6, ease: "back.out(1.7)", ...options },
            offset
          );
          break;
        default:
          tl.fromTo(element,
            { opacity: 0 },
            { opacity: 1, duration: 0.8, ease: "power3.out", ...options },
            offset
          );
      }
    });

    return tl;
  }
};

export default { animationUtils, timelineUtils };
