import { gsap } from "gsap";

// Animation configurations
export const animations = {
  // Fade animations
  fadeIn: {
    opacity: 0,
    duration: 1,
    ease: "power2.out"
  },

  fadeInUp: {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power2.out"
  },

  fadeInDown: {
    opacity: 0,
    y: -50,
    duration: 1,
    ease: "power2.out"
  },

  fadeInLeft: {
    opacity: 0,
    x: -50,
    duration: 1,
    ease: "power2.out"
  },

  fadeInRight: {
    opacity: 0,
    x: 50,
    duration: 1,
    ease: "power2.out"
  },

  // Scale animations
  scaleIn: {
    opacity: 0,
    scale: 0.8,
    duration: 1,
    ease: "power2.out"
  },

  // Stagger animations
  staggerFadeInUp: {
    opacity: 0,
    y: 50,
    duration: 0.8,
    ease: "power2.out",
    stagger: 0.2
  }
};

// Animation helper functions
export const gsapUtils = {
  // Page transition animations
  pageTransition: {
    enter: (element: HTMLElement) => {
      return gsap.fromTo(element,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
      );
    },

    exit: (element: HTMLElement) => {
      return gsap.to(element, {
        opacity: 0,
        y: -20,
        duration: 0.6,
        ease: "power2.in"
      });
    }
  },

  // Loading animations
  loading: {
    spinner: (element: HTMLElement) => {
      return gsap.to(element, {
        rotation: 360,
        duration: 1,
        repeat: -1,
        ease: "linear"
      });
    },

    fadeOut: (element: HTMLElement) => {
      return gsap.to(element, {
        opacity: 0,
        scale: 0.9,
        duration: 0.8,
        ease: "power2.inOut"
      });
    }
  },

  // Basic scroll animations (without ScrollTrigger)
  scroll: {
    fadeInOnScroll: (element: HTMLElement | string, options?: any) => {
      return gsap.fromTo(element,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          ...options
        }
      );
    },

    staggerOnScroll: (elements: HTMLElement[] | string, options?: any) => {
      return gsap.fromTo(elements,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          stagger: 0.2,
          ...options
        }
      );
    }
  },  // Hover animations
  hover: {
    scale: (element: HTMLElement, scale = 1.05) => {
      const tl = gsap.timeline({ paused: true });
      tl.to(element, { scale, duration: 0.3, ease: "power2.out" });
      return tl;
    },

    lift: (element: HTMLElement, y = -10) => {
      const tl = gsap.timeline({ paused: true });
      tl.to(element, { y, duration: 0.3, ease: "power2.out" });
      return tl;
    }
  }
};

// Initialize GSAP
export const initGSAP = () => {
  if (typeof window !== "undefined") {
    // Basic GSAP initialization
    gsap.config({ nullTargetWarn: false });
  }
};
