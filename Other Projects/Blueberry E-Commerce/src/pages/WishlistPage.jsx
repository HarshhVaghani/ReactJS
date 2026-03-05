import { Heart, Trash2, ShoppingCart } from "lucide-react";
import FooterSection from "../component/FooterSection";
import { useCartWishlist } from "../context/CartWishlistContext";

export default function WishlistPage() {
  const { wishlist, removeFromWishlist, moveToCart } = useCartWishlist();

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">My Wishlist</h1>

        {wishlist.length === 0 ? (
          <div className="bg-white rounded-lg shadow p-8 text-center">
            <Heart size={48} className="mx-auto text-gray-300 mb-4" />
            <p className="text-xl text-gray-600 mb-4">Your wishlist is empty</p>
            <a href="/shop" className="text-blue-600 hover:underline">
              Continue Shopping
            </a>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {wishlist.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow overflow-hidden"
              >
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48 object-cover"
                  />
                  <button
                    onClick={() => removeFromWishlist(item.id)}
                    className="absolute top-3 right-3 bg-white rounded-full p-2 hover:bg-gray-100 transition-colors"
                  >
                    <Heart size={20} className="text-red-600 fill-red-600" />
                  </button>
                </div>

                <div className="p-4">
                  <h3 className="font-semibold text-gray-800 mb-2">
                    {item.name}
                  </h3>

                  <div className="flex items-center justify-between mb-3">
                    <p className="text-lg font-bold text-blue-600">
                      {item.price}
                    </p>
                    <span className="text-sm text-yellow-500">
                      ⭐ {item.rating}
                    </span>
                  </div>

                  <p
                    className={`text-sm mb-4 ${
                      item.inStock ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {item.inStock ? "In Stock" : "Out of Stock"}
                  </p>

                  <div className="flex gap-2">
                    <button
                      onClick={() => moveToCart(item)}
                      className="flex-1 py-2 bg-blue-600 text-white rounded font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                    >
                      <ShoppingCart size={16} />
                      Add to Cart
                    </button>
                    <button
                      onClick={() => removeFromWishlist(item.id)}
                      className="px-4 py-2 border border-red-300 text-red-600 rounded hover:bg-red-50 transition-colors"
                    >
                      <Trash2 size={16} />
                    </button>
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
