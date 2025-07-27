import { useState } from 'react';
import { ChevronDown, Star, Brush, Code, Smartphone } from 'lucide-react';
import { motion } from "framer-motion";

const services = [
  {
    title: 'Robust & Scalable Web Development Services',
    subtitle: 'Custom Website & Web Application Solutions',
    description:
      'Boost your online presence with our professional web development services. We specialize in creating fast, secure, and fully responsive websites and web apps tailored to meet your business goals. Using the latest technologies like React, Node.js, and MongoDB, our expert developers ensure your digital platform is scalable, SEO-optimized, and delivers an exceptional user experience across all devices.',
    icon: Code,
    gradient: 'from-blue-500 to-indigo-600',
    glowColor: 'blue-500',
    image:
      'https://www.creative-tim.com/blog/content/images/size/w960/2022/01/which-development-job-is-right-for-you.jpg',
    stats: '200+ Web Projects Successfully Delivered',
  },
  {
    title: 'Custom Mobile App Development for iOS & Android',
    subtitle: 'Cross-Platform Mobile Application Solutions',
    description:
      'Expand your reach with our custom mobile app development services. We design and build high-performance, user-friendly mobile apps for both iOS and Android. Our cross-platform approach ensures a seamless experience for your users while maximizing business impact. From UI/UX design to backend development and deployment, we handle every step to launch your app successfully and securely.',
    icon: Smartphone,
    gradient: 'from-teal-500 to-indigo-600',
    glowColor: 'blue-200',
    image:
      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    stats: '150+ Mobile Applications Developed',
  },
  {
    title: 'Creative Graphic Design & Branding Services',
    subtitle: 'Logo Design, Brand Identity & Marketing Visuals',
    description:
      'Enhance your brand’s visual identity with our professional graphic design services. We create eye-catching logos, marketing materials, and digital assets that align with your brand values. Our experienced designers blend creativity with market insights to deliver impactful visuals that attract and retain your audience, helping you stand out in a competitive market.',
    icon: Brush,
    gradient: 'from-pink-400 to-rose-500',
    glowColor: 'pink-400',
    image:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    stats: '300+ Creative Design Projects Completed',
  },
];


const DarkAccordionComponent = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="min-h-screen font-family- py-6 sm:py-8 md:py-12 lg:py-16 xl:py-20  ">
      <div className="relative mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-16 ">



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
        <div className="md:lg:xl:sm:2xl:text-start  mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <div className="relative">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl  bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent mb-3 sm:mb-4 md:mb-6 font-family-small font-light leading-tight">
              Solutions Built for the Future
            </h1>
            <div className="absolute -top-1 sm:-top-2 left-1/2 transform -translate-x-1/2 w-16 sm:w-24 md:w-32 h-0.5 sm:h-1 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full opacity-60"></div>
          </div>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl md:lg:xl:sm:2xl:mx-0 mx-auto leading-relaxed  sm:px-0 font-light text-start">
            At CONQUERIC, we empower businesses with scalable digital solutions designed to meet tomorrow’s challenges. Our team delivers with precision, creativity, and a forward-thinking mindset.
          </p>
        </div>


        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 xl:gap-12 items-start ">
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
                          <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-light text-white mb-0.5 sm:mb-1 leading-tight">
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

      </div>
    </div>
  );
};

export default DarkAccordionComponent;