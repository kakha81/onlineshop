import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  font-size: 1.5em;
  font-weight: 700;
  letter-spacing: 2px;
  margin: 1em auto;
  text-transform: uppercase;
`;

const CartEmpty = () => {
  return <Container>Your Cart is Empty</Container>;
};

export default CartEmpty;
