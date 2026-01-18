"use client"
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import Cookies from "js-cookie"

const NavigationBar = () => {
    const pathname = usePathname();
    const router = useRouter();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [mounted, setMounted] = useState(false);

    // Prevent hydration mismatch
    useEffect(() => {
        setMounted(true);
        const token = Cookies.get("auth_token");
        setIsLoggedIn(!!token);
    }, []);

    const handleLogout = () => {
        Cookies.remove("auth_token");
        Cookies.remove("user_email");
        setIsLoggedIn(false);
        router.push("/login");
    };

    const links = [
        { href: '/', label: 'Home' },
        { href: '/items', label: 'Items' },
        { href: '/about', label: 'About' },
        { href: '/services', label: 'Services' },
    ];

    if (!mounted) return null;

    return (
        <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#194a7a] backdrop-blur-md text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">

                    {/* Brand Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="text-2xl font-black tracking-tighter hover:opacity-80 transition">
                            NEXT<span className="text-blue-500">CART</span>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-8">
                        {links.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`relative text-sm font-medium transition-colors hover:text-blue-400 ${pathname === link.href ? 'text-blue-400' : 'text-gray-300'
                                    }`}
                            >
                                {link.label}
                                {pathname === link.href && (
                                    <span className="absolute -bottom-[21px] left-0 w-full h-0.5 bg-blue-500 rounded-full" />
                                )}
                            </Link>
                        ))}
                        {isLoggedIn ? (
                            <div className="flex items-center space-x-3">
                                <Link href="/addtocart" className="hidden md:block text-sm font-medium hover:text-blue-400">
                                    Add Product
                                </Link>
                            </div>
                        ) : (
                            <>
                            </>
                        )}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center space-x-5">


                        {isLoggedIn ? (
                            <div className="flex items-center space-x-3">

                                <button
                                    onClick={handleLogout}
                                    className="bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg text-sm font-semibold transition"
                                >
                                    Logout
                                </button>
                            </div>
                        ) : (
                            <Link
                                href="/login"
                                className="bg-blue-600 hover:bg-blue-500 px-6 py-2 rounded-full text-sm font-bold transition-all shadow-lg shadow-blue-500/25"
                            >
                                Login
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavigationBar;