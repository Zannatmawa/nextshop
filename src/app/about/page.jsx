import React from 'react'

const About = () => {
    const stats = [
        { label: "Founded", value: "2022" },
        { label: "Happy Clients", value: "50k+" },
        { label: "Global Offices", value: "04" },
        { label: "Products", value: "1.2k+" },
    ]

    return (
        <div className="bg-white min-h-screen">
            {/* Minimalist Hero */}
            <section className="py-20 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <span className="text-[10px] font-bold text-blue-600 uppercase tracking-[0.3em]">
                        Our Essence
                    </span>
                    <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mt-6 tracking-tight leading-tight">
                        Redefining the way you <br /> experience technology.
                    </h1>
                    <p className="text-xs text-slate-500 mt-8 leading-relaxed max-w-xl mx-auto">
                        NextCart was born out of a simple idea: that premium tech should be accessible,
                        beautifully curated, and delivered with uncompromising speed.
                        We don't just sell gadgets; we curate tools for your lifestyle.
                    </p>
                </div>
            </section>

            {/* Simple Stats Grid */}
            <section className="py-12 border-y border-slate-50 bg-slate-50/50">
                <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, i) => (
                        <div key={i} className="text-center">
                            <p className="text-xl font-bold text-slate-900">{stat.value}</p>
                            <p className="text-[10px] text-slate-400 uppercase tracking-widest mt-1 font-semibold">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Our Values - Small & Clean */}
            <section className="py-24 px-6">
                <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
                    <div className="space-y-4">
                        <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 text-sm font-bold">01</div>
                        <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Quality First</h3>
                        <p className="text-xs text-slate-500 leading-loose">
                            Every item in our catalog undergoes rigorous testing to ensure it meets our "gold standard" of durability and performance.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <div className="w-8 h-8 rounded-lg bg-purple-50 flex items-center justify-center text-purple-600 text-sm font-bold">02</div>
                        <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Sustainability</h3>
                        <p className="text-xs text-slate-500 leading-loose">
                            We are committed to reducing our carbon footprint through eco-friendly packaging and carbon-neutral shipping options.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <div className="w-8 h-8 rounded-lg bg-green-50 flex items-center justify-center text-green-600 text-sm font-bold">03</div>
                        <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Human Support</h3>
                        <p className="text-xs text-slate-500 leading-loose">
                            No bots here. Our support team is made up of real people who love tech just as much as you do, available 24/7.
                        </p>
                    </div>
                </div>
            </section>

            {/* Bottom CTA Section */}
            <section className="pb-24 px-6">
                <div className="max-w-5xl mx-auto bg-slate-900 rounded-[2rem] p-12 text-center text-white relative overflow-hidden">
                    <div className="relative z-10">
                        <h2 className="text-2xl font-bold mb-4">Ready to upgrade your gear?</h2>
                        <button className="bg-white text-slate-900 text-[10px] font-bold px-8 py-3 rounded-full uppercase tracking-widest hover:bg-slate-200 transition-all">
                            Browse Collection
                        </button>
                    </div>
                    {/* Decorative Blur */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl"></div>
                </div>
            </section>
        </div>
    )
}

export default About