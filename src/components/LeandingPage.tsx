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
  Spin,
} from "antd";
import { DownOutlined, MenuOutlined, LoadingOutlined } from "@ant-design/icons";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const { Title, Text } = Typography;
const { useBreakpoint } = Grid;

const LeandingPage = () => {
  const { token } = theme.useToken();
  const screens = useBreakpoint();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);

  // Animation refs
  const navRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const imageLoadingRef = useRef<HTMLDivElement>(null);
  const dashboardImageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Initial states
    gsap.set(
      [
        navRef.current,
        titleRef.current,
        descriptionRef.current,
        buttonsRef.current,
        imageRef.current,
      ],
      {
        opacity: 0,
        y: 50,
      }
    );

    // Navigation animation
    tl.to(navRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out",
    })
      // Title animation with stagger effect
      .to(
        titleRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.4"
      )
      // Description animation with subtle scale
      .to(
        descriptionRef.current,
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.6"
      )
      // Buttons animation with bounce effect
      .to(
        buttonsRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "back.out(1.7)",
        },
        "-=0.4"
      )
      // Enhanced Image animation
      .to(
        imageRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scale: 1,
        },
        "-=0.3"
      );

    // Enhanced floating animation for the image
    const startFloatingAnimation = () => {
      gsap.fromTo(
        imageRef.current,
        {
          y: 0,
          rotation: 0,
          scale: 1,
        },
        {
          y: -15,
          rotation: 2,
          scale: 1.02,
          duration: 3,
          ease: "power1.inOut",
          yoyo: true,
          repeat: -1,
          transformOrigin: "center center",
        }
      );
    };

    // Only start floating animation after image loads
    if (imageLoaded) {
      const timer = setTimeout(() => {
        startFloatingAnimation();
      }, 1000);
      
      return () => clearTimeout(timer);
    }

    // Add subtle parallax effect on scroll
    ScrollTrigger.create({
      trigger: imageRef.current,
      start: "top bottom",
      end: "bottom top",
      scrub: 1,
      onUpdate: (self) => {
        const progress = self.progress;
        gsap.to(imageRef.current, {
          y: progress * -50,
          duration: 0.3,
          overwrite: "auto",
        });
      },
    });

    return () => {
      tl.kill();
    };
  }, [imageLoaded]);

  // Handle image loading
  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImageLoaded(true);
      setImageLoading(false);
      
      // Smooth transition when image loads
      if (imageLoadingRef.current && dashboardImageRef.current) {
        gsap.to(imageLoadingRef.current, {
          opacity: 0,
          duration: 0.5,
          ease: "power2.out",
        });
        
        gsap.fromTo(
          dashboardImageRef.current,
          { opacity: 0, scale: 0.9 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: "power3.out",
            delay: 0.3,
          }
        );
      }
    };
    
    img.onerror = () => {
      setImageLoading(false);
      setImageLoaded(false);
    };
    
    img.src = "/Dashboard.png";
  }, []);

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
      className="no-scrollbar"
      style={{
        background: token.secondary700,
        minHeight: "100vh",
        width: "100%",
        margin: 0,
        padding: 0,
        overflowX: "hidden",
        overflowY: "auto",
        scrollbarWidth: "none", // Firefox
        msOverflowStyle: "none", // IE 10+
      }}
    >
      {/* Navigation Header */}
      <div ref={navRef}>
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
      </div>

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
      <div ref={heroRef}>
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
            <div ref={titleRef}>
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
            </div>

            <div ref={descriptionRef}>
              <Space
                direction="vertical"
                size={screens.md ? "middle" : "small"}
                style={{ width: "100%", marginBottom: "40px" }}
              >
                <Text
                  style={{
                    color: "#B0BEC5",
                    fontSize: screens.lg
                      ? "20px"
                      : screens.md
                      ? "18px"
                      : "16px",
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
                    fontSize: screens.lg
                      ? "18px"
                      : screens.md
                      ? "16px"
                      : "15px",
                    lineHeight: "1.6",
                    display: "block",
                    maxWidth: "600px",
                    margin: "0 auto",
                  }}
                >
                  Manage all your business expenses with our supafast app.
                </Text>
              </Space>
            </div>

            {/* Responsive Button Group */}
            <div ref={buttonsRef}>
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
                      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                      boxShadow: "0 4px 15px rgba(114, 92, 255, 0.3)",
                    }}
                    size="large"
                    onMouseEnter={(e) => {
                      gsap.to(e.currentTarget, {
                        scale: 1.05,
                        y: -2,
                        boxShadow: "0 8px 25px rgba(114, 92, 255, 0.4)",
                        duration: 0.3,
                        ease: "power2.out",
                      });
                    }}
                    onMouseLeave={(e) => {
                      gsap.to(e.currentTarget, {
                        scale: 1,
                        y: 0,
                        boxShadow: "0 4px 15px rgba(114, 92, 255, 0.3)",
                        duration: 0.3,
                        ease: "power2.out",
                      });
                    }}
                  >
                    Get a Free Demo
                  </Button>
                </Col>
                <Col xs={24} sm={12} md={10} lg={8} xl={7}>
                  <Button
                    style={{
                      background: "transparent",
                      borderRadius: "32px",
                      height: screens.md ? "50px" : "44px",
                      width: "160px",
                      color: "#fff",
                      fontSize: screens.md ? "16px" : "14px",
                      border: "2px solid rgba(255, 255, 255, 0.8)",
                      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    }}
                    size="large"
                    onMouseEnter={(e) => {
                      gsap.to(e.currentTarget, {
                        scale: 1.05,
                        y: -2,
                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                        borderColor: "#fff",
                        duration: 0.3,
                        ease: "power2.out",
                      });
                    }}
                    onMouseLeave={(e) => {
                      gsap.to(e.currentTarget, {
                        scale: 1,
                        y: 0,
                        backgroundColor: "transparent",
                        borderColor: "rgba(255, 255, 255, 0.8)",
                        duration: 0.3,
                        ease: "power2.out",
                      });
                    }}
                  >
                    See Pricing
                  </Button>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </div>
      {/* Dashboard Image */}
      <div
        ref={imageRef}
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "80px",
          perspective: "1000px",
          marginBottom: "80px",
          position: "relative",
          minHeight: "400px",
          alignItems: "center",
        }}
      >
        {/* Loading Background Placeholder */}
        {imageLoading && (
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "80%",
              maxWidth: "600px",
              height: "300px",
              background: "linear-gradient(90deg, rgba(114, 92, 255, 0.1) 0%, rgba(114, 92, 255, 0.2) 50%, rgba(114, 92, 255, 0.1) 100%)",
              borderRadius: "20px",
              border: "2px dashed rgba(114, 92, 255, 0.3)",
              zIndex: 1,
            }}
          />
        )}
        {/* Loading Spinner */}
        {imageLoading && (
          <div
            ref={imageLoadingRef}
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "16px",
            }}
          >
            <Spin
              indicator={
                <LoadingOutlined
                  style={{
                    fontSize: 48,
                    color: "#725CFF",
                  }}
                  spin
                />
              }
            />
            <Text
              style={{
                color: "#B0BEC5",
                fontSize: "14px",
                fontWeight: "500",
              }}
            >
              Loading dashboard...
            </Text>
          </div>
        )}

        {/* Dashboard Image */}
        <img
          ref={dashboardImageRef}
          src="/Dashboard.png"
          alt="Hero Image"
          style={{
            maxWidth: "100%",
            height: "auto",
            maxHeight: "400px",
            padding: "0 60px",
            borderRadius: "20px",
            boxShadow: imageLoaded
              ? "0 30px 60px rgba(0,0,0,0.2), 0 10px 30px rgba(0,0,0,0.1)"
              : "none",
            filter: imageLoaded
              ? "drop-shadow(0 4px 20px rgba(114, 92, 255, 0.3))"
              : "none",
            transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
            transformStyle: "preserve-3d",
            willChange: "transform",
            opacity: 0,
          }}
          onLoad={() => {
            // This ensures the image is fully rendered before showing
            if (dashboardImageRef.current) {
              setImageLoaded(true);
              setImageLoading(false);
            }
          }}
          onMouseEnter={(e) => {
            if (imageLoaded) {
              gsap.to(e.currentTarget, {
                scale: 1.05,
                rotationY: 5,
                rotationX: 2,
                z: 50,
                duration: 0.6,
                ease: "power2.out",
                transformOrigin: "center center",
              });
            }
          }}
          onMouseLeave={(e) => {
            if (imageLoaded) {
              gsap.to(e.currentTarget, {
                scale: 1,
                rotationY: 0,
                rotationX: 0,
                z: 0,
                duration: 0.6,
                ease: "power2.out",
              });
            }
          }}
        />
      </div>
    </div>
  );
};

export default LeandingPage;
