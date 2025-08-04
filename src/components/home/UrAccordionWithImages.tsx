import { useState } from 'react';
import { ChevronDown, Star, Brush, Code, Smartphone } from 'lucide-react';

const services = [
  {
    title: 'Web Development',
    subtitle: 'Custom Websites & Web Apps',
    description: "Boost your online presence with our professional web development services. We specialize in creating fast, secure, and fully responsive websites and web apps tailored to meet your business goals.",
    icon: Code,
    color: 'text-blue-400',
    bgColor: 'bg-blue-400/10',
    borderColor: 'border-blue-400/30',
    stats: '200+ Projects Delivered',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Mobile Apps',
    subtitle: 'iOS & Android Development',
    description: "Expand your reach with our custom mobile app development services. We design and build high-performance, user-friendly mobile apps for both iOS and Android.",
    icon: Smartphone,
    color: 'text-purple-400',
    bgColor: 'bg-purple-400/10',
    borderColor: 'border-purple-400/30',
    stats: '150+ Apps Developed',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Graphic Design',
    subtitle: 'Branding & Visual Identity',
    description: "Enhance your brand's visual identity with our professional graphic design services. We create eye-catching logos, marketing materials, and digital assets.",
    icon: Brush,
    color: 'text-pink-400',
    bgColor: 'bg-pink-400/10',
    borderColor: 'border-pink-400/30',
    stats: '300+ Design Projects',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
];

const ModernAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="min-h-screen sm:hidden block bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-white mb-4">
            Our Most <span className="font-medium bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Custom solutions designed to elevate your digital presence and drive business growth.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4 max-w-4xl mx-auto">
          {services.map((service, index) => {
            const isActive = activeIndex === index;
            const Icon = service.icon;

            return (
              <div 
                key={index} 
                className={`rounded-xl overflow-hidden transition-all duration-500 ${isActive ? 'shadow-2xl' : 'shadow-lg'}`}
              >
                <button
                  onClick={() => setActiveIndex(isActive ? -1 : index)}
                  className={`w-full flex items-center justify-between p-6 ${service.bgColor} ${service.borderColor} border ${isActive ? 'rounded-t-xl' : 'rounded-xl'} transition-all duration-300`}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-lg ${service.bgColor} ${service.borderColor} border`}>
                      <Icon className={`w-6 h-6 ${service.color}`} />
                    </div>
                    <div className="text-left">
                      <h3 className={`text-xl font-medium ${isActive ? 'text-white' : 'text-gray-200'}`}>
                        {service.title}
                      </h3>
                      <p className={`text-sm ${isActive ? 'text-gray-300' : 'text-gray-400'}`}>
                        {service.subtitle}
                      </p>
                    </div>
                  </div>
                  <ChevronDown 
                    className={`w-5 h-5 transition-transform duration-300 ${isActive ? 'transform rotate-180 text-white' : 'text-gray-400'}`} 
                  />
                </button>

                <div 
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${isActive ? 'max-h-[1000px]' : 'max-h-0'}`}
                >
                  <div className={`p-6 ${service.bgColor} border-t-0 rounded-b-xl ${service.borderColor} border`}>
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <p className="text-gray-300 mb-6">
                          {service.description}
                        </p>
                        <div className="flex items-center space-x-2">
                          <div className={`px-4 py-2 rounded-full ${service.bgColor} ${service.borderColor} border flex items-center space-x-2`}>
                            <Star className={`w-4 h-4 ${service.color}`} />
                            <span className="text-sm text-white">{service.stats}</span>
                          </div>
                        </div>
                      </div>
                      <div className="relative h-64 rounded-lg overflow-hidden border border-gray-700/50">
                        <img 
                          src={service.image} 
                          alt={service.title} 
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
                          <div className={`px-3 py-2 rounded-md ${service.bgColor} backdrop-blur-sm`}>
                            <p className="text-sm text-white font-medium">{service.subtitle}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Decorative elements */}
        <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10">
          <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-blue-500/10 blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 rounded-full bg-purple-500/10 blur-3xl"></div>
        </div>
      </div>
    </div>
  );
};

export default ModernAccordion;