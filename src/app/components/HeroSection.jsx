"use client"
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"

const HeroSection = () => {
    return (
        <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 3500 }}
            loop={true}
            pagination={{ clickable: true }}
            className="min-h-screen"
        >
            {[1, 2, 3].map((slide) => (
                <SwiperSlide key={slide}>
                    <section className="min-h-screen text-black flex items-center justify-center">
                        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
                            <div>
                                <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                                    Discover Premium <span className='text-[#194a7a]'>Products</span> <br /> For Your Lifestyle
                                </h1>
                                <p className="mt-4 text-gray-500">
                                    Shop the latest trends with fast delivery and secure payments.
                                </p>
                                <div className="mt-6 flex gap-4">
                                    <button className="btn text-white bg-[#194a7a]">Shop Now</button>
                                    <button className="btn btn-outline hover:text-white hover:bg-[#194a7a]">View Collections</button>
                                </div>
                            </div>
                            <div className="flex justify-center">
                                <img
                                    src={`/images/man${slide}.jpg`}
                                    alt="Shopping"
                                    className="w-full max-w-md"
                                />
                            </div>
                        </div>
                    </section>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default HeroSection
