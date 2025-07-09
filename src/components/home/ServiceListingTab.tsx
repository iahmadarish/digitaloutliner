"use client"

import {
  ArrowRight,
} from "lucide-react"
import { useNavigate } from "react-router-dom"
import { services } from "../../data/service" // Import your services data
import { useState } from "react"
 
// Function to create URL-friendly slug from serviceType
const createSlug = (serviceType: string) => {
  return serviceType
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
}


// Enhanced icon mapping with better icons

// Card background variants

const ServiceListingTab = () => {
  const navigate = useNavigate()
  const [showAll, setShowAll] = useState(false)
  // Handle service card click - navigate to service details using slug
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
  console.log(setShowAll)

  const ServiceCard = ({ service, index }: { service: any; index: number }) => {
    // Color pattern: white, teal, black (repeating)
    const getCardStyle = (index: number) => {
      const patterns = [
        { bg: "bg-white", text: "text-gray-800", button: "bg-gray-800 text-white" },
        { bg: "bg-[#d4ff14]", text: "text-black", button: "bg-gray-800 text-white" },
        { bg: "bg-black/50", text: "text-white", button: "bg-teal-400 text-gray-800" },
      ]
      return patterns[index % 3]
    }

    const cardStyle = getCardStyle(index)

    return (
      <div
        onClick={() => handleServiceClick(service.serviceType)}
        className={`${cardStyle.bg} ${cardStyle.text} rounded-2xl p-8 cursor-pointer transition-all duration-300 shadow-blue-500 hover:shadow-md relative overflow-hidden group`}
      >
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-32 h-32 opacity-10 transform translate-x-8 -translate-y-8">
          {service.iconType === "image" ? (
            <img src={service.icon} alt={service.serviceType} className="w-16 h-16" />
          ) : (
            service.icon && <service.icon className="w-16 h-16" />
          )}
        </div>

        <div className="relative z-10 flex flex-col sm:flex-row justify-between items-center gap-x-14 gap-y-6 h-full">
          <div className="">
            {/* Service Title */}
            <div className="mb-4">
              <h3 className="text-xl md:lg:xl:2xl:text-4xl font-family-comfort font-bold leading-tight">{service.serviceType}</h3>
            </div>

            {/* Service Description */}
            <div className="flex-1 font-family-mont md:lg:xl:2xl:sm:block hidden mb-8">
              <p
                className={`text-sm md:lg:xl:2xl:text-xl leading-relaxed ${cardStyle.text === "text-white" ? "text-gray-200" : "text-gray-800"}`}
              >

                {service.shortDetails}
              </p>
            </div>
            <div className="flex-1 font-family-mont mb-8 md:lg:xl:2xl:sm:hidden block">
              <p
                className={`text-sm md:lg:xl:2xl:text-xl leading-relaxed ${cardStyle.text === "text-white" ? "text-gray-200" : "text-gray-800"}`}
              >

                {truncateText(service.shortDetails, 100)}
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
                    className={`w-3 h-3 ${cardStyle.button.includes("bg-black-800") ? "text-black" : "text-blue-500"}`}
                  />
                </div>
                <span className="underline">Learn more</span>
              </button>


            </div>
          </div>

          <div className="flex-shrink-0 md:lg:xl:2xl:w-32 w-20 md:lg:xl:2xl:h-32 h-20 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md shadow-inner">
            <div
              className={`${cardStyle.text === "text-white" ? "text-white/50" : "text-gray-500"} group-hover:scale-110 transition-transform duration-300`}
            >
              {service.iconType === "image" ? (
                <img
                  src={service.icon}
                  alt={service.serviceType}
                  className="md:lg:xl:2xl:w-30 w-20 md:lg:xl:2xl:h-30 h-20  object-contain"
                />
              ) : (
                service.icon && <service.icon className="w-16 h-16" />
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-gradient-to-br from-[#0b0f19] via-[#111827] to-[#0b0f19] py-20 px-4 sm:px-6 lg:px-8">
      <div className=" mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-16">
        {/* Header Section */}
        <div className="mb-16">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
            {/* Title Section */}
            <div className="lg:max-w-md">
              <div className="inline-block">
                <span className="bg-green-400 text-black px-4 py-2 rounded-lg font-bold text-lg">SERVICES</span>
              </div>
              <p className="text-white text-lg mt-4 leading-relaxed">
                At URSOFTS, we offer a range of services to help businesses grow and succeed
                online. These services include:
              </p>
            </div>

            {/* Description Section */}
            <div className="lg:max-w-2xl">
              <p className="text-gray-300 text-base leading-relaxed">
                We provide end-to-end digital solutions tailored to your business goals — from intuitive design and
                robust web/app development to strategic digital marketing and scalable tech integrations. Explore
                globally top-rated web and app development agencies, carefully curated by our experts based on their
                proven project success, verified client testimonials, competitive pricing, innovation, and team
                capabilities.
              </p>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 ">
          {displayedServices.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
        {/* Show More Button (if there are more than 6 services) */}
        {!showAll && services.length > 4 && (
          <div className="text-center mt-12">
            <button
              onClick={() => navigate("/services")}
              className="bg-green-400 hover:bg-green-500 text-black font-semibold px-8 py-3 rounded-lg transition-colors duration-200 flex items-center space-x-2 mx-auto"
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
