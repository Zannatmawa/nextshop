import Image from 'next/image'

export default function Categories() {
    const categories = [
        { name: "Electronics", image: "/images/dress.jpg" },
        { name: "Fashion", image: "/images/jeans.jpg" },
        { name: "Accessories", image: "/images/man1.jpg" },
        { name: "Shoes", image: "/images/man2.jpg" },
        { name: "Watches", image: "/images/top.jpg" },
        { name: "Home Decor", image: "/images/women1.jpg" },
    ]

    return (
        <section className="relative py-20  overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold  mb-12 text-center">
                    Shop by Category
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                    {categories.map((cat, index) => (
                        <div
                            key={index}
                            className="bg-[#111827] rounded-2xl p-6 text-center cursor-pointer transform hover:-translate-y-2 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl relative overflow-hidden"
                        >
                            <div className="w-24 h-24 mx-auto mb-4 rounded-full flex items-center justify-center bg-gradient-to-tr from-purple-600 to-blue-500 shadow-inner overflow-hidden">
                                <Image
                                    src={cat.image}
                                    alt={cat.name}
                                    width={70}  // size of the image
                                    height={70}
                                    className="object-contain rounded-full w-30 h-30"
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
