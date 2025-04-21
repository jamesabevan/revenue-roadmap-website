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
              <a href="#" className="text-gray-300 hover:text-purple-400 transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-purple-400 transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-gray-300 hover:text-purple-400 transition-colors">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#expertise" className="text-gray-300 hover:text-purple-400 transition-colors">
                  Expertise
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-300 hover:text-purple-400 transition-colors">
                  Client Success Stories
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-purple-400 transition-colors">
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
                <a href="tel:+14155552671" className="text-gray-300 hover:text-purple-400 transition-colors">+44 7713 499805</a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-purple-400 flex-shrink-0" />
                <a href="mailto:info@croquet.com" className="text-gray-300 hover:text-purple-400 transition-colors">info@thecroquet.com</a>
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