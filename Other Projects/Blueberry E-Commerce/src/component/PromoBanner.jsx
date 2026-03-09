import Bakery from "../assets/productImage/bakeryBlast.png"
import Fruits from "../assets/productImage/fruitsBlast.png"

export default function PromoBanners() {
    return (
        <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-12 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 font-sans">

            <div className="relative group overflow-hidden rounded-[24px] sm:rounded-[30px] lg:rounded-[40px] min-h-[280px] sm:min-h-[340px] flex items-center bg-[#FDF2D2]">
                {/* Triple Diagonal Background Shapes */}
                <div className="absolute inset-0 bg-white/40 skew-x-[-35deg] translate-x-[-10%] z-0" />
                <div className="absolute inset-0 bg-white/20 skew-x-[-35deg] translate-x-[40%] z-0" />

                <div className="relative z-10 w-full flex flex-col sm:flex-row items-center px-6 sm:px-10 lg:px-14 py-8 sm:py-0 gap-6 sm:gap-10">
                    <div className="w-full sm:w-1/2 flex justify-center transform group-hover:scale-110 transition-transform duration-700">
                            <img
                                src={Bakery}
                                alt="Promo Asset"
                                className="w-full h-full object-contain p-4" />
                    </div>
                    {/* Text Content */}
                    <div className="w-full sm:w-1/2 space-y-4 sm:space-y-5 text-center sm:text-left">
                        <h3 className="text-2xl sm:text-[32px] font-black text-slate-800 leading-[1.1] tracking-tight">
                            Tasty Snack & <br /> Fast food
                        </h3>
                        <p className="text-sm font-medium text-gray-500 italic leading-relaxed">
                            The flavour of something special
                        </p>
                        <button className="px-8 py-3 bg-white border border-gray-100 text-slate-800 text-sm font-black rounded-xl shadow-sm hover:bg-slate-800 hover:text-white transition-all transform active:scale-95">
                            Shop Now
                        </button>
                    </div>
                </div>
            </div>

            {/* 2. Fruits & Vegetables Banner */}
            <div className="relative group overflow-hidden rounded-[24px] sm:rounded-[30px] lg:rounded-[40px] min-h-[280px] sm:min-h-[340px] flex items-center bg-[#FDEEEE]">
                {/* Triple Diagonal Background Shapes */}
                <div className="absolute inset-0 bg-white/40 skew-x-[-35deg] translate-x-[-10%] z-0" />
                <div className="absolute inset-0 bg-white/20 skew-x-[-35deg] translate-x-[40%] z-0" />

                <div className="relative z-10 w-full flex flex-col sm:flex-row items-center px-6 sm:px-10 lg:px-14 py-8 sm:py-0 gap-6 sm:gap-10">
                    <div className="w-full sm:w-1/2 flex justify-center transform group-hover:scale-110 transition-transform duration-700">
                            <img
                                src={Fruits}
                                alt="Promo Asset"
                                className="w-full h-full object-contain p-4"/>
                    </div>

                    {/* Text Content */}
                    <div className="w-full sm:w-1/2 space-y-4 sm:space-y-5 text-center sm:text-left">
                        <h3 className="text-2xl sm:text-[32px] font-black text-slate-800 leading-[1.1] tracking-tight">
                            Fresh Fruits & <br /> Vegetables
                        </h3>
                        <p className="text-sm font-medium text-gray-500 italic leading-relaxed">
                            A healthy meal for every one
                        </p>
                        <button className="px-8 py-3 bg-white border border-gray-100 text-slate-800 text-sm font-black rounded-xl shadow-sm hover:bg-slate-800 hover:text-white transition-all transform active:scale-95">
                            Shop Now
                        </button>
                    </div>
                </div>
            </div>

        </section>
    );
}