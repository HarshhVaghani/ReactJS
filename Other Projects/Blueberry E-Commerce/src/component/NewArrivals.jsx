import React from 'react';
import { Star, Heart, ShoppingBag, Eye, RefreshCw } from 'lucide-react';
import { useCartWishlist } from '../context/CartWishlistContext';

// use centralized product data
import { products as allProducts } from '../data/products';

// any category tabs are optional; we can derive from products if needed

// only show items marked as new arrivals in shared data
const products = allProducts.filter((p) => p.category === 'New Arrivals');

export default function NewArrivals() {
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
    <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-14 md:py-20 font-sans">

      {/* HEADER */}
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between md:items-end gap-6 border-b border-gray-200 pb-6">

        {/* Left Content */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 tracking-tight">
            New{" "}
            <span className="text-blue-600 font-medium">
              Arrivals
            </span>
          </h2>

          <p className="text-gray-400 text-sm mt-2">
            Shop online for new arrivals and get free shipping!
          </p>
        </div>

        {/* Right Categories */}
        <div className="flex flex-wrap gap-2 text-sm font-medium text-gray-500">
          <button className="px-3 py-1 rounded-full bg-blue-50 text-blue-600 transition duration-200">
            All
          </button>
          <button className="px-3 py-1 rounded-full hover:text-blue-600 transition duration-200">
            Snack & Spices
          </button>
          <button className="px-3 py-1 rounded-full hover:text-blue-600 transition duration-200">
            Fruits
          </button>
          <button className="px-3 py-1 rounded-full hover:text-blue-600 transition duration-200">
            Vegetables
          </button>
        </div>

      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="group relative bg-white border border-gray-100 rounded-[28px] sm:rounded-[35px] p-4 sm:p-5 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-50/50 flex flex-col h-full"
          >

            {/* TAG */}
            {product.tag && (
              <div className="absolute top-6 left-6 flex flex-col gap-0.5 z-20 pointer-events-none">
                {product.tag.split("").map((char, index) => (
                  <span key={index} className="text-[11px] font-black text-gray-300 leading-none uppercase tracking-tighter block text-center">
                    {char}
                  </span>
                ))}
              </div>
            )}

            {/* IMAGE */}
            <div className="relative aspect-square bg-[#F8F9FB] rounded-[22px] sm:rounded-[28px] overflow-hidden flex items-center justify-center mb-5 sm:mb-6">
              <div className="relative w-full h-full flex items-center justify-center">

                {/* Normal Image */}
                <img
                  src={product.image}
                  alt={product.title}
                  className="absolute w-full h-full object-contain p-6 transition-all duration-700 group-hover:opacity-0 group-hover:scale-105"
                />

                {/* Hover Image */}
                <img
                  src={product.hoverImage}
                  alt={product.title}
                  className="absolute w-full h-full object-contain p-6 opacity-0 scale-95 transition-all duration-700 group-hover:opacity-100 group-hover:scale-110"
                />

              </div>

              {/* ACTION BUTTONS */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 transition-all duration-500 ease-in-out translate-y-0 opacity-100 sm:translate-y-12 sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100">
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

            {/* DETAILS */}
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

              <h4 className="text-[16px] font-bold text-slate-800 leading-snug mb-3 min-h-[2.75rem] line-clamp-2">
                {product.name}
              </h4>

              <div className="mt-auto flex justify-between items-center gap-2 flex-wrap pt-4 border-t border-gray-50">
                <div className="flex items-center gap-2">
                  <span className="text-xl font-black text-slate-800">{product.price}</span>
                  <span className="text-sm text-gray-400 line-through font-medium">{product.oldPrice}</span>
                </div>
                <span className="text-[11px] font-bold text-gray-400 uppercase tracking-tighter w-full sm:w-auto">
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