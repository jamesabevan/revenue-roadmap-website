
import { Button } from "@/components/ui/button";
import { ChevronRight, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    servicesSection?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <section className="py-20 bg-gradient-to-br from-yellow-100 via-pink-100 to-purple-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-1/2 space-y-6">
            <div className="inline-flex items-center rounded-full bg-purple-100 px-3 py-1 text-sm text-purple-600 font-medium">
              <TrendingUp className="h-4 w-4 mr-1" /> 
              Transform Your Revenue Strategy
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Revenue, <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">Reimagined.</span>
            </h1>
            <p className="text-lg text-gray-700 max-w-xl">
              Expert revenue optimization services to drive strategic growth, streamline sales processes, and build sustainable business performance.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="rounded-md bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600" asChild>
                <Link to="/free-consultation">
                  Schedule Consultation <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="rounded-md border border-purple-500 text-purple-700 hover:bg-purple-50 hover:text-purple-700" onClick={scrollToServices}>
                Our Services
              </Button>
            </div>
            <div className="pt-6">
              <p className="text-sm text-gray-500">Trusted by industry leaders across healthcare, medical devices, tech, SaaS, and professional services</p>
              <div className="flex flex-wrap items-center gap-8 mt-4">
                {/* Company Logos - Placeholder gray boxes */}
                
                
                
                
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 relative">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden p-8 border border-gray-100 relative z-10">
              <div className="aspect-video bg-gradient-to-br from-yellow-200 to-pink-200 rounded-lg mb-6 flex items-center justify-center">
                <img alt="Business Growth Graph" className="w-full h-full object-cover" src="/lovable-uploads/2ee15c94-c416-4501-8e61-e246bdbf5574.png" />
              </div>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
                    <TrendingUp className="h-6 w-6 text-purple-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-left">Design. Align. Grow</h3>
                    <p className="text-sm text-gray-600">Strategic Revenue Planning That Drives Results</p>
                  </div>
                </div>
                <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full w-3/4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="font-medium text-gray-700">Your Roadmap Starts Here</span>
                  
                </div>
              </div>

              
            </div>
            
            {/* Background decorative elements */}
            <div className="absolute -z-10 top-1/2 -translate-y-1/2 -right-6 h-80 w-80 bg-yellow-100 rounded-full"></div>
            <div className="absolute -z-10 -bottom-10 -left-10 h-60 w-60 bg-pink-100 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;
