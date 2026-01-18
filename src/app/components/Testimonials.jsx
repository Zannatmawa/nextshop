"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import { Pagination, Autoplay } from "swiper/modules"

export default function Reviews() {
    const reviews = [
        { name: "Alice M.", review: "Amazing products and fast delivery! The packaging was also very secure.", rating: 5, color: "bg-blue-100 text-blue-600" },
        { name: "Bob R.", review: "Customer support is super helpful. They resolved my issue in minutes.", rating: 4, color: "bg-purple-100 text-purple-600" },
        { name: "Clara W.", review: "Love the quality of these products. Definitely worth every penny.", rating: 5, color: "bg-green-100 text-green-600" },
        { name: "David K.", review: "Great value for money. Best tech deals I've found this year.", rating: 4, color: "bg-orange-100 text-orange-600" },
        { name: "Eva L.", review: "Highly recommend this store! Reliable and very user-friendly.", rating: 5, color: "bg-pink-100 text-pink-600" },
    ]

    return (
        <section className="py-24 bg-slate-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
                        What Our Customers Say
                    </h2>
                    <p className="text-slate-500 text-lg">Don't just take our word for it—hear from our community.</p>
                </div>

                <Swiper
                    modules={[Pagination, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    pagination={{ clickable: true, dynamicBullets: true }}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    className="pb-16" // Space for pagination bullets
                >
                    {reviews.map((rev, i) => (
                        <SwiperSlide key={i} className="h-full">
                            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col h-full relative group hover:shadow-xl transition-all duration-300">
                                {/* Decorative Quote Icon */}
                                <div className="absolute top-6 right-8 text-slate-100 group-hover:text-blue-50 transition-colors">
                                    <svg width="40" height="30" viewBox="0 0 40 30" fill="currentColor">
                                        <path d="M11.25 0C5.03125 0 0 5.03125 0 11.25V30H15V11.25H7.5C7.5 9.1875 9.1875 7.5 11.25 7.5V0ZM36.25 0C30.0312 0 25 5.03125 25 11.25V30H40V11.25H32.5C32.5 9.1875 34.1875 7.5 36.25 7.5V0Z" />
                                    </svg>
                                </div>

                                {/* Rating Stars (SVG for better control) */}
                                <div className="flex gap-1 mb-4 text-yellow-400">
                                    {[...Array(5)].map((_, index) => (
                                        <svg key={index} className={`w-5 h-5 ${index < rev.rating ? 'fill-current' : 'fill-slate-200'}`} viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>

                                <p className="text-slate-600 mb-8 italic flex-grow">"{rev.review}"</p>

                                <div className="flex items-center gap-4 border-t border-slate-50 pt-6">
                                    <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm ${rev.color}`}>
                                        {rev.name.charAt(0)}
                                    </div>
                                    <div>
                                        <h3 className="text-slate-900 font-bold">{rev.name}</h3>
                                        <p className="text-slate-400 text-xs uppercase tracking-widest font-semibold">Verified Buyer</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}