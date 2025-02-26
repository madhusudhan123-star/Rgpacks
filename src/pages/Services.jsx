import { motion } from 'framer-motion';
import specardone from '../assets/services/specard1.jpg';
import specardtwo from '../assets/services/specard2.jpg';
import specardthree from '../assets/services/specard3.jpg';
import cardone from '../assets/services/card1.jpg';
import cardtwo from '../assets/services/card2.jpg';
import cardthree from '../assets/services/card3.jpg';
import cardfour from '../assets/services/card4.jpg';

function Services() {
  const services = [
    {
      id: 1,
      title: "Rigid Boxes",
      // description: "Sturdy and stylish, our rigid boxes offer unmatched quality",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
          <path strokeLinecap="round" strokeLinejoin="round" d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
        </svg>
      ),
      image: cardone,
      features: [
        "Luxury packaging solutions",
        "jewellery boxes",
        "watches boxes",
        "electronics boxes",

      ]
    },
    {
      id: 2,
      title: " Offset Printing",
      // description: "High-quality printing services that bring your packaging designs to life with vibrant colors and precise details.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0 1 10.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0 .229 2.523a1.125 1.125 0 0 1-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0 0 21 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 0 0-1.913-.247M6.34 18H5.25A2.25 2.25 0 0 1 3 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 0 1 1.913-.247m10.5 0a48.536 48.536 0 0 0-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5Zm-3 0h.008v.008H15V10.5Z" />
        </svg>
      ),
      image: cardtwo,
      features: [
        "Brochures",
        "Packaging",
        "Business cards",
        "Promotional materials"
      ]
    },
    {
      id: 3,
      title: "Customized Printed Boxes",
      // description: "Creative packaging solutions that combine aesthetics with functionality to enhance your brand presence.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
        </svg>
      ),
      image: cardthree,
      features: [
        "cardboard packaging boxes",
        "brand logo and design for a professional look",
      ]
    },
    {
      id: 4,
      title: "Corrugated Boxes",
      // description: "Durable corrugated boxes and packaging solutions perfect for shipping and storage needs.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0-3-3m3 3 3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
        </svg>
      ),
      image: cardfour,
      features: [
        "Strong",
        "durable",
        "corrugated boxes",
      ]
    }
  ];

  const specialties = [
    {
      title: "Rigid Boxes",
      description: "Premium quality rigid boxes for luxury packaging needs",
      image: specardone
    },
    {
      title: "Corrugated Boxes",
      description: "Sturdy corrugated packaging for shipping and storage",
      image: specardtwo
    },
    {
      title: "Printed Boxes",
      description: "Custom printed boxes with high-quality graphics",
      image: specardthree
    }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-[#E4272D] overflow-hidden">
        {/* <div className="absolute inset-0 bg-black/40"></div> */}
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

      {/* Updated Services Grid */}
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
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                {/* Image Section */}
                <div className="h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>

                {/* Content Section */}
                <div className="p-8 border-b-2 border-[#D1A76D]">
                  <div className="flex items-center mb-4">
                    <div className="text-4xl mr-4">{service.icon}</div>
                    <h3 className="text-2xl font-bold text-[#22201E]">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-gray-700">
                        <span className="text-[#E31F25] mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Updated Specialties Section with Enhanced Image Display */}
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
                className="group relative overflow-hidden rounded-xl shadow-lg"
              >
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={specialty.image}
                    alt={specialty.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-white text-xl font-bold mb-2">{specialty.title}</h3>
                  <p className="text-gray-200 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    {specialty.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}

export default Services;
