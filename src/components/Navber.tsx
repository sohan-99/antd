"use client";
import React, { useEffect, useRef } from "react";
import { Input, Avatar, Badge, Row, theme, Flex } from "antd";
import { SearchOutlined, UserOutlined } from "@ant-design/icons";
import { gsap } from "gsap";

const Navbar = () => {
  const { token } = theme.useToken();

  // Animation refs
  const navbarRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);
  const userSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial setup
      gsap.set([searchRef.current, userSectionRef.current], {
        opacity: 0,
        y: -20,
      });

      // Animation timeline
      const tl = gsap.timeline();

      tl.to(searchRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
      }).to(
        userSectionRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.3"
      );

      // Search input focus animation
      const searchInput = searchRef.current?.querySelector(".ant-input");
      if (searchInput) {
        searchInput.addEventListener("focus", () => {
          gsap.to(searchRef.current, {
            scale: 1.02,
            duration: 0.2,
            ease: "power2.out",
          });
        });
        searchInput.addEventListener("blur", () => {
          gsap.to(searchRef.current, {
            scale: 1,
            duration: 0.2,
            ease: "power2.out",
          });
        });
      }

      // User avatar hover animation
      const avatar = userSectionRef.current?.querySelector(
        'img[alt="User Avatar"]'
      );
      if (avatar) {
        avatar.addEventListener("mouseenter", () => {
          gsap.to(avatar, { scale: 1.1, duration: 0.2, ease: "power2.out" });
        });
        avatar.addEventListener("mouseleave", () => {
          gsap.to(avatar, { scale: 1, duration: 0.2, ease: "power2.out" });
        });
      }
    }, navbarRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={navbarRef}>
      <Row
        style={{
          width: "100%",
          height: "64px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          padding: "0 20px",
          background: "#fff",
        }}
      >
        <Flex align="center" justify="space-between" gap={240}>
          <div ref={searchRef}>
            <Input
              placeholder="Search something here"
              prefix={<SearchOutlined />}
              style={{
                width: "492px",
                borderRadius: "88px",
                borderColor: token.colorBorderSecondary,
              }}
            />
          </div>
          <div ref={userSectionRef}>
            <Flex align="center" style={{ gap: "16px" }}>
              <img
                src="/notification.svg"
                style={{
                  width: "44px",
                  height: "48px",
                  borderRadius: "50%",
                  border: "2px solid",
                  padding: "3px",
                  borderColor: token.secondary200,
                }}
              />

              <img
                src="/Rectangle 17.svg"
                alt="User Avatar"
                style={{ width: "44px", height: "48px", borderRadius: "50%" }}
              />

              <span style={{ color: token.colorText }}>John Connors</span>
              <img
                src="/arrow-down.svg"
                alt="Icon"
                style={{ width: "32px", height: "32px" }}
              />
            </Flex>
          </div>
        </Flex>
      </Row>
    </div>
  );
};

export default Navbar;
