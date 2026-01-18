"use client"
import React, { useState } from "react"
import { useRouter } from "next/navigation"
// import toast, { Toaster } from "react-hot-toast"

const LoginPage = () => {
    const router = useRouter()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     if (email && password) {
    //         toast.success("Login Successful!")
    //         setTimeout(() => {
    //             router.push("/") // redirect after toast
    //         }, 1000)
    //     } else {
    //         toast.error("Please enter email and password")
    //     }
    // }

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#0B1120]">
            <Toaster position="top-right" />
            <div className="bg-[#111827] p-10 rounded-2xl shadow-xl w-full max-w-md">
                <h1 className="text-3xl font-bold text-white text-center mb-6">Login</h1>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="input input-bordered w-full bg-[#0B1120] text-white border-gray-600"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="input input-bordered w-full bg-[#0B1120] text-white border-gray-600"
                    />
                    <button type="submit" className="btn btn-primary mt-2">
                        Login
                    </button>
                </form>
                <p className="text-gray-400 text-center mt-4">
                    Don't have an account?{" "}
                    <a href="/register" className="text-[#38BDF8] hover:underline">
                        Register
                    </a>
                </p>
            </div>
        </div>
    )
}

export default LoginPage
