import { motion } from 'framer-motion';

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
      icon: "📦"
    },
    {
      title: "Premium Printing",
      description: "Advanced offset printing for premium-quality packaging",
      icon: "🖨️"
    },
    {
      title: "Custom Branding",
      description: "Custom branding solutions to elevate your brand image",
      icon: "🎨"
    },
    {
      title: "Reliable Supply",
      description: "Trusted cardboard box suppliers for bulk and small-scale orders",
      icon: "🚚"
    }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section - Updated with legacy mention */}
      <div className="relative h-[60vh] bg-gradient-to-r from-[#22201E] to-[#E31F25] overflow-hidden">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <div className="max-w-3xl text-white">
            <motion.span 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block bg-[#D1A76D] text-white px-4 py-2 rounded-full mb-4"
            >
              30+ Years of Excellence
            </motion.span>
            <h1 className="text-5xl font-bold mb-6">Packaging Solutions That Speak for Your Brand</h1>
            <p className="text-xl leading-relaxed">
              At RG Pack, formerly known as Rudra Graphics, we bring over three decades of expertise in creating
              exceptional packaging solutions. Since our establishment, we have been delivering high-quality
              packaging and branding solutions for businesses across various industries.
            </p>
          </div>
        </div>
      </div>

      {/* Legacy Section - New Addition */}
      <div className="py-16 bg-gray-50">
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
      </div>

      {/* Vision & Mission Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="p-8 rounded-xl border-l-4 border-[#E31F25]"
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
              className="p-8 rounded-xl border-l-4 border-[#D1A76D]"
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
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <h2 className="text-[#E31F25] text-4xl font-bold mb-2">30+</h2>
              <p className="text-[#22201E] text-lg">Years of Excellence</p>
            </motion.div>
            {stats.slice(1).map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: (index + 1) * 0.1 }}
                className="text-center"
              >
                <h2 className="text-[#E31F25] text-4xl font-bold mb-2">{stat.number}</h2>
                <p className="text-[#22201E] text-lg">{stat.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* What Sets Us Apart Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-[#22201E] text-center mb-6">What Sets Us Apart?</h2>
          <div className="w-24 h-1 bg-[#E31F25] mx-auto mb-12"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg border-b-2 border-[#D1A76D]"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-[#22201E] mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Story Section - Updated */}
      <div className="py-20 bg-white">
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
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-[#22201E] to-[#E31F25] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's work together to create packaging solutions that elevate your brand and protect your products.
          </p>
          <button className="bg-[#D1A76D] hover:bg-[#D1A76D]/90 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors">
            Contact Us Today
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
