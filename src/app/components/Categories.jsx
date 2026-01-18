import React from "react"

const Categories = () => {
    const categories = [
        { name: "Smartphones", image: "/images/phone.jpg" },
        { name: "Laptops", image: "/images/laptop.jpg" },
        { name: "Headphones", image: "/images/headphones.jpg" },
        { name: "Smart Watches", image: "/images/watch.jpg" },
        { name: "Gaming", image: "/images/gaming.jpg" },
        { name: "Accessories", image: "/images/accessories.jpg" },
    ]

    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex items-center justify-between mb-10">
                    <h2 className="text-2xl font-bold text-slate-900">
                        Shop by Category
                    </h2>
                    <button className="text-blue-600 font-semibold text-sm hover:underline">
                        View All
                    </button>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
                    {categories.map((cat, i) => (
                        <div
                            key={i}
                            className="group cursor-pointer text-center"
                        >
                            {/* Circular Image Container */}
                            <div className="relative w-24 h-24 md:w-32 md:h-32 mx-auto mb-4 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:shadow-xl group-hover:border-blue-200">
                                <img
                                    src={cat.image}
                                    alt={cat.name}
                                    className="w-2/3 h-2/3 object-contain transform transition-transform duration-300 group-hover:scale-110"
                                />
                                {/* Subtle Hover Ring */}
                                <div className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-blue-500/20 transition-all"></div>
                            </div>

                            <h3 className="text-slate-700 font-semibold text-sm md:text-base group-hover:text-blue-600 transition-colors">
                                {cat.name}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Categories