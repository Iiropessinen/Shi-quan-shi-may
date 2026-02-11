
import React from 'react';
import { Utensils, Coffee, Salad, Zap } from 'lucide-react';

export const About: React.FC = () => {
  const features = [
    {
      icon: <Utensils className="w-6 h-6 text-red-600" />,
      title: "Lämminruoka",
      desc: "Monipuolinen valikoima perinteisiä kiinalaisia makuja."
    },
    {
      icon: <Zap className="w-6 h-6 text-red-600" />,
      title: "Tuore Sushi",
      desc: "Käsintehtyä sushia osana buffet-pöytäämme."
    },
    {
      icon: <Salad className="w-6 h-6 text-red-600" />,
      title: "Raikas Salaatti",
      desc: "Terveelliset salaatit ja alkuruoat jokaiseen makuun."
    },
    {
      icon: <Coffee className="w-6 h-6 text-red-600" />,
      title: "Juomat",
      desc: "Buffet hintaan sisältyy aina tee ja kahvi."
    }
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://picsum.photos/seed/restaurant-interior/800/1000"
                alt="Restaurant interior"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-red-700 text-white p-8 rounded-2xl shadow-xl hidden sm:block max-w-[280px]">
              <p className="text-sm uppercase tracking-widest mb-2 opacity-80">Sijaintimme</p>
              <p className="text-xl font-bold italic leading-tight">Löydät meidät Seinäjoen Citypihan alueelta.</p>
            </div>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-stone-900 mb-6">
              Makuja, jotka vievät sinut suoraan <span className="text-red-700">Kiinaan</span>
            </h2>
            <p className="text-lg text-stone-600 mb-8 leading-relaxed">
              Shi Quan Shi Mei on tunnelmallinen ravintola Seinäjoen ydinkeskustassa. Panostamme laadukkaisiin raaka-aineisiin ja aitoihin valmistusmenetelmiin. Buffet-tarjontamme on suunniteltu tarjoamaan jokaiselle jotakin – sushin ystävistä perinteisen kiinalaisen keittiön ystäviin.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {features.map((f, i) => (
                <div key={i} className="flex space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center">
                    {f.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-900">{f.title}</h4>
                    <p className="text-sm text-stone-500">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 bg-stone-50 border-l-4 border-red-700 rounded-r-xl">
              <h3 className="text-xl font-bold text-stone-900 mb-2">Suosittu Buffet</h3>
              <p className="text-stone-600">
                Lämminruokaa, sushia, salaattia, keittoa ja juomia (tee ja kahvi) – kaikki yhdessä paketissa. Täydellinen lounas tai rento illallinen.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
