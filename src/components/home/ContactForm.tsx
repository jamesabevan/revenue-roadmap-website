
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // First attempt to submit via Netlify forms for backup
      try {
        await fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams({
            'form-name': 'contact',
            ...formData
          }).toString()
        });
      } catch (netlifyError) {
        console.log('Netlify form submission fallback attempted:', netlifyError);
      }
      
      // Then use EmailJS as primary method
      const result = await emailjs.send(
        'service_ua59v3k',
        'template_8jjku2a',
        {
          from_name: formData.name,
          from_email: formData.email,
          company: formData.company || 'Not provided',
          message: formData.message,
          to_email: 'info@thecroquet.com'
        },
        'zYGFhwysoY0ZY9a5H'
      );
      
      console.log('EmailJS submission result:', result);
      
      toast({
        title: "Message sent",
        description: "Thank you for your message. We'll get back to you shortly."
      });
      setFormData({ name: "", email: "", company: "", message: "" });
    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        title: "Something went wrong",
        description: "Your message couldn't be sent. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
        data-netlify="true"
        name="contact"
      >
        <input type="hidden" name="form-name" value="contact" />
        <input type="hidden" name="subject" value="New contact form submission" />
        <input type="hidden" name="to" value="info@thecroquet.com" />
        
        <div className="md:col-span-1">
          <Input
            placeholder="Your name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="border-gray-300 focus:ring-purple-500 focus:border-purple-500"
            required
          />
        </div>
        
        <div className="md:col-span-1">
          <Input
            type="email"
            placeholder="Email address"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="border-gray-300 focus:ring-purple-500 focus:border-purple-500"
            required
          />
        </div>
        
        <div className="md:col-span-2">
          <Input
            placeholder="Company (Optional)"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="border-gray-300 focus:ring-purple-500 focus:border-purple-500"
          />
        </div>
        
        <div className="md:col-span-2">
          <Textarea
            placeholder="Your message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="border-gray-300 focus:ring-purple-500 focus:border-purple-500 min-h-[150px]"
          />
        </div>
        
        <div className="md:col-span-2">
          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-yellow-400 to-pink-500 hover:from-yellow-500 hover:to-pink-600"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send message"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
