import PageRoutes from "./PageRoutes";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        path: "/",
        element: PageRoutes.home,
      },
      {
        path: "/about",
        element: PageRoutes.about,
      },
      {
        path: "/contact",
        element: PageRoutes.contact,
      },
    ],
  },
]);

const Layout = () => {
  return (
    <div>
      <RouterProvider router={router} />
      {/* <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={PageRoutes.home}></Route>
          <Route path="/about" element={PageRoutes.about}/>
          <Route path="/contact" element={PageRoutes.contact}/>
          <Route path="/login" element={PageRoutes.login}/>
          <Route path="/product" element={PageRoutes.product}/>
          <Route path="/blog" element={PageRoutes.blog}/>
          <Route path="*" element={PageRoutes.error}/>
        </Routes>
      </BrowserRouter> */}
    </div>
  );
};

export default Layout;
