
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const CtaSection = () => {
  const handleNewsletterScroll = () => {
    const element = document.getElementById("newsletter");
    element?.scrollIntoView({
      behavior: "smooth"
    });
  };
  return <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-500 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Revenue Strategy?
          </h2>
          <p className="text-lg text-gray-100 mb-8">
            Schedule a free consultation with our experts to discuss how we can help you 
            accelerate growth and optimize your sales operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="gap-2 bg-white text-purple-600 hover:bg-gray-100" asChild>
              <Link to="/free-consultation">
                Schedule Consultation <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" onClick={handleNewsletterScroll} className="border-white text-white hover:text-white hover:bg-purple-700 bg-transparent">
              <Mail className="mr-2 h-4 w-4" /> Join Newsletter
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default CtaSection;
