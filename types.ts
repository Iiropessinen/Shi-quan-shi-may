
export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  category: 'Buffet' | 'Kana' | 'Nauta' | 'Nuudeli' | 'Kasvis' | 'Sushi';
  image: string;
}

export interface OpeningHour {
  days: string;
  hours: string;
}

export interface Review {
  id: number;
  name: string;
  text: string;
  rating: number;
}
