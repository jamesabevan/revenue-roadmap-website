
import ServicePageTemplate from "@/components/services/ServicePageTemplate";

const GoToMarketPage = () => {
  return (
    <ServicePageTemplate
      title="Go-To-Market Strategy"
      subtitle="Confident launches. Real traction."
      intro="A product without a GTM plan is a ship without a compass. We help you define your ICP, tailor your messaging, and launch into the market with purpose."
      benefits={[
        {
          title: "ICP Definition",
          description: "Nail your ideal customer profile."
        },
        {
          title: "Channel Strategy",
          description: "Know where—and how—to show up."
        },
        {
          title: "Compelling Messaging",
          description: "Speak directly to buyer pain points."
        },
        {
          title: "Conversion Metrics",
          description: "Clear goals. Clear outcomes."
        }
      ]}
      steps={[
        { title: "Market Research & ICP Design" },
        { title: "Channel & Message Mapping" },
        { title: "GTM Playbook Creation" },
        { title: "Launch Execution Support" }
      ]}
      ctaText="Launch with confidence"
    />
  );
};

export default GoToMarketPage;
