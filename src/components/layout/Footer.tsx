import { Mail, MapPin, Phone } from "lucide-react";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-gray-800">
          <div>
            <div className="mb-2">
              <img alt="CROquet Logo" src="/lovable-uploads/643bc363-4d1c-4e7e-b21a-8c25e54abe92.png" className="h-20" />
            </div>
            <p className="text-gray-300 mb-4">
              Strategic revenue growth consulting for B2B companies looking to scale their sales operations and maximize profitability.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/thecroquet" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-purple-400 transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/#services" className="text-gray-300 hover:text-purple-400 transition-colors">
                  Our Services
                </a>
              </li>
              <li>
                <a href="/free-consultation" className="text-gray-300 hover:text-purple-400 transition-colors">
                  Free Consultation
                </a>
              </li>
              <li>
                <a href="/newsletter" className="text-gray-300 hover:text-purple-400 transition-colors">
                  Join Newsletter
                </a>
              </li>
              <li>
                <a href="/#expertise" className="text-gray-300 hover:text-purple-400 transition-colors">
                  Expertise
                </a>
              </li>
              <li>
                <a href="/#projects" className="text-gray-300 hover:text-purple-400 transition-colors">
                  Our Projects
                </a>
              </li>
              <li>
                <a href="/#contact" className="text-gray-300 hover:text-purple-400 transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Contact Information</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-purple-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">Cardiff, UK</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-purple-400 flex-shrink-0" />
                <a href="tel:02922523408" className="text-gray-300 hover:text-purple-400 transition-colors">029 2252 3408</a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-purple-400 flex-shrink-0" />
                <a href="mailto:info@thecroquet.com" className="text-gray-300 hover:text-purple-400 transition-colors">info@thecroquet.com</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} CROquet. All rights reserved.</p>
        </div>
      </div>
    </footer>;
};
export default Footer;
