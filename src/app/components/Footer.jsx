export default function Footer() {
    return (
        <footer className="bg-[#194a7a] text-white px-6 py-10">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between gap-10 md:gap-0">
                <div className="flex flex-col gap-3">
                    <span className="text-xl font-bold">NextCart</span>
                    <a className="link link-hover">About Us</a>
                    <a className="link link-hover">Careers</a>
                    <a className="link link-hover">Blog</a>
                    <a className="link link-hover">Contact</a>
                </div>

                <div className="flex flex-col gap-3">
                    <span className="text-xl font-bold">Shop</span>
                    <a className="link link-hover">Electronics</a>
                    <a className="link link-hover">Fashion</a>
                    <a className="link link-hover">Accessories</a>
                    <a className="link link-hover">Shoes</a>
                </div>

                <div className="flex flex-col gap-3">
                    <span className="text-xl font-bold">Support</span>
                    <a className="link link-hover">FAQ</a>
                    <a className="link link-hover">Shipping</a>
                    <a className="link link-hover">Returns</a>
                    <a className="link link-hover">Privacy Policy</a>
                </div>

                {/* Optional social icons */}

                <div className="flex flex-col gap-3">
                    <span className="text-xl font-bold">Follow Us</span>
                    <div className="flex gap-4">
                        <a><img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" className="w-6 h-6" /></a>
                        <a><img src="https://cdn-icons-png.flaticon.com/512/733/733558.png" className="w-6 h-6" /></a>
                    </div>
                </div>

            </div>

            <div className="mt-10 text-center text-gray-300 text-sm">
                &copy; {new Date().getFullYear()} NextCart. All rights reserved.
            </div>
        </footer>
    )
}
