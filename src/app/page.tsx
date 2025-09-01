"use client";
import { Layout, Row, theme } from "antd";
import { useState, useEffect } from "react";
import LeandingPage from "@/components/LeandingPage";
import Benefit from "@/components/Benefit";
import Benefit2 from "@/components/Benefit2";
import LoadingScreen from "@/components/LoadingScreen";
import PageTransition from "@/components/PageTransition";

const Home = () => {
  const { token } = theme.useToken();
  const [loading, setLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Simulate loading time (you can adjust this or replace with actual loading logic)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // 3 seconds loading time

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
          <LeandingPage />
          <Benefit />
          <Benefit2 />
        </PageTransition>
      )}
    </>
  );
};

export default Home;
