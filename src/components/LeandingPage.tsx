import {
  Row,
  Col,
  Button,
  Typography,
  Space,
  Flex,
  theme,
  Dropdown,
  MenuProps,
  Grid,
  Drawer,
  Menu,
} from "antd";
import { DownOutlined, MenuOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import Link from "next/link";

const { Title, Text } = Typography;
const { useBreakpoint } = Grid;

const LeandingPage = () => {
  const { token } = theme.useToken();
  const screens = useBreakpoint();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Products dropdown menu items
  const productsMenu: MenuProps = {
    items: [
      {
        key: "1",
        label: "Expense Tracking",
      },
      {
        key: "2",
        label: "Budget Management",
      },
      {
        key: "3",
        label: "Invoice Generator",
      },
      {
        key: "4",
        label: "Financial Reports",
      },
    ],
  };

  // Company dropdown menu items
  const companyMenu: MenuProps = {
    items: [
      {
        key: "1",
        label: "About Us",
      },
      {
        key: "2",
        label: "Careers",
      },
      {
        key: "3",
        label: "Contact",
      },
      {
        key: "4",
        label: "Blog",
      },
    ],
  };
  return (
    <div
      style={{
        background: token.secondary700,
        minHeight: "100vh",
        width: "100%",
        margin: 0,
        padding: 0,
        overflowX: "hidden",
      }}
    >
      {/* Navigation Header */}
      <Row
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          padding: screens.md ? "16px 24px" : "12px 16px",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
          background: `${token.secondary700}cc`,
          backdropFilter: "blur(10px)",
        }}
      >
        {/* Logo Section */}
        <Col xs={8} sm={6} md={4} lg={3}>
          <Flex align="center" gap="small">
            <img
              src="/Logo.svg"
              alt="Spend.In Logo"
              style={{
                width: screens.xs ? "28px" : "32px",
                height: screens.xs ? "28px" : "32px",
                filter: "brightness(0) invert(1)",
              }}
            />
            <Text
              style={{
                color: "#fff",
                fontSize: screens.md ? "20px" : "18px",
                fontWeight: "600",
                display: screens.sm ? "block" : "none",
              }}
            >
              Spend.In
            </Text>
          </Flex>
        </Col>

        {/* Navigation Menu - Hidden on mobile and tablet */}
        <Col xs={0} sm={0} lg={14} xl={16}>
          <Flex justify="center">
            <Space size="large" wrap>
              <Dropdown menu={productsMenu} placement="bottomLeft">
                <Button
                  type="text"
                  style={{ color: "#fff", fontSize: "14px" }}
                  icon={<DownOutlined />}
                  iconPosition="end"
                  size="middle"
                >
                  Products
                </Button>
              </Dropdown>
              <Button
                type="text"
                style={{ color: "#fff", fontSize: "14px" }}
                size="middle"
              >
                Benefit
              </Button>
              <Button
                type="text"
                style={{ color: "#fff", fontSize: "14px" }}
                size="middle"
              >
                How it Works
              </Button>
              <Button
                type="text"
                style={{ color: "#fff", fontSize: "14px" }}
                size="middle"
              >
                Pricing
              </Button>
              <Dropdown menu={companyMenu} placement="bottomLeft">
                <Button
                  type="text"
                  style={{ color: "#fff", fontSize: "14px" }}
                  icon={<DownOutlined />}
                  iconPosition="end"
                  size="middle"
                >
                  Company
                </Button>
              </Dropdown>
            </Space>
          </Flex>
        </Col>

        {/* Auth Buttons & Mobile Menu */}
        <Col xs={16} sm={18} md={16} lg={7} xl={5}>
          <Flex justify="end" gap="small" align="center">
            {/* Mobile Menu Button - Visible on mobile and tablet */}
            <Button
              type="text"
              icon={<MenuOutlined style={{ fontSize: "18px" }} />}
              style={{
                color: "#fff",
                display: screens.lg ? "none" : "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "40px",
                height: "40px",
              }}
              onClick={() => setMobileMenuOpen(true)}
            />

            {/* Desktop Auth Buttons - Hidden on small screens */}
            <div style={{ display: screens.md ? "block" : "none" }}>
              <Space size="small">
                <Link href="/dashboard" style={{ textDecoration: "none" }}>
                  <Button
                    type="text"
                    style={{ color: "#fff" }}
                    size={screens.lg ? "middle" : "small"}
                  >
                    Login
                  </Button>
                </Link>
                <Button type="primary" size={screens.lg ? "middle" : "small"}>
                  Get Demo
                </Button>
              </Space>
            </div>
          </Flex>
        </Col>
      </Row>

      {/* Mobile Menu Drawer */}
      <Drawer
        title={
          <Flex align="center" gap="small">
            <img
              src="/Logo.svg"
              alt="Spend.In Logo"
              style={{
                width: "24px",
                height: "24px",
                filter: "brightness(0) invert(1)",
              }}
            />
            <Text
              style={{ color: "#fff", fontSize: "18px", fontWeight: "600" }}
            >
              Spend.In
            </Text>
          </Flex>
        }
        placement="right"
        onClose={() => setMobileMenuOpen(false)}
        open={mobileMenuOpen}
        styles={{
          header: {
            backgroundColor: token.secondary700,
            borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
          },
          body: {
            backgroundColor: token.secondary700,
            padding: "24px 16px",
          },
        }}
        width={screens.xs ? "100%" : "320px"}
      >
        <Space direction="vertical" size="large" style={{ width: "100%" }}>
          {/* Mobile Navigation Menu */}
          <Space direction="vertical" size="middle" style={{ width: "100%" }}>
            <Dropdown
              menu={productsMenu}
              placement="bottomLeft"
              trigger={["click"]}
            >
              <Button
                type="text"
                style={{
                  color: "#fff",
                  width: "100%",
                  textAlign: "left",
                  justifyContent: "space-between",
                }}
                icon={<DownOutlined />}
                iconPosition="end"
                size="large"
              >
                Products
              </Button>
            </Dropdown>

            <Button
              type="text"
              style={{ color: "#fff", width: "100%", textAlign: "left" }}
              size="large"
            >
              Benefit
            </Button>

            <Button
              type="text"
              style={{ color: "#fff", width: "100%", textAlign: "left" }}
              size="large"
            >
              How it Works
            </Button>

            <Button
              type="text"
              style={{ color: "#fff", width: "100%", textAlign: "left" }}
              size="large"
            >
              Pricing
            </Button>

            <Dropdown
              menu={companyMenu}
              placement="bottomLeft"
              trigger={["click"]}
            >
              <Button
                type="text"
                style={{
                  color: "#fff",
                  width: "100%",
                  textAlign: "left",
                  justifyContent: "space-between",
                }}
                icon={<DownOutlined />}
                iconPosition="end"
                size="large"
              >
                Company
              </Button>
            </Dropdown>
          </Space>

          {/* Mobile Auth Buttons */}
          <Space
            direction="vertical"
            style={{ width: "100%", marginTop: "24px" }}
            size="middle"
          >
            <Link
              href="/dashboard"
              style={{ textDecoration: "none", width: "100%" }}
            >
              <Button
                type="text"
                style={{
                  color: "#fff",
                  width: "100%",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  textAlign: "center",
                }}
                size="large"
                onClick={() => setMobileMenuOpen(false)}
              >
                Login
              </Button>
            </Link>
            <Button
              type="primary"
              size="large"
              style={{ width: "100%" }}
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Demo
            </Button>
          </Space>
        </Space>
      </Drawer>

      {/* Hero Section */}
      <Row
        style={{
          padding: screens.lg
            ? "140px 24px 80px 24px"
            : screens.md
            ? "120px 20px 60px 20px"
            : "100px 16px 50px 16px",
          textAlign: "center",
          justifyContent: "center",
        }}
        gutter={[0, 24]}
      >
        <Col xs={24} sm={22} md={20} lg={18} xl={16} xxl={14}>
          <Title
            level={1}
            style={{
              color: "#fff",
              fontSize: screens.xxl
                ? "72px"
                : screens.xl
                ? "64px"
                : screens.lg
                ? "56px"
                : screens.md
                ? "48px"
                : screens.sm
                ? "40px"
                : "32px",
              fontWeight: "700",
              lineHeight: "1.1",
              margin: "0 0 32px 0",
              letterSpacing: "-0.02em",
            }}
          >
            All your business
            <br />
            expenses in one place.
          </Title>

          <Space
            direction="vertical"
            size={screens.md ? "middle" : "small"}
            style={{ width: "100%", marginBottom: "40px" }}
          >
            <Text
              style={{
                color: "#B0BEC5",
                fontSize: screens.lg ? "20px" : screens.md ? "18px" : "16px",
                lineHeight: "1.6",
                display: "block",
                maxWidth: "600px",
                margin: "0 auto",
              }}
            >
              Your one-stop finance empower platform.
            </Text>
            <Text
              style={{
                color: "#B0BEC5",
                fontSize: screens.lg ? "18px" : screens.md ? "16px" : "15px",
                lineHeight: "1.6",
                display: "block",
                maxWidth: "600px",
                margin: "0 auto",
              }}
            >
              Manage all your business expenses with our supafast app.
            </Text>
          </Space>

          {/* Responsive Button Group */}
          <Row gutter={[16, 16]} justify="center">
            <Col xs={24} sm={12} md={10} lg={8} xl={7}>
              <Button
                type="primary"
                style={{
                  borderRadius: "32px",
                  height: screens.md ? "50px" : "44px",
                  width: "100%",
                  fontSize: screens.md ? "16px" : "14px",
                  fontWeight: "600",
                }}
                size="large"
              >
                Get a Free Demo
              </Button>
            </Col>
            <Col xs={24} sm={12} md={10} lg={8} xl={7}>
              <Button
                style={{
                  background: "transparent",
                  border: "2px solid rgba(255, 255, 255, 0.8)",
                  borderRadius: "32px",
                  height: screens.md ? "50px" : "44px",
                  width: "100%",
                  color: "#fff",
                  fontSize: screens.md ? "16px" : "14px",
                  fontWeight: "600",
                  transition: "all 0.3s ease",
                }}
                size="large"
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor =
                    "rgba(255, 255, 255, 0.1)";
                  e.currentTarget.style.borderColor = "#fff";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.borderColor =
                    "rgba(255, 255, 255, 0.8)";
                }}
              >
                See Pricing
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
      {/* Dashboard Image */}
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "80px" }}
      >
        <img
          src="/Dashboard.png"
          alt="Hero Image"
          style={{
            maxWidth: "100%",
            height: "auto",
            maxHeight: "400px",
            padding: "0 60px",
          }}
        />
      </div>
    </div>
  );
};

export default LeandingPage;
