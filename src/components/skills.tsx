import { Divider } from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import Title from "antd/es/typography/Title";

const Skills = ({ skills }: any) => (
  <section className="skills" data-sr="wait 0.3s, enter right">
    <Divider orientation="left">
      <Title level={2}>SKILLs</Title>
    </Divider>
    <Paragraph>
      <ul style={{ margin: "1rem", padding: "1rem" }}>
        <li>
          <Title level={4}>
            Back End: <span>PHP, NodeJs </span>
          </Title>
          Laravel, CodeIgniter, CakePHP, Wordpress, Durpal, ExpressJS, SailsJS
        </li>
        <li>
          <Title level={4}>Front End:</Title>
          ReactJS, VueJs, Lodash, BackboneJS, HTML5, CSS3, jQuery,
        </li>
        <li>
          <Title level={4}>Build tools:</Title>
          (Gulp, Grunt, Webpack, Rollup)
        </li>
        <li>
          <Title level={4}>Cross platform app development:</Title>
          Appcelerator, React Native, ElectronJS
        </li>
      </ul>
    </Paragraph>
  </section>
);

export default Skills;
