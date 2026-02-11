
import { MenuItem, OpeningHour, Review } from './types';

export const RESTAURANT_NAME = "Shi Quan Shi Mei";
export const ADDRESS = "Kauppakatu 1, 60100 Seinäjoki, Finland";
export const PHONE = "+358 46 5600728";
export const EMAIL = "ajing.chen@hotmail.com";

export const OPENING_HOURS: OpeningHour[] = [
  { days: "Ma–Pe", hours: "10:30 – 21:00" },
  { days: "La", hours: "11:30 – 21:00" },
  { days: "Su", hours: "12:00 – 21:00" }
];

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 1,
    name: "Friteerattua kanaa",
    description: "Rapeaksi paistettua kanaa tarjoiltuna perinteisen hapanimeläkastikkeen kera.",
    price: "14,50€",
    category: "Kana",
    image: "https://picsum.photos/seed/chicken/600/400"
  },
  {
    id: 2,
    name: "Paistettua curry-nuudelia",
    description: "Maukasta nuudelia, vihanneksia ja valitsemaasi proteiinia maustettuna talon currylla.",
    price: "13,90€",
    category: "Nuudeli",
    image: "https://picsum.photos/seed/noodles/600/400"
  },
  {
    id: 3,
    name: "Härkää mustapapukastikkeessa",
    description: "Mehevää naudanlihaa ja tuoreita kasviksia suolaisessa mustapapukastikkeessa.",
    price: "15,50€",
    category: "Nauta",
    image: "https://picsum.photos/seed/beef/600/400"
  },
  {
    id: 4,
    name: "Sushi-lajitelma (12kpl)",
    description: "Valikoima nigireitä ja makeja, valmistettu päivän tuoreimmista raaka-aineista.",
    price: "14,90€",
    category: "Sushi",
    image: "https://picsum.photos/seed/sushi/600/400"
  },
  {
    id: 5,
    name: "Lounasbuffet",
    description: "Sisältää lämpimiä ruokia, sushia, salaattipöydän, keiton sekä kahvin tai teen.",
    price: "13,50€",
    category: "Buffet",
    image: "https://picsum.photos/seed/buffet/600/400"
  },
  {
    id: 6,
    name: "Kevätkääryleet (4kpl)",
    description: "Rapeita kasvistäytteisiä kääryleitä chilikastikkeen kera.",
    price: "6,50€",
    category: "Kasvis",
    image: "https://picsum.photos/seed/springrolls/600/400"
  }
];

export const REVIEWS: Review[] = [
  {
    id: 1,
    name: "Matti Virtanen",
    text: "Seinäjoen paras kiinalainen buffet! Erityisesti sushi on aina tuoretta.",
    rating: 5
  },
  {
    id: 2,
    name: "Emma Kallio",
    text: "Ystävällinen palvelu ja todella maittava hapanimeläkana. Suosittelen lämpimästi.",
    rating: 4
  },
  {
    id: 3,
    name: "Lasse Korhonen",
    text: "Monipuolinen buffet ja rauhallinen tunnelma. Hinta-laatusuhde on kohdillaan.",
    rating: 5
  }
];
