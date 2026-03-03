import React, { useEffect } from "react";
import {useDispatch ,  useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import AddProduct from "./AddProduct";
import { fetchProducts } from "../redux/productSlice";

const ProductList = () => {

  const dispatch = useDispatch()

  const {products  , loading , error} = useSelector(state => state.products)
  

  useEffect(() => {
    console.log("fetching products...")
    dispatch(fetchProducts())
  } , [dispatch])
  
  return (
    <>
      <div className="container mx-auto mt-4">
        <AddProduct />
      </div>
      <div className="container mx-auto flex flex-wrap justify-between">
        {products.map((p) => {
          return <ProductCard key={p.id} data={p} mode="product" />;
        })}
      </div>
    </>
  );
};

export default ProductList;
