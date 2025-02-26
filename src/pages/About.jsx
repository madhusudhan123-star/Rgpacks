import { motion } from 'framer-motion';
import banner from '../assets/onetwo.jpg';

function About() {
  const stats = [
    { number: "30+", text: "Years of Excellence" },
    { number: "1000+", text: "Happy Customers" },
    { number: "50+", text: "Products" },
    { number: "24/7", text: "Customer Support" }
  ];

  const features = [
    {
      title: "Expert Solutions",
      description: "Expertise in rigid boxes, corrugated boxes, and printed cardboard boxes",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
          <path strokeLinecap="round" strokeLinejoin="round" d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
        </svg>
      )
    },
    {
      title: "Premium Printing",
      description: "Advanced offset printing for premium-quality packaging",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0 1 10.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0 .229 2.523a1.125 1.125 0 0 1-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0 0 21 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 0 0-1.913-.247M6.34 18H5.25A2.25 2.25 0 0 1 3 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 0 1 1.913-.247m10.5 0a48.536 48.536 0 0 0-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5Zm-3 0h.008v.008H15V10.5Z" />
        </svg>
      )
    },
    {
      title: "Custom Branding",
      description: "Custom branding solutions to elevate your brand image",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
        </svg>
      )
    },
    {
      title: "Reliable Supply",
      description: "Trusted cardboard box suppliers for bulk and small-scale orders",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
        </svg>
      )
    }
  ];

  return (
    <div className="pt-16 md:pt-24">
      {/* Hero Section - Updated with legacy mention */}
      <div className="relative min-h-[60vh] bg-[#E4272D] overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="container mx-auto px-4 h-full flex flex-col lg:flex-row items-center relative z-10 py-8">
          <div className="w-full max-w-3xl text-white lg:w-1/2 mb-8 lg:mb-0 space-y-4">
            <motion.span
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block bg-[#D1A76D] text-white px-3 py-1 md:px-4 md:py-2 rounded-full text-sm md:text-base"
            >
              30+ Years of Excellence
            </motion.span>
            <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold">Packaging Solutions That Speak for Your Brand</h1>
            <p className="text-base md:text-lg lg:text-xl leading-relaxed">
              At RG Packs, we don't just create boxes—we create experiences. Established in 2004, we have been
              delivering high-quality packaging and branding solutions for businesses across various industries. From
              customized printed boxes to durable corrugated and cardboard packaging, we offer innovative designs
              that protect and enhance your product presentation
            </p>
          </div>
          <div className="w-full lg:w-1/2 px-4">
            <img src={banner} className='rounded-sm w-full' alt="RG Packs Banner" />
          </div>
        </div>
      </div>

      {/* Legacy Section - New Addition */}
      {/* <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold text-[#22201E] mb-6">Our Legacy</h2>
            <div className="w-24 h-1 bg-[#E31F25] mx-auto mb-8"></div>
            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-[#D1A76D]">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Starting our journey as <span className="font-semibold text-[#E31F25]">Rudra Graphics</span>,
                we have evolved into <span className="font-semibold text-[#E31F25]">RG Pack</span>, carrying
                forward a legacy of over <span className="font-semibold text-[#D1A76D]">30 years</span> in the
                packaging industry.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our transformation from Rudra Graphics to RG Pack represents our commitment to innovation while
                maintaining the core values and expertise that have made us a trusted name in the industry for
                more than three decades.
              </p>
            </div>
          </motion.div>
        </div>
      </div> */}

      {/* Vision & Mission Section */}
      <div className="py-8 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="p-4 md:p-8 rounded-xl border-l-4 border-[#E31F25]"
            >
              <h2 className="text-2xl font-bold text-[#22201E] mb-4">Our Vision</h2>
              <p className="text-gray-600 text-lg">
                To redefine packaging by merging creativity, quality, and sustainability.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="p-4 md:p-8 rounded-xl border-l-4 border-[#D1A76D]"
            >
              <h2 className="text-2xl font-bold text-[#22201E] mb-4">Our Mission</h2>
              <p className="text-gray-600 text-lg">
                To provide businesses with high-quality printing and packaging solutions that leave a
                lasting impact.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center p-2"
            >
              <h2 className="text-[#E31F25] text-2xl md:text-4xl font-bold mb-2">30+</h2>
              <p className="text-[#22201E] text-sm md:text-lg">Years of Excellence</p>
            </motion.div>
            {stats.slice(1).map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: (index + 1) * 0.1 }}
                className="text-center p-2"
              >
                <h2 className="text-[#E31F25] text-2xl md:text-4xl font-bold mb-2">{stat.number}</h2>
                <p className="text-[#22201E] text-sm md:text-lg">{stat.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* What Sets Us Apart Section */}
      <div className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#22201E] text-center mb-4 md:mb-6">What Sets Us Apart?</h2>
          <div className="w-20 md:w-24 h-1 bg-[#E31F25] mx-auto mb-8 md:mb-12"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-4 md:p-6 rounded-xl shadow-lg border-b-2 border-[#D1A76D]"
              >
                <div className="text-3xl md:text-4xl mb-3 md:mb-4">{feature.icon}</div>
                <h3 className="text-lg md:text-xl font-semibold text-[#22201E] mb-2 md:mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-sm md:text-base">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Story Section - Updated */}
      {/* <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              From customized printed boxes to durable corrugated and cardboard packaging, we offer innovative designs
              that protect and enhance your product presentation.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our state-of-the-art facility and expert team work together to bring your packaging vision to life,
              ensuring every product leaves a lasting impression on your customers.
            </p>
          </div>
        </div>
      </div> */}

      {/* CTA Section */}
      <div className="py-12 md:py-20 bg-[#E31F25] text-white relative">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6">Ready to Get Started?</h2>
          <p className="text-base md:text-xl mb-6 md:mb-8 max-w-2xl mx-auto">
            Let's work together to create packaging solutions that elevate your brand and protect your products.
          </p>
          <button className="bg-[#D1A76D] hover:bg-[#D1A76D]/90 text-white px-6 md:px-8 py-2 md:py-3 rounded-lg text-base md:text-lg font-semibold transition-colors">
            <a href='/contact'>
              Contact Us Today
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
