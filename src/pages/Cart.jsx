import styled from "styled-components";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import MenuContent from "../components/MenuContent";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

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
  font-weight: 500;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5em;
`;

const TopButton = styled.button`
  padding: 0.5em;
  font-weight: 700;
  color: white;
  background-color: teal;
  border: 0.25em solid teal;
  border-radius: 2em;
  cursor: pointer;
  &:active {
    border-color: red;
    background-color: red;
  }
`;

const TopTexts = styled.div`
  display: none;
`;

const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0em 0.5em;
`;

const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Info = styled.div`
  flex: 3;
  flex-wrap: wrap;
`;

const Product = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
  justify-content: center;
`;

const Image = styled.img`
  width: 12em;
`;

const Details = styled.div`
  padding: 1.2em;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.span`
  width: 1.2em;
  height: 1.2em;
  border-radius: 50%;
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.2em;
`;

const Amount = styled.span`
  width: 2em;
  height: 2em;
  border-radius: 0.5em;
  border: 0.1em solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0em 0.5em;
`;

const ProductPrice = styled.div`
  font-size: 2em;
  font-weight: 200;
  margin-bottom: 0.5em;
`;

const Hr = styled.hr`
  background-color: gray;
  border: none;
  height: 0.1em;
`;

const Summary = styled.div`
  width: 18em;
  margin: 1em auto;
  padding: 1.2em;
  border: 0.5px solid lightgray;
  border-radius: 0.5em;
`;

const SummaryTitleContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const SummaryTitle = styled.h3`
  font-weight: 900;
  display: flex;
  justify-content: space-between;
`;

const SummaryItem = styled.div`
  margin: 1em auto;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "1.5em"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  width: 8rem;
  display: flex;
  justify-content: center;
  padding: 0.5em;
  border-radius: 2em;
  font-size: 0.8em;
  font-weight: 600;
  color: white;
  background-color: teal;
  cursor: pointer;
  transition: 0.3s all ease;
  &:active {
    transform: scale(1.05);
  }
`;

const Cart = () => {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  const decreaseCount = () => {
    setCount((prevCount) => Math.max(prevCount - 1, 0));
  };

  const increaseCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <Container>
      <Header>
        <Navbar />
        <MenuContent />
      </Header>
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton onClick={() => navigate("/productlist")}>
            CONTINUE SHOPPING
          </TopButton>
          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your Wishlist(0)</TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src={require("../Images/1.png")} />
                <Details>
                  <ProductName>
                    <b>Product:</b>ADIDAS
                  </ProductName>
                  <ProductId>
                    <b>ID:</b>1
                  </ProductId>
                  <ProductColor color="orange" />
                  <ProductSize>
                    <b>Size:</b>37.5
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <RemoveIcon
                    onClick={() => {
                      decreaseCount();
                    }}
                  />
                  <Amount>{count}</Amount>
                  <AddIcon
                    onClick={() => {
                      increaseCount();
                    }}
                  />
                </ProductAmountContainer>
                <ProductPrice>$ 30</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr />
          </Info>
          <Summary>
            <SummaryTitleContainer>
              <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            </SummaryTitleContainer>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ 80</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ -5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ 80</SummaryItemPrice>
            </SummaryItem>
            <ButtonContainer>
              <Button>CHECKOUT NOW</Button>
            </ButtonContainer>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
