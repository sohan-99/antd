"use client";
import { useEffect, useRef } from "react";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { gsap } from "gsap";
import { useLoadingAnimation } from "./animations/hooks/useGSAP";

interface LoadingScreenProps {
  isLoading: boolean;
  onLoadingComplete?: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({
  isLoading,
  onLoadingComplete,
}) => {
  const containerRef = useLoadingAnimation(isLoading);
  const logoRef = useRef<HTMLDivElement>(null);
  const spinnerRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isLoading && containerRef.current) {
      // Loading complete animation
      const tl = gsap.timeline({
        onComplete: () => {
          onLoadingComplete?.();
        },
      });

      tl.to(progressRef.current, {
        width: "100%",
        duration: 0.5,
        ease: "power2.inOut",
      })
        .to(
          [logoRef.current, spinnerRef.current],
          {
            scale: 0.8,
            opacity: 0,
            duration: 0.6,
            ease: "power2.inOut",
          },
          "-=0.2"
        )
        .to(
          containerRef.current,
          {
            opacity: 0,
            scale: 0.95,
            duration: 0.8,
            ease: "power2.inOut",
          },
          "-=0.4"
        );
    }
  }, [isLoading, onLoadingComplete]);

  useEffect(() => {
    if (isLoading && logoRef.current && spinnerRef.current) {
      // Initial loading animations
      gsap.fromTo(
        logoRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 1, ease: "elastic.out(1, 0.5)" }
      );

      gsap.fromTo(
        spinnerRef.current,
        { opacity: 0, rotation: -180 },
        {
          opacity: 1,
          rotation: 0,
          duration: 0.8,
          ease: "power2.out",
          delay: 0.3,
        }
      );

      // Progress bar animation
      gsap.fromTo(
        progressRef.current,
        { width: "0%" },
        { width: "80%", duration: 2, ease: "power2.out", delay: 0.5 }
      );
    }
  }, [isLoading]);

  if (!isLoading && !containerRef.current) return null;

  return (
    <div
      ref={containerRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#1a1a1a",
        zIndex: 9999,
      }}
    >
      {/* Logo */}
      <div
        ref={logoRef}
        style={{
          marginBottom: "2rem",
          fontSize: "2.5rem",
          fontWeight: "bold",
          color: "#fff",
          letterSpacing: "2px",
        }}
      >
        Spend.in
      </div>

      {/* Spinner */}
      <div ref={spinnerRef}>
        <Spin
          indicator={
            <LoadingOutlined
              style={{
                fontSize: 48,
                color: "#1890ff",
              }}
              spin
            />
          }
        />
      </div>

      {/* Progress bar */}
      <div
        style={{
          width: "200px",
          height: "2px",
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          borderRadius: "1px",
          marginTop: "2rem",
          overflow: "hidden",
        }}
      >
        <div
          ref={progressRef}
          style={{
            height: "100%",
            backgroundColor: "#1890ff",
            borderRadius: "1px",
            width: "0%",
          }}
        />
      </div>

      {/* Loading text */}
      <div
        style={{
          marginTop: "1rem",
          color: "rgba(255, 255, 255, 0.7)",
          fontSize: "0.9rem",
          letterSpacing: "1px",
        }}
      >
        Loading...
      </div>
    </div>
  );
};

export default LoadingScreen;
