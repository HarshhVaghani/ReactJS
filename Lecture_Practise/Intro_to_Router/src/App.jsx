import "./App.css";
import { BrowserRouter, Route, Routes , createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import AboutUs from "./pages/AboutUs";
import Error from "./pages/Error";
import ContactUs from "./pages/ContactUs";
import Login from "./pages/Login";
import Product from "./pages/Product";
import Blog from "./pages/Blog";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<AboutUs/>}/>
          <Route path="/contact" element={<ContactUs/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/product" element={<Product/>}/>
          <Route path="/blog" element={<Blog/>}/>
          <Route path="*" element={<Error/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
