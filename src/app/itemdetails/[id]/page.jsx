import products from "../../data/Products.json"
import Image from "next/image"

const ProductDetails = async ({ params }) => {
    // Await params if using Next.js 15, otherwise direct access is fine in 13/14
    const product = products.find(p => p.id === parseInt(params.id))

    if (!product) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[50vh] text-slate-500">
                <p className="text-sm">Product not found</p>
            </div>
        )
    }

    return (
        <div className="bg-white min-h-screen">
            <div className="max-w-6xl mx-auto px-6 py-12 md:py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-start">

                    {/* Left: Product Image */}
                    <div className="bg-slate-50 rounded-3xl overflow-hidden p-8 border border-slate-100 shadow-sm">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-auto object-contain mix-blend-multiply"
                        />
                    </div>

                    {/* Right: Product Content */}
                    <div className="flex flex-col">
                        <div className="border-b border-slate-100 pb-6">
                            <span className="text-[10px] font-bold text-blue-600 uppercase tracking-[0.2em]">
                                {product.category || "Premium Collection"}
                            </span>
                            <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mt-2 tracking-tight">
                                {product.name}
                            </h1>
                            <p className="text-xl font-medium text-slate-700 mt-4">
                                {product.price}
                            </p>
                        </div>

                        <div className="py-6">
                            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
                                Description
                            </h4>
                            <p className="text-xs text-slate-500 leading-relaxed max-w-md">
                                {product.description || "Experience the perfect blend of style and performance with the NextCart series. Crafted with premium materials for lasting durability and comfort."}
                            </p>
                        </div>

                        {/* Availability Badge */}
                        <div className="flex items-center gap-2 mb-8">
                            <span className="w-2 h-2 rounded-full bg-green-500"></span>
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">In Stock & Ready to Ship</span>
                        </div>

                        {/* Action Area */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="flex-1 bg-[#194a7a] hover:bg-[#0B1120] text-white text-xs font-bold py-4 rounded-xl transition-all duration-300 active:scale-95 shadow-lg shadow-blue-900/10">
                                Add to Cart
                            </button>
                            <button className="px-8 py-4 border border-slate-200 text-slate-600 text-xs font-bold rounded-xl hover:bg-slate-50 transition-colors">
                                Wishlist
                            </button>
                        </div>

                        {/* Additional Info */}
                        <div className="mt-10 grid grid-cols-2 gap-4 border-t border-slate-100 pt-8">
                            <div>
                                <p className="text-[10px] text-slate-400 uppercase font-bold">Shipping</p>
                                <p className="text-[11px] text-slate-600 mt-1">Free worldwide delivery</p>
                            </div>
                            <div>
                                <p className="text-[10px] text-slate-400 uppercase font-bold">Returns</p>
                                <p className="text-[11px] text-slate-600 mt-1">30-day money back guarantee</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails;