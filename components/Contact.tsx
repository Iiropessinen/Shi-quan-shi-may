
import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { ADDRESS, PHONE, EMAIL, OPENING_HOURS } from '../constants';

export const Contact: React.FC = () => {
  return (
    <section id="location" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-bold text-stone-900 mb-8">Tule käymään tai <span className="text-red-700">ota yhteyttä</span></h2>
            
            <div className="space-y-8 mb-12">
              <div className="flex items-start space-x-4">
                <div className="bg-stone-100 p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-red-700" />
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 mb-1">Osoite</h4>
                  <p className="text-stone-600">{ADDRESS}</p>
                  <p className="text-stone-400 text-sm">Seinäjoki Citypiha</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-stone-100 p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-red-700" />
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 mb-1">Puhelin</h4>
                  <a href={`tel:${PHONE}`} className="text-stone-600 hover:text-red-700 transition-colors font-medium">
                    {PHONE}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-stone-100 p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-red-700" />
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 mb-1">Sähköposti</h4>
                  <a href={`mailto:${EMAIL}`} className="text-stone-600 hover:text-red-700 transition-colors">
                    {EMAIL}
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-stone-50 p-8 rounded-3xl">
              <div className="flex items-center space-x-3 mb-6">
                <Clock className="w-6 h-6 text-red-700" />
                <h4 className="text-xl font-bold text-stone-900">Aukioloajat</h4>
              </div>
              <div className="space-y-4">
                {OPENING_HOURS.map((oh, i) => (
                  <div key={i} className="flex justify-between items-center border-b border-stone-200 pb-2">
                    <span className="font-medium text-stone-700">{oh.days}</span>
                    <span className="text-stone-900 font-bold">{oh.hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative h-[500px] lg:h-auto rounded-3xl overflow-hidden shadow-xl">
            {/* Google Maps placeholder styling */}
            <div className="absolute inset-0 bg-stone-200 flex items-center justify-center">
              <div className="text-center p-8">
                <MapPin className="w-16 h-16 text-red-700 mx-auto mb-4" />
                <h4 className="text-2xl font-bold mb-2">Interaktiivinen Kartta</h4>
                <p className="text-stone-600 mb-6">Löydät meidät Seinäjoen keskustasta, Citypihan viihtyisältä alueelta.</p>
                <a 
                  href="https://www.google.com/maps/search/Kauppakatu+1+Seinäjoki" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-3 bg-red-700 text-white font-bold rounded-full hover:bg-red-800 transition-colors"
                >
                  Avaa Google Mapsissa
                </a>
              </div>
            </div>
            {/* Real map iframe could go here if needed, but using a cleaner UI representation for design quality */}
          </div>
        </div>
      </div>
    </section>
  );
};
