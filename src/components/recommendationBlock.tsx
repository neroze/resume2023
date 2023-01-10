import Title from "antd/es/typography/Title";
import Avatar from "antd/es/avatar/avatar";
import Paragraph from "antd/es/typography/Paragraph";

import alaster from "../images/alaster.jpg";
import dave from "../images/dave.jpg";
import jason from "../images/jason.jpg";
import thom from "../images/thom.jpg";
import daniel from "../images/daniel.png";
import terry from "../images/terry.png";

const profilePic: any = { alaster, dave, jason, thom, daniel, terry };

export const recommendationBlock = ({ recommendationData }: any) => (
  <>
    <Avatar
      size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
      // src={`../assets/images/${recommendationData.profile_pic}`}
      src={profilePic[recommendationData.profile_pic]}
    />
    <Title level={3} className="highlight">
      {recommendationData.client_name}
    </Title>
    <Paragraph>
      {recommendationData.client_position &&
        recommendationData.client_position.map((position: any) => (
          <span className=" client-position" key={position}>
            {position}
            <br />
          </span>
        ))}
    </Paragraph>
    <Paragraph>{recommendationData.recommendation}</Paragraph>
  </>
);

export default recommendationBlock;
