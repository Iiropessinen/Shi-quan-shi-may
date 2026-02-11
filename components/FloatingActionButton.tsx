
import React from 'react';
import { Phone } from 'lucide-react';
import { PHONE } from '../constants';

export const FloatingActionButton: React.FC = () => {
  return (
    <a
      href={`tel:${PHONE}`}
      className="md:hidden fixed bottom-6 right-6 z-40 bg-red-700 text-white p-4 rounded-full shadow-2xl flex items-center justify-center animate-bounce hover:scale-110 transition-transform active:scale-95"
      aria-label="Soita ravintolaan"
    >
      <Phone className="w-6 h-6" />
    </a>
  );
};
