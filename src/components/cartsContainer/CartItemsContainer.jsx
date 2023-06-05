import { useState } from "react";
import styled from "styled-components";
import CartItems from "./CartItems";
import CartEmpty from "./CartEmpty";

const ClearButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 2em auto;
`;

const ClearButton = styled.button`
  width: 11em;
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
  const [isShown, setIsShown] = useState(true);
  return (
    <>
      {isShown ? <CartItems /> : <CartEmpty />}
      {isShown ? (
        <ClearButtonContainer>
          <ClearButton onClick={() => setIsShown(false)}>
            CLEAR CART
          </ClearButton>
        </ClearButtonContainer>
      ) : null}
    </>
  );
};

export default CartItemsContainer;
