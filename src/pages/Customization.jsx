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

    // const galleryImages = [
    //     {
    //         id: 1,
    //         src: 'https://plus.unsplash.com/premium_photo-1681122469507-2d5ad7656217?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGFja2FnZXxlbnwwfHwwfHx8MA%3D%3D',
    //         title: 'Premium Rigid Box',
    //         description: 'Luxury rigid box with gold foiling and embossing',
    //         category: 'Rigid Boxes'
    //     },
    //     {
    //         id: 2,
    //         src: 'https://plus.unsplash.com/premium_photo-1681122469507-2d5ad7656217?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGFja2FnZXxlbnwwfHwwfHx8MA%3D%3D',
    //         title: 'Food Packaging',
    //         description: 'Food-grade packaging with custom printing',
    //         category: 'Food Packaging'
    //     },
    //     {
    //         id: 3,
    //         src: 'https://plus.unsplash.com/premium_photo-1681122469507-2d5ad7656217?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGFja2FnZXxlbnwwfHwwfHx8MA%3D%3D',
    //         title: 'Gift Box Set',
    //         description: 'Custom gift box set with magnetic closure',
    //         category: 'Gift Boxes'
    //     },
    //     {
    //         id: 4,
    //         src: 'https://plus.unsplash.com/premium_photo-1681122469507-2d5ad7656217?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGFja2FnZXxlbnwwfHwwfHx8MA%3D%3D',
    //         title: 'Printed Packaging',
    //         description: 'Full-color printed packaging with spot UV',
    //         category: 'Printed Packaging'
    //     },
    //     // Add more gallery items as needed
    // ];

    // const Modal = ({ image, onClose }) => (
    //     <motion.div
    //         initial={{ opacity: 0 }}
    //         animate={{ opacity: 1 }}
    //         exit={{ opacity: 0 }}
    //         className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
    //         onClick={onClose}
    //     >
    //         <motion.div
    //             initial={{ scale: 0.5 }}
    //             animate={{ scale: 1 }}
    //             exit={{ scale: 0.5 }}
    //             className="bg-white rounded-xl overflow-hidden max-w-4xl w-full"
    //             onClick={e => e.stopPropagation()}
    //         >
    //             <div className="relative">
    //                 <img
    //                     src={image.src}
    //                     alt={image.title}
    //                     className="w-full h-[60vh] object-cover"
    //                 />
    //                 <button
    //                     onClick={onClose}
    //                     className="absolute top-4 right-4 bg-white/80 p-2 rounded-full hover:bg-white transition-colors"
    //                 >
    //                     <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    //                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    //                     </svg>
    //                 </button>
    //             </div>
    //             <div className="p-6">
    //                 <h3 className="text-2xl font-bold text-[#22201E] mb-2">{image.title}</h3>
    //                 <p className="text-gray-600">{image.description}</p>
    //                 <span className="inline-block mt-4 px-3 py-1 bg-[#E31F25]/10 text-[#E31F25] rounded-full text-sm">
    //                     {image.category}
    //                 </span>
    //             </div>
    //         </motion.div>
    //     </motion.div>
    // );

    return (
        <div className="pt-24">
            {/* Hero Section */}
            <div className="relative h-[50vh] bg-[#E4272D] overflow-hidden">
                {/* <div className="absolute inset-0 bg-black/40"></div> */}
                <div className="container mx-auto px-4 h-full flex flex-col lg:flex-row items-center relative z-10 py-8">
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
                    <div className="lg:w-1/2">
                        <img src={banner} className='rounded-sm w-full' alt="RG Packs Banner" />
                    </div>
                </div>
            </div>

            {/* Add Examples Section after Hero */}
            {/* <div className="py-20 bg-white">
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
            </div> */}

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
                                <div className="mb-4 text-[#22201E]">{step.icon}</div>
                                <div className="text-2xl font-bold text-[#22201E] mb-2">Step {step.number}</div>
                                <h3 className="text-xl font-semibold text-[#D1A76D] mb-3">{step.title}</h3>
                                <p className="text-gray-600">{step.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Updated Gallery Section */}
            {/* <div className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-4xl font-bold text-[#22201E] mb-4">Our Recent Customizations</h2>
                        <div className="w-24 h-1 bg-[#E31F25] mx-auto mb-6"></div>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Browse through our recent custom packaging projects for inspiration.
                            Click on any image to view details and specifications.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {galleryImages.map((image, index) => (
                            <motion.div
                                key={image.id}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group relative overflow-hidden rounded-xl bg-white shadow-lg"
                            >
                                <div className="aspect-square overflow-hidden">
                                    <motion.img
                                        src={image.src}
                                        alt={image.title}
                                        loading="lazy"
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        whileHover={{ scale: 1.1 }}
                                        onError={(e) => {
                                            e.target.src = '/images/placeholder.jpg';
                                        }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                            <h3 className="text-lg font-semibold mb-1">{image.title}</h3>
                                            <p className="text-sm text-gray-200">{image.category}</p>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => {
                                            setSelectedImage(image);
                                            setIsModalOpen(true);
                                        }}
                                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/90 text-[#22201E] px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white"
                                    >
                                        View Details
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div> */}

            {/* Image Modal */}
            {/* <AnimatePresence>
                {isModalOpen && selectedImage && (
                    <Modal
                        image={selectedImage}
                        onClose={() => {
                            setIsModalOpen(false);
                            setSelectedImage(null);
                        }}
                    />
                )}
            </AnimatePresence> */}

            {/* File Upload Section with Error Message */}
            <div className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className={`border-2 border-dashed rounded-xl p-10 text-center cursor-pointer transition-colors
                                ${isDragging ? 'border-[#E31F25] bg-[#E31F25]/10' : 'border-gray-300 hover:border-[#D1A76D]'}
                                ${fileError ? 'border-red-500' : ''}`}
                            onDragOver={handleDragOver}
                            onDragLeave={handleDragLeave}
                            onDrop={handleDrop}
                            role="button"
                            aria-label="File upload area"
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
                            {fileError && (
                                <p className="text-red-500 mt-2">{fileError}</p>
                            )}
                            <p className="text-sm text-gray-500 mt-2">
                                Supported formats: {allowedFileTypes.join(', ')} (Max 50MB)
                            </p>
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

            {/* Enhanced Query Form */}
            <div className="py-20 bg-gray-50" ref={queryFormRef}>
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
                            onSubmit={handleSubmit}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="bg-white p-8 rounded-xl shadow-lg"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* Form fields similar to Contact page */}
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
                                className={`w-full py-3 px-6 rounded-lg transition-colors ${isSubmitting
                                    ? 'bg-gray-400 cursor-not-allowed'
                                    : 'bg-[#E31F25] hover:bg-[#D1A76D]'
                                    } text-white`}
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

