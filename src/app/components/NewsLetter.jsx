export default function Newsletter() {
    return (
        <section className="py-12 bg-white my-10">
            <div className="max-w-4xl mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 p-8 border border-slate-100 rounded-2xl bg-slate-50">

                    {/* Text Block */}
                    <div className="text-center md:text-left">
                        <h2 className="text-lg font-bold text-slate-900 leading-tight">
                            Join our newsletter
                        </h2>
                        <p className="text-xs text-slate-500 mt-1">
                            Get updates on new arrivals and exclusive deals.
                        </p>
                    </div>

                    {/* Compact Form */}
                    <form className="flex w-full md:w-auto gap-2">
                        <input
                            type="email"
                            required
                            placeholder="Email address"
                            className="flex-1 md:w-64 px-4 py-2 text-xs border border-slate-200 rounded-lg outline-none focus:border-blue-500 transition-colors bg-white text-slate-900"
                        />
                        <button
                            type="submit"
                            className="bg-[#194a7a] hover:bg-[#123557] text-white text-xs font-bold px-5 py-2 rounded-lg transition-all active:scale-95"
                        >
                            Subscribe
                        </button>
                    </form>

                </div>
            </div>
        </section>
    )
}