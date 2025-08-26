"use client"
import { useState, type Key } from "react"
import { services } from "../../data/service"
import { useNavigate } from "react-router-dom"
import { ArrowRight, CheckCircle, Zap, Users, Shield } from "lucide-react"
import ScrollToTop from "@/components/ScrollToTop"
import { motion } from "framer-motion"
import { type Variants } from 'framer-motion';
import { Helmet } from "react-helmet-async"

const ServiceItem = ({ service, index }: { service: any; index: number }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const navigate = useNavigate()

  const createSlug = (serviceType: string) => {
    return serviceType
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "")
  }

  const handleServiceClick = (serviceType: string) => {
    const slug = createSlug(serviceType)
    navigate(`/services/${slug}`)
  }

const itemVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 30
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.25, 0, 1], // This should work, but let's use a safer approach
      delay: index * 0.1
    }
  }
};

const contentVariants: Variants = {
  hidden: { 
    height: 0,
    opacity: 0
  },
  visible: {
    height: "auto",
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut" // This is correct
    }
  }
};

  return (
    <motion.div
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="border-b border-gray-200 last:border-b-0"
    >
      {/* Service Title - Always Visible */}
      <motion.div
        className="flex items-center justify-between sm:py-16 py-8 cursor-pointer group"
        onClick={() => setIsExpanded(!isExpanded)}
        whileHover={{ x: 10 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex items-center">
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#2deff9] group-hover:text-[#ff8307] transition-colors duration-300">
            {service.serviceType}
          </h3>
        </div>
        <div className="flex items-center text-gray-400">
          <span className="text-2xl font-light mr-4">//</span>
          <span className="text-3xl font-light">
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>
      </motion.div>

      {/* Expandable Content */}
      <motion.div
        initial="hidden"
        animate={isExpanded ? "visible" : "hidden"}
        variants={contentVariants}
        className="overflow-hidden"
      >
        <div className="pb-8 pl-0 md:pl-8">
          {/* Service Description */}
          <p className="sm:text-lg text-sm text-gray-200 mb-6 max-w-3xl leading-relaxed">
            {service.shortDetails}
          </p>

          {/* Key Features */}
          <div className="mb-8">
            <h4 className="sm:text-lg text-sm font-semibold text-gray-200 mb-4 sm:block hidden">Key Features:</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {service.bulletPoints.slice(0, 4).map((point: any, pointIndex: Key | null | undefined) => {
                const pointText = typeof point === "string" ? point : String(point)
                const title = pointText.includes(":") ? pointText.split(":")[0].trim() : pointText

                return (
                  <div key={pointIndex} className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-100 sm:text-lg text-sm">{title}</span>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Learn More Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              e.stopPropagation()
              handleServiceClick(service.serviceType)
            }}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-300 flex items-center group"
          >
            Learn More
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  )
}

const ServicesPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }


  const fadeInUpVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 30
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut", // Use predefined easing
    }
  }
};
  return (
    <main>
      <Helmet>
  {/* Title */}
  <title>Our Services | CONQUERIC - Web, App & Software Development</title>

  {/* Meta Description */}
  <meta
    name="description"
    content="Discover CONQUERIC's professional services in web development, mobile app development, custom software solutions, and digital strategy. We help businesses grow with powerful, user-friendly technology."
  />

  {/* Meta Keywords */}
  <meta
    name="keywords"
    content="CONQUERIC services, web development, mobile app development, custom software development, UI/UX design, software company, IT solutions, digital strategy"
  />

  {/* Canonical URL */}
  <link rel="canonical" href="https://www.conqueric.com/services" />

  {/* Open Graph / Facebook */}
  <meta property="og:title" content="Our Services | CONQUERIC" />
  <meta
    property="og:description"
    content="Explore CONQUERIC's expert services in website development, mobile apps, and custom software solutions tailored to your business needs."
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://www.conqueric.com/services" />
  <meta property="og:image" content="https://www.conqueric.com/og-services.jpg" />

  {/* Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Our Services | CONQUERIC" />
  <meta
    name="twitter:description"
    content="CONQUERIC provides cutting-edge web development, mobile app development, and software solutions to help your business succeed."
  />
  <meta name="twitter:image" content="https://www.conqueric.com/og-services.jpg" />
</Helmet>

    <div className="bg-[#06140b] font-nunito text-white overflow-hidden">
      <ScrollToTop />
      
      {/* Hero Section */}
      <motion.section 
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="pt-44 sm:pb-10"
      >
        <div className="container flex justify-center mx-auto px-6">
          <div className="max-w-4xl mx-auto sm:text-center">
            <motion.h1 
              variants={fadeInUpVariants}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight"
            >
              Our <span className="text-[#2deff9]">Services</span>
            </motion.h1>

            <motion.p 
              variants={fadeInUpVariants}
              className="sm:text-lg text-sm text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
            >
              Comprehensive digital solutions designed to help your business grow and succeed in the modern digital landscape.
            </motion.p>
          </div>
          
        </div>
      </motion.section>

      {/* Services List */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true, margin: "-100px" }}
        className="sm:py-20"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            {services.map((service, index) => (
              <ServiceItem key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true }}
        className="py-20 bg-[#06140b]"
      >
        <div className="container mx-auto ">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              variants={fadeInUpVariants}
              className="sm:text-center sm:mb-16 mb-8"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose <span className="text-blue-400">Us</span>
              </h2>
              <p className="sm:text-xl text-sm text-gray-400 max-w-2xl mx-auto">
                Numbers that speak to our commitment to excellence and client satisfaction.
              </p>
            </motion.div>

            <motion.div 
              variants={containerVariants}
              className="grid grid-cols-2 md:grid-cols-4 gap-3"
            >
              {[
                { value: "100+", label: "Projects Completed", icon: <CheckCircle className="w-8 h-8 text-blue-400" /> },
                { value: "5+", label: "Years Experience", icon: <Zap className="w-8 h-8 text-green-400" /> },
                { value: "50+", label: "Happy Clients", icon: <Users className="w-8 h-8 text-purple-400" /> },
                { value: "24/7", label: "Support", icon: <Shield className="w-8 h-8 text-orange-400" /> }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUpVariants}
                  className="text-center bg-gray-800/50 sm:p-8 p-4 rounded-2xl border border-gray-700"
                >
                  <div className="flex justify-center mb-4">
                    {item.icon}
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">
                    {item.value}
                  </div>
                  <div className="text-gray-400 text-sm">
                    {item.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true }}
        className="py-20"
      >
        <div className="container mx-auto ">
          <motion.div 
            variants={fadeInUpVariants}
            className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            {/* Left Side - Content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Start Your <span className="text-blue-400">Next Project</span>?
              </h2>
              
              <p className="sm:text-xl text-sm text-gray-400 mb-8 leading-relaxed">
                Let's discuss how we can help transform your ideas into reality. 
                Get in touch with our team for a free consultation.
              </p>

              <div className="sm:space-y-4 space-y-3 mb-8">
                {[
                  "Free initial consultation",
                  "Custom tailored solutions", 
                  "24-hour response time"
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className="flex items-center"
                  >
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-4"></div>
                    <span className="text-gray-300 text-sm">{item}</span>
                  </motion.div>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-xl transition-colors duration-300 flex items-center group"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </motion.button>
            </div>

            {/* Right Side - Contact Form */}
            <motion.div 
              variants={fadeInUpVariants}
              className="bg-gray-800/50 sm:p-8 p-3 rounded-2xl border border-gray-700"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Send us a message</h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                    Service
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service.id} value={service.id}>
                        {service.serviceType}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors duration-300 flex items-center justify-center"
                >
                  Send Message
                  <ArrowRight className="w-5 h-5 ml-2" />
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
    </main>
  )
}

export default ServicesPage