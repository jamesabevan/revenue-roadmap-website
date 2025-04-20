import { useState } from "react";
import { Quote, StarIcon, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
const testimonials = [{
  quote: "The strategic revenue planning services we received completely transformed our sales organization. Within 6 months, we saw a 45% increase in our average deal size and shortened our sales cycle by almost 30%.",
  author: "Sarah Johnson",
  title: "CEO, TechSolutions Inc.",
  rating: 5
}, {
  quote: "As a scaling SaaS company, we struggled with building a repeatable sales process. The team provided exceptional guidance in restructuring our revenue operations which led to our most successful year ever.",
  author: "Michael Chen",
  title: "CRO, GrowthSoft",
  rating: 5
}, {
  quote: "The interim CRO services helped us bridge a critical leadership gap during our expansion. They didn't just maintain our trajectory—they accelerated it, setting new records for customer acquisition.",
  author: "Amanda Torres",
  title: "COO, ServicePro",
  rating: 5
}];
const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextTestimonial = () => {
    setCurrentIndex(prevIndex => prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1);
  };
  const prevTestimonial = () => {
    setCurrentIndex(prevIndex => prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1);
  };
  const currentTestimonial = testimonials[currentIndex];
  return <section id="testimonials" className="py-20 bg-gradient-to-br from-yellow-100 via-pink-100 to-purple-100">
      <div className="py-20 bg-gradient-to-br from-yellow-100 via-pink-100 to-purple-100">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-revenue-400 font-medium mb-2">
            Client Success Stories
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-300">
            We've helped numerous companies transform their revenue strategies and achieve 
            exceptional growth. Here's what they have to say about working with us.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-navy-800 rounded-2xl p-8 md:p-12 relative">
            <div className="absolute top-8 left-8 text-revenue-400 opacity-50">
              <Quote className="h-16 w-16" />
            </div>
            
            <div className="relative z-10">
              <div className="flex mb-6">
                {[...Array(currentTestimonial.rating)].map((_, i) => <StarIcon key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />)}
              </div>
              
              <blockquote className="text-xl md:text-2xl font-medium mb-8 text-gray-100">
                "{currentTestimonial.quote}"
              </blockquote>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-lg">{currentTestimonial.author}</p>
                  <p className="text-gray-300">{currentTestimonial.title}</p>
                </div>
                
                <div className="flex gap-2">
                  <Button size="icon" variant="outline" onClick={prevTestimonial} className="border-gray-600 text-gray-300 hover:text-white hover:bg-navy-700">
                    <ChevronLeft className="h-5 w-5" />
                  </Button>
                  <Button size="icon" variant="outline" onClick={nextTestimonial} className="border-gray-600 text-gray-300 hover:text-white hover:bg-navy-700">
                    <ChevronRight className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Button variant="outline" className="border-gray-600 text-gray-300 hover:text-white hover:bg-navy-800">
              View More Success Stories
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default TestimonialsSection;