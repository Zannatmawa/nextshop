"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Cookies from "js-cookie"

export default function AddItem() {
    const router = useRouter()
    const [loading, setLoading] = useState(true)
    const [itemName, setItemName] = useState("")
    const [itemPrice, setItemPrice] = useState("")
    const [itemImage, setItemImage] = useState("")
    const [message, setMessage] = useState("")

    useEffect(() => {
        const token = Cookies.get("auth_token")
        if (!token) {
            router.replace("/login")
        } else {
            setLoading(false)
        }
    }, [router])

    if (loading) return (
        <div className="min-h-screen flex items-center justify-center bg-white">
            <p className="text-[10px] uppercase tracking-widest text-slate-400 animate-pulse">Authenticating...</p>
        </div>
    )

    const handleSubmit = (e) => {
        e.preventDefault()
        setMessage(`"${itemName}" successfully added to catalog.`)
        setItemName("")
        setItemPrice("")
        setItemImage("")
        setTimeout(() => setMessage(""), 4000)
    }

    return (
        <div className="min-h-screen bg-slate-50/50 py-20 px-6 flex justify-center">
            <div className="bg-white p-8 md:p-12 rounded-[2rem] border border-slate-100 shadow-sm w-full max-w-md">

                <div className="text-center mb-10">
                    <span className="text-[10px] font-bold text-blue-600 uppercase tracking-[0.2em]">Inventory Management</span>
                    <h1 className="text-xl font-bold text-slate-900 mt-2">Add New Product</h1>
                </div>

                {message && (
                    <div className="bg-green-50 border border-green-100 text-green-600 text-[11px] py-3 px-4 rounded-xl mb-6 text-center font-medium">
                        {message}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 block">
                            Product Designation
                        </label>
                        <input
                            type="text"
                            value={itemName}
                            onChange={(e) => setItemName(e.target.value)}
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/5 transition-all outline-none text-xs text-slate-800 placeholder:text-slate-300"
                            placeholder="e.g. MacBook Air M3"
                            required
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 block">
                                Value (USD)
                            </label>
                            <input
                                type="number"
                                value={itemPrice}
                                onChange={(e) => setItemPrice(e.target.value)}
                                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 outline-none text-xs text-slate-800"
                                placeholder="0.00"
                                required
                            />
                        </div>
                        <div>
                            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 block">
                                Category
                            </label>
                            <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 outline-none text-xs text-slate-800 bg-white">
                                <option>Tech</option>
                                <option>Fashion</option>
                                <option>Accessories</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 block">
                            Asset URL
                        </label>
                        <input
                            type="text"
                            value={itemImage}
                            onChange={(e) => setItemImage(e.target.value)}
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 outline-none text-xs text-slate-800 placeholder:text-slate-300"
                            placeholder="https://images.unsplash.com/..."
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-[#194a7a] hover:bg-slate-900 text-white py-4 rounded-xl text-[10px] font-bold uppercase tracking-[0.2em] transition-all active:scale-[0.98] shadow-lg shadow-blue-900/10 mt-4"
                    >
                        Register Item
                    </button>
                </form>
            </div>
        </div>
    )
}