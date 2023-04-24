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
        title: "SUMMER SALE",
        desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
        bg:"#f5fafd",
       
    },
    {
        id: 2,
        img: require('./Images/2.png'),
        title: "AUTUMN COLLECTION",
        desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
        bg:"#f5fafd",
       
    },
    {
        id: 3,
        img: require('./Images/3.png'),
        title: "WINTER COLLECTION",
        desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
        bg:"#f5fafd",
       
    },
]