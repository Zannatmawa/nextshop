export default function Footer() {
    return (
        <footer className="footer flex justify-between p-10 bg-[#111827] text-white">
            <div>
                <span className="footer-title">NextCart</span>
                <a className="link link-hover">About Us</a>
                <a className="link link-hover">Careers</a>
                <a className="link link-hover">Blog</a>
                <a className="link link-hover">Contact</a>
            </div>
            <div>
                <span className="footer-title">Shop</span>
                <a className="link link-hover">Electronics</a>
                <a className="link link-hover">Fashion</a>
                <a className="link link-hover">Accessories</a>
                <a className="link link-hover">Shoes</a>
            </div>
            <div>
                <span className="footer-title">Support</span>
                <a className="link link-hover">FAQ</a>
                <a className="link link-hover">Shipping</a>
                <a className="link link-hover">Returns</a>
                <a className="link link-hover">Privacy Policy</a>
            </div>
            <div>
                <span className="footer-title">Follow Us</span>
                <div className="grid grid-flow-col gap-4">
                    <a><img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" className="w-6 h-6" /></a>
                    <a><img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" className="w-6 h-6" /></a>
                    <a><img src="https://cdn-icons-png.flaticon.com/512/733/733558.png" className="w-6 h-6" /></a>
                    <a><img src="https://cdn-icons-png.flaticon.com/512/733/733635.png" className="w-6 h-6" /></a>
                </div>
            </div>
            <div className="mt-10 text-center text-gray-400">
                &copy; {new Date().getFullYear()} NextCart. All rights reserved.
            </div>
        </footer>
    )
}
