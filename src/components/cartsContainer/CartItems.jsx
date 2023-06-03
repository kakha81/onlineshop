import styled from 'styled-components';
import CartItem from './CartItem';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const CartItems = () => {
  return (
    <Container>
      <CartItem />
      <CartItem />
      <CartItem />
    </Container>
  );
};

export default CartItems;
