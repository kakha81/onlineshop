import styled from 'styled-components';
import CartItem from './CartItem';
import { productsArray } from '../../data';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const CartItems = () => {
  return (
    <Container>
      {productsArray.map((item) => (
        <CartItem item={item} />
      ))}
    </Container>
  );
};

export default CartItems;
