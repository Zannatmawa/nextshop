import React from 'react'
import Link from 'next/link'

const ItemCard = ({ item }) => {
    return (
        <div className="group bg-white  border-2  rounded-2xl  border-slate-300 p-4 transition-all duration-300 hover:shadow-xl hover:shadow-slate-200/50">
            {/* Image Container with small tag */}
            <div className="relative  w-full h-44 bg-slate-50 rounded-xl overflow-hidden mb-4 flex items-center justify-center">
                <img
                    src={item.image}
                    alt={item.name}
                    className="w-2/3 h-2/3 object-contain transition-transform duration-500 group-hover:scale-110"
                />
                <span className="absolute top-3 left-3 bg-white/80 backdrop-blur-sm text-[9px] font-bold px-2 py-1 rounded text-slate-500 uppercase tracking-tight">
                    New
                </span>
            </div>
            <div className="px-1 ">
                <h3 className="text-slate-800 font-bold text-sm truncate">{item.name}</h3>
                <p className="text-slate-400 text-[10px] mt-1 line-clamp-1 leading-relaxed">
                    {item.description}
                </p>

                <div className="flex items-center justify-between mt-4 pt-3 border-t border-slate-50">
                    <span className="text-slate-900 font-black text-sm">${item.price}</span>

                    <div className="flex gap-1.5">
                        <Link href={`/itemdetails/${item.id}`}>
                            <button className="text-[10px] font-bold text-slate-400 hover:text-slate-900 transition-colors px-2 py-1">
                                Details
                            </button>
                        </Link>
                        <button className="bg-[#194a7a] hover:bg-[#0B1120] text-white text-[9px] font-bold px-3 py-1.5 rounded-lg transition-all active:scale-95 uppercase tracking-wider">
                            Add
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemCard