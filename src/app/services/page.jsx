import React from 'react'

const Services = () => {
    const services = [
        {
            title: "Global Logistics",
            desc: "Seamless international shipping with real-time tracking and secure customs handling.",
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        },
        {
            title: "Tech Support",
            desc: "Expert 24/7 technical assistance for all devices purchased through our platform.",
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
            )
        },
        {
            title: "Trade-In Program",
            desc: "Get instant credit toward new gear when you recycle your old devices with us.",
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
            )
        },
        {
            title: "Extended Warranty",
            desc: "Comprehensive protection plans that cover accidental damage and hardware failure.",
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            )
        },
        {
            title: "Business Solutions",
            desc: "Bulk ordering and custom configurations for corporate fleets and startups.",
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
            )
        },
        {
            title: "Safe Payments",
            desc: "Fully encrypted transaction processing with support for all major crypto and fiat.",
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        }
    ]

    return (
        <section className="bg-white py-20">
            <div className="max-w-6xl mx-auto px-6">
                {/* Header Area */}
                <div className="max-w-xl mb-16">
                    <span className="text-[10px] font-bold text-blue-600 uppercase tracking-[0.3em]">
                        How we help
                    </span>
                    <h2 className="text-2xl font-bold text-slate-900 mt-4 tracking-tight">
                        Our Services
                    </h2>
                    <p className="text-xs text-slate-500 mt-4 leading-relaxed">
                        Beyond just a marketplace, we offer a comprehensive ecosystem designed to support your technical journey from purchase to upgrade.
                    </p>
                </div>

                {/* Grid Area */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8">
                    {services.map((service, i) => (
                        <div key={i} className="group">
                            <div className="text-slate-900 mb-5 p-3 bg-slate-50 w-fit rounded-xl group-hover:bg-[#194a7a] group-hover:text-white transition-colors duration-300">
                                {service.icon}
                            </div>
                            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2">
                                {service.title}
                            </h3>
                            <p className="text-[11px] text-slate-400 leading-relaxed">
                                {service.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Services