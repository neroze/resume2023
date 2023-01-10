import Avatar from "antd/es/avatar/avatar";
import Paragraph from "antd/es/typography/Paragraph";
import Title from "antd/es/typography/Title";

export default () => (
  <section>
    <Paragraph>
      <Title level={1}>Niraj Maharjan</Title>
      <Title level={4}>KATHMANDU, NEPAL</Title>
      <i>
        neerooze@gmail.com
        <br /> +977 - 9849135267
      </i>
    </Paragraph>
    <Paragraph style={{ paddingTop: "0.5rem" }}>
      <Avatar
        size={{ md: 80, lg: 100, xl: 150, xxl: 200 }}
        shape="square"
        src="https://avatars1.githubusercontent.com/u/352001?s=150&u=a8500024023d5df64081d6aa864ed7699309f5a5&v=4"
      />
    </Paragraph>
  </section>
);
