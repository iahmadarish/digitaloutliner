import { useState } from "react";
import { ArrowRight, Code, Zap, Shield, Star, Sparkles } from "lucide-react";

const MatchingHeroSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Background geometric patterns with enhanced effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border border-cyan-400/30 rotate-45 animate-pulse"></div>
        <div className="absolute top-60 right-40 w-48 h-48 border border-purple-400/20 rotate-12"></div>
        <div className="absolute bottom-40 left-60 w-24 h-24 border border-emerald-400/25 -rotate-12 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 border border-cyan-400/20 rotate-45"></div>
      </div>

      {/* Floating grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(rgba(34, 211, 238, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34, 211, 238, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Hero Section */}
      <div className="relative z-10 mx-auto px-4 sm:px-6 md:xl:2xl:lg:px-40 py-16 pt-20 sm:pt-32">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 md:space-y-8">
            <div className="space-y-4">
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 text-sm font-medium text-gray-300">
                <Sparkles className="h-4 w-4 mr-2 text-cyan-400" />
                <span className="text-cyan-400">Digital Outliner </span>
                <span className="mx-2 text-gray-600">•</span>
                <span>Since 2025</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-blue-300 leading-tight">
                You need Custom web and app solutions for grow your business? 
                
              </h1>
            </div>

            {/* Code-style description */}
            <div className="space-y-4">
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-gray-700/50 font-mono text-sm md:text-base">
                <div className="text-gray-400 mb-2">
                  <span className="text-emerald-400">/*</span> Business Growth Formula <span className="text-emerald-400">*/</span>
                </div>
                <div className="text-white/90 space-y-1">
                  <span className="text-purple-400">const</span> <span className="text-cyan-400">success</span> = <span className="text-yellow-400">TailoredSolution</span> + 
                  <br />
                  <span className="ml-8">(<span className="text-pink-400">Marketing</span> × <span className="text-emerald-400">UltimateSpeed</span>) +</span>
                  <br />
                  <span className="ml-8 text-blue-400">Security</span> = <span className="text-yellow-400">ConstantGrowth</span> <span className="text-red-400">📈</span>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700/50">
                <div className="text-2xl font-bold text-cyan-400">5</div>
                <div className="text-sm text-gray-400">Projects</div>
              </div>
              <div className="text-center p-4 bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700/50">
                <div className="text-2xl font-bold text-purple-400">5</div>
                <div className="text-sm text-gray-400">Clients</div>
              </div>
              <div className="text-center p-4 bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700/50">
                <div className="text-2xl font-bold text-emerald-400">24/7</div>
                <div className="text-sm text-gray-400">life time Support</div>
              </div>
            </div>
          </div>

          {/* Right Content - Enhanced CTA Card */}
          <div className="flex justify-center lg:justify-end">
            <div 
              className="relative group max-w-md w-full"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-20 rounded-2xl blur-xl transition-all duration-300 group-hover:opacity-30"></div>
              
              {/* Main card */}
              <div className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 p-6 md:p-8 rounded-2xl hover:border-cyan-400/50 transition-all duration-300 cursor-pointer">
                <div className="space-y-6">
                  {/* Header */}
                  <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-white">
                      <Code className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-white text-xl font-semibold">
                        Ready to Start?
                      </h3>
                      <p className="text-gray-400 text-sm">
                        Get your custom quote today
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 text-base leading-relaxed">
                    
                    Tell us about your project and get a tailored solution that drives real business results.
                  </p>

                  {/* Features */}
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 text-sm">
                      <Zap className="h-4 w-4 text-yellow-400" />
                      <span className="text-gray-300">Lightning Fast Development</span>
                    </div>
                    <div className="flex items-center space-x-3 text-sm">
                      <Shield className="h-4 w-4 text-emerald-400" />
                      <span className="text-gray-300">Enterprise-Grade Security</span>
                    </div>
                    <div className="flex items-center space-x-3 text-sm">
                      <Star className="h-4 w-4 text-purple-400" />
                      <span className="text-gray-300">Premium Support Included</span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button className="w-full bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold py-3 px-6 rounded-xl hover:shadow-lg hover:shadow-cyan-400/25 transition-all duration-300 flex items-center justify-center space-x-2 group">
                    <span>Get Custom Quote</span>
                    <ArrowRight className={`h-5 w-5 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Clients Section */}

      </div>

      {/* Floating Elements - Enhanced */}
    
    </div>
  );
};

export default MatchingHeroSection;