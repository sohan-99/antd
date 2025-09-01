"use client";
import { Col, Flex, Row, Space, theme, Grid } from "antd";
import { Typography } from "antd";
import Image from "next/image";
import {
  useFadeInOnScroll,
  useScrollStagger,
  useHoverScale,
} from "./animations/hooks/useGSAP";

export default function Benefit2() {
  const { token } = theme.useToken();

  const { useBreakpoint } = Grid;
  const screens = useBreakpoint();

  const { Title, Paragraph } = Typography;

  // Animation refs
  const headerRef = useFadeInOnScroll();
  const featuresRef = useScrollStagger(".feature-item");
  const imageRef = useFadeInOnScroll();
  const iconHoverRefs = [
    useHoverScale(1.1),
    useHoverScale(1.1),
    useHoverScale(1.1),
  ];

  const paddingInline = screens.lg
    ? "120px"
    : screens.md
    ? "32px"
    : screens.sm
    ? "24px"
    : "20px";
  const paddingTop = screens.lg ? "80px" : screens.md ? "80px" : "80px";

  const features = [
    {
      icon: "/empty-wallet-time.svg",
      title: "Automatic Invoice Payment",
      description:
        "Automatic payments help you to arrange payments on a certain date without doing it manually again.",
    },
    {
      icon: "/document-text.svg",
      title: "Clear payment history",
      description:
        "Clear payment history helps you to track your business expenses on specific dates.",
    },
    {
      icon: "/cards.svg",
      title: "Use of multi-card payments",
      description:
        "Have more than one debit or credit card? Don't worry, we support payments using more than one card.",
    },
  ];

  return (
    <div
      style={{
        padding: `${paddingTop} ${paddingInline}`,
        backgroundColor: "#ffffff",
      }}
    >
      <Flex ref={headerRef} justify="center" align="center">
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

      <Row
        style={{ marginTop: "64px", alignItems: "center" }}
        gutter={[32, 32]}
      >
        <Col xs={24} sm={24} md={24} lg={12} xl={12}>
          <Space
            ref={featuresRef}
            direction="vertical"
            size="middle"
            style={{ display: "flex", paddingRight: screens.xs ? "0" : "40px" }}
          >
            {features.map((feature, index) => (
              <Flex key={index} className="feature-item" align="flex-start">
                <div ref={iconHoverRefs[index]}>
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
                      src={feature.icon}
                      alt={`Benefit ${index + 1}`}
                      width={24}
                      height={24}
                      style={{ margin: 0 }}
                    />
                  </Flex>
                </div>
                <div
                  style={{
                    color: token.secondary400,
                    marginLeft: "20px",
                    flex: 1,
                  }}
                >
                  <Title level={3} style={{ margin: 0, marginBottom: "8px" }}>
                    {feature.title}
                  </Title>
                  <Paragraph style={{ margin: 0 }}>
                    {feature.description}
                  </Paragraph>
                </div>
              </Flex>
            ))}
          </Space>
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
