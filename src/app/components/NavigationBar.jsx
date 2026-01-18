"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const NavigationBar = () => {
    const pathname = usePathname()

    const links = [
        { href: '/', label: 'Home' },
        { href: '/items', label: 'Items' },
        { href: '/about', label: 'About' },
        { href: '/services', label: 'Services' },
    ]

    return (
        <div className="navbar shadow-lg bg-[#800022] text-white sticky top-0 z-50">
            {/* Navbar Start */}
            <div className="navbar-start">
                {/* Mobile Dropdown */}
                <div className="dropdown">
                    <div tabIndex={0} className="btn btn-ghost lg:hidden" aria-label="Menu">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </div>

                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow space-y-2"
                    >
                        {links.map((link) => (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    className={pathname === link.href ? 'text-yellow-400 font-semibold' : ''}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Logo */}
                <Link href="/" className="btn btn-ghost text-xl">
                    NextCart
                </Link>
            </div>

            {/* Navbar Center (Desktop Menu) */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 space-x-5">
                    {links.map((link) => (
                        <li key={link.href}>
                            <Link
                                href={link.href}
                                className={pathname === link.href ? 'text-yellow-400 font-semibold' : ''}
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Navbar End */}
            <div className="navbar-end">
                <Link href="/login" className="btn">
                    Login
                </Link>
            </div>
        </div>
    )
}

export default NavigationBar
