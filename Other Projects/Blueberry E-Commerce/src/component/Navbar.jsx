import { useState } from 'react';
import { Search, User, Heart, ShoppingCart, MapPin, LayoutGrid, ChevronDown, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from "../assets/logo.png"
import { useCartWishlist } from '../context/CartWishlistContext';

export default function Navbar() {
  const { cart, wishlist } = useCartWishlist();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { to: '/category', label: 'Categories', withChevron: true },
    { to: '/shop', label: 'Products', withChevron: true },
    { to: '/about', label: 'About', withChevron: true },
    { to: '/faq', label: 'FAQ', withChevron: true },
    { to: '/contact', label: 'Contact', withChevron: false },
  ];

  return (
    <header className="w-full bg-white font-sans border-b border-gray-100">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-4 sm:py-5">
        <div className="flex items-center justify-between gap-3">
          <Link to="/" className="flex items-center gap-2 group cursor-pointer shrink-0">
            <img
              src={logo}
              alt="Blueberry Logo"
              className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </Link>

          <div className="flex items-center gap-4 sm:gap-6">
            <Link to="/login">
              <NavItem icon={<User />} label="Account" value="Login" />
            </Link>
            <Link to="/wishlist">
              <NavItem icon={<Heart />} label={`${wishlist.length} Items`} value="Wishlist" />
            </Link>
            <Link to="/cart">
              <NavItem icon={<ShoppingCart />} label={`${cart.length} Items`} value="Cart" />
            </Link>
            <button
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="lg:hidden p-2 rounded-lg border border-gray-200 text-slate-700"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        <div className="mt-4 flex items-center bg-gray-50 border border-gray-100 rounded-lg px-3 sm:px-4 py-2.5">
          <select className="hidden sm:block bg-transparent text-sm font-semibold text-gray-500 outline-none border-r border-gray-200 pr-3 mr-3">
            <option>Vegetables</option>
            <option>Cold Drinks</option>
            <option>Fruits</option>
            <option>Bakery</option>
          </select>
          <input type="text" placeholder="Search products..." className="flex-1 bg-transparent outline-none text-sm text-gray-600" />
          <Search className="w-5 h-5 text-gray-400 cursor-pointer hover:text-brand-blue transition" />
        </div>
      </div>

      <div className="hidden lg:block border-t border-gray-50">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10 py-3 flex items-center justify-between">
          <div className="flex items-center gap-10">
            <div className="p-2 bg-brand-light text-brand-blue rounded-lg cursor-pointer">
              <LayoutGrid size={20} />
            </div>
            <nav className="flex gap-8 text-[14px] font-semibold text-gray-600">
              <Link to="/" className="text-brand-blue border-b-2 border-brand-blue pb-1">Home</Link>
              {navLinks.map((link) => (
                <Link key={link.to} to={link.to} className="flex items-center gap-1 hover:text-brand-blue transition">
                  {link.label}
                  {link.withChevron && <ChevronDown size={14} />}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-lg border border-gray-100 cursor-pointer">
            <MapPin size={16} className="text-brand-blue" />
            <span className="text-sm font-bold text-gray-700">Surat</span>
            <ChevronDown size={14} className="text-gray-400" />
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-100">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 py-3 space-y-3">
            <nav className="flex flex-col text-sm font-semibold text-gray-700">
              <Link to="/" onClick={() => setMobileMenuOpen(false)} className="py-2 text-brand-blue">Home</Link>
              {navLinks.map((link) => (
                <Link key={link.to} to={link.to} onClick={() => setMobileMenuOpen(false)} className="py-2 border-t border-gray-100">
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center justify-between bg-gray-50 px-4 py-2 rounded-lg border border-gray-100 cursor-pointer">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-brand-blue" />
                <span className="text-sm font-bold text-gray-700">Surat</span>
              </div>
              <ChevronDown size={14} className="text-gray-400" />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function NavItem({ icon, label, value }) {
  return (
    <div className="flex items-center gap-3 cursor-pointer group">
      <div className="text-slate-600 group-hover:text-brand-blue transition-colors">{icon}</div>
      <div className="hidden xl:block leading-tight">
        <p className="text-[10px] text-gray-400 font-medium">{label}</p>
        <p className="text-[13px] font-bold text-slate-800">{value}</p>
      </div>
    </div>
  );
}