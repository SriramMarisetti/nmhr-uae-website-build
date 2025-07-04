import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-20 h-20 rounded-lg overflow-hidden bg-white">
                <img
                  src="/assets/logo1.png"
                  alt="Company Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold">NM Human Resources<br/> Consultancy</h3>
                <p className="text-sm text-gray-400">Your Trusted HR Partner</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Leading HR consultancy and recruitment services in Abu Dhabi, UAE. 
              We connect talent with opportunities across the Middle East.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/careers" className="text-gray-400 hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link to="/services#staffing" className="text-gray-400 hover:text-white transition-colors">Staffing Solutions</Link></li>
              <li><Link to="/services#hr-consulting" className="text-gray-400 hover:text-white transition-colors">HR Consulting</Link></li>
              <li><Link to="/services#pro-services" className="text-gray-400 hover:text-white transition-colors">PRO Services</Link></li>
              <li><Link to="/business-setup" className="text-gray-400 hover:text-white transition-colors">Business Setup</Link></li>
            </ul>
          </div>

          {/* Contact Section with UAE & Indian Branches */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-4 text-sm text-gray-400">
              <div>
                <p className="text-white font-semibold">UAE Branch</p>
                <p>ceo@nmhruae.com</p>
                <p>+971 54 759 3444</p>
                <p>Abu Dhabi, UAE</p>
              </div>
              <div>
                <p className="text-white font-semibold">Indian Branch</p>
                <p>hr.vizag@nmhruae.com</p>
                <p>+91 86880 53307</p>
                <p>Bhupathi Surya Central Mall,</p>
                <p>Dondaparthy, Railway New Colony,</p>
                <p>Visakhapatnam, Andhra Pradesh 530016, India</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 NM HR Consultancy – All Rights Reserved
          </p>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-600 hover:text-brand-blue transition-colors" aria-label="LinkedIn">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>

            {/* Instagram */}
          <a href="#" className="text-gray-600 hover:text-pink-500 transition-colors" aria-label="Instagram">
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7 2C4.239 2 2 4.239 2 7v10c0 2.761 2.239 5 5 5h10c2.761 0 5-2.239 5-5V7c0-2.761-2.239-5-5-5H7zm10 2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h10zm-5 3a5 5 0 1 0 .001 10.001A5 5 0 0 0 12 7zm0 2a3 3 0 1 1-.001 6.001A3 3 0 0 1 12 9zm4.5-2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"/>
            </svg>
          </a>

            {/* Facebook */}
            <a href="#" className="text-gray-600 hover:text-brand-blue transition-colors" aria-label="Facebook">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.676 0H1.326C.593 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.326 24h11.495v-9.294H9.691V11.01h3.13V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.466.099 2.797.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.312h3.587l-.467 3.696h-3.12V24h6.116C23.407 24 24 23.407 24 22.674V1.326C24 .593 23.407 0 22.676 0"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
