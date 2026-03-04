import { useState } from "react";
import { Star, Heart, ShoppingBag, Eye, RefreshCw } from "lucide-react";
import FooterSection from "../component/FooterSection";

// use shared product data
import { products as allProducts } from "../data/products";


export default function CategoryPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [priceRange, setPriceRange] = useState([0, 1000]);

  // simple cart/wishlist state to make buttons functional
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  // derive categories from data
  const categoryCounts = allProducts.reduce((acc, p) => {
    acc[p.category] = (acc[p.category] || 0) + 1;
    return acc;
  }, {});

  const categories = [
    { id: "all", name: "All Products", count: allProducts.length },
    ...Object.entries(categoryCounts).map(([cat, cnt]) => ({ id: cat, name: cat, count: cnt })),
  ];

  const products = allProducts;


  const filteredProducts = products.filter(
    (product) => {
      const priceNum = parseFloat(product.price.replace(/[^0-9.]/g, ''));
      return (
        (selectedCategory === "all" || product.category === selectedCategory) &&
        priceNum >= priceRange[0] &&
        priceNum <= priceRange[1]
      );
    }
  );

  // handlers for button clicks
  const handleAddToCart = (product) => {
    setCart((prev) => [...prev, product]);
    console.log('added to cart', product);
  };
  const handleAddToWishlist = (product) => {
    setWishlist((prev) => [...prev, product]);
    console.log('added to wishlist', product);
  };
  const handleView = (product) => {
    alert(`Viewing ${product.name}`);
  };
  const handleRefresh = (product) => {
    console.log('refresh/compare', product);
  };


  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-2">Shop by Category</h1>
        <p className="text-sm text-gray-600 mb-6">
          Cart: {cart.length} items | Wishlist: {wishlist.length} items
        </p>

        <div className="flex gap-8">
          {/* Sidebar Filters */}
          <div className="w-64 shrink-0">
            <div className="bg-white rounded-lg shadow p-6 mb-6">
              <h3 className="font-bold text-lg mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.map((cat) => (
                  <label
                    key={cat.id}
                    className="flex items-center cursor-pointer hover:bg-gray-50 p-2 rounded"
                  >
                    <input
                      type="radio"
                      name="category"
                      value={cat.id}
                      checked={selectedCategory === cat.id}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="w-4 h-4 text-blue-600"
                    />
                    <span className="ml-3 text-gray-700">
                      {cat.name} ({cat.count})
                    </span>
                  </label>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="font-bold text-lg mb-4">Price Range</h3>
              <div className="space-y-4">
                <div>
                  <label className="text-sm text-gray-600">Min: ${priceRange[0]}</label>
                  <input
                    type="range"
                    min="0"
                    max="1000"
                    value={priceRange[0]}
                    onChange={(e) =>
                      setPriceRange([parseInt(e.target.value), priceRange[1]])
                    }
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-600">Max: ${priceRange[1]}</label>
                  <input
                    type="range"
                    min="0"
                    max="1000"
                    value={priceRange[1]}
                    onChange={(e) =>
                      setPriceRange([priceRange[0], parseInt(e.target.value)])
                    }
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Products Grid - 4 Columns */}
          <div className="flex-1">
            <p className="text-gray-600 mb-6">
              Showing {filteredProducts.length} products
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
              {filteredProducts.map((product) => (
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

                    {/* CENTERED ACTION BAR */}
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
          </div>
        </div>
      </div>
      <FooterSection />
    </div>
  );
}
