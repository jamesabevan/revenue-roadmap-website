
import React from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

interface Benefit {
  title: string;
  description: string;
}

interface Step {
  title: string;
  description?: string;
}

interface ServicePageTemplateProps {
  title: string;
  subtitle: string;
  intro: string;
  benefits: Benefit[];
  steps: Step[];
  ctaText: string;
}

const ServicePageTemplate = ({
  title,
  subtitle,
  intro,
  benefits,
  steps,
  ctaText
}: ServicePageTemplateProps) => {
  return (
    <Layout>
      <div className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-navy-900">{title}</h1>
            <p className="text-xl md:text-2xl text-navy-600">{subtitle}</p>
          </div>

          {/* Intro Section */}
          <div className="max-w-3xl mx-auto mb-16">
            <p className="text-lg text-navy-700 leading-relaxed">{intro}</p>
          </div>

          {/* Benefits Section */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Key Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <div 
                  key={index} 
                  className="p-6 bg-white rounded-xl shadow-sm border border-gray-100"
                >
                  <h3 className="text-xl font-semibold mb-3 text-navy-800">{benefit.title}</h3>
                  <p className="text-navy-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* How It Works Section */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">How It Works</h2>
            <div className="max-w-2xl mx-auto">
              <div className="space-y-6">
                {steps.map((step, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-yellow-400 to-pink-500 flex items-center justify-center text-white font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-navy-800">{step.title}</h3>
                      {step.description && (
                        <p className="text-navy-600 mt-1">{step.description}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <Button size="lg" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
              {ctaText}
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ServicePageTemplate;
