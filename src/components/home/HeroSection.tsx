"use client"

import { useState, useEffect } from "react"
import { Sparkles } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"
import "swiper/css"
import image from "@/assets/slider/slider.png"
import image2 from "@/assets/slider/Group 42.png"
import image3 from "@/assets/slider/Group 43.png"
import image4 from "@/assets/slider/Group 44.png"
import image5 from "@/assets/slider/slider.png"

const MatchingHeroSection = () => {
  const [isHovered, setIsHovered] = useState(false)
  const [codeContent, setCodeContent] = useState("")
  const [currentCodeIndex, setCurrentCodeIndex] = useState(0)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  console.log(isHovered, setIsHovered)
  const allCodeLines = [
    // First code snippet - Business Growth Formula
    [
      { text: "/*", color: "text-emerald-400" },
      { text: " Business Growth Formula ", color: "text-gray-400" },
      { text: "*/", color: "text-emerald-400" },
      { text: "\nconst", color: "text-purple-400" },
      { text: " success", color: "text-cyan-400" },
      { text: " = ", color: "text-gray-400" },
      { text: "TailoredSolution", color: "text-yellow-400" },
      { text: " + ", color: "text-gray-400" },
      { text: "\n(", color: "text-gray-400" },
      { text: "Marketing", color: "text-pink-400" },
      { text: " × ", color: "text-gray-400" },
      { text: "UltimateSpeed", color: "text-emerald-400" },
      { text: ") +", color: "text-gray-400" },
      { text: "\nSecurity", color: "text-blue-400" },
      { text: " = ", color: "text-gray-400" },
      { text: "ConstantGrowth", color: "text-yellow-400" },
      { text: " ", color: "text-gray-400" },
      { text: "📈", color: "text-red-400" },
    ],
    // Second code snippet - Development Approach
    [
      { text: "//", color: "text-gray-500" },
      { text: " Our Development Process ", color: "text-gray-400" },
      { text: "\nfunction", color: "text-purple-400" },
      { text: " buildSolution", color: "text-cyan-400" },
      { text: "() {", color: "text-gray-400" },
      { text: "\n  const", color: "text-purple-400" },
      { text: " techStack", color: "text-cyan-400" },
      { text: " = ", color: "text-gray-400" },
      { text: "[", color: "text-gray-400" },
      { text: "\n    'React'", color: "text-yellow-400" },
      { text: ", ", color: "text-gray-400" },
      { text: "'Node.js'", color: "text-yellow-400" },
      { text: ", ", color: "text-gray-400" },
      { text: "\n    'TypeScript'", color: "text-yellow-400" },
      { text: ", ", color: "text-gray-400" },
      { text: "'MongoDB'", color: "text-yellow-400" },
      { text: "\n  ];", color: "text-gray-400" },
      { text: "\n  return", color: "text-purple-400" },
      { text: " ", color: "text-gray-400" },
      { text: "techStack", color: "text-cyan-400" },
      { text: " + ", color: "text-gray-400" },
      { text: "' + Innovation'", color: "text-yellow-400" },
      { text: ";", color: "text-gray-400" },
      { text: "\n}", color: "text-gray-400" },
    ],
    // Third code snippet - Project Success Metrics
    [
      { text: "/*", color: "text-emerald-400" },
      { text: " Project Success Metrics ", color: "text-gray-400" },
      { text: "*/", color: "text-emerald-400" },
      { text: "\nconst", color: "text-purple-400" },
      { text: " metrics", color: "text-cyan-400" },
      { text: " = {", color: "text-gray-400" },
      { text: "\n  performance", color: "text-blue-400" },
      { text: ": ", color: "text-gray-400" },
      { text: "'98%'", color: "text-yellow-400" },
      { text: ",", color: "text-gray-400" },
      { text: "\n  security", color: "text-blue-400" },
      { text: ": ", color: "text-gray-400" },
      { text: "'A+'", color: "text-yellow-400" },
      { text: ",", color: "text-gray-400" },
      { text: "\n  scalability", color: "text-blue-400" },
      { text: ": ", color: "text-gray-400" },
      { text: "'Unlimited'", color: "text-yellow-400" },
      { text: ",", color: "text-gray-400" },
      { text: "\n  support", color: "text-blue-400" },
      { text: ": ", color: "text-gray-400" },
      { text: "'24/7'", color: "text-yellow-400" },
      { text: "\n};", color: "text-gray-400" },
    ],
  ]

  const sliderImages = [image, image2, image3, image4, image5]

  useEffect(() => {
    if (!inView) return
    let timeoutId: NodeJS.Timeout
    let currentIndex = 0
    let currentLine = 0
    let currentText = ""

    const typeCode = () => {
      const currentCode = allCodeLines[currentCodeIndex]
      if (currentLine < currentCode.length) {
        const line = currentCode[currentLine]
        if (currentIndex < line.text.length) {
          currentText += line.text[currentIndex]
          currentIndex++
          setCodeContent(currentText)
          timeoutId = setTimeout(typeCode, 30)
        } else {
          currentLine++
          currentIndex = 0
          timeoutId = setTimeout(typeCode, 30)
        }
      } else {
        // Typing completed, wait 3 seconds and move to next code
        timeoutId = setTimeout(() => {
          currentIndex = 0
          currentLine = 0
          currentText = ""
          setCodeContent("")
          setCurrentCodeIndex((prevIndex) => (prevIndex === allCodeLines.length - 1 ? 0 : prevIndex + 1))
          typeCode()
        }, 3000)
      }
    }

    typeCode()

    return () => {
      clearTimeout(timeoutId)
    }
  }, [inView, currentCodeIndex])

  const renderColoredCode = () => {
    let remainingContent = codeContent
    const renderedLines = []
    const currentCode = allCodeLines[currentCodeIndex]

    for (const line of currentCode) {
      if (remainingContent.length === 0) break
      const lineLength = line.text.length
      const currentLineContent = remainingContent.substring(0, lineLength)
      remainingContent = remainingContent.substring(lineLength)

      renderedLines.push(
        <span key={renderedLines.length} className={line.color}>
          {currentLineContent}
        </span>,
      )
    }

    return (
      <div className="font-mono text-xs sm:text-sm md:text-base min-h-[100px] sm:min-h-[120px] md:min-h-[140px]">
        {renderedLines}
        <motion.span
          animate={{ opacity: [0, 1, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1 }}
          className="ml-1 inline-block w-2 h-4 sm:h-6 bg-emerald-400 align-middle"
        ></motion.span>
      </div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen py-12 sm:py-16 md:py-20 bg-cover bg-no-repeat bg-gradient-to-br from-[#0b0f19] via-[#111827] to-[#0b0f19] relative overflow-hidden"
      ref={ref}
    >
      {/* Background elements */}
      <div className="absolute top-10 left-10 w-48 sm:w-64 h-48 sm:h-64 bg-purple-800/40 rounded-[20px] blur-2xl opacity-10"></div>

      {/* Background geometric patterns */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="absolute inset-0"
      >
        <div className="absolute top-10 sm:top-20 left-10 sm:left-20 w-20 sm:w-32 h-20 sm:h-32 border border-cyan-400/90 rotate-45 animate-pulse"></div>
        <div className="absolute top-40 sm:top-60 right-20 sm:right-40 w-32 sm:w-48 h-32 sm:h-48 border border-purple-400/70 rotate-12"></div>
        <div className="absolute bottom-20 sm:bottom-40 left-20 sm:left-60 w-16 sm:w-24 h-16 sm:h-24 border border-emerald-400/50 -rotate-12 animate-pulse"></div>
        <div className="absolute bottom-10 sm:bottom-20 right-10 sm:right-20 w-24 sm:w-40 h-24 sm:h-40 border border-cyan-400/50 rotate-45"></div>
      </motion.div>

      {/* Floating grid pattern */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="absolute inset-0"
      >
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(34, 211, 238, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(34, 211, 238, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </motion.div>

      {/* Hero Section */}
      <div className="relative z-10 mx-auto px-8 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 xl:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-4 sm:space-y-6 md:space-y-8 order-2 lg:order-1">
            <div className="space-y-3 sm:space-y-4">
              {/* Badge */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-flex items-center px-3 py-1 sm:px-4 sm:py-2 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 text-xs sm:text-sm font-medium text-gray-300"
              >
                <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2 text-cyan-400" />
                <span className="text-cyan-400">URSOFTS </span>
                <span className="mx-1 sm:mx-2 text-gray-600">•</span>
                <span>Since 2025</span>
              </motion.div>

              {/* Main Heading */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-bold text-white leading-tight sm:leading-snug md:leading-relaxed">
                <span className="text-[#79e0a4]">URSOFTS-</span>
                <span>Where Ideas Meet Innovation and Technology</span>
              </h1>
            </div>

            {/* Code-style description */}
            <div className="space-y-4 sm:space-y-6">
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="bg-[#060336] shadow-cyan-600 shadow-md backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 border border-gray-700/50 overflow-x-auto"
              >
                {renderColoredCode()}
              </motion.div>
            </div>
          </div>

          {/* Right Content - Image Slider */}
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="flex justify-center lg:justify-end order-1 lg:order-2 mb-8 lg:mb-0 md:lg:xl:2xl:mt-0 mt-8"
          >
            <div className="relative w-full max-w-xs sm:max-w-lg 2xl:lg:md:xl:max-w-6xl">
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-lg  sm:rounded-xl blur-xs"></div>

              {/* Image Slider */}
              <div className="relative overflow-hidden  rounded-lg sm:rounded-xl">
                <Swiper
                  modules={[Autoplay]}
                  autoplay={{
                    delay: 10000,
                    disableOnInteraction: false,
                  }}
                  loop={true}
                  className=" w-full h-58 sm:h-64 md:h-80 xl:2xl:lg:h-140 rounded-lg sm:rounded-xl"
                >
                  {sliderImages.map((image, index) => (
                    <SwiperSlide key={index}>
                      <div className="w-full h-full  rounded-lg sm:rounded-xl">
                        <img
                          src={image || "/placeholder.svg"}
                          alt={`Slide ${index + 1}`}
                          className="w-full  h-full object-contain"
                          loading="eager"
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default MatchingHeroSection