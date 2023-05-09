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
    img: require('./Images/1.png'),
    title: 'SUMMER SALE',
    desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
    bg: '#f5fafd',
  },
  {
    id: 2,
    img: require('./Images/2.png'),
    title: 'AUTUMN COLLECTION',
    desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
    bg: '#f5fafd',
  },
  {
    id: 3,
    img: require('./Images/3.png'),
    title: 'WINTER COLLECTION',
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
    img: require('./Images/1.png'),
    title: 'SHIRT STYLE',
  },
  {
    id: 2,
    img: require('./Images/2.png'),
    title: 'LOUNGEWEAR LOVE',
  },
  {
    id: 3,
    img: require('./Images/3.png'),
    title: 'LIGHT JACKETS',
  },
];

interface popularProduct {
  id: number;
  img: string;
}

export const popularProducts: popularProduct[] = [
  {
    id: 1,
    img: require('./Images/1.png'),
  },
  {
    id: 2,
    img: require('./Images/2.png'),
  },
  {
    id: 3,
    img: require('./Images/3.png'),
  },
];
