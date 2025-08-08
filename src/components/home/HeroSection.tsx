import { motion } from 'framer-motion';
import { ChevronDown, ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <header className="min-h-screen bg-[#06140b] overflow-hidden relative">
      
      {/* Main Content */}
      <div className="container mx-auto  py-26 lg:pt-54">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          
          {/* Left Content */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-6">
              <h1 className="text-3xl font-nunito lg:text-4xl xl:text-5xl  font-light text-[#2dfff1] leading-tight">
                Explore Global with Your Digital Business! It's Time to Conquer the Digital World 
              </h1>
              
              <div className="w-20 h-1 bg-white" aria-hidden="true"></div>
            </div>

            <p className="sm:text-xl lg:text-xl text-sm text-blue-100 sm:leading-relaxed max-w-lg ">
              Boost your digital presence with our tailored web applications and mobile solutions designed to drive growth and enhance user engagement.
            </p>

            <motion.a
              href="services"
              className="flex items-center gap-3 px-8 py-4 bg-white text-blue-700 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Explore our services"
            >
              Explore Our Services
              <ArrowRight className="w-5 h-5" />
            </motion.a>

            <div className="text-blue-200 text-sm italic">
              Trusted by businesses worldwide
              <br />
              to deliver exceptional digital experiences
            </div>

            <motion.a
              href="ecommere-web-solutions-with-conqueric"
              className="flex items-center gap-3 text-white/80 hover:text-white transition-colors mt-12"
              whileHover={{ y: -2 }}
              aria-label="Scroll to learn more"
            >
              <ChevronDown className="w-5 h-5" />
              <span>Discover Our Solutions</span>
            </motion.a>
          </motion.div>

          {/* Right Content - Tilted Phone */}
          <motion.div 
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50, rotate: -15 }}
            animate={{ opacity: 1, x: 0, rotate: -15 }}
            transition={{ duration: 1 }}
            aria-hidden="true"
          >
            <img 
              src="https://www.chawtechsolutions.com/wp-content/uploads/2019/07/right-side@2x-compressor.png" 
              alt="Mobile application interface example" 
              className="max-w-full h-auto"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;