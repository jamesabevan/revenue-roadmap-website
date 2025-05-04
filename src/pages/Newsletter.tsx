
import React from "react";
import Layout from "@/components/layout/Layout";
import NewsletterSignup from "@/components/NewsletterSignup";

const Newsletter = () => {
  return (
    <Layout>
      <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50 min-h-[80vh]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Join Our Newsletter</h1>
              <p className="text-lg text-gray-700">
                Subscribe to our newsletter for expert insights on revenue optimization, sales strategies, and industry updates.
                Stay updated with our latest news and offers.
              </p>
            </div>
            
            <NewsletterSignup />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Newsletter;
