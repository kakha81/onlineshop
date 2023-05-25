import styled from "styled-components";
import { ProductsArray } from "../../data";
import Product from "../Product";

const Container = styled.div`
  margin: 1em;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
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
