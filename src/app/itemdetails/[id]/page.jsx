import products from "../../data/Products.json"
import Image from "next/image"

const ProductDetails = async ({ params }) => {
    const product = await products.find(p => p.id === parseInt(params.id))

    if (!product) {
        return <div className="text-white text-center py-20">Product not found</div>
    }

    return (
        <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10">
            <div className="bg-[#111827] rounded-xl p-6 flex justify-center">
                <Image
                    src={product.image}
                    alt={product.name}
                    width={400}
                    height={400}
                    className="object-contain"
                />
            </div>

            <div>
                <h1 className="text-3xl font-bold text-white">{product.name}</h1>
                <p className="text-gray-400 mt-3">{product.description}</p>

                <p className="text-[#38BDF8] text-2xl font-semibold mt-4">
                    ${product.price}
                </p>

                <p className="text-gray-300 mt-2">Brand: {product.brand}</p>
                <p className="text-yellow-400 mt-1">Rating: {product.rating} ★</p>

                <div className="mt-6 flex gap-4">
                    <button className="btn btn-primary">Add to Cart</button>
                    <button className="btn btn-outline">Buy Now</button>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails
