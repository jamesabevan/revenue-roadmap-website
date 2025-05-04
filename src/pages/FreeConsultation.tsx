
import React from "react";
import Layout from "@/components/layout/Layout";
import ConsultationSignup from "@/components/ConsultationSignup";

const FreeConsultation = () => {
  return (
    <Layout>
      <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50 min-h-[80vh]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Free 30-Minute Consultation</h1>
              <p className="text-lg text-gray-700">
                Fill out the form below to schedule your free consultation with our revenue optimization experts.
                We'll get back to you within 24 hours to confirm your appointment.
              </p>
            </div>
            
            <ConsultationSignup />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FreeConsultation;
