"use client"

import { motion, type Easing } from "framer-motion"
import LocalizedLink from "@/components/LocalizedLink";

export default function CustomWeb() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

let productSalesVideo = "https://res.cloudinary.com/dseipjxgc/video/upload/v1754534027/6994624-uhd_3840_2160_30fps_atp7ke.mp4"
let ecommerceVideo = "https://res.cloudinary.com/dseipjxgc/video/upload/v1754533621/ecc_pdcmp2.mp4"

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.42, 0, 1, 1] as Easing, // <-- fix here
      },
    },
  }


  const videoVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.42, 0, 1, 1] as Easing, // <-- fix here
      },
    },
  }
  return (
    <section className="min-h-screen font-nunito text-start bg-[#06140b] py-12 md:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">


      <div className="container mx-auto relative">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 md:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            className="xl:col-span-5 space-y-6 md:space-y-8 sm:text-center xl:text-left"
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

              <h1 className="text-2xl sm:text-5xl md:text-6xl xl:text-7xl font-light text-white leading-[0.9] tracking-tight">
                Reach customers
                <span className="block text-transparent bg-clip-text bg-[#fff]">
                  anywhere.
                </span>
                <span className="block text-xl sm:text-2xl md:text-3xl xl:text-4xl font-light text-[#8becff] mt-4">
                  Build loyalty everywhere.
                </span>
              </h1>
            </motion.div>

            <motion.p
              className="font-nunito font-light text-sm md:text-lg text-white sm:leading-relaxed text-start max-w-lg sm:mx-auto xl:mx-0"
              variants={itemVariants}
            >
              Sell seamlessly both in-store and online with confidence. CONQUERIC's custom website solutions ensure your
              offline and online sales stay perfectly in sync—so you can manage your entire business from one place,
              serve customers better, and scale faster.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 pt-6 justify-center xl:justify-start"
            >
              <motion.button
                className="group px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">Contact Now</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.button>

              <LocalizedLink to="ecommere-web-solutions-with-conqueric">
                <motion.button
                  className="px-6 md:px-8 py-3 md:py-4 border-2 border-gray-200 text-white font-semibold rounded-2xl hover:border-blue-300 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Discover More
                </motion.button>
              </LocalizedLink>
            </motion.div>

            <motion.div
              className="flex items-center gap-4 md:gap-8 pt-8 justify-center xl:justify-start"
              variants={itemVariants}
            >
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white">500+</div>
                <div className="text-xs md:text-sm text-white">Happy Clients</div>
              </div>
              <div className="w-px h-8 md:h-12 bg-gray-200"></div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white">99.9%</div>
                <div className="text-xs md:text-sm text-white">Uptime</div>
              </div>
              <div className="w-px h-8 md:h-12 bg-gray-200"></div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white">24/7</div>
                <div className="text-xs md:text-sm text-white">Support</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Enhanced Video Section with Your Videos */}
          <motion.div
            className="xl:col-span-7 relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="relative">
              {/* Main Video Container */}
              <motion.div className="relative" variants={videoVariants}>
                {/* Desktop Layout */}
                <div className="hidden md:grid grid-cols-12 grid-rows-12 gap-4 h-[600px]">
                  {/* Large E-commerce Video */}
                  <div className="col-span-8 row-span-8 relative group">
                    <div className="relative h-full rounded-3xl overflow-hidden shadow-2xl">
                      <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
                        <source src={ecommerceVideo} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                      {/* Blue Blend Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/40 via-blue-500/30 to-indigo-600/40 mix-blend-multiply"></div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>

                      {/* Video Label */}
                      <div className="absolute top-6 left-6 px-4 py-2 bg-black backdrop-blur-sm rounded-lg text-sm font-medium text-white">
                        Manage your E-commerce Platform
                      </div>

                      {/* Play Button Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                          <div className="w-0 h-0 border-l-[12px] border-l-white border-y-[8px] border-y-transparent ml-1"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Small Product Sales Video */}
                  <div className="col-span-4 row-span-6 col-start-9 row-start-3 relative group">
                    <div className="relative h-full rounded-3xl overflow-hidden shadow-xl">
                      <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
                        <source src={productSalesVideo} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                      {/* Blue Blend Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/40 via-blue-500/30 to-purple-600/40 mix-blend-multiply"></div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>

                      {/* Video Label */}
                      <div className="absolute top-4 left-4 px-3 py-1 bg-black backdrop-blur-sm rounded-lg text-xs font-medium text-white">
                        Manage Your Product Sales
                      </div>
                    </div>
                  </div>

                  {/* Floating Elements - Desktop */}
                  <motion.div
                    className="col-span-3 row-span-3 col-start-1 row-start-10 relative"
                    animate={{
                      y: [0, -10, 0],
                      rotate: [0, 2, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                  >
                    <div className="h-full bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl shadow-lg flex items-center justify-center">
                      <div className="text-center text-white">
                        <div className="text-2xl font-bold">150%</div>
                        <div className="text-sm opacity-90">Growth</div>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    className="col-span-3 row-span-2 col-start-10 row-start-10 relative"
                    animate={{
                      y: [0, 8, 0],
                      rotate: [0, -1, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                      delay: 1,
                    }}
                  >
                    <div className="h-full bg-white rounded-2xl shadow-lg border border-gray-100 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-xl font-bold text-black">24/7</div>
                        <div className="text-xs text-black">Online</div>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Mobile Layout - Videos Stacked Vertically */}
                <div className="md:hidden space-y-6">
                  {/* First Video - E-commerce */}
                  <motion.div className="relative group" variants={videoVariants}>
                    <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden shadow-xl">
                      <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
                        <source src={ecommerceVideo} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                      {/* Blue Blend Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/40 via-blue-500/30 to-indigo-600/40 mix-blend-multiply"></div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>

                      {/* Video Label */}
                      <div className="absolute top-4 left-4 px-3 py-2 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-white">
                        E-commerce Platform
                      </div>

                      {/* Play Button Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                          <div className="w-0 h-0 border-l-[8px] border-l-white border-y-[6px] border-y-transparent ml-1"></div>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Second Video - Product Sales */}
                  <motion.div className="relative group" variants={videoVariants}>
                    <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden shadow-xl">
                      <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
                        <source src={productSalesVideo} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                      {/* Blue Blend Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/40 via-blue-500/30 to-purple-600/40 mix-blend-multiply"></div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>

                      {/* Video Label */}
                      <div className="absolute top-4 left-4 px-3 py-2 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-white">
                        Sales Dashboard
                      </div>

                      {/* Play Button Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                          <div className="w-0 h-0 border-l-[8px] border-l-white border-y-[6px] border-y-transparent ml-1"></div>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Mobile Floating Elements */}
                  <div className="flex gap-4 justify-center mt-8">
                    <motion.div
                      className="flex-1 max-w-[120px]"
                      animate={{
                        y: [0, -8, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                      }}
                    >
                      <div className="h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl shadow-lg flex items-center justify-center">
                        <div className="text-center text-white">
                          <div className="text-lg font-bold">150%</div>
                          <div className="text-xs opacity-90">Growth</div>
                        </div>
                      </div>
                    </motion.div>

                    <motion.div
                      className="flex-1 max-w-[120px]"
                      animate={{
                        y: [0, 6, 0],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                        delay: 1,
                      }}
                    >
                      <div className="h-20 bg-white rounded-xl shadow-lg border border-gray-100 flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-lg font-bold text-white">24/7</div>
                          <div className="text-xs text-white">Online</div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full opacity-20 blur-xl"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full opacity-15 blur-2xl"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
