
import React, { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "emailjs-com";
import { Loader2, Mail, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Define form schema with validation
const formSchema = z.object({
  fullName: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email" })
});

type FormValues = z.infer<typeof formSchema>;

interface ConsultationSignupProps {
  className?: string;
  onSuccess?: () => void;
}

const ConsultationSignup: React.FC<ConsultationSignupProps> = ({ className, onSuccess }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: ""
    }
  });

  const handleSubmit = async (values: FormValues) => {
    setIsSubmitting(true);
    
    try {
      // Using the provided EmailJS credentials
      const serviceId = "service_ua59v3k";
      const templateId = "template_8jjku2a";
      const publicKey = "zYGFhwysoY0ZY9a5H";

      const templateParams = {
        from_name: values.fullName,
        from_email: values.email,
        to_name: "Site Owner",
        message: "Free Consultation Signup"
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      // Show success state
      setIsSuccess(true);
      form.reset();
      
      toast({
        title: "Success!",
        description: "Thank you for requesting a free consultation! We'll contact you shortly.",
        variant: "default",
      });
      
      if (onSuccess) {
        onSuccess();
      }

      // Reset success state after 3 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 3000);
      
    } catch (error) {
      console.error("Failed to send email:", error);
      toast({
        title: "Something went wrong",
        description: "Failed to submit your request. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`w-full max-w-md mx-auto bg-white rounded-xl shadow-sm p-6 transition-all ${className}`}>
      <div className="space-y-4">
        <div className="text-center mb-6">
          <h3 className="text-xl font-semibold tracking-tight text-gray-900">Request Your Free Consultation</h3>
          <p className="text-sm text-gray-600 mt-1">We'll contact you within 24 hours to schedule your session</p>
        </div>

        {isSuccess ? (
          <div className="py-8 flex flex-col items-center justify-center text-center space-y-3 animate-fade-in">
            <div className="rounded-full bg-green-100 p-3">
              <CheckCircle className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="text-lg font-medium text-gray-900">Request submitted!</h3>
            <p className="text-sm text-gray-500">We'll be in touch soon to schedule your free consultation.</p>
          </div>
        ) : (
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700">Full Name</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Your name" 
                        {...field} 
                        className="w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500" 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700">Email</FormLabel>
                    <FormControl>
                      <Input 
                        type="email" 
                        placeholder="your.email@example.com" 
                        {...field} 
                        className="w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500" 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button 
                type="submit" 
                disabled={isSubmitting} 
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-medium py-2 px-4 rounded-md transition-all duration-200 flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <Mail className="mr-2 h-4 w-4" />
                    Request Consultation
                  </>
                )}
              </Button>
            </form>
          </Form>
        )}
      </div>
    </div>
  );
};

export default ConsultationSignup;
