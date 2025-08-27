"use client";
import { Layout, Row, theme, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { useState, useEffect } from "react";
import LeandingPage from "@/components/LeandingPage";

const Home = () => {
  const { token } = theme.useToken();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time (you can adjust this or replace with actual loading logic)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds loading time

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundColor: token.secondary700,
        }}
      >
        <Spin indicator={<LoadingOutlined style={{ fontSize: 48 }} spin />} />
      </div>
    );
  }

  return (
    <div>
      <LeandingPage />
    </div>
  );
};

export default Home;
