import { useContext } from "react";
import { DataContext } from "../App";
import styled from "styled-components";

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
  font-weight: ${(props) => props.type === "total" && "700"};
  font-size: 1em;
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span`
  font-size: 1.5em;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  width: 15em;
  color: white;
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

const OrderContainer = () => {
  const { cart } = useContext(DataContext);

  const orderPriceArray = [];

  if (cart.length > 0) {
    for (let i = 0; i < cart.length; i++) {
      orderPriceArray.push(cart[i].price * cart[i].orderedItem);
    }
  } else {
    return orderPriceArray;
  }

  const totalOrderPrice = orderPriceArray.reduce(
    (partialSum, a) => partialSum + a
  );

  const shippingPrice = 5.9;

  const shippingDiscount = 5.9;

  const totalPrice = totalOrderPrice + shippingPrice - shippingDiscount;

  return (
    <Summary>
      <SummaryTitleContainer>
        <SummaryTitle>ORDER SUMMARY</SummaryTitle>
      </SummaryTitleContainer>
      <SummaryItem>
        <SummaryItemText>Subtotal</SummaryItemText>
        <SummaryItemPrice>{totalOrderPrice.toFixed(2)}$</SummaryItemPrice>
      </SummaryItem>
      <SummaryItem>
        <SummaryItemText>Estimated Shipping</SummaryItemText>
        <SummaryItemPrice>{shippingPrice.toFixed(2)}$</SummaryItemPrice>
      </SummaryItem>
      <SummaryItem>
        <SummaryItemText>Shipping Discount</SummaryItemText>
        <SummaryItemPrice>{shippingDiscount.toFixed(2)}$</SummaryItemPrice>
      </SummaryItem>
      <SummaryItem type="total">
        <SummaryItemText>Total</SummaryItemText>
        <SummaryItemPrice>{totalPrice.toFixed(2)}$</SummaryItemPrice>
      </SummaryItem>
      <ButtonContainer>
        <Button>CHECKOUT NOW</Button>
      </ButtonContainer>
    </Summary>
  );
};

export default OrderContainer;
