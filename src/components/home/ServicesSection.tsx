
import { 
  BarChart3, 
  Users, 
  TrendingUp, 
  PieChart, 
  Building, 
  Users2
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: <TrendingUp className="h-6 w-6" />,
    title: "Revenue Strategy Development",
    description: "Comprehensive analysis and strategic planning to align sales, marketing, and customer success for optimal revenue growth.",
  },
  {
    icon: <BarChart3 className="h-6 w-6" />,
    title: "Sales Process Optimization",
    description: "Refine your sales methodology, pipeline management, and forecasting to increase win rates and deal sizes.",
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Sales Team Development",
    description: "Build high-performing sales teams through effective hiring, training, coaching, and compensation structures.",
  },
  {
    icon: <PieChart className="h-6 w-6" />,
    title: "Revenue Operations",
    description: "Streamline processes across marketing, sales, and customer success to create a unified revenue generation engine.",
  },
  {
    icon: <Building className="h-6 w-6" />,
    title: "Interim CRO Services",
    description: "Experienced leadership to drive your revenue organization during transitions or rapid growth phases.",
  },
  {
    icon: <Users2 className="h-6 w-6" />,
    title: "Go-to-Market Strategy",
    description: "Develop and execute effective market entry strategies for new products, services, or territories.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
            Comprehensive Revenue & Sales Services
          </h2>
          <p className="text-lg text-navy-700">
            We help B2B companies build, optimize, and scale their revenue generation capabilities 
            through strategic consulting and hands-on implementation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white border border-gray-100 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow group"
            >
              <div className="h-12 w-12 rounded-lg bg-revenue-50 text-revenue-600 flex items-center justify-center mb-6 group-hover:bg-revenue-600 group-hover:text-white transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-navy-800 mb-3">{service.title}</h3>
              <p className="text-navy-600 mb-6">{service.description}</p>
              <a href="#" className="text-primary font-medium flex items-center hover:text-revenue-600 transition-colors">
                Learn More <span className="ml-1">→</span>
              </a>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button size="lg" className="rounded-md">
            Schedule a Strategy Call
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
