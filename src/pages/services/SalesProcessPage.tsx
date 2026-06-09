
import ServicePageTemplate from "@/components/services/ServicePageTemplate";

const SalesProcessPage = () => {
  return (
    <ServicePageTemplate
      title="Sales Process Optimization"
      subtitle="Transform your pipeline into a conversion engine."
      intro="Your sales process should power growth, not get in the way. We diagnose inefficiencies, identify friction points, and rebuild your sales engine for consistency, clarity, and conversion."
      benefits={[
        {
          title: "Faster Deal Velocity",
          description: "Reduce sales cycle times."
        },
        {
          title: "Higher Win Rates",
          description: "Improve close percentages through process tuning."
        },
        {
          title: "Cleaner CRM",
          description: "Enable better forecasting and pipeline visibility."
        },
        {
          title: "Automation Wins",
          description: "Save time by automating the repetitive."
        }
      ]}
      steps={[
        { title: "Sales Process Audit" },
        { title: "Pipeline Mapping" },
        { title: "Workflow Refinement" },
        { title: "Reporting Alignment" }
      ]}
      ctaText="Request a pipeline audit"
    />
  );
};

export default SalesProcessPage;
