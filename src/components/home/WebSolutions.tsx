"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, EffectCoverflow } from "swiper/modules"
import type { Swiper as SwiperType } from "swiper"

import "swiper/css"
import "swiper/css/effect-coverflow"

const slides = [
  {
    id: 1,
    desktop1: "web/templete (2).png",
    mobile: "web/templete (1).png",
    desktop2: "web/templete (3).png",
  },
  {
    id: 2,
    desktop1: "web/temtwo (1).png",
    mobile: "web/temtwo (3).png",
    desktop2: "web/temtwo (2).png",
  },
  {
    id: 3,
    desktop1: "web/23.webp",
    mobile: "web/23.webp",
    desktop2: "web/23.webp",
  },
]

const WebSolutions = () => {
  const [current, setCurrent] = useState(0)
  const [hovered, setHovered] = useState("")
  const swiperRef = useRef<SwiperType | null>(null)
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768

  const getImageSize = (type: string, index: number) => {
    if (index !== current && !isMobile) return "scale-95 opacity-50"

    switch (current) {
      case 0:
        if (type === "mobile") return "scale-100 opacity-100"
        return "scale-100 opacity-100"
      case 1:
        if (type === "desktop1") return "scale-100 opacity-100"
        return "scale-100 opacity-100"
      case 2:
        if (type === "desktop2") return "scale-100 opacity-100"
        return "scale-100 opacity-100"
      default:
        return "scale-100 opacity-100"
    }
  }

  const getImageWidth = (type: string) => {
    if (type === "mobile") return "w-full max-w-[380px]"
    return "w-full"
  }

  const HoverOverlay = ({ id }: { id: string }) => (
    <AnimatePresence>
      {hovered === id && (
        <motion.div
          className="absolute inset-0 bg-black/70 flex items-end justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.p 
            className="text-white text-lg md:text-2xl font-semibold text-center px-4 py-6 w-full"
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            exit={{ y: 20 }}
          >
            Get your website and sale online
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  )

  const RenderImage = ({
    src,
    alt,
    type,
    index,
  }: {
    src: string
    alt: string
    type: string
    index: number
  }) => {
    const id = `${index}-${type}`
    const style = getImageSize(type, index)
    const widthClass = getImageWidth(type)
    
    return (
      <motion.div
        className={`relative overflow-hidden rounded-xl shadow-xl transition-all duration-700 ${style} h-full ${widthClass} mx-auto`}
        onMouseEnter={() => !isMobile && setHovered(id)}
        onMouseLeave={() => !isMobile && setHovered("")}
        whileHover={!isMobile ? { y: -4 } : {}}
        layout
      >
        <div className="relative w-full h-full">
          <img 
            src={src || "/placeholder.svg"} 
            alt={alt} 
            className="w-full h-full object-cover" 
            style={{ height: "450px" }}
          />
          <HoverOverlay id={id} />
        </div>
      </motion.div>
    )
  }

  const getSlideLayout = (index: number) => {
    if (isMobile) {
      return ["mobile"] // Mobile shows only one image at a time
    }
    
    switch(index) {
      case 0: // First slide: mobile first
        return ["mobile", "desktop1", "desktop2"]
      case 1: // Second slide: mobile middle
        return ["desktop1", "mobile", "desktop2"]
      case 2: // Third slide: mobile last
        return ["desktop1", "desktop2", "mobile"]
      default:
        return ["mobile", "desktop1", "desktop2"]
    }
  }

  return (
    <div className="w-full min-h-screen bg-[#000a05] py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">Web Solutions</h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-sm md:text-base">
            Creating stunning digital experiences that drive results.
          </p>
        </motion.div>

        {/* Desktop View */}
        <div className="hidden md:block">
          <Swiper
            modules={[Autoplay]}
            slidesPerView={1}
            spaceBetween={30}
            onSwiper={(s) => (swiperRef.current = s)}
            onSlideChange={(s) => setCurrent(s.activeIndex)}
            autoplay={{
              delay: 8000,
              disableOnInteraction: false,
            }}
            className="!pb-16"
          >
            {slides.map((slide, idx) => {
              const layout = getSlideLayout(idx)
              
              return (
                <SwiperSlide key={slide.id}>
                  <div className="grid grid-cols-3 items-center gap-6 h-[450px]">
                    {layout.map((type) => (
                      <div key={type} className="h-full flex items-center justify-center">
                        <RenderImage 
                          src={slide[type as keyof typeof slide] as string} 
                          alt={type} 
                          type={type} 
                          index={idx} 
                        />
                      </div>
                    ))}
                  </div>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>

        {/* Mobile View */}
        <div className="md:hidden">
          <Swiper
            modules={[Autoplay, EffectCoverflow]}
            slidesPerView={1}
            spaceBetween={20}
            centeredSlides={true}
            effect="coverflow"
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2,
              slideShadows: false,
            }}
            onSwiper={(s) => (swiperRef.current = s)}
            onSlideChange={(s) => setCurrent(s.activeIndex)}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            className="!pb-16"
          >
            {slides.map((slide, idx) => (
              <SwiperSlide key={slide.id}>
                <div className="h-[400px] flex items-center justify-center px-4">
                  <RenderImage 
                    src={slide.mobile} 
                    alt="mobile" 
                    type="mobile" 
                    index={idx} 
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default WebSolutions