import hero from "../assets/hero.png"


export default function Hero() {
  return (
    <section className="relative w-full min-h-[85vh] bg-[#F9FBFF] flex items-center overflow-hidden">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[50%] h-[80%] bg-white rounded-l-[200px] opacity-40 blur-3xl" />

      <div className="max-w-[1440px] mx-auto px-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        <div className="relative z-10 space-y-6">
          <p className="text-gray-400 font-medium tracking-wide">Flat 30% Off</p>
          <h1 className="text-6xl xl:text-7xl font-extrabold text-slate-800 leading-[1.1]">
            Explore <span className="text-brand-blue">Organic</span> <br />
            & Fresh Vegetables
          </h1>
          <div className="pt-4">
            <button className="px-10 py-4 border-2 border-slate-800 text-slate-800 font-bold rounded-xl hover:bg-slate-800 hover:text-white transition-all duration-300 transform active:scale-95">
              Shop Now
            </button>
          </div>

          <div className="flex gap-3 pt-12">
            <div className="w-10 h-2 bg-slate-400 rounded-full" />
            <div className="w-10 h-2 bg-brand-blue rounded-full" />
            <div className="w-10 h-2 bg-brand-light rounded-full" />
          </div>
        </div>

        <div className="relative flex justify-center">
          <img src={hero}
            alt="Organic Vegetables"
            className="w-full max-w-2xl drop-shadow-2xl animate-bounce-slow" />
        </div>
      </div>

      <div className="absolute left-10 bottom-10 flex flex-col gap-6 text-[10px] font-black text-gray-300 tracking-tighter">
        {['IN', 'DR', 'LI', 'FB'].map(s => <span key={s} className="hover:text-brand-blue cursor-pointer">{s}</span>)}
      </div>

      <div className="absolute right-10 bottom-24 origin-right rotate-90 text-[10px] font-bold text-gray-400 tracking-[0.2em] uppercase">
        Scroll Page —————————
      </div>
    </section>
  );
}