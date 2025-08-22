"use client";

import { Row, Col, Card, Button, Typography, Space, theme } from "antd";
import {
  ArrowUpOutlined,
  ArrowDownOutlined,
  MoreOutlined,
  RightOutlined,
  LeftOutlined,
  EllipsisOutlined,
} from "@ant-design/icons";
import { Pie } from "@ant-design/plots";
import dynamic from "next/dynamic";

// Dynamically import ReactApexChart to avoid SSR issues
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const { Title, Text } = Typography;

const Dashboard = () => {
  const { token } = theme.useToken();

  // Sample data for the charts and tables
  const spendingData = [
    { month: "Jan", amount: 6500 }, // Starting moderate
    { month: "Feb", amount: 8200 }, // Increase
    { month: "Mar", amount: 7800 }, // Slight decrease
    { month: "Apr", amount: 9500 }, // Increase
    { month: "May", amount: 7200 }, // Decrease
    { month: "Jun", amount: 12500 }, // Peak (holiday/vacation spending)
    { month: "Jul", amount: 10800 }, // Decrease from peak
    { month: "Aug", amount: 6800 }, // Significant decrease
    { month: "Sep", amount: 9200 }, // Back to school increase
    { month: "Oct", amount: 8600 }, // Slight decrease
    { month: "Nov", amount: 11200 }, // Holiday shopping increase
    { month: "Dec", amount: 13800 }, // Holiday peak
  ];

  const categoryData = [
    { label: "Emergency Fund", value: 25, color: "#ff4d4f" },
    { label: "Bank Transfer", value: 30, color: "#1890ff" },
    { label: "Online Purchase", value: 20, color: "#faad14" },
    { label: "Development System", value: 15, color: "#52c41a" },
    { label: "Investment System", value: 10, color: "#722ed1" },
  ];

  // ApexCharts configuration for Spending Statistics
  const apexChartOptions = {
    series: [
      {
        name: "Spending",
        data: spendingData.map((item) => item.amount),
      },
    ],
    chart: {
      type: "bar" as const,
      height: 100,
      background: "transparent",
      toolbar: {
        show: false, // This removes the toolbar/menu from inside the chart
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "40%", // Adjusted for better spacing
        borderRadius: 4, // Matches the image's rounded edges
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories: spendingData.map((item) => item.month),
    },
    yaxis: {
      labels: {
        formatter: (value: number) => `$${value / 1000}K`, // Matches "$5K" format in image
      },
    },
    fill: {
      opacity: 1,
      colors: spendingData.map((item) => "#725CFF"), // Consistent purple color from image
    },
    tooltip: {
      y: {
        formatter: function (val: number) {
          return val === 15030 ? "Expense $15,030" : "$ " + val + " thousands";
        },
      },
      custom: function ({ dataPointIndex }: { dataPointIndex: number }) {
        if (dataPointIndex === 5) {
          // "Jun" tooltip
          return `
            <div class="arrow_box">
              <span>Expense</span>
              <span>$15,030</span>
            </div>
          `;
        }
        return false;
      },
    },
    theme: {
      mode: "light" as const,
    },
  };

  // Pie chart configuration for Spending by Category
  const pieConfig = {
    appendPadding: 10,
    data: categoryData,
    angleField: "value",
    colorField: "label",
    radius: 0.8,
    innerRadius: 0.6,
    color: categoryData.map((item) => item.color),
    label: {
      type: "inner",
      offset: "-50%",
      content: ({ percent }: { percent: number }) =>
        `${(percent * 100).toFixed(0)}%`,
      style: {
        textAlign: "center",
        fontSize: 14,
      },
    },
    interactions: [{ type: "element-selected" }, { type: "element-active" }],
    statistic: {
      title: false,
      content: {
        style: {
          whiteSpace: "pre-wrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          fontSize: 16,
        },
        content: "$19,760.00",
      },
    },
  };

  return (
    <Row gutter={[24, 24]}>
      {/* Spending Statistics */}
      <Col xs={24} lg={16}>
        <Card
          title={
            <Space style={{ justifyContent: "space-between", width: "100%" }}>
              <Title level={4} style={{ margin: 0 }}>
                Spending Statistics
              </Title>
              <Space>
                <Button icon={<LeftOutlined />} type="text" />
                <Button size="small">2024</Button>
                <Button icon={<RightOutlined />} type="text" />
              </Space>
            </Space>
          }
          style={{ height: "300px" }}
        >
          <ReactApexChart
            options={apexChartOptions}
            series={apexChartOptions.series}
            type="bar"
            height={200}
          />
        </Card>
      </Col>

      {/* Your Balance */}
      <Col xs={24} lg={8}>
        <Card
          style={{
            height: "260px",
            padding: "0px 14px 14px 10px",
            background: "#FFFFFF",
          }}
        >
          <Space
            align="center"
            style={{ justifyContent: "space-between", width: "100%" }}
          >
            <Text style={{ color: token.secondary500, fontSize: "19px" }}>
              Your balance
            </Text>
            <Button icon={<EllipsisOutlined />} type="text" size="large" />
          </Space>
          <Title
            level={2}
            style={{
              margin: "30px 0 0 0",
              color: token.secondary500,
              fontSize: "32px",
            }}
          >
            $120,435.00{" "}
            <Text
              type="secondary"
              style={{ fontSize: "12px", color: token.secondary300 }}
            >
              (USD)
            </Text>
          </Title>
          <Text
            type="secondary"
            style={{ fontSize: "12px", color: token.secondary300 }}
          >
            From Jan 01, 2022 to Jan 31, 2022
          </Text>
          <div style={{ margin: "24px 0", textAlign: "center" }}>
            <Space size="large">
              <Button
                type="primary"
                style={{
                  borderRadius: "10px",
                  padding: "20px 20px",
                }}
                icon={<img src="/money-recive.svg" alt="Top Up" />}
              >
                Top Up
              </Button>
              <Button
                style={{
                  borderRadius: "10px",
                  padding: "20px 20px",
                  borderColor: token.primary500,
                  color: token.secondary500,
                }}
                icon={<img src="/money-send.svg" alt="Transfer" />}
              >
                Transfer
              </Button>
            </Space>
          </div>
        </Card>
      </Col>

      {/* Total Income & Total Expense */}
      <Col xs={24} sm={12} lg={8}>
        <Card>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "8px",
            }}
          >
            <ArrowUpOutlined style={{ color: "#52c41a", marginRight: "8px" }} />
            <Text type="secondary">Total Income</Text>
          </div>
          <Title level={3} style={{ margin: 0 }}>
            $50,530.00
          </Title>
          <Text style={{ color: "#52c41a", fontSize: "12px" }}>
            +8.2% from last month
          </Text>
        </Card>
      </Col>

      <Col xs={24} sm={12} lg={8}>
        <Card>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "8px",
            }}
          >
            <ArrowDownOutlined
              style={{ color: "#ff4d4f", marginRight: "8px" }}
            />
            <Text type="secondary">Total Expense</Text>
          </div>
          <Title level={3} style={{ margin: 0 }}>
            $19,760.00
          </Title>
          <Text style={{ color: "#ff4d4f", fontSize: "12px" }}>
            -2.1% from last month
          </Text>
        </Card>
      </Col>

      {/* Spending by Category */}
      <Col xs={24} lg={8}>
        <Card
          title={
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Title level={5} style={{ margin: 0 }}>
                Spending by Category
              </Title>
              <Button icon={<MoreOutlined />} type="text" size="small" />
            </div>
          }
        >
          <Pie {...pieConfig} />
          <div style={{ marginTop: "16px" }}>
            {categoryData.map((item, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "8px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div
                    style={{
                      width: "8px",
                      height: "8px",
                      backgroundColor: item.color,
                      borderRadius: "50%",
                      marginRight: "8px",
                    }}
                  />
                  <Text style={{ fontSize: "12px" }}>{item.label}</Text>
                </div>
                <Text style={{ fontSize: "12px", fontWeight: 500 }}>
                  ${((19760 * item.value) / 100).toFixed(2)}
                </Text>
              </div>
            ))}
          </div>
        </Card>
      </Col>
    </Row>
  );
};

export default Dashboard;
