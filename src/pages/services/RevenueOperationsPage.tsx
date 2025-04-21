
import ServicePageTemplate from "@/components/services/ServicePageTemplate";

const RevenueOperationsPage = () => {
  return (
    <ServicePageTemplate
      title="Revenue Operations"
      subtitle="Make your revenue engine hum."
      intro="Behind every great sales org is a clean, well-oiled RevOps machine. We unify your systems, metrics, and operations so you can make faster, better revenue decisions."
      benefits={[
        {
          title: "Aligned Systems",
          description: "CRM, marketing, and CS data in sync."
        },
        {
          title: "Real-Time Reporting",
          description: "Clarity on KPIs and performance."
        },
        {
          title: "Process Automation",
          description: "Scale efficiently with smarter workflows."
        },
        {
          title: "Tool Stack Optimization",
          description: "Get the most from your tech."
        }
      ]}
      steps={[
        { title: "RevOps Audit" },
        { title: "Data & System Cleanup" },
        { title: "Metrics Framework Setup" },
        { title: "Automation & Enablement" }
      ]}
      ctaText="Streamline your RevOps"
    />
  );
};

export default RevenueOperationsPage;
