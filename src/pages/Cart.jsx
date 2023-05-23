import styled from "styled-components";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import MenuContent from "../components/MenuContent";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
  color: green;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
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
  display: flex;
  justify-content: center;
  margin: 1em;
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
  flex-direction: column;
  justify-content: space-between;
`;

const Info = styled.div``;

const Product = styled.div`
  width: 95%;
  display: flex;
  flex-direction: row;
  margin: 0.5em auto;
  border-radius: 0.5em;
  border: 0.2em solid teal;
`;

const ProductDetail = styled.div`
  display: flex;
  align-items: center;
`;

const Image = styled.img`
  width: 5em;
  border-radius: 0.5em;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.2em;
`;

const ProductName = styled.span`
  font-weight: 700;
  margin: 0.1em;
`;

const ProductId = styled.span`
  font-weight: 700;
  margin: 0.1em;
`;

const ProductSize = styled.span`
  font-weight: 700;
  margin: 0.1em;
`;

const PriceDetail = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 1em;
  font-weight: 900;
`;

const Amount = styled.span`
  width: 2em;
  height: 2em;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0.1em solid teal;
  border-radius: 0.5em;
  margin: 0em 0.5em;
  font-weight: 900;
`;

const ProductPrice = styled.div`
  font-size: 2em;
  font-weight: 900;
  color: green;
  margin-right: 0.2em;
`;

const Summary = styled.div`
  width: 18em;
  margin: 1em auto;
  padding: 1.2em;
  border: 1px solid lightgray;
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
          <TopButton>CHECKOUT NOW</TopButton>
        </Top>
        <TopTexts>
          <TopText>Shopping Bag (2)</TopText>
          <TopText>Your Wishlist (0)</TopText>
        </TopTexts>
        <Bottom>
          <Info>
            {/* ----------------------------------------------product 1 -------------------------------- */}
            <Product>
              <ProductDetail>
                <Image src={require("../Images/1.png")} />
                <Details>
                  <ProductName>Product: ADIDAS</ProductName>
                  <ProductId>ID: 1</ProductId>
                  <ProductSize>Size: 37.5</ProductSize>
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
            {/* ----------------------------------------------product 2 -------------------------------- */}
            <Product>
              <ProductDetail>
                <Image src={require("../Images/2.png")} />
                <Details>
                  <ProductName>Product: ADIDAS</ProductName>
                  <ProductId>ID: 2</ProductId>
                  <ProductSize>Size: 34</ProductSize>
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
                <ProductPrice>$ 57</ProductPrice>
              </PriceDetail>
            </Product>
            {/* ----------------------------------------------product-------------------------------- */}
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
