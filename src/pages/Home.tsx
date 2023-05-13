import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import Categories from '../components/Categories';
import Products from '../components/Products';
import NewsLetter from '../components/NewsLetter';
import Footer from '../components/Footer';
import MenuContent from '../components/MenuContent';

const Home = () => {
  return (
    <>
      <Navbar />
      <MenuContent />
      <Slider />
      <Categories />
      <Products />
      <NewsLetter />
      <Footer />
    </>
  );
};

export default Home;
