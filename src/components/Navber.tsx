import React from "react";
import { Input, Avatar, Badge, Row, theme, Flex } from "antd";
import { SearchOutlined, UserOutlined } from "@ant-design/icons";

const Navbar = () => {
  const { token } = theme.useToken();

  return (
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
        <Input
          placeholder="Search something here"
          prefix={<SearchOutlined />}
          style={{
            width: "492px",
            borderRadius: "88px",
            borderColor: token.colorBorderSecondary,
          }}
        />
        <Row align="middle" style={{ gap: "16px" }}>
          <div style={{ position: "relative", display: "inline-block" }}>
            <img
              src="/notification.svg"
              alt="Logo"
              style={{
                width: "32px",
                height: "32px",
                border: "2px solid",
                borderColor: token.secondary200,
                borderRadius: "50%",
                padding: "4px",
              }}
            />
            <span
              style={{
                position: "absolute",
                top: "-2px",
                right: "-2px",
                width: "8px",
                height: "8px",
                backgroundColor: "#ff4d4f",
                borderRadius: "50%",
                zIndex: 10,
                border: "2px solid white",
              }}
            />
          </div>
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
        </Row>
      </Flex>
    </Row>
  );
};

export default Navbar;
