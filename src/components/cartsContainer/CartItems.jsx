import styled from "styled-components";
import CartItem from "./CartItem";
import { useContext } from "react";
import { DataContext } from "../../App";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const CartItems = () => {
  const { cart } = useContext(DataContext);
  return (
    <Container>
      {cart.map((item) => (
        <CartItem item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default CartItems;
