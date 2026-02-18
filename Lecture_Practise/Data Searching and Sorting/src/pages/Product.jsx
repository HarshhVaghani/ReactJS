import React from "react";
import { useState, useEffect } from "react";
import NewProduct from "./NewProduct";
import OldProduct from "./OldProduct";
import { Link, Outlet } from "react-router-dom";

const Product = () => {
  const [proData, SetProData] = useState([]);

  const fetchProduct = async () => {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    SetProData(data.products);
  };

  console.log("proData", proData);

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <>
      <Link className="btn" to="oldproduct">
        OldProduct
      </Link>
      <Link className="btn" to="newproduct">
        NewProduct
      </Link>
      <main>
        <Outlet context={{ proData }} />
      </main>
    </>
  );
};

export default Product;
