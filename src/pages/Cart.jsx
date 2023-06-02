import styled from "styled-components";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import MenuContent from "../components/MenuContent";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { maxScreen, midScreen, minScreen, tablet } from "../responsive";
import DeleteIcon from "@mui/icons-material/Delete";

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

const Info = styled.div``;

const ProducContainer = styled.div`
  width: 95%;
  max-width: 45em;
  display: flex;
  flex-direction: column;
  margin: 0.5em auto;
`;

const Product = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: 0.5em;
  border: 0.15em solid teal;
`;

const ProductDetail = styled.div`
  display: flex;
  align-items: center;
`;

const Image = styled.img`
  width: 6em;
  border-radius: 0.5em;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.2em;
`;

const ProductName = styled.span`
  font-weight: 500;
  margin: 0.1em;
`;

const ProductId = styled.span`
  font-weight: 500;
  margin: 0.1em;
`;

const ProductSize = styled.span`
  font-weight: 500;
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
`;

const Amount = styled.span`
  width: 1.5em;
  height: 1.5em;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0.1em solid teal;
  border-radius: 0.5em;
  margin: auto 0.1em;
  font-weight: 700;
  ${tablet({ width: "1.7em", height: "1.7em" })}
  ${minScreen({ width: "2em", height: "2em" })}
  ${midScreen({ width: "2.2em", height: "2.2em" })}
  ${maxScreen({ width: "2.5em", height: "2.5em" })}
`;

const ProductPrice = styled.div`
  font-size: 1em;
  font-weight: 700;
  color: teal;
  margin-right: 0.1em;
  ${minScreen({ fontSize: "1.2em" })}
  ${minScreen({ fontSize: "1.5em" })}
  ${midScreen({ fontSize: "1.7em" })}
  ${maxScreen({ fontSize: "2em" })}
`;

const RedDeleteIcon = styled(DeleteIcon)`
  color: red;
  cursor: pointer;
  transform: scale(1.3);
  &:active {
    transform: scale(1);
  }
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
  width: 12em;
  padding: 0.4em;
  font-weight: 500;
  color: white;
  background-color: teal;
  border: 0.25em solid teal;
  border-radius: 0.3em;
  opacity: 0.8;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
  &:active {
    border-color: red;
    background-color: red;
  }
`;
const ClearButtonContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 0.5em;
`;

const ClearButton = styled(Button)`
  width: 8em;
  padding: 0.4em;
  color: white;
  background-color: red;
  border-color: red;
  opacity: 0.8;
  &:hover {
    opacity: 1;
  }
  &:active {
    box-shadow: 5px 5px 15px gray;
  }
`;

const Cart = () => {
  const [count, setCount] = useState(1);
  const navigate = useNavigate();

  const productItem = 30;

  const decreaseCount = () => {
    setCount((prevCount) => Math.max(prevCount - 1, 1));
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
          <Button onClick={() => navigate("/")}>CONTINUE SHOPPING</Button>
          <Button>CHECKOUT NOW</Button>
        </Top>
        <TopTexts>
          <TopText>Shopping Bag (0)</TopText>
          <TopText>Your Wishlist (0)</TopText>
        </TopTexts>
        <Bottom>
          <Info>
            {/* ----------------------------------------------product-------------------------------- */}
            <ProducContainer>
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
                  <ProductPrice>${productItem}</ProductPrice>
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
                  <ProductPrice>${productItem * count}</ProductPrice>
                  <RedDeleteIcon />
                </PriceDetail>
              </Product>
              <ClearButtonContainer>
                <ClearButton>CLEAR CART</ClearButton>
              </ClearButtonContainer>
            </ProducContainer>
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
