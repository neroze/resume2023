import React from "react";
import "./index.css";
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Col, ConfigProvider, Row } from "antd";
import { Layout, theme } from "antd";

import Data from "./data";

// left section
import EducationSection from "./components/educationSection";
import Recommendations from "./components/recommendationSection";

// right section
import Skills from "./components/skills";
// import Frameworks from "./components/frameworks";
// import HybridFrameworks from "./components/hybridFrameworks";
import Experiences from "./components/experiences";
import CoverIntro from "./components/coverIntro";

// social
import Social from "./components/social";
import Info from "./components/info";
import Profile from "./components/profile";

const { Header, Content, Sider } = Layout;

const App: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#747bff",
          fontFamily: "Mukta",
          fontSize: 16,
        },
      }}
    >
      <Layout>
        {/* <Header>Header</Header> */}
        <Content>
          <Row justify="center">
            <Col md={18}>
              <Row
                style={{
                  background: "#FFF",
                  marginTop: "1rem",
                  paddingTop: "1rem",
                  marginBottom: "1rem",
                }}
                className="border-primary"
              >
                <Col
                  xs={24}
                  md={9}
                  style={{ textAlign: "right", paddingRight: 20 }}
                >
                  <Profile />
                  <EducationSection educationList={Data.education} />
                  <Recommendations recommendationList={Data.recommendations} />
                  <Social />
                </Col>
                <Col xs={24} md={15}>
                  {/* <Info /> */}
                  <CoverIntro />
                  <Skills skills={Data.skills} />
                  <Experiences
                    title="Experiences"
                    dataList={Data.experiences}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </Content>
      </Layout>
    </ConfigProvider>
  );
};

export default App;
