import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../App";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import WishlistItems from "../components/wishlistContainer/WishlistItems";
import Footer from "../components/Footer";
import MenuContent from "../components/MenuContent";

const Container = styled.div``;

const Header = styled.div`
  position: sticky;
  top: 0;
  z-index: 1;
`;

const Wrapper = styled.div`
  padding: 10px;
`;

const Title = styled.h1`
  text-align: center;
  font-weight: 800;
  color: black;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1em auto;
`;

const TopTexts = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2em auto;
`;

const TopText = styled.span`
  margin: 0.3em 1em;
  padding: 0.1em;
  color: teal;
  font-weight: 900;
  border-bottom: 0.2em solid white;
  cursor: pointer;
  transition: 0.3s all ease-in-out;
  &:hover {
    border-bottom: 0.2em solid teal;
  }
`;

const Bottom = styled.div`
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  width: 14em;
  color: white;
  margin-right: 1em;
  padding-top: 0.4em;
  padding-bottom: 0.4em;
  background-color: teal;
  border: 0.25em solid teal;
  border-radius: 0.3em;
  cursor: pointer;
  &:active {
    box-shadow: 5px 5px 5px gray;
  }
`;

const Wishlist = () => {
  const navigate = useNavigate();
  const { cart, wishlist } = useContext(DataContext);
  const totalOrderCount = cart.reduce((sum, item) => sum + item.orderedItem, 0);
  const totalWishlistCount = wishlist.reduce(
    (sum, item) => sum + item.orderedItem,
    0
  );

  return (
    <Container>
      <Header>
        <Navbar />
        <MenuContent />
      </Header>
      <Wrapper>
        <Title>YOUR WISHLIST</Title>
        <Top>
          <Button onClick={() => navigate("/")}>CONTINUE SHOPPING</Button>
          <Button>CHECKOUT NOW</Button>
        </Top>
        <TopTexts>
          <TopText onClick={() => navigate("/cart")}>
            Shopping Bag ({totalOrderCount})
          </TopText>
          <TopText onClick={() => navigate("/wishlist")}>
            Your Wishlist ({totalWishlistCount})
          </TopText>
        </TopTexts>
        <Bottom>
          <WishlistItems />
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Wishlist;
