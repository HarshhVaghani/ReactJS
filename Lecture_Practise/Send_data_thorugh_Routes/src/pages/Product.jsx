import React from "react";
import { useState, useEffect } from "react";
import NewProduct from "./NewProduct";
import OldProduct from "./OldProduct";

const Product = () => {
  const [proData, SetProData] = useState([]);

  const fetchProduct = async () => {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    SetProData(data.products);
  };

  console.log('proData' , proData);

  useEffect(() => {
    fetchProduct()
  } , [])

  return (
    <>
      {
          proData.filter((item) => item.rating < 3).map((item) => {
            return(
              <OldProduct />
            )
          })
      }
      <NewProduct/>
    </>
  )
};

export default Product;
