"use client"

import { useState, useEffect, useRef } from "react"
import { useParams, useNavigate, Link } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { Helmet } from "react-helmet-async"
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
  const [isPlaying, setIsPlaying] = useState(false)
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
const metaTitle = service?.metaTitle || `${service?.serviceType} | Conqueric`
const metaDescription = service?.metaDescription || service?.shortDetails?.slice(0, 150)
const metaKeywords = service?.metaKeywords || service?.serviceType


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
      setIsPlaying(false)
    }, 35)
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
<Helmet>
  <title>{metaTitle}</title>
  <meta name="description" content={metaDescription} />
  <meta name="keywords" content={metaKeywords} />
  <meta property="og:title" content={metaTitle} />
  <meta property="og:description" content={metaDescription} />
  <meta property="og:type" content="website" />
  <meta property="og:url" content={`https://conqueric.com/services/${slug}`} />
  <meta property="og:image" content={service?.icon || "/default-og-image.jpg"} />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={metaTitle} />
  <meta name="twitter:description" content={metaDescription} />
</Helmet>

      
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
                className=" backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <div className=" p-1.5 rounded-full border border-cyan-400/30 flex-shrink-0">
                    <img className="w-8 h-8" src="/index.png" alt="" />
                  </div>
                  <p className="text-gray-200 text- text-lg font-nunito sm:leading-relaxed">{detail}</p>
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
    className="py-16 md:py-24 relative overflow-hidden"
    ref={setSectionRef('features')}
    style={{
      background: "#06140b"
    }}
  >
    {/* Background elements */}
    <div className="absolute inset-0 opacity-5">
      <div className="absolute top-0 right-0 w-72 h-72 bg-cyan-500 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-600 rounded-full filter blur-3xl"></div>
    </div>
    
    <div className="container mx-auto px-4 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="text-center mb-16"
      >

      </motion.div>

      {/* Manual Navigation Features Container */}
      <div className="relative h-auto md:h-[500px] w-full overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 shadow-2xl">
        <div className="flex flex-col md:flex-row h-full">
          {/* Feature Content */}
          <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col justify-center relative">
            {/* Background pattern */}
            <div className="absolute top-0 left-0 w-full h-full opacity-5">
              <div className="absolute top-10 right-10 w-32 h-32 bg-cyan-500 rounded-full filter blur-xl"></div>
              <div className="absolute bottom-10 left-10 w-24 h-24 bg-blue-500 rounded-full filter blur-xl"></div>
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  {activeFeature + 1}
                </div>
                <span className="text-blue-400 font-medium">
                  Feature {activeFeature + 1}/{service.features.length}
                </span>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 leading-tight">
                {service.features[activeFeature].title}
              </h3>
              
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                {service.features[activeFeature].content}
              </p>
            </div>
          </div>

          {/* Feature Image */}
          <div className="w-full md:w-1/2 h-80 md:h-full relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-indigo-900/20 z-10"></div>
            <img
              src={
                service.features[activeFeature].image ||
                `/placeholder.svg?height=600&width=800&query=${service.features[activeFeature].title}`
              }
              alt={service.features[activeFeature].title}
              className="w-full h-full object-cover absolute inset-0"
            />
            
            {/* Decorative elements */}
            <div className="absolute top-6 right-6 w-12 h-12 border-2 border-blue-500/30 rounded-lg z-20"></div>
            <div className="absolute bottom-6 left-6 w-8 h-8 border-2 border-cyan-500/30 rounded-full z-20"></div>
            
            {/* Navigation Arrows - Right Side */}
            <div className="absolute bottom-6 right-6 flex gap-3 z-20">
              <button
                onClick={() => handleFeatureChange((activeFeature - 1 + service.features.length) % service.features.length)}
                className="w-12 h-12 bg-gray-900/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white border border-gray-700 hover:bg-blue-600 transition-all duration-300 hover:scale-110"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={() => handleFeatureChange((activeFeature + 1) % service.features.length)}
                className="w-12 h-12 bg-gray-900/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white border border-gray-700 hover:bg-blue-600 transition-all duration-300 hover:scale-110"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="mt-10">
        <div className="flex justify-center gap-4">
          {service.features.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveFeature(index)}
              className={`flex flex-col items-center group ${index === activeFeature ? "text-white" : "text-gray-500"}`}
            >
              <div className={`w-4 h-4 rounded-full transition-all mb-2 ${
                index === activeFeature 
                  ? "bg-gradient-to-r from-blue-500 to-cyan-500 scale-125 shadow-lg shadow-blue-500/30" 
                  : "bg-gray-600 group-hover:bg-gray-500"
              }`} />
              <span className="text-xs font-medium transition-all">
                {index + 1}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Quick Stats */}

    </div>
  </section>
)}

      {/* Enhanced Services Grid with Navigation */}
<section
  id="services"
  className="py-16 md:py-24 relative overflow-hidden"
  ref={setSectionRef('services')}
  style={{
    background: "#06140b",
  }}
>
  <div className="absolute inset-0 opacity-10">
    <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00eiIvPjwvZz48L2c+PC9zdmc+')]"></div>
  </div>
  
  <div className="container mx-auto px-4 relative z-10">
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className="text-center mb-16"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What We Offer</h2>
      <div className="w-20 h-1 bg-gradient-to-r from-teal-400 to-cyan-600 mx-auto mb-6" />
      <p className="text-lg text-gray-300 max-w-3xl mx-auto">
        Comprehensive solutions tailored to elevate your business
      </p>
    </motion.div>

    {/* Services Container with Enhanced Navigation */}
    <div className="relative">
      {/* Navigation Arrows */}
      {service?.bulletPoints && service.bulletPoints.length > (isMobile ? 1 : 4) && (
        <>
          <button
            onClick={prevServices}
            className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 bg-gradient-to-r from-teal-500 to-cyan-600 text-white p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 hover:shadow-cyan-500/30 hidden md:flex items-center justify-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextServices}
            className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 bg-gradient-to-r from-teal-500 to-cyan-600 text-white p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 hover:shadow-cyan-500/30 hidden md:flex items-center justify-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}

      {/* Services Grid */}
      <div 
        className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'} gap-6 overflow-hidden`}
        onTouchStart={isMobile ? handleTouchStart : undefined}
        onTouchMove={isMobile ? handleTouchMove : undefined}
        onTouchEnd={isMobile ? handleTouchEnd : undefined}
      >
        <AnimatePresence mode="wait">
          {getVisibleServices().map((serviceItem, index) => {
            if (!serviceItem.content || typeof serviceItem.content !== 'string') {
              return null;
            }

            const [title, ...rest] = serviceItem.content.split(":");
            const description = rest.join(":").trim();

            return (
              <motion.div
                key={`${currentServiceIndex}-${index}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ 
                  y: -8,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.1)"
                }}
                className="group bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 relative overflow-hidden h-full flex flex-col"
              >
                {/* Hover effect background */}
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-cyan-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Icon container */}
                <div className="relative z-10 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10 flex-1 flex flex-col">
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-300">
                    {title.trim()}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 flex-1">
                    {description}
                  </p>
                  
                  {/* Learn more link */}
                  <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300 mt-auto">
                    <span className="text-sm font-medium">Learn more</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Mobile Navigation Dots */}
      {isMobile && service?.bulletPoints && service.bulletPoints.length > 1 && (
        <div className="flex justify-center gap-2 mt-8">
          {service.bulletPoints.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentServiceIndex(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${index === currentServiceIndex
                ? "bg-cyan-500 scale-125"
                : "bg-gray-600 hover:bg-gray-500"
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
              className={`w-2.5 h-2.5 rounded-full transition-all ${Math.floor(currentServiceIndex / 4) === index
                ? "bg-cyan-500 scale-125"
                : "bg-gray-600 hover:bg-gray-500"
                }`}
            />
          ))}
        </div>
      )}
    </div>

    {/* CTA Button */}
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.5 }}
      className="text-center mt-12"
    >
      <button className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-8 py-3 rounded-full font-medium hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 flex items-center justify-center mx-auto">
        <span>Explore All Services</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </motion.div>
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

            <Link to="/contact">
            
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-3 mx-auto shadow-lg hover:shadow-cyan-500/30 transition-all"
            >
              <span>Get Free Consultation</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
</main>
  )
}

export default ServiceDetail