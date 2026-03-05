import { ChevronRight, Headset, RotateCcw, ShieldCheck, Truck } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import FooterSection from "../component/FooterSection";
import One from "../assets/aboutus/one.jpg";
import Two from "../assets/aboutus/two.jpg";
import Three from "../assets/aboutus/three.jpg";
import OurStory from "../assets/ourstore.jpg";
import "swiper/css";

export default function AboutUsPage() {
  const services = [
    {
      icon: Truck,
      title: "Free Shipping",
      description: "Free shipping on all US order or above $200",
    },
    {
      icon: Headset,
      title: "24x7 Support",
      description: "Contact us 24 hours a day, 7 days a week",
    },
    {
      icon: RotateCcw,
      title: "30 Days Return",
      description: "Simply return it within 30 days for an exchange",
    },
    {
      icon: ShieldCheck,
      title: "Payment Secure",
      description: "Contact us 24 hours a day, 7 days a week",
    },
  ];

  const team = [
    {
      name: "Juliat Hilson",
      role: "Team Leader",
      image: Three,
    },
    {
      name: "Elena Wilson",
      role: "Manager",
      image: One,
    },
    {
      name: "Mario Bisop",
      role: "CEO",
      image: Two,
    },
    {
      name: "Juliat Hilson",
      role: "Team Leader",
      image: Three,
    },
    {
      name: "Elena Wilson",
      role: "Manager",
      image: One,
    },
    {
      name: "Mario Bisop",
      role: "CEO",
      image: Two,
    },
  ];

  const teamSlides = [...team, ...team];

  const storyPetals = [
    { top: "0%", left: "24%" },
    { top: "22%", left: "0%" },
    { top: "22%", left: "48%" },
    { top: "48%", left: "24%" },
  ];

  return (
    <div className="min-h-screen bg-[#f7f7fa]">
      <div className="bg-[#f3f4f8] border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-lg font-semibold text-slate-700">About Us</h1>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <a href="#" className="hover:text-indigo-500">Home</a>
            <ChevronRight size={14} />
            <span>About Us</span>
          </div>
        </div>
      </div>

      <section className="max-w-7xl mx-auto px-4 py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative mx-auto w-[360px] h-[340px] sm:w-[470px] sm:h-[440px]">
            {storyPetals.map((petal, index) => (
              <div
                key={index}
                className="absolute w-44 h-44 sm:w-60 sm:h-60 rounded-full overflow-hidden border-[5px] border-white shadow-md"
                style={{ top: petal.top, left: petal.left }}
              >
                <img src={OurStory} alt="Farm fresh" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>

          <div>
            <h2 className="text-4xl font-bold text-slate-700 leading-tight mb-3">
              About The <span className="text-indigo-500">BlueBerry</span>
            </h2>
            <p className="italic text-xl text-slate-600 font-medium mb-6">
              Farm-fresh Goodness, just a click Away.
            </p>

            <p className="text-gray-500 leading-8 mb-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit, rem! Et
              obcaecati rem nulla, aut assumenda unde minima earum distinctio porro excepturi.
            </p>
            <p className="text-gray-500 leading-8 mb-8">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit, rem! Et
              obcaecati rem nulla, aut assumenda unde minima earum distinctio porro excepturi.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-[#eff1f7] rounded-2xl px-6 py-5 text-center">
                <p className="text-4xl font-black text-slate-700">200 +</p>
                <p className="text-gray-500 text-sm mt-2">vendors</p>
              </div>
              <div className="bg-[#eff1f7] rounded-2xl px-6 py-5 text-center">
                <p className="text-4xl font-black text-slate-700">654k +</p>
                <p className="text-gray-500 text-sm mt-2">Sales</p>
              </div>
              <div className="bg-[#eff1f7] rounded-2xl px-6 py-5 text-center">
                <p className="text-4xl font-black text-slate-700">587k +</p>
                <p className="text-gray-500 text-sm mt-2">Customers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 pb-16">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-slate-700">
            Our <span className="text-indigo-500">Services</span>
          </h2>
          <p className="text-gray-500 mt-2">
            Customer service should not be a department. it should be the entire company.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <a
                key={index}
                href="#"
                className="block bg-white border border-gray-200 rounded-2xl p-7 text-center hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-full bg-indigo-50 text-indigo-500 flex items-center justify-center mx-auto mb-4">
                  <Icon size={22} />
                </div>
                <h3 className="text-xl font-bold text-slate-700 mb-2">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-6">{service.description}</p>
              </a>
            );
          })}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 pb-16">
        <div className="relative py-6">
          <div className="hidden lg:block absolute left-8 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full overflow-hidden border-4 border-white shadow-lg">
            <img src={One} alt="Avatar" className="w-full h-full object-cover" />
          </div>
          <div className="hidden lg:block absolute left-0 bottom-4 w-14 h-14 rounded-full overflow-hidden border-4 border-white shadow-lg">
            <img src={Three} alt="Avatar" className="w-full h-full object-cover" />
          </div>
          <div className="hidden lg:block absolute right-8 top-8 w-14 h-14 rounded-full overflow-hidden border-4 border-white shadow-lg">
            <img src={Two} alt="Avatar" className="w-full h-full object-cover" />
          </div>
          <div className="hidden lg:block absolute right-0 bottom-10 w-14 h-14 rounded-full overflow-hidden border-4 border-white shadow-lg">
            <img src={One} alt="Avatar" className="w-full h-full object-cover" />
          </div>

          <div className="relative z-10 mx-auto max-w-4xl flex flex-col lg:flex-row items-center gap-6">
            <p className="hidden lg:block [writing-mode:vertical-rl] rotate-180 text-gray-200 font-extrabold text-5xl tracking-tight">
              Testimonials
            </p>

            <div className="flex-1 bg-white border border-gray-200 rounded-[28px] p-5 sm:p-6 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-6 items-center">
                <div className="rounded-3xl overflow-hidden">
                  <img src={Two} alt="Nikki Albart" className="w-full h-[260px] object-cover" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-slate-700">Nikki Albart</h3>
                  <p className="text-gray-500 mt-1 mb-4">(Team Leader)</p>
                  <p className="text-gray-600 text-lg leading-8 border border-gray-200 rounded-2xl p-4">
                    “Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto at sint
                    eligendi possimus perspiciatis asperiores reiciendis hic amet alias aut quaerat
                    maiores blanditiis.”
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 pb-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-700 leading-tight">
            Our <span className="text-indigo-500">Team</span>
          </h2>
          <p className="mt-3 text-gray-500 text-lg">Meet out expert team members.</p>
        </div>

        <Swiper
          modules={[Autoplay]}
          loop={true}
          autoplay={{ delay: 2500, disableOnInteraction: false, pauseOnMouseEnter: true }}
          spaceBetween={28}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {teamSlides.map((member, index) => (
            <SwiperSlide key={`${member.name}-${index}`}>
              <div className="text-center">
                <div className="rounded-[22px] overflow-hidden bg-gray-200 aspect-[0.95] mb-4">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-3xl font-bold text-slate-700">{member.name}</h3>
                <p className="text-2xl text-gray-500 mt-1">{member.role}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <FooterSection showBrandsDirectory />
    </div>
  );
}
