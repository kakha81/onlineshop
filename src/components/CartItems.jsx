import { useState } from "react";
import styled from "styled-components";
import CartItem from "../components/CartItem";
import CartEmpty from "../components/CartEmpty";

const ProductContainer = styled.div`
  width: 95%;
  max-width: 45em;
  display: ${({ count }) => (count < 1 ? "none" : "flex")};
  flex-direction: column;
  margin: 0.5em auto;
`;

const ClearButtonContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 0.5em;
`;

const ClearButton = styled.button`
  width: 8em;
  padding: 0.4em;
  font-weight: 500;
  color: white;
  background-color: red;
  border-color: red;
  border-radius: 0.3em;
  opacity: 0.6;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
  &:active {
    box-shadow: 5px 5px 15px gray;
  }
`;

const CartItems = () => {
  const [isShown, setIsShown] = useState(true);
  console.log(isShown);
  return (
    <ProductContainer>
      {isShown ? <CartItem /> : <CartEmpty />}
      <ClearButtonContainer>
        <ClearButton onClick={() => setIsShown(false)}>CLEAR CART</ClearButton>
      </ClearButtonContainer>
    </ProductContainer>
  );
};

export default CartItems;
