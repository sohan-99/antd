"use client";

import Navber from "@/components/Navber";
import SlideBer from "@/components/SlideBer";
import { Row } from "antd";

const Home = () => {
  return (
    <Row
      style={{
        height: "100vh",
        width: "100%",
        display: "flex-start",
        alignItems: "flex-start",
        // justifyContent: "center",
      }}
    >
      <Row>
        <SlideBer />
      </Row>
      <Row>
        <Navber />
      </Row>
    </Row>
  );
};

export default Home;
