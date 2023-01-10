import Title from "antd/es/typography/Title";
import Paragraph from "antd/es/typography/Paragraph";

const setClassName = (_name: any) => _name.replace(/ /g, "-");

const educationBlock = ({ educationData }: any) => (
  <>
    {/* <img alt="" className="img" src={`images/${educationData.logo}`} /> */}
    <Title className="highlightSecondary" level={4}>
      {educationData.school_name}
    </Title>
    <Paragraph>
      <b>{educationData.level}</b>
      {educationData.title} ({educationData.year})
    </Paragraph>
  </>
);

export default educationBlock;
