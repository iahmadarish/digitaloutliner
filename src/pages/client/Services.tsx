"use client"

import { useState, type JSXElementConstructor, type Key, type ReactElement, type ReactNode, type ReactPortal } from "react"
import { services } from "../../data/service"
import { useNavigate } from "react-router-dom"
import { ArrowRight, CheckCircle, Star, Zap, Target, Users, Settings, Globe, Shield } from "lucide-react"
import ScrollToTop from "@/components/ScrollToTop"

// Individual Service Card Component
const ServiceCard = ({ service, index }: { service: any; index: number }) => {
  const [isHovered, setIsHovered] = useState(false)
  const navigate = useNavigate()

  // Function to create URL-friendly slug from serviceType
  const createSlug = (serviceType: string) => {
    return serviceType
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "")
  }

  // Function to handle service click
  const handleServiceClick = (serviceType: string) => {
    const slug = createSlug(serviceType)
    navigate(`/services/${slug}`)
  }

  return (
    <div
      className="group relative overflow-hidden rounded-2xl shadow-lg transition-all duration-500 ease-in-out cursor-pointer bg-gray-900 hover:shadow-xl hover:shadow-blue-900/20"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => handleServiceClick(service.serviceType)}
    >
      <ScrollToTop/>
      <div
        className={`grid grid-cols-1 lg:grid-cols-2 min-h-[300px] sm:min-h-[400px] ${
          index % 2 === 0 ? "" : "lg:grid-flow-col-dense"
        }`}
      >
        {/* Image Section */}
        <div className={`relative overflow-hidden ${index % 2 === 0 ? "lg:order-1" : "lg:order-2"}`}>
          <img
            src={isHovered && service.images[1] ? service.images[1] : service.images[0]}
            alt={service.serviceType}
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
            onError={(e) => {
              e.currentTarget.src = "/placeholder.svg?height=400&width=600"
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent"></div>
        </div>

        {/* Content Section */}
        <div
          className={`p-6 sm:p-8 lg:p-12 flex flex-col justify-center relative transition-all duration-500 ${
            index % 2 === 0 ? "lg:order-2" : "lg:order-1"
          } ${isHovered ? "bg-blue-900/30 text-white" : "bg-gray-900 text-gray-100"}`}
        >
          {/* Arrow Icon */}
          <div className="absolute top-6 sm:top-8 right-6 sm:right-8">
            <div
              className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-500 ${
                isHovered ? "bg-white text-blue-900" : "bg-blue-600 text-white"
              }`}
            >
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
          </div>

          {/* Service Title */}
          <h3
            className={`text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 transition-colors duration-500 pr-16 ${
              isHovered ? "text-white" : "text-gray-100"
            }`}
          >
            {service.serviceType.toUpperCase()}
          </h3>

          {/* Short Description */}
          <p
            className={`text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed transition-colors duration-500 ${
              isHovered ? "text-gray-300" : "text-gray-400"
            }`}
          >
            {service.shortDetails}
          </p>

          {/* Bullet Points */}
          <ul className="space-y-2 sm:space-y-3">
            {service.bulletPoints.slice(0, 5).map((point: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined, pointIndex: Key | null | undefined) => (
              <li
                key={pointIndex}
                className={`flex items-start text-sm sm:text-base transition-colors duration-500 ${
                  isHovered ? "text-gray-300" : "text-gray-400"
                }`}
              >
                <span
                  className={`inline-block w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0 transition-colors duration-500 ${
                    isHovered ? "bg-white" : "bg-blue-500"
                  }`}
                ></span>
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

const ServicesPage = () => {
  const stats = [
    { number: "500+", label: "Projects Completed", icon: <Target className="w-6 h-6" /> },
    { number: "5+", label: "Years Experience", icon: <Star className="w-6 h-6" /> },
    { number: "100+", label: "Happy Clients", icon: <Users className="w-6 h-6" /> },
    { number: "24/7", label: "Support", icon: <Zap className="w-6 h-6" /> },
  ]

  return (
    <div className="min-h-screen bg-gray-950">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-gray-900 via-blue-900/80 to-indigo-900/80 text-white">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:py-16 lg:py-20 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 sm:px-6 py-2 mb-6 sm:mb-8">
              <Settings className="w-4 h-4 mr-2 text-blue-400" />
              <span className="text-sm font-medium">Professional IT Services</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              Transform Your Business with
              <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Cutting-Edge Technology
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 mb-8 sm:mb-10 max-w-3xl mx-auto px-4">
              We deliver innovative IT solutions that drive growth, efficiency, and success for businesses of all sizes
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 sm:mb-16 px-4">
              <button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group">
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-white/30 hover:bg-white/10 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300">
                View Portfolio
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-4xl mx-auto px-4">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 hover:bg-white/20 transition-colors duration-300">
                    <div className="text-blue-400 mb-2 flex justify-center">{stat.icon}</div>
                    <div className="text-2xl sm:text-3xl font-bold mb-1">{stat.number}</div>
                    <div className="text-xs sm:text-sm text-gray-300">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-12 sm:py-16 lg:py-20 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Our Services</h2>
            <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
              Comprehensive IT solutions tailored to meet your specific business requirements
            </p>
          </div>
          <div className="space-y-6 sm:space-y-8">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="py-12 sm:py-16 lg:py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 sm:mb-6">Why Choose Us?</h2>
              <p className="text-base sm:text-lg text-gray-400 mb-6 sm:mb-8">
                We combine technical expertise with business acumen to deliver solutions that not only work but drive
                real results for your organization.
              </p>
              <div className="space-y-4 sm:space-y-6">
                {[
                  "Expert team with 5+ years of experience",
                  "Agile development methodology",
                  "24/7 technical support and maintenance",
                  "Competitive pricing with transparent costs",
                  "On-time delivery guarantee",
                ].map((point, index) => (
                  <div key={index} className="flex items-center">
                    <div className="bg-green-900/30 rounded-full p-2 mr-3 sm:mr-4 flex-shrink-0">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
                    </div>
                    <span className="text-sm sm:text-base text-gray-300">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative mt-8 lg:mt-0">
              <div className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
                <div className="grid grid-cols-2 gap-4 sm:gap-6">
                  <div className="bg-gray-800 rounded-xl p-4 sm:p-6 text-center shadow-lg hover:bg-gray-700 transition-colors duration-300">
                    <Globe className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400 mx-auto mb-2 sm:mb-3" />
                    <div className="text-lg sm:text-2xl font-bold text-white">Clean Code</div>
                    <div className="text-xs sm:text-sm text-gray-400">Maintainable & Scalable</div>
                  </div>
                  <div className="bg-gray-800 rounded-xl p-4 sm:p-6 text-center shadow-lg hover:bg-gray-700 transition-colors duration-300">
                    <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-green-400 mx-auto mb-2 sm:mb-3" />
                    <div className="text-lg sm:text-2xl font-bold text-white">Fast Delivery</div>
                    <div className="text-xs sm:text-sm text-gray-400">On-time Every Time</div>
                  </div>
                  <div className="bg-gray-800 rounded-xl p-4 sm:p-6 text-center shadow-lg hover:bg-gray-700 transition-colors duration-300">
                    <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400 mx-auto mb-2 sm:mb-3" />
                    <div className="text-lg sm:text-2xl font-bold text-white">Secure</div>
                    <div className="text-xs sm:text-sm text-gray-400">Industry Standards</div>
                  </div>
                  <div className="bg-gray-800 rounded-xl p-4 sm:p-6 text-center shadow-lg hover:bg-gray-700 transition-colors duration-300">
                    <Users className="w-6 h-6 sm:w-8 sm:h-8 text-orange-400 mx-auto mb-2 sm:mb-3" />
                    <div className="text-lg sm:text-2xl font-bold text-white">Support</div>
                    <div className="text-xs sm:text-sm text-gray-400">24/7 Available</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-black to-indigo-950 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">Ready to Start Your Project?</h2>
          <p className="text-lg sm:text-xl text-blue-200 mb-6 sm:mb-8">
            Let's discuss your requirements and bring your ideas to life with our expert team
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-800 hover:bg-gray-100 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-colors duration-300">
              Get Free Quote
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-800 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-colors duration-300">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServicesPage