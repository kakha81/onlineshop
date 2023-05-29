interface productArray {
  id: number;
  gender: string;
  category: string;
  name: string;
  color: string;
  size: number;
  price: number;
  img: string;
}

export const productsArray: productArray[] = [
  {
    id: 1,
    gender: 'men',
    category: 'runners',
    name: 'New Balance',
    color: 'white',
    size: 35,
    price: 23,
    img: require('./Images/1.png'),
  },
  {
    id: 2,
    gender: 'men',
    category: 'casualwear',
    name: 'Nike',
    color: 'grey',
    size: 44,
    price: 30,
    img: require('./Images/2.png'),
  },
  {
    id: 3,
    gender: 'woman',
    category: 'runners',
    name: 'Puma',
    color: 'multi',
    size: 38,
    price: 45,
    img: require('./Images/3.png'),
  },
  {
    id: 4,
    gender: 'men',
    category: 'basketball',
    name: 'Levis',
    color: 'grey',
    size: 45,
    price: 75,
    img: require('./Images/4.png'),
  },
  {
    id: 5,
    gender: 'woman',
    category: 'casualwear',
    name: 'Tommy Hilfiger',
    color: 'blue',
    size: 37,
    price: 37,
    img: require('./Images/5.png'),
  },
  {
    id: 6,
    gender: 'men',
    category: 'basketball',
    name: 'Air Jordan',
    color: 'grey',
    size: 46,
    price: 37,
    img: require('./Images/6.png'),
  },
  {
    id: 7,
    gender: 'woman',
    category: 'basketball',
    name: 'Reabok',
    color: 'white',
    size: 41,
    price: 120,
    img: require('./Images/7.png'),
  },
  {
    id: 8,
    gender: 'woman',
    category: 'basketball',
    name: 'Reabok',
    color: 'grey',
    size: 39,
    price: 35,
    img: require('./Images/8.png'),
  },
  {
    id: 9,
    gender: 'men',
    category: 'runners',
    name: 'Reabok',
    color: 'blue',
    size: 44,
    price: 45,
    img: require('./Images/9.png'),
  },
  {
    id: 10,
    gender: 'men',
    category: 'runners',
    name: 'Reabok',
    color: 'white',
    size: 43,
    price: 67,
    img: require('./Images/10.png'),
  },
  {
    id: 11,
    gender: 'men',
    category: 'runners',
    name: 'Reabok',
    color: 'grey',
    size: 42,
    price: 55,
    img: require('./Images/11.png')
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
