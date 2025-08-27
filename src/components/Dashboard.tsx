"use client";

import React from "react";
import {
  Row,
  Col,
  Card,
  Button,
  Typography,
  Space,
  theme,
  Flex,
  Table,
} from "antd";
import {
  ArrowUpOutlined,
  ArrowDownOutlined,
  MoreOutlined,
  RightOutlined,
  LeftOutlined,
  EllipsisOutlined,
  CalendarOutlined,
  BankOutlined,
  PayCircleOutlined,
} from "@ant-design/icons";
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
    { label: "Employees Salary", value: 44, color: "#ff85c0", amount: 8000.0 },
    { label: "Material Supplies", value: 55, color: "#ffb3d9", amount: 2130.0 },
    { label: "Company tax", value: 41, color: "#d9b3ff", amount: 1510.0 },
    {
      label: "Maintenance system",
      value: 17,
      color: "#5b2c87",
      amount: 2245.0,
    },
    {
      label: "Development System",
      value: 15,
      color: "#40a9ff",
      amount: 4385.0,
    },
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
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "40%",
        borderRadius: 4,
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
        formatter: (value: number) => `$${value / 1000}K`,
      },
    },
    fill: {
      opacity: 1,
      colors: spendingData.map((item) => "#725CFF"),
    },
    tooltip: {
      y: {
        formatter: function (val: number) {
          return val === 15030 ? "Expense $15,030" : "$ " + val + " thousands";
        },
      },
      custom: function ({ dataPointIndex }: { dataPointIndex: number }) {
        if (dataPointIndex === 5) {
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

  // ApexCharts Donut Chart configuration for Spending by Category (similar to Angular example)
  const donutChartOptions = {
    series: categoryData.map((item) => item.value),
    chart: {
      width: 380,
      type: "donut" as const,
      background: "transparent",
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    fill: {
      type: "gradient" as const,
      colors: categoryData.map((item) => item.color),
    },
    legend: {
      position: "bottom" as const,
      formatter: function (val: string, opts: any) {
        return val + " - " + opts.w.globals.series[opts.seriesIndex];
      },
    },
    labels: categoryData.map((item) => item.label),
    colors: categoryData.map((item) => item.color),
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom" as const,
          },
        },
      },
    ],
    plotOptions: {
      pie: {
        donut: {
          size: "60%",
        },
      },
    },
    tooltip: {
      y: {
        formatter: function (val: number, opts: any) {
          const label = categoryData[opts.seriesIndex]?.label || "Unknown";
          const amount = categoryData[opts.seriesIndex]?.amount || 0;
          return `${label}: $${amount.toLocaleString("en-US", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}`;
        },
      },
    },
  };

  // Pie chart configuration for Spending by Category (keeping the old one as backup)
  const pieConfig = {
    appendPadding: 10,
    data: categoryData,
    angleField: "value",
    colorField: "label",
    radius: 0.9,
    innerRadius: 0.6,
    color: categoryData.map((item) => item.color),
    label: false,
    interactions: [{ type: "element-selected" }, { type: "element-active" }],
    statistic: {
      title: {
        style: {
          whiteSpace: "pre-wrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          fontSize: 14,
          color: "#8c8c8c",
        },
        content: "Overall Spending",
      },
      content: {
        style: {
          whiteSpace: "pre-wrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          fontSize: 24,
          fontWeight: 600,
          color: "#262626",
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
            <Flex style={{ justifyContent: "space-between", width: "100%" }}>
              <Text
                style={{ color: token.secondary500, fontSize: "19px" }}
                type="secondary"
              >
                Spending Statistics
              </Text>
              <Space>
                <Button icon={<LeftOutlined />} type="text" />
                <Button size="small">2024</Button>
                <Button icon={<RightOutlined />} type="text" />
              </Space>
            </Flex>
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
            height: "300px",
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
          <Text
            style={{
              fontSize: "12px",
              color: "#52c41a",
              marginTop: "4px",
              display: "block",
            }}
          >
            increase compared to last week
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
      <Col xs={48} sm={24} lg={16}>
        <Card>
          <Flex gap="middle" align="center" justify="space-between">
            <Text
              style={{ color: token.secondary500, fontSize: "19px" }}
              type="secondary"
            >
              Total Income
            </Text>
            <Button
              disabled
              style={{
                backgroundColor: "#F6F7F9",
                height: "42px",
                width: "42px",
                cursor: "default",
              }}
            >
              <ArrowUpOutlined style={{ color: "#52c41a" }} />
            </Button>
            <Text
              style={{ color: token.secondary500, fontSize: "19px" }}
              type="secondary"
            >
              Total Expense
            </Text>
            <Button
              disabled
              style={{
                backgroundColor: "#F6F7F9",
                height: "42px",
                width: "42px",
                cursor: "default",
              }}
            >
              <ArrowDownOutlined style={{ color: "#FF4423" }} />
            </Button>
          </Flex>
          <Flex style={{ gap: "160px" }}>
            <Title
              level={2}
              style={{
                margin: "20px 0 0px 0",
                color: token.secondary500,
                fontSize: "32px",
              }}
            >
              $50,530.00{" "}
              <Text
                type="secondary"
                style={{ fontSize: "12px", color: token.secondary300 }}
              >
                (USD)
              </Text>
            </Title>
            <Title
              level={2}
              style={{
                margin: "20px 0 20px 0",
                color: token.secondary500,
                fontSize: "32px",
              }}
            >
              $19,760.00{" "}
              <Text
                type="secondary"
                style={{ fontSize: "12px", color: token.secondary300 }}
              >
                (USD)
              </Text>
            </Title>
          </Flex>
          <Flex style={{ gap: "160px" }}>
            <Text style={{ color: token.success600, fontSize: "12px" }}>
              +8.2%{" "}
              <span style={{ color: token.secondary300 }}>
                increase compared to last week
              </span>
            </Text>
            <Text style={{ color: token.error600, fontSize: "12px" }}>
              10%{" "}
              <span style={{ color: token.secondary300 }}>
                decrease compared to last week
              </span>
            </Text>
          </Flex>
        </Card>
        {/*  Transaction History) */}
        <Card
          style={{ marginTop: "24px" }}
          title={
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Title level={5} style={{ margin: 0 }}>
                Transaction History
              </Title>
              <Space>
                <Button
                  style={{ color: token.secondary500 }}
                  icon={<CalendarOutlined />}
                >
                  <Text style={{ fontSize: "12px", color: token.secondary500 }}>
                    1Jan-1Feb 2025
                  </Text>
                </Button>
              </Space>
            </div>
          }
        >
          <Table
            columns={[
              {
                title: "Transactions",
                dataIndex: "description",
                key: "description",
                render: (text, record) => (
                  <Space align="center">
                    <div
                      style={{
                        width: "40px",
                        height: "60px",
                        borderRadius: "8px",
                        backgroundColor: record.iconBg || "#f0f0f0",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {record.icon}
                    </div>
                    <Text style={{ fontWeight: 500 }}>{text}</Text>
                  </Space>
                ),
              },
              {
                title: "Date",
                dataIndex: "date",
                key: "date",
                render: (text) => (
                  <Text style={{ color: "#8c8c8c" }}>{text}</Text>
                ),
              },
              {
                title: "Amount",
                dataIndex: "amount",
                key: "amount",
                align: "right" as const,
                render: (text) => (
                  <Text style={{ fontWeight: 600 }}>${text}</Text>
                ),
              },
              {
                title: "Status",
                dataIndex: "status",
                key: "status",
                render: (text, record) => (
                  <Space align="center">
                    <div
                      style={{
                        width: "8px",
                        height: "8px",
                        borderRadius: "50%",
                        backgroundColor: record.statusColor || "#52c41a",
                      }}
                    />
                    <Text style={{ fontSize: "14px" }}>{text}</Text>
                  </Space>
                ),
              },
            ]}
            dataSource={[
              {
                key: "1",
                description: "Bank Transfer",
                date: "Jan 01, 2022",
                amount: "2,000.00",
                status: "Completed",
                icon: (
                  <BankOutlined
                    style={{ color: "#52c41a", fontSize: "20px" }}
                  />
                ),
                iconBg: "#f6ffed",
                statusColor: "#52c41a",
              },
              {
                key: "2",
                description: "Paypal Account",
                date: "Jan 04, 2022",
                amount: "2,000.00",
                status: "Pending",
                icon: (
                  <PayCircleOutlined
                    style={{ color: "#1890ff", fontSize: "20px" }}
                  />
                ),
                iconBg: "#e6f7ff",
                statusColor: "#faad14",
              },
              {
                key: "3",
                description: "Bank Transfer",
                date: "Jan 06, 2022",
                amount: "2,000.00",
                status: "On Hold",
                icon: (
                  <BankOutlined
                    style={{ color: "#ff4d4f", fontSize: "20px" }}
                  />
                ),
                iconBg: "#fff2f0",
                statusColor: "#ff4d4f",
              },
            ]}
            pagination={false}
            showHeader={true}
            size="small"
          />
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
              <Title
                level={5}
                style={{ margin: 0, fontSize: "16px", fontWeight: 600 }}
              >
                Spend by category
              </Title>
              <Button icon={<MoreOutlined />} type="text" size="small" />
            </div>
          }
        >
          <div style={{ height: "250px", marginBottom: "24px" }}>
            <ReactApexChart
              options={donutChartOptions}
              series={donutChartOptions.series}
              type="donut"
              height={250}
            />
          </div>
          <div style={{ marginTop: "24px" }}>
            {categoryData.map((item, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "16px",
                  padding: "0 4px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div
                    style={{
                      width: "12px",
                      height: "12px",
                      backgroundColor: item.color,
                      borderRadius: "50%",
                      marginRight: "12px",
                    }}
                  />
                  <Text style={{ fontSize: "14px", color: "#262626" }}>
                    {item.label}
                  </Text>
                </div>
                <Text
                  style={{
                    fontSize: "14px",
                    fontWeight: 600,
                    color: "#262626",
                  }}
                >
                  $
                  {item.amount.toLocaleString("en-US", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
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
