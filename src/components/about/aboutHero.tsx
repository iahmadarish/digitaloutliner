import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import image from "@/assets/content.jpg"
const AboutHero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);



  return (
    <div className=" min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Content */}
          <div className={`space-y-8 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
              <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
              About Our Company
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                We Build Digital
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                  Solutions That Matter
                </span>
              </h1>
              
              <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
            </div>

            {/* Description */}
            <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
              <p>
                URSOFTS is a passionate team of developers, designers, and strategists 
                dedicated to transforming your ideas into powerful digital experiences. 
                We specialize in web development, mobile apps, and custom software solutions.
              </p>
              
              <p>
                Our mission is simple: deliver exceptional digital products that help 
                businesses grow and succeed in the modern world. We combine technical 
                expertise with creative thinking to build solutions that truly make a difference.
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <button className="group bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                <span className="flex items-center space-x-2">
                  <span>Get Started</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className={`relative transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative  rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={image}
                  alt="Team collaboration"
                  className="w-full h-130 object-contain"
                />
              </div>
              
              {/* Floating accent elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl rotate-12 shadow-lg"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full shadow-lg"></div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutHero;