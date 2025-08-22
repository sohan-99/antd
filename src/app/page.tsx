"use client";

import Navber from "@/components/Navber";
import SlideBer from "@/components/SlideBer";
import {
  Layout,
  Row,
  Col,
  Card,
  Button,
  Table,
  Typography,
  Space,
  theme,
} from "antd";
import {
  ArrowUpOutlined,
  ArrowDownOutlined,
  MoreOutlined,
} from "@ant-design/icons";
import { Column, Pie } from "@ant-design/plots";

const { Content } = Layout;
const { Title, Text } = Typography;

const Home = () => {
  const { token } = theme.useToken();

  // Sample data for the charts and tables
  const spendingData = [
    { month: "Jan", amount: 4500 },
    { month: "Feb", amount: 6200 },
    { month: "Mar", amount: 5800 },
    { month: "Apr", amount: 7200 },
    { month: "May", amount: 6800 },
    { month: "Jun", amount: 8500 },
    { month: "Jul", amount: 7600 },
    { month: "Aug", amount: 6200 },
    { month: "Sep", amount: 8200 },
    { month: "Oct", amount: 7400 },
    { month: "Nov", amount: 6800 },
    { month: "Dec", amount: 8200 },
  ];

  const transactionColumns = [
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      render: (text: string, record: any) => (
        <Space>
          <div
            style={{
              width: 40,
              height: 40,
              borderRadius: "50%",
              backgroundColor: record.color,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span style={{ color: "white", fontSize: "16px" }}>
              {record.icon}
            </span>
          </div>
          <div>
            <div style={{ fontWeight: 500 }}>{text}</div>
            <Text type="secondary" style={{ fontSize: "12px" }}>
              {record.date}
            </Text>
          </div>
        </Space>
      ),
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
      align: "right" as const,
      render: (amount: number, record: any) => (
        <Text
          style={{
            color: record.type === "income" ? "#52c41a" : "#ff4d4f",
            fontWeight: 500,
          }}
        >
          {record.type === "income" ? "+" : "-"}$
          {Math.abs(amount).toLocaleString()}.00
        </Text>
      ),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status: string) => (
        <Text
          style={{
            color: status === "Completed" ? "#52c41a" : "#faad14",
            fontSize: "12px",
          }}
        >
          {status}
        </Text>
      ),
    },
  ];

  const transactionData = [
    {
      key: "1",
      description: "Bank Transfer",
      amount: 2000,
      date: "Jan 01, 2022",
      status: "Completed",
      type: "income",
      icon: "↗",
      color: "#52c41a",
    },
    {
      key: "2",
      description: "Paypal Account",
      amount: -8000,
      date: "Jan 02, 2022",
      status: "Completed",
      type: "expense",
      icon: "↙",
      color: "#ff4d4f",
    },
    {
      key: "3",
      description: "Bank Transfer",
      amount: 2000,
      date: "Jan 04, 2022",
      status: "Pending",
      type: "income",
      icon: "↗",
      color: "#faad14",
    },
    {
      key: "4",
      description: "Bank Transfer",
      amount: 2000,
      date: "Jan 04, 2022",
      status: "Completed",
      type: "income",
      icon: "↗",
      color: "#52c41a",
    },
  ];

  const categoryData = [
    { label: "Emergency Fund", value: 25, color: "#ff4d4f" },
    { label: "Bank Transfer", value: 30, color: "#1890ff" },
    { label: "Online Purchase", value: 20, color: "#faad14" },
    { label: "Development System", value: 15, color: "#52c41a" },
    { label: "Investment System", value: 10, color: "#722ed1" },
  ];

  // Column chart configuration for Spending Statistics
  const columnConfig = {
    data: spendingData,
    xField: "month",
    yField: "amount",
    height: 200,
    color: ({ month }: { month: string }) =>
      month === "Jun" ? "#722ed1" : "#e6f7ff",
    label: {
      position: "middle",
      style: {
        fill: "#000",
        opacity: 0.6,
      },
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      amount: {
        alias: "Spending Amount",
      },
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
      content: ({ percent }: { percent: number }) => `${(percent * 100).toFixed(0)}%`,
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
    
    <Layout style={{ minHeight: "100vh" }}>
      <Layout.Sider width={280} style={{ background: "#fff" }}>
        <SlideBer />
      </Layout.Sider>
      <Layout>
        <Layout.Header
          style={{ padding: 0, background: "#fff", height: "auto" }}
        >
          <Navber />
        </Layout.Header>
        <Content style={{ padding: "24px", background: "#f5f5f5" }}>
          <Row gutter={[24, 24]}>
            {/* Spending Statistics */}
            <Col xs={24} lg={16}>
              <Card
                title={
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Title level={4} style={{ margin: 0, color: token.secondary900 }}>
                      Spending Statistics
                    </Title>
                    <Space>
                      <Button size="small">2024</Button>
                      <Button icon={<MoreOutlined />} type="text" />
                    </Space>
                  </div>
                }
                style={{ height: "300px" }}
              >
                <Column {...columnConfig} />
              </Card>
            </Col>























            {/* Your Balance */}
            {/* <Col xs={24} lg={8}>
              <Card style={{ height: "300px" }}>
                <div style={{ textAlign: "center", padding: "20px 0" }}>
                  <Text type="secondary">Your balance</Text>
                  <Title
                    level={2}
                    style={{ margin: "8px 0", color: token.colorPrimary }}
                  >
                    $120,435.00
                  </Title>
                  <Text type="secondary" style={{ fontSize: "12px" }}>
                    USD
                  </Text>
                  <div style={{ margin: "24px 0" }}>
                    <Space size="large">
                      <Button
                        type="primary"
                        style={{ borderRadius: "20px", padding: "0 24px" }}
                      >
                        Top Up
                      </Button>
                      <Button
                        style={{ borderRadius: "20px", padding: "0 24px" }}
                      >
                        Transfer
                      </Button>
                    </Space>
                  </div>
                </div>
              </Card>
            </Col> */}

            {/* Total Income & Total Expense */}
            {/* <Col xs={24} sm={12} lg={8}>
              <Card>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "8px",
                  }}
                >
                  <ArrowUpOutlined
                    style={{ color: "#52c41a", marginRight: "8px" }}
                  />
                  <Text type="secondary">Total Income</Text>
                </div>
                <Title level={3} style={{ margin: 0 }}>
                  $50,530.00
                </Title>
                <Text style={{ color: "#52c41a", fontSize: "12px" }}>
                  +8.2% from last month
                </Text>
              </Card>
            </Col> */}

            {/* <Col xs={24} sm={12} lg={8}>
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
            </Col> */}

            {/* Spending by Category */}
            {/* <Col xs={24} lg={8}>
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
            </Col> */}

            {/* Transaction History */}
            {/* <Col xs={24} lg={16}>
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
                      Transaction History
                    </Title>
                    <Space>
                      <Text style={{ fontSize: "12px", color: "#999" }}>
                        1 Jan - 7 Oct 2022
                      </Text>
                      <Button
                        icon={<MoreOutlined />}
                        type="text"
                        size="small"
                      />
                    </Space>
                  </div>
                }
              >
                <Table
                  columns={transactionColumns}
                  dataSource={transactionData}
                  pagination={false}
                  showHeader={false}
                  size="small"
                />
              </Card>
            </Col> */}
          </Row>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Home;