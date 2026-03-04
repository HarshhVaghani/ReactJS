import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromWishlist, clearWishlist } from "../redux/wishlistSlice";
import { addToCart } from "../redux/cartSlice";

const Wishlist = () => {
  const wishlistData = useSelector((state) => state.wishlist.wishlist);
  const dispatch = useDispatch();

  return (
    <div className="container mx-auto">
      <div className="flex justify-between my-4">
        <h2 className="text-2xl font-semibold">My Wishlist</h2>
        {wishlistData.length > 0 && (
          <button
            type="button"
            className="inline-flex items-center bg-brand hover:bg-brand-strong box-border border focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-3 py-2 focus:outline-none  border-black"
            onClick={() => dispatch(clearWishlist())}
          >
            Clear Wishlist
          </button>
        )}
      </div>

      {wishlistData.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <div className="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-default">
          <table className="w-full text-sm text-left rtl:text-right text-body">
            <thead className="text-sm text-body bg-neutral-secondary-medium border-b border-default-medium">
              <tr>
                <th scope="col" className="px-16 py-3">
                  Image
                </th>
                <th scope="col" className="px-6 py-3 font-medium">
                  Product
                </th>
                <th scope="col" className="px-6 py-3 font-medium">
                  Price
                </th>
                <th scope="col" className="px-6 py-3 font-medium">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {wishlistData.map((p) => (
                <tr
                  key={p.id}
                  className="bg-neutral-primary-soft border-b border-default hover:bg-neutral-secondary-medium"
                >
                  <td className="p-4">
                    <img
                      src={p.image}
                      className="w-16 md:w-24 max-w-full max-h-full"
                      alt={p.name}
                    />
                  </td>
                  <td className="px-6 py-4 font-semibold text-heading">
                    {p.name}
                  </td>
                  <td className="px-6 py-4 font-semibold text-heading">
                    ${p.price}
                  </td>
                  <td className="px-6 py-4 space-x-2">
                    <button
                      className="text-brand hover:underline"
                      onClick={() => {
                        dispatch(addToCart(p));
                        dispatch(removeFromWishlist(p.id));
                      }}
                    >
                      Add to Cart
                    </button>
                    <button
                      className="text-fg-danger hover:underline"
                      onClick={() => dispatch(removeFromWishlist(p.id))}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Wishlist;
