
import React from 'react';
import { Facebook, Instagram, Heart } from 'lucide-react';
import { RESTAURANT_NAME, ADDRESS } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-400 py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-white mb-2 tracking-tight">{RESTAURANT_NAME}</h2>
            <p className="text-sm">{ADDRESS}</p>
          </div>

          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition-colors p-2 bg-white/5 rounded-full">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-white transition-colors p-2 bg-white/5 rounded-full">
              <Instagram className="w-6 h-6" />
            </a>
          </div>

          <div className="text-center md:text-right text-sm">
            <p>© {new Date().getFullYear()} {RESTAURANT_NAME}. Kaikki oikeudet pidätetään.</p>
            <p className="mt-1 flex items-center justify-center md:justify-end text-xs opacity-50">
              Made with <Heart className="w-3 h-3 mx-1 text-red-600 fill-current" /> in Seinäjoki
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
