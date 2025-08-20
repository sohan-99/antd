"use client";
import React from "react";
import { Button, theme } from "antd";
import { antdTheme } from "@/utils/antd.config";
import { COLORS } from "@/utils/colors";

const { useToken } = theme;

const Home = () => {
  const { token } = useToken();

  return (
    <div className="App">
      <Button type="primary">test</Button>
    </div>
  );
};

export default Home;
