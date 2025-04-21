import { Badge } from "@/components/ui/badge";
import { CheckCircle2 } from "lucide-react";
const industries = ["SaaS", "Technology", "Professional Services", "Financial Services", "Manufacturing", "Healthcare", "B2B Services", "Cybersecurity"];
const expertiseAreas = [{
  title: "Sales Strategy & Process Design",
  points: ["Sales methodology development", "Pipeline management frameworks", "Territory design & optimization", "Account-based selling strategies", "Sales playbook creation"]
}, {
  title: "Revenue Organization Structure",
  points: ["CRO office establishment", "Sales team structure optimization", "Revenue operations implementation", "Cross-functional alignment", "Compensation plan design"]
}, {
  title: "Growth & Scaling",
  points: ["Go-to-market strategy", "New market entry planning", "Channel strategy development", "International expansion", "Growth roadmap creation"]
}];
const ExpertiseSection = () => {
  return <section id="expertise" className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">
              Deep Expertise Across B2B Industries
            </h2>
            <p className="text-lg text-navy-700 mb-8">With over 10+ years of experience driving revenue growth and sales transformation, we bring industry-specific insights to help you achieve exceptional results.</p>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-navy-800 mb-4">Industries We Serve</h3>
              <div className="flex flex-wrap gap-3">
                {industries.map((industry, index) => <Badge key={index} variant="outline" className="bg-white text-navy-700 py-1 px-3">
                    {industry}
                  </Badge>)}
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
            {expertiseAreas.map((area, index) => {})}
          </div>
        </div>
      </div>
    </section>;
};
export default ExpertiseSection;