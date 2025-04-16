
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import ExpertiseSection from "@/components/home/ExpertiseSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import ContactSection from "@/components/home/ContactSection";
import CtaSection from "@/components/home/CtaSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ServicesSection />
      <ExpertiseSection />
      <TestimonialsSection />
      <ContactSection />
      <CtaSection />
    </Layout>
  );
};

export default Index;
