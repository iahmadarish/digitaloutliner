"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { EffectCoverflow, Pagination } from "swiper/modules"
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"

const desktopImages = [
  "/category/category1.png",
  "/category/category2.png",
  "/category/category3.png",
  "/category/category4.png",
  "/category/category5.png",
  "/category/templete (2).png",
  "/category/templete (3).png",
  "/category/temtwo (2).png",
  "/category/temtwo (3).png",
  "/category/Thumbnail.png",
]

export default function WebSolutions() {
  const navigate = useNavigate()

  const handleServiceClick = () => {
    navigate('/creative-web-solutions')
  }
  return (
    <section className="bg-[#06140b] text-white py-16 px-4">
      <div className="container mx-auto text-center">
        <motion.h2 
          className="text-3xl md:text-5xl font-light mb-4 text-left"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Your Entire Business, One Powerful Platform.
        </motion.h2>
        
        <motion.p 
          className="text-xl md:text-6xl  text-gray-200 mb-12 font-light text-left font-barlow tracking-[1px]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <motion.span 
            className="hover:text-[#6afffa]"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            Sell Your Product in online ?
          </motion.span>{" "}
          <motion.span 
            className="hover:text-[#6afffa]"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            Sell near and far ?
          </motion.span>{" "}
          <motion.span 
            className="hover:text-[#6afffa]"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            Sell B2C and B2B ?
          </motion.span>{" "}
          <motion.span 
            className="hover:text-[#6afffa]"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
           Sell on mobile or desktop ?
          </motion.span>{" "}

        
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            spaceBetween={30}
            pagination={{ clickable: true }}
            modules={[EffectCoverflow, Pagination]}
            breakpoints={{
              0: {
                slidesPerView: 1.5,
              },
              768: {
                slidesPerView: 3,
              },
            }}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 200,
              modifier: 1,
              slideShadows: true,
            }}
            className="mySwiper"
          >
            {desktopImages.map((src, index) => (
              <SwiperSlide
                key={index}
                className="max-w-[300px] lg:max-w-[350px]"
              >
                <motion.div
                  whileHover={{ 
                    scale: 1.05,
                    rotateY: 5,
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ 
                    duration: 0.3,
                    ease: "easeOut"
                  }}
                  className="relative overflow-hidden rounded-xl group cursor-pointer"
                  
                >
                  <img
                    src={src}
                    alt={`Slide ${index + 1}`}
                    className="rounded-xl w-full h-[250px] md:h-[300px] object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  />
                  
                  {/* Get Service Button */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center font-barlow"
                    initial={{ opacity: 0, y: 20 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    <motion.button
                      className="bg-[#141515] text-[#ffffff] px-6 py-3 rounded-lg font-light text-lg shadow-lg hover:shadow-xl transform opacity-0 group-hover:opacity-100 transition-all duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleServiceClick}
                    >
                      Get Offer
                    </motion.button>
                  </motion.div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>

      <style >{`
        .swiper-pagination-bullet {
          background: rgba(106, 255, 250, 0.3);
          transition: all 0.3s ease;
        }
        
        .swiper-pagination-bullet-active {
          background: #6afffa;
          transform: scale(1.2);
        }
        
        .mySwiper {
          padding-bottom: 50px;
        }
      `}</style>
    </section>
  )
}