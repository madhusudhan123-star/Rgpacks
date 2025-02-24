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
      icon: "https://images.unsplash.com/photo-1595246140625-573b715d11dc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBhY2thZ2V8ZW58MHx8MHx8fDA%3D", // Replace with actual image path
      title: "Customized Packaging",
      description: "Your products deserve more than just a box—they deserve a statement. Our customized packaging turns first impressions into lasting connections."
    },
    {
      id: 2,
      icon: "https://images.unsplash.com/photo-1595246140625-573b715d11dc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBhY2thZ2V8ZW58MHx8MHx8fDA%3D", // Replace with actual image path
      title: "High-Quality Printing",
      description: "From bold colors to intricate details, our high-quality offset printing makes every package a work of art, ensuring your brand stands out."
    },
    {
      id: 3,
      icon: "https://images.unsplash.com/photo-1595246140625-573b715d11dc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBhY2thZ2V8ZW58MHx8MHx8fDA%3D", // Replace with actual image path
      title: "Durable Solutions",
      description: "Say goodbye to shipping worries! Our durable cardboard and corrugated boxes keep your products safe, no matter where they go."
    },
    {
      id: 4,
      icon: "https://images.unsplash.com/photo-1595246140625-573b715d11dc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBhY2thZ2V8ZW58MHx8MHx8fDA%3D", // Replace with actual image path
      title: "Industry Experts",
      description: "Luxury, retail, food, electronics—whatever your business, we create packaging that blends style, function, and quality seamlessly."
    }
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
      <div className="mt-24 px-10 flex flex-col lg:flex-row min-h-[70vh]">
        {/* content section */}
        <div className="w-full lg:w-1/2 h-full flex flex-col justify-center items-start mb-8 lg:mb-0">
          <h1 className="text-[#E31F25] text-4xl md:text-5xl lg:text-7xl">Your Brand, Our Packaging</h1>
          <h2 className="text-[#D1A76D] text-2xl md:text-3xl lg:text-4xl mt-4">Elevate Every Unboxing Experience</h2>
          {/* <button
            onClick={handleGetStarted}
            className="bg-[#E31F25] hover:bg-[#D1A76D] text-white px-6 py-3 rounded-lg mt-8 transition-colors w-full sm:w-auto"
          >
            Get Started
          </button> */}
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
      <div className="py-8 md:py-16 bg-gray-50">
        <div className="">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#22201E] mb-4">Why Choose RG Pack?</h2>
            <div className="w-24 h-1 bg-[#E31F25] mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We deliver excellence in every package, combining innovation with reliability
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
            {features.map((feature) => (
              <div
                key={feature.id}
                className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="mb-6 flex justify-center">
                  <img
                    src={feature.icon}
                    alt={feature.title}
                    className=" object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-bold text-[#22201E] mb-4 text-center">
                  {feature.title}
                </h3>
                {/* <p className="text-gray-600 text-center leading-relaxed">
                  {feature.description}
                </p> */}
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
          className={` py-8 md:py-16 px-4 ${index !== sections.length - 1 ? 'border-b border-[#D1A76D]' : ''
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
        <div className="">
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
        <div className="">
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
