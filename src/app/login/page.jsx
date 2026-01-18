"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Cookies from "js-cookie"

export default function Login() {
    const router = useRouter()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const MOCK_EMAIL = "nextcart@example.com"
    const MOCK_PASSWORD = "password123"

    const handleSubmit = (e) => {
        e.preventDefault()

        if (email === MOCK_EMAIL && password === MOCK_PASSWORD) {
            Cookies.set("auth_token", "mocktoken123", { expires: 1 })
            Cookies.set("user_email", email, { expires: 1 })

            setError("")
            router.push("/")
        } else {
            setError("Invalid email or password")
        }
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-slate-50 px-6">
            <div className="bg-white p-10 md:p-14 rounded-[2.5rem] border border-slate-200 shadow-sm w-full max-w-md">

                <div className="text-center mb-10">
                    <span className="text-[10px] font-bold text-blue-600 uppercase tracking-[0.3em]">
                        Welcome Back
                    </span>
                    <h2 className="text-3xl font-black text-slate-900 mt-3">Login</h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email address"
                            className="w-full p-4 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 text-sm outline-none focus:border-blue-500 transition-all"
                            required
                        />
                    </div>

                    <div>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                            className="w-full p-4 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 text-sm outline-none focus:border-blue-500 transition-all"
                            required
                        />
                    </div>

                    {error && (
                        <p className="text-red-500 text-xs font-bold uppercase tracking-wider text-center py-2">
                            {error}
                        </p>
                    )}

                    <button
                        type="submit"
                        className="w-full bg-[#194a7a] hover:bg-slate-900 text-white py-4 rounded-2xl font-bold text-sm transition-all active:scale-95 shadow-lg shadow-blue-900/10 mt-4"
                    >
                        Sign In
                    </button>
                </form>

                <p className="text-center mt-8 text-xs text-slate-400">
                    Test access: <span className="text-slate-600 font-medium">nextcart@example.com / password123</span>
                </p>
            </div>
        </div>
    )
}