import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import ExpertiseSection from "@/components/home/ExpertiseSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import ContactSection from "@/components/home/ContactSection";
import CtaSection from "@/components/home/CtaSection";
import { ScheduleConsultationButton } from "@/components/ScheduleConsultationButton";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <div className="flex justify-center my-6">
        <ScheduleConsultationButton />
      </div>

      <ServicesSection />
      <div className="flex justify-center my-6">
        <ScheduleConsultationButton />
      </div>

      <ExpertiseSection />
      <TestimonialsSection />

      <div className="flex justify-center my-6">
        <ScheduleConsultationButton />
      </div>

      <ContactSection />
      <CtaSection />
    </Layout>
  );
};

export default Index;
