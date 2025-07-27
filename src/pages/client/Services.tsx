"use client"
import {
  useState,
  type JSXElementConstructor,
  type Key,
  type ReactElement,
  type ReactNode,
  type ReactPortal,
} from "react"
import { services } from "../../data/service"
import { useNavigate } from "react-router-dom"
import { ArrowRight, CheckCircle, Zap, Users, Globe, Shield } from "lucide-react"
import ScrollToTop from "@/components/ScrollToTop"

// Individual Service Card Component
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

  // Truncate text for mobile
  const truncateText = (text: string, maxLength: number) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + '...'
    }
    return text
  }

  return (
    <div
      className="group relative overflow-hidden rounded-2xl shadow-lg transition-all duration-500 ease-in-out cursor-pointer bg-gray-900 hover:shadow-xl hover:shadow-blue-900/20"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => handleServiceClick(service.serviceType)}
    >
      <ScrollToTop />
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

          {/* Short Description - Truncated on mobile */}
          <p
            className={`text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed transition-colors duration-500 ${
              isHovered ? "text-gray-300" : "text-gray-400"
            }`}
          >
            <span className="hidden sm:inline">{service.shortDetails}</span>
            <span className="sm:hidden">{truncateText(service.shortDetails, 100)}</span>
          </p>

          {/* Bullet Points - Limited to 3 on mobile */}
          <ul className="space-y-2 sm:space-y-3">
            {service.bulletPoints
              .slice(0, window.innerWidth < 640 ? 2 : 5) // Show 3 on mobile, 5 on desktop
              .map(
                (
                  point:
                    | string
                    | number
                    | bigint
                    | boolean
                    | ReactElement<unknown, string | JSXElementConstructor<any>>
                    | Iterable<ReactNode>
                    | ReactPortal
                    | Promise<
                        | string
                        | number
                        | bigint
                        | boolean
                        | ReactPortal
                        | ReactElement<unknown, string | JSXElementConstructor<any>>
                        | Iterable<ReactNode>
                        | null
                        | undefined
                      >
                    | null
                    | undefined,
                  pointIndex: Key | null | undefined,
                ) => (
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
                ),
              )}
          </ul>
        </div>
      </div>
    </div>
  )
}

const ServicesPage = () => {
  const [projectInput, setProjectInput] = useState("")

  return (
    <div className="min-h-screen bg-gray-950">
      {/* Dark Theme Hero Section */}
      <div className="relative  min-h-screen pb-24 pt-54 bg-gradient-to-br from-[#0b0f19] via-[#111827] to-[#0b0f19] flex items-center justify-center overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16"> 
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center  ">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-2xl sm:text-5xl md:lg:xl:2xl:text-5xl font-family-comfort md:lg:xl:sm:2xl:font-bold font-light text-white mb-6 leading-tight">
                Design, Build, and 
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  - Modernize Mobile App
                </span> & eCommerce Solutions
              </h1>

              <p className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Modernize, build, and scale with flexible, expert teams delivering tailored digital solutions to
                maximize ROI and customer experience.
              </p>

              {/* CTA Section */}
              <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto lg:mx-0">
                <div className="flex-1">
                  <input
                    type="text"
                    placeholder="Tell us more about your project*"
                    value={projectInput}
                    onChange={(e) => setProjectInput(e.target.value)}
                    className="w-full px-6 py-4 bg-gray-800 border border-gray-700 rounded-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  />
                </div>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center justify-center whitespace-nowrap">
                  Start Building Today
                </button>
              </div>
            </div>

            {/* Right Dashboard Mockup */}
          <div className="">
            <img className="rounded" src="https://atc.xyz/wp-content/uploads/2023/10/banner-image.png" alt="" />
          </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="md:lg:xl:2xl:py-20 bg-gradient-to-tr from-[#0b0f19] via-[#111827] to-[#0b0f19]">
        <div className="mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-16">
          <div className="md:lg:xl:2xl:text-start  md:lg:xl:2xl:flex justify-between space-y-4 mb-12 sm:mb-16">
            <h2 className="text-3xl  sm:text-4xl font-bold text-black mb-4 bg-[#62ed17] font-family-comfort px-4 py-2 w-fit h-fit rounded">
              Our Services
            </h2>
            <p className="text-lg text-start sm:text-xl text-gray-400 max-w-2xl font-family-mont">
              We provide end-to-end digital solutions tailored to your business goals — from intuitive design and robust
              web/app development to strategic digital marketing and scalable tech integrations. Explore globally our
              service and growth significantly.
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
      <div className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-[#252527] via-[#111827] to-[#0b0f19]">
        <div className="mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-16">
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
      <div className="py-12 sm:py-16 lg:py-20 bg-gradient-to-tr from-[#0b0f19] via-[#111827] to-[#0b0f19] text-white">
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
