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
    }, [])

    if (loading) return <p className="text-white text-center mt-20">Loading...</p>

    const handleSubmit = (e) => {
        e.preventDefault()
        setMessage(`Item "${itemName}" added successfully!`)
        setItemName("")
        setItemPrice("")
        setItemImage("")
    }

    return (
        <div className="min-h-screen bg-[#111827] py-20 px-6 flex justify-center">
            <div className="bg-[#1F2937] p-10 rounded-2xl shadow-lg w-full max-w-lg">
                <h1 className="text-3xl font-bold text-white mb-6 text-center">Add New Item</h1>

                {message && (
                    <p className="bg-green-600 text-white py-2 px-4 rounded mb-4 text-center">{message}</p>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label className="text-gray-300 mb-1 block">Item Name</label>
                        <input
                            type="text"
                            value={itemName}
                            onChange={(e) => setItemName(e.target.value)}
                            className="w-full p-3 rounded-lg bg-gray-800 text-white"
                            placeholder="Product Name"
                            required
                        />
                    </div>

                    <div>
                        <label className="text-gray-300 mb-1 block">Price ($)</label>
                        <input
                            type="number"
                            value={itemPrice}
                            onChange={(e) => setItemPrice(e.target.value)}
                            className="w-full p-3 rounded-lg bg-gray-800 text-white"
                            placeholder="Price"
                            required
                        />
                    </div>

                    <div>
                        <label className="text-gray-300 mb-1 block">Image URL</label>
                        <input
                            type="text"
                            value={itemImage}
                            onChange={(e) => setItemImage(e.target.value)}
                            className="w-full p-3 rounded-lg bg-gray-800 text-white"
                            placeholder="https://example.com/product.png"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-[#800022] hover:bg-[#a13a3e] text-white py-3 rounded-xl font-bold transition"
                    >
                        Add Item
                    </button>
                </form>
            </div>
        </div>
    )
}
