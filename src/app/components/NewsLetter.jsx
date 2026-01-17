export default function Newsletter() {
    return (
        <section className="py-20 bg-[#0B1120]">
            <div className="max-w-3xl mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold text-white mb-4">Subscribe to Our Newsletter</h2>
                <p className="text-gray-400 mb-6">Get the latest updates and exclusive offers.</p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="input input-bordered w-full sm:w-auto flex-1 bg-[#111827] text-white border-gray-600"
                    />
                    <button className="btn btn-primary">Subscribe</button>
                </div>
            </div>
        </section>
    )
}
