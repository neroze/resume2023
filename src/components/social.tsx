import {
  FacebookOutlined,
  LinkedinOutlined,
  TwitterOutlined,
  GithubOutlined,
} from "@ant-design/icons";

import { ConfigProvider } from "antd";
import FloatButton from "antd/es/float-button";

const social = () => (
  <ConfigProvider
    theme={{
      token: {
        fontSize: 12,
      },
    }}
  >
    <FloatButton.Group shape="square" style={{ right: 24 }}>
      <FloatButton
        icon={<FacebookOutlined />}
        href="https://www.facebook.com/niroze.maharjan"
        target={"_blank"}
      />
      <FloatButton
        icon={<LinkedinOutlined />}
        href="https://np.linkedin.com/pub/niraj-maharjan/31/817/998"
        target={"_blank"}
      />
      <FloatButton
        icon={<TwitterOutlined />}
        href="https://twitter.com/neerooze"
        target={"_blank"}
      />
      <FloatButton
        icon={<GithubOutlined />}
        href="https://github.com/neroze"
        target={"_blank"}
      />
      <FloatButton.BackTop visibilityHeight={500} />
    </FloatButton.Group>
  </ConfigProvider>
);

export default social;
