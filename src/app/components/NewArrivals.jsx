export default function NewArrivals() {
    const products = [
        { name: "Leather Jacket", price: "$249", image: "https://i.ibb.co/1LxkK6f/jacket.png" },
        { name: "Bluetooth Speaker", price: "$79", image: "https://i.ibb.co/0J1Y8V6/speaker.png" },
        { name: "Sunglasses", price: "$49", image: "https://i.ibb.co/YTZ6BqD/sunglasses.png" },
        { name: "Laptop Backpack", price: "$69", image: "https://i.ibb.co/sbF2YZg/backpack2.png" },
    ]

    return (
        <section className="py-20 bg-[#0B1120]">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-3xl font-bold text-white mb-10 text-center">New Arrivals</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {products.map((prod, i) => (
                        <div key={i} className="bg-[#111827] rounded-xl p-5 hover:scale-105 transition cursor-pointer">
                            <img src={prod.image} alt={prod.name} className="w-full h-48 object-contain mb-3" />
                            <h3 className="text-white font-medium">{prod.name}</h3>
                            <p className="text-[#38BDF8] font-semibold mt-1">{prod.price}</p>
                            <button className="btn btn-primary btn-sm mt-3 w-full">Add to Cart</button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
