"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Cookies from "js-cookie"

export default function Login() {
    const router = useRouter()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    // Hardcoded credentials
    const MOCK_EMAIL = "user@example.com"
    const MOCK_PASSWORD = "password123"

    const handleSubmit = (e) => {
        e.preventDefault()

        if (email === MOCK_EMAIL && password === MOCK_PASSWORD) {
            // Store auth token in cookies (expires in 1 day)
            Cookies.set("auth_token", "mocktoken123", { expires: 1 })
            Cookies.set("user_email", email, { expires: 1 })

            setError("")
            router.push("/")
        } else {
            setError("Invalid email or password")
        }
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900">
            <div className="bg-[#111827] p-10 rounded-2xl shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold text-white mb-6 text-center">Login</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        className="w-full p-3 rounded-lg bg-gray-800 text-white"
                        required
                    />
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        className="w-full p-3 rounded-lg bg-gray-800 text-white"
                        required
                    />

                    {error && <p className="text-red-500">{error}</p>}

                    <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg">
                        Login
                    </button>
                </form>
            </div>
        </div>
    )
}
