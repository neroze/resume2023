import Divider from "antd/es/divider";
import Title from "antd/es/typography/Title";
import Paragraph from "antd/es/typography/Paragraph";
import RecommendationBlock from "./recommendationBlock";

const recommendationsSection = ({ recommendationList }: any) => (
  <section className="people recommendation-section">
    <Divider orientation="right">
      <Title level={2}>Recomendation</Title>
    </Divider>
    <Paragraph>
      {recommendationList &&
        recommendationList.map((recommendation: any) => (
          <RecommendationBlock
            key={recommendation.client_name}
            recommendationData={recommendation}
          />
        ))}
    </Paragraph>
  </section>
);

export default recommendationsSection;
