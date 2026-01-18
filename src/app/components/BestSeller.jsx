"use client"
import React from 'react'
import ItemCard from '../components/ItemCard'
import Link from 'next/link'

export default function BestSellers() {
    // We can manually pick best sellers or just take the first 4 from a list
    const bestSellers = [
        {
            id: 1,
            name: "Premium Wireless Headphones",
            price: 199,
            image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=800",
            category: "Electronics"
        },
        {
            id: 2,
            name: "Classic Denim Jacket",
            price: 89,
            image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&q=80&w=800",
            category: "Fashion"
        },
        {
            id: 3,
            name: "Urban Explorer Backpack",
            price: 129,
            image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=800",
            category: "Accessories"
        },
        {
            id: 4,
            name: "Minimalist Leather Shoes",
            price: 59,
            image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=800",
            category: "Shoes"
        },
    ]

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">

                <div className="flex flex-col items-center mb-16 text-center">
                    <span className="text-[10px] font-bold text-blue-600 uppercase tracking-[0.3em] mb-4">
                        Top Rated
                    </span>
                    <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">
                        Best Sellers
                    </h2>
                    <p className="text-slate-400 text-sm mt-4 max-w-md font-medium">
                        Our most loved pieces, curated for quality and style.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {bestSellers.map((item) => (
                        <ItemCard key={item.id} item={item} />
                    ))}
                </div>

                <div className="flex justify-center mt-20">
                    <Link
                        href="/items"
                        className="px-12 py-4 border border-slate-200 text-slate-900 hover:bg-slate-900 hover:text-white font-bold rounded-2xl transition-all duration-300 uppercase text-[10px] tracking-[0.2em]"
                    >
                        Explore All Items
                    </Link>
                </div>
            </div>
        </section>
    )
}