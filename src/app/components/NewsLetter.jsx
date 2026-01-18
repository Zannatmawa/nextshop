export default function Newsletter() {
    return (
        <section className="py-12 bg-white my-10">
            <div className="max-w-4xl mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 p-10 border border-slate-200 rounded-3xl bg-slate-100">

                    {/* Text Block */}
                    <div className="text-center md:text-left">
                        <h2 className="text-2xl font-black text-slate-900 leading-tight">
                            Join our newsletter
                        </h2>
                        <p className="text-sm text-slate-600 mt-2">
                            Get updates on new arrivals and exclusive deals.
                        </p>
                    </div>

                    {/* Compact Form */}
                    <form className="flex w-full md:w-auto gap-3">
                        <input
                            type="email"
                            required
                            placeholder="Email address"
                            className="flex-1 md:w-72 px-5 py-3 text-sm border border-slate-300 rounded-xl outline-none focus:border-blue-500 transition-colors bg-white text-slate-900"
                        />
                        <button
                            type="submit"
                            className="bg-[#194a7a] hover:bg-[#123557] text-white text-sm font-bold px-8 py-3 rounded-xl transition-all active:scale-95 shadow-md"
                        >
                            Subscribe
                        </button>
                    </form>

                </div>
            </div>
        </section>
    )
}