"use client"

import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import {
  ArrowLeft,
  Play,
  Pause,
  ChevronDown,
  Star,
  Users,
  Clock,
  Award,
  ArrowRight,
  Zap,
  Sparkles,
  Phone,
  Mail,
  MapPin,
  CheckCircle,
  Code,
  Palette,
  Camera,
  Monitor,
  FileText,
  Calculator,
  Megaphone,
} from "lucide-react"
import { services } from "../../data/service"

// Service icons mapping
const getServiceIcon = (serviceType: string) => {
  const iconMap: { [key: string]: any } = {
    "web design & development": Code,
    "graphic design & photo editing": Palette,
    "digital marketing": Megaphone,
    "product photography": Camera,
    "it consultancy & accessories": Monitor,
    "government incentive assistance": FileText,
    "accounting & financial services": Calculator,
  }
  const IconComponent = iconMap[serviceType.toLowerCase()] || FileText
  return <IconComponent className="w-6 h-6" />
}

// Function to create URL-friendly slug
const createSlug = (serviceType: string) => {
  return serviceType
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
}

// Function to find service by slug
const findServiceBySlug = (slug: string) => {
  return services.find((service) => createSlug(service.serviceType) === slug)
}

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>()
  const [activeFeature, setActiveFeature] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [scrollY, setScrollY] = useState(0)
  const [activeSection, setActiveSection] = useState("overview")

  const service = findServiceBySlug(slug || "")
  const relatedServices = services.filter((s) => s.id !== service?.id).slice(0, 3)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (service?.features && isPlaying) {
      const interval = setInterval(() => {
        setActiveFeature((prev) => (prev + 1) % service.features.length)
      }, 4000)
      return () => clearInterval(interval)
    }
  }, [isPlaying, service?.features])

  if (!service) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white mb-4">Service Not Found</h1>
          <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-3 rounded-2xl">
            Back to Services
          </button>
        </div>
      </div>
    )
  }

  const sections = [
    { id: "overview", label: "Overview" },
    { id: "features", label: "Features" },
    { id: "services", label: "Services" },
    { id: "contact", label: "Contact" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Floating Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 bg-white/10 backdrop-blur-xl rounded-full px-6 py-3 border border-white/20"
      >
        <div className="flex items-center space-x-6">
          <button className="flex items-center text-white hover:text-cyan-400 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </button>
          <div className="flex space-x-4">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`px-3 py-1 rounded-full text-sm transition-all ${
                  activeSection === section.id ? "bg-cyan-500 text-white" : "text-white/70 hover:text-white"
                }`}
              >
                {section.label}
              </button>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative  h-screen overflow-hidden">
        <motion.div
          style={{ y: scrollY * 0.5 }}
          className="absolute  inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20"
        />

        <div className="relative  z-10 h-full flex items-center">
          <div className="max-w-7xl  mx-auto px-6 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <motion.div
                  className="flex items-center space-x-4 mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center">
                    {service.iconType === "image" ? (
                      <img src={service.icon || "/placeholder.svg"} alt="Service Icon" className="w-8 h-8" />
                    ) : (
                      getServiceIcon(service.serviceType)
                    )}
                  </div>
                  <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-white text-sm">4.9 Rating</span>
                  </div>
                </motion.div>

                <motion.h1
                  className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  {service.serviceType}
                </motion.h1>

                <motion.p
                  className="text-xl text-white/80 mb-8 leading-relaxed"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  {service.shortDetails}
                </motion.p>

                <motion.div
                  className="flex flex-wrap gap-4 mb-8"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  {[
                    { icon: Users, text: "Expert Team", color: "from-blue-500 to-cyan-500" },
                    { icon: Clock, text: "Fast Delivery", color: "from-purple-500 to-pink-500" },
                    { icon: Award, text: "Quality Assured", color: "from-green-500 to-emerald-500" },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className={`bg-gradient-to-r ${item.color} p-4 rounded-2xl text-white flex items-center space-x-3`}
                    >
                      <item.icon className="w-5 h-5" />
                      <span className="font-medium">{item.text}</span>
                    </motion.div>
                  ))}
                </motion.div>

                <motion.div
                  className="flex space-x-4"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-2xl font-semibold flex items-center space-x-2 shadow-2xl"
                  >
                    <Sparkles className="w-5 h-5" />
                    <span>Start Project</span>
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-2xl font-semibold"
                  >
                    View Portfolio
                  </motion.button>
                </motion.div>
              </motion.div>

              {/* Right Content - Service Images Carousel */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative"
              >
                <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold text-white">Service Gallery</h3>
                  </div>

                  <div className="space-y-4">
                    {service.images.map((image, index) => (
                      <motion.img
                        key={index}
                        src={image || "/placeholder.svg"}
                        alt={`${service.serviceType} ${index + 1}`}
                        className="w-full h-48 object-cover rounded-2xl"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.2 }}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        >
          <ChevronDown className="w-8 h-8 text-white/50" />
        </motion.div>
      </section>

      {/* Service Overview */}
      <section className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Service Overview</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Comprehensive solutions tailored to your business needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {service.fullDetails.map((detail, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                  <p className="text-white/80 leading-relaxed">{detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-cyan-500/20 to-purple-500/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Key Features</h2>
            <div className="flex items-center justify-center space-x-4 mb-8">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="bg-white/10 hover:bg-white/20 rounded-full p-3 transition-colors"
              >
                {isPlaying ? <Pause className="w-6 h-6 text-white" /> : <Play className="w-6 h-6 text-white" />}
              </button>
              <span className="text-white/70">Auto-playing features</span>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Feature Content */}
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeFeature}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-6"
                >
                  <h3 className="text-3xl lg:text-4xl font-bold text-white">{service.features[activeFeature].title}</h3>
                  <p className="text-xl text-white/70 leading-relaxed">{service.features[activeFeature].content}</p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-3 rounded-2xl font-semibold flex items-center space-x-2"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </motion.div>
              </AnimatePresence>

              {/* Feature Navigation */}
              <div className="flex space-x-3 mt-8">
                {service.features.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveFeature(index)}
                    className={`w-4 h-4 rounded-full transition-all ${
                      index === activeFeature ? "bg-cyan-500 scale-125" : "bg-white/30 hover:bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </motion.div>

            {/* Feature Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeFeature}
                  src={service.features[activeFeature].image || "/placeholder.svg"}
                  alt={service.features[activeFeature].title}
                  className="w-full h-96 object-cover rounded-3xl"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-3xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">What We Offer</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Complete range of services to meet your requirements
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.bulletPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl p-3 group-hover:scale-110 transition-transform">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">{point}</h3>
                    <p className="text-white/60 text-sm">Professional implementation with modern best practices</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section className="py-20 px-6 bg-gradient-to-r from-cyan-500/20 to-purple-500/20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Related Services</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedServices.map((relatedService, index) => (
                <motion.div
                  key={relatedService.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-cyan-500/50 transition-all duration-300 cursor-pointer"
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl flex items-center justify-center">
                      {relatedService.iconType === "image" ? (
                        <img src={relatedService.icon || "/placeholder.svg"} alt="Service" className="w-6 h-6" />
                      ) : (
                        getServiceIcon(relatedService.serviceType)
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-white">{relatedService.serviceType}</h3>
                  </div>
                  <p className="text-white/70 text-sm line-clamp-3">{relatedService.shortDetails}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Contact CTA */}
      <section className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-xl rounded-3xl p-12 border border-white/10 text-center"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
              Let's discuss your vision and create something amazing together with our{" "}
              {service.serviceType.toLowerCase()} expertise
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
              <div className="flex items-center space-x-3 text-white">
                <Phone className="w-5 h-5 text-cyan-400" />
                <span>+88 01819454892</span>
              </div>
              <div className="flex items-center space-x-3 text-white">
                <Mail className="w-5 h-5 text-cyan-400" />
                <span>admin@ursofts.com</span>
              </div>
              <div className="flex items-center space-x-3 text-white">
                <MapPin className="w-5 h-5 text-cyan-400" />
                <span>Dhaka, Bangladesh</span>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-12 py-4 rounded-2xl font-semibold text-lg flex items-center space-x-3 mx-auto shadow-2xl"
            >
              <span>Get Free Consultation</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default ServiceDetail
