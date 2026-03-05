import { useState } from "react";
import { Trash2, Plus, Minus } from "lucide-react";
import FooterSection from "../component/FooterSection";
import { useCartWishlist } from "../context/CartWishlistContext";

export default function CartPage() {
  const { cart, removeFromCart, updateCartQuantity } = useCartWishlist();

  const subtotal = cart.reduce(
    (sum, item) => sum + parseFloat(item.price.replace(/[^0-9.]/g, '')) * (item.quantity || 1),
    0
  );
  const shipping = subtotal > 100 ? 0 : 10;
  const tax = subtotal * 0.1;
  const total = subtotal + shipping + tax;

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

        {cart.length === 0 ? (
          <div className="bg-white rounded-lg shadow p-8 text-center">
            <p className="text-xl text-gray-600 mb-4">Your cart is empty</p>
            <a href="/shop" className="text-blue-600 hover:underline">
              Continue Shopping
            </a>
          </div>
        ) : (
          <div className="grid grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="col-span-2">
              <div className="bg-white rounded-lg shadow overflow-hidden">
                <table className="w-full">
                  <thead className="bg-gray-100 border-b">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold">Product</th>
                      <th className="px-6 py-4 text-left font-semibold">Price</th>
                      <th className="px-6 py-4 text-left font-semibold">Quantity</th>
                      <th className="px-6 py-4 text-left font-semibold">Total</th>
                      <th className="px-6 py-4 text-left font-semibold">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart.map((item) => (
                      <tr key={item.id} className="border-b hover:bg-gray-50">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-4">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-16 h-16 object-cover rounded"
                            />
                            <span className="font-medium">{item.name}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4">${parseFloat(item.price.replace(/[^0-9.]/g, '')).toFixed(2)}</td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() =>
                                updateCartQuantity(item.id, (item.quantity || 1) - 1)
                              }
                              className="p-1 hover:bg-gray-200 rounded"
                            >
                              <Minus size={16} />
                            </button>
                            <span className="w-8 text-center">
                              {item.quantity || 1}
                            </span>
                            <button
                              onClick={() =>
                                updateCartQuantity(item.id, (item.quantity || 1) + 1)
                              }
                              className="p-1 hover:bg-gray-200 rounded"
                            >
                              <Plus size={16} />
                            </button>
                          </div>
                        </td>
                        <td className="px-6 py-4 font-semibold">
                          ${(parseFloat(item.price.replace(/[^0-9.]/g, '')) * (item.quantity || 1)).toFixed(2)}
                        </td>
                        <td className="px-6 py-4">
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-red-600 hover:text-red-700"
                          >
                            <Trash2 size={18} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Order Summary */}
            <div className="col-span-1">
              <div className="bg-white rounded-lg shadow p-6 sticky top-4">
                <h2 className="text-xl font-bold mb-6">Order Summary</h2>
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span>{shipping === 0 ? "FREE" : `$${shipping.toFixed(2)}`}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tax (10%)</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <div className="border-t pt-4 flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
                <a
                  href="/checkout"
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors block text-center"
                >
                  Proceed to Checkout
                </a>
                <a
                  href="/shop"
                  className="w-full mt-3 border border-blue-600 text-blue-600 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors block text-center"
                >
                  Continue Shopping
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
      <FooterSection />
    </div>
  );
}
