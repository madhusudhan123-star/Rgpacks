import { Link } from 'react-router-dom';
import logoimg from '../assets/logo.png';

function Footer() {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Industries', path: '/industries' },
    { name: 'Contact', path: '/contact' }
  ];

  const services = [
    'Custom Packaging',
    'Box Manufacturing',
    'Package Design',
    'Eco-Friendly Solutions',
    'Bulk Orders'
  ];

  const industries = [
    'Food & Beverages',
    'Pharmaceutical',
    'Chemical',
    'Agriculture',
    'Retail'
  ];

  return (
    <footer className="bg-[#22201E] text-gray-300">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <Link to="/" className="block w-48">
              <img src={logoimg} alt="Company Logo" className="w-full" />
            </Link>
            <p className="text-sm">
              Leading manufacturer of innovative packaging solutions, committed to quality and sustainability.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-[#D1A76D] transition-colors">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="hover:text-[#D1A76D] transition-colors">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="hover:text-[#D1A76D] transition-colors">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="hover:text-[#D1A76D] transition-colors">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[#D1A76D] text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path}
                    className="hover:text-[#E31F25] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-[#D1A76D] text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <a 
                    href="#" 
                    className="hover:text-[#E31F25] transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-[#D1A76D] text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-4">
              <p className="flex items-start space-x-3">
                <span>📍</span>
                <span>123 Packaging Street, Industrial Area, City, Country</span>
              </p>
              <p className="flex items-center space-x-3">
                <span>📞</span>
                <span>+1 (123) 456-7890</span>
              </p>
              <p className="flex items-center space-x-3">
                <span>✉️</span>
                <span>info@rgpacks.com</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">
              © {new Date().getFullYear()} RG Packs. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-sm hover:text-[#E31F25] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm hover:text-[#E31F25] transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-sm hover:text-[#E31F25] transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
