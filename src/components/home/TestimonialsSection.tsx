
import { useState } from "react";
import { Quote, ChevronLeft, ChevronRight, Building2, Briefcase, Users2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [{
  title: "Organization Restructure & Compensation Modeling",
  description: "Implemented a comprehensive organizational restructure and developed a performance-based compensation model that increased team productivity by 40% and improved retention rates.",
  icon: <Building2 className="h-6 w-6" />,
  impact: "40% increase in team productivity"
}, {
  title: "GTM Strategy for SaaS Startup",
  description: "Developed and executed a market entry strategy for a B2B SaaS platform, resulting in successful product launch and acquisition of first 50 enterprise customers within 6 months.",
  icon: <Briefcase className="h-6 w-6" />,
  impact: "50 enterprise customers in 6 months"
}, {
  title: "Partner Program Development",
  description: "Built a comprehensive partner program from ground up, including partner tiers, enablement materials, and compensation structure, leading to 60% of revenue being partner-influenced.",
  icon: <Users2 className="h-6 w-6" />,
  impact: "60% partner-influenced revenue"
}];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const nextProject = () => {
    setCurrentIndex(prevIndex => prevIndex === projects.length - 1 ? 0 : prevIndex + 1);
  };
  
  const prevProject = () => {
    setCurrentIndex(prevIndex => prevIndex === 0 ? projects.length - 1 : prevIndex - 1);
  };
  
  const currentProject = projects[currentIndex];

  return <section id="projects" className="py-[70px]">
      <div className="py-20 bg-gradient-to-br from-yellow-100 via-pink-100 to-purple-100">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="bg-gradient-to-r from-yellow-400 to-pink-500 text-transparent bg-clip-text">Projects</span>
          </h2>
          <p className="text-lg text-slate-900">
            We've helped numerous companies transform their revenue operations and achieve 
            exceptional results. Here are some of our recent projects.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-navy-800 rounded-2xl p-8 md:p-12 relative">
            <div className="absolute top-8 left-8 text-revenue-400 opacity-50">
              {currentProject.icon}
            </div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-white mb-4">{currentProject.title}</h3>
              
              <div className="text-xl md:text-2xl font-medium mb-8 text-gray-100">
                {currentProject.description}
              </div>
              
              <div className="flex items-center justify-between">
                <div className="text-lg font-medium text-yellow-400">
                  {currentProject.impact}
                </div>
                
                <div className="flex gap-2">
                  <Button size="icon" variant="outline" onClick={prevProject} className="border-gray-600 text-gray-300 hover:text-white hover:bg-navy-700">
                    <ChevronLeft className="h-5 w-5" />
                  </Button>
                  <Button size="icon" variant="outline" onClick={nextProject} className="border-gray-600 text-gray-300 hover:text-white hover:bg-navy-700">
                    <ChevronRight className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};

export default TestimonialsSection;
