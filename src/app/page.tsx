"use client";
import React from "react";
import { HomeOutlined, BarChartOutlined, FileTextOutlined, ShopOutlined, 
         DollarOutlined, MailOutlined, TeamOutlined, SettingOutlined, 
         QuestionCircleOutlined, LogoutOutlined, 
         MoonOutlined} from '@ant-design/icons';
import { Flex, Menu, Row } from "antd";

const Home = () => {
  const mainMenuItems = [
    { key: 'dashboard', icon: <HomeOutlined />, label: 'Dashboard' },
    { key: 'insight', icon: <BarChartOutlined />, label: 'Insight' },
    { key: 'invoices', icon: <FileTextOutlined />, label: 'Invoices' },
    { key: 'products', icon: <ShopOutlined />, label: 'Products' },
    { key: 'reimburse', icon: <DollarOutlined />, label: 'Reimburse' },
    { key: 'inbox', icon: <MailOutlined />, label: 'Inbox' },
    { key: 'peopleTeams', icon: <TeamOutlined />, label: 'People & Teams' },
  ];

  const preferencesMenuItems = [
    { key: 'settings', icon: <SettingOutlined />, label: 'Settings' },
    { key: 'helpCenter', icon: <QuestionCircleOutlined />, label: 'Help Center' },
    { key: 'darkMode', icon: <MoonOutlined />, label: 'Dark Mode', className: 'dark-mode-item' },
  ];

  const logoutMenuItems = [
    { key: 'logout', icon: <LogoutOutlined />, label: 'Log Out' },
  ];

  return (
    <Flex>
      <Flex
        style={{
          height: "100vh",
          width: "286px",
          flexDirection: "column",
        }}
      >
        <Flex
          justify="flex-start"
          align="center"
          gap="small"
          style={{
            padding: "38px 0px 38px 38px",
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
        <div style={{ height: "56px" }} /> {/* 56px space */}
        <Row 
          style={{
           padding: "0px 0px 4px 28px",
            color: "#90A3BF",
          }}
        > Main Menu</Row>
        <Menu
          mode="inline"
          defaultSelectedKeys={['dashboard']}
          style={{ width: 256, borderRight: 0 }}
          items={mainMenuItems.map(item => ({
            key: item.key,
            icon: item.icon,
            label: item.label,
          }))}
        />

        <div style={{ height: "56px" }} /> {/* 56px space */}
        <Row 
          style={{
           padding: "0px 0px 4px 28px",
            color: "#90A3BF",
          }}
        > Preferences</Row>
        <Menu
          mode="inline"
          style={{ width: 256, borderRight: 0 }}
          items={preferencesMenuItems.map(item => ({
            key: item.key,
            icon: item.icon,
            label: item.label,
            className: item.className,
          }))}
        />
         <div style={{ height: "56px" }} /> {/* 56px space */}
        <Menu
          mode="inline"
          style={{ width: 256, borderRight: 0, marginTop: 'auto' }}
          items={logoutMenuItems.map(item => ({
            key: item.key,
            icon: item.icon,
            label: item.label,
          }))}
        />
      </Flex>
      <Flex style={{ flex: 1 }}>
        <h2>vertical</h2>
      </Flex>
    </Flex>
  );
};

export default Home;