import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#111827] flex flex-col">
      <Navbar />

      <main className="max-w-6xl mx-auto p-6 flex-grow">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;