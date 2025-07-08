"use client"

import { Briefcase, Monitor, PenTool, Server, Camera, Globe2, DollarSign, Users, ArrowRight } from "lucide-react"
import { useNavigate } from "react-router-dom"
import { useState, useEffect, useRef } from "react"
import { services } from "../../data/service" // Import your services data

// Function to create URL-friendly slug from serviceType
const createSlug = (serviceType: string) => {
  return serviceType
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
}

// Icon mapping based on service types
const getServiceIcon = (serviceType: string) => {
  const iconClass = "w-10 h-10 text-blue-400 group-hover:text-white transition"

  switch (serviceType) {
    case "Accounting & Financial Services":
      return <DollarSign className={iconClass} />
    case "Graphic Design & Photo Editing":
      return <PenTool className={iconClass} />
    case "Website Design & Development":
      return <Monitor className={iconClass} />
    case "Digital Marketing":
      return <Globe2 className={iconClass} />
    case "Product Photography":
      return <Camera className={iconClass} />
    case "IT Consultancy & Accessories":
      return <Server className={iconClass} />
    case "Government Incentive Assistance":
      return <Users className={iconClass} />
    default:
      return <Briefcase className={iconClass} />
  }
}

// Fallback images for services that don't have images or when images fail to load
const fallbackImages: Record<number, string> = {
  1: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=500&h=300&fit=crop&crop=center",
  2: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=500&h=300&fit=crop&crop=center",
  3: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop&crop=center",
  4: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=500&h=300&fit=crop&crop=center",
  5: "https://images.unsplash.com/photo-1606041008023-472dfb5e530f?w=500&h=300&fit=crop&crop=center",
  6: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=500&h=300&fit=crop&crop=center",
  7: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=500&h=300&fit=crop&crop=center",
}

const ServiceListingTab = () => {
  const navigate = useNavigate()
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const sliderRef = useRef<HTMLDivElement>(null)
  
  // Touch/drag state
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [currentX, setCurrentX] = useState(0)
  const [dragOffset, setDragOffset] = useState(0)

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)

    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Handle service card click - navigate to service details using slug
  const handleServiceClick = (serviceType: string) => {
    if (isDragging) return // Don't navigate if dragging
    const slug = createSlug(serviceType)
    navigate(`/services/${slug}`)
  }

  // Touch handlers for mobile swiper
  const handleTouchStart = (e: React.TouchEvent) => {
    if (!isMobile) return
    setStartX(e.touches[0].clientX)
    setCurrentX(e.touches[0].clientX)
    setIsDragging(true)
    setDragOffset(0)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isMobile || !isDragging) return
    const newCurrentX = e.touches[0].clientX
    const diff = newCurrentX - startX
    setCurrentX(newCurrentX)
    setDragOffset(diff)
  }

  const handleTouchEnd = () => {
    if (!isMobile || !isDragging) return

    const diffX = startX - currentX
    const threshold = 50

    if (Math.abs(diffX) > threshold) {
      if (diffX > 0 && currentSlide < services.length - 1) {
        setCurrentSlide(prev => prev + 1)
      } else if (diffX < 0 && currentSlide > 0) {
        setCurrentSlide(prev => prev - 1)
      }
    }

    setIsDragging(false)
    setDragOffset(0)
  }

  // Mouse handlers for desktop drag support (optional)
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!isMobile) return
    setStartX(e.clientX)
    setCurrentX(e.clientX)
    setIsDragging(true)
    setDragOffset(0)
    e.preventDefault()
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isMobile || !isDragging) return
    const newCurrentX = e.clientX
    const diff = newCurrentX - startX
    setCurrentX(newCurrentX)
    setDragOffset(diff)
  }

  const handleMouseUp = () => {
    if (!isMobile || !isDragging) return

    const diffX = startX - currentX
    const threshold = 50

    if (Math.abs(diffX) > threshold) {
      if (diffX > 0 && currentSlide < services.length - 1) {
        setCurrentSlide(prev => prev + 1)
      } else if (diffX < 0 && currentSlide > 0) {
        setCurrentSlide(prev => prev - 1)
      }
    }

    setIsDragging(false)
    setDragOffset(0)
  }

  // Navigation functions
  const nextSlide = () => {
    if (currentSlide < services.length - 1) {
      setCurrentSlide(prev => prev + 1)
    }
  }

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(prev => prev - 1)
    }
  }

  const ServiceCard = ({ service }: { service: any }) => (
    <div
      onClick={() => handleServiceClick(service.serviceType)}
      className="bg-black rounded-xl shadow-md overflow-hidden group transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl relative h-80 cursor-pointer flex-shrink-0"
    >
      {/* Service Card Content */}
      <div className="absolute inset-0 p-6 flex flex-col justify-center items-start bg-gradient-to-tr from-blue-500/20 to-blue-950 transition-all duration-500 group-hover:opacity-0 group-hover:scale-110">
        <div className="mb-4 text-white border rounded-full px-3 py-3 border-gray-500">
          {getServiceIcon(service.serviceType)}
        </div>
        <h3 className="text-xl font-semibold text-white mb-3">{service.serviceType}</h3>
        <p className="text-white text-sm leading-relaxed">{service.shortDetails}</p>
      </div>

      {/* Hover Overlay with Image */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-100 scale-95">
        <div className="relative h-full w-full">
          {/* Service Image - use first image from service data or fallback */}
          <img
            src={service.images && service.images.length > 0 ? service.images[0] : fallbackImages[service.id]}
            alt={service.serviceType}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            onError={(e) => {
              // Fallback to gradient background if image fails to load
              const target = e.target as HTMLImageElement
              const nextElement = target.nextElementSibling as HTMLElement
              target.style.display = "none"
              if (nextElement) {
                nextElement.style.display = "block"
              }
            }}
          />

          {/* Fallback gradient background */}
          <div
            className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600"
            style={{ display: "none" }}
          ></div>

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/20 bg-opacity-50 transition-opacity duration-300"></div>

          {/* Service Title at Bottom */}
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/50 to-transparent">
            <h3 className="text-xl font-bold text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              {service.serviceType}
            </h3>
            <p className="text-gray-200 text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 line-clamp-3">
              {service.shortDetails}
            </p>
          </div>

          {/* Arrow Icon */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 group-hover:scale-110">
            <div className="bg-white p-4 rounded-full shadow-lg transform rotate-0 group-hover:rotate-12 transition-transform duration-300">
              <ArrowRight className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <div className="bg-gradient-to-br from-[#0b0f19] via-[#111827] to-[#0b0f19] mx-auto px-4 sm:px-6 md:xl:2xl:lg:px-18 py-16">
      {/* Header */}
      <div className="text-start font-family-comfort mb-16 md:lg:xl:2xl:flex justify-between items-center md:lg:xl:2x:py-11  px-2">
        <h2 className="md:lg:xl:2xl:text-4xl text-2xl font-bold text-teal-300 "> Services we are Provide <br /> <span className="text-lg text-white mt-2">Comprehensive Web & App Development Solutions for Your Business</span> </h2>
        <p className="text-gray-100 text-lg max-w-2xl font-family-mont">
          <br /> <br />

          We provide end-to-end digital solutions tailored to your business goals — from intuitive design and robust web/app development to strategic digital marketing and scalable tech integrations. Explore globall top-rated web and app development agencies, carefully curated by our experts based on their proven project success, verified client testimonials, competitive pricing, innovation, and team capabilities.
        </p>
      </div>

      {/* Mobile Swiper */}
      {isMobile ? (
        <div className="relative">
          <div
            ref={sliderRef}
            className="overflow-hidden touch-pan-x select-none"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            <div
              className="flex transition-transform duration-300 ease-out"
              style={{
                transform: `translateX(${-currentSlide * 100 + (dragOffset / window.innerWidth) * 100}%)`,
                width: `${services.length * 100}%`
              }}
            >
              {services.map((service) => (
                <div key={service.id} className="w-full px-4">
                  <ServiceCard service={service} />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-between items-center mt-6">
            <button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className={`p-3 rounded-full transition-all duration-200 ${
                currentSlide === 0 
                  ? 'bg-gray-700 text-gray-500 cursor-not-allowed' 
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              <ArrowRight className="w-5 h-5 rotate-180" />
            </button>

            <div className="flex space-x-2">
              {services.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    currentSlide === index ? 'bg-blue-600 scale-125' : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              disabled={currentSlide === services.length - 1}
              className={`p-3 rounded-full transition-all duration-200 ${
                currentSlide === services.length - 1 
                  ? 'bg-gray-700 text-gray-500 cursor-not-allowed' 
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Slide Counter */}
          <div className="text-center mt-4">
            <span className="text-gray-400 text-sm">
              {currentSlide + 1} / {services.length}
            </span>
          </div>
        </div>
      ) : (
        /* Desktop Grid */
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      )}
    </div>
  )
}

export default ServiceListingTab