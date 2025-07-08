import { useState } from 'react';
import { ChevronDown, Users, Zap, Shield, Star, Brush, Code, Smartphone } from 'lucide-react';
import { motion } from "framer-motion";

const services = [
  {
    title: 'Robust & Scalable Web Development',
    subtitle: 'Website & Web App Solutions',
    description:
      'We build fast, secure, and responsive websites tailored to your business needs. Our web development team uses the latest technologies to ensure your online presence is strong and scalable, providing an engaging user experience on every device.',
    icon: Code,
    gradient: 'from-blue-500 to-indigo-600',
    glowColor: 'blue-500',
    image:
      'https://www.creative-tim.com/blog/content/images/size/w960/2022/01/which-development-job-is-right-for-you.jpg',
    stats: '200+ Projects Delivered',
  },
  {
    title: 'Innovative Mobile App Development',
    subtitle: 'iOS & Android Applications',
    description:
      'From concept to deployment, we develop user-friendly mobile applications that drive engagement and business growth. Our cross-platform solutions ensure your app reaches a wider audience with smooth performance and intuitive design.',
    icon: Smartphone,
    gradient: 'from-teal-500 to-indigo-600',
    glowColor: 'blue-200-',
    image:
      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    stats: '150+ Apps Launched',
  },
  {
    title: 'Creative Graphics & Visual Design',
    subtitle: 'Branding & Marketing Materials',
    description:
      'Our graphic designers create visually stunning logos, marketing collateral, and digital assets that elevate your brand identity. Combining creativity with market insights, we deliver designs that captivate and communicate your unique story.',
    icon: Brush,
    gradient: 'from-pink-400 to-rose-500',
    glowColor: 'pink-400',
    image:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    stats: '300+ Designs Crafted',
  },
];

const DarkAccordionComponent = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-tr from-[#0b0f19] via-[#111827] to-[#0b0f19] py-6 sm:py-8 md:py-12 lg:py-16 xl:py-20">
      <div className="relative mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-16">



        {/* Subtle Floating Grid Overlay */}
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0.05 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="absolute inset-0 pointer-events-none z-0"
        >
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `
        linear-gradient(rgba(34, 211, 238, 0.08) 1px, transparent 1px),
        linear-gradient(90deg, rgba(34, 211, 238, 0.08) 1px, transparent 1px)
      `,
              backgroundSize: '40px 40px',
            }}
          ></div>
        </motion.div>



        {/* Background geometric patterns with enhanced effects */}
        <motion.div
          initial={{ opacity: 2 }}
          animate={{ opacity: 0.1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="absolute inset-0"
        >
          <div className="absolute top-20 left-20 w-32 h-32 border border-cyan-400/90 rotate-45 animate-pulse"></div>
          <div className="absolute top-60 right-40 w-48 h-48 border border-red-900/90 rotate-12"></div>
          <div className="absolute bottom-40 left-60 w-24 h-24 border border-emerald-400/0 -rotate-12 animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 border border-red-800/80 rotate-45"></div>
        </motion.div>



        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <div className="relative">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent mb-3 sm:mb-4 md:mb-6 leading-tight">
              Experience You Can Count On
            </h1>
            <div className="absolute -top-1 sm:-top-2 left-1/2 transform -translate-x-1/2 w-16 sm:w-24 md:w-32 h-0.5 sm:h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full opacity-60"></div>
          </div>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed px-2 sm:px-0">
            Since February 2025, URSOFTS has been delivering comprehensive business solutions with innovation, quality, and unwavering commitment to client success.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 xl:gap-12 items-start">
          {/* Accordion Panel */}
          <div className="space-y-3 sm:space-y-4 md:space-y-6">
            {services.map((item, index) => {
              const IconComponent = item.icon;
              const isActive = activeIndex === index;

              return (
                <div
                  key={index}
                  className={`relative group bg-gray-800/50 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-gray-700/50 transition-all duration-500 hover:border-gray-600 ${isActive ? 'ring-1 sm:ring-2 ring-cyan-400 shadow-xl sm:shadow-2xl shadow-cyan-400/20' : 'hover:shadow-lg sm:hover:shadow-xl hover:shadow-gray-900/50'
                    }`}
                >
                  {/* Glow effect for active item */}
                  {isActive && (
                    <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-10 rounded-xl sm:rounded-2xl blur-sm`}></div>
                  )}

                  <button
                    className="relative w-full p-4 sm:p-5 md:p-6 lg:p-8 text-left transition-all duration-300"
                    onClick={() => setActiveIndex(index)}
                  >
                    <div className="flex items-center justify-between gap-2 sm:gap-4">
                      <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4 flex-1 min-w-0">
                        <div className={`p-2 sm:p-2.5 md:p-3 rounded-lg sm:rounded-xl bg-gradient-to-r ${item.gradient} text-white transform transition-all duration-300 flex-shrink-0 ${isActive ? 'scale-105 sm:scale-110 shadow-lg' : 'hover:scale-105'
                          }`}>
                          <IconComponent className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white mb-0.5 sm:mb-1 leading-tight">
                            <span className="hidden sm:inline">{item.title}</span>
                            <span className="sm:hidden">{item.title.split(' ').slice(0, 3).join(' ')}</span>
                          </h3>
                          <span className="text-xs sm:text-sm md:text-sm font-medium text-gray-400 uppercase tracking-wide block leading-tight">
                            {item.subtitle}
                          </span>
                        </div>
                      </div>
                      <ChevronDown
                        className={`h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-gray-400 transition-all duration-300 flex-shrink-0 ${isActive ? 'rotate-180 text-cyan-400' : 'hover:text-gray-300'
                          }`}
                      />
                    </div>

                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isActive ? 'max-h-96 opacity-100 mt-3 sm:mt-4 md:mt-6' : 'max-h-0 opacity-0'
                      }`}>
                      <div className="space-y-3 sm:space-y-4">
                        <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed pl-8 sm:pl-10 md:pl-12 lg:pl-16 pr-2">
                          {item.description}
                        </p>
                        <div className="pl-8 sm:pl-10 md:pl-12 lg:pl-16">
                          <div className={`inline-flex px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-gradient-to-r ${item.gradient} text-white text-xs sm:text-sm font-semibold shadow-lg items-center`}>
                            <Star className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2 flex-shrink-0" />
                            <span className="whitespace-nowrap">{item.stats}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </button>
                </div>
              );
            })}
          </div>

          {/* Dynamic Image Panel */}
          <div className="relative lg:sticky lg:top-8 order-first lg:order-last">
            <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl bg-gray-800/30 backdrop-blur-sm p-2 sm:p-3 border border-gray-700/50">
              <div className="relative h-48 sm:h-64 md:h-80 lg:h-96 rounded-xl sm:rounded-2xl overflow-hidden">
                <img
                  key={services[activeIndex].image}
                  src={services[activeIndex].image}
                  alt={services[activeIndex].title}
                  className="w-full h-full object-cover transition-all duration-700 ease-in-out transform hover:scale-105"
                />

                {/* Overlay with gradient */}
                <div className={`absolute inset-0 bg-gradient-to-t ${services[activeIndex].gradient} opacity-30 transition-opacity duration-700`}></div>

                {/* Floating stats card */}
                <div className="absolute bottom-2 left-2 right-2 sm:bottom-3 sm:left-3 sm:right-3 md:bottom-4 md:left-4 md:right-4 lg:bottom-6 lg:left-6 lg:right-6">
                  <div className="bg-gray-900/90 backdrop-blur-md rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-xl border border-gray-700/50">
                    <div className="flex items-center justify-between gap-2 sm:gap-4">
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-white text-sm sm:text-base lg:text-lg leading-tight">
                          <span className="hidden sm:inline">{services[activeIndex].subtitle}</span>
                          <span className="sm:hidden">{services[activeIndex].subtitle.split(' ').slice(0, 2).join(' ')}</span>
                        </h4>
                        <p className="text-gray-300 text-xs sm:text-sm leading-tight">
                          {services[activeIndex].stats}
                        </p>
                      </div>
                      <div className={`p-1.5 sm:p-2 rounded-md sm:rounded-lg bg-gradient-to-r ${services[activeIndex].gradient} flex-shrink-0`}>
                        {(() => {
                          const IconComponent = services[activeIndex].icon;
                          return <IconComponent className="h-4 w-4 sm:h-5 sm:w-5 text-white" />;
                        })()}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className={`absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-8 h-8 sm:w-16 sm:h-16 md:w-24 md:h-24 bg-gradient-to-r ${services[activeIndex].gradient} rounded-full opacity-20 blur-xl transition-all duration-700`}></div>
            <div className={`absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-10 h-10 sm:w-20 sm:h-20 md:w-32 md:h-32 bg-gradient-to-r ${services[activeIndex].gradient} rounded-full opacity-15 blur-xl transition-all duration-700`}></div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-10 sm:mt-12 md:mt-16 lg:mt-20">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl p-4 sm:p-6 md:p-8 max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl mx-auto border border-gray-700/50">
            <div className="flex flex-col sm:flex-row items-center justify-center mb-3 sm:mb-4 gap-1 sm:gap-2">
              <Zap className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-cyan-400" />
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white text-center leading-tight">
                Ready to Transform Your Business?
              </h2>
            </div>
            <p className="text-gray-300 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 leading-relaxed px-2 sm:px-0">
              Join hundreds of satisfied clients who trust URSOFTS for their business success. Let's discuss how we can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <button className="px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl hover:shadow-cyan-400/25 transform hover:scale-105 transition-all duration-300 flex items-center justify-center text-sm sm:text-base">
                <Shield className="h-4 w-4 sm:h-5 sm:w-5 mr-2 flex-shrink-0" />
                <span>Get Started Today</span>
              </button>
              <button className="px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 border-2 border-gray-600 text-gray-200 font-semibold rounded-lg sm:rounded-xl hover:border-cyan-400 hover:bg-gradient-to-r hover:from-cyan-400/10 hover:to-blue-500/10 hover:text-cyan-400 transition-all duration-300 flex items-center justify-center text-sm sm:text-base">
                <Users className="h-4 w-4 sm:h-5 sm:w-5 mr-2 flex-shrink-0" />
                <span>Schedule Consultation</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DarkAccordionComponent;