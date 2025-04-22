import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

const About = () => {
  return <Layout>
      <div className="py-16 md:py-24 bg-gradient-to-br from-yellow-50 via-pink-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-12">
              <Avatar className="w-48 h-48">
                <AvatarImage src="/lovable-uploads/c7819e37-687b-4490-ac57-31276df9b1fb.png" alt="James Bevan" className="object-cover" />
              </Avatar>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-navy-900">
                  About Us
                </h1>
                <p className="text-xl leading-relaxed text-gray-600">
                  With over a decade of experience in sales leadership and business development, 
                  I bring a wealth of expertise in driving revenue growth and building high-performing teams 
                  across both the technology and healthcare sectors.
                </p>
              </div>
            </div>

            <div className="space-y-12">
              <Card className="bg-white/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-semibold mb-4 text-purple-700">Experience</h2>
                  <p className="mb-4">With extensive experience in the healthcare, medical devices as well as software and professional services industries, I've held various leadership positions focusing on strategic growth, team development, and revenue generation. 
For further information about my career and experience please check out my <a href="https://www.linkedin.com/in/james-a-bevan" className="text-purple-600 hover:text-purple-800" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
                  <div className="mt-4">
                    <h3 className="font-medium text-gray-700 mb-2">Core Competencies:</h3>
                    <ul className="grid grid-cols-2 md:grid-cols-3 gap-2">
                      <li className="text-sm bg-purple-100 rounded-full px-3 py-1 text-purple-700">Strategic Leadership</li>
                      <li className="text-sm bg-purple-100 rounded-full px-3 py-1 text-purple-700">Revenue Strategy</li>
                      <li className="text-sm bg-purple-100 rounded-full px-3 py-1 text-purple-700">GTM Planning</li>
                      <li className="text-sm bg-purple-100 rounded-full px-3 py-1 text-purple-700">Team Development</li>
                      <li className="text-sm bg-purple-100 rounded-full px-3 py-1 text-purple-700">Sales Operations</li>
                      <li className="text-sm bg-purple-100 rounded-full px-3 py-1 text-purple-700">Business Analytics</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-semibold mb-4 text-purple-700">Why Work With Us</h2>
                  <p className="mb-4">
                    My diverse experience across healthcare and technology sectors provides a unique 
                    perspective on sales strategy and business development. I've successfully:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Led global sales teams and initiatives</li>
                    <li>Implemented effective sales automation and CRM strategies</li>
                    <li>Developed and executed successful go-to-market plans</li>
                    <li>Built and managed high-performing sales teams</li>
                    <li>Driven significant revenue growth across different markets</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Layout>;
};

export default About;
