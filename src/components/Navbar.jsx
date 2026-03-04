import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cartItem = useSelector((state) => state.cart.cart);
  const wishlistItem = useSelector((state) => state.wishlist.wishlist);

  console.log("cartItem", cartItem.length);

  return (
    <>
      <div className="flex justify-around bg-blue-500 p-4 items-center">
        <div className="text-4xl font-black text-white">Navbar</div>
        <ul className="">
          <li className="space-x-4 flex text-white">
            <NavLink to="/">Product</NavLink>
            <NavLink to="/cart">
              <div className="flex">
                <span>Cart</span>
                <span className="flex items-center justify-center bg-brand-softer border border-brand-subtle text-fg-brand-strong text-xs font-medium h-4 w-4 rounded-full bg-gray-900 text-white">
                  {cartItem.length}
                </span>
              </div>
            </NavLink>
            <NavLink to="/wishlist">
              <div className="flex items-center space-x-1">
                <span>Wishlist</span> 
                <span className="flex items-center justify-center bg-brand-softer border border-brand-subtle text-fg-brand-strong text-xs font-medium h-4 w-4 rounded-full bg-gray-900 text-white">
                  {wishlistItem.length}
                </span>
              </div>
            </NavLink>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/register">Register</NavLink>
          </li>
        </ul>
      </div>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Navbar;
