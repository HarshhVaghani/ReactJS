import React from 'react';
import { Star, Heart, ShoppingBag, Eye, RefreshCw } from 'lucide-react';
import { useCartWishlist } from '../context/CartWishlistContext';
import ChocolateProduct from "../assets/productImage/chocolate.jpg"
import Juice from "../assets/productImage/juice.jpg"
import Almond from "../assets/productImage/almond.jpg"
import AlmondHover from "../assets/productImage/almondHover.jpg"
import Juices from "../assets/productImage/onedemo.jpg"
import JuiceHover from "../assets/productImage/juiceHover.jpg"

const products = [
    { id: 1, tag: 'New', category: 'Chocos', name: "Mixed Fruits Chocolates Pack", price: '$16', oldPrice: '$20', rating: 4, stock: '1 Pack', image: ChocolateProduct, hoverImage: ChocolateProduct },
    { id: 2, tag: 'Hot', category: 'Juice', name: "Organic Apple Juice Pack", price: '$36', oldPrice: '$45', rating: 4, stock: '100 ml', image: Juices, hoverImage: Juices },
    { id: 3, tag: 'Sale', category: 'Almonds', name: "Mixed Almond nuts pack", price: '$32', oldPrice: '$39', rating: 5, stock: '250 g', image: Almond, hoverImage: AlmondHover },
    { id: 4, tag: 'Sale', category: 'Fruits', name: "Fresh Mango Slice Juice", price: '$25', oldPrice: '$30', rating: 4, stock: 'Out Of Stock', image: Juice, hoverImage: JuiceHover },
];

export default function ProductGrid() {
    const { addToCart, addToWishlist } = useCartWishlist();

    const handleAddToCart = (product) => {
        addToCart(product);
    };

    const handleAddToWishlist = (product) => {
        addToWishlist(product);
    };

    const handleView = (product) => {
        alert(`Viewing ${product.name}`);
    };

    const handleRefresh = (product) => {
        console.log('refresh/compare', product);
    };

    return (
        <section className="max-w-[1440px] mx-auto px-10 py-12 font-sans bg-white">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="group relative bg-white border border-gray-100 rounded-[35px] p-5 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-50/50 flex flex-col h-full"
                    >
                        {/* 1. TOP-LEFT VERTICAL TAG */}
                        {product.tag && (
                            <div className="absolute top-6 left-6 flex flex-col gap-0.5 z-20 pointer-events-none">
                                {product.tag.split('').map((char, i) => (
                                    <span
                                        key={i}
                                        className="text-[11px] font-black text-gray-300 leading-none uppercase tracking-tighter block text-center"
                                    >
                                        {char}
                                    </span>
                                ))}
                            </div>
                        )}

                        {/* 2. IMAGE AREA & SLIDE-UP ACTIONS */}
                        <div className="relative aspect-square bg-[#F8F9FB] rounded-[28px] overflow-hidden flex items-center justify-center mb-6">
                            <div className="relative w-full h-full flex items-center justify-center">
                                {/* Primary Image */}
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="absolute w-full h-full object-contain p-6 transition-all duration-700 group-hover:opacity-0 group-hover:scale-105"
                                />
                                {/* Hover Image */}
                                <img
                                    src={product.hoverImage}
                                    alt={product.name}
                                    className="absolute w-full h-full object-contain p-6 opacity-0 scale-95 transition-all duration-700 group-hover:opacity-100 group-hover:scale-110"
                                />
                            </div>

                            {/* CENTERED ACTION BAR (Exact Template Match) */}
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                                <button 
                                    onClick={() => handleView(product)}
                                    className="p-2.5 bg-white text-slate-700 rounded-lg shadow-sm hover:bg-[#6C7FD8] hover:text-white transition-all"
                                >
                                    <Eye size={16} />
                                </button>
                                <button 
                                    onClick={() => handleRefresh(product)}
                                    className="p-2.5 bg-white text-slate-700 rounded-lg shadow-sm hover:bg-[#6C7FD8] hover:text-white transition-all"
                                >
                                    <RefreshCw size={16} />
                                </button>
                                <button 
                                    onClick={() => handleAddToWishlist(product)}
                                    className="p-2.5 bg-white text-slate-700 rounded-lg shadow-sm hover:bg-[#6C7FD8] hover:text-white transition-all"
                                >
                                    <Heart size={16} />
                                </button>
                                <button 
                                    onClick={() => handleAddToCart(product)}
                                    className="p-2.5 bg-[#6C7FD8] text-white rounded-lg shadow-sm hover:bg-slate-800 transition-all"
                                >
                                    <ShoppingBag size={16} />
                                </button>
                            </div>
                        </div>

                        {/* 3. PRODUCT INFORMATION */}
                        <div className="px-1 grow flex flex-col">
                            <div className="flex justify-between items-center mb-1.5">
                                <span className="text-[12px] text-gray-400 font-medium tracking-tight capitalize">
                                    {product.category || 'Category'}
                                </span>
                                <div className="flex text-orange-400 gap-0.5">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            size={12}
                                            fill={i < product.rating ? "currentColor" : "none"}
                                            className={i < product.rating ? "" : "text-gray-200"}
                                        />
                                    ))}
                                </div>
                            </div>

                            <h4 className="text-[16px] font-bold text-slate-800 leading-snug mb-3 h-11 line-clamp-2">
                                {product.name}
                            </h4>

                            <div className="mt-auto flex justify-between items-center pt-4 border-t border-gray-50">
                                <div className="flex items-center gap-2">
                                    <span className="text-xl font-black text-slate-800">{product.price}</span>
                                    <span className="text-sm text-gray-400 line-through font-medium">{product.oldPrice}</span>
                                </div>
                                <span className="text-[11px] font-bold text-gray-400 uppercase tracking-tighter">
                                    {product.stock}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

