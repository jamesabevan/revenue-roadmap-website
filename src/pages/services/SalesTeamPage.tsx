
import ServicePageTemplate from "@/components/services/ServicePageTemplate";

const SalesTeamPage = () => {
  return (
    <ServicePageTemplate
      title="Sales Team Development"
      subtitle="Equip your team. Empower performance."
      intro="Sales performance is a function of structure, support, and strategy. We help you build, train, and develop a team that consistently performs."
      benefits={[
        {
          title: "Strategic Hiring",
          description: "Build the right team for your growth stage."
        },
        {
          title: "Onboarding Systems",
          description: "Get new hires ramped and productive faster."
        },
        {
          title: "Playbooks & Processes",
          description: "Repeatable success, baked into your DNA."
        },
        {
          title: "Coaching Culture",
          description: "Improve skills, mindset, and accountability."
        }
      ]}
      steps={[
        { title: "Team Capability Assessment" },
        { title: "Sales Playbook Development" },
        { title: "Onboarding & Enablement Setup" },
        { title: "Ongoing Coaching Support" }
      ]}
      ctaText="Develop your sales team"
    />
  );
};

export default SalesTeamPage;
