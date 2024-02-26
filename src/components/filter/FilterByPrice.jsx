import { useContext } from "react";
import { DataContext } from "../../App";
import styled from "styled-components";
import { productsArray } from "../../data";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  max-width: 7em;
  min-width: 7em;
  font-size: 1em;
  font-weight: 700;
  margin: 0.5em;
  border-color: teal;
  letter-spacing: 1px;
  color: white;
  background-color: teal;
  cursor: pointer;
  transition: 0.3s all ease-out;
  &:active {
    transform: scale(1.1);
  }
`;

const FilterByPrice = () => {
  const { product, setProduct } = useContext(DataContext);

  const handleButtonClick = (sortedArray) => {
    setProduct(sortedArray);
  };

  const handleSortByPrice = (asc) => {
    const sortedArray = [...product].sort((a, b) =>
      asc ? a.price - b.price : b.price - a.price
    );
    handleButtonClick(sortedArray);
  };

  return (
    <Container>
      <Button onClick={() => handleButtonClick(productsArray)}>ALL</Button>
      <Button onClick={() => handleSortByPrice(false)}>PRICE DESC</Button>
      <Button onClick={() => handleSortByPrice(true)}>PRICE ASC</Button>
    </Container>
  );
};

export default FilterByPrice;
