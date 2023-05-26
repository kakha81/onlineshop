import styled from 'styled-components';

import Navbar from '../components/Navbar';
import MenuContent from '../components/MenuContent';
import Slider from '../components/Slider';
import Products from '../components/productList/Products';
import NewsLetter from '../components/NewsLetter';
import Footer from '../components/Footer';

const Header = styled.div`
  position: sticky;
  top: 0;
  z-index: 1;
`;

const Home = () => {
  return (
    <>
      <Header>
        <Navbar />
        <MenuContent />
      </Header>
      <Slider />
      <Products />
      <NewsLetter />
      <Footer />
    </>
  );
};

export default Home;
