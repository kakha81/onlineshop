interface colorProp {
  id: number;
  color: string;
}
export const colors: colorProp[] = [
  {
    id: 1,
    color: 'white',
  },
  {
    id: 2,
    color: 'Black',
  },
  {
    id: 3,
    color: 'Red',
  },
  {
    id: 4,
    color: 'Blue',
  },
  {
    id: 5,
    color: 'Yellow',
  },
  {
    id: 6,
    color: 'Green',
  },
];

interface sizeProp {
  id: number;
  size: string;
}

export const sizes: sizeProp[] = [
  {
    id: 1,
    size: '30',
  },
  {
    id: 2,
    size: '31',
  },
  {
    id: 3,
    size: '32',
  },
  {
    id: 4,
    size: '33',
  },
  {
    id: 5,
    size: '34',
  },
  {
    id: 6,
    size: '35',
  },
  {
    id: 7,
    size: '36',
  },
  {
    id: 8,
    size: '37',
  },
  {
    id: 9,
    size: '38',
  },
  {
    id: 10,
    size: '39',
  },
  {
    id: 11,
    size: '40',
  },
  {
    id: 12,
    size: '41',
  },
  {
    id: 13,
    size: '42',
  },
  {
    id: 14,
    size: '43',
  },
  {
    id: 15,
    size: '44',
  },
  {
    id: 16,
    size: '45',
  },
  {
    id: 17,
    size: '46',
  },
  {
    id: 18,
    size: '47',
  },
];

interface SliderItem {
  id: number;
  img: string;
  title: string;
  desc: string;
  bg: string;
  alt?: string;
}

export const sliderItems: SliderItem[] = [
  {
    id: 1,
    img: require('./Images/4.png'),
    title: `ATHLET'S WEAR`,
    desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
    bg: '#f5fafd',
  },
  {
    id: 2,
    img: require('./Images/2.png'),
    title: 'CASUAL WEAR',
    desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
    bg: '#f5fafd',
  },
  {
    id: 3,
    img: require('./Images/10.png'),
    title: 'RUNNERS',
    desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
    bg: '#f5fafd',
  },
];

interface category {
  id: number;
  img: string;
  title: string;
}

export const categories: category[] = [
  {
    id: 1,
    img: require('./Images/7.png'),
    title: 'RUNNERS',
  },
  {
    id: 2,
    img: require('./Images/2.png'),
    title: `CASUAL WEAR`,
  },
  {
    id: 3,
    img: require('./Images/8.png'),
    title: `BASKETBALL`,
  },
  {
    id: 4,
    img: require('./Images/4.png'),
    title: `ATHLET'S WEAR`,
  },
];

interface popularProduct {
  id: number;
  name: string;
  price: number;
  img: string;
}

export const popularProducts: popularProduct[] = [
  {
    id: 1,
    name: 'New Balance',
    price: 23,
    img: require('./Images/1.png'),
  },
  {
    id: 2,
    name: 'Nike',
    price: 30,
    img: require('./Images/2.png'),
  },
  {
    id: 3,
    name: 'Puma',
    price: 45,
    img: require('./Images/3.png'),
  },
  {
    id: 4,
    name: 'Levis',
    price: 75,
    img: require('./Images/4.png'),
  },
  {
    id: 5,
    name: 'Tommy Hilfiger',
    price: 37,
    img: require('./Images/5.png'),
  },
];

interface city {
  id: number;
  city: string;
}

export const cities: city[] = [
  {
    id: 0,
    city: '',
  },
  {
    id: 1,
    city: 'Tbilisi',
  },
  {
    id: 2,
    city: 'Kutaisi',
  },
  {
    id: 3,
    city: 'Rustavi',
  },
  {
    id: 4,
    city: 'Batumi',
  },
  {
    id: 5,
    city: 'Zugdidi',
  },
  {
    id: 6,
    city: 'Telavi',
  },
  {
    id: 7,
    city: 'Akhaltsikhe',
  },
  {
    id: 8,
    city: 'Gori',
  },
  {
    id: 9,
    city: 'Abasha',
  },
  {
    id: 10,
    city: 'Akhalkalaki',
  },
  {
    id: 11,
    city: 'Bagdati',
  },
  {
    id: 12,
    city: 'Bolnisi',
  },
  {
    id: 13,
    city: 'Borjomi',
  },
  {
    id: 14,
    city: 'Dedoplistskaro',
  },
  {
    id: 15,
    city: 'Dmanisi',
  },
  {
    id: 16,
    city: 'Dusheti',
  },
  {
    id: 17,
    city: 'Gardabani',
  },
  {
    id: 18,
    city: 'Gurjaani',
  },
  {
    id: 19,
    city: 'Adigeni',
  },
  {
    id: 20,
    city: 'Vale',
  },
  {
    id: 21,
    city: 'Vani',
  },
  {
    id: 22,
    city: 'Zestaponi',
  },
  {
    id: 23,
    city: 'Tetritskaro',
  },
  {
    id: 24,
    city: 'Terjola',
  },
  {
    id: 25,
    city: 'Tianeti',
  },
  {
    id: 26,
    city: 'Kaspi',
  },
  {
    id: 27,
    city: 'Lagodekhi',
  },
  {
    id: 28,
    city: 'Lanchkhuti',
  },
  {
    id: 29,
    city: 'Marneuli',
  },
  {
    id: 30,
    city: 'Martvili',
  },
  {
    id: 31,
    city: 'Mestia',
  },
  {
    id: 32,
    city: 'Mtskheta',
  },
  {
    id: 33,
    city: 'Ninotsminda',
  },
  {
    id: 34,
    city: 'Ozurgeti',
  },
  {
    id: 35,
    city: 'Oni',
  },
  {
    id: 36,
    city: 'Sagarejo',
  },
  {
    id: 37,
    city: 'Samtredia',
  },
  {
    id: 38,
    city: 'Sachkhere',
  },
  {
    id: 39,
    city: 'Senaki',
  },
  {
    id: 40,
    city: 'Sighnaghi',
  },
  {
    id: 41,
    city: 'Stepantsminda',
  },
  {
    id: 42,
    city: 'Surami',
  },
  {
    id: 43,
    city: 'Tkibuli',
  },
  {
    id: 44,
    city: 'Poti',
  },
  {
    id: 45,
    city: 'Qareli',
  },
  {
    id: 46,
    city: 'Qobuleti',
  },
  {
    id: 47,
    city: 'Kvareli',
  },
  {
    id: 48,
    city: 'Chokhatauri',
  },
  {
    id: 49,
    city: 'Chkhorotsku',
  },
  {
    id: 50,
    city: 'Tsageri',
  },
  {
    id: 51,
    city: 'Tsalenjikha',
  },
  {
    id: 52,
    city: 'Tsalka',
  },
  {
    id: 53,
    city: 'Tsnori',
  },
  {
    id: 54,
    city: 'Tskaltubo',
  },
  {
    id: 55,
    city: 'Chiatura',
  },
  {
    id: 56,
    city: 'Kharagauli',
  },
  {
    id: 57,
    city: 'Khashuri',
  },
  {
    id: 58,
    city: 'Khobi',
  },
  {
    id: 59,
    city: 'Khoni',
  },
  {
    id: 60,
    city: 'Jvari',
  },
];
