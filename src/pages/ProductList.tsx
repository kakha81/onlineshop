import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Products from '../components/productList/Products';
import NewsLetter from '../components/NewsLetter';
import Footer from '../components/Footer';
import MenuContent from '../components/MenuContent';
import FilterProducts from '../components/productList/FilterProducts';

const Header = styled.div`
  position: sticky;
  top: 0;
  z-index: 1;
`;

const Title = styled.h1`
  margin: 1.2em;
`;

const ProductList = () => {
  return (
    <>
      <Header>
        <Navbar />
        <MenuContent />
      </Header>
      <Title>SHOES</Title>
      <FilterProducts />
      <Products />
      <NewsLetter />
      <Footer />
    </>
  );
};

export default ProductList;
