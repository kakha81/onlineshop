import styled from 'styled-components';

import Product from './Product';
import { productsArray } from '../../data';

const Container = styled.div`
  margin: 1em;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  background-color: white;
`;

const Products = () => {
  return (
    <Container>
      {productsArray.map((item) => (
        <Product key={item.id} item={item} />
      ))}
    </Container>
  );
};

export default Products;
