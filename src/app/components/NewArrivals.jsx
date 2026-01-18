"use client"

import Image from "next/image"

export default function FeaturedSection() {
    const featuredProducts = [
        { id: 1, name: "Wireless Headphones", price: "$99", oldPrice: "$149", image: "/images/headphones.jpg", tag: "Save 30%" },
        { id: 2, name: "Smart Watch", price: "$149", oldPrice: "$199", image: "/images/watch.jpg", tag: "Trending" },
        { id: 3, name: "Gaming Mouse", price: "$59", oldPrice: "$89", image: "/images/man1.jpg", tag: "Best Deal" },
        { id: 4, name: "Laptop Backpack", price: "$79", oldPrice: "$110", image: "/images/man2.jpg", tag: "Limited" },
    ]

    return (
        <section className="relative bg-[#0B1120] py-24 overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] -z-10"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -z-10"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
                        Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Deals</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Premium quality, unbeatable prices. Handpicked just for you.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {featuredProducts.map((product) => (
                        <div
                            key={product.id}
                            className="group relative bg-white/5 border border-white/10 backdrop-blur-sm p-6 rounded-[2rem] hover:bg-white/10 transition-all duration-500"
                        >
                            {/* Promo Tag */}
                            <span className="absolute top-4 right-4 bg-blue-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                                {product.tag}
                            </span>

                            <div className="relative w-40 h-40 mx-auto mb-6 transform group-hover:scale-110 transition-transform duration-500">
                                {/* Glow effect behind image */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-purple-500 to-blue-500 opacity-20 blur-2xl rounded-full group-hover:opacity-40 transition-opacity"></div>
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-contain relative z-10"
                                />
                            </div>

                            <div className="text-center">
                                <h3 className="text-white font-bold text-xl mb-2 group-hover:text-blue-400 transition-colors">
                                    {product.name}
                                </h3>
                                <div className="flex items-center justify-center gap-3 mb-6">
                                    <span className="text-white text-2xl font-bold">{product.price}</span>
                                    <span className="text-gray-500 line-through text-sm">{product.oldPrice}</span>
                                </div>

                                <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-bold py-3 rounded-2xl shadow-lg shadow-purple-500/20 transform active:scale-95 transition-all">
                                    Buy Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}