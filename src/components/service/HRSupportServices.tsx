import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ScrollToTop from '../ScrollToTop';
import image from "@/assets/bg-elements/DotsWithLines_illustration_UseBackgroundTurquoise_RGB.svg"
import bpo from "@/assets/bpo/process.png"
import { Link } from 'react-router-dom';
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



// let imagesb= "https://wallpapers.com/images/hd/dark-gradient-background-v9vj0cpgzd3grcbr.jpg"

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
            icon: 'https://icon-library.com/images/graphic-designer-icon/graphic-designer-icon-8.jpg'
        },
        {
            title: '3D Designers',
            description: 'Talented 3D artists for product visualization, architectural rendering, and animation.',
            icon: 'https://icon-library.com/images/3d-model-icon/3d-model-icon-5.jpg'
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
        { value: '500+', label: 'Technical Professionals Placed' },
        { value: '4.9/5', label: 'Client Satisfaction Score' }
    ];

    return (
        <div className="bg-gradient-to-tr from-[#0b0f19] via-[#111827] to-[#0b0f19] text-gray-100 lg:py-50 py-30">
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
                                // https://www.randstad.se/s3fs-media/se-rs/public/2024-09/transparent_png-randstad_professional_tech_illustration_04_rgb_usebackgroundnavy.png?VersionId=ag2Yfnp1wz5WQCQMcwLabIWLChMvvohn
                                alt="Team collaborating"
                                className="rounded-xl  w-full max-w-xl mx-auto"
                            />
                        </motion.div>
                    </div>
                </section>
            </AnimatedSection>

            {/* Client Logos */}
            <AnimatedSection>
                <section className="py-12 bg-[url(https://wallpapers.com/images/hd/dark-gradient-background-v9vj0cpgzd3grcbr.jpg)] bg-cover bg-no-repeat">
                    <div className="container mx-auto px-6">
                        <h2 className="text-center text-blue-300 text-sm font-semibold mb-8 uppercase tracking-wider">

                        </h2>
                        <motion.div
                            className="flex flex-wrap justify-center items-center gap-8 md:gap-16"
                            variants={container}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                        >

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
                <section className="py-16 bg-blue-900/30 backdrop-blur-sm">
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
                <section className="py-20 bg-gray-900/50">
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
                                                variants={itemVariants}  // This should be your animation variants
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

            {/* Testimonials */}
            <AnimatedSection>
                <section className="py-20 bg-gray-900/50">
                    <div className="container mx-auto px-6">
                        <motion.div
                            className="text-center mb-16"
                            variants={fadeIn}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                What Our Clients Say
                            </h2>
                            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
                                Success stories from companies we've helped grow
                            </p>
                        </motion.div>

                        <motion.div
                            className="grid grid-cols-1 md:grid-cols-2 gap-8"
                            variants={container}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                        >
                            <motion.div
                                variants={item}
                                className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700"
                            >
                                <div className="text-yellow-400 text-2xl mb-4">★★★★★</div>
                                <blockquote className="text-gray-200 text-lg mb-6">
                                    "The 3D designers provided by TechStaff Solutions were instrumental in completing our product visualization project on time. Their attention to detail and technical skills exceeded our expectations."
                                </blockquote>
                                <div className="flex items-center">
                                    <img
                                        src="https://img.freepik.com/premium-photo/happy-sexy-american-girl-beauty-glamour-model-woman-smiling_221213-2120.jpg"
                                        alt="Sarah Johnson"
                                        className="w-12 h-12 rounded-full mr-4"
                                    />
                                    <div>
                                        <div className="font-bold text-white">Sarah Johnson</div>
                                        <div className="text-gray-400">Product Manager, InnovateCorp</div>
                                    </div>
                                </div>
                            </motion.div>
                            <motion.div
                                variants={item}
                                className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700"
                            >
                                <div className="text-yellow-400 text-2xl mb-4">★★★★★</div>
                                <blockquote className="text-gray-200 text-lg mb-6">
                                    "Their temporary web developers helped us scale our team during a critical product launch phase. The seamless onboarding process and quality of talent saved us months of recruitment effort."
                                </blockquote>
                                <div className="flex items-center">
                                    <img
                                        src="https://www.blogtivvu.com/wp-content/uploads/2011/11/vanessa-hessler-350x262.jpg"
                                        alt="Michael Chen"
                                        className="w-12 h-12 rounded-full mr-4"
                                    />
                                    <div>
                                        <div className="font-bold text-white">Saima Sen</div>
                                        <div className="text-gray-400">CTO, StartupHub</div>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </section>
            </AnimatedSection>

            {/* Tech Stack Section */}
            <AnimatedSection>
                <section className="py-20">
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

                        <motion.div
                            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
                            variants={container}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                        >
                            {[
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
                            ].map((tech, index) => (
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
                    </div>
                </section>
            </AnimatedSection>

            {/* FAQ Section */}
            <AnimatedSection>
                <section className="py-20 bg-gray-900/50">
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
                            className="max-w-3xl mx-auto space-y-4"
                            variants={container}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                        >
                            {faqs.map((faq, index) => (
                                <motion.div
                                    key={index}
                                    variants={item}
                                    className="bg-gray-800 rounded-lg overflow-hidden shadow-md border border-gray-700"
                                >
                                    <button
                                        className={`w-full px-6 py-4 text-left font-medium text-white flex justify-between items-center ${activeFaq === index ? 'bg-blue-900/30' : ''}`}
                                        onClick={() => toggleFaq(index)}
                                    >
                                        <span>{faq.question}</span>
                                        <span className="text-blue-400 text-xl">
                                            {activeFaq === index ? '−' : '+'}
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
                                        <div className="px-6 pb-4 pt-2 text-gray-300">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>
            </AnimatedSection>

            {/* CTA Section */}
            <AnimatedSection>
                <section className="py-20 bg-gradient-to-r from-blue-900/70 to-blue-800/70 backdrop-blur-sm">
                    <div className="container mx-auto px-6 text-center">
                        <motion.div variants={fadeIn}>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                Ready to Build Your Technical Team?
                            </h2>
                            <p className="text-xl text-blue-200 max-w-2xl mx-auto mb-8">
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