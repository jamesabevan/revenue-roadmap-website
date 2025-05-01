
import { Mail, MessageSquare, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import ContactForm from "./ContactForm";

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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-yellow-400 to-pink-500 flex items-center justify-center">
                <Phone className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Call Us</h3>
              <a href="tel:02922523408" className="text-gray-600 hover:text-purple-600 transition-colors">
                029 2252 3408
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
              <h3 className="text-xl font-semibold mb-2">Send a Message</h3>
              <p className="text-gray-600">Fill out our form below</p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-8 shadow-sm">
            <ContactForm />
          </div>

          <div className="mt-16 text-center">
            <Button size="lg" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 calendly-open-button">
              Schedule a Consultation
            </Button>
          </div>
        </div>
      </div>

      {/* Calendly Script */}
      <div style={{ display: 'none' }}>
        <div className="calendly-inline-widget" data-url="https://calendly.com/james-thecroquet/30min"></div>
      </div>
    </section>
  );
};

export default ContactSection;
