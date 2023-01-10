import Paragraph from "antd/es/typography/Paragraph";

const intro = `Experienced Engineering Manager / Lead Software Engineer with a demonstrated history of working in the
web software development industry. Skilled in JavaScript, PHP, ReactJS, VueJS,
MySQL, MongoDB, Laravel, Codeigniter, Cake PHP, Titanium Mobile, PhoneGap,
WordPress, Ionic, and more awesome technologies. Strong engineering
professional with a Bachelor’s Degree focused in Information Technology /
Computing from <b class="highlight">University of Portsmouth</b>.`;

const CoverIntro = () => (
  <Paragraph className="cover_info">
    <blockquote dangerouslySetInnerHTML={{ __html: intro }}></blockquote>
  </Paragraph>
);

export default CoverIntro;
