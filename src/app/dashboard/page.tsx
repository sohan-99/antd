"use client";

import { Layout } from "antd";
import Dashboard from "@/components/Dashboard";
import SlideBer from "@/components/SlideBer";
import Navber from "@/components/Navber";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const { Content } = Layout;

const DashboardPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Page load animation
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        scrollbarWidth: "none", // Firefox
        msOverflowStyle: "none", // IE 10+
      }}
    >
      <Layout
        style={{
          minHeight: "100vh",
          scrollbarWidth: "none", // Firefox
          msOverflowStyle: "none", // IE 10+
        }}
      >
        <Layout.Sider width={280} style={{ background: "#fff" }}>
          <SlideBer />
        </Layout.Sider>
        <Layout>
          <Layout.Header
            style={{ padding: 0, background: "#fff", height: "auto" }}
          >
            <Navber />
          </Layout.Header>
          <Layout.Content
            style={{
              padding: "24px",
              background: "#f5f5f5",
              scrollbarWidth: "none", // Firefox
              msOverflowStyle: "none", // IE 10+
            }}
          >
            <Dashboard />
          </Layout.Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default DashboardPage;
