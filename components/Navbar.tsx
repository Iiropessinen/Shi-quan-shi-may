
import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { RESTAURANT_NAME, PHONE } from '../constants';

interface NavbarProps {
  isScrolled: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Etusivu', href: '#home' },
    { name: 'Menu', href: '#menu' },
    { name: 'Buffet', href: '#about' },
    { name: 'Sijainti', href: '#location' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <span className={`text-2xl font-bold tracking-tight ${isScrolled ? 'text-red-800' : 'text-white'}`}>
              {RESTAURANT_NAME}
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-red-600 ${isScrolled ? 'text-stone-700' : 'text-white'}`}
              >
                {link.name}
              </a>
            ))}
            <a
              href={`tel:${PHONE}`}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-700 hover:bg-red-800"
            >
              <Phone className="w-4 h-4 mr-2" />
              Soita
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md ${isScrolled ? 'text-stone-700' : 'text-white'}`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-16 left-0 w-full animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-stone-100">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-4 text-base font-medium text-stone-700 hover:text-red-700 hover:bg-stone-50 border-b border-stone-50"
              >
                {link.name}
              </a>
            ))}
            <div className="p-4 grid grid-cols-1 gap-4">
              <a
                href={`tel:${PHONE}`}
                className="flex items-center justify-center w-full px-4 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-700"
              >
                <Phone className="w-5 h-5 mr-2" />
                {PHONE}
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
