"use client";

import { Layout } from "antd";
import { useState, useEffect } from "react";
import Dashboard from "@/components/Dashboard";
import SlideBer from "@/components/SlideBer";
import Navber from "@/components/Navber";
import LoadingScreen from "@/components/LoadingScreen";
import PageTransition from "@/components/PageTransition";

const { Content } = Layout;

const DashboardPage = () => {
  const [loading, setLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Simulate loading time for dashboard
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleLoadingComplete = () => {
    setShowContent(true);
  };

  return (
    <>
      <LoadingScreen
        isLoading={loading}
        onLoadingComplete={handleLoadingComplete}
      />
      {showContent && (
        <PageTransition>
          <Layout style={{ minHeight: "100vh" }}>
            <Layout.Sider width={280} style={{ background: "#fff" }}>
              <SlideBer />
            </Layout.Sider>
            <Layout>
              <Layout.Header
                style={{ padding: 0, background: "#fff", height: "auto" }}
              >
                <Navber />
              </Layout.Header>
              <Content style={{ padding: "24px", background: "#f5f5f5" }}>
                <Dashboard />
              </Content>
            </Layout>
          </Layout>
        </PageTransition>
      )}
    </>
  );
};

export default DashboardPage;
