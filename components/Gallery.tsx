
import React from 'react';

export const Gallery: React.FC = () => {
  const images = [
    "https://picsum.photos/seed/food1/600/600",
    "https://picsum.photos/seed/food2/600/600",
    "https://picsum.photos/seed/food3/600/600",
    "https://picsum.photos/seed/food4/600/600",
    "https://picsum.photos/seed/food5/600/600",
    "https://picsum.photos/seed/food6/600/600"
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-red-700 font-medium tracking-widest uppercase mb-4">Galleria</h2>
          <h3 className="text-4xl font-bold text-stone-900">Ruoka-annoksiamme ja tunnelmaa</h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((src, i) => (
            <div key={i} className="aspect-square rounded-2xl overflow-hidden group">
              <img
                src={src}
                alt={`Ruokakuva ${i + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 cursor-pointer"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
