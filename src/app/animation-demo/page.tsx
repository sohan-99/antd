"use client";
import { useState, useRef, useEffect } from "react";
import { Button, Card, Row, Col, Typography, Space, theme } from "antd";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PageTransition from "@/components/PageTransition";
import {
  useFadeIn,
  useStagger,
  useHoverScale,
  useFadeInOnScroll,
} from "@/components/animations/hooks/useGSAP";

const { Title, Paragraph } = Typography;

// Register ScrollTrigger
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const AnimationDemo = () => {
  const { token } = theme.useToken();
  const [animationTrigger, setAnimationTrigger] = useState(0);

  // Animation refs
  const headerRef = useFadeIn(0, 1);
  const cardsRef = useStagger(".demo-card", 0.5);
  const buttonsRef = useStagger(".demo-button", 1);
  const scrollSectionRef = useFadeInOnScroll();
  const hoverCardRefs = [
    useHoverScale(1.05),
    useHoverScale(1.05),
    useHoverScale(1.05),
    useHoverScale(1.05),
  ];

  // Manual animation refs
  const boxRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);

  const triggerBoxAnimation = () => {
    if (boxRef.current) {
      gsap.to(boxRef.current, {
        x: 200,
        rotation: 360,
        backgroundColor: "#ff6b6b",
        duration: 1,
        ease: "bounce.out",
        yoyo: true,
        repeat: 1,
      });
    }
  };

  const triggerTextAnimation = () => {
    if (textRef.current) {
      gsap.fromTo(
        textRef.current.children,
        { opacity: 0, y: 50, rotationX: -90 },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "back.out(1.7)",
        }
      );
    }
  };

  const triggerCircleAnimation = () => {
    if (circleRef.current) {
      const tl = gsap.timeline();
      tl.to(circleRef.current, {
        scale: 1.5,
        rotation: 180,
        duration: 0.5,
        ease: "power2.out",
      })
        .to(circleRef.current, {
          scale: 1,
          rotation: 360,
          backgroundColor: "#4ecdc4",
          duration: 0.5,
          ease: "power2.out",
        })
        .to(circleRef.current, {
          backgroundColor: token.primary500,
          duration: 0.3,
        });
    }
  };

  // Continuous floating animation
  useEffect(() => {
    if (circleRef.current) {
      gsap.to(circleRef.current, {
        y: -20,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
      });
    }
  }, []);

  return (
    <PageTransition>
      <div
        style={{
          padding: "80px 24px 40px",
          minHeight: "100vh",
          backgroundColor: "#f8f9fa",
        }}
      >
        {/* Header Section */}
        <div
          ref={headerRef}
          style={{ textAlign: "center", marginBottom: "60px" }}
        >
          <Title
            level={1}
            style={{ color: token.colorText, marginBottom: "16px" }}
          >
            GSAP Animation Demo
          </Title>
          <Paragraph
            style={{
              fontSize: "18px",
              color: token.colorTextSecondary,
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            Explore the power of GSAP animations integrated throughout the
            application. Smooth transitions, scroll-triggered animations, and
            interactive effects.
          </Paragraph>
        </div>

        {/* Animation Cards */}
        <Row ref={cardsRef} gutter={[24, 24]} style={{ marginBottom: "60px" }}>
          <Col xs={24} sm={12} lg={6}>
            <div ref={hoverCardRefs[0]}>
              <Card
                className="demo-card"
                style={{
                  height: "200px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div style={{ textAlign: "center" }}>
                  <Title level={4}>Fade In</Title>
                  <Paragraph>Smooth fade in animations on page load</Paragraph>
                </div>
              </Card>
            </div>
          </Col>
          <Col xs={24} sm={12} lg={6}>
            <div ref={hoverCardRefs[1]}>
              <Card
                className="demo-card"
                style={{
                  height: "200px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div style={{ textAlign: "center" }}>
                  <Title level={4}>Stagger</Title>
                  <Paragraph>Sequential animations with delay</Paragraph>
                </div>
              </Card>
            </div>
          </Col>
          <Col xs={24} sm={12} lg={6}>
            <div ref={hoverCardRefs[2]}>
              <Card
                className="demo-card"
                style={{
                  height: "200px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div style={{ textAlign: "center" }}>
                  <Title level={4}>Hover Effects</Title>
                  <Paragraph>Interactive hover animations</Paragraph>
                </div>
              </Card>
            </div>
          </Col>
          <Col xs={24} sm={12} lg={6}>
            <div ref={hoverCardRefs[3]}>
              <Card
                className="demo-card"
                style={{
                  height: "200px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div style={{ textAlign: "center" }}>
                  <Title level={4}>Scroll Trigger</Title>
                  <Paragraph>Animations triggered by scrolling</Paragraph>
                </div>
              </Card>
            </div>
          </Col>
        </Row>

        {/* Interactive Animation Controls */}
        <Card style={{ marginBottom: "60px", padding: "40px" }}>
          <Title
            level={3}
            style={{ textAlign: "center", marginBottom: "40px" }}
          >
            Interactive Animation Controls
          </Title>

          <Row gutter={[48, 48]} align="middle">
            <Col xs={24} md={12}>
              <Space
                direction="vertical"
                size="large"
                style={{ width: "100%" }}
              >
                <div ref={buttonsRef} style={{ textAlign: "center" }}>
                  <Space wrap>
                    <Button
                      className="demo-button"
                      type="primary"
                      onClick={triggerBoxAnimation}
                    >
                      Animate Box
                    </Button>
                    <Button
                      className="demo-button"
                      onClick={triggerTextAnimation}
                    >
                      Animate Text
                    </Button>
                    <Button
                      className="demo-button"
                      onClick={triggerCircleAnimation}
                    >
                      Animate Circle
                    </Button>
                  </Space>
                </div>

                {/* Animation Elements */}
                <div
                  style={{
                    height: "200px",
                    position: "relative",
                    backgroundColor: "#f0f0f0",
                    borderRadius: "8px",
                    overflow: "hidden",
                  }}
                >
                  <div
                    ref={boxRef}
                    style={{
                      width: "60px",
                      height: "60px",
                      backgroundColor: token.primary500,
                      position: "absolute",
                      top: "70px",
                      left: "20px",
                      borderRadius: "8px",
                    }}
                  />

                  <div
                    ref={circleRef}
                    style={{
                      width: "80px",
                      height: "80px",
                      backgroundColor: token.primary500,
                      position: "absolute",
                      top: "60px",
                      right: "50px",
                      borderRadius: "50%",
                    }}
                  />
                </div>
              </Space>
            </Col>

            <Col xs={24} md={12}>
              <div
                ref={textRef}
                style={{
                  fontSize: "24px",
                  fontWeight: "bold",
                  textAlign: "center",
                  height: "200px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <div>GSAP</div>
                <div>Animation</div>
                <div>Demo</div>
              </div>
            </Col>
          </Row>
        </Card>

        {/* Scroll Triggered Section */}
        <div ref={scrollSectionRef}>
          <Card
            style={{
              padding: "60px 40px",
              textAlign: "center",
              backgroundColor: token.primary500,
              color: "white",
            }}
          >
            <Title level={2} style={{ color: "white", marginBottom: "24px" }}>
              Scroll Triggered Animation
            </Title>
            <Paragraph
              style={{ fontSize: "18px", color: "rgba(255, 255, 255, 0.9)" }}
            >
              This section animates when it comes into view during scrolling.
              The animation is triggered by ScrollTrigger plugin.
            </Paragraph>
            <Button
              size="large"
              style={{
                backgroundColor: "white",
                color: token.primary500,
                border: "none",
                marginTop: "20px",
              }}
            >
              Scroll Triggered Button
            </Button>
          </Card>
        </div>

        {/* Additional scroll content to test scroll triggers */}
        <div
          style={{
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Card
            style={{ padding: "40px", textAlign: "center", maxWidth: "500px" }}
          >
            <Title level={3}>Keep Scrolling</Title>
            <Paragraph>
              Scroll back up to see the animations trigger again. GSAP's
              ScrollTrigger provides smooth, performant scroll-based animations.
            </Paragraph>
          </Card>
        </div>
      </div>
    </PageTransition>
  );
};

export default AnimationDemo;
