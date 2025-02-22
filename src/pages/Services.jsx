import { motion } from 'framer-motion';

function Services() {
  const services = [
    {
      id: 1,
      title: "Custom Box Manufacturing",
      description: "Tailor-made boxes designed to your exact specifications, ensuring perfect fit and protection for your products.",
      icon: "📦",
      features: [
        "Custom sizes and designs",
        "Multiple material options",
        "Structural engineering",
        "Prototype development"
      ]
    },
    {
      id: 2,
      title: "Offset Printing Solutions",
      description: "High-quality printing services that bring your packaging designs to life with vibrant colors and precise details.",
      icon: "🖨️",
      features: [
        "Full-color printing",
        "Special finishes available",
        "Color matching",
        "Quality control"
      ]
    },
    {
      id: 3,
      title: "Packaging Design",
      description: "Creative packaging solutions that combine aesthetics with functionality to enhance your brand presence.",
      icon: "🎨",
      features: [
        "Brand integration",
        "3D visualization",
        "Material consultation",
        "Design optimization"
      ]
    },
    {
      id: 4,
      title: "Corrugated Packaging",
      description: "Durable corrugated boxes and packaging solutions perfect for shipping and storage needs.",
      icon: "📮",
      features: [
        "Various flute options",
        "Custom strengthening",
        "Eco-friendly materials",
        "Bulk production"
      ]
    }
  ];

  const specialties = [
    {
      title: "Rigid Boxes",
      description: "Premium quality rigid boxes for luxury packaging needs",
      image: "https://dabbafactory.com/wp-content/uploads/2020/08/Untitled-1-02.png"
    },
    {
      title: "Corrugated Boxes",
      description: "Sturdy corrugated packaging for shipping and storage",
      image: "https://dabbafactory.com/wp-content/uploads/2020/08/Untitled-1-02.png"
    },
    {
      title: "Printed Boxes",
      description: "Custom printed boxes with high-quality graphics",
      image: "https://dabbafactory.com/wp-content/uploads/2020/08/Untitled-1-02.png"
    }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-gradient-to-r from-[#22201E] to-[#E31F25] overflow-hidden">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <div className="max-w-3xl text-white">
            <h1 className="text-5xl font-bold mb-6">Comprehensive Packaging Solutions</h1>
            <p className="text-xl leading-relaxed">
              From design to delivery, we offer end-to-end packaging services that help your products
              stand out in the market while ensuring their protection throughout the supply chain.
            </p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-[#22201E] text-center mb-4">Our Services</h2>
          <div className="w-24 h-1 bg-[#E31F25] mx-auto mb-12"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg border-b-2 border-[#D1A76D] hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-[#22201E] mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <span className="text-[#E31F25] mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Specialties Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-[#22201E] text-center mb-4">Our Specialties</h2>
          <div className="w-24 h-1 bg-[#E31F25] mx-auto mb-12"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {specialties.map((specialty, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-xl"
              >
                <img 
                  src={specialty.image} 
                  alt={specialty.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-white text-xl font-bold mb-2">{specialty.title}</h3>
                  <p className="text-gray-200">{specialty.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-[#22201E] to-[#E31F25] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss how our packaging solutions can help your business grow.
          </p>
          <button className="bg-[#D1A76D] hover:bg-[#D1A76D]/90 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors">
            Get Started Today
          </button>
        </div>
      </div>
    </div>
  );
}

export default Services;
