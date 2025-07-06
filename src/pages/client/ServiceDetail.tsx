"use client"
import { useParams, Navigate, useNavigate } from "react-router-dom"
import { motion, useScroll } from "framer-motion"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, EffectFade, Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/effect-fade"
import "swiper/css/pagination"
import logo from "@/assets/logo.png"
import {
  ArrowLeft,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  Clock,
  Star,
  Calendar,
  Shield,
  ChevronRight,
  Calculator,
  Palette,
  Code,
  Megaphone,
  Camera,
  Monitor,
  FileText,
  Award,
  Zap,
  TrendingUp,
} from "lucide-react"
import { services } from "../../data/service"
import ScrollToTop from "@/components/ScrollToTop"

// Service icons mapping - Updated for your services
const getServiceIcon = (serviceType: string) => {
  const iconMap: { [key: string]: any } = {
    "accounting & financial services": Calculator,
    "graphic design & photo editing": Palette,
    "website design & development": Code,
    "digital marketing": Megaphone,
    "product photography": Camera,
    "it consultancy & accessories": Monitor,
    "government incentive assistance": FileText,
  }
  const IconComponent = iconMap[serviceType.toLowerCase()] || FileText
  return <IconComponent className="h-6 w-6" />
}

// Function to create URL-friendly slug from serviceType
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

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" as const }, // Add 'as const' to narrow the type
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>()
  const navigate = useNavigate()
  useScroll()

  const service = findServiceBySlug(slug || "")
  const relatedServices = services.filter((s) => s.id !== service?.id).slice(0, 4)

  if (!service) {
    return <Navigate to="/services" replace />
  }

  return (
    <motion.div initial="initial" animate="animate" className="min-h-screen bg-black">
      <ScrollToTop/>
      {/* Header Navigation */}
      <motion.div {...fadeInUp} className="bg-black backdrop-blur-lg border-b sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <img src={logo} className="h-fit w-25" alt="" />
              <button
                onClick={() => navigate("/services")}
                className="flex items-center text-white hover:text-gray-200 transition-colors px-3 py-2 rounded-md "
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Services
              </button>
              <div className="hidden sm:flex items-center space-x-2 text-sm text-gray-200">
                <button onClick={() => navigate("/")} className="hover:text-gray-300">
                  Home
                </button>
                <ChevronRight className="h-4 w-4" />
                <button onClick={() => navigate("/services")} className="hover:text-gray-200">
                  Services
                </button>
                <ChevronRight className="h-4 w-4" />
                <span className="text-gray-200">{service.serviceType}</span>
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/contact")}
              className="bg-white hover:bg-blue-700 text-black px-6 py-2 rounded-lg font-medium transition-colors"
            >
              Get Quote
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Hero Section with Swiper */}
      <section className="relative h-screen overflow-hidden">
        {/* Swiper Background */}
        <div className="absolute inset-0 z-0">
          <Swiper
            modules={[Autoplay, EffectFade, Pagination]}
            effect="fade"
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              bulletClass: "swiper-pagination-bullet !bg-white/50",
              bulletActiveClass: "swiper-pagination-bullet-active !bg-white",
            }}
            loop={true}
            className="w-full h-full"
          >
            {service.images.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="relative w-full h-full">
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`${service.serviceType} ${index + 1}`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src =
                        "/placeholder.svg?height=800&width=1200&text=" + encodeURIComponent(service.serviceType)
                    }}
                  />
                  {/* Dark overlay for better text readability */}
                  <div className="absolute inset-0 bg-black/80"></div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-4xl">
              {/* Service Badge */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex items-center space-x-4 mb-6"
              >
                <div className="bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-medium flex items-center border border-white/30">
                  {getServiceIcon(service.serviceType)}
                  <span className="ml-2">Professional Service</span>
                </div>
                <div className="flex items-center space-x-1 bg-white/20 backdrop-blur-md px-3 py-2 rounded-full border border-white/30">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium text-white">4.9</span>
                  <span className="text-sm text-white/80">(127 reviews)</span>
                </div>
              </motion.div>

              {/* Hero Title */}
              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight"
              >
                {service.serviceType}
              </motion.h1>

              {/* Hero Description */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-lg sm:text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed max-w-3xl"
              >
                {service.shortDetails}
              </motion.p>

              {/* Hero Features */}
              <motion.div
                variants={staggerContainer}
                initial="initial"
                animate="animate"
                className="flex flex-wrap gap-4 mb-8"
              >
                {[
                  { icon: Clock, text: "2-4 weeks", color: "blue" },
                  { icon: Award, text: "Expert Team", color: "green" },
                  { icon: Shield, text: "Quality Assured", color: "purple" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center bg-white/20 backdrop-blur-lg rounded-lg px-4 py-3 border border-white/40"
                  >
                    <item.icon className="h-5 w-5 text-white mr-2" />
                    <span className="font-medium text-white">{item.text}</span>
                  </motion.div>
                ))}
              </motion.div>

              {/* Hero CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate("/contact")}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center shadow-lg"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Get Started Now
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate("/contact")}
                  className="bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white/30 px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center"
                >
                  <Calendar className="h-5 w-5 mr-2" />
                  Free Consultation
                </motion.button>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        >
          <div className="flex flex-col items-center text-white">
            <span className="text-sm mb-2">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
            >
              <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Main Content - Rest remains the same */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Service Overview */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-blak rounded-xl shadow-lg border border-gray-100"
              >
                <div className="p-8">
                  <h2 className="text-3xl font-bold text-gray-200 mb-6">Service Overview</h2>
                  <div className="space-y-4">
                    {service.fullDetails.map((detail, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start"
                      >
                        <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <p className="text-gray-300 leading-relaxed">{detail}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Key Services */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-black rounded-xl shadow-lg border border-gray-100"
              >
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-200 mb-6">What We Offer</h3>
                  <motion.div
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-4"
                  >
                    {service.bulletPoints.map((point, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        whileHover={{ scale: 1.02, backgroundColor: "#f8fafc" }}
                        viewport={{ once: true }}
                        className="flex items-center p-4  text-gray-200 hover:text-black hover:bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-100 cursor-pointer"
                      >
                        <Zap className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0" />
                        <span className="font-medium">{point}</span>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </motion.div>

              {/* Process Timeline */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-[#000000] rounded-xl shadow-lg border border-gray-100"
              >
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-200 mb-6">Our Process</h3>
                  <div className="space-y-6">
                    {[
                      { step: "01", title: "Initial Consultation", desc: "Understanding your requirements and goals" },
                      {
                        step: "02",
                        title: "Strategy & Planning",
                        desc: "Creating a customized approach for your needs",
                      },
                      { step: "03", title: "Implementation", desc: "Executing the solution with precision and care" },
                      {
                        step: "04",
                        title: "Delivery & Support",
                        desc: "Final delivery with ongoing support and maintenance",
                      },
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start"
                      >
                        <div className="flex-shrink-0 w-12 h-12 bg-[#4c4545] text-white rounded-full flex items-center justify-center font-bold mr-4">
                          {item.step}
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-gray-200 mb-1">{item.title}</h4>
                          <p className="text-gray-300">{item.desc}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Sidebar */}
            <div className="space-y-6">
              {/* Contact Card */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-xl shadow-lg"
              >
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-4">Ready to Get Started?</h3>
                  <p className="text-blue-100 mb-6">
                    Contact our expert team for a free consultation and custom quote.
                  </p>
                  <div className="space-y-3 mb-6">
                    <motion.div whileHover={{ x: 5 }} className="flex items-center">
                      <Phone className="h-5 w-5 mr-3" />
                      <span>+88 01819454892</span>
                    </motion.div>
                    <motion.div whileHover={{ x: 5 }} className="flex items-center">
                      <Mail className="h-5 w-5 mr-3" />
                      <span>admin@ursofts.com</span>
                    </motion.div>
                    <motion.div whileHover={{ x: 5 }} className="flex items-start">
                      <MapPin className="h-5 w-5 mr-3 mt-0.5" />
                      <span>Mirpur 6, Road-1, Plot-2, Dhaka, Bangladesh</span>
                    </motion.div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => navigate("/contact")}
                    className="w-full bg-white text-blue-600 hover:bg-gray-100 px-4 py-3 rounded-lg font-semibold transition-colors"
                  >
                    Request Free Quote
                  </motion.button>
                </div>
              </motion.div>

              {/* Pricing Card */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg border border-gray-100"
              >
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Investment</h3>
                  <div className="text-3xl font-bold text-blue-600 mb-2">Starting from ৳25,000</div>
                  <p className="text-gray-600 mb-4">Custom pricing based on your requirements</p>
                  <div className="space-y-2 mb-6">
                    {["Free initial consultation", "Competitive pricing", "Ongoing support included"].map(
                      (item, index) => (
                        <div key={index} className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          <span>{item}</span>
                        </div>
                      ),
                    )}
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => navigate("/contact")}
                    className="w-full border border-gray-300 text-gray-700 hover:bg-gray-50 px-4 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center"
                  >
                    <Calendar className="h-4 w-4 mr-2" />
                    Schedule Consultation
                  </motion.button>
                </div>
              </motion.div>

              {/* Related Services */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg border border-gray-100"
              >
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Related Services</h3>
                  <div className="space-y-3">
                    {relatedServices.map((relatedService, index) => (
                      <motion.div
                        key={relatedService.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ backgroundColor: "#f8fafc" }}
                      >
                        <button
                          onClick={() => navigate(`/services/${createSlug(relatedService.serviceType)}`)}
                          className="block w-full text-left p-3 rounded-lg transition-colors cursor-pointer border border-gray-100"
                        >
                          <div className="flex items-center mb-2">
                            {getServiceIcon(relatedService.serviceType)}
                            <h4 className="font-semibold text-gray-900 hover:text-blue-600 transition-colors ml-2">
                              {relatedService.serviceType}
                            </h4>
                          </div>
                          <p className="text-sm text-gray-600 line-clamp-2">{relatedService.shortDetails}</p>
                        </button>
                      </motion.div>
                    ))}
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => navigate("/services")}
                    className="w-full mt-4 text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-lg font-medium transition-colors flex items-center justify-center"
                  >
                    View All Services
                    <ChevronRight className="h-4 w-4 ml-2" />
                  </motion.button>
                </div>
              </motion.div>

              {/* Company Stats */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="bg-gray-900 text-white rounded-xl shadow-lg"
              >
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-4">Why Choose URSOFTS</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { number: "3+", text: "Years Experience" },
                      { number: "100+", text: "Projects Completed" },
                      { number: "98%", text: "Client Satisfaction" },
                      { number: "24/7", text: "Support Available" },
                    ].map((stat, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                        className="text-center p-3 bg-gray-800 rounded-lg"
                      >
                        <div className="text-2xl font-bold text-blue-400">{stat.number}</div>
                        <div className="text-sm text-gray-300">{stat.text}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-4xl font-bold mb-6"
          >
            Ready to Transform Your Business?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto"
          >
            Let our expert team help you achieve your goals with our professional {service.serviceType.toLowerCase()}{" "}
            solutions.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/contact")}
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center"
            >
              <Phone className="h-5 w-5 mr-2" />
              Get Free Consultation
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/projects")}
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center"
            >
              <TrendingUp className="h-5 w-5 mr-2" />
              View Portfolio
            </motion.button>
          </motion.div>
        </div>
      </motion.section>
    </motion.div>
  )
}
