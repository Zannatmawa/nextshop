export default function Reviews() {
    const reviews = [
        { name: "Alice", review: "Amazing products and fast delivery!", rating: 5 },
        { name: "Bob", review: "Customer support is super helpful.", rating: 4 },
        { name: "Clara", review: "Love the quality of these products.", rating: 5 },
    ]

    return (
        <section className="py-20 bg-[#111827]">
            <div className="max-w-5xl mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold text-white mb-12">What Our Customers Say</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {reviews.map((rev, i) => (
                        <div key={i} className="bg-[#0B1120] p-6 rounded-xl shadow hover:scale-105 transition">
                            <p className="text-gray-300 mb-4">"{rev.review}"</p>
                            <h3 className="text-white font-semibold">{rev.name}</h3>
                            <p className="text-yellow-400">{'★'.repeat(rev.rating)}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
