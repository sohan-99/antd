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
} from "antd";
import { DownOutlined } from "@ant-design/icons";
import React from "react";
import Link from "next/link";

const { Title, Text } = Typography;

const LeandingPage = () => {
  const { token } = theme.useToken();

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
          padding: "16px 48px",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: "1px solid gray",
          background: token.secondary700,
        }}
      >
        <Col>
          <Flex align="center" gap="small">
            <img
              src="/Logo.svg"
              alt="Spend.In Logo"
              style={{
                width: "32px",
                height: "32px",
                filter: "brightness(0) invert(1)",
              }}
            />
            <Text
              style={{
                color: "#fff",
                fontSize: "20px",
                fontWeight: "600",
              }}
            >
              Spend.In
            </Text>
          </Flex>
        </Col>
        <Col>
          <Space size="large">
            <Dropdown menu={productsMenu} placement="bottomLeft">
              <Button
                type="text"
                style={{ color: "#fff" }}
                icon={<DownOutlined />}
                iconPosition="end"
              >
                Products
              </Button>
            </Dropdown>
            <Button type="text" style={{ color: "#fff" }}>
              Benefit
            </Button>
            <Button type="text" style={{ color: "#fff" }}>
              How it Works
            </Button>
            <Button type="text" style={{ color: "#fff" }}>
              Pricing
            </Button>
            <Dropdown menu={companyMenu} placement="bottomLeft">
              <Button
                type="text"
                style={{ color: "#fff" }}
                icon={<DownOutlined />}
                iconPosition="end"
              >
                Company
              </Button>
            </Dropdown>
          </Space>
        </Col>
        <Col>
          <Space>
            <Link href="/dashboard" style={{ textDecoration: "none" }}>
              <Button type="text" style={{ color: "#fff" }}>
                Login
              </Button>
            </Link>
            <Button
              type="primary"
              style={{
                background: token.primary500,
                border: "none",
                borderRadius: "24px",
                padding: "8px 24px",
                height: "40px",
              }}
            >
              Get Demo
            </Button>
          </Space>
        </Col>
      </Row>

      {/* Hero Section */}
      <Row
        style={{
          padding: "200px 48px 120px 48px",
          textAlign: "center",
          justifyContent: "center",
        }}
      >
        <Col xs={24} md={16} lg={12}>
          <Title
            level={1}
            style={{
              color: "#fff",
              fontSize: "64px",
              fontWeight: "700",
              lineHeight: "1.2",
              margin: "0 0 32px 0",
            }}
          >
            All your business
            <br />
            expenses in one place.
          </Title>
          <Text
            style={{
              color: "#B0BEC5",
              fontSize: "18px",
              lineHeight: "1.6",
              display: "block",
              marginBottom: "16px",
            }}
          >
            Your one-stop finance empower platform.
          </Text>
          <Text
            style={{
              color: "#B0BEC5",
              fontSize: "18px",
              lineHeight: "1.6",
              display: "block",
              marginBottom: "48px",
            }}
          >
            Manage all your business expenses with our supafast app.
          </Text>
        </Col>
      </Row>
    </div>
  );
};

export default LeandingPage;
