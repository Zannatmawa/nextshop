export default function WhyChooseUs() {
    const features = [
        { title: "Free Shipping", icon: "🚚" },
        { title: "24/7 Support", icon: "💬" },
        { title: "Secure Payments", icon: "🔒" },
        { title: "Easy Returns", icon: "↩️" },
    ]

    return (
        <section className="py-20 text-black bg-blue-500">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold mb-12">Why Choose Us</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {features.map((feat, i) => (
                        <div key={i} className="bg-white p-6 rounded-xl hover:scale-105 transition cursor-pointer">
                            <div className="text-4xl mb-4">{feat.icon}</div>
                            <h3 className="text-white font-semibold">{feat.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
