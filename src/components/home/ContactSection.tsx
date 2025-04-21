
import { Mail, MessageSquare, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MessageDialog } from "./MessageDialog";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
            <p className="text-lg text-gray-600">
              Ready to transform your revenue strategy? Get in touch with our experts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-yellow-400 to-pink-500 flex items-center justify-center">
                <Phone className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Call Us</h3>
              <a href="tel:+447713499805" className="text-gray-600 hover:text-purple-600 transition-colors">
                +44 7713 499805
              </a>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-yellow-400 to-pink-500 flex items-center justify-center">
                <Mail className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email Us</h3>
              <a href="mailto:info@thecroquet.com" className="text-gray-600 hover:text-purple-600 transition-colors">
                info@thecroquet.com
              </a>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-yellow-400 to-pink-500 flex items-center justify-center">
                <MessageSquare className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Message Us</h3>
              <MessageDialog />
            </div>
          </div>

          <div className="mt-16 text-center">
            <Button size="lg" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
              Schedule a Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
