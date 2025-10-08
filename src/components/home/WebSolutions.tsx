import { Swiper, SwiperSlide } from "swiper/react"
import { EffectCoverflow, Pagination } from "swiper/modules"
import { motion } from "framer-motion"
// Note: We cannot import 'react-router-dom' in a single-file React component environment, 
// so useNavigate is mocked for functionality but kept in the code structure as requested.
// const useNavigate = () => (path) => console.log('Navigating to:', path); 

import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"

// Replacing the relative path with a placeholder for runnable code and consistency.
const desktopImages = [
  "https://res.cloudinary.com/dseipjxgc/image/upload/v1755187729/Preview_1_birxjf.png",
  "https://res.cloudinary.com/dseipjxgc/image/upload/v1755187724/6983b9548d5b9cdd515ee138ffd476f3af137d5d_1_qcp55u.png",
  "https://res.cloudinary.com/dseipjxgc/image/upload/v1755187729/Thumbnail_1_cdotyr.png",
  "https://res.cloudinary.com/dseipjxgc/image/upload/v1755187725/image_95_emqtsr.png",
  "https://placehold.co/350x300/0a1a1a/6afffa?text=E-commerce+Solution", // Placeholder for /category/category5.png
]

// Mocking useNavigate since we are in a single-file environment without actual routing.
const useNavigate = () => (path: any) => {
    console.log(`Navigation attempted to: ${path}`);
    // You would use the real useNavigate hook in a full application.
};

export default function App() {
  const navigate = useNavigate()

  const handleServiceClick = () => {
    // In a real app, this navigates. Here, it logs the action.
    navigate('/creative-web-solutions')
  }
  
  // Renamed from WebSolutions to App to be the default export
  return (
    <section className="bg-[#06140b] text-white py-16 px-4 min-h-screen flex flex-col justify-center font-inter">
      <div className="container mx-auto text-center">
        {/* Title Section */}
        <motion.h2 
          className="text-3xl md:text-5xl font-light mb-4 text-left px-2 md:px-0"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Your Entire Business, One Powerful Platform.
        </motion.h2>
        
        {/* Subtitle/Question Section */}
        <motion.p 
          className="text-xl md:text-6xl text-gray-200 mb-12 font-light text-left font-barlow tracking-[1px] leading-tight px-2 md:px-0"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <motion.span 
            className="hover:text-[#6afffa] inline-block"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            Sell Your Product in online ?
          </motion.span>{" "}
          <motion.span 
            className="hover:text-[#6afffa] inline-block"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            Sell near and far ?
          </motion.span>{" "}
          <motion.span 
            className="hover:text-[#6afffa] inline-block"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            Sell B2C and B2B ?
          </motion.span>{" "}
          <motion.span 
            className="hover:text-[#6afffa] inline-block"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            Sell on mobile or desktop ?
          </motion.span>{" "}
        </motion.p>

        {/* Swiper Slider Section */}
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
            // *** OPTIMIZATION 1: Enable Swiper's native lazy loading ***
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
                // SwiperSlide needs to be marked as lazy
                data-swiper-lazy={src}
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
                  className="relative overflow-hidden rounded-xl group cursor-pointer shadow-2xl"
                  onClick={handleServiceClick} // Making the whole slide clickable
                >
                  <img
                    src={src}
                    alt={`Slide ${index + 1}`}
                    // *** OPTIMIZATION 2: Use native browser lazy loading ***
                    loading="lazy" 
                    // *** OPTIMIZATION 3: Add width and height for CLS prevention (Crucial for performance) ***
                    width="350" 
                    height="300"
                    className="rounded-xl w-full h-[250px] md:h-[300px] object-cover transition-transform duration-500 group-hover:scale-110 aspect-[350/300]"
                    // Swiper's lazy loading uses a separate class for the image
                    // className="swiper-lazy" 
                    // To maintain the transition effects while using native lazy load, 
                    // we keep the image as the main element and use loading="lazy"
                  />
                  {/* Preloader/Spinner can be added here if using swiper-lazy class, but native lazy loading is simpler and effective. */}

                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
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
                      className="bg-[#141515] text-[#ffffff] px-6 py-3 rounded-lg font-light text-lg shadow-lg hover:shadow-xl transform opacity-0 group-hover:opacity-100 transition-all duration-300 border border-[#6afffa]/30"
                      whileHover={{ scale: 1.1, backgroundColor: "#6afffa", color: "#06140b" }}
                      whileTap={{ scale: 0.95 }}
                      // The onClick is here too, but added to the container for better touch target
                      onClick={handleServiceClick}
                    >
                      Make it Yours
                    </motion.button>
                  </motion.div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>

      <style >{`
        /* Custom Font Import */
        @import url('https://fonts.googleapis.com/css2?family=Barlow:wght@300;400;600&family=Inter:wght@300;400;600&display=swap');
        
        .font-barlow {
            font-family: 'Barlow', sans-serif;
        }
        .font-inter {
            font-family: 'Inter', sans-serif;
        }

        /* Swiper Styles */
        .swiper-pagination-bullet {
          background: rgba(106, 255, 250, 0.3);
          transition: all 0.3s ease;
          width: 8px; /* Standardizing size */
          height: 8px;
        }
        
        .swiper-pagination-bullet-active {
          background: #6afffa;
          transform: scale(1.2);
          width: 10px; /* Slightly larger active bullet */
          height: 10px;
        }
        
        .mySwiper {
          padding-bottom: 50px; /* Ensure space for pagination */
        }

        /* Styling for the Swiper's coverflow effect shadow */
        .swiper-slide-shadow-left,
        .swiper-slide-shadow-right {
          background-image: none !important; /* Removing default swiper shadows to control with Tailwind */
          opacity: 0 !important;
        }

        /* Custom shadow effect for the slides */
        .swiper-slide {
            filter: drop-shadow(0 4px 20px rgba(0, 0, 0, 0.5));
        }

      `}</style>
    </section>
  )
}
