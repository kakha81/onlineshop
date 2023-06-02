import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import CartItems from "../components/CartItemsContainer";
import OrderContainer from "../components/OrderContainer";
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

const Bottom = styled.div``;

const Button = styled.button`
  width: 12em;
  padding: 0.4em;
  font-weight: 500;
  color: white;
  background-color: teal;
  border: 0.25em solid teal;
  border-radius: 0.3em;
  opacity: 0.7;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
  &:active {
    border-color: red;
    background-color: red;
  }
`;

const Cart = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Header>
        <Navbar />
        <MenuContent />
      </Header>
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <Button onClick={() => navigate("/")}>CONTINUE SHOPPING</Button>
          <Button>CHECKOUT NOW</Button>
        </Top>
        <TopTexts>
          <TopText>Shopping Bag (0)</TopText>
          <TopText>Your Wishlist (0)</TopText>
        </TopTexts>
        <Bottom>
          <CartItems />
          <OrderContainer />
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
