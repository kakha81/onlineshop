import styled from "styled-components";
import Product from "./Product";

const Container = styled.div`
  margin: 1em;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  background-color: white;
`;

const Products = ({ card }) => {
  return (
    <Container>
      {card.map((item) => (
        <Product key={item.id} item={item} />
      ))}
    </Container>
  );
};

export default Products;
