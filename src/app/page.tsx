"use client";

import Navber from "@/components/Navber";
import SlideBer from "@/components/SlideBer";
import Dashboard from "@/components/Dashboard";
import { Layout } from "antd";

const { Content } = Layout;

const Home = () => {
  return (
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
  );
};

export default Home;
