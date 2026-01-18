// Suggested: Use a lighter gray background for the section to make white cards "pop"
export default function BestSellers() {
    const products = [
        { name: "Premium Wireless Headphones", price: "$199", image: "/images/headphones.jpg", category: "Electronics" },
        { name: "Classic Denim Jacket", price: "$89", image: "/images/man3.jpg", category: "Fashion" },
        { name: "Urban Explorer Backpack", price: "$129", image: "/images/man1.jpg", category: "Accessories" },
        { name: "Minimalist Leather Shoes", price: "$59", image: "/images/man2.jpg", category: "Shoes" },
    ]

    return (
        <section className="py-20 bg-gray-50 text-slate-900">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col items-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-center">Best Sellers</h2>
                    <div className="h-1 w-20 bg-blue-600 mt-4 rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {products.map((prod, i) => (
                        <div
                            key={i}
                            className="group bg-white border border-slate-100 rounded-2xl p-4 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col"
                        >
                            {/* Image Container */}
                            <div className="overflow-hidden rounded-xl mb-4 bg-gray-100">
                                <img
                                    src={prod.image}
                                    alt={prod.name}
                                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>

                            {/* Product Info */}
                            <div className="flex-grow">
                                <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">{prod.category}</span>
                                <h3 className="text-slate-800 font-semibold text-lg leading-tight mt-1">{prod.name}</h3>
                                <p className="text-slate-900 font-bold text-xl mt-2">{prod.price}</p>
                            </div>

                            {/* Action Button */}
                            <button className="mt-5 w-full bg-[#194a7a] hover:bg-[#123557] text-white font-medium py-3 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                                Add to Cart
                            </button>
                        </div>
                    ))}
                </div>

                {/* Centered Show More Button */}
                <div className="flex justify-center mt-12">
                    <button className="px-8 py-3 border-2 border-[#194a7a] text-[#194a7a] hover:bg-[#194a7a] hover:text-white font-bold rounded-full transition-all duration-300 uppercase text-sm tracking-widest">
                        Show More
                    </button>
                </div>
            </div>
        </section>
    )
}