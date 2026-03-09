import { useState } from "react";
import { Grid3x3, List, Star, Heart, ShoppingBag, Eye, RefreshCw } from "lucide-react";
import FooterSection from "../component/FooterSection";
import { useCartWishlist } from "../context/CartWishlistContext";

// shared product list
import { products as allProducts } from "../data/products";



export default function GridListViewPage() {
  const [viewMode, setViewMode] = useState("grid");
  const [sortBy, setSortBy] = useState("popular");

  const { cart, wishlist, addToCart, addToWishlist } = useCartWishlist();

  const products = allProducts;

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


  const sortedProducts = [...products].sort((a, b) => {
    const priceA = parseFloat(a.price.replace(/[^0-9.]/g, ''));
    const priceB = parseFloat(b.price.replace(/[^0-9.]/g, ''));
    switch (sortBy) {
      case "price-low":
        return priceA - priceB;
      case "price-high":
        return priceB - priceA;
      case "rating":
        return b.rating - a.rating;
      default:
        return 0;
    }
  });


  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">Products</h1>
        <p className="text-sm text-gray-600 mb-6">
          Cart: {cart.length} items | Wishlist: {wishlist.length} items
        </p>

        {/* Controls Bar */}
        <div className="bg-white rounded-lg shadow p-4 mb-6 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
          <div className="flex gap-2">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-2 rounded transition-colors ${
                viewMode === "grid"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
              title="Grid View"
            >
              <Grid3x3 size={20} />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-2 rounded transition-colors ${
                viewMode === "list"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
              title="List View"
            >
              <List size={20} />
            </button>
          </div>

          <div className="flex items-center justify-between sm:justify-start gap-3 sm:gap-4 w-full sm:w-auto">
            <span className="text-gray-600">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-[180px] sm:w-auto px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            >
              <option value="popular">Most Popular</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
        </div>

        {/* Grid View */}
        {viewMode === "grid" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5 sm:gap-7">
            {sortedProducts.map((product) => (
              <div
                key={product.id}
                className="group relative bg-white border border-gray-100 rounded-[28px] sm:rounded-[35px] p-4 sm:p-5 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-50/50 flex flex-col h-full"
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
                <div className="relative aspect-square bg-[#F8F9FB] rounded-[22px] sm:rounded-[28px] overflow-hidden flex items-center justify-center mb-5 sm:mb-6">
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

                  {/* CENTERED ACTION BAR */}
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

                {/* 3. PRODUCT INFORMATION */}
                <div className="px-1 grow flex flex-col">
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-[12px] text-gray-400 font-medium tracking-tight capitalize">
                      {product.category}
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
        )}

        {/* List View */}
        {viewMode === "list" && (
          <div className="space-y-4">
            {sortedProducts.map((product) => (
              <div
                key={product.id}
                className="group relative bg-white border border-gray-100 rounded-[20px] p-4 sm:p-5 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-50/50 flex flex-col sm:flex-row gap-4 sm:gap-6"
              >
                {/* Tag */}
                {product.tag && (
                  <div className="absolute top-4 left-4 flex flex-col gap-0.5 z-20 pointer-events-none">
                    {product.tag.split('').map((char, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-black text-gray-300 leading-none uppercase tracking-tighter"
                      >
                        {char}
                      </span>
                    ))}
                  </div>
                )}

                {/* Image */}
                <div className="relative w-full h-52 sm:w-40 sm:h-40 bg-[#F8F9FB] rounded-[20px] overflow-hidden shrink-0 flex items-center justify-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain p-4"
                  />
                </div>

                {/* Info */}
                <div className="flex-1 flex flex-col justify-between py-0 sm:py-2">
                  <div>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">
                      <div>
                        <span className="text-[12px] text-gray-400 font-medium capitalize">{product.category}</span>
                        <h3 className="text-lg sm:text-xl font-bold text-gray-800 mt-1">
                          {product.name}
                        </h3>
                      </div>
                      <div className="flex text-orange-400 gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={14}
                            fill={i < product.rating ? "currentColor" : "none"}
                            className={i < product.rating ? "" : "text-gray-200"}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">{product.description}</p>
                    <p className="text-xs text-gray-400 mt-1">{product.reviews} reviews</p>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div className="flex items-center gap-3 flex-wrap">
                      <span className="text-xl sm:text-2xl font-black text-slate-800">{product.price}</span>
                      <span className="text-sm text-gray-400 line-through">{product.oldPrice}</span>
                      <span className="text-[11px] font-bold text-gray-400 uppercase">{product.stock}</span>
                    </div>
                    <div className="flex gap-2 w-full sm:w-auto">
                      <button onClick={() => handleAddToWishlist(product)} className="p-2.5 bg-white text-slate-700 rounded-lg shadow-sm hover:bg-[#6C7FD8] hover:text-white transition-all flex-1 sm:flex-none">
                        <Heart size={16} />
                      </button>
                      <button onClick={() => handleAddToCart(product)} className="p-2.5 bg-[#6C7FD8] text-white rounded-lg shadow-sm hover:bg-slate-800 transition-all flex-1 sm:flex-none">
                        <ShoppingBag size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <FooterSection />
    </div>
  );
}
