import { Divider } from "antd";
import Row from "antd/es/row";
import Col from "antd/es/col";
import Avatar from "antd/es/avatar/avatar";
import Paragraph from "antd/es/typography/Paragraph";
import Title from "antd/es/typography/Title";

import logpoint from "../images/logpoint.png";
import zegal from "../images/zegal.png";
import quantum from "../images/quantum.png";
import ebpearls from "../images/ebpearls.png";
import snapwire from "../images/snapwire.png";
import togally from "../images/togally.jpg";
import hammers from "../images/3hammers.png";
import mountdigit from "../images/mount-digit.jpg";
import tree from "../images/tree.png";

const logos: any = {
  logpoint,
  zegal,
  hammers,
  quantum,
  ebpearls,
  togally,
  snapwire,
  mountdigit,
  tree,
};
console.log(logos);

const experiences = ({ title, dataList }: any) => (
  <Paragraph>
    <Divider orientation="left">
      <Title level={3}> {title}</Title>
    </Divider>
    <ul style={{ margin: "1rem", padding: "1rem" }}>
      {dataList.map((experience: any) => (
        <li key={`exp${experience.company}`}>
          <>
            <Row>
              <Col span={16}>
                <Title level={4}>
                  {experience.postion} ( {experience.work_year} )
                </Title>
                <Title level={5}>{experience.company}</Title>
                <ul style={{ paddingTop: "5px" }}>
                  {experience.duties.map((duty: any) => (
                    <li key={duty}>{duty}</li>
                  ))}
                </ul>
              </Col>
              <Col span={8} style={{ textAlign: "right" }}>
                <img
                  alt={experience.company}
                  src={logos[experience.company_logo]}
                  width={experience.width || "110"}
                />
              </Col>
            </Row>

            <Divider />
          </>
        </li>
      ))}
    </ul>
  </Paragraph>
);

export default experiences;
