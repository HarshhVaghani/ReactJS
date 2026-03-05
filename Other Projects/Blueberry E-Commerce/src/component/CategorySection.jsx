import React, { useEffect, useMemo, useState } from 'react';
import category from "../assets/category.jpg";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import BakeryIcon from "../assets/icons/bakery.svg";
import ColdDrink from "../assets/icons/coldDrink.svg"
import Fruits from "../assets/icons/fruits.svg"
import Vegetables from "../assets/icons/vegetable.svg"
// 2. Import Swiper styles
import 'swiper/css';

const categories = [
    { name: 'Bakery', items: '08 items', icon: <img src={BakeryIcon} alt="Bakery" className="w-15 h-15" />, bgColor: 'bg-orange-50' },
    { name: 'Vegetables', items: '485 items', icon: <img src={ColdDrink} alt="ColdDrink" className="w-15 h-15" />, bgColor: 'bg-red-50' },
    { name: 'Fruits', items: '291 items', icon: <img src={Fruits} alt="Fruits" className="w-15 h-15" />, bgColor: 'bg-green-50' },
    { name: 'Cold Drinks', items: '49 items', icon: <img src={Vegetables} alt="Vegetables" className="w-15 h-15" />, bgColor: 'bg-purple-50' },
    { name: 'Bakery', items: '08 items', icon: <img src={BakeryIcon} alt="Bakery" className="w-15 h-15" />, bgColor: 'bg-orange-50' },
    { name: 'Vegetables', items: '485 items', icon: <img src={ColdDrink} alt="ColdDrink" className="w-15 h-15" />, bgColor: 'bg-red-50' },
    { name: 'Fruits', items: '291 items', icon: <img src={Fruits} alt="Fruits" className="w-15 h-15" />, bgColor: 'bg-green-50' },
    { name: 'Cold Drinks', items: '49 items', icon: <img src={Vegetables} alt="Vegetables" className="w-15 h-15" />, bgColor: 'bg-purple-50' }

];

export default function CategorySection() {
    const initialDealSeconds = useMemo(() => {
        return (421 * 24 * 60 * 60) + (5 * 60 * 60) + (21 * 60) + 42;
    }, []);

    const [remainingSeconds, setRemainingSeconds] = useState(initialDealSeconds);

    useEffect(() => {
        const interval = setInterval(() => {
            setRemainingSeconds((prev) => (prev > 0 ? prev - 1 : 0));
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const countdown = useMemo(() => {
        const days = Math.floor(remainingSeconds / (24 * 60 * 60));
        const hours = Math.floor((remainingSeconds % (24 * 60 * 60)) / (60 * 60));
        const mins = Math.floor((remainingSeconds % (60 * 60)) / 60);
        const secs = remainingSeconds % 60;

        return {
            days: days.toString(),
            hours: hours.toString().padStart(2, '0'),
            mins: mins.toString().padStart(2, '0'),
            secs: secs.toString().padStart(2, '0'),
        };
    }, [remainingSeconds]);

    return (
        <section className="max-w-[1440px] mx-auto px-10 py-20 relative overflow-hidden font-sans">
            <div className="absolute left-130 top-30 pointer-events-none select-none">
                <h2 className="text-[120px] font-black leading-none opacity-10 uppercase tracking-tighter text-transparent"
                    style={{ WebkitTextStroke: '2px #6C7FD8' }}>
                    Explore <br /> Categories
                </h2>
            </div>

            <div className="flex flex-col lg:flex-row items-end gap-8 relative z-10">
                <div className="w-full lg:w-1/3 aspect-[4/5] bg-gray-200 rounded-[40px] overflow-hidden relative group">
                    <div className="absolute top-6 right-6 bg-black/80 text-white text-[10px] font-bold px-3 py-1 rounded-full">
                        50% Off
                    </div>
                    <img src={category} className="w-full h-full object-cover" />
                </div>

                <div className="w-full lg:w-2/3 overflow-hidden">
                    <Swiper
                        modules={[Autoplay]}
                        spaceBetween={16}
                        slidesPerView={1}
                        loop={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            640: { slidesPerView: 2 },
                            1024: { slidesPerView: 4 },
                        }}
                    >
                        {categories.map((cat, index) => (
                            <SwiperSlide key={index}>
                                <div className={`${cat.bgColor} p-8 rounded-[30px] flex flex-col items-center justify-center text-center cursor-default transition-all duration-300`}>
                                    <div className="text-4xl mb-4 transition-all duration-300 cursor-pointer transform hover:scale-110">
                                        {cat.icon}
                                    </div>
                                    <h4 className="text-lg font-bold text-slate-800">{cat.name}</h4>
                                    <p className="text-xs text-gray-400 mt-1 font-medium">{cat.items}</p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>

            <div className="mt-24 flex items-center justify-between border-b border-gray-100 pb-8">
                <div className="flex flex-col">
                    <h3 className="text-4xl font-black text-slate-800 tracking-tight">
                        Day Of The <span className="text-brand-blue">Deal</span>
                    </h3>
                    <p className="text-gray-400 text-sm font-medium mt-1">
                        Don't wait. The time will never be just right.
                    </p>
                </div>

                <div className="flex items-center gap-3">
                    <TimerBox value={countdown.days} label="Days" />
                    <TimerBox value={countdown.hours} label="Hours" />
                    <TimerBox value={countdown.mins} label="Mins" />
                    <TimerBox value={countdown.secs} label="Secs" />
                </div>
            </div>
        </section>
    );
}

function TimerBox({ value, label }) {
    return (
        <div className="flex flex-col items-center justify-center bg-gray-50 border border-gray-100 rounded-xl min-w-[70px] py-3 px-2 shadow-sm">
            <span className="text-xl font-black text-slate-800 leading-none">
                {value}
            </span>
            <span className="text-[10px] uppercase font-bold text-gray-400 mt-1.5 tracking-wider">
                {label}
            </span>
        </div>
    );
}