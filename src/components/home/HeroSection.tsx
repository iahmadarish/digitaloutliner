import { motion } from 'framer-motion';
import { ChevronDown, ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="min-h-screen bg-[#06140b] overflow-hidden relative">
      
      {/* Main Content */}
      <div className="container mx-auto px-6 py-26 lg:py-44">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          
          {/* Left Content */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-6">
              <h1 className="text-2xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
                Professional App for
                <br />
                Multi Purpose
              </h1>
              
              <div className="w-20 h-1 bg-white"></div>
            </div>

            <p className="sm:text-xl lg:text-2xl text-sm text-blue-100 leading-relaxed max-w-lg">
              You can explore our app and feel free to comment and make indications
            </p>

            <motion.button
              className="flex items-center gap-3 px-8 py-4 bg-white text-blue-700 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Now
              <ArrowRight className="w-5 h-5" />
            </motion.button>

            <div className="text-blue-200 text-sm italic">
              Make the try and interact
              <br />
              with the features
            </div>

            <motion.button
              className="flex items-center gap-3 text-white/80 hover:text-white transition-colors mt-12"
              whileHover={{ y: -2 }}
            >
              <ChevronDown className="w-5 h-5" />
              <span>Explore More Down</span>
            </motion.button>
          </motion.div>

          {/* Right Content - Tilted Phone */}
          <motion.div 
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50, rotate: -15 }}
            animate={{ opacity: 1, x: 0, rotate: -15 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              className="relative"
              animate={{ 
                y: [-5, 5, -5],
                rotate: [-15, -12, -15]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              {/* Phone Frame */}
              <div className="w-72 h-[580px] bg-gradient-to-b from-gray-800 to-gray-900 rounded-[3rem] p-2 shadow-2xl">
                {/* Phone Screen */}
                <div className="w-full h-full bg-black rounded-[2.5rem] overflow-hidden relative">
                  
                  {/* Status Bar */}
                  <div className="absolute top-0 left-0 right-0 h-8 bg-black flex items-center justify-between px-6 text-white text-xs z-20">
                    <span>9:41</span>
                    <div className="flex items-center gap-1">
                      <div className="w-4 h-2 border border-white rounded-sm">
                        <div className="w-2 h-1 bg-white rounded-sm ml-0.5"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* App Screen */}
                  <div className="absolute inset-0 pt-8 bg-gradient-to-b from-gray-50 to-gray-200">
                    <div className="p-4 pt-6">
                      
                      {/* First Row */}
                      <div className="grid grid-cols-4 gap-3 mb-4">
                        <div className="aspect-square bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl shadow-md"></div>
                        <div className="aspect-square bg-gradient-to-br from-blue-400 to-purple-600 rounded-2xl shadow-md"></div>
                        <div className="aspect-square bg-gradient-to-br from-green-400 to-blue-500 rounded-2xl shadow-md"></div>
                        <div className="aspect-square bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl shadow-md"></div>
                      </div>
                      
                      {/* Second Row */}
                      <div className="grid grid-cols-4 gap-3 mb-4">
                        <div className="aspect-square bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl shadow-md"></div>
                        <div className="aspect-square bg-gradient-to-br from-teal-400 to-cyan-500 rounded-2xl shadow-md"></div>
                        <div className="aspect-square bg-gradient-to-br from-indigo-400 to-purple-600 rounded-2xl shadow-md"></div>
                        <div className="aspect-square bg-gradient-to-br from-pink-400 to-red-500 rounded-2xl shadow-md"></div>
                      </div>
                      
                      {/* Third Row */}
                      <div className="grid grid-cols-4 gap-3 mb-4">
                        <div className="aspect-square bg-gradient-to-br from-cyan-400 to-blue-600 rounded-2xl shadow-md"></div>
                        <div className="aspect-square bg-gradient-to-br from-emerald-400 to-teal-600 rounded-2xl shadow-md"></div>
                        <div className="aspect-square bg-gradient-to-br from-violet-400 to-purple-600 rounded-2xl shadow-md"></div>
                        <div className="aspect-square bg-gradient-to-br from-rose-400 to-pink-600 rounded-2xl shadow-md"></div>
                      </div>
                      
                      {/* Fourth Row */}
                      <div className="grid grid-cols-4 gap-3 mb-6">
                        <div className="aspect-square bg-gradient-to-br from-lime-400 to-green-600 rounded-2xl shadow-md"></div>
                        <div className="aspect-square bg-gradient-to-br from-sky-400 to-blue-600 rounded-2xl shadow-md"></div>
                        <div className="aspect-square bg-gradient-to-br from-fuchsia-400 to-purple-600 rounded-2xl shadow-md"></div>
                        <div className="aspect-square bg-gradient-to-br from-amber-400 to-orange-600 rounded-2xl shadow-md"></div>
                      </div>
                      
                      {/* Bottom Dock */}
                      <div className="absolute bottom-6 left-4 right-4">
                        <div className="flex justify-center gap-4">
                          <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-pink-600 rounded-2xl shadow-lg"></div>
                          <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-yellow-600 rounded-2xl shadow-lg"></div>
                          <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl shadow-lg"></div>
                          <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl shadow-lg"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Phone Buttons */}
                <div className="absolute right-[-2px] top-20 w-1 h-8 bg-gray-700 rounded-l"></div>
                <div className="absolute right-[-2px] top-32 w-1 h-12 bg-gray-700 rounded-l"></div>
                <div className="absolute right-[-2px] top-48 w-1 h-12 bg-gray-700 rounded-l"></div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;