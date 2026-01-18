"use client" // if using Next.js 13+ App Router

import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import { Pagination, Autoplay } from "swiper/modules"

export default function Reviews() {
    const reviews = [
        { name: "Alice", review: "Amazing products and fast delivery!", rating: 5 },
        { name: "Bob", review: "Customer support is super helpful.", rating: 4 },
        { name: "Clara", review: "Love the quality of these products.", rating: 5 },
        { name: "David", review: "Great value for money.", rating: 4 },
        { name: "Eva", review: "Highly recommend this store!", rating: 5 },
    ]

    return (
        <section className="py-20 bg-[#ffffff] text-black">
            <div className="max-w-5xl mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-black mb-12">
                    What Our Customers Say
                </h2>

                <Swiper
                    modules={[Pagination, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 4000, disableOnInteraction: false }}
                    breakpoints={{
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                >
                    {reviews.map((rev, i) => (
                        <SwiperSlide key={i}>
                            <div className="bg-[#2a4ba0] p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300">
                                <p className="text-gray-300 mb-4 text-lg md:text-base">"{rev.review}"</p>
                                <h3 className="text-white font-semibold mb-2">{rev.name}</h3>
                                <p className="text-yellow-400 text-lg">{'★'.repeat(rev.rating)}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}
