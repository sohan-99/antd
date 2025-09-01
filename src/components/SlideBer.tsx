"use client";
import React, { useEffect, useRef } from "react";
import {
  HomeOutlined,
  BarChartOutlined,
  FileTextOutlined,
  ShopOutlined,
  DollarOutlined,
  MailOutlined,
  TeamOutlined,
  SettingOutlined,
  QuestionCircleOutlined,
  LogoutOutlined,
  MoonOutlined,
} from "@ant-design/icons";
import { Flex, Menu, Row } from "antd";
import { gsap } from "gsap";

const SlideBer = () => {
  // Animation refs
  const sidebarRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const mainMenuRef = useRef<HTMLDivElement>(null);
  const preferencesRef = useRef<HTMLDivElement>(null);
  const logoutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial setup
      gsap.set(
        [
          logoRef.current,
          mainMenuRef.current,
          preferencesRef.current,
          logoutRef.current,
        ],
        {
          opacity: 0,
          x: -30,
        }
      );

      // Animation timeline
      const tl = gsap.timeline();

      tl.to(logoRef.current, {
        opacity: 1,
        x: 0,
        duration: 0.6,
        ease: "power2.out",
      })
        .to(
          mainMenuRef.current,
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.3"
        )
        .to(
          preferencesRef.current,
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.4"
        )
        .to(
          logoutRef.current,
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.2"
        );

      // Menu items hover animations
      const menuItems = sidebarRef.current?.querySelectorAll(".ant-menu-item");
      if (menuItems) {
        menuItems.forEach((item) => {
          item.addEventListener("mouseenter", () => {
            gsap.to(item, { scale: 1.02, duration: 0.2, ease: "power2.out" });
          });
          item.addEventListener("mouseleave", () => {
            gsap.to(item, { scale: 1, duration: 0.2, ease: "power2.out" });
          });
        });
      }
    }, sidebarRef);

    return () => ctx.revert();
  }, []);
  const mainMenuItems = [
    { key: "dashboard", icon: <HomeOutlined />, label: "Dashboard" },
    { key: "insight", icon: <BarChartOutlined />, label: "Insight" },
    { key: "invoices", icon: <FileTextOutlined />, label: "Invoices" },
    { key: "products", icon: <ShopOutlined />, label: "Products" },
    { key: "reimburse", icon: <DollarOutlined />, label: "Reimburse" },
    { key: "inbox", icon: <MailOutlined />, label: "Inbox" },
    { key: "peopleTeams", icon: <TeamOutlined />, label: "People & Teams" },
  ];

  const preferencesMenuItems = [
    { key: "settings", icon: <SettingOutlined />, label: "Settings" },
    {
      key: "helpCenter",
      icon: <QuestionCircleOutlined />,
      label: "Help Center",
    },
    {
      key: "darkMode",
      icon: <MoonOutlined />,
      label: "Dark Mode",
      className: "dark-mode-item",
    },
  ];

  const logoutMenuItems = [
    { key: "logout", icon: <LogoutOutlined />, label: "Log Out" },
  ];

  return (
    <div ref={sidebarRef}>
      <Flex
        style={{
          flexDirection: "column",
        }}
      >
        <div ref={logoRef}>
          <Flex
            justify="flex-start"
            align="center"
            gap="small"
            style={{
              padding: "28px 0px 0px 38px",
              height: "30px",
              width: "236px",
            }}
          >
            <img
              src="/Logo.svg"
              alt="Spend.in logo"
              style={{ height: "20px", width: "20px", display: "inline-block" }}
            />
            <h2
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                margin: 0,
                fontWeight: 600,
              }}
            >
              Spend.In
            </h2>
          </Flex>
        </div>

        <div ref={mainMenuRef}>
          <Row
            style={{
              padding: "56px 0px 4px 28px",
              color: "#90A3BF",
            }}
          >
            {" "}
            Main Menu
          </Row>
          <Menu
            mode="inline"
            defaultSelectedKeys={["dashboard"]}
            style={{ width: 256, borderRight: 0 }}
            items={mainMenuItems.map((item) => ({
              key: item.key,
              icon: item.icon,
              label: item.label,
            }))}
          />
        </div>

        <div ref={preferencesRef}>
          <Row
            style={{
              padding: "56px 0px 4px 28px",
              color: "#90A3BF",
            }}
          >
            {" "}
            Preferences
          </Row>
          <Menu
            mode="inline"
            style={{ width: 256, borderRight: 0 }}
            items={preferencesMenuItems.map((item) => ({
              key: item.key,
              icon: item.icon,
              label: item.label,
              className: item.className,
            }))}
          />
        </div>

        <div ref={logoutRef}>
          <Menu
            mode="inline"
            style={{ width: 256, borderRight: 0, marginTop: "276px" }}
            items={logoutMenuItems.map((item) => ({
              key: item.key,
              icon: item.icon,
              label: item.label,
            }))}
          />
        </div>
      </Flex>
    </div>
  );
};

export default SlideBer;
