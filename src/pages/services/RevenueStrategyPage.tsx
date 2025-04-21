
import ServicePageTemplate from "@/components/services/ServicePageTemplate";

const RevenueStrategyPage = () => {
  return (
    <ServicePageTemplate
      title="Revenue Strategy Development"
      subtitle="Align your vision. Maximize your potential."
      intro="A strong revenue strategy isn't a luxury—it's the foundation of growth. Whether you're gearing up for scale or course-correcting mid-flight, we help you build a clear, data-driven plan for sustainable success."
      benefits={[
        {
          title: "Clarity of Direction",
          description: "Align leadership and teams around measurable goals."
        },
        {
          title: "Segment-Smart Planning",
          description: "Identify your most valuable customers and target with precision."
        },
        {
          title: "Pricing Confidence",
          description: "Build pricing models that reflect value and market position."
        },
        {
          title: "Growth Prioritization",
          description: "Focus on the tactics that actually move revenue."
        }
      ]}
      steps={[
        { title: "Discovery Workshop" },
        { title: "Market & Customer Analysis" },
        { title: "Strategic Planning Session" },
        { title: "Delivery of Actionable Revenue Plan" }
      ]}
      ctaText="Start your strategy session"
    />
  );
};

export default RevenueStrategyPage;
