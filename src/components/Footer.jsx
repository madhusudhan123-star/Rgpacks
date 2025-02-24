import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import logoimg from '../assets/logo.png';
import { useState } from 'react';
import { copyToClipboard } from '../utils/clipboard';

function Footer() {
  const [copied, setCopied] = useState('');

  const handleCopy = async (text, type) => {
    const success = await copyToClipboard(text);
    if (success) {
      setCopied(type);
      setTimeout(() => setCopied(''), 2000);
    }
  };

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Our Service', path: '/services' },
    { name: 'Industries We Serve', path: '/industries' },
    { name: 'Customization', path: '/customization' },
    { name: 'Contact', path: '/contact' }
  ];

  const handleLinkClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const socialLinks = [
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
        </svg>
      ),
      url: "#",
      color: "hover:bg-blue-600"
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
        </svg>
      ),
      url: "#",
      color: "hover:bg-sky-500"
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
          <circle cx="4" cy="4" r="2" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
        </svg>
      ),
      url: "#",
      color: "hover:bg-blue-700"
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01M7.5 21h9a3 3 0 003-3V6a3 3 0 00-3-3h-9a3 3 0 00-3 3v12a3 3 0 003 3z" />
        </svg>
      ),
      url: "#",
      color: "hover:bg-pink-600"
    }
  ];

  return (
    <footer className="bg-[#22201E] text-gray-300">
      {/* Main Footer */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="container mx-auto px-4 py-12"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Updated Company Info with better logo visibility */}
          <motion.div
            variants={itemVariants}
            className="space-y-6"
          >
            <Link
              to="/"
              onClick={handleLinkClick}
              className="block w-48 transition-transform hover:scale-105"
            >
              <div className="bg-white p-4 rounded-lg">
                <img src={logoimg} alt="RG Pack Logo" className="w-full h-auto" />
              </div>
            </Link>
            <h2 className="text-2xl font-bold text-white">RG PACKS</h2>
            <p className="text-sm">
              From design to delivery, we offer end-to-end packaging services that help your products
              stand out in the market while ensuring their protection throughout the supply chain.
            </p>
            {/* Social Links */}
            <div className="flex space-x-4 pt-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-10 h-10 rounded-full flex items-center justify-center bg-gray-800 ${social.color} transition-colors duration-300`}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-[#D1A76D] text-lg font-semibold mb-4 relative">
              Quick Links
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-[#E31F25]"></span>
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <motion.li
                  key={link.path}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link
                    to={link.path}
                    onClick={handleLinkClick}
                    className="hover:text-[#E31F25] transition-colors duration-300 flex items-center space-x-2"
                  >
                    <span className="text-[#D1A76D]">›</span>
                    <span>{link.name}</span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h3 className="text-[#D1A76D] text-lg font-semibold mb-4 relative">
              Contact Us
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-[#E31F25]"></span>
            </h3>
            <div className="space-y-4">
              <motion.p
                className="flex items-start space-x-3 group cursor-pointer"
                whileHover={{ x: 5 }}
              >
                <svg className="w-5 h-5 flex-shrink-0 group-hover:text-[#E31F25] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="group-hover:text-[#D1A76D] transition-colors">
                  Plot D-4 and D-5, IDA, Gandhi Nagar Industrial Area, Kukatpally, Hyderabad, Telangana 500037
                </span>
              </motion.p>
              <motion.p
                className="flex items-center space-x-3 group cursor-pointer"
                whileHover={{ x: 5 }}
                onClick={() => handleCopy('+91 98660 06169', 'phone')}
                title="Click to copy phone number"
              >
                <svg className="w-5 h-5 flex-shrink-0 group-hover:text-[#E31F25] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="group-hover:text-[#D1A76D] transition-colors relative">
                  +91 98660 06169
                  {copied === 'phone' && (
                    <span className="absolute -top-8 left-0 bg-green-500 text-white text-xs py-1 px-2 rounded">
                      Copied!
                    </span>
                  )}
                </span>
              </motion.p>
              <motion.p
                className="flex items-center space-x-3 group cursor-pointer"
                whileHover={{ x: 5 }}
                onClick={() => handleCopy('info@rgpack.in', 'email')}
                title="Click to copy email"
              >
                <svg className="w-5 h-5 flex-shrink-0 group-hover:text-[#E31F25] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="group-hover:text-[#D1A76D] transition-colors relative">
                  info@rgpack.in
                  {copied === 'email' && (
                    <span className="absolute -top-8 left-0 bg-green-500 text-white text-xs py-1 px-2 rounded">
                      Copied!
                    </span>
                  )}
                </span>
              </motion.p>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="container mx-auto px-4 py-6"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">
              © {new Date().getFullYear()} RG Pack. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              {['Privacy Policy', 'Terms of Service'].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                >
                  <Link
                    to={`/${item.toLowerCase().replace(/ /g, '-')}`}
                    onClick={handleLinkClick}
                    className="text-sm hover:text-[#E31F25] transition-colors relative group"
                  >
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#E31F25] group-hover:w-full transition-all duration-300"></span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;
