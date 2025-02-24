import { useState } from 'react';
import { motion } from 'framer-motion';

const Customization = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    query: ''
  });

  const [file, setFile] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  const steps = [
    {
      number: 1,
      title: "Download the dieline",
      description: "Get the template for your packaging design",
      icon: "⬇️"
    },
    {
      number: 2,
      title: "Place your design",
      description: "Add your custom design to the template",
      icon: "🎨"
    },
    {
      number: 3,
      title: "Upload & order",
      description: "Submit your design and we'll handle the rest",
      icon: "📤"
    }
  ];

  const customizationExamples = [
    {
      title: "Rigid Box Design",
      image: "https://example.com/rigid-box.jpg", // Replace with actual image path
      description: "Premium rigid boxes with custom finishing"
    },
    {
      title: "Printed Packaging",
      image: "https://example.com/printed-box.jpg", // Replace with actual image path
      description: "High-quality offset printed designs"
    },
    {
      title: "Food Packaging",
      image: "https://example.com/food-box.jpg", // Replace with actual image path
      description: "Food-grade custom packaging solutions"
    },
    {
      title: "Gift Boxes",
      image: "https://example.com/gift-box.jpg", // Replace with actual image path
      description: "Luxury gift packaging designs"
    }
  ];

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFile = e.dataTransfer.files[0];
    setFile(droppedFile);
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

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
              Your Idea, Our Packing – A Perfect Match!
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl leading-relaxed"
            >
              Upload your custom design, and let RG Pack transform it into high-quality, durable packaging that stands out!
            </motion.p>
          </div>
        </div>
      </div>

      {/* Add Examples Section after Hero */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl font-bold text-[#22201E] text-center mb-4"
          >
            Customization Examples
          </motion.h2>
          <div className="w-24 h-1 bg-[#E31F25] mx-auto mb-12"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {customizationExamples.map((example, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-xl shadow-lg"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={example.image}
                    alt={example.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-white text-xl font-bold mb-2">{example.title}</h3>
                  <p className="text-gray-200 text-sm">{example.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Process Steps */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl font-bold text-[#22201E] text-center mb-4"
          >
            Simple & Seamless Process
          </motion.h2>
          <div className="w-24 h-1 bg-[#E31F25] mx-auto mb-12"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl mb-4">{step.icon}</div>
                <div className="text-2xl font-bold text-[#22201E] mb-2">Step {step.number}</div>
                <h3 className="text-xl font-semibold text-[#D1A76D] mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Add Gallery Section before File Upload */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-[#22201E] mb-4">Our Recent Customizations</h2>
            <div className="w-24 h-1 bg-[#E31F25] mx-auto mb-6"></div>
            <p className="text-gray-600">
              Browse through our recent custom packaging projects for inspiration
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[...Array(8)].map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group overflow-hidden rounded-lg aspect-square"
              >
                <img
                  src={`https://example.com/gallery-${index + 1}.jpg`} // Replace with actual image paths
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button className="bg-white text-[#22201E] px-4 py-2 rounded-lg text-sm transform scale-0 group-hover:scale-100 transition-transform duration-300">
                    View Details
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* File Upload Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className={`border-2 border-dashed rounded-xl p-10 text-center cursor-pointer transition-colors
                ${isDragging ? 'border-[#E31F25] bg-[#E31F25]/10' : 'border-gray-300 hover:border-[#D1A76D]'}`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              <div className="text-4xl mb-4">📁</div>
              <h3 className="text-xl font-bold text-[#22201E] mb-2">
                {file ? file.name : 'Drag and drop your design file here'}
              </h3>
              <p className="text-gray-600 mb-4">or</p>
              <label className="bg-[#E31F25] hover:bg-[#D1A76D] text-white px-6 py-3 rounded-lg cursor-pointer transition-colors">
                Browse Files
                <input
                  type="file"
                  className="hidden"
                  onChange={handleFileChange}
                  accept=".ai,.psd,.pdf,.jpg,.png"
                />
              </label>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Contact Info */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <p className="text-xl">Need help? Call us at <span className="text-[#E31F25] font-semibold">+91 98660 06169</span></p>
            <p className="text-xl">Visit us at <span className="text-[#D1A76D]">Kukatpally, Hyderabad, Telangana</span></p>
          </motion.div>
        </div>
      </div>

      {/* Query Form */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-[#22201E] mb-4">Unbox the answers you need!</h2>
              <div className="w-24 h-1 bg-[#E31F25] mx-auto mb-6"></div>
              <p className="text-gray-600">
                Just drop your query in the box below, and our experts will get back to you with everything you need.
                Let's create packaging that speaks for your brand!
              </p>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Form fields similar to Contact page */}
                <div>
                  <label className="block text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E31F25] focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E31F25] focus:border-transparent"
                    required
                  />
                </div>
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 mb-2">Your Query</label>
                <textarea
                  value={formData.query}
                  onChange={(e) => setFormData({ ...formData, query: e.target.value })}
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E31F25] focus:border-transparent"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#E31F25] hover:bg-[#D1A76D] text-white py-3 px-6 rounded-lg transition-colors"
              >
                Submit Query
              </button>
            </motion.form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customization;