export default function Categories() {
    const categories = [
        { name: "Electronics", image: "/images/electronics.png" },
        { name: "Fashion", image: "/images/fashion.png" },
        { name: "Accessories", image: "/images/accessories.png" },
        { name: "Shoes", image: "/images/shoes.png" },
        { name: "Watches", image: "/images/watch.png" },
        { name: "Home Decor", image: "/images/home.png" },
    ]

    return (
        <section className="relative py-20 bg-[#4d1b1b] overflow-hidden">
            {/* Decorative floating circles */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-purple-700 opacity-20 rounded-full -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500 opacity-20 rounded-full translate-x-1/2 translate-y-1/2 animate-pulse"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
                    Shop by Category
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                    {categories.map((cat, index) => (
                        <div
                            key={index}
                            className="bg-[#111827] rounded-2xl p-6 text-center cursor-pointer transform hover:-translate-y-2 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl relative overflow-hidden"
                        >
                            <div className="bg-gradient-to-tr from-purple-600 to-blue-500 w-24 h-24 mx-auto rounded-full flex items-center justify-center mb-4 shadow-inner">
                                <img
                                    src={cat.image}
                                    alt={cat.name}
                                    className="w-12 h-12 object-contain"
                                />
                            </div>
                            <h3 className="text-white font-semibold text-lg">{cat.name}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
