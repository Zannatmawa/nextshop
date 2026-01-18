import products from "../../data/Products.json"

// Note: params must be awaited in Next.js 15
const ProductDetails = async ({ params }) => {
    // 1. Await params to ensure the object is accessible
    const resolvedParams = await params;

    // 2. Find product - we check both Number and String to be safe
    const product = products.find(p => String(p.id) === String(resolvedParams.id));

    if (!product) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen text-slate-500 bg-white">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] mb-2">404 Error</span>
                <h1 className="text-xl font-black text-slate-900">Product not found</h1>
                <p className="text-xs mt-4">The item you are looking for does not exist or has been moved.</p>
            </div>
        )
    }

    return (
        <div className="bg-white min-h-screen">
            <div className="max-w-6xl mx-auto px-6 py-12 md:py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-start">

                    {/* Left: Product Image */}
                    <div className="bg-slate-50 rounded-[2.5rem] overflow-hidden p-12 border border-slate-100 shadow-sm transition-hover hover:shadow-md duration-500">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-auto object-contain mix-blend-multiply transition-transform duration-700 hover:scale-105"
                        />
                    </div>

                    {/* Right: Product Content */}
                    <div className="flex flex-col pt-4">
                        <div className="border-b border-slate-100 pb-8">
                            <span className="text-[10px] font-bold text-blue-600 uppercase tracking-[0.3em]">
                                {product.category || "Premium Collection"}
                            </span>
                            <h1 className="text-3xl md:text-4xl font-black text-slate-900 mt-4 tracking-tight">
                                {product.name}
                            </h1>
                            <p className="text-2xl font-bold text-slate-800 mt-6">
                                {product.price}
                            </p>
                        </div>

                        <div className="py-8">
                            <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-4">
                                Description
                            </h4>
                            <p className="text-sm text-slate-500 leading-relaxed max-w-md">
                                {product.description || "Experience the perfect blend of style and performance with the NextCart series. Crafted with premium materials for lasting durability and comfort."}
                            </p>
                        </div>

                        {/* Availability Badge */}
                        <div className="flex items-center gap-3 mb-10 bg-slate-50 w-fit px-4 py-2 rounded-full border border-slate-100">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                            </span>
                            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">In Stock & Ready to Ship</span>
                        </div>

                        {/* Action Area */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="flex-[2] bg-[#194a7a] hover:bg-slate-900 text-white text-[10px] font-bold uppercase tracking-widest py-5 rounded-2xl transition-all duration-300 active:scale-95 shadow-xl shadow-blue-900/10">
                                Add to Shopping Bag
                            </button>
                            <button className="flex-1 px-8 py-5 border border-slate-200 text-slate-400 hover:text-red-500 hover:border-red-100 text-[10px] font-bold uppercase tracking-widest rounded-2xl hover:bg-red-50 transition-all">
                                Wishlist
                            </button>
                        </div>

                        {/* Additional Info */}
                        <div className="mt-12 grid grid-cols-2 gap-8 border-t border-slate-100 pt-10">
                            <div>
                                <p className="text-[9px] text-slate-400 uppercase font-black tracking-tighter">Logistics</p>
                                <p className="text-[11px] font-bold text-slate-600 mt-2">Free worldwide delivery</p>
                            </div>
                            <div>
                                <p className="text-[9px] text-slate-400 uppercase font-black tracking-tighter">Support</p>
                                <p className="text-[11px] font-bold text-slate-600 mt-2">30-day money back</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails;