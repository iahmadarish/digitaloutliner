import { useState, useEffect } from 'react';
import { ChevronRight, Code, Smartphone, Globe, Users, Zap } from 'lucide-react';

const AboutHero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const highlights = [
    { icon: Code, text: "500+ projects delivered", color: "text-blue-500" },
    { icon: Users, text: "100+ happy clients", color: "text-green-500" },
    { icon: Globe, text: "25+ countries served", color: "text-purple-500" },
    { icon: Zap, text: "Lightning-fast delivery", color: "text-yellow-500" }
  ];

  useEffect(() => {
    setIsVisible(true);
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % highlights.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative min-h-screen  overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-96 h-96 border border-blue-400 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-64 h-64 border border-purple-400 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-48 h-48 border border-green-400 rounded-full animate-pulse delay-2000"></div>
      </div>

      {/* Floating Code Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 text-blue-400/20 text-6xl font-mono animate-float">{'<>'}</div>
        <div className="absolute top-1/3 right-1/4 text-purple-400/20 text-4xl font-mono animate-bounce delay-1000">{'{ }'}</div>
        <div className="absolute bottom-1/4 left-1/3 text-green-400/20 text-5xl font-mono animate-pulse delay-2000">{'</>'}</div>
      </div>

      <div className="relative z-10  pt-20 pb-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          
          {/* Left Column - Content */}
          <div className={`space-y-8 transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}`}>
            
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-white border border-blue-400/30">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span>Transforming ideas into digital reality</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  URSOFTS
                </span>
                <span className="block text-white">
                  Your Digital
                </span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
                  Innovation Partner
                </span>
              </h1>
              
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
            </div>

            {/* Description */}
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                We are a cutting-edge web, software, and app development agency that transforms your 
                <span className="font-semibold text-white"> bold ideas into powerful digital solutions</span>. 
                With a team of passionate developers, designers, and strategists, we've delivered 500+ 
                successful projects across 25+ countries.
              </p>
              
              <p>
                From stunning websites to robust mobile applications and enterprise software solutions, 
                we combine technical expertise with creative innovation. Our agile approach ensures 
                rapid delivery without compromising quality, helping startups scale and enterprises 
                transform their digital presence.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                <span className="flex items-center space-x-2">
                  <span>View Our Portfolio</span>
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              
              <button className="border-2 border-blue-400 hover:border-purple-400 text-blue-400 hover:text-purple-400 px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:bg-blue-400/10">
                Start Your Project
              </button>
            </div>
          </div>

          {/* Right Column - Visual Elements */}
          <div className={`relative transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}`}>
            
            {/* Main Card */}
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20">
              
              {/* Quote */}
              <div className="text-center mb-8">
                <div className="text-6xl text-blue-400/30 mb-4">"</div>
                <p className="text-2xl font-light text-white italic leading-relaxed">
                  Code is poetry, design is art, and innovation is our passion
                </p>
                <div className="w-16 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-6"></div>
              </div>

              {/* Rotating Highlights */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-white text-center">Why Choose URSOFTS</h3>
                
                <div className="relative h-24 overflow-hidden">
                  {highlights.map((highlight, index) => {
                    const Icon = highlight.icon;
                    return (
                      <div
                        key={index}
                        className={`absolute inset-0 transition-all duration-500 transform ${
                          index === currentSlide 
                            ? 'translate-y-0 opacity-100' 
                            : index < currentSlide 
                              ? '-translate-y-full opacity-0' 
                              : 'translate-y-full opacity-0'
                        }`}
                      >
                        <div className="flex items-center justify-center space-x-4 h-full">
                          <div className={`p-3 rounded-full bg-white/10 ${highlight.color}`}>
                            <Icon className="w-6 h-6" />
                          </div>
                          <span className="text-lg font-medium text-white">
                            {highlight.text}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Slide Indicators */}
                <div className="flex justify-center space-x-2">
                  {highlights.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentSlide ? 'bg-blue-500 w-8' : 'bg-white/30'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl rotate-12 animate-bounce opacity-80 flex items-center justify-center">
              <Code className="w-8 h-8 text-white" />
            </div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-full  opacity-60 flex items-center justify-center">
              <Smartphone className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className={`mt-20 transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Our Core Services</h2>
            <p className="text-lg text-gray-300">Comprehensive digital solutions for modern businesses</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border border-white/10">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Web Development</h3>
              <p className="text-gray-300">Custom websites, e-commerce platforms, and web applications built with cutting-edge technologies.</p>
            </div>
            
            <div className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border border-white/10">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Smartphone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Mobile Apps</h3>
              <p className="text-gray-300">Native and cross-platform mobile applications for iOS and Android with seamless user experiences.</p>
            </div>
            
            <div className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border border-white/10">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Code className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Software Solutions</h3>
              <p className="text-gray-300">Enterprise software, SaaS platforms, and custom business solutions to streamline operations.</p>
            </div>
          </div>
        </div>
      </div>

      <style >{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-10px) rotate(5deg); }
          66% { transform: translateY(-5px) rotate(-5deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default AboutHero;