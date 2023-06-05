import styled from "styled-components";
import CartItem from "./CartItem";
import { useContext } from "react";
import { DataContext } from "../../App";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const CartItems = () => {
  const { card } = useContext(DataContext);
  return (
    <Container>
      {card.map((item) => (
        <CartItem item={item} />
      ))}
    </Container>
  );
};

export default CartItems;
