
import React from 'react';
import { ChevronRight, ArrowDown } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://picsum.photos/seed/restaurant-hero/1920/1080"
          alt="Restaurant background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 bg-gradient-to-b from-black/60 via-black/30 to-black/60"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h2 className="text-red-400 font-medium tracking-widest uppercase mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
          Tervetuloa Seinäjoelle
        </h2>
        <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 leading-tight animate-in fade-in slide-in-from-bottom-8 duration-700">
          Aidon kiinalaisen keittiön <span className="text-red-500 italic">makuja</span>
        </h1>
        <p className="text-lg md:text-xl text-stone-200 mb-10 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-12 duration-700 delay-150">
          Shi Quan Shi Mei tarjoaa monipuolisen buffetin, tuoretta sushia ja herkulliset à la carte -annokset joka päivä Citypihan sydämessä.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-16 duration-700 delay-300">
          <a
            href="#menu"
            className="w-full sm:w-auto px-8 py-4 bg-red-700 hover:bg-red-800 text-white rounded-full font-semibold transition-all transform hover:scale-105 flex items-center justify-center"
          >
            Tutustu menuun
            <ChevronRight className="ml-2 w-5 h-5" />
          </a>
          <a
            href="#location"
            className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 rounded-full font-semibold transition-all flex items-center justify-center"
          >
            Pöytävaraus / Yhteystiedot
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-white/50 hover:text-white transition-colors">
          <ArrowDown className="w-8 h-8" />
        </a>
      </div>
    </section>
  );
};
