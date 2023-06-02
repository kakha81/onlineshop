import { useState } from "react";
import styled from "styled-components";
import CartItems from "./CartItems";
import CartEmpty from "./CartEmpty";

const Container = styled.div`
  width: 95%;
  max-width: 45em;
  display: flex;
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
  opacity: 0.7;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
  &:active {
    box-shadow: 5px 5px 15px gray;
  }
`;

const CartItemsContainer = () => {
  const [isShown, setIsShown] = useState(true);
  return (
    <Container>
      {isShown ? <CartItems /> : <CartEmpty />}
      <ClearButtonContainer>
        <ClearButton onClick={() => setIsShown(false)}>CLEAR CART</ClearButton>
      </ClearButtonContainer>
    </Container>
  );
};

export default CartItemsContainer;
