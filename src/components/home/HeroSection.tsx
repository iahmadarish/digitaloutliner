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
              <h1 className="text-4xl font-nunito lg:text-4xl xl:text-5xl font-bold text-white leading-tight">
                Professional Web & App for Multi Purpose
              </h1>
              
              <div className="w-20 h-1 bg-white"></div>
            </div>

            <p className="sm:text-xl lg:text-2xl text-sm text-blue-100 sm:leading-relaxed max-w-lg italic">
              You can explore our Web and app solutions and feel free to contact us and make indications
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
                <img src="https://www.chawtechsolutions.com/wp-content/uploads/2019/07/right-side@2x-compressor.png" alt="" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;