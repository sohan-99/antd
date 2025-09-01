"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { usePageTransition } from "./animations/hooks/useGSAP";

interface PageTransitionProps {
  children: React.ReactNode;
  className?: string;
}

const PageTransition: React.FC<PageTransitionProps> = ({
  children,
  className = "",
}) => {
  const containerRef = usePageTransition();

  return (
    <div
      ref={containerRef}
      className={`page-transition ${className}`}
      style={{
        opacity: 0,
        transform: "translateY(20px)",
      }}
    >
      {children}
    </div>
  );
};

export default PageTransition;
