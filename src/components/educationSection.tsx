import Title from "antd/es/typography/Title";
import Divider from "antd/es/divider";
import EducationBlock from "./education";

const educationSection = ({ educationList }: any) => (
  <section className="education" data-sr="wait 0.3s, enter left">
    <Divider orientation="right">
      <Title level={2}>EDUCATION</Title>
    </Divider>
    {educationList &&
      educationList.map((education: any) => (
        <EducationBlock key={education.school_name} educationData={education} />
      ))}
  </section>
);

export default educationSection;
