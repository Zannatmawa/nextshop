import React from 'react'
import Link from 'next/link'

const ItemCard = ({ item }) => {
    return (
        <div className="bg-[#111827] rounded-xl shadow-lg p-5 hover:scale-105 transition">
            <img
                src={item.image}
                alt={item.name}
                className="w-full h-40 object-contain mb-4"
            />
            <h3 className="text-white font-semibold text-lg">{item.name}</h3>
            <p className="text-gray-400 text-sm mt-1">{item.description}</p>
            <div className="flex items-center justify-between mt-3">
                <span className="text-[#38BDF8] font-bold text-lg">${item.price}</span>
                <div className="flex gap-2">
                    <Link href={`/itemdetails/${item.id}`}>
                        <button className="btn btn-outline btn-sm">Details</button>
                    </Link>
                    <button className="btn btn-primary btn-sm">Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default ItemCard
