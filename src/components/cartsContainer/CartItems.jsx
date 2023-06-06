import styled from "styled-components";
import CartItem from "./CartItem";
import { useContext } from "react";
import { DataContext } from "../../App";
import { v4 as uuidv4 } from "uuid";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const CartItems = () => {
  const { cart } = useContext(DataContext);
  console.log(cart);
  return (
    <Container>
      {cart.map((item) => (
        <CartItem item={item} key={uuidv4()} />
      ))}
    </Container>
  );
};

export default CartItems;
