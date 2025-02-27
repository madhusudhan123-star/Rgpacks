import { motion } from 'framer-motion';

const Privacy = () => {
    const policies = [
        {
            title: "Damaged, Wrong, or Defective Item Received",
            content: "At RG Packs, customer satisfaction is our top priority. If you receive a damaged, defective, or incorrect order, please contact us immediately at rgpack444@gmail.com or call us at +91 98660 06169. Our team will promptly resolve the issue to ensure a smooth experience for you.",
            icon: (
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        },
        {
            title: "Refunds/Exchanges",
            content: "As all our products are custom-made and tailored to specific client requirements, we do not offer refunds or exchanges unless the product is defective, damaged, or incorrect upon delivery. We take all necessary approvals from the customer at every stage of production to ensure quality and accuracy.",
            icon: (
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
            )
        },
        {
            title: "Cancellations",
            content: "Orders can be canceled within 48 hours of placement. If you wish to cancel your order, please email rgpack444@gmail.com or call us at +91 98660 06169, and our team will process a full refund. Orders cannot be canceled after this period, as they move into production.",
            icon: (
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            )
        },
        {
            title: "Pricing Policy",
            content: "RG Packs reserves the right to modify prices at any time based on material costs, production changes, or other factors. Any such price variations will be communicated through the website. If a price change occurs after an order is placed, customers have the right to cancel their order if the revised price does not align with their expectations.",
            icon: (
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        }
    ];

    return (
        <div className="pt-24 bg-gray-50">
            {/* Hero Section */}
            <div className="bg-[#E4272D] py-16">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center text-white"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Policies</h1>
                        <div className="w-24 h-1 bg-white mx-auto"></div>
                    </motion.div>
                </div>
            </div>

            {/* Policies Section */}
            <div className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
                        {policies.map((policy, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white p-6 rounded-xl shadow-lg"
                            >
                                <div className="flex items-start gap-6">
                                    <div className="text-[#E4272D] flex-shrink-0">
                                        {policy.icon}
                                    </div>
                                    <div>
                                        <h2 className="text-xl font-bold text-[#22201E] mb-3">{policy.title}</h2>
                                        <p className="text-gray-600 leading-relaxed">{policy.content}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Contact Section */}
            <div className="py-12 bg-white">
                <div className="container mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="max-w-2xl mx-auto"
                    >
                        <h3 className="text-2xl font-bold text-[#22201E] mb-4">Need More Information?</h3>
                        <p className="text-gray-600 mb-6">
                            If you have any questions about our policies, please don't hesitate to contact us.
                        </p>
                        <div className="space-y-2">
                            <p className="text-lg">
                                Email: <a href="mailto:rgpack444@gmail.com" className="text-[#E4272D] hover:text-[#D1A76D]">rgpack444@gmail.com</a>
                            </p>
                            <p className="text-lg">
                                Phone: <a href="tel:+919866006169" className="text-[#E4272D] hover:text-[#D1A76D]">+91 98660 06169</a>
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Privacy;
