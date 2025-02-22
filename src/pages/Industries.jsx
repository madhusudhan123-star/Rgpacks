import { motion } from 'framer-motion';

function Industries() {
  const industries = [
    {
      title: "Health & Wellness",
      description: "Safe and hygienic packaging solutions for health products",
      icon: "💊",
      image: "https://dabbafactory.com/wp-content/uploads/2020/08/Untitled-1-02.png"
    },
    {
      title: "Jewellery & Accessories",
      description: "Elegant and secure packaging for precious items",
      icon: "💎",
      image: "https://dabbafactory.com/wp-content/uploads/2020/08/Untitled-1-02.png"
    },
    {
      title: "Liquor & Beverages",
      description: "Premium packaging for drinks and spirits",
      icon: "🍷",
      image: "https://dabbafactory.com/wp-content/uploads/2020/08/Untitled-1-02.png"
    },
    {
      title: "Sweets & Chocolates",
      description: "Attractive packaging for confectionery items",
      icon: "🍫",
      image: "https://dabbafactory.com/wp-content/uploads/2020/08/Untitled-1-02.png"
    },
    {
      title: "Fashion & Clothing",
      description: "Stylish packaging solutions for apparel",
      icon: "👕",
      image: "https://dabbafactory.com/wp-content/uploads/2020/08/Untitled-1-02.png"
    },
    {
      title: "Mobiles & Electronics",
      description: "Protective packaging for electronic devices",
      icon: "📱",
      image: "https://dabbafactory.com/wp-content/uploads/2020/08/Untitled-1-02.png"
    },
    {
      title: "Coffee & Tea",
      description: "Aroma-preserving packaging for beverages",
      icon: "☕",
      image: "https://dabbafactory.com/wp-content/uploads/2020/08/Untitled-1-02.png"
    },
    {
      title: "Food & Gourmet Packaging",
      description: "Food-grade packaging solutions",
      icon: "🍽",
      image: "https://dabbafactory.com/wp-content/uploads/2020/08/Untitled-1-02.png"
    },
    {
      title: "Festive & Wedding Packaging",
      description: "Decorative packaging for special occasions",
      icon: "🎁",
      image: "https://dabbafactory.com/wp-content/uploads/2020/08/Untitled-1-02.png"
    },
    {
      title: "Large Custom Boxes",
      description: "Heavy-duty packaging solutions",
      icon: "📦",
      image: "https://dabbafactory.com/wp-content/uploads/2020/08/Untitled-1-02.png"
    }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <div className="relative h-[50vh] bg-gradient-to-r from-[#22201E] to-[#E31F25] overflow-hidden">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <div className="max-w-3xl text-white">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl font-bold mb-6"
            >
              Industries We Serve
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl leading-relaxed"
            >
              We provide high-quality, customized packaging solutions for multiple industries,
              ensuring unique designs and premium materials.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Industries Grid */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="group relative overflow-hidden rounded-xl shadow-lg"
              >
                {/* Background Image */}
                <div className="h-64 overflow-hidden">
                  <img
                    src={industry.image}
                    alt={industry.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent flex flex-col justify-end p-6">
                  <div className="text-3xl mb-2">{industry.icon}</div>
                  <h3 className="text-white text-xl font-bold mb-2">{industry.title}</h3>
                  <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {industry.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-[#22201E] mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-gray-600 mb-8">
              Let's create packaging solutions that perfectly match your industry requirements.
            </p>
            <button className="bg-[#E31F25] hover:bg-[#D1A76D] text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors">
              Contact Us Today
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Industries;