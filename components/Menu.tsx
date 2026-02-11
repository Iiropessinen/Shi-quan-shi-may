
import React, { useState } from 'react';
import { MENU_ITEMS } from '../constants';
import { MenuItem } from '../types';

export const Menu: React.FC = () => {
  const categories: MenuItem['category'][] = ['Buffet', 'Kana', 'Nauta', 'Nuudeli', 'Sushi', 'Kasvis'];
  const [activeCategory, setActiveCategory] = useState<MenuItem['category'] | 'Kaikki'>('Kaikki');

  const filteredItems = activeCategory === 'Kaikki' 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-red-700 font-medium tracking-widest uppercase mb-4">Ruokalistamme</h2>
        <h3 className="text-4xl md:text-5xl font-bold text-stone-900 mb-12">Herkkuja jokaiseen makuun</h3>

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveCategory('Kaikki')}
            className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
              activeCategory === 'Kaikki' ? 'bg-red-700 text-white' : 'bg-white text-stone-600 hover:bg-stone-200'
            }`}
          >
            Kaikki
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                activeCategory === cat ? 'bg-red-700 text-white' : 'bg-white text-stone-600 hover:bg-stone-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {filteredItems.map((item) => (
            <div key={item.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 group">
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-red-700 font-bold text-sm">
                  {item.price}
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-xl font-bold text-stone-900">{item.name}</h4>
                  <span className="text-xs uppercase tracking-widest text-red-600 font-bold bg-red-50 px-2 py-1 rounded">
                    {item.category}
                  </span>
                </div>
                <p className="text-stone-500 text-sm leading-relaxed mb-4">
                  {item.description}
                </p>
                <div className="flex items-center text-xs text-stone-400">
                  <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                  Saatavilla päivittäin
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 inline-flex flex-col sm:flex-row gap-6 p-8 bg-red-900 text-white rounded-3xl shadow-2xl">
          <div className="text-left sm:flex-grow">
            <h4 className="text-2xl font-bold mb-2">Haluatko tilata kotiin?</h4>
            <p className="text-red-100/80 max-w-md">Tarjoamme helpon ja nopean takeaway-palvelun. Soita tai tilaa suoraan tiskiltä!</p>
          </div>
          <div className="flex items-center">
            <button className="px-10 py-4 bg-white text-red-900 font-bold rounded-full hover:bg-stone-100 transition-colors w-full sm:w-auto shadow-lg">
              Tilaa Takeaway
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
