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
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        setMounted(true);
        const token = Cookies.get("auth_token");
        setIsLoggedIn(!!token);
    }, []);

    const handleLogout = () => {
        Cookies.remove("auth_token");
        setIsLoggedIn(false);
        setMobileMenuOpen(false);
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
        <nav className="sticky top-0 z-50 w-full border-b border-slate-100 bg-blue-900  backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex h-16 items-center justify-between">

                    {/* Brand */}
                    <Link href="/" className="text-sm font-black tracking-tighter text-white">
                        NEXT<span className="text-blue-600">CART</span>
                    </Link>

                    {/* Desktop Links (Hidden on Mobile) */}
                    <div className="hidden md:flex items-center  space-x-8">
                        {links.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`text-[11px] uppercase tracking-widest font-bold transition-colors hover:text-blue-600 ${pathname === link.href ? 'text-amber-600' : 'text-white'
                                    }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                        {isLoggedIn ? (
                            <>
                                <Link href="/addtocart" className="text-[10px] font-bold text-slate-400 uppercase tracking-wider hover:text-slate-900">
                                    + Add Item
                                </Link>

                            </>
                        ) : (
                            <>
                            </>
                        )}
                    </div>

                    {/* Desktop Actions */}
                    <div className="hidden md:flex items-center space-x-4">
                        {isLoggedIn ? (
                            <>

                                <button onClick={handleLogout} className="text-[10px] font-bold bg-slate-900 text-white px-4 py-2 rounded-lg uppercase tracking-widest">
                                    Logout
                                </button>
                            </>
                        ) : (
                            <Link href="/login" className="text-[10px] font-bold bg-blue-600 text-white px-5 py-2 rounded-lg uppercase tracking-widest hover:bg-blue-700 transition-all">
                                Login
                            </Link>
                        )}
                    </div>

                    {/* Mobile Toggle (Visible on Small Screens) */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden p-2 text-slate-600"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {mobileMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {mobileMenuOpen && (
                <div className="md:hidden bg-white border-b border-slate-100 px-6 py-8 space-y-6 animate-in slide-in-from-top duration-300">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block text-[10px] font-bold uppercase tracking-[0.2em] "
                        >
                            {link.label}
                        </Link>
                    ))}
                    <div className="pt-4 border-t border-slate-50 space-y-4">
                        {isLoggedIn ? (
                            <>
                                <Link href="/additem" onClick={() => setMobileMenuOpen(false)} className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                                    Add Item
                                </Link>
                                <button onClick={handleLogout} className="w-full text-center text-[10px] font-bold bg-slate-900 text-white py-3 rounded-lg uppercase tracking-widest">
                                    Logout
                                </button>
                            </>
                        ) : (
                            <Link href="/login" onClick={() => setMobileMenuOpen(false)} className="block w-full text-center text-[10px] font-bold bg-blue-600 text-white py-3 rounded-lg uppercase tracking-widest">
                                Login
                            </Link>
                        )}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default NavigationBar;