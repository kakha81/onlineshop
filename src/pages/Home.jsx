import styled from "styled-components";
import Navbar from "../components/Navbar";
import MenuContent from "../components/MenuContent";
import Slider from "../components/Slider";
import FilterProducts from "../components/filter/FilterProducts";
import Products from "../components/productList/Products";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";
import { productsArray } from "../data";
import { useState } from "react";

const Header = styled.div`
  position: sticky;
  top: 0;
  z-index: 999;
`;

const Home = () => {
  const [card, setCard] = useState(productsArray);

  return (
    <>
      <Header>
        <Navbar />
        <MenuContent />
      </Header>
      <Slider />
      <FilterProducts card={card} setCard={setCard} />
      <Products card={card} />
      <NewsLetter />
      <Footer />
    </>
  );
};

export default Home;
