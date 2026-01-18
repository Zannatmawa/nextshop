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
        <section className="py-20 my-10 bg-[#3271b0]">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-3xl font-bold text-white text-center mb-12">
                    Shop by Category
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                    {categories.map((cat, i) => (
                        <div
                            key={i}
                            className="bg-white rounded-2xl p-6 text-center hover:scale-105 transition shadow-lg hover:shadow-[#194a7a]/50"
                        >
                            <img
                                src={cat.image}
                                alt={cat.name}
                                className="w-16 h-16 mx-auto mb-4 object-contain"
                            />
                            <h3 className="text-black font-medium">{cat.name}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Categories
