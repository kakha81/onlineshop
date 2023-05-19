import styled from "styled-components";
import Navbar from "../components/Navbar";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";
import MenuContent from "../components/MenuContent";
import ProductItem from "../components/product/ProductItem";

const Header = styled.div`
  position: sticky;
  top: 0;
  z-index: 1;
`;

const Product = () => {
  return (
    <>
      <Header>
        <Navbar />
        <MenuContent />
      </Header>
      <ProductItem />
      <NewsLetter />
      <Footer />
    </>
  );
};

export default Product;
