import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import ScrollToTop from '../ScrollToTop';
import image from "@/assets/bg-elements/DotsWithLines_illustration_UseBackgroundTurquoise_RGB.svg"
import bpo from "@/assets/bpo/process.png"
import { Link } from 'react-router-dom';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface ServiceCardProps {
    title: string;
    description: string;
    icon: string;
    highlight?: boolean;
}

interface FAQItem {
    question: string;
    answer: string;
}

// Animation variants
const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5
        }
    }
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const fadeIn = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.8 } }
};

const slideInFromLeft = {
    hidden: { opacity: 0, x: -50 },
    show: { opacity: 1, x: 0, transition: { duration: 0.6 } }
};

const slideInFromRight = {
    hidden: { opacity: 0, x: 50 },
    show: { opacity: 1, x: 0, transition: { duration: 0.6 } }
};

const AnimatedSection = ({ children, variant = fadeIn, threshold = 0.1 }: { children: React.ReactNode, variant?: any, threshold?: number }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: threshold
    });

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            variants={variant}
        >
            {children}
        </motion.div>
    );
};

const HRSupportServices: React.FC = () => {
    const [activeFaq, setActiveFaq] = useState<number | null>(null);
    const [email, setEmail] = useState<string>('');

    const toggleFaq = (index: number) => {
        setActiveFaq(activeFaq === index ? null : index);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert(`Thank you for your interest! We'll contact you at ${email}`);
        setEmail('');
    };

    const services: ServiceCardProps[] = [
        {
            title: 'Permanent Staffing',
            description: 'We provide highly skilled permanent employees tailored to your company culture and long-term technical needs.',
            icon: 'https://cdn-icons-png.flaticon.com/512/6818/6818210.png',
            highlight: true
        },
        {
            title: 'Temporary Staffing',
            description: 'Flexible temporary technical staff to meet your project deadlines and seasonal demands.',
            icon: 'https://www.costflex.com/wp-content/uploads/temporary-permanent-dss-staffing-icon.png'
        },
        {
            title: 'Contract-to-Hire',
            description: 'Try before you commit with our contract-to-hire solutions that reduce hiring risks.',
            icon: 'https://cdn-icons-png.flaticon.com/512/426/426351.png'
        },
        {
            title: 'Web Developers',
            description: 'Expert frontend and backend developers proficient in modern frameworks and technologies.',
            icon: 'https://cdn-icons-png.freepik.com/256/7270/7270111.png?semt=ais_hybrid',
            highlight: true
        },
        {
            title: 'App Developers',
            description: 'iOS and Android specialists who can build performant, user-friendly mobile applications.',
            icon: 'https://cdn-icons-png.flaticon.com/512/1436/1436353.png'
        },
        {
            title: 'Graphics Designers',
            description: 'Creative professionals for branding, UI/UX, marketing materials, and visual content.',
            icon: '/graphics.png'
        },
        {
            title: '3D Designers',
            description: 'Talented 3D artists for product visualization, architectural rendering, and animation.',
            icon: '/thread.webp'
        },
        {
            title: 'QA Specialists',
            description: 'Quality assurance professionals to ensure your products meet the highest standards.',
            icon: 'https://www.nfocus.co.uk/wp-content/uploads/2022/01/nfocus_specialist_testing_icon.png'
        }
    ];

    const faqs: FAQItem[] = [
        {
            question: 'What types of employment contracts do you offer?',
            answer: 'We provide permanent, temporary, contract-to-hire, and project-based contracts. Our solutions include full-time, part-time, and hourly arrangements tailored to your specific needs.'
        },
        {
            question: 'How do you vet your technical candidates?',
            answer: 'Our 5-stage vetting process includes: 1) Technical skill assessment, 2) Portfolio/code review, 3) Behavioral interview, 4) Technical challenge, and 5) Final cultural fit evaluation.'
        },
        {
            question: 'What technologies do your developers specialize in?',
            answer: 'Our talent pool includes experts in JavaScript (React, Angular, Vue), Python, Java, .NET, PHP, Swift, Kotlin, Flutter, and more. We also cover DevOps, cloud services (AWS, Azure), and database technologies.'
        },
        {
            question: 'Can you provide entire development teams?',
            answer: 'Absolutely. We can assemble complete cross-functional teams including project managers, developers, UI/UX designers, QA engineers, and DevOps specialists to accelerate your projects.'
        },
        {
            question: 'What industries do you serve?',
            answer: 'We support tech startups, enterprise organizations, e-commerce platforms, healthcare tech, fintech, edtech, manufacturing, and more across various sectors.'
        },
        {
            question: 'What are your typical response times?',
            answer: 'For urgent requirements, we can present qualified candidates within 48 hours. Standard placements typically take 1-2 weeks depending on role complexity.'
        }
    ];

    const stats = [
        { value: '95%', label: 'Placement Success Rate' },
        { value: '48h', label: 'Average Time to First Candidate' },
        { value: '10+', label: 'Technical Professionals Placed' },
        { value: '4.9/5', label: 'Client Satisfaction Score' }
    ];

    const techStack = [
        { name: 'React', icon: '⚛️' },
        { name: 'Angular', icon: '🅰️' },
        { name: 'Vue.js', icon: '🖖' },
        { name: 'Node.js', icon: '⬢' },
        { name: 'Python', icon: '🐍' },
        { name: 'Django', icon: 'D' },
        { name: 'Flask', icon: 'F' },
        { name: 'Java', icon: '☕' },
        { name: 'Spring', icon: '🌱' },
        { name: '.NET', icon: '.NET' },
        { name: 'Swift', icon: '🐦' },
        { name: 'Kotlin', icon: 'K' },
        { name: 'Flutter', icon: '💙' },
        { name: 'React Native', icon: '📱' },
        { name: 'AWS', icon: '☁️' },
        { name: 'Azure', icon: '🔷' },
        { name: 'Docker', icon: '🐳' },
        { name: 'Kubernetes', icon: '⚓' },
        { name: 'Figma', icon: '✏️' },
        { name: 'Adobe Suite', icon: '🎨' },
        { name: 'Blender', icon: '🌀' },
        { name: 'Maya', icon: 'M' },
        { name: 'Unity', icon: 'U' },
        { name: 'Unreal Engine', icon: 'U' }
    ];

    return (
        <div className="bg-[#06140b] text-gray-100 lg:py-50 py-30 font-nunito">
            <ScrollToTop />
            {/* Hero Section */}
            <AnimatedSection variant={fadeIn}>
                <section className="relative sm:py-28">
                    <div className="container mx-auto  flex flex-col md:flex-row items-center">
                        <motion.div
                            className="md:w-1/2 mb-10 md:mb-0"
                            variants={slideInFromLeft}
                        >
                            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                                Technical Talent Solutions for Growing Businesses
                            </h1>
                            <p className="sm:text-xl mb-8 text-blue-200">
                                We connect companies with top-tier web developers, app specialists, and creative professionals through flexible staffing solutions.
                            </p>
                            <div className="flex  sm:flex-row gap-4">
                                <Link to="/contact">
                                    <button className="bg-blue-500 hover:bg-blue-600 text-white sm:px-8 px-4 py-3 rounded-lg font-semibold sm:text-lg transition duration-300 transform hover:scale-105">
                                        Request Talent
                                    </button>
                                </Link>

                                <button className="border-2 border-blue-400 text-blue-400 hover:bg-blue-900/30 sm:px-8 px-4 py-3 rounded-lg font-semibold sm:text-lg transition duration-300 transform hover:scale-105">
                                    Learn More
                                </button>
                            </div>
                        </motion.div>
                        <motion.div
                            className="md:w-1/2"
                            variants={slideInFromRight}
                        >
                            <img
                                src={image}
                                alt="Team collaborating"
                                className="rounded-xl rotate-45 w-full max-w-xl mx-auto"
                            />
                        </motion.div>
                    </div>
                </section>
            </AnimatedSection>

            {/* Services Section */}
            <AnimatedSection>
                <section className="py-20 overflow-x-hidden">
                    <div className="container mx-auto px-6">
                        <motion.div
                            className="sm:text-center mb-16"
                            variants={fadeIn}
                        >
                            <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
                                Our Comprehensive Staffing Services
                            </h2>
                            <p className="sm:text-xl text-blue-200 max-w-3xl mx-auto">
                                Flexible solutions designed to meet your technical workforce needs at every stage
                            </p>
                        </motion.div>

                        <motion.div
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
                            variants={container}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                        >
                            {services.map((service, index) => (
                                <motion.div
                                    key={index}
                                    variants={item}
                                    whileHover={{ y: -5 }}
                                    className={`bg-gray-800 rounded-xl shadow-lg overflow-hidden p-6 transition-all duration-300 hover:shadow-xl ${service.highlight ? 'border-t-4 border-blue-500' : ''}`}
                                >
                                    <div className="text-4xl h mb-4">
                                        <img className='h-15 w-15' src={service.icon} alt="" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                                    <p className="text-gray-300">{service.description}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>
            </AnimatedSection>

            {/* Stats Section */}
            <AnimatedSection>
                <section className="py-16 bg-blue-900/30 backdrop-blur-sm overflow-x-hidden">
                    <div className="container mx-auto px-6">
                        <motion.div
                            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
                            variants={container}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                        >
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    variants={item}
                                    className="p-4"
                                >
                                    <div className="text-4xl font-bold mb-2 text-blue-400">{stat.value}</div>
                                    <div className="text-blue-100">{stat.label}</div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>
            </AnimatedSection>

            {/* How We Work Section */}
            <AnimatedSection>
                <section className="py-20 bg-gray-900/50 overflow-x-hidden">
                    <div className="container mx-auto px-6">
                        <motion.div
                            className="sm:text-center mb-16"
                            variants={fadeIn}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                Our Proven Hiring Process
                            </h2>
                            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
                                A streamlined approach to connecting you with the right talent
                            </p>
                        </motion.div>

                        <motion.div
                            className="flex flex-col md:flex-row gap-8"
                            variants={container}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                        >
                            <motion.div
                                className="md:w-1/2"
                                variants={slideInFromLeft}
                            >
                                <img
                                    src={bpo}
                                    alt="Hiring process illustration"
                                    className="rounded-full shadow-md w-full "
                                />
                            </motion.div>
                            <motion.div
                                className="md:w-1/2"
                                variants={slideInFromRight}
                            >
                                <div className="space-y-8">
                                    {[
                                        {
                                            "step": "1",
                                            "title": "Needs Assessment",
                                            "description": "We begin with an in-depth needs assessment to understand your technical hiring goals, project requirements, team structure, and company culture. This step allows us to tailor our recruitment strategy to align with your specific business objectives, ensuring a perfect fit for both technical skills and cultural compatibility."
                                        },
                                        {
                                            "step": "2",
                                            "title": "Talent Sourcing",
                                            "description": "Using our global talent network and advanced recruitment tools, we proactively source top-tier software engineers, developers, and IT professionals. We focus on identifying candidates with proven experience, aligned skill sets, and availability to meet your project timelines."
                                        },
                                        {
                                            "step": "3",
                                            "title": "Rigorous Screening",
                                            "description": "Every candidate undergoes a multi-layered vetting process, including technical skills assessments, code reviews, and behavioral interviews. We evaluate their problem-solving abilities, communication skills, and real-world experience to ensure they meet the highest quality standards in tech recruitment."
                                        },
                                        {
                                            "step": "4",
                                            "title": "Client Interviews",
                                            "description": "Once vetted, we present you with a shortlist of highly qualified candidates ready for your review. You conduct final interviews to assess technical alignment and team compatibility, giving you full control in selecting the best fit for your engineering team."
                                        },
                                        {
                                            "step": "5",
                                            "title": "Onboarding Support",
                                            "description": "After selection, we streamline the onboarding process by handling contracts, documentation, and communication. Our onboarding experts ensure a seamless transition, helping new hires integrate quickly into your workflow and company environment, minimizing downtime and maximizing productivity."
                                        }
                                    ]
                                        .map((item, index) => (
                                            <motion.div
                                                key={index}
                                                className="flex gap-4"
                                                initial="hidden"
                                                animate="show"
                                                variants={itemVariants}
                                                whileHover={{ x: 5 }}
                                            >
                                                <div className="flex-shrink-0 h-12 w-12 rounded-full bg-blue-900/50 text-blue-400 flex items-center justify-center text-xl font-bold border border-blue-400/30">
                                                    {item.step}
                                                </div>
                                                <div>
                                                    <h3 className="text-xl font-semibold text-white mb-1">{item.title}</h3>
                                                    <p className="text-gray-300 sm:text-lg text-sm">{item.description}</p>
                                                </div>
                                            </motion.div>
                                        ))}
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </section>
            </AnimatedSection>

            {/* Tech Stack Section */}
            <AnimatedSection>
                <section className="py-20 overflow-x-hidden">
                    <div className="container mx-auto px-6">
                        <motion.div
                            className="text-center mb-16"
                            variants={fadeIn}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                Technologies We Staff For
                            </h2>
                            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
                                Our talent pool covers all major technologies and frameworks
                            </p>
                        </motion.div>

                        {/* Desktop Grid View */}
                        <motion.div
                            className="hidden md:grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
                            variants={container}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                        >
                            {techStack.map((tech, index) => (
                                <motion.div
                                    key={index}
                                    variants={item}
                                    whileHover={{ scale: 1.05 }}
                                    className="bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center border border-gray-700"
                                >
                                    <div className="text-3xl mb-2">{tech.icon}</div>
                                    <div className="font-medium text-gray-200">{tech.name}</div>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Mobile Swiper View - 2x2 Grid Layout */}
                        <div className="md:hidden">
                            <Swiper
                                modules={[Pagination]}
                                spaceBetween={20}
                                slidesPerView={1}
                                pagination={{ 
                                    clickable: true,
                                    el: '.tech-swiper-pagination',
                                }}
                                className="pb-12"
                                breakpoints={{
                                    320: {
                                        slidesPerView: 1,
                                    },
                                }}
                            >
                                {[...Array(Math.ceil(techStack.length / 4))].map((_, slideIndex) => (
                                    <SwiperSlide key={slideIndex}>
                                        <div className="grid grid-cols-2 gap-4">
                                            {techStack.slice(slideIndex * 4, slideIndex * 4 + 4).map((tech, index) => (
                                                <div key={index} className="bg-gray-800 p-4 rounded-lg shadow-md flex flex-col items-center border border-gray-700 h-full">
                                                    <div className="text-3xl mb-2">{tech.icon}</div>
                                                    <div className="font-medium text-gray-200 text-sm text-center">{tech.name}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                            
                            {/* Custom Pagination */}
                            <div className="tech-swiper-pagination flex justify-center mt-4 space-x-2"></div>
                        </div>
                    </div>
                </section>
            </AnimatedSection>

            {/* FAQ Section with Video */}
            <AnimatedSection>
                <section className="py-20 overflow-x-hidden">
                    <div className="container mx-auto px-6">
                        <motion.div
                            className="text-center mb-16"
                            variants={fadeIn}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                Frequently Asked Questions
                            </h2>
                            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
                                Answers to common questions about our staffing services
                            </p>
                        </motion.div>

                        <motion.div
                            className="flex flex-col lg:flex-row gap-10"
                            variants={container}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                        >
                            {/* FAQ Items - Left side on desktop, top on mobile */}
                            <div className="lg:w-1/2">
                                <div className="space-y-4">
                                    {faqs.map((faq, index) => (
                                        <motion.div
                                            key={index}
                                            variants={item}
                                            className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-lg overflow-hidden border border-gray-700 transition-all duration-300 hover:shadow-xl"
                                        >
                                            <button
                                                className={`w-full px-5 py-4 text-left flex justify-between items-center transition-colors duration-300 ${activeFaq === index ? 'bg-blue-900/30' : 'hover:bg-gray-700/50'}`}
                                                onClick={() => toggleFaq(index)}
                                            >
                                                <span className="font-medium text-white text-lg pr-4">{faq.question}</span>
                                                <span className="flex-shrink-0 bg-blue-700/30 rounded-full w-7 h-7 flex items-center justify-center">
                                                    <svg 
                                                        className={`w-4 h-4 text-blue-400 transition-transform duration-300 ${activeFaq === index ? 'rotate-180' : ''}`} 
                                                        fill="none" 
                                                        stroke="currentColor" 
                                                        viewBox="0 0 24 24" 
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                    </svg>
                                                </span>
                                            </button>
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{
                                                    height: activeFaq === index ? 'auto' : 0,
                                                    opacity: activeFaq === index ? 1 : 0
                                                }}
                                                transition={{ duration: 0.3 }}
                                                className="overflow-hidden"
                                            >
                                                <div className="px-5 pb-4 pt-2 text-gray-300">
                                                    {faq.answer}
                                                </div>
                                            </motion.div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* Video - Right side on desktop, bottom on mobile */}
                            <div className="lg:w-1/2 flex items-center justify-center">
                                <div className="bg-gray-800 rounded-xl p-4 shadow-lg border border-gray-700 w-full max-w-md mx-auto">
                                    <div className="aspect-video bg-gray-700 rounded-lg flex items-center justify-center relative overflow-hidden">
                                        {/* Video thumbnail with play button */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20 flex items-center justify-center">
                                            <button className="bg-blue-600 hover:bg-blue-700 rounded-full w-16 h-16 flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                                                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M8 5v14l11-7z" />
                                                </svg>
                                            </button>
                                        </div>
                                        <img 
                                            src="https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                                            alt="Video thumbnail" 
                                            className="w-full h-full object-cover absolute mix-blend-overlay opacity-30"
                                        />
                                    </div>
                                    <div className="mt-4 text-center">
                                        <h3 className="text-xl font-semibold text-white mb-2">See How We Work</h3>
                                        <p className="text-gray-300">Watch our short video to learn about our recruitment process and success stories.</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </AnimatedSection>

            {/* CTA Section */}
            <AnimatedSection>
                <section className="py-20 backdrop-blur-sm overflow-x-hidden">
                    <div className="container mx-auto px-6 text-center">
                        <motion.div variants={fadeIn}>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                Ready to Build Your Technical Team?
                            </h2>
                            <p className="text-xl text-blue-200 max-w-2xl mx-auto mb-8 text-justify">
                                Whether you need one specialist or an entire team, we can help you find the right talent quickly and efficiently.
                            </p>
                        </motion.div>

                        <motion.div
                            className="max-w-md mx-auto"
                            variants={fadeIn}
                        >
                            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email"
                                    className="flex-grow border border-gray-400 px-4 py-3 rounded-lg text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                                <button
                                    type="submit"
                                    className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition duration-300 transform hover:scale-105"
                                >
                                    Get Started
                                </button>
                            </form>
                        </motion.div>

                        <motion.div
                            className="mt-8 text-blue-300"
                            variants={fadeIn}
                        >
                            Or call us directly at <span className="font-semibold">(555) 123-4567</span>
                        </motion.div>
                    </div>
                </section>
            </AnimatedSection>
        </div>
    );
};

export default HRSupportServices;