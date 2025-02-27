import { useState } from 'react';
import { motion } from 'framer-motion';
import { copyToClipboard } from '../utils/clipboard';
import banner from '../assets/industries/card4.jpg';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

function Contact() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [copied, setCopied] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCopy = async (text, type) => {
    const success = await copyToClipboard(text);
    if (success) {
      setCopied(type);
      setTimeout(() => setCopied(''), 2000);
    }
  };

  const contactInfo = [
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: "Call Us",
      details: ["+91 98660 06169"],
      color: "border-[#E31F25]",
      type: "phone"
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Email Us",
      details: ["rgpack444@gmail.com"],
      color: "border-[#D1A76D]",
      type: "email"
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Visit Us",
      details: ["Plot D-4 and D-5, IDA,", "Gandhi Nagar Industrial Area,", "Kukatpally, Hyderabad,", "Telangana 500037"],
      color: "border-[#E31F25]"
    }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const loadingToast = toast.loading('Sending message...');

    try {
      // Create the form
      const form = document.createElement('form');
      form.method = 'POST';
      form.action = 'https://formsubmit.co/9db197774321ef2603fec18921f26677';

      // Add all form fields
      const formFields = {
        ...formData,
        _captcha: 'false',
        _template: 'table',
        _subject: `Contact Form: ${formData.subject}`,
        _next: window.location.origin // Redirect to home page after submission
      };

      // Create and append inputs
      Object.entries(formFields).forEach(([key, value]) => {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = key;
        input.value = value || ''; // Handle null/undefined values
        form.appendChild(input);
      });

      // Add form to body and submit
      document.body.appendChild(form);
      form.submit();

      // Show success message
      toast.success('Message sent successfully!', { id: loadingToast });

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });

      // Redirect after short delay
      setTimeout(() => {
        navigate('/');
      }, 2000);

    } catch (error) {
      console.error('Form submission error:', error);
      toast.error('Failed to send message. Please try again.', { id: loadingToast });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-16 md:pt-24">
      {/* Hero Section */}
      <div className="relative min-h-[30vh] md:h-[40vh] bg-[#E4272D] overflow-hidden">
        <div className="container mx-auto px-4 h-full flex flex-col lg:flex-row items-center py-8">
          <div className="w-full lg:w-1/2 text-white mb-6 lg:mb-0">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Get in Touch</h1>
            <p className="text-base md:text-xl leading-relaxed">
              Have questions about our packaging solutions? We're here to help and ready to serve your needs.
            </p>
          </div>
          <div className="w-full lg:w-1/2">
            <img src={banner} className='rounded-sm w-full h-auto' alt="RG Packs Banner" />
          </div>
        </div>
      </div>

      {/* Contact Information Cards */}
      <div className="py-8 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`p-4 md:p-8 rounded-xl shadow-lg border-l-4 ${info.color} bg-white`}
              >
                <div className="mb-4 text-[#22201E]">
                  <div className="w-8 h-8 md:w-12 md:h-12">{info.icon}</div>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-[#22201E] mb-4">{info.title}</h3>
                <div className="space-y-1">
                  {info.details.map((detail, i) => (
                    <p
                      key={i}
                      onClick={() => ['phone', 'email'].includes(info.type) && handleCopy(detail, `${info.type}-${i}`)}
                      className={`text-sm md:text-base text-gray-600 ${['phone', 'email'].includes(info.type) ? 'cursor-pointer hover:text-[#E31F25] relative' : ''}`}
                      title={['phone', 'email'].includes(info.type) ? 'Click to copy' : ''}
                    >
                      {detail}
                      {copied === `${info.type}-${i}` && (
                        <span className="absolute -top-8 left-0 bg-green-500 text-white text-xs py-1 px-2 rounded">
                          Copied!
                        </span>
                      )}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="py-8 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl md:text-4xl font-bold text-[#22201E] mb-4">Send Us a Message</h2>
              <div className="w-16 md:w-24 h-1 bg-[#E31F25] mx-auto mb-4 md:mb-6"></div>
              <p className="text-sm md:text-base text-gray-600">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="bg-white p-4 md:p-8 rounded-xl shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6">
                <div>
                  <label className="block text-gray-700 text-sm md:text-base mb-2">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 md:px-4 py-2 text-sm md:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E31F25] focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm md:text-base mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 md:px-4 py-2 text-sm md:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E31F25] focus:border-transparent"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6">
                <div>
                  <label className="block text-gray-700 text-sm md:text-base mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 md:px-4 py-2 text-sm md:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E31F25] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm md:text-base mb-2">Subject *</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3 md:px-4 py-2 text-sm md:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E31F25] focus:border-transparent"
                    required
                  />
                </div>
              </div>

              <div className="mb-4 md:mb-6">
                <label className="block text-gray-700 text-sm md:text-base mb-2">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows="6"
                  className="w-full px-3 md:px-4 py-2 text-sm md:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E31F25] focus:border-transparent"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full ${isSubmitting ? 'bg-gray-400' : 'bg-[#E31F25] hover:bg-[#D1A76D]'
                  } text-white py-2 md:py-3 px-4 md:px-6 rounded-lg transition-colors text-sm md:text-base font-semibold`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="h-[300px] md:h-[400px] w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.938577264183!2d78.42901231491453!3d17.493730988016674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91895bb8c43d%3A0xb5e3b3c0c5d0c1c1!2sIDA%20Gandhinagar%2C%20Kukatpally%2C%20Hyderabad%2C%20Telangana%20500037!5e0!3m2!1sen!2sin!4v1625001234567!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="RG Packs Location"
        ></iframe>
      </div>
    </div>
  );
}

export default Contact;
