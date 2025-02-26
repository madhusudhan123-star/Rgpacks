import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import banner from '../assets/home/four.jpg'
const Customization = () => {
    const queryFormRef = useRef(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        query: ''
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [file, setFile] = useState(null);
    const [isDragging, setIsDragging] = useState(false);
    const [fileError, setFileError] = useState('');
    const [selectedImage, setSelectedImage] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const steps = [
        {
            number: 1,
            title: "Download the dieline",
            description: "Get the template for your packaging design",
            icon: (
                <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
            )
        },
        {
            number: 2,
            title: "Place your design",
            description: "Add your custom design to the template",
            icon: (
                <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
            )
        },
        {
            number: 3,
            title: "Upload & order",
            description: "Submit your design and we'll handle the rest",
            icon: (
                <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                </svg>
            )
        }
    ];

    const customizationExamples = [
        {
            title: "Rigid Box Design",
            image: "https://plus.unsplash.com/premium_photo-1681122469507-2d5ad7656217?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGFja2FnZXxlbnwwfHwwfHx8MA%3D%3D", // Replace with actual image path
            description: "Premium rigid boxes with custom finishing"
        },
        {
            title: "Printed Packaging",
            image: "https://plus.unsplash.com/premium_photo-1681122469507-2d5ad7656217?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGFja2FnZXxlbnwwfHwwfHx8MA%3D%3D", // Replace with actual image path
            description: "High-quality offset printed designs"
        },
        {
            title: "Food Packaging",
            image: "https://plus.unsplash.com/premium_photo-1681122469507-2d5ad7656217?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGFja2FnZXxlbnwwfHwwfHx8MA%3D%3D", // Replace with actual image path
            description: "Food-grade custom packaging solutions"
        },
        {
            title: "Gift Boxes",
            image: "https://plus.unsplash.com/premium_photo-1681122469507-2d5ad7656217?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGFja2FnZXxlbnwwfHwwfHx8MA%3D%3D", // Replace with actual image path
            description: "Luxury gift packaging designs"
        }
    ];

    const allowedFileTypes = ['.ai', '.psd', '.pdf', '.jpg', '.png'];

    const validateFile = (file) => {
        const extension = '.' + file.name.split('.').pop().toLowerCase();
        if (!allowedFileTypes.includes(extension)) {
            setFileError(`Invalid file type. Allowed types: ${allowedFileTypes.join(', ')}`);
            return false;
        }
        if (file.size > 50 * 1024 * 1024) { // 50MB limit
            setFileError('File size should be less than 50MB');
            return false;
        }
        setFileError('');
        return true;
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = () => {
        setIsDragging(false);
    };

    const scrollToQueryForm = () => {
        queryFormRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const handleFileSuccess = (file) => {
        setFile(file);
        // Show success message
        alert('File uploaded successfully! Please fill in your details below.');
        // Scroll to query form
        scrollToQueryForm();
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setIsDragging(false);
        const droppedFile = e.dataTransfer.files[0];
        if (validateFile(droppedFile)) {
            handleFileSuccess(droppedFile);
        }
    };

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (validateFile(selectedFile)) {
            handleFileSuccess(selectedFile);
        }
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.email.trim()) newErrors.email = 'Email is required';
        if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = 'Invalid email format';
        if (!formData.query.trim()) newErrors.query = 'Query is required';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        setIsSubmitting(true);
        try {
            // Add your form submission logic here
            await new Promise(resolve => setTimeout(resolve, 1000)); // Simulated API call
            setFormData({ name: '', email: '', phone: '', query: '' });
            alert('Query submitted successfully!');
        } catch (error) {
            alert('Failed to submit query. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="pt-16 md:pt-24">
            {/* Hero Section */}
            <div className="relative min-h-[40vh] md:h-[50vh] bg-[#E4272D] overflow-hidden">
                <div className="container mx-auto px-4 h-full flex flex-col lg:flex-row items-center py-8">
                    <div className="w-full lg:w-1/2 text-white mb-6 lg:mb-0">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-3xl md:text-5xl font-bold mb-4"
                        >
                            Your Idea, Our Packing – A Perfect Match!
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-base md:text-xl leading-relaxed"
                        >
                            Upload your custom design, and let RG Pack transform it into high-quality, durable packaging that stands out!
                        </motion.p>
                    </div>
                    <div className="w-full lg:w-1/2">
                        <img src={banner} className='rounded-sm w-full h-auto' alt="RG Packs Banner" />
                    </div>
                </div>
            </div>

            {/* Process Steps */}
            <div className="py-12 md:py-20 bg-white">
                <div className="container mx-auto px-4">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-2xl md:text-4xl font-bold text-[#22201E] text-center mb-4"
                    >
                        Simple & Seamless Process
                    </motion.h2>
                    <div className="w-16 md:w-24 h-1 bg-[#E31F25] mx-auto mb-8 md:mb-12"></div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.number}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="text-center p-4 md:p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                            >
                                <div className="mb-4 text-[#22201E]">
                                    <div className="w-8 h-8 md:w-12 md:h-12 mx-auto">{step.icon}</div>
                                </div>
                                <div className="text-xl md:text-2xl font-bold text-[#22201E] mb-2">Step {step.number}</div>
                                <h3 className="text-lg md:text-xl font-semibold text-[#D1A76D] mb-2 md:mb-3">{step.title}</h3>
                                <p className="text-sm md:text-base text-gray-600">{step.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* File Upload Section */}
            <div className="py-12 md:py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className={`border-2 border-dashed rounded-xl p-4 md:p-10 text-center cursor-pointer transition-colors
                                ${isDragging ? 'border-[#E31F25] bg-[#E31F25]/10' : 'border-gray-300 hover:border-[#D1A76D]'}
                                ${fileError ? 'border-red-500' : ''}`}
                            onDragOver={handleDragOver}
                            onDragLeave={handleDragLeave}
                            onDrop={handleDrop}
                        >
                            <div className="text-3xl md:text-4xl mb-4">📁</div>
                            <h3 className="text-lg md:text-xl font-bold text-[#22201E] mb-2">
                                {file ? file.name : 'Drag and drop your design file here'}
                            </h3>
                            <p className="text-sm md:text-base text-gray-600 mb-4">or</p>
                            <label className="inline-block bg-[#E31F25] hover:bg-[#D1A76D] text-white px-4 md:px-6 py-2 md:py-3 rounded-lg cursor-pointer transition-colors text-sm md:text-base">
                                Browse Files
                                <input type="file" className="hidden" onChange={handleFileChange} accept=".ai,.psd,.pdf,.jpg,.png" />
                            </label>
                            {fileError && <p className="text-red-500 mt-2 text-sm md:text-base">{fileError}</p>}
                            <p className="text-xs md:text-sm text-gray-500 mt-2">
                                Supported formats: {allowedFileTypes.join(', ')} (Max 50MB)
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Contact Info */}
            <div className="py-12 md:py-20 bg-white">
                <div className="container mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="space-y-3 md:space-y-4"
                    >
                        <p className="text-base md:text-xl">Need help? Call us at <span className="text-[#E31F25] font-semibold">+91 98660 06169</span></p>
                        <p className="text-base md:text-xl">Visit us at <span className="text-[#D1A76D]">Kukatpally, Hyderabad, Telangana</span></p>
                    </motion.div>
                </div>
            </div>

            {/* Query Form */}
            <div className="py-12 md:py-20 bg-gray-50" ref={queryFormRef}>
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-center mb-8 md:mb-12"
                        >
                            <h2 className="text-2xl md:text-4xl font-bold text-[#22201E] mb-4">Unbox the answers you need!</h2>
                            <div className="w-16 md:w-24 h-1 bg-[#E31F25] mx-auto mb-4 md:mb-6"></div>
                            <p className="text-sm md:text-base text-gray-600">
                                Just drop your query in the box below, and our experts will get back to you with everything you need.
                            </p>
                        </motion.div>

                        <motion.form
                            onSubmit={handleSubmit}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="bg-white p-4 md:p-8 rounded-xl shadow-lg"
                        >
                            {/* Form fields with responsive classes */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6">
                                <div>
                                    <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
                                    <input
                                        id="name"
                                        type="text"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#E31F25] focus:border-transparent
                                            ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                                        required
                                    />
                                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                                </div>
                                <div>
                                    <label className="block text-gray-700 mb-2">Email</label>
                                    <input
                                        type="email"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#E31F25] focus:border-transparent
                                            ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                                        required
                                    />
                                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                                </div>
                            </div>
                            <div className="mb-6">
                                <label className="block text-gray-700 mb-2">Your Query</label>
                                <textarea
                                    value={formData.query}
                                    onChange={(e) => setFormData({ ...formData, query: e.target.value })}
                                    rows="4"
                                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#E31F25] focus:border-transparent
                                        ${errors.query ? 'border-red-500' : 'border-gray-300'}`}
                                    required
                                ></textarea>
                                {errors.query && <p className="text-red-500 text-sm mt-1">{errors.query}</p>}
                            </div>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`w-full py-2 md:py-3 px-4 md:px-6 rounded-lg transition-colors text-sm md:text-base font-semibold
                                    ${isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#E31F25] hover:bg-[#D1A76D]'} 
                                    text-white`}
                            >
                                {isSubmitting ? 'Submitting...' : 'Submit Query'}
                            </button>
                        </motion.form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Customization;

