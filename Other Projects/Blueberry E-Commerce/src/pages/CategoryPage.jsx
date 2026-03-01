import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function CategoryPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [priceRange, setPriceRange] = useState([0, 1000]);

  const categories = [
    { id: "all", name: "All Products", count: 248 },
    { id: "electronics", name: "Electronics", count: 45 },
    { id: "clothing", name: "Clothing", count: 89 },
    { id: "home", name: "Home & Garden", count: 67 },
    { id: "books", name: "Books", count: 47 },
  ];

  const [products] = useState(() =>
    Array.from({ length: 20 }, (_, i) => ({
      id: i + 1,
      name: `Product ${i + 1}`,
      price: Math.random() * 500 + 50,
      image: `https://via.placeholder.com/250x250?text=Product${i + 1}`,
      category: categories[Math.floor(Math.random() * (categories.length - 1)) + 1]
        .id,
    }))
  );

  const filteredProducts = products.filter(
    (product) =>
      (selectedCategory === "all" || product.category === selectedCategory) &&
      product.price >= priceRange[0] &&
      product.price <= priceRange[1]
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Shop by Category</h1>

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
            <div className="grid grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow overflow-hidden"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-800 mb-2">
                      {product.name}
                    </h3>
                    <p className="text-lg font-bold text-blue-600">
                      ${product.price.toFixed(2)}
                    </p>
                    <button className="w-full mt-3 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors">
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
