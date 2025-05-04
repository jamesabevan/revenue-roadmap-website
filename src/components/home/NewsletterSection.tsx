
import React from "react";
import NewsletterSignup from "@/components/NewsletterSignup";

const NewsletterSection = () => {
  return (
    <section id="newsletter" className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Stay Connected</h2>
            <p className="text-lg text-gray-700">
              Subscribe to our newsletter for expert insights on revenue optimization, sales strategies, and industry updates.
            </p>
          </div>
          
          <NewsletterSignup />
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
