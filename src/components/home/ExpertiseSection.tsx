
import { Badge } from "@/components/ui/badge";
import { CheckCircle2 } from "lucide-react";

// Example industries and expertise areas
const industries = [
  "SaaS", "Technology", "Professional Services", "Financial Services", 
  "Manufacturing", "Healthcare", "B2B Services", "Cybersecurity"
];

const expertiseAreas = [
  {
    title: "Sales Strategy & Process Design",
    points: [
      "Sales methodology development",
      "Pipeline management frameworks",
      "Territory design & optimization",
      "Account-based selling strategies",
      "Sales playbook creation"
    ]
  },
  {
    title: "Revenue Organization Structure",
    points: [
      "CRO office establishment",
      "Sales team structure optimization",
      "Revenue operations implementation",
      "Cross-functional alignment",
      "Compensation plan design"
    ]
  },
  {
    title: "Growth & Scaling",
    points: [
      "Go-to-market strategy",
      "New market entry planning",
      "Channel strategy development",
      "International expansion",
      "Growth roadmap creation"
    ]
  }
];

const ExpertiseSection = () => {
  return (
    <section id="expertise" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">
              Deep Expertise Across B2B Industries
            </h2>
            <p className="text-lg text-navy-700 mb-8">
              With over 20+ years of experience driving revenue growth and sales transformation, 
              we bring industry-specific insights to help you achieve exceptional results.
            </p>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-navy-800 mb-4">Industries We Serve</h3>
              <div className="flex flex-wrap gap-3">
                {industries.map((industry, index) => (
                  <Badge key={index} variant="outline" className="bg-white text-navy-700 py-1 px-3">
                    {industry}
                  </Badge>
                ))}
              </div>
            </div>
            
            <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
              <div className="flex items-start mb-4">
                <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">20+</span>
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-navy-800">Years of Experience</h4>
                  <p className="text-navy-600">In revenue leadership and sales strategy</p>
                </div>
              </div>
              
              <div className="flex items-start mb-4">
                <div className="h-12 w-12 rounded-full bg-revenue-500 flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">$2B+</span>
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-navy-800">Revenue Growth</h4>
                  <p className="text-navy-600">Generated for our clients</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="h-12 w-12 rounded-full bg-navy-700 flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">150+</span>
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-navy-800">Clients Served</h4>
                  <p className="text-navy-600">From startup to enterprise</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-navy-800 mb-6">Core Expertise Areas</h3>
            
            <div className="space-y-8">
              {expertiseAreas.map((area, index) => (
                <div key={index} className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
                  <h4 className="font-semibold text-navy-800 text-lg mb-4">{area.title}</h4>
                  <ul className="space-y-3">
                    {area.points.map((point, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-revenue-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-navy-700">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
