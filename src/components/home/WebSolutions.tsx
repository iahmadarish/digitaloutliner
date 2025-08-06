"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const desktopImages = [
    "/category/category1.png",
    "/category/category1.png",
    "/category/category1.png",
    "/category/category1.png",
    "/category/category1.png",
    "/category/category1.png",
    "/category/category1.png",
    "/category/category1.png",
    "/category/category1.png",
    "/category/category1.png",
    "/category/category1.png",
    "/category/category1.png",
    "/category/category1.png",
    "/category/category1.png",
    "/category/category1.png",
    "/category/category1.png",
    "/category/category1.png",
    "/category/category1.png",
];

const WebSolutions = () => {
    return (
        <section className="bg-black text-white py-16 px-4">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl md:text-5xl text-justify font-normal mb-4">
                    The one commerce platform behind it all
                </h2>
                <p className="text-3xl md:text-5xl text-gray-500 mb-12 font-normal text-justify leading-tight">
                    Sell online and in person. Sell locally and globally. Sell direct and wholesale.
                    Sell on desktop and mobile.
                </p>

                <Swiper
                    slidesPerView={"auto"}
                    centeredSlides={true}
                    spaceBetween={50}
                    pagination={{
                        clickable: true,
                    }}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="w-full flex gap-1 md:gap-5 justify-between items-center">
                            <img
                                src={desktopImages[0]}
                                alt="image"
                                className="flex-1 max-w-[45%] md:w-[467px] h-[190px] md:h-[362px] object-cover rounded-lg"
                            />
                            <img
                                src={desktopImages[1]}
                                alt="image"
                                className="flex-1 max-w-[30%] md:w-[205px] h-[190px] md:h-[362px] object-cover rounded-lg"
                            />
                            <img
                                src={desktopImages[2]}
                                alt="image"
                                className="flex-1 max-w-[45%] md:w-[467px] h-[190px] md:h-[362px] object-cover rounded-lg"
                            />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="w-full flex gap-1 md:gap-5 justify-between items-center">
                            <img
                                src={desktopImages[3]}
                                alt="image"
                                className="flex-1 max-w-[45%] md:w-[467px] h-[190px] md:h-[362px] object-cover rounded-lg"
                            />
                            <img
                                src={desktopImages[4]}
                                alt="image"
                                className="flex-1 max-w-[30%] md:w-[205px] h-[190px] md:h-[362px] object-cover rounded-lg"
                            />
                            <img
                                src={desktopImages[5]}
                                alt="image"
                                className="flex-1 max-w-[45%] md:w-[467px] h-[190px] md:h-[362px] object-cover rounded-lg"
                            />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="w-full flex gap-1 md:gap-5 justify-between items-center">
                            <img
                                src={desktopImages[6]}
                                alt="image"
                                className="flex-1 max-w-[45%] md:w-[467px] h-[190px] md:h-[362px] object-cover rounded-lg"
                            />
                            <img
                                src={desktopImages[7]}
                                alt="image"
                                className="flex-1 max-w-[30%] md:w-[205px] h-[190px] md:h-[362px] object-cover rounded-lg"
                            />
                            <img
                                src={desktopImages[8]}
                                alt="image"
                                className="flex-1 max-w-[45%] md:w-[467px] h-[190px] md:h-[362px] object-cover rounded-lg"
                            />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="w-full flex gap-1 md:gap-5 justify-between items-center">
                            <img
                                src={desktopImages[9]}
                                alt="image"
                                className="flex-1 max-w-[45%] md:w-[467px] h-[190px] md:h-[362px] object-cover rounded-lg"
                            />
                            <img
                                src={desktopImages[10]}
                                alt="image"
                                className="flex-1 max-w-[30%] md:w-[205px] h-[190px] md:h-[362px] object-cover rounded-lg"
                            />
                            <img
                                src={desktopImages[11]}
                                alt="image"
                                className="flex-1 max-w-[45%] md:w-[467px] h-[190px] md:h-[362px] object-cover rounded-lg"
                            />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
};

export default WebSolutions;