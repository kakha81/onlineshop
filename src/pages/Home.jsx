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
  const [popular, setPopular] = useState(productsArray);
  const [filtered, setFiltered] = useState(productsArray);
  const [activeButton, setActiveButton] = useState(0);

  return (
    <>
      <Header>
        <Navbar />
        <MenuContent />
      </Header>
      <Slider />
      <FilterProducts
        popular={popular}
        setFiltered={setFiltered}
        activeButton={activeButton}
        setActiveButton={setActiveButton}
      />
      <Products filtered={filtered} />
      <NewsLetter />
      <Footer />
    </>
  );
};

export default Home;
