import { useState } from 'react';
import styled from 'styled-components';
import CartItems from './CartItems';
import CartEmpty from './CartEmpty';

const ClearButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 2em auto;
`;

const ClearButton = styled.button`
  width: 7em;
  padding: 0.3em 0.4em;
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
