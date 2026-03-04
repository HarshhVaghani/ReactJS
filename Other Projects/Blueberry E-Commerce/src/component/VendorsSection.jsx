import React from 'react';

const vendors = [
  { id: 1, name: 'Organic Farmers Co.', logo: '🌾' },
  { id: 2, name: 'Fresh Harvest Ltd.', logo: '🥬' },
  { id: 3, name: 'Nature Produce Inc.', logo: '🌱' },
  { id: 4, name: 'Green Valley Farms', logo: '🌻' },
];

export default function VendorsSection() {
  return (
    <section className="max-w-[1440px] mx-auto px-10 py-20 font-sans">
      <div className="text-center mb-16">
        <p className="text-gray-400 font-medium tracking-wide mb-2">Trusted Partners</p>
        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800">
          Tag Vendors
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {vendors.map((vendor) => (
          <div
            key={vendor.id}
            className="flex flex-col items-center justify-center p-8 border border-gray-200 rounded-[25px] hover:shadow-lg hover:border-brand-blue transition-all duration-300 bg-white group cursor-pointer"
          >
            <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
              {vendor.logo}
            </div>
            <p className="text-gray-700 font-semibold text-center text-sm">
              {vendor.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
