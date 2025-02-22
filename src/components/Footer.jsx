import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import logoimg from '../assets/logo.png';

function Footer() {
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
    { icon: "fab fa-facebook-f", url: "#", color: "hover:bg-blue-600" },
    { icon: "fab fa-twitter", url: "#", color: "hover:bg-sky-500" },
    { icon: "fab fa-linkedin-in", url: "#", color: "hover:bg-blue-700" },
    { icon: "fab fa-instagram", url: "#", color: "hover:bg-pink-600" }
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
                <img src={logoimg} alt="RG Packs Logo" className="w-full h-auto" />
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
                  <i className={social.icon}></i>
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
                <span className="group-hover:text-[#E31F25] transition-colors">📍</span>
                <span className="group-hover:text-[#D1A76D] transition-colors">
                  Plot D-4 and D-5, IDA, Gandhi Nagar Industrial Area, Kukatpally, Hyderabad, Telangana 500037
                </span>
              </motion.p>
              <motion.p
                className="flex items-center space-x-3 group cursor-pointer"
                whileHover={{ x: 5 }}
              >
                <span className="group-hover:text-[#E31F25] transition-colors">📞</span>
                <span className="group-hover:text-[#D1A76D] transition-colors">+91 98660 06169</span>
              </motion.p>
              <motion.p
                className="flex items-center space-x-3 group cursor-pointer"
                whileHover={{ x: 5 }}
              >
                <span className="group-hover:text-[#E31F25] transition-colors">✉️</span>
                <span className="group-hover:text-[#D1A76D] transition-colors">info@rgpack.in</span>
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
              © {new Date().getFullYear()} RG Packs. All rights reserved.
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
