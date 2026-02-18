import "./App.css";
import {product} from '../data'
import { useState } from "react";

function App() {
  // const quotes = [
  //   "You cannot change what you refuse to confront.",
  //   "Sometimes good things fall apart so better things can fall together.",
  //   "Don’t think of cost.  Think of value.",
  //   "Sometimes you need to distance yourself to see things clearly.",
  //   "Too many people buy things they don’t need with money they don’t have to impress people they don’t know.  Read Rich Dad, Poor Dad.",
  //   " No matter how many mistakes you make or how slow you progress, you are still way ahead of everyone who isn’t trying.",
  //   "Saying someone is ugly doesn’t make you any prettier."
  // ]
  const [product , setProduct] = useState([])
  
  const ProductAPI = async() => {
    try{
      const response = await fetch('https://fakestoreapi.com/products')
      const data = await response.json()
      setProduct(data)
    }catch(err){
      console.log(err);
      
    }
  }

  ProductAPI()

  const people = [
    {
      id: 0,
      name: "Creola Katherine Johnson",
      profession: "mathematician",
    },
    {
      id: 1,
      name: "Mario José Molina-Pasquel Henríquez",
      profession: "chemist",
    },
    {
      id: 2,
      name: "Mohammad Abdus Salam",
      profession: "physicist",
    },
    {
      id: 3,
      name: "Percy Lavon Julian",
      profession: "chemist",
    },
    {
      id: 4,
      name: "Subrahmanyan Chandrasekhar",
      profession: "astrophysicist",
    },
  ];

  return (
    <>
      <h1 className="heading">List Rendering Using useState And useEffect</h1>
      <ul>
        {product.filter((item) => item.price < 100).map((item , index) => <li key={index}>{item.title}</li>)}
      </ul>
    </>
  );
}

export default App;
