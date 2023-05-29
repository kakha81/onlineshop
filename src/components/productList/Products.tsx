import styled from "styled-components";
import Product from "./Product";

interface ProductItem {
  id: number;
  gender: string;
  category: string;
  name: string;
  color: string;
  size: number;
  price: number;
  img: string;
}

interface ProductsProps {
  filtered: ProductItem[];
}

const Container = styled.div`
  margin: 1em;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  background-color: white;
`;

const Products: React.FC<ProductsProps> = ({ filtered }) => {
  return (
    <Container>
      {filtered.map((item) => (
        <Product key={item.id} item={item} />
      ))}
    </Container>
  );
};

export default Products;
