export default function BestSellers() {
    const products = [
        { name: "Smart Watch", price: "$199", image: "https://i.ibb.co/Tm3gYHg/watch1.png" },
        { name: "Headphones", price: "$89", image: "https://i.ibb.co/rG4m1Hp/headphones.png" },
        { name: "Sneakers", price: "$129", image: "https://i.ibb.co/3p0N0Rh/sneakers.png" },
        { name: "Backpack", price: "$59", image: "https://i.ibb.co/0KQ7r0N/backpack.png" },
    ]

    return (
        <section className="py-20 bg-[#0B1120]">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-3xl font-bold text-white mb-10 text-center">Best Sellers</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {products.map((prod, i) => (
                        <div key={i} className="bg-[#111827] rounded-xl p-5 hover:scale-105 transition cursor-pointer">
                            <img src={prod.image} alt={prod.name} className="w-full h-48 object-contain mb-3" />
                            <h3 className="text-white font-medium">{prod.name}</h3>
                            <p className="text-[#F59E0B] font-semibold mt-1">{prod.price}</p>
                            <button className="btn btn-primary btn-sm mt-3 w-full">Add to Cart</button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
