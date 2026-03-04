import React from 'react';

const galleryItems = [
  {
    id: 1,
    title: 'Seasonal Fresh Vegetables',
    category: 'Vegetables',
    image: '🥕',
    description: 'Hand-picked seasonal vegetables'
  },
  {
    id: 2,
    title: 'Organic Fresh Produce',
    category: 'Organic',
    image: '🥬',
    description: 'Certified organic fresh produce'
  },
  {
    id: 3,
    title: 'Citrus Fruits Selection',
    category: 'Fruits',
    image: '🍊',
    description: 'Fresh citrus fruits collection'
  },
  {
    id: 4,
    title: 'Berry Collection',
    category: 'Berries',
    image: '🫐',
    description: 'Premium organic berries'
  },
];

const smallGallery = [
  { id: 1, image: '🥒' },
  { id: 2, image: '🌽' },
  { id: 3, image: '🥕' },
  { id: 4, image: '🍅' },
  { id: 5, image: '🥦' },
  { id: 6, image: '🌿' },
];

export default function GallerySection() {
  return (
    <section className="max-w-[1440px] mx-auto px-10 py-20 font-sans">
      {/* Main Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {galleryItems.map((item) => (
          <div
            key={item.id}
            className="group relative overflow-hidden rounded-[20px] bg-gradient-to-br from-gray-100 to-gray-50 aspect-square cursor-pointer"
          >
            <div className="w-full h-full flex items-center justify-center text-7xl group-hover:scale-110 transition-transform duration-500">
              {item.image}
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-end justify-start p-6">
              <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-xs font-semibold text-gray-300 mb-1">{item.category}</p>
                <h3 className="text-lg font-bold">{item.title}</h3>
                <p className="text-sm text-gray-200">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Small Gallery Preview */}
      <div className="flex gap-4 justify-center flex-wrap">
        {smallGallery.map((item) => (
          <div
            key={item.id}
            className="w-24 h-24 rounded-[15px] bg-gray-100 flex items-center justify-center text-4xl hover:bg-brand-blue hover:scale-110 transition-all duration-300 cursor-pointer"
          >
            {item.image}
          </div>
        ))}
      </div>
    </section>
  );
}
