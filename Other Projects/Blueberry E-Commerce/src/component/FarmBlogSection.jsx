import React, { useState, useRef } from 'react';
import Blog1 from '../assets/farmblogimage/blog1.jpg';
import Blog2 from '../assets/farmblogimage/blog2.jpg';
import Blog3 from '../assets/farmblogimage/blog3.jpg';
import Blog4 from '../assets/farmblogimage/blog4.jpg';
import Insta1 from '../assets/instaimage/one.jpg';
import Insta2 from '../assets/instaimage/two.jpg';
import Insta3 from '../assets/instaimage/three.jpg';
import Insta4 from '../assets/instaimage/four.jpg';
import Insta5 from '../assets/instaimage/five.jpg';
import Insta6 from '../assets/instaimage/six.jpg';



const FarmBlogSection = () => {
  const [sliderPosition, setSliderPosition] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef(null);
  const sliderTrackRef = useRef(null);
  const dragStartXRef = useRef(0);
  const dragStartPositionRef = useRef(0);

  const blogPosts = [
    {
      date: "June 30, 2024",
      tag: "organic",
      title: "Marketing Guide: 5 Steps to Success.",
      image: Blog1,
    },
    {
      date: "May 10, 2023",
      tag: "organic",
      title: "Best way to solve business deal issue.",
      image: Blog2,
    },
    {
      date: "Jan 10, 2022",
      tag: "organic",
      title: "Business ideas to grow your business.",
      image: Blog3,
    },
    {
      date: "Feb 12, 2022",
      tag: "organic",
      title: "31 customer stats know in 2020.",
      image: Blog4,
    },
  ];

  const baseInstaImages = [
    Insta1,
    Insta2,
    Insta3,
    Insta4,
    Insta5,
    Insta6,
  ];

  const instaImages = [...baseInstaImages, ...baseInstaImages];

  const getMaxTranslate = () => {
    if (!sliderRef.current || !sliderTrackRef.current) return 0;
    return Math.max(
      sliderTrackRef.current.scrollWidth - sliderRef.current.clientWidth,
      0
    );
  };

  const clampSliderPosition = (value) => {
    const maxTranslate = getMaxTranslate();
    return Math.max(-maxTranslate, Math.min(0, value));
  };

  const handlePointerDown = (e) => {
    dragStartXRef.current = e.clientX;
    dragStartPositionRef.current = sliderPosition;
    setIsDragging(true);
    sliderRef.current?.setPointerCapture?.(e.pointerId);
  };

  const handlePointerMove = (e) => {
    if (!isDragging) return;
    const deltaX = e.clientX - dragStartXRef.current;
    const nextPosition = dragStartPositionRef.current + deltaX;
    setSliderPosition(clampSliderPosition(nextPosition));
  };

  const handlePointerUp = (e) => {
    setIsDragging(false);
    sliderRef.current?.releasePointerCapture?.(e.pointerId);
  };

  return (
    <div className="bg-white min-h-screen p-8 md:p-16 font-sans">
      {/* Top Section: Blog Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {blogPosts.map((post, index) => (
          <div key={index} className="relative h-[350px] group overflow-hidden rounded-[2.5rem] border-4 border-transparent hover:border-green-100 transition-all duration-300">
            <img 
              src={post.image} 
              alt={post.title} 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            {/* White Content Box */}
            <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm p-6 rounded-tr-[3rem] rounded-bl-[1rem] rounded-tl-[1rem] rounded-br-[1rem] shadow-lg">
              <p className="text-gray-400 text-xs mb-2 uppercase tracking-wider">
                {post.date} — <span className="lowercase">{post.tag}</span>
              </p>
              <h3 className="text-gray-800 font-bold leading-tight text-lg">
                {post.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Section: Insta Feed */}
      <div className="relative pt-8">
        <div
          className={`relative overflow-hidden rounded-[2rem] select-none ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
          ref={sliderRef}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          style={{ touchAction: 'none' }}
        >
          <div
            ref={sliderTrackRef}
            className="flex items-center gap-6 px-2"
            style={{ transform: `translateX(${sliderPosition}px)` }}
          >
            {instaImages.map((img, index) => (
              <div
                key={index}
                className="w-52 h-52 md:w-60 md:h-60 shrink-0 rounded-[1rem] overflow-hidden"
              >
                <img src={img} className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" alt="Instagram feed" />
              </div>
            ))}
          </div>
        </div>      
      </div>
    </div>
  );
};

export default FarmBlogSection;