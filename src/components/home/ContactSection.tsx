import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, Calendar, User, Building2, Send } from "lucide-react";
const ContactSection = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: ""
  });
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSelectChange = (value: string) => {
    setFormState(prev => ({
      ...prev,
      service: value
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Would handle form submission here - for demo purposes just console log
    console.log("Form submitted:", formState);
    // Reset form
    setFormState({
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      message: ""
    });
    // Show success message (would be implemented in real app)
  };
  return <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <span className="inline-block text-primary font-medium mb-2">
              Get in Touch
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">
              Schedule Your Strategic Revenue Consultation
            </h2>
            <p className="text-lg text-navy-700 mb-8 max-w-lg">
              Ready to transform your revenue strategy? Speak with our experts to
              discover how we can help accelerate your growth and optimize your
              sales operations.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                  <Calendar className="h-5 w-5" />
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-navy-800">
                    Free 30-Minute Consultation
                  </h4>
                  <p className="text-navy-600">
                    Schedule a no-obligation call to discuss your needs
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                  <Phone className="h-5 w-5" />
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-navy-800">
                    Call Us Directly
                  </h4>
                  <p className="text-navy-600">+44 7713 499805</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-navy-800">Email Us</h4>
                  <p className="text-navy-600">info@thecroquet.com</p>
                </div>
              </div>
            </div>

            
          </div>

          <div>
            <div className="bg-white border border-gray-100 rounded-xl p-8 shadow-md">
              <h3 className="text-xl font-semibold text-navy-800 mb-6">
                Contact Us
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-navy-700 mb-1">
                    Full Name
                  </label>
                  <div className="relative">
                    <Input id="name" name="name" placeholder="Your name" value={formState.name} onChange={handleInputChange} className="pl-10" required />
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-navy-700 mb-1">
                    Email Address
                  </label>
                  <div className="relative">
                    <Input id="email" name="email" type="email" placeholder="your.email@example.com" value={formState.email} onChange={handleInputChange} className="pl-10" required />
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-navy-700 mb-1">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Input id="phone" name="phone" type="tel" placeholder="(555) 123-4567" value={formState.phone} onChange={handleInputChange} className="pl-10" />
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-navy-700 mb-1">
                    Company Name
                  </label>
                  <div className="relative">
                    <Input id="company" name="company" placeholder="Your company" value={formState.company} onChange={handleInputChange} className="pl-10" />
                    <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-navy-700 mb-1">
                    Service Interested In
                  </label>
                  <Select value={formState.service} onValueChange={handleSelectChange}>
                    <SelectTrigger id="service">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="revenue-strategy">Revenue Strategy Development</SelectItem>
                      <SelectItem value="sales-optimization">Sales Process Optimization</SelectItem>
                      <SelectItem value="team-development">Sales Team Development</SelectItem>
                      <SelectItem value="revenue-ops">Revenue Operations</SelectItem>
                      <SelectItem value="interim-cro">Interim CRO Services</SelectItem>
                      <SelectItem value="go-to-market">Go-to-Market Strategy</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-navy-700 mb-1">
                    Your Message
                  </label>
                  <Textarea id="message" name="message" placeholder="Tell us about your specific needs or challenges..." value={formState.message} onChange={handleInputChange} rows={4} />
                </div>

                <Button type="submit" className="w-full gap-2">
                  <Send className="h-4 w-4" /> Submit Request
                </Button>

                <p className="text-xs text-muted-foreground text-center mt-4">
                  By submitting this form, you agree to our privacy policy and terms of service.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default ContactSection;