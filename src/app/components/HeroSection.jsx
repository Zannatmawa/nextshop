import React from 'react'

const HeroSection = () => {
    return (
        <section className="min-h-screen flex items-center justify-center ">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
                <div>
                    <h1 className="text-4xl md:text-5xl font-bold text-primary leading-tight">
                        Discover Premium Products <br /> For Your Lifestyle
                    </h1>
                    <p className="mt-4 text-gray-400">
                        Shop the latest trends with fast delivery and secure payments.
                    </p>
                    <div className="mt-6 flex gap-4">
                        <button className="btn btn-primary">Shop Now</button>
                        <button className="btn btn-outline">View Collections</button>
                    </div>
                </div>
                <div className="flex justify-center">
                    <img
                        src="https://i.ibb.co/3r1QwWq/shopping.png"
                        alt="Shopping"
                        className="w-full max-w-md"
                    />
                </div>
            </div>
        </section>

    )
}

export default HeroSection