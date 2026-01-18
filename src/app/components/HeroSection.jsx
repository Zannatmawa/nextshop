import React from 'react'

const HeroSection = () => {
    return (
        <section className="min-h-screen text-black flex items-center justify-center ">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
                <div>
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                        Discover Premium <span className='text-[#800022]'>Products</span> <br /> For Your Lifestyle
                    </h1>
                    <p className="mt-4 text-gray-500">
                        Shop the latest trends with fast delivery and secure payments.
                    </p>
                    <div className="mt-6 flex gap-4">
                        <button className="btn text-white bg-[#800022]">Shop Now</button>
                        <button className="btn btn-outline hover:text-white hover:bg-[#800022]">View Collections</button>
                    </div>
                </div>
                <div className="flex justify-center">
                    <img
                        src="/public/images/women1.jpg"
                        alt="Shopping"
                        className="w-full max-w-md"
                    />
                </div>
            </div>
        </section>

    )
}

export default HeroSection