import { Search, User, Heart, ShoppingCart, MapPin, LayoutGrid, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from "../assets/logo.png"

export default function Navbar() {
  return (
    <header className="w-full bg-white font-sans">
      <div className="max-w-[1440px] mx-auto px-10 py-5 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group cursor-pointer">
          <img
            src={logo}
            alt="Blueberry Logo"
            className="h-12 w-auto object-contain transition-transform group-hover:scale-105"
          />
        </Link>

        <div className="flex-1 max-w-xl mx-12 flex items-center bg-gray-50 border border-gray-100 rounded-lg px-4 py-2.5">
          <select className="bg-transparent text-sm font-semibold text-gray-500 outline-none border-r border-gray-200 pr-4 mr-4">
            <option>Vegetables</option>
            <option>Cold Drinks</option>
            <option>Fruits</option>
            <option>Bakery</option>

          </select>
          <input type="text" placeholder="Search products..." className="flex-1 bg-transparent outline-none text-sm text-gray-600" />
          <Search className="w-5 h-5 text-gray-400 cursor-pointer hover:text-brand-blue transition" />
        </div>

        <div className="flex items-center gap-8">
          <Link to="/login">
            <NavItem icon={<User />} label="Account" value="Login" />
          </Link>
          <Link to="/wishlist">
            <NavItem icon={<Heart />} label="3 Items" value="Wishlist" />
          </Link>
          <Link to="/cart">
            <NavItem icon={<ShoppingCart />} label="4 Items" value="Cart" />
          </Link>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-10 py-3 flex items-center justify-between border-t border-gray-50">
        <div className="flex items-center gap-10">
          <div className="p-2 bg-brand-light text-brand-blue rounded-lg cursor-pointer">
            <LayoutGrid size={20} />
          </div>
          <nav className="flex gap-8 text-[14px] font-semibold text-gray-600">
            <Link to="/" className="text-brand-blue border-b-2 border-brand-blue pb-1">Home</Link>
            <Link to="/category" className="flex items-center gap-1 hover:text-brand-blue transition">
              Categories <ChevronDown size={14} />
            </Link>
            <Link to="/shop" className="flex items-center gap-1 hover:text-brand-blue transition">
              Products <ChevronDown size={14} />
            </Link>
            <Link to="/about" className="flex items-center gap-1 hover:text-brand-blue transition">
              About <ChevronDown size={14} />
            </Link>
            <Link to="/faq" className="flex items-center gap-1 hover:text-brand-blue transition">
              FAQ <ChevronDown size={14} />
            </Link>
            <Link to="/contact" className="flex items-center gap-1 hover:text-brand-blue transition">
              Contact
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-lg border border-gray-100 cursor-pointer">
          <MapPin size={16} className="text-brand-blue" />
          <span className="text-sm font-bold text-gray-700">Surat</span>
          <ChevronDown size={14} className="text-gray-400" />
        </div>
      </div>
    </header>
  );
}

function NavItem({ icon, label, value }) {
  return (
    <div className="flex items-center gap-3 cursor-pointer group">
      <div className="text-slate-600 group-hover:text-brand-blue transition-colors">{icon}</div>
      <div className="hidden lg:block leading-tight">
        <p className="text-[10px] text-gray-400 font-medium">{label}</p>
        <p className="text-[13px] font-bold text-slate-800">{value}</p>
      </div>
    </div>
  );
}