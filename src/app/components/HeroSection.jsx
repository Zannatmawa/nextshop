"use client"
import React from 'react'
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"

const HeroSection = () => {
    return (
        <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            loop={true}
            pagination={{ clickable: true }}
            className="min-h-screen"
        >
            {[1, 2, 3].map((slide) => (
                <SwiperSlide key={slide}>
                    <section className="min-h-screen flex items-center justify-center bg-[#fdf9ed]">
                        <div className="max-w-7xl mx-auto px-6 md:grid md:grid-cols-2 gap-10 items-center">
                            <div>
                                <h1 className="text-4xl md:text-5xl font-bold text-black leading-tight">
                                    Discover Premium <span className='text-[#194a7a]'>Products</span> <br /> For Your Lifestyle
                                </h1>
                                <p className="mt-4 text-gray-500">
                                    Shop the latest trends with fast delivery and secure payments.
                                </p>
                                <div className="mt-6 flex gap-4 flex-wrap">
                                    <button className="px-6 py-3 bg-[#194a7a] text-white rounded-lg hover:bg-[#0f3650] transition">
                                        Shop Now
                                    </button>
                                    <button className="px-6 py-3 border border-[#194a7a] text-[#194a7a] rounded-lg hover:bg-[#194a7a] hover:text-white transition">
                                        View Collections
                                    </button>
                                </div>
                            </div>
                            <div className="flex justify-center">
                                <Image
                                    src={`/images/man${slide}.jpg`}
                                    alt="Shopping"
                                    width={400}
                                    height={400}
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
