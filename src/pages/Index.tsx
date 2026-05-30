import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import ProblemSection from "@/components/home/ProblemSection";
import ServicesSection from "@/components/home/ServicesSection";
import ExpertiseSection from "@/components/home/ExpertiseSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CtaSection from "@/components/home/CtaSection";
import ContactSection from "@/components/home/ContactSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ProblemSection />
      <ServicesSection />
      <ExpertiseSection />
      <TestimonialsSection />
      <CtaSection />
      <ContactSection />
    </Layout>
  );
};

export default Index;
