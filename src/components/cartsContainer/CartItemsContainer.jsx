import { useContext } from "react";
import styled from "styled-components";
import CartItems from "./CartItems";
import CartEmpty from "./CartEmpty";
import { DataContext } from "../../App";

const ClearButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 2em auto;
`;

const ClearButton = styled.button`
  width: 15em;
  color: white;
  padding-top: 0.4em;
  padding-bottom: 0.4em;
  background-color: red;
  border: 0.25em solid red;
  border-radius: 0.3em;
  cursor: pointer;
  &:active {
    box-shadow: 5px 5px 5px gray;
  }
`;

const CartItemsContainer = () => {
  const { cart, setCart } = useContext(DataContext);

  const ClearCart = () => {
    setCart([]);
  };

  return (
    <>
      {cart.length === 0 ? <CartEmpty /> : <CartItems />}
      <ClearButtonContainer>
        <ClearButton onClick={ClearCart}>CLEAR CART</ClearButton>
      </ClearButtonContainer>
    </>
  );
};

export default CartItemsContainer;
