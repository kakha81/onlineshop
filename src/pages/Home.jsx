import styled from "styled-components";
import Navbar from "../components/Navbar";
import MenuContent from "../components/MenuContent";
import Slider from "../components/Slider";
import FilterProductsContainer from "../components/filter/FilterProductsContainer";
import Products from "../components/productList/Products";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";

const Header = styled.div`
  position: sticky;
  top: 0;
  z-index: 999;
`;

const Home = () => {
  return (
    <>
      <Header>
        <Navbar />
        <MenuContent />
      </Header>
      <Slider />
      <FilterProductsContainer />
      <Products />
      <NewsLetter />
      <Footer />
    </>
  );
};

export default Home;
