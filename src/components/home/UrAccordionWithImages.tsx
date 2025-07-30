import { useState } from 'react';
import { ChevronDown, Star, Brush, Code, Smartphone } from 'lucide-react';

const services = [
  {
    title: 'Robust & Scalable Web Development Services',
    subtitle: 'Custom Website & Web Application Solutions',
    description:
      "Boost your online presence with our professional web development services. We specialize in creating fast, secure, and fully responsive websites and web apps tailored to meet your business goals. Using the latest technologies like Next js, React, React Remix, Node.js, and MongoDB etc. Our expert developers ensure your digital platform is scalable, SEO-optimized, and delivers an exceptional user experience across all devices.",
    icon: Code,
    gradient: 'from-blue-500 to-indigo-600',
    gradientHex: 'linear-gradient(135deg, #3b82f6 0%, #4f46e5 100%)',
    bgGradient: 'from-blue-500/10 to-indigo-600/10',
    glowColor: '#3b82f6',
    image:
      'https://www.creative-tim.com/blog/content/images/size/w960/2022/01/which-development-job-is-right-for-you.jpg',
    stats: '200+ Web Projects Successfully Delivered',
  },
  {
    title: 'Custom Mobile App Development for iOS & Android',
    subtitle: 'Cross-Platform Mobile Application Solutions',
    description:
      "Expand your reach with our custom mobile app development services. We design and build high-performance, user-friendly mobile apps for both iOS and Android. Our cross-platform approach ensures a seamless experience for your users while maximizing business impact. From UI/UX design to backend development and deployment, we handle every step to launch your app successfully and securely.",
    icon: Smartphone,
    gradient: 'from-teal-500 to-indigo-600',
    gradientHex: 'linear-gradient(135deg, #14b8a6 0%, #4f46e5 100%)',
    bgGradient: 'from-teal-500/10 to-indigo-600/10',
    glowColor: '#14b8a6',
    image:
      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    stats: '150+ Mobile Applications Developed',
  },
  {
    title: 'Creative Graphic Design & Branding Services',
    subtitle: 'Logo Design, Brand Identity & Marketing Visuals',
    description:
      "Enhance your brand's visual identity with our professional graphic design services. We create eye-catching logos, marketing materials, and digital assets that align with your brand values. Our experienced designers blend creativity with market insights to deliver impactful visuals that attract and retain your audience, helping you stand out in a competitive market.",
    icon: Brush,
    gradient: 'from-pink-400 to-rose-500',
    gradientHex: 'linear-gradient(135deg, #f472b6 0%, #f43f5e 100%)',
    bgGradient: 'from-pink-400/10 to-rose-500/10',
    glowColor: '#f472b6',
    image:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    stats: '300+ Creative Design Projects Completed',
  },
];

const DarkAccordionComponent = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="bg-gradient-to-br from-[#0b0f19] via-[#111827] to-[#0b0f19] min-h-screen">
      <div className="relative w-full py-8 px-4 sm:py-12 sm:px-6 md:py-16 md:px-8 lg:py-20 lg:px-12 xl:px-16 2xl:px-20">
        
        {/* Animated Background Grid */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div
            className="w-full h-full animate-pulse"
            style={{
              backgroundImage: `
                linear-gradient(rgba(34, 211, 238, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(34, 211, 238, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '30px 30px sm:40px sm:40px',
            }}
          />
        </div>

        {/* Floating Geometric Shapes */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <div className="absolute top-10 left-10 w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 border border-cyan-400 rotate-45 animate-pulse" />
          <div className="absolute top-32 right-16 w-20 h-20 sm:w-32 sm:h-32 lg:w-48 lg:h-48 border border-pink-400 rotate-12" />
          <div className="absolute bottom-32 left-32 w-12 h-12 sm:w-16 sm:h-16 lg:w-24 lg:h-24 border border-teal-400 -rotate-12 animate-pulse" />
          <div className="absolute bottom-10 right-10 w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 border border-indigo-400 rotate-45" />
        </div>

        {/* Header Section */}
        <div className="text-start mb-12 sm:mb-16 lg:mb-20 relative z-10">
          <div className="relative inline-block">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light leading-tight">
              <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent ">
              Solutions Built for the Future
              </span>
            </h1>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 sm:w-32 md:w-40 lg:w-48 h-1 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full opacity-60" />
          </div>
          <p className="text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl  mt-6 sm:mt-8 leading-relaxed font-light ">
            At CONQUERIC, we empower businesses with scalable digital solutions designed to meet tomorrow's challenges. Our team delivers with precision, creativity, and a forward-thinking mindset.
          </p>
        </div>

        {/* Accordion Section */}
        <div className="container mx-auto space-y-4 sm:space-y-6 lg:space-y-8">
          {services.map((item, index) => {
            const IconComponent = item.icon;
            const isActive = activeIndex === index;

            return (
              <div
                key={index}
                className={`relative group backdrop-blur-sm rounded-xl sm:rounded-2xl lg:rounded-3xl border transition-all duration-500 overflow-hidden ${
                  isActive 
                    ? 'border-gray-500/80 shadow-2xl' 
                    : 'border-gray-700/50 hover:border-gray-600/70 hover:shadow-xl'
                }`}
                style={{
                  boxShadow: isActive 
                    ? `0 0 40px ${item.glowColor}20, 0 0 80px ${item.glowColor}10` 
                    : undefined
                }}
              >
                {/* Active Glow Effect */}
                {isActive && (
                  <div 
                    className="absolute inset-0 opacity-5 rounded-xl sm:rounded-2xl lg:rounded-3xl blur-sm"
                    style={{
                      background: item.gradientHex
                    }}
                  />
                )}

                {/* Accordion Header */}
                <button
                  className="relative w-full p-4 sm:p-6 md:p-8 lg:p-10 text-left transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 rounded-xl sm:rounded-2xl lg:rounded-3xl"
                  onClick={() => setActiveIndex(isActive ? -1 : index)}
                  aria-expanded={isActive}
                >
                  <div className="flex items-center justify-between gap-3 sm:gap-4 lg:gap-6">
                    <div className="flex items-center space-x-3 sm:space-x-4 lg:space-x-6 flex-1 min-w-0">
                      {/* Icon */}
                      <div 
                        className={`p-2.5 sm:p-3 md:p-4 lg:p-5 rounded-lg sm:rounded-xl lg:rounded-2xl text-white transform transition-all duration-300 flex-shrink-0 ${
                          isActive ? 'scale-110 shadow-2xl' : 'hover:scale-105 shadow-lg'
                        }`}
                        style={{
                          background: item.gradientHex
                        }}
                      >
                        <IconComponent className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 lg:h-7 lg:w-7" />
                      </div>
                      
                      {/* Text Content */}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-light text-white mb-1 sm:mb-2 leading-tight">
                          <span className="hidden sm:inline">{item.title}</span>
                          <span className="sm:hidden">{item.title.split(' ').slice(0, 4).join(' ')}...</span>
                        </h3>
                        <span className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-400 uppercase tracking-wide font-medium leading-tight">
                          <span className="hidden md:inline">{item.subtitle}</span>
                          <span className="md:hidden">{item.subtitle.split(' ').slice(0, 3).join(' ')}</span>
                        </span>
                      </div>
                    </div>
                    
                    {/* Chevron */}
                    <ChevronDown
                      className={`h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 lg:h-8 lg:w-8 transition-all duration-300 flex-shrink-0 ${
                        isActive ? 'rotate-180 text-cyan-400' : 'text-gray-400 hover:text-gray-300'
                      }`}
                    />
                  </div>
                </button>

                {/* Accordion Content */}
                <div className={`overflow-hidden transition-all duration-700 ease-in-out ${
                  isActive ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="px-4 sm:px-6 md:px-8 lg:px-10 pb-6 sm:pb-8 md:pb-10 lg:pb-12">
                    
                    {/* Image Section */}
                    <div className="mb-6 sm:mb-8 lg:mb-10">
                      <div className="relative overflow-hidden rounded-xl sm:rounded-2xl lg:rounded-3xl shadow-2xl bg-gray-800/30 backdrop-blur-sm p-2 sm:p-3 border border-gray-700/50">
                        <div className="relative h-48 sm:h-64 md:h-80 lg:h-96 xl:h-[28rem] rounded-lg sm:rounded-xl lg:rounded-2xl overflow-hidden">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover transition-all duration-700 ease-in-out transform hover:scale-105"
                            loading="lazy"
                          />
                          
                          {/* Image Overlay */}
                          <div 
                            className="absolute inset-0 opacity-20 transition-opacity duration-700"
                            style={{
                              background: item.gradientHex
                            }}
                          />
                          
                          {/* Stats Card Overlay */}
                          <div className="absolute bottom-3 sm:bottom-4 lg:bottom-6 left-3 sm:left-4 lg:left-6 right-3 sm:right-4 lg:right-6">
                            <div className="bg-gray-900/95 backdrop-blur-xl rounded-lg sm:rounded-xl lg:rounded-2xl p-3 sm:p-4 lg:p-6 shadow-2xl border border-gray-700/50">
                              <div className="flex items-center justify-between gap-3 sm:gap-4 lg:gap-6">
                                <div className="flex-1 min-w-0">
                                  <h4 className="font-semibold text-white text-sm sm:text-base lg:text-lg xl:text-xl leading-tight mb-1">
                                    {item.subtitle}
                                  </h4>
                                  <p className="text-gray-300 text-xs sm:text-sm lg:text-base leading-tight">
                                    {item.stats}
                                  </p>
                                </div>
                                <div 
                                  className="p-2 sm:p-2.5 lg:p-3 rounded-lg sm:rounded-xl flex-shrink-0"
                                  style={{
                                    background: item.gradientHex
                                  }}
                                >
                                  <IconComponent className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-white" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="space-y-4 sm:space-y-6 lg:space-y-8">
                      <p className="text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed pl-4 sm:pl-6 md:pl-8 lg:pl-12 border-l-2 sm:border-l-4 border-gray-600/50">
                        {item.description}
                      </p>
                      
                      {/* Stats Badge */}
                      <div className="pl-4 sm:pl-6 md:pl-8 lg:pl-12">
                        <div 
                          className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-full text-white text-xs sm:text-sm lg:text-base font-semibold shadow-xl transform hover:scale-105 transition-all duration-300"
                          style={{
                            background: item.gradientHex
                          }}
                        >
                          <Star className="h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5 mr-2 sm:mr-3 flex-shrink-0" />
                          <span className="whitespace-nowrap">{item.stats}</span>
                        </div>
                      </div>
                    </div>
                    
                  </div>
                </div>

                {/* Decorative Corner Elements */}
                {isActive && (
                  <>
                    <div 
                      className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-8 h-8 sm:w-16 sm:h-16 lg:w-24 lg:h-24 rounded-full opacity-20 blur-xl transition-all duration-700"
                      style={{
                        background: item.gradientHex
                      }}
                    />
                    <div 
                      className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-12 h-12 sm:w-20 sm:h-20 lg:w-32 lg:h-32 rounded-full opacity-15 blur-xl transition-all duration-700"
                      style={{
                        background: item.gradientHex
                      }}
                    />
                  </>
                )}
              </div>
            );
          })}
        </div>
        
      </div>
    </div>
  );
};

export default DarkAccordionComponent;