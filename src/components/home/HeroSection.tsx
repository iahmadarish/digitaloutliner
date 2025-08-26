import { motion } from 'framer-motion';
import { ChevronDown, ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <header className="min-h-screen bg-[#06140b] overflow-hidden relative">

      {/* Main Content */}
      <div className=" container mx-auto  py-26 lg:pt-54">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">

          {/* Left Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-6">
              <h1 className="text-3xl font-nunito uppercase lg:text-4xl xl:text-7xl  font-light text-[#ffffff] tracking-[4px] leading-tight">
                Turning Ideas <br /> into impact.
              </h1>
            </div>

            <p className="sm:text-xl lg:text-xl text-sm text-blue-100 sm:leading-relaxed max-w-lg ">
              Boost your digital presence with our tailored web applications and mobile solutions designed to drive growth and enhance user engagement.
            </p>

            <motion.a
              href="services"
              className="flex items-center gap-3 px-8 py-4 bg-transparent border border-[#1c89d6] text-[#ffffff] font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer md:w-fit"
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

            <div className="hidden">

              <motion.a
                href="ecommere-web-solutions-with-conqueric"
                className="flex items-center gap-3 text-white/80 hover:text-white transition-colors mt-12"
                whileHover={{ y: -2 }}
                aria-label="Scroll to learn more"
              >
                <ChevronDown className="w-5 h-5" />
                <span>Discover Our Solutions</span>
              </motion.a>
            </div>


          </motion.div>

          {/* Right Content - Tilted Phone */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50, rotate: -1 }}
            animate={{ opacity: 1, x: 0, rotate: -1 }}
            transition={{ duration: 1 }}
            aria-hidden="true"
          >
            <img
              src="/hero/hero.png"
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