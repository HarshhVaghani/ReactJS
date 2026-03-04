import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Helen Albert',
    role: 'Customer',
    image: '👩‍🦱',
    rating: 5,
    testimonial: 'Outstanding quality and fresh produce! The vegetables arrived in perfect condition and taste incredibly fresh. Best online produce shopping experience!',
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    role: 'Verified Buyer',
    image: '👱‍♀️',
    rating: 5,
    testimonial: 'Amazing service and fantastic selection. Delivery was fast and professional. Highly recommend to everyone!',
  },
  {
    id: 3,
    name: 'Emma Davis',
    role: 'Regular Customer',
    image: '👩‍🦱',
    rating: 5,
    testimonial: 'Great prices and excellent quality. The organic options are fantastic and I love supporting local farmers through this platform.',
  },
];

export default function TestimonialsSection() {
  return (
    <section className="max-w-[1440px] mx-auto px-10 py-20 font-sans">
      <div className="text-center mb-16">
        <p className="text-gray-400 font-medium tracking-wide mb-2">Customer Love</p>
        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800">
          What Our Customers Say
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-white border border-gray-200 rounded-[25px] p-8 hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-brand-blue to-brand-light flex items-center justify-center text-3xl">
                {testimonial.image}
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-lg">{testimonial.name}</h3>
                <p className="text-gray-500 text-sm">{testimonial.role}</p>
              </div>
            </div>

            <div className="flex gap-1 mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
              ))}
            </div>

            <p className="text-gray-600 leading-relaxed text-sm">
              {testimonial.testimonial}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
