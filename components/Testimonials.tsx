
import React from 'react';
import { Star, Quote } from 'lucide-react';
import { REVIEWS } from '../constants';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-stone-900 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 p-24 opacity-5 pointer-events-none">
        <Quote className="w-96 h-96" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-red-500 font-medium tracking-widest uppercase mb-4">Asiakkaidemme ääni</h2>
          <h3 className="text-4xl font-bold">Miksi valita meidät?</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review) => (
            <div key={review.id} className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl">
              <div className="flex mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${i < review.rating ? 'text-yellow-400 fill-current' : 'text-white/20'}`}
                  />
                ))}
              </div>
              <p className="text-stone-300 italic mb-8 leading-relaxed">
                "{review.text}"
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-full bg-red-800 flex items-center justify-center font-bold text-sm">
                  {review.name[0]}
                </div>
                <div>
                  <h4 className="font-bold">{review.name}</h4>
                  <p className="text-xs text-stone-500 uppercase tracking-wider">Paikallinen opas</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
