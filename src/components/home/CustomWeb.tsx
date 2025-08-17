import { motion } from "framer-motion";
import { type Variants } from "framer-motion";
import { Link } from "react-router-dom";

const CustomWebWithVideo = () => {

  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };
  const videoUrl = "https://res.cloudinary.com/dseipjxgc/video/upload/v1754533621/ecc_pdcmp2.mp4";

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const videoVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: "easeOut" },
    },
  };
  return (
    <>


      <section className="min-h-screen font-nunito text-start bg-[#06140b] py-12 md:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="container mx-auto relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
            {/* Left Content */}
            <motion.div
              className="space-y-6 md:space-y-8 sm:text-center lg:text-left"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              <motion.div variants={itemVariants} className="space-y-4">
                <div className="inline-flex items-center px-4 py-2 bg-white text-black rounded-sm text-sm font-medium">
                  <span className="w-2 h-2 bg-blue-500 rounded-sm mr-2 animate-pulse"></span>
                  CONQUERIC E-commerce Solutions
                </div>

                <h1 className="text-2xl sm:text-5xl md:text-6xl lg:text-5xl font-light text-white leading-[0.9] tracking-tight">
                  Reach customers anywhere. Build loyalty everywhere.
                </h1>
              </motion.div>

              <motion.p
                className="font-nunito font-light text-sm md:text-lg text-white sm:leading-relaxed text-start max-w-lg sm:mx-auto lg:mx-0"
                variants={itemVariants}
              >
                Sell seamlessly both in-store and online with confidence. CONQUERIC's custom website solutions ensure your
                offline and online sales stay perfectly in sync—so you can manage your entire business from one place,
                serve customers better, and scale faster.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 pt-6 justify-center lg:justify-start"
                variants={itemVariants}
              >
                <Link to="/contact">
                  <motion.button
                    className="group px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="relative z-10">Contact Now</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </motion.button>
                </Link>


                <Link to="/global-ecommere-web-solutions-with-conqueric">
                  <motion.button
                    className="px-6 md:px-8 py-3 md:py-4 border-2 border-gray-200 text-white font-semibold rounded-2xl hover:border-blue-300 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Discover More
                  </motion.button>
                </Link>
              </motion.div>

              <motion.div
                className="flex items-center gap-4 md:gap-8 pt-8 justify-center lg:justify-start"
                variants={itemVariants}
              >
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-white">60 Days</div>
                  <div className="text-xs md:text-sm text-white">Free Maintenance</div>
                </div>
                <div className="w-px h-8 md:h-12 bg-gray-200"></div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-white">100%</div>
                  <div className="text-xs md:text-sm text-white">SEO Friendly</div>
                </div>
                <div className="w-px h-8 md:h-12 bg-gray-200"></div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-white">24/7</div>
                  <div className="text-xs md:text-sm text-white">Support</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Content - Single Video Section */}
            <motion.div
              className="relative"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={videoVariants}
            >
              <div className="relative group rounded-3xl overflow-hidden shadow-2xl aspect-video">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                  aria-label="E-commerce platform demonstration"
                >
                  <source src={videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/40 via-blue-500/30 to-indigo-600/40 mix-blend-multiply"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>

                <div className="absolute top-6 left-6 px-4 py-2 bg-black rounded-lg text-sm font-medium text-white">
                  Create your E-commerce Platform
                </div>

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <div className="w-0 h-0 border-l-[12px] border-l-white border-y-[8px] border-y-transparent ml-1"></div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full opacity-20 blur-xl z-0"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full opacity-15 blur-2xl z-0"></div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CustomWebWithVideo;