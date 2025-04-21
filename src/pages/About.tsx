
import Layout from "@/components/layout/Layout";

const About = () => {
  return (
    <Layout>
      <div className="py-16 md:py-24 bg-gradient-to-br from-yellow-50 via-pink-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-navy-900">
              About Us
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Please provide your work history and I'll craft a compelling About Us section that highlights your expertise and journey.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
