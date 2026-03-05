import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { MdLocationOn, MdEmail } from 'react-icons/md';
import { IoLogoWhatsapp } from 'react-icons/io';
import { Link, useLocation } from 'react-router-dom';
import logo from "../assets/logo.png"


const Footer = ({ showBrandsDirectory = false }) => {
    const location = useLocation();
    const isHomePage = location.pathname === '/' || location.pathname === '/home';
    const shouldShowBrands = isHomePage || showBrandsDirectory;

    return (
        <footer className="bg-white font-sans text-gray-600">
            {/* Top Section: Brands Directory - Only show on home page */}
            {shouldShowBrands && (
                <div className="border-t border-b py-10 px-4 md:px-10 lg:px-20 bg-gray-50/50">
                    <h2 className="text-center font-bold text-gray-800 mb-8 tracking-wider">BRANDS DIRECTORY</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto text-sm">
                        {/* Jewelry & Footwear */}
                        <div className="space-y-6">
                            <p><span className="font-bold text-gray-800">Jewellery :</span> Necklace | Earrings | Couple Rings | Pendants | Crystal | Bangles | Bracelets | Nose Pin | Chain</p>
                            <p><span className="font-bold text-gray-800">Footwear :</span> Sport | Formal | Boots | Casual | Cowboy Shoes | Safety Shoes | Party Wear Shoes | Branded | First Copy</p>
                        </div>
                        {/* Fashion & Cosmetics */}
                        <div className="space-y-6">
                            <p><span className="font-bold text-gray-800">Fashion :</span> T-Shirt | Short & Jeans | Jacket | Dress & Frock | Inner Wear | Hosiery</p>
                            <p><span className="font-bold text-gray-800">Cosmetics :</span> Shampoo | Body Wash | Face Wash | Makeup Kit | Liner | Lipstick | Perfume | Body Shop | Scrub | Hair Gel | Hair Colors</p>
                        </div>
                    </div>
                </div>
            )}

            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto py-12 px-4 md:px-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
                {/* Brand Info */}
                <div className="lg:col-span-1">
                    <div className="flex items-center gap-2 mb-4">
                       
                        <div>
                            <img
                                src={logo}
                                alt="Blueberry Logo"
                                className="h-12 w-auto object-contain transition-transform group-hover:scale-105"
                            />
                        </div>
                    </div>
                    <p className="text-sm leading-relaxed mb-6">
                        BlueBerry is the biggest market of grocery products. Get your daily needs from our store.
                    </p>
                    <div className="flex flex-col gap-3">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="w-32 cursor-pointer" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" className="w-32 cursor-pointer" />
                    </div>
                </div>

                {/* Links Sections */}
                <div>
                    <h3 className="font-bold text-gray-800 border-b pb-2 mb-4">Category</h3>
                    <ul className="space-y-2 text-sm">
                        <li><Link to="/category" className="hover:text-blue-500">All Products</Link></li>
                        <li><Link to="/category?category=Sweets" className="hover:text-blue-500">Sweets</Link></li>
                        <li><Link to="/category?category=Juice" className="hover:text-blue-500">Juice</Link></li>
                        <li><Link to="/category?category=Nuts" className="hover:text-blue-500">Nuts</Link></li>
                        <li><Link to="/category?category=Bakery" className="hover:text-blue-500">Bakery</Link></li>
                        <li><Link to="/category?category=Fruits" className="hover:text-blue-500">Fruits</Link></li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-bold text-gray-800 border-b pb-2 mb-4">Company</h3>
                    <ul className="space-y-2 text-sm">
                        <li><Link to="/about" className="hover:text-blue-500">About us</Link></li>
                        <li><a href="#" className="hover:text-blue-500">Delivery</a></li>
                        <li><a href="#" className="hover:text-blue-500">Legal Notice</a></li>
                        <li><a href="#" className="hover:text-blue-500">Terms & conditions</a></li>
                        <li><a href="#" className="hover:text-blue-500">Secure payment</a></li>
                        <li><Link to="/contact" className="hover:text-blue-500">Contact us</Link></li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-bold text-gray-800 border-b pb-2 mb-4">Account</h3>
                    <ul className="space-y-2 text-sm">
                        <li><Link to="/login" className="hover:text-blue-500">Sign In</Link></li>
                        <li><Link to="/cart" className="hover:text-blue-500">View Cart</Link></li>
                        <li><a href="#" className="hover:text-blue-500">Return Policy</a></li>
                        <li><a href="#" className="hover:text-blue-500">Become a Vendor</a></li>
                        <li><a href="#" className="hover:text-blue-500">Affiliate Program</a></li>
                        <li><a href="#" className="hover:text-blue-500">Payments</a></li>
                    </ul>
                </div>

                {/* Contact Section */}
                <div>
                    <h3 className="font-bold text-gray-800 border-b pb-2 mb-4">Contact</h3>
                    <ul className="space-y-4 text-sm">
                        <li className="flex gap-3">
                            <MdLocationOn className="text-blue-500 text-xl shrink-0" />
                            <span>971 Lajamni, Motavarachha, Surat, Gujarat, India 394101.</span>
                        </li>
                        <li className="flex gap-3">
                            <IoLogoWhatsapp className="text-blue-500 text-xl shrink-0" />
                            <span>+91 8980809800</span>
                        </li>
                        <li className="flex gap-3">
                            <MdEmail className="text-blue-500 text-xl shrink-0" />
                            <span>hvaghani89@gmail.com</span>
                        </li>
                    </ul>
                    <div className="flex gap-2 mt-6">
                        {[FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram].map((Icon, idx) => (
                            <div key={idx} className="w-8 h-8 bg-gray-700 text-white flex items-center justify-center rounded cursor-pointer hover:bg-blue-600 transition-colors">
                                <Icon size={14} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="bg-gray-50 border-t py-6">
                <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm">Copyright © 2026 <span className="text-blue-500 font-semibold">BlueBerry</span> all rights reserved.</p>
                    <div className="flex gap-2 grayscale opacity-70">
                        {/* Using text icons or images for payment methods */}
                        <div className="border px-2 py-1 bg-white text-[10px] font-bold">VISA</div>
                        <div className="border px-2 py-1 bg-white text-[10px] font-bold">MasterCard</div>
                        <div className="border px-2 py-1 bg-white text-[10px] font-bold">PayPal</div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;