import styled from 'styled-components';
import { popularProducts } from '../data';
import Product from './Product';

const Container = styled.div`
  margin: 1em;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: lightgray;
`;

const Products = () => {
  return (
    <Container>
      {popularProducts.map((item) => (
        <Product key={item.id} item={item} />
      ))}
    </Container>
  );
};

export default Products;
