"use client"
import React, { useState } from 'react'
import productsData from '../data/Products.json'
import ItemCard from '../components/ItemCard'

const Items = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [sortOrder, setSortOrder] = useState(""); // "high" or "low"

    // Logic for Search and Sorting
    const filteredProducts = productsData
        .filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase()))
        .sort((a, b) => {
            if (sortOrder === "high") return b.price - a.price;
            if (sortOrder === "low") return a.price - b.price;
            return 0;
        });

    return (
        <div className='max-w-7xl mx-auto px-6 pb-20'>
            <div className='flex flex-col md:flex-row justify-between items-center my-12 gap-6'>
                <div className="relative w-full md:w-96">
                    <input
                        type="text"
                        placeholder="Search products..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-sm outline-none focus:border-blue-500 transition-all text-slate-900"
                    />
                    <svg className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </div>

                <div className="dropdown dropdown-end">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn bg-white border border-slate-200 hover:bg-slate-50 rounded-2xl px-8 text-xs font-bold uppercase tracking-widest text-slate-700 h-auto py-4"
                    >
                        {sortOrder === "high" ? "Price: High to Low" : sortOrder === "low" ? "Price: Low to High" : "Sort by Price"}
                    </div>
                    <ul
                        tabIndex={0}
                        className="dropdown-content menu p-2 shadow-xl bg-white rounded-2xl w-52 mt-2 border border-slate-100 z-50">
                        <li>
                            <button onClick={() => setSortOrder("high")} className="text-xs font-bold p-3 text-slate-600">High to Low</button>
                        </li>
                        <li>
                            <button onClick={() => setSortOrder("low")} className="text-xs font-bold p-3 text-slate-600">Low to High</button>
                        </li>
                        <li>
                            <button onClick={() => setSortOrder("")} className="text-xs font-bold p-3 text-red-400">Clear Filter</button>
                        </li>
                    </ul>
                </div>
            </div>

            {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {filteredProducts.map(item => (
                        <ItemCard key={item.id} item={item} />
                    ))}
                </div>
            ) : (
                <div className="text-center py-20">
                    <p className="text-slate-400 text-sm font-medium">No products found matching your search.</p>
                </div>
            )}
        </div>
    )
}

export default Items