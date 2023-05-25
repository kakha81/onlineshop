import styled from "styled-components";
import { ProductsArray } from "../../data";
import Product from "../Product";

const Container = styled.div`
  margin: 0.5em;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: lightgray;
`;

const Products = () => {
  return (
    <Container>
      {ProductsArray.map((item) => (
        <Product key={item.id} item={item} />
      ))}
    </Container>
  );
};

export default Products;
