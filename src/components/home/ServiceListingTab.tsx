"use client"

import {
  ArrowRight,
} from "lucide-react"
import { useNavigate } from "react-router-dom"
import { services } from "../../data/service"
import { useState, useEffect } from "react"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

// Function to create URL-friendly slug from serviceType
const createSlug = (serviceType: string) => {
  return serviceType
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
}

const ServiceListingTab = () => {
  const navigate = useNavigate()
  const [showAll] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    handleResize() // Check on initial render
    window.addEventListener('resize', handleResize)
    
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const handleServiceClick = (serviceType: string) => {
    const slug = createSlug(serviceType)
    navigate(`/services/${slug}`)
  }

  const truncateText = (text: string, maxLength: number) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + '...'
    }
    return text
  }

  const displayedServices = showAll ? services : services.slice(0, 4)

  const ServiceCard = ({ service, index }: { service: any; index: number }) => {
    const getCardStyle = (index: number) => {
      const patterns = [
        { bg: "bg-white", text: "text-gray-800", button: "bg-gray-800 text-white" },
        { bg: "bg-[#98fc03]", text: "text-black", button: "bg-gray-800 text-white" },
        { bg: "bg-indigo-950", text: "text-white", button: "bg-teal-400 text-gray-800" },
      ]
      return patterns[index % 3]
    }

    const cardStyle = getCardStyle(index)

    return (
      <div
        onClick={() => handleServiceClick(service.serviceType)}
        className={`${cardStyle.bg} ${cardStyle.text} rounded-2xl p-6 md:p-8 cursor-pointer transition-all duration-300 shadow-blue-500 hover:shadow-md relative overflow-hidden group h-full`}
      >
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 opacity-10 transform translate-x-6 -translate-y-6 md:translate-x-8 md:-translate-y-8">
          {service.iconType === "image" ? (
            <img src={service.icon} alt={service.serviceType} className="w-12 h-12 md:w-16 md:h-16" />
          ) : (
            service.icon && <service.icon className="w-12 h-12 md:w-16 md:h-16" />
          )}
        </div>

        <div className="relative z-10 flex flex-col sm:flex-row justify-between items-center gap-x-14 gap-y-6 h-full">
          <div className="">
            {/* Service Title */}
            <div className="mb-4">
              <h3 className="text-xl md:text-4xl font-family-comfort font-bold leading-tight">{service.serviceType}</h3>
            </div>

            {/* Service Description */}
            <div className="flex-1 font-family-varta hidden sm:block mb-6 md:mb-8">
              <p
                className={`text-sm md:text-lg ${cardStyle.text === "text-white" ? "text-gray-200" : "text-gray-800"}`}
              >
                {service.shortDetails}
              </p>
            </div>
            <div className="flex-1 font-family-mont mb-6 md:mb-8 sm:hidden block">
              <p
                className={`text-sm leading-relaxed ${cardStyle.text === "text-white" ? "text-gray-200" : "text-gray-800"}`}
              >
                {truncateText(service.shortDetails, 90)}
              </p>
            </div>

            {/* Bottom section with button and icon */}
            <div className="flex items-center justify-between">
              {/* Learn More Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  handleServiceClick(service.serviceType)
                }}
                className={`${cardStyle.button} px-4 py-2 rounded font-semibold transition-all duration-300 flex items-center gap-2 hover:gap-3`}
              >
                <div className="w-6 h-6 rounded-full bg-current flex items-center justify-center">
                  <ArrowRight
                    className={`w-3 h-3 ${cardStyle.button.includes("bg-[#06140b]-800") ? "text-black" : "text-blue-500"}`}
                  />
                </div>
                <span className="underline">Learn more</span>
              </button>
            </div>
          </div>

          <div className="flex-shrink-0 w-20 h-20 md:w-32 md:h-32 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md shadow-inner">
            <div
              className={`${cardStyle.text === "text-white" ? "text-white/50" : "text-gray-500"} group-hover:scale-110 transition-transform duration-300`}
            >
              {service.iconType === "image" ? (
                <img
                  src={service.icon}
                  alt={service.serviceType}
                  className="w-20 h-20 md:w-30 md:h-30 object-contain"
                />
              ) : (
                service.icon && <service.icon className="w-12 h-12 md:w-16 md:h-16" />
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-[#06140b]">
      <div className="mx-auto container">
        {/* Header Section */}
        <div className="mb-12 md:mb-16">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 md:gap-8">
            {/* Title Section */}
            <div className="lg:max-w-md">
              <div className="inline-block">
                <span className="bg-green-400 text-black px-4 py-2 rounded-lg font-bold text-lg">SERVICES</span>
              </div>
              <p className="text-white text-base md:text-lg mt-3 md:mt-4 leading-relaxed">
                At CONQUERIC, we offer a range of services to help businesses grow and succeed
                online. These services include:
              </p>
            </div>

            {/* Description Section */}
            <div className="lg:max-w-2xl">
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                We provide end-to-end digital solutions tailored to your business goals — from intuitive design and
                robust web/app development to strategic digital marketing and scalable tech integrations. Explore
                globally top-rated web and app development agencies, carefully curated by our experts based on their
                proven project success, verified client testimonials, competitive pricing, innovation, and team
                capabilities.
              </p>
            </div>
          </div>
        </div>

        {/* Services Grid/Swiper */}
        {isMobile ? (
          <div className="relative">
            <Swiper
              modules={[Pagination]}
              spaceBetween={20}
              slidesPerView={1.1}
              centeredSlides={false}
              pagination={{ clickable: true }}
              breakpoints={{
                640: {
                  slidesPerView: 1.5,
                }
              }}
              className="pb-12"
            >
              {displayedServices.map((service, index) => (
                <SwiperSlide key={service.id}>
                  <div className="h-full pb-6">
                    <ServiceCard service={service} index={index} />
                  </div>
                </SwiperSlide>
              ))}
              {/* View All Services Slide */}
              {!showAll && services.length > 4 && (
                <SwiperSlide>
                  <div className="h-full flex items-center justify-center">
                    <div className="bg-gray-900 rounded-2xl p-8 w-full h-full flex flex-col items-center justify-center text-center">
                      <h3 className="text-2xl font-bold text-white mb-6">Explore All Our Services</h3>
                      <button
                        onClick={() => navigate("/services")}
                        className="bg-green-400 hover:bg-green-500 text-black font-semibold px-6 py-3 rounded-lg transition-colors duration-200 flex items-center space-x-2"
                      >
                        <span>View All Services</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
              )}
            </Swiper>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            {displayedServices.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        )}

        {/* Show More Button for desktop */}
        {!isMobile && !showAll && services.length > 4 && (
          <div className="text-center mt-10 md:mt-12">
            <button
              onClick={() => navigate("/services")}
              className="bg-green-400 hover:bg-green-500 text-black font-semibold px-6 py-2 md:px-8 md:py-3 rounded-lg transition-colors duration-200 flex items-center space-x-2 mx-auto"
            >
              <span>View All Services</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default ServiceListingTab