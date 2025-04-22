import { useState } from "react";
import { Building2, Briefcase, Users2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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
  return (
    <section id="projects" className="py-12 bg-gradient-to-br from-yellow-100 via-pink-100 to-purple-100">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Our <span className="bg-gradient-to-r from-yellow-400 to-pink-500 text-transparent bg-clip-text">Projects</span>
        </h2>
        <p className="text-lg text-slate-900">
          We've helped numerous companies transform their revenue operations and achieve 
          exceptional results. Here are some of our recent projects.
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-4">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="relative"
        >
          <CarouselContent>
            {projects.map((project, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/1">
                <Card className="bg-white/95 backdrop-blur-sm border border-gray-100 p-8 shadow-lg hover:shadow-xl transition-all">
                  <div className="h-12 w-12 rounded-lg bg-gradient-to-r from-yellow-400 to-pink-500 flex items-center justify-center mb-6">
                    {project.icon}
                  </div>
                  <h3 className="text-xl font-bold text-navy-800 mb-4">{project.title}</h3>
                  <p className="text-navy-600 mb-6">{project.description}</p>
                  <div className="text-lg font-medium text-yellow-600">
                    {project.impact}
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialsSection;
