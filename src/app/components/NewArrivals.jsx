export default function NewArrivals() {
    // Use the category images for new arrivals
    const products = [
        { name: "Electronics", price: "$249", image: "/images/dress.jpg" },
        { name: "Fashion", price: "$79", image: "/images/man3.jpg" },
        { name: "Accessories", price: "$49", image: "/images/man1.jpg" },
        { name: "Shoes", price: "$69", image: "/images/man2.jpg" },
        // { name: "Watches", price: "$199", image: "/images/top.jpg" },
        // { name: "Home Decor", price: "$129", image: "/images/women1.jpg" },
    ]

    return (
        <section className="py-20 bg-[#2a4ba0]">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-3xl font-bold text-white mb-10 text-center">New Arrivals</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {products.map((prod, i) => (
                        <div
                            key={i}
                            className="bg-white border-2 border-blue-200 rounded-xl p-5 hover:scale-105 transition-transform duration-300 cursor-pointer"
                        >
                            <img
                                src={prod.image}
                                alt={prod.name}
                                className="w-full h-48 object-cover mb-3 rounded-lg"
                            />
                            <h3 className="text-white font-medium">{prod.name}</h3>
                            <p className="text-black font-semibold mt-1">{prod.price}</p>
                            <button className="btn bg-[#194a7a] text-white btn-sm mt-3 w-full">Add to Cart</button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
