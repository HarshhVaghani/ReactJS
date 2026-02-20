import { NavLink } from "react-router-dom";

const Navbar = () => {
  const linkClass =
    "px-4 py-2 rounded-lg font-medium transition hover:bg-indigo-600 hover:text-white";

  return (
    <nav className="bg-[#0F172A] text-white shadow-lg">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-xl font-bold text-[#38BDF8]">Navigator</h1>

        <div className="flex gap-4">
          <NavLink to="/" className={linkClass}>Home</NavLink>
          <NavLink to="/about" className={linkClass}>About</NavLink>
          <NavLink to="/services" className={linkClass}>Services</NavLink>
          <NavLink to="/contact" className={linkClass}>Contact</NavLink>
          <NavLink to="/products" className={linkClass}>Products</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;