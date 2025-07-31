"use client"
import { useState, type Key } from "react"
import { services } from "../../data/service"
import { useNavigate } from "react-router-dom"
import { ArrowRight, CheckCircle, Zap, Users, Shield, ChevronRight } from "lucide-react"
import ScrollToTop from "@/components/ScrollToTop"
import v from "@/assets/logo/clogo.png"
const ServiceCard = ({ service, index }: { service: any; index: number }) => {
  const [isHovered, setIsHovered] = useState(false)
  const navigate = useNavigate()
  console.log(isHovered)
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

  return (
    <div
      className={`relative overflow-hidden rounded-3xl transition-all duration-500 cursor-pointer group ${index % 2 === 0 ? 'bg-gradient-to-br' : 'bg-gradient-to-bl'} from-gray-900 to-gray-800 border border-gray-800 hover:border-blue-500/30`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => handleServiceClick(service.serviceType)}
    >
      <ScrollToTop />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
        {/* Image Section */}
        <div className={`relative h-34  sm:h-full ${index % 2 === 0 ? "lg:order-1" : "lg:order-2"}`}>
          <img
            src={service.images[1]}
            alt={service.serviceType}
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
            onError={(e) => {
              e.currentTarget.src = "/placeholder.svg?height=400&width=600"
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent lg:bg-gradient-to-r lg:from-black/70 lg:via-black/40 lg:to-transparent"></div>
        </div>

        {/* Content Section */}
        <div className={`sm:p-8 p-3 flex flex-col justify-center relative ${index % 2 === 0 ? "lg:order-2" : "lg:order-1"}`}>
          {/* Service Title */}
          <div className="flex items-center mb-4">
            <div className={`w-3 h-3 rounded-full mr-3 ${index % 3 === 0 ? 'bg-blue-500' : index % 3 === 1 ? 'bg-emerald-500' : 'bg-purple-500'}`}></div>
            <h3 className="text-xl font-semibold text-white">
              {service.serviceType}
            </h3>
          </div>

          {/* Short Description */}
          <p className="text-gray-400 mb-4 leading-relaxed">
            {service.shortDetails}
          </p>

          {/* Bullet Points */}
          <ul className="sm:space-y-3 space-y-1 mb-8">
            {service.bulletPoints.slice(0, 3).map((point: any, pointIndex: Key | null | undefined) => {
              const pointText = typeof point === "string" ? point : String(point)
              const title = pointText.includes(":") ? pointText.split(":")[0].trim() : pointText

              return (
                <li key={pointIndex} className="flex items-start text-gray-300">
                  <ChevronRight className="w-4 h-4 mt-1 mr-2 text-blue-400 flex-shrink-0" />
                  <span className="text-sm">{title}</span>
                </li>
              )
            })}
          </ul>

          {/* CTA Button */}
          <button
            className={`flex items-center text-sm font-medium w-fit px-6 py-3 rounded-lg transition-all duration-300 ${index % 3 === 0 ? 'bg-blue-600 hover:bg-blue-700' : index % 3 === 1 ? 'bg-emerald-600 hover:bg-emerald-700' : 'bg-purple-600 hover:bg-purple-700'}`}
          >
            Learn more
            <ArrowRight className="w-4 h-4 ml-2" />
          </button>
        </div>
      </div>
    </div>
  )
}

const ServicesPage = () => {
  const [projectInput, setProjectInput] = useState("")

  return (
    <div className="bg-gray-950 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"></div>
        <div className="container mx-auto px-6 py-24 md:py-32 lg:py-40 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block bg-blue-900/20 text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
                Digital Excellence
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Transform Your <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Digital Presence</span>
              </h1>
              <p className="text-lg text-gray-400 mb-8 max-w-lg">
                We craft exceptional digital experiences that drive growth, engagement, and measurable results for your business.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 max-w-xl">
                <input
                  type="text"
                  placeholder="Describe your project..."
                  value={projectInput}
                  onChange={(e) => setProjectInput(e.target.value)}
                  className="flex-1 px-6 py-4 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-medium transition-all flex items-center justify-center whitespace-nowrap">
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
              <div className="relative rounded-2xl overflow-hidden border border-gray-800 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  alt="Digital solutions"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-20 bg-gray-900/50 relative">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our <span className="text-blue-400">Services</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Comprehensive digital solutions tailored to your business needs. We combine innovation with execution to deliver exceptional results.
            </p>
          </div>

          <div className="grid gap-10">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-20 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "100+", label: "Projects Completed", icon: <CheckCircle className="w-8 h-8 mx-auto mb-4 text-blue-400" /> },
              { value: "5+", label: "Years Experience", icon: <Zap className="w-8 h-8 mx-auto mb-4 text-emerald-400" /> },
              { value: "50+", label: "Happy Clients", icon: <Users className="w-8 h-8 mx-auto mb-4 text-purple-400" /> },
              { value: "24/7", label: "Support", icon: <Shield className="w-8 h-8 mx-auto mb-4 text-amber-400" /> }
            ].map((item, index) => (
              <div key={index} className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-blue-500/30 transition-all">
                {item.icon}
                <div className="text-3xl font-bold mb-2">{item.value}</div>
                <div className="text-gray-400 text-sm">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      {/* CTA Section */}
      <div className="py-20 bg-gray-950">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text Content */}
            <div>
              <div className="bg-gradient-to-r from-transparent rounded-full via-blue-950 to-blue-800 ">

              <img src={v} className="" alt="" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to <span className="text-blue-400">Transform</span> Your Business?
              </h2>
              <p className="text-gray-400 mb-8 text-lg">
                Let's discuss how we can help you achieve your digital goals with our expert solutions.
                Fill out the form and we'll get back to you within 24 hours.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle className="h-5 w-5 text-emerald-400" />
                  </div>
                  <p className="ml-3 text-gray-300">
                    <span className="font-medium">No obligation</span> - Get a free consultation with our experts
                  </p>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle className="h-5 w-5 text-emerald-400" />
                  </div>
                  <p className="ml-3 text-gray-300">
                    <span className="font-medium">Custom solutions</span> - Tailored to your specific business needs
                  </p>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle className="h-5 w-5 text-emerald-400" />
                  </div>
                  <p className="ml-3 text-gray-300">
                    <span className="font-medium">Quick response</span> - We'll get back to you within 24 hours
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 shadow-xl">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="you@company.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                    Service Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service.id} value={service.id}>
                        {service.serviceType}
                      </option>
                    ))}
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Tell us about your project, goals, and timeline..."
                  ></textarea>
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center"
                  >
                    Get Free Consultation
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </button>
                </div>

                <p className="text-xs text-gray-500 text-center">
                  We respect your privacy. Your information will never be shared.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServicesPage