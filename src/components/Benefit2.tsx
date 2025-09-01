"use client";
import { Col, Flex, Row, Space, theme, Grid } from "antd";
import { Typography } from "antd";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Benefit2() {
  const { token } = theme.useToken();
  const { useBreakpoint } = Grid;
  const screens = useBreakpoint();
  const { Title, Paragraph } = Typography;

  // Animation refs
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Benefits items animation
      const benefitItems =
        contentRef.current?.querySelectorAll(".benefit-item");
      if (benefitItems) {
        gsap.fromTo(
          benefitItems,
          { opacity: 0, x: -60 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.2,
            scrollTrigger: {
              trigger: contentRef.current,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // Image animation
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, x: 60, scale: 0.9 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const paddingInline = screens.lg
    ? "120px"
    : screens.md
    ? "32px"
    : screens.sm
    ? "24px"
    : "20px";
  const paddingTop = screens.lg ? "80px" : screens.md ? "80px" : "80px";

  return (
    <div
      ref={containerRef}
      style={{
        padding: `${paddingTop} ${paddingInline}`,
        backgroundColor: "#ffffff",
      }}
    >
      <div ref={headerRef}>
        <Flex justify="center" align="center">
          <div
            style={{
              textAlign: "center",
              maxWidth: screens.xs ? "100%" : "712px",
              paddingInline: screens.xs ? "8px" : 0,
            }}
          >
            <Title
              level={5}
              style={{
                color: token.primary500,
                fontSize: "16px",
                paddingBottom: "10px",
              }}
            >
              WHY USE SPEND.IN
            </Title>
            <Title
              level={2}
              style={{
                color: token.secondary900,
                fontSize: "clamp(24px, 5vw, 40px)",
                margin: 0,
              }}
            >
              Easy, Simple, Affordable
            </Title>
            <Paragraph style={{ color: token.secondary400, fontSize: "20px" }}>
              Our platform helps your business in managing expenses. These are
              some of the reasons why you should use our platform in managing
              business finances.
            </Paragraph>
          </div>
        </Flex>
      </div>

      <Row
        style={{ marginTop: "64px", alignItems: "center" }}
        gutter={[32, 32]}
      >
        <Col xs={24} sm={24} md={24} lg={12} xl={12}>
          <div ref={contentRef}>
            <Space
              direction="vertical"
              size="middle"
              style={{
                display: "flex",
                paddingRight: screens.xs ? "0" : "40px",
              }}
            >
              <div className="benefit-item">
                <Flex align="flex-start">
                  <Flex
                    justify="center"
                    align="center"
                    style={{
                      backgroundColor: token.primary500,
                      borderRadius: "12px",
                      height: "60px",
                      width: "60px",
                      minWidth: "60px",
                      flexShrink: 0,
                    }}
                  >
                    <Image
                      src="/empty-wallet-time.svg"
                      alt="Benefit 1"
                      width={24}
                      height={24}
                      style={{ margin: 0 }}
                    />
                  </Flex>
                  <div
                    style={{
                      color: token.secondary400,
                      marginLeft: "20px",
                      flex: 1,
                    }}
                  >
                    <Title level={3} style={{ margin: 0, marginBottom: "8px" }}>
                      Automatic Invoice Payment
                    </Title>
                    <Paragraph style={{ margin: 0 }}>
                      Automatic payments help you to arrange payments on a
                      certain date without doing it manually again.
                    </Paragraph>
                  </div>
                </Flex>
              </div>

              <div className="benefit-item">
                <Flex align="flex-start">
                  <Flex
                    justify="center"
                    align="center"
                    style={{
                      backgroundColor: token.primary500,
                      borderRadius: "12px",
                      height: "60px",
                      width: "60px",
                      minWidth: "60px",
                      flexShrink: 0,
                    }}
                  >
                    <Image
                      src="/document-text.svg"
                      alt="Benefit 2"
                      width={24}
                      height={24}
                      style={{ margin: 0 }}
                    />
                  </Flex>
                  <div
                    style={{
                      color: token.secondary400,
                      marginLeft: "20px",
                      flex: 1,
                    }}
                  >
                    <Title level={3} style={{ margin: 0, marginBottom: "8px" }}>
                      Clear payment history
                    </Title>
                    <Paragraph style={{ margin: 0 }}>
                      Clear payment history helps you to track your business
                      expenses on specific dates.
                    </Paragraph>
                  </div>
                </Flex>
              </div>

              <div className="benefit-item">
                <Flex align="flex-start">
                  <Flex
                    justify="center"
                    align="center"
                    style={{
                      backgroundColor: token.primary500,
                      borderRadius: "12px",
                      height: "60px",
                      width: "60px",
                      minWidth: "60px",
                      flexShrink: 0,
                    }}
                  >
                    <Image
                      src="/cards.svg"
                      alt="Benefit 3"
                      width={24}
                      height={24}
                      style={{ margin: 0 }}
                    />
                  </Flex>
                  <div
                    style={{
                      color: token.secondary400,
                      marginLeft: "20px",
                      flex: 1,
                    }}
                  >
                    <Title level={3} style={{ margin: 0, marginBottom: "8px" }}>
                      Use of multi-card payments
                    </Title>
                    <Paragraph style={{ margin: 0 }}>
                      Have more than one debit or credit card? Don&apos;t worry,
                      we support payments using more than one card.
                    </Paragraph>
                  </div>
                </Flex>
              </div>
            </Space>
          </div>
        </Col>
        <Col xs={24} sm={24} md={24} lg={12} xl={12}>
          <div ref={imageRef}>
            <Image
              src="/Content.png"
              alt="Benefit 1"
              width={600}
              height={400}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </Col>
      </Row>
    </div>
  );
}
