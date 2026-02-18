import Home from "./Home";
import Product from "./Product";
import OldProduct from "./OldProduct";
import NewProduct from "./NewProduct";
import Navbar from "../components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Layout = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="product" element={<Product />}>
          <Route path="oldproduct" element={<OldProduct />}></Route>
          <Route path="newproduct" element={<NewProduct />}></Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default Layout;
