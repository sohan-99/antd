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
        <Flex align="center" style={{ gap: "16px" }}>
     
          <img src="/notification.svg"
          style={{ width: "44px",
          height: "48px",
           borderRadius: "50%" ,
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
      </Flex>
    </Row>
  );
};

export default Navbar;
