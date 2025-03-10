import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/fonts.css'
import { motion } from 'framer-motion'; // Add this import
import one from '../assets/home/one.jpg'
import two from '../assets/home/two.jpg'
import three from '../assets/home/five.jpg'
import four from '../assets/home/four.jpg'
import whyone from '../assets/home/whyone.jpg'
import whytwo from '../assets/home/whytwo.jpg'
import whythree from '../assets/home/whythree.jpg'
import whyfour from '../assets/home/whyfour.jpg'
import blogone from '../assets/home/blog1.jpg'
import blogtwo from '../assets/home/blog2.jpg'
import blogthree from '../assets/home/blog3.jpg'
import design from '../assets/design.svg'
import designtwo from '../assets/designtwo.svg'
import designthree from '../assets/designthree.svg'
import designfour from '../assets/designfour.svg'
import designfive from '../assets/designfive.svg'

// Add these new variants for animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};

const cardHoverVariants = {
  hover: {
    scale: 1.05,
    boxShadow: "0px 10px 20px rgba(0,0,0,0.1)",
    transition: {
      duration: 0.3
    }
  }
};

// Add mobile-specific variants
const mobileContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      when: "beforeChildren"
    }
  }
};

const mobileItemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3
    }
  }
};

function Home() {
  const navigate = useNavigate();
  // Sample images array - replace with your actual images
  const images = [
    { id: 1, url: one, alt: 'Product 1' },
    { id: 2, url: two, alt: 'Product 2' },
    { id: 3, url: three, alt: 'Product 3' },
    { id: 4, url: four, alt: 'Product 4' },
  ];

  // Initialize with the first image
  const [selectedImage, setSelectedImage] = useState(images[0]);

  const features = [
    {
      id: 1,
      icon: whyone, // Replace with your actual icon path
      title: "Customized Packaging",
      description: "Your products deserve more than just a box—they deserve a statement."
    },
    {
      id: 2,
      icon: whytwo, // Replace with your actual icon path
      title: "High-Quality Printing",
      description: "From bold colors to intricate details, our high-quality offset printing."
    },
    {
      id: 3,
      icon: whyfour, // Replace with your actual icon path
      title: "Durable Solutions",
      description: "Say goodbye to shipping worries! Our durable cardboard boxes."
    },
    // {
    //   id: 4,
    //   icon: whythree, // Replace with your actual icon path
    //   title: "Expert box manufacturers",
    //   description: "Luxury, retail, food, electronics—whatever your business needs."
    // }
  ];

  const benefits = [
    {
      id: 1,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
        </svg>
      ),
      title: "Premium Quality",
      description: "Get top-notch packaging solutions that ensure product safety and presentation"
    },
    {
      id: 2,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
        </svg>
      ),
      title: "Quick Turnaround",
      description: "Fast production cycles and on-time delivery for all your orders"
    },
    {
      id: 3,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
        </svg>
      ),
      title: "Expert Guidance",
      description: "Professional advice on choosing the right packaging solutions"
    },
    {
      id: 4,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
        </svg>
      ),
      title: "Custom Design",
      description: "Tailored solutions that match your brand identity perfectly"
    }
  ];

  const sections = [
    {
      id: 1,
      title: "Premium Packaging Solutions",
      description: "We deliver high-quality packaging solutions tailored to your specific needs. Our expert team ensures that your products are protected and presented in the best possible way.",
      image: blogone,
      buttonText: "Learn More"
    },
    {
      id: 2,
      title: "Sustainable Packaging",
      description: "Committed to environmental responsibility, we offer eco-friendly packaging options that reduce environmental impact while maintaining premium quality and protection.",
      image: blogtwo,
      buttonText: "Explore Options"
    },
    {
      id: 3,
      title: "Custom Design Services",
      description: "Our design team works closely with you to create unique packaging solutions that reflect your brand identity and meet your specific requirements.",
      image: blogthree,
      buttonText: "Start Design"
    }
  ];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  // Navigation handlers
  const handleGetStarted = () => {
    navigate('/contact');
  };

  const handleLearnMore = () => {
    navigate('/about');
  };

  // Add responsive state
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Add resize handler
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="p-2 md:p-16 overflow-x-hidden">
      {/* Hero Section with enhanced animations */}
      <div className="relative mt-28 md:px-12 min-h-[80vh]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-gray-100"
        ></motion.div>

        <div className="relative px-4 md:px-16 flex flex-col lg:flex-row items-center">
          <img src={designfour} className="absolute z-[5px] hidden md:block -top-8 -left-14" />
          {/* Content section */}
          <motion.div
            initial={{ opacity: 0, x: isMobile ? 0 : -50, y: isMobile ? -30 : 0 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 h-full flex flex-col justify-center items-center lg:items-start mb-8 lg:mb-0"
          >
            <div className="space-y-4 md:space-y-6 text-center lg:text-left relative z-10">
              <img src={design} className='absolute hidden md:block -bottom-[9rem] right-3 -z-10' />
              <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                <span className="block text-[#E31F25] mb-1 md:mb-2">Your Brand</span>
                <span className="block text-[#22201E]">Our Packaging</span>
                {/* <span className="block text-[#D1A76D]">Solutions</span> */}
              </h1>

              <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-xl mx-auto lg:mx-0">Elevate Every Unboxing Experience</p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleGetStarted}
                  className="bg-[#E31F25] hover:bg-[#c41920] text-white px-8 py-4 rounded-lg text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Get Started
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleLearnMore}
                  className="border-2 border-[#D1A76D] text-[#D1A76D] hover:bg-[#D1A76D] hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300"
                >
                  Learn More
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Image section */}
          <motion.div
            initial={{ opacity: 0, x: isMobile ? 0 : 50, y: isMobile ? 30 : 0 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2 px-4 relative z-10 md:px-0"
          >
            {/* Preview Section */}
            <div className="relative">
              <div className="mb-4 md:mb-6 h-48 sm:h-64 md:h-96 rounded-xl md:rounded-2xl overflow-hidden shadow-lg md:shadow-2xl">
                {selectedImage && (
                  <motion.img
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    src={selectedImage.url}
                    alt={selectedImage.alt}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>

              {/* Thumbnail Gallery */}
              <div className="grid grid-cols-4 gap-2 md:gap-3">
                {images.map((image) => (
                  <motion.div
                    key={image.id}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedImage(image)}
                    className={`cursor-pointer rounded-lg overflow-hidden shadow-md 
                      ${selectedImage?.id === image.id
                        ? 'ring-2 ring-[#E31F25] ring-offset-2'
                        : 'hover:ring-2 hover:ring-[#D1A76D] hover:ring-offset-2'
                      }`}
                  >
                    <img
                      src={image.url}
                      alt={image.alt}
                      className="w-full h-20 object-cover"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>


      {/* Why Choose RG Pack Section with enhanced animations */}
      <motion.div
        variants={isMobile ? mobileContainerVariants : containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="pt-12 md:pt-24 px-4 md:px-0"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 relative"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#22201E]">
            Why Choose <span className="text-[#E31F25]">RG Pack</span>?
          </h2>
          <div className="w-24 h-1 bg-[#E31F25] mx-auto my-6"></div>
          <img src={designtwo} className='absolute hidden md:block top-0' />
          <img src={designtwo} className='absolute hidden md:block top-0 rotate-45 right-0' />
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              variants={isMobile ? mobileItemVariants : itemVariants}
              whileHover={cardHoverVariants.hover}
              className="bg-white rounded-xl p-8 transition-all duration-300"
            >
              <div className="mb-6 relative">
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-[#22201E] mb-3 text-center">
                {feature.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Main Title */}
      <motion.div
        variants={isMobile ? mobileContainerVariants : containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center py-5"
      >
        <h2 className="text-4xl font-bold text-[#22201E] mb-4">Our Services</h2>
        <div className="w-24 h-1 bg-[#E31F25] mx-auto"></div>
      </motion.div>

      {/* Alternating Sections */}
      <div className="px-4 md:px-0">
        {sections.map((section, index) => (
          <motion.div
            key={section.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={` py-8 md:pt-16 ${index !== sections.length - 1 ? 'border-b border-[#D1A76D]' : ''
              }`}
          >
            <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } items-center gap-6 md:gap-12`}
            >
              {/* Image Section */}
              <div className="w-full lg:w-1/2 relative">
                {/* <img src={designthree} className='hidden absolute -top-20 md:block' /> */}
                <img
                  src={section.image}
                  alt={section.title}
                  className="rounded-lg shadow-lg w-full h-auto object-fit"
                  style={{ maxHeight: isMobile ? '300px' : '400px' }}
                />
              </div>

              {/* Content Section */}
              <div className="w-full lg:w-1/2 space-y-4 text-center relative lg:text-left">
                <img src={designthree} className='hidden md:block absolute left-0 -top-28 rotate-180' />
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                  {section.title}
                </h3>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                  {section.description}
                </p>
                <img src={designthree} className='hidden md:block absolute right-0' />
                {/* <button
                onClick={() => {
                  switch (section.buttonText) {
                    case 'Learn More':
                      handleLearnMore();
                      break;
                    case 'Explore Options':
                      handleExploreOptions();
                      break;
                    case 'Start Design':
                      handleStartDesign();
                      break;
                    default:
                      handleGetStarted();
                  }
                }}
                className="bg-[#E31F25] hover:bg-[#D1A76D] text-white px-6 py-3 rounded-lg transition-colors w-full sm:w-auto"
              >
                {section.buttonText}
              </button> */}

              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Benefits Section with enhanced animations */}
      <motion.div
        variants={isMobile ? mobileContainerVariants : containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-12 md:pt-24 px-4 md:px-0"
      >
        <div className="">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#22201E] mb-4">How Do You Benefit?</h2>
            <div className="w-24 h-1 bg-[#E31F25] mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Experience the advantages of partnering with a leading packaging solutions provider
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {benefits.map((benefit) => (
              <motion.div
                key={benefit.id}
                variants={isMobile ? mobileItemVariants : itemVariants}
                whileHover={cardHoverVariants.hover}
                className="group text-center bg-gray-50 p-8 rounded-xl shadow-sm border-b-2 border-[#D1A76D]"
              >
                <div className="text-5xl flex justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {benefit.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Contact Us Section with enhanced animations */}
      <div className="px-4 md:px-0">
        <motion.div
          variants={isMobile ? mobileContainerVariants : containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-8"
        >
          <div className="">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#22201E] mb-4">Contact Us</h2>
              <div className="w-24 h-1 bg-[#E31F25] mx-auto mb-6"></div>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Get in touch with us for any questions or inquiries about our packaging solutions
              </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-6 lg:gap-12">
              {/* Contact Form */}
              <motion.div
                variants={isMobile ? mobileItemVariants : itemVariants}
                className="w-full lg:w-2/3"
              >
                <form onSubmit={handleFormSubmit} className="bg-white p-4 md:p-8 rounded-xl shadow-lg">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6">
                    <div>
                      <label className="block text-gray-700 mb-2">Name</label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2">Email</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-6">
                    <label className="block text-gray-700 mb-2">Phone</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                  <div className="mb-6">
                    <label className="block text-gray-700 mb-2">Message</label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows="4"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    onClick={() => navigate('/contact')}
                    className="w-full bg-[#E31F25] hover:bg-[#D1A76D] text-white py-3 px-6 rounded-lg transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </motion.div>

              {/* Contact Information */}
              <motion.div
                variants={isMobile ? mobileContainerVariants : containerVariants}
                className="w-full lg:w-1/3 space-y-4 relative md:space-y-8"
              >
                <img src={designfive} className='absolute -z-10 -left-12 -top-4' />
                <motion.div
                  variants={isMobile ? mobileItemVariants : itemVariants}
                  whileHover={cardHoverVariants.hover}
                  className="bg-white p-6 rounded-xl relative z-10 shadow-lg border-l-4 border-[#D1A76D]"
                >
                  <div className="text-3xl mb-4 ">
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Phone</h3>
                  <p className="text-gray-600">+91 98660 06169</p>
                </motion.div>

                <motion.div
                  variants={isMobile ? mobileItemVariants : itemVariants}
                  whileHover={cardHoverVariants.hover}
                  className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-[#D1A76D]"
                >
                  <div className="text-3xl mb-4">
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Email</h3>
                  <p className="text-gray-600">rgpack444@gmail.com</p>
                </motion.div>

                <motion.div
                  variants={isMobile ? mobileItemVariants : itemVariants}
                  whileHover={cardHoverVariants.hover}
                  className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-[#D1A76D]"
                >
                  <div className="text-3xl mb-4">
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
                  <p className="text-gray-600">
                    Plot D-4 and D-5, IDA, Gandhi Nagar Industrial Area, Kukatpally, Hyderabad, Telangana 500037
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

    </div>
  );
}

export default Home;
