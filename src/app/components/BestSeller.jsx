//bg-[#0B1120]
export default function BestSellers() {
    // Using the local category images
    const products = [
        { name: "Electronics", price: "$199", image: "/images/dress.jpg" },
        { name: "Fashion", price: "$89", image: "/images/jeans.jpg" },
        { name: "Accessories", price: "$129", image: "/images/man1.jpg" },
        { name: "Shoes", price: "$59", image: "/images/man2.jpg" },
    ]

    return (
        <section className="py-20 bg-[#800022]">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-3xl font-bold text-white mb-10 text-center">Best Sellers</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {products.map((prod, i) => (
                        <div
                            key={i}
                            className="bg-[#666666] rounded-xl p-5 hover:scale-105 transition-transform duration-300 cursor-pointer"
                        >
                            <img
                                src={prod.image}
                                alt={prod.name}
                                className="w-full h-48 object-cover mb-3 rounded-lg"
                            />
                            <h3 className="text-white font-medium">{prod.name}</h3>
                            <p className="text-[#F59E0B] font-semibold mt-1">{prod.price}</p>
                            <button className="btn btn-white btn-sm mt-3 w-full">Add to Cart</button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
