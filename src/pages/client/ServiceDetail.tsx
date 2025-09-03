"use client"

import { useState, useEffect, useRef } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import {
  ArrowLeft,
  ChevronDown,
  Star,
  Users,
  Clock,
  ArrowRight,
  Zap,
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
  Smartphone,
  PenTool,
  Target,
  Eye,
  MessageSquare,
  Plus,
  Minus,
} from "lucide-react"
import { services } from "../../data/service"
import ScrollToTop from "@/components/ScrollToTop"
import ServiceRequest from "@/components/common/ServiceRequest"

// Service icons mapping
const getServiceIcon = (serviceType: string) => {
  const iconMap: { [key: string]: any } = {
    "web design & development": Code,
    "mobile app development": Smartphone,
    "graphics design": Palette,
    "2d & 3d design": PenTool,
    "digital marketing": Megaphone,
    "ui/ux design": Eye,
    "branding & identity": Target,
    "content creation": MessageSquare,
    "product photography": Camera,
    "it consultancy & accessories": Monitor,
    "government incentive assistance": FileText,
    "accounting & financial services": Calculator,
  }
  const IconComponent = iconMap[serviceType.toLowerCase()] || FileText
  return <IconComponent className="w-6 h-6" />
}

const createSlug = (serviceType: string) => {
  return serviceType
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
}

const findServiceBySlug = (slug: string) => {
  return services.find((service) => createSlug(service.serviceType) === slug)
}

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>()
  const navigate = useNavigate()
  const [activeFeature, setActiveFeature] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [activeSection, setActiveSection] = useState("overview")
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)
  const [isSticky, setIsSticky] = useState(false)
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0)
  const observerRef = useRef<IntersectionObserver | null>(null)
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({})
  const featureIntervalRef = useRef<NodeJS.Timeout | null>(null)
  
  // Function to properly assign refs
  const setSectionRef = (id: string) => (el: HTMLElement | null) => {
    sectionRefs.current[id] = el
  }

  const service = findServiceBySlug(slug!)!
  const relatedServices = services.filter((s) => s.id !== service?.id).slice(0, 3)

  // Fixed Features Auto-sliding
  useEffect(() => {
    if (service?.features && service.features.length > 0 && isPlaying) {
      featureIntervalRef.current = setInterval(() => {
        setActiveFeature((prev) => (prev + 1) % service.features.length)
      }, 4000)
    }
    
    return () => {
      if (featureIntervalRef.current) {
        clearInterval(featureIntervalRef.current)
      }
    }
  }, [isPlaying, service?.features])

  // Stop auto-slide when user interacts
  const handleFeatureChange = (index: number) => {
    setActiveFeature(index)
    setIsPlaying(false)
    
    // Resume auto-slide after 10 seconds of inactivity
    setTimeout(() => {
      setIsPlaying(true)
    }, 10000)
  }

  // Services Grid Navigation

  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkIsMobile()
    window.addEventListener('resize', checkIsMobile)
    return () => window.removeEventListener('resize', checkIsMobile)
  }, [])

  const maxIndex = isMobile 
    ? Math.max(0, (service?.bulletPoints?.length || 1) - 1)
    : Math.max(0, (service?.bulletPoints?.length || 4) - 4)

  const nextServices = () => {
    setCurrentServiceIndex(prev => 
      prev >= maxIndex ? 0 : prev + (isMobile ? 1 : 1)
    )
  }

  const prevServices = () => {
    setCurrentServiceIndex(prev => 
      prev <= 0 ? maxIndex : prev - (isMobile ? 1 : 1)
    )
  }

  const getVisibleServices = () => {
    if (!service?.bulletPoints || !Array.isArray(service.bulletPoints)) return []
    
    const itemsToShow = isMobile ? 1 : 4
    const services = []
    
    for (let i = 0; i < itemsToShow; i++) {
      const index = (currentServiceIndex + i) % service.bulletPoints.length
      const bulletPoint = service.bulletPoints[index]
      
      // Ensure bulletPoint is a string
      if (typeof bulletPoint === 'string') {
        services.push({
          content: bulletPoint,
          originalIndex: index
        })
      }
    }
    
    return services
  }

  // Touch handlers for services
  const [touchStartX, setTouchStartX] = useState(0)
  const [touchEndX, setTouchEndX] = useState(0)

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.touches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (touchStartX && touchEndX) {
      const swipeDistance = touchStartX - touchEndX
      const minSwipeDistance = 50

      if (Math.abs(swipeDistance) > minSwipeDistance) {
        if (swipeDistance > 0) {
          nextServices() // Swipe left - next
        } else {
          prevServices() // Swipe right - previous
        }
      }
    }
    setTouchStartX(0)
    setTouchEndX(0)
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsSticky(scrollPosition > 100)

      // Update active section based on scroll position
      Object.entries(sectionRefs.current).forEach(([id, element]) => {
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop - 200 && scrollPosition < offsetTop + offsetHeight - 200) {
            setActiveSection(id)
          }
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    // Initialize IntersectionObserver for section tracking
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.5, rootMargin: '-100px 0px -100px 0px' }
    )

    // Observe all sections
    Object.values(sectionRefs.current).forEach((section) => {
      if (section && observerRef.current) {
        observerRef.current.observe(section)
      }
    })

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [])

  const scrollToSection = (id: string) => {
    setActiveSection(id)
    const element = sectionRefs.current[id]
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      })
    }
  }

  if (!service) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center p-4">
        <div className="text-center max-w-md">
          <h1 className="text-3xl font-bold text-white mb-4">Service Not Found</h1>
          <p className="text-gray-300 mb-6">The service you're looking for doesn't exist or may have been removed.</p>
          <button
            onClick={() => navigate("/services")}
            className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity shadow-lg"
          >
            Browse All Services
          </button>
        </div>
      </div>
    )
  }

  const sections = [
    { id: "overview", label: "Overview" },
    { id: "features", label: "Features" },
    { id: "services", label: "Services" },
    ...(service.process ? [{ id: "process", label: "Process" }] : []),
    ...(service.faq ? [{ id: "faq", label: "FAQ" }] : []),
    { id: "contact", label: "Contact" },
  ]

  return (
    <main>
\
      
    <div className="min-h-screen  text-gray-100">
      <ScrollToTop />
      {/* Floating Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isSticky ? 'bg-gray-800/95 backdrop-blur-md py-2 shadow-xl' : 'bg-transparent py-4'}`}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors w-fit"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              <span className="font-medium">Back to Services</span>
            </button>

            <div className="flex overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
              <div className="flex space-x-2">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${activeSection === section.id
                      ? 'bg-cyan-600 text-white shadow-md'
                      : 'text-gray-300 hover:text-white hover:bg-gray-700'
                      }`}
                  >
                    {section.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section
        className="relative py-32 md:py-40 bg-repeat"
        ref={setSectionRef('hero')}
      >
        {/* Subtle background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-1 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            {/* Service category */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 border border-gray-800 rounded-full px-4 py-2 mb-6"
            >
              <span className="text-blue-400 text-sm font-medium">{(service as any).category || "Premium Service"}</span>
              <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span className="text-white text-sm">4.9/5</span>
              </div>
            </motion.div>

            {/* Main heading */}
            <motion.h1
              className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {service.serviceType}
            </motion.h1>

            {/* Description */}
            <motion.p
              className="text-sm md:text-xl text-gray-300 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {service.shortDetails}
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <button className="px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors">
                Start Your Project
              </button>
              <button className="px-8 py-3.5 bg-gray-800 hover:bg-gray-700 text-white rounded-lg font-medium transition-colors border border-gray-700">
                Learn How It Works
              </button>
            </motion.div>

            {/* Key points */}
            <motion.div
              className="mt-12 flex flex-wrap justify-center gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              {[
                { icon: Clock, text: "Fast Delivery" },
                { icon: CheckCircle, text: "Quality Guaranteed" },
                { icon: Users, text: "Expert Team" },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2 text-gray-400">
                  <item.icon className="w-5 h-5 text-blue-400" />
                  <span>{item.text}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-8 h-8 text-gray-500 hover:text-white cursor-pointer" />
        </motion.div>
      </section>

      {/* Service Overview */}
      <section
        id="overview"
        className="py-16 md:py-24"
        ref={setSectionRef('overview')}
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="sm:text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Service Overview</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 sm:mx-auto mb-6" />
            <p className="sm:text-lg text-base text-gray-300 max-w-3xl mx-auto">
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
                whileHover={{ y: -5 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-cyan-600/20 p-1.5 rounded-full border border-cyan-400/30 flex-shrink-0">
                    <img className="w-8 h-8" src="/index.png" alt="" />
                  </div>
                  <p className="text-gray-200 sm:leading-relaxed">{detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section - Fixed Auto-Sliding */}
      {service.features && service.features.length > 0 && (
        <section
          id="features"
          className="py-16 md:py-24 overflow-hidden"
          ref={setSectionRef('features')}
        >
          <div className="container mx-auto sm:px-4">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Key Features</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-6" />
            </motion.div>

            {/* Auto-sliding Features Container */}
            <div className="relative font-nunito h-[500px] md:h-[600px] w-full overflow-hidden rounded-2xl sm:rounded-bl-[120px] sm:bg-gray-800/50 border sm:border-gray-700 border-[#00f1dd] shadow-xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeFeature}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 flex flex-col md:flex-row"
                >
                  {/* Feature Content */}
                  <div className="w-full md:w-1/2 sm:p-8 p-3 md:p-12 flex flex-col justify-center">
                    <div className="mb-4 flex items-center gap-2">
                      <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center text-blue-400 font-bold">
                        {activeFeature + 1}
                      </div>
                      <span className="text-sm text-blue-400">Feature {activeFeature + 1}/{service.features.length}</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                      {service.features[activeFeature].title}
                    </h3>
                    <p className="text-gray-300 sm:mb-6 sm:text-lg text-sm sm:leading-relaxed mb-4">
                      {service.features[activeFeature].content}
                    </p>
                    
                    {/* Play/Pause button */}
                    <button
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="text-blue-400 hover:text-blue-300 text-sm flex items-center gap-2 mt-4"
                    >
                      {isPlaying ? "Pause Auto-slide" : "Resume Auto-slide"}
                    </button>
                  </div>

                  {/* Feature Image */}
                  <div className="w-full md:w-1/2 h-64 md:h-full relative bg-gray-700">
                    <img
                      src={
                        service.features[activeFeature].image ||
                        `/placeholder.svg?height=600&width=800&query=${service.features[activeFeature].title}`
                      }
                      alt={service.features[activeFeature].title}
                      className="w-full h-full object-cover absolute inset-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-black/60 via-black/30 to-transparent" />
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center gap-3 mt-8">
              {service.features.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleFeatureChange(index)}
                  className={`w-3 h-3 rounded-full transition-all ${index === activeFeature
                    ? "bg-blue-500 scale-125"
                    : "bg-gray-600 hover:bg-gray-500"
                    }`}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Enhanced Services Grid with Navigation */}
      <section
        id="services"
        className="py-16 md:py-24 bg-[#ecfbfc] sm:rounded-br-[120px] sm:rounded-tl-[120px] sm:px-4 sm:m-2"
        ref={setSectionRef('services')}
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="sm:text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">What We Offer</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-teal-600 sm:mx-auto mb-6" />
            <p className="sm:text-lg text-sm text-gray-900 max-w-3xl mx-auto">
              Complete range of services to meet your requirements
            </p>
          </motion.div>

          {/* Services Container with Navigation */}
          <div className="relative">
            {/* Navigation Arrows for Desktop */}
            {!isMobile && service?.bulletPoints && service.bulletPoints.length > 4 && (
              <>
                <button
                  onClick={prevServices}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-gray-900 hover:bg-gray-800 text-white p-1 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
                >
                  {/* <ChevronLeft className="w-6 h-6" /> */}
                  <img className="w-8 h-8" src="/index.png" alt="" />
                </button>
                <button
                  onClick={nextServices}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-gray-900 hover:bg-gray-800 text-white p-1 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
                >
                  <img className="w-8 h-8" src="/index.png" alt="" />
                  {/* <ChevronRight className="w-6 h-6" /> */}
                </button>
              </>
            )}

            {/* Services Grid */}
            <div 
              className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'} sm:gap-6 gap-3 overflow-hidden`}
              onTouchStart={isMobile ? handleTouchStart : undefined}
              onTouchMove={isMobile ? handleTouchMove : undefined}
              onTouchEnd={isMobile ? handleTouchEnd : undefined}
            >
              <AnimatePresence mode="wait">
                {getVisibleServices().map((serviceItem, index) => {
                  // Safety check for string content
                  if (!serviceItem.content || typeof serviceItem.content !== 'string') {
                    return null
                  }

                  const [title, ...rest] = serviceItem.content.split(":");
                  const description = rest.join(":").trim();

                  return (
                    <motion.div
                      key={`${currentServiceIndex}-${index}`}
                      initial={{ opacity: 0, x: isMobile ? 100 : 0, y: isMobile ? 0 : 30 }}
                      animate={{ opacity: 1, x: 0, y: 0 }}
                      exit={{ opacity: 0, x: isMobile ? -100 : 0, y: isMobile ? 0 : -30 }}
                      transition={{ duration: 0.5, delay: isMobile ? 0 : index * 0.1 }}
                      whileHover={{ y: -8 }}
                      className="bg-white bg-cover bg-no-repeat backdrop-blur-sm rounded-xl sm:p-6 p-3 border border-gray-700 hover:border-emerald-500/50 transition-all duration-300 shadow-lg"
                    >
                      <div className=" sm:gap-4">
                        <div className="md:bg-transparent bg-gradient-to-r from-[#000] to-[#0e0247] p-3 rounded-lg border border-emerald-400/30 flex-shrink-0">
                          <Zap className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h3 className="sm:text-2xl italic font-nunito font-semibold text-[#19012c] mb-2 sm:mt-0 mt-3 sm:mb-2">
                            {title.trim()}
                          </h3>
                          <p className="text-gray-900 text-sm bg-amber-50 italic p-1">{description}</p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>

            {/* Mobile Navigation Dots */}
            {isMobile && service?.bulletPoints && service.bulletPoints.length > 1 && (
              <div className="flex justify-center gap-2 mt-6">
                {service.bulletPoints.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentServiceIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all ${index === currentServiceIndex
                      ? "bg-emerald-500 scale-125"
                      : "bg-gray-400 hover:bg-gray-500"
                      }`}
                  />
                ))}
              </div>
            )}

            {/* Desktop Navigation Indicators */}
            {!isMobile && service?.bulletPoints && service.bulletPoints.length > 4 && (
              <div className="flex justify-center gap-2 mt-8">
                {Array.from({ length: Math.ceil(service.bulletPoints.length / 4) }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentServiceIndex(index * 4)}
                    className={`w-3 h-3 rounded-full transition-all ${Math.floor(currentServiceIndex / 4) === index
                      ? "bg-emerald-500 scale-125"
                      : "bg-gray-400 hover:bg-gray-500"
                      }`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Process Section */}
      {service.process && service.process.length > 0 && (
        <section
          id="process"
          className="py-10 md:py-24"
          ref={setSectionRef('process')}
        >
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="sm:text-center sm:mb-16 mb-8"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Process</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 sm:mx-auto mb-6" />
              <p className="sm:text-lg text-sm text-gray-300 max-w-3xl mx-auto">
                Step-by-step approach to deliver exceptional results
              </p>
            </motion.div>

            <div className="relative">
              <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-indigo-600 transform -translate-x-1/2" />

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {service.process.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 }}
                    className={`relative ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8 lg:mt-16'}`}
                  >
                    <div className="backdrop-blur-xl rounded-xl p-6 border bg-[url(/sbg3.jpg)] bg-cover border-gray-700 hover:border-blue-500/50 transition-all duration-300 shadow-lg h-full">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center text-orange-100 font-bold text-lg shadow-lg mr-4">
                          {index + 1}
                        </div>
                        <h3 className="text-xl font-bold text-black">{step.step}</h3>
                      </div>
                      <p className="text-gray-900 sm:pl-16 sm:text-lg text-sm font-nunito">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      {service.faq && service.faq.length > 0 && (
        <section
          id="faq"
          className="py-16 md:py-24"
          ref={setSectionRef('faq')}
        >
          <div className="font-nunito max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="sm:text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-600 sm:mx-auto mb-6" />
              <p className="sm:text-lg text-sm text-gray-300">
                Get answers to common questions about our {service.serviceType.toLowerCase()} services
              </p>
            </motion.div>

            <div className="space-y-4">
              {service.faq.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 overflow-hidden shadow-lg"
                >
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                    className="w-full px-6 sm:py-9 py-6 text-left flex items-center justify-between hover:bg-gray-700/50 transition-colors"
                  >
                    <h3 className="sm:text-3xl text-xl font-semibold text-white pr-4">{faq.question}</h3>
                    {expandedFaq === index ? (
                      <Minus className="w-5 h-5 text-amber-400 flex-shrink-0" />
                    ) : (
                      <Plus className="w-5 h-5 text-amber-400 flex-shrink-0" />
                    )}
                  </button>
                  <AnimatePresence>
                    {expandedFaq === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden bg-[#1cffbb]"
                      >
                        <div className="px-6 sm:text-2xl pb-6 pt-4 sm:pt-6">
                          <p className="text-black sm:leading-relaxed">{faq.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Explore More Services</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-violet-500 to-purple-600 mx-auto mb-6" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedServices.map((relatedService, index) => (
                <motion.div
                  key={relatedService.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  onClick={() => navigate(`/services/${createSlug(relatedService.serviceType)}`)}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-violet-500/50 transition-all duration-300 cursor-pointer shadow-lg"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-violet-600/20 p-3 rounded-lg border border-violet-400/30">
                      {relatedService.iconType === "image" ? (
                        <img
                          src={relatedService.icon || "/service-icon-placeholder.svg"}
                          alt="Service"
                          className="w-6 h-6"
                        />
                      ) : (
                        getServiceIcon(relatedService.serviceType)
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-[#5be6ff]">{relatedService.serviceType}</h3>
                  </div>
                  <p className="text-gray-300 text-sm mb-6 line-clamp-3">{relatedService.shortDetails}</p>
                  <button className="text-violet-400 text-sm font-medium flex items-center gap-2 hover:text-violet-300 transition-colors">
                    <span>Learn more</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
      <ServiceRequest/>
      {/* Contact CTA */}
      <section
        id="contact"
        className="py-16 md:py-24 bg-gray-800/30"
        ref={setSectionRef('contact')}
      >
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="bg-gradient-to-br from-gray-800 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-gray-700 shadow-2xl text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Start Your Project?</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto mb-8" />
            <p className="sm:text-lg text-sm text-gray-300 mb-8">
              Let's discuss your vision and create something amazing together with our{" "}
              <span className="text-cyan-400">{service.serviceType.toLowerCase()}</span> expertise
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8 flex-wrap">
              <div className="flex items-center gap-3 text-white bg-gray-700/50 px-4 py-2 rounded-lg">
                <Phone className="w-5 h-5 text-cyan-400" />
                <span>+88 01819454892</span>
              </div>
              <div className="flex items-center gap-3 text-white bg-gray-700/50 px-4 py-2 rounded-lg">
                <Mail className="w-5 h-5 text-cyan-400" />
                <span>admin@conqueric.com</span>
              </div>
              <div className="flex items-center gap-3 text-white bg-gray-700/50 px-4 py-2 rounded-lg">
                <MapPin className="w-5 h-5 text-cyan-400" />
                <span>Dhaka, Bangladesh</span>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-3 mx-auto shadow-lg hover:shadow-cyan-500/30 transition-all"
            >
              <span>Get Free Consultation</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
</main>
  )
}

export default ServiceDetail