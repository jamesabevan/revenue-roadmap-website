
import ServicePageTemplate from "@/components/services/ServicePageTemplate";

const FractionalCROPage = () => {
  return (
    <ServicePageTemplate
      title="Fractional CRO"
      subtitle="Senior revenue leadership, without the overhead."
      intro="Whether you need a revenue leader to guide the journey—or a fresh perspective on how to scale—we step in as your Fractional CRO. Strategic leadership. Flexible commitment."
      benefits={[
        {
          title: "Executive-Level Insight",
          description: "Access senior sales & strategy leadership."
        },
        {
          title: "Scalable Engagement",
          description: "Part-time support with full-time impact."
        },
        {
          title: "Strategic Accountability",
          description: "Leadership with a revenue-first lens."
        },
        {
          title: "Team Alignment",
          description: "Marketing, sales, and CS on the same page."
        }
      ]}
      steps={[
        { title: "Discovery & Alignment Session" },
        { title: "Strategic Revenue Plan" },
        { title: "Leadership Cadence & Reporting" },
        { title: "Ongoing CRO Support" }
      ]}
      ctaText="Meet your Fractional CRO"
    />
  );
};

export default FractionalCROPage;
