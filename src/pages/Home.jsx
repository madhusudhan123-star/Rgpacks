import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  // Sample images array - replace with your actual images
  const images = [
    { id: 1, url: 'https://images.unsplash.com/photo-1595246140625-573b715d11dc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBhY2thZ2V8ZW58MHx8MHx8fDA%3D', alt: 'Product 1' },
    { id: 2, url: 'https://images.unsplash.com/photo-1595246140625-573b715d11dc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBhY2thZ2V8ZW58MHx8MHx8fDA%3D', alt: 'Product 2' },
    { id: 3, url: 'https://images.unsplash.com/photo-1595246140625-573b715d11dc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBhY2thZ2V8ZW58MHx8MHx8fDA%3D', alt: 'Product 3' },
    { id: 4, url: 'https://images.unsplash.com/photo-1595246140625-573b715d11dc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBhY2thZ2V8ZW58MHx8MHx8fDA%3D', alt: 'Product 4' },
  ];

  // Initialize with the first image
  const [selectedImage, setSelectedImage] = useState(images[0]);

  const features = [
    {
      id: 1,
      icon: "🎨",
      title: "Customized Packaging",
      description: "Your products deserve more than just a box—they deserve a statement. Our customized packaging turns first impressions into lasting connections."
    },
    {
      id: 2,
      icon: "🖨️",
      title: "High-Quality Printing",
      description: "From bold colors to intricate details, our high-quality offset printing makes every package a work of art, ensuring your brand stands out."
    },
    {
      id: 3,
      icon: "📦",
      title: "Durable Solutions",
      description: "Say goodbye to shipping worries! Our durable cardboard and corrugated boxes keep your products safe, no matter where they go."
    },
    {
      id: 4,
      icon: "🏭",
      title: "Industry Experts",
      description: "Luxury, retail, food, electronics—whatever your business, we create packaging that blends style, function, and quality seamlessly."
    }
  ];

  const benefits = [
    {
      id: 1,
      icon: "💎",
      title: "Premium Quality",
      description: "Get top-notch packaging solutions that ensure product safety and presentation"
    },
    {
      id: 2,
      icon: "🔄",
      title: "Quick Turnaround",
      description: "Fast production cycles and on-time delivery for all your orders"
    },
    {
      id: 3,
      icon: "💡",
      title: "Expert Guidance",
      description: "Professional advice on choosing the right packaging solutions"
    },
    {
      id: 4,
      icon: "🌟",
      title: "Custom Design",
      description: "Tailored solutions that match your brand identity perfectly"
    }
  ];

  const sections = [
    {
      id: 1,
      title: "Premium Packaging Solutions",
      description: "We deliver high-quality packaging solutions tailored to your specific needs. Our expert team ensures that your products are protected and presented in the best possible way.",
      image: "https://images.unsplash.com/photo-1577705998148-6da4f3963bc8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGFja2FnZXxlbnwwfHwwfHx8MA%3D%3D",
      buttonText: "Learn More"
    },
    {
      id: 2,
      title: "Sustainable Packaging",
      description: "Committed to environmental responsibility, we offer eco-friendly packaging options that reduce environmental impact while maintaining premium quality and protection.",
      image: "https://plus.unsplash.com/premium_photo-1681122469507-2d5ad7656217?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGFja2FnZXxlbnwwfHwwfHx8MA%3D%3D",
      buttonText: "Explore Options"
    },
    {
      id: 3,
      title: "Custom Design Services",
      description: "Our design team works closely with you to create unique packaging solutions that reflect your brand identity and meet your specific requirements.",
      image: "https://images.unsplash.com/photo-1600009723611-7473882201fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBhY2thZ2V8ZW58MHx8MHx8fDA%3D",
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

  const handleExploreOptions = () => {
    navigate('/services');
  };

  const handleStartDesign = () => {
    navigate('/customization');
  };

  return (
    <div className="p-4">
      {/* Hero Section */}
      <div className="mt-24 flex flex-col lg:flex-row min-h-[70vh]">
        {/* content section */}
        <div className="w-full lg:w-1/2 h-full flex flex-col justify-center items-start mb-8 lg:mb-0">
          <h1 className="text-[#E31F25] text-4xl md:text-5xl lg:text-7xl">Your Brand, Our Packaging</h1>
          <h2 className="text-[#D1A76D] text-2xl md:text-3xl lg:text-4xl mt-4">Elevate Every Unboxing Experience</h2>
          <p className="text-[#22201E] text-base lg:text-lg mt-6 leading-relaxed">
            At RG Pack, we understand that packaging is more than just a box—it's the first impression of your
            brand. We specialize in printing and packaging, offering high-quality rigid boxes, corrugated boxes,
            cardboard packaging boxes, and customized printed boxes that make your products stand out.
          </p>
          <p className="text-[#22201E] text-base lg:text-lg mt-4 leading-relaxed">
            Whether you need luxury packaging, eco-friendly cardboard solutions, or branding through custom
            printed boxes, our state-of-the-art offset printing technology ensures perfection in every detail.
          </p>
          <button
            onClick={handleGetStarted}
            className="bg-[#E31F25] hover:bg-[#D1A76D] text-white px-6 py-3 rounded-lg mt-8 transition-colors w-full sm:w-auto"
          >
            Get Started
          </button>
        </div>
        {/* image section */}
        <div className="w-full lg:w-1/2">
          {/* Preview Section */}
          <div className="mb-4 h-48 md:h-64 rounded-lg overflow-hidden">
            {selectedImage ? (
              <img
                src={selectedImage.url}
                alt={selectedImage.alt}
                className="w-full h-full object-contain"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                Select an image to preview
              </div>
            )}
          </div>

          {/* Thumbnail Gallery */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {images.map((image) => (
              <div
                key={image.id}
                onClick={() => setSelectedImage(image)}
                className={`cursor-pointer rounded-lg overflow-hidden border-2 ${selectedImage?.id === image.id ? 'border-green-500' : 'border-transparent'
                  }`}
              >
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-24 object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose RG Pack Section */}
      <div className="py-8 md:py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#22201E] mb-4">Why Choose RG Pack?</h2>
          <div className="w-24 h-1 bg-[#E31F25] mx-auto mb-6"></div>
        </div>
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 px-4">
            {features.map((feature) => (
              <div
                key={feature.id}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-b-2 border-[#D1A76D]"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-[#22201E] mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* product images */}
      <div>

      </div>


      {/* Main Title */}
      <div className="text-center py-16">
        <h2 className="text-4xl font-bold text-[#22201E] mb-4">Our Services</h2>
        <div className="w-24 h-1 bg-[#E31F25] mx-auto"></div>
      </div>

      {/* Alternating Sections */}
      {sections.map((section, index) => (
        <div
          key={section.id}
          className={`container mx-auto py-8 md:py-16 px-4 ${index !== sections.length - 1 ? 'border-b border-[#D1A76D]' : ''
            }`}
        >
          <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
            } items-center gap-8 lg:gap-12`}
          >
            {/* Image Section */}
            <div className="w-full lg:w-1/2">
              <img
                src={section.image}
                alt={section.title}
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>

            {/* Content Section */}
            <div className="w-full lg:w-1/2 space-y-4 md:space-y-6 text-center lg:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                {section.title}
              </h3>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                {section.description}
              </p>
              <button
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
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Benefits Section */}
      <div className="py-8 md:py-16 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#22201E] mb-4">How Do You Benefit?</h2>
            <div className="w-24 h-1 bg-[#E31F25] mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Experience the advantages of partnering with a leading packaging solutions provider
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
            {benefits.map((benefit) => (
              <div
                key={benefit.id}
                className="group bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 border-b-2 border-[#D1A76D]"
              >
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Us Section */}
      <div className="py-8 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#22201E] mb-4">Contact Us</h2>
            <div className="w-24 h-1 bg-[#E31F25] mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Get in touch with us for any questions or inquiries about our packaging solutions
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Contact Form */}
            <div className="w-full lg:w-2/3">
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
            </div>

            {/* Contact Information */}
            <div className="w-full lg:w-1/3 space-y-4 md:space-y-8">
              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-[#D1A76D]">
                <div className="text-3xl mb-4">📞</div>
                <h3 className="text-xl font-semibold mb-2">Phone</h3>
                <p className="text-gray-600">+91 98660 06169</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-[#D1A76D]">
                <div className="text-3xl mb-4">✉️</div>
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <p className="text-gray-600">info@rgpack.in</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-[#D1A76D]">
                <div className="text-3xl mb-4">📍</div>
                <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
                <p className="text-gray-600">
                  Plot D-4 and D-5, IDA, Gandhi Nagar Industrial Area, Kukatpally, Hyderabad, Telangana 500037
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Home;
