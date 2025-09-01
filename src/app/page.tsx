"use client";
import { Layout, Row, theme, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { useState, useEffect, useRef } from "react";
import LeandingPage from "@/components/LeandingPage";
import Benefit from "@/components/Benefit";
import Benefit2 from "@/components/Benefit2";
import { gsap } from "gsap";

const Home = () => {
  const { token } = theme.useToken();
  const [loading, setLoading] = useState(true);
  const loadingRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Enhanced loading animation
    const loadingSpinner = loadingRef.current?.querySelector(".ant-spin-dot");
    if (loadingSpinner) {
      gsap.to(loadingSpinner, {
        rotation: 360,
        duration: 1,
        repeat: -1,
        ease: "none",
      });
    }

    // Simulate loading time with smooth transition
    const timer = setTimeout(() => {
      // Fade out loading screen
      if (loadingRef.current) {
        gsap.to(loadingRef.current, {
          opacity: 0,
          duration: 0.5,
          ease: "power2.out",
          onComplete: () => {
            setLoading(false);
          },
        });
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Fade in main content after loading
    if (!loading && contentRef.current) {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.8, ease: "power2.out" }
      );
    }
  }, [loading]);

  if (loading) {
    return (
      <div
        ref={loadingRef}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundColor: token.secondary700,
        }}
      >
        <Spin
          indicator={
            <LoadingOutlined style={{ fontSize: 48, color: "#fff" }} spin />
          }
        />
      </div>
    );
  }

  return (
    <div ref={contentRef}>
      <LeandingPage />
      <Benefit />
      <Benefit2 />
    </div>
  );
};

export default Home;
