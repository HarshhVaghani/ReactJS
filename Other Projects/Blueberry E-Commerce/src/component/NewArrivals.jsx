import React, { useState } from 'react';
import { Star, Heart, ShoppingBag, Eye, RefreshCw } from 'lucide-react';

import Groundnutoil from "../assets/newarrival/groundnutoil.jpg";
import GroundnutoilHover from "../assets/newarrival/groundoiolhover.jpg";

import Juice from "../assets/newarrival/juiceroute.jpg";
import JuiceHover from "../assets/newarrival/juiceroutehover.jpg";

import BananaChips from "../assets/newarrival/bananasnackpack.jpg";
import BananaChipsHover from "../assets/newarrival/bananasnackpackhover.jpg";

import PotatoChips from "../assets/newarrival/potatocrunch.jpg";
import PotatoChipsHover from "../assets/newarrival/potatocrunchhover.jpg";

import BlackPepper from "../assets/newarrival/blackpepperspice.jpg";
import BlackPepperHover from "../assets/newarrival/blackpeppespicehover.jpg";

import Cardamon from "../assets/newarrival/cardamon.jpg";
import CardamonHover from "../assets/newarrival/cardamonhover.jpg";

import ChilliFlakes from "../assets/newarrival/chilliflakes.jpg";
import ChilliFlakesHover from "../assets/newarrival/chillflakeshover.jpg";

import TomatoKetchup from "../assets/newarrival/tometoketchup.jpg";
import TomatoKetchupHover from "../assets/newarrival/tometoetchuphover.jpg";

const categories = ['All Products', 'Juices & Drinks', 'Snacks & Sweets', 'Spices & Sauces'];

const products = [
  {
    id: 1,
    tag: "NEW",
    title: "Ground Nuts Oil Packs",
    price: "$12.00",
    oldPrice: "$15.00",
    stock: "In Stock",
    image: Groundnutoil,
    hoverImage: GroundnutoilHover,
  },
  {
    id: 2,
    tag: "HOT",
    title: "Organic Litchi Juice Pack",
    price: "$18.00",
    oldPrice: "$22.00",
    stock: "In Stock",
    image: Juice,
    hoverImage: JuiceHover,
  },
  {
    id: 3,
    tag: "SALE",
    title: "Crunchy Banana Chips",
    price: "$9.00",
    oldPrice: "$12.00",
    stock: "Limited",
    image: BananaChips,
    hoverImage: BananaChipsHover,
  },
  {
    id: 4,
    tag: "NEW",
    title: "Crunchy Potato Chips",
    price: "$14.00",
    oldPrice: "$18.00",
    stock: "In Stock",
    image: PotatoChips,
    hoverImage: PotatoChipsHover,
  },
  {
    id: 5,
    tag: "HOT",
    title: "Black Pepper Spice Pack",
    price: "$20.00",
    oldPrice: "$26.00",
    stock: "In Stock",
    image: BlackPepper,
    hoverImage: BlackPepperHover,
  },
  {
    id: 6,
    tag: "NEW",
    title: "Small Cardamom Spice Pack",
    price: "$10.00",
    oldPrice: "$14.00",
    stock: "In Stock",
    image: Cardamon,
    hoverImage: CardamonHover,
  },
  {
    id: 7,
    tag: "NEW",
    title: "Chilli Flakes Pack",
    price: "$10.00",
    oldPrice: "$14.00",
    stock: "In Stock",
    image: ChilliFlakes,
    hoverImage: ChilliFlakesHover,
  },
  {
    id: 8,
    tag: "NEW",
    title: "Tomato Ketchup Pack",
    price: "$10.00",
    oldPrice: "$14.00",
    stock: "In Stock",
    image: TomatoKetchup,
    hoverImage: TomatoKetchupHover,
  },
];

export default function NewArrivals() {
  const [activeTab, setActiveTab] = useState('All Products');

  return (
    <section className="max-w-[1440px] mx-auto px-10 py-20 font-sans">

      {/* HEADER */}
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between md:items-end gap-6 border-b border-gray-200 pb-6">

        {/* Left Content */}
        <div>
          <h2 className="text-4xl font-bold text-slate-800 tracking-tight">
            New{" "}
            <span className="text-blue-600 font-medium">
              Arrivals
            </span>
          </h2>

          <p className="text-gray-400 text-sm mt-2">
            Shop online for new arrivals and get free shipping!
          </p>
        </div>

        {/* Right Categories */}
        <div className="flex flex-wrap gap-4 text-sm font-medium text-gray-500">
          <button className="hover:text-blue-600 transition duration-200">
            All
          </button>
          <span>/</span>
          <button className="text-blue-600">
            Snack & Spices
          </button>
          <span>/</span>
          <button className="hover:text-blue-600 transition duration-200">
            Fruits
          </button>
          <span>/</span>
          <button className="hover:text-blue-600 transition duration-200">
            Vegetables
          </button>
        </div>

      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="group relative bg-white border border-gray-100 rounded-[35px] p-5 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-50/50 flex flex-col h-full"
          >

            {/* TAG */}
            {product.tag && (
              <div className="absolute top-6 left-6 flex flex-col gap-0.5 z-20 pointer-events-none">
                {product.tag.split("").map((char, index) => (
                  <span key={index} className="text-[11px] font-black text-gray-300 leading-none uppercase tracking-tighter block text-center">
                    {char}
                  </span>
                ))}
              </div>
            )}

            {/* IMAGE */}
            <div className="relative aspect-square rounded-[28px] overflow-hidden flex items-center justify-center mb-6">
              <div className="relative w-full h-full">

                {/* Normal Image */}
                <img
                  src={product.image}
                  alt={product.title}
                  className="absolute inset-0 w-full h-full object-contain p-6 transition-all duration-500 group-hover:opacity-0 group-hover:scale-105"
                />

                {/* Hover Image */}
                <img
                  src={product.hoverImage}
                  alt={product.title}
                  className="absolute inset-0 w-full h-full object-contain p-6 opacity-0 scale-95 transition-all duration-500 group-hover:opacity-100 group-hover:scale-110"
                />

              </div>

              {/* ACTION BUTTONS */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                <button className="p-2.5 bg-white text-slate-700 rounded-lg shadow-sm hover:bg-brand-blue hover:text-white transition-all">
                  <Eye size={16} />
                </button>
                <button className="p-2.5 bg-white text-slate-700 rounded-lg shadow-sm hover:bg-brand-blue hover:text-white transition-all">
                  <RefreshCw size={16} />
                </button>
                <button className="p-2.5 bg-white text-slate-700 rounded-lg shadow-sm hover:bg-brand-blue hover:text-white transition-all">
                  <Heart size={16} />
                </button>
                <button className="p-2.5 bg-brand-blue text-white rounded-lg shadow-sm hover:bg-slate-800 transition-all">
                  <ShoppingBag size={16} />
                </button>
              </div>
            </div>

            {/* DETAILS */}
            <div className="px-1 flex-grow flex flex-col">
              <h4 className="text-[16px] font-bold text-slate-800 leading-snug mb-3 h-11 line-clamp-2">
                {product.title}
              </h4>

              <div className="mt-auto flex justify-between items-center pt-4 border-t border-gray-50">
                <div className="flex items-center gap-2">
                  <span className="text-xl font-black text-slate-800">{product.price}</span>
                  <span className="text-sm text-gray-400 line-through font-medium">{product.oldPrice}</span>
                </div>
                <span className="text-[11px] font-bold text-gray-400 uppercase tracking-tighter">
                  {product.stock}
                </span>
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}