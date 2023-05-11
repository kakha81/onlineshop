import styled from "styled-components";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

const Container = styled.div``;

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
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
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
  background-color: ${(props) => props.color};
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

const ProductAmount = styled.div`
  font-size: 1.5em;
  margin: 0.3em 1em;
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
  margin: auto;
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
  width: 10rem;
  display: flex;
  justify-content: center;
  padding: 0.5em;
  border-radius: 2em;
  font-size: 0.8em;
  font-weight: 600;
  color: white;
  background-color: black;
`;

const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
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
                    <b>ID:</b>6464161651
                  </ProductId>
                  <ProductColor color="orange" />
                  <ProductSize>
                    <b>Size:</b>37.5
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <RemoveIcon />
                  <ProductAmount>2</ProductAmount>
                  <AddIcon />
                </ProductAmountContainer>
                <ProductPrice>$ 30</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr />
            <Product>
              <ProductDetail>
                <Image src={require("../Images/2.png")} />
                <Details>
                  <ProductName>
                    <b>Product:</b>NIKE
                  </ProductName>
                  <ProductId>
                    <b>ID:</b>456415145
                  </ProductId>
                  <ProductColor color="gray" />
                  <ProductSize>
                    <b>Size:</b>32.5
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <RemoveIcon />
                  <ProductAmount>5</ProductAmount>
                  <AddIcon />
                </ProductAmountContainer>
                <ProductPrice>$ 20</ProductPrice>
              </PriceDetail>
            </Product>
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
