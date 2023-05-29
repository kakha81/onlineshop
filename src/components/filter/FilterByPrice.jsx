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
  color: teal;
  background-color: white;
`;

const FilterByPrice = ({
  popular,
  setFiltered,
  activeButton,
  setActiveButton,
}) => {
  const handleButtonClick = (sortedArray) => {
    setFiltered(sortedArray);
  };

  const handleSortByPrice = (asc) => {
    const sortedArray = [...popular].sort((a, b) => {
      return asc ? a.price - b.price : b.price - a.price;
    });

    handleButtonClick(sortedArray);
  };

  return (
    <Container>
      <Button onClick={() => handleButtonClick(popular)}>ALL</Button>
      <Button onClick={() => handleSortByPrice(false)}>PRICE DESC</Button>
      <Button onClick={() => handleSortByPrice(true)}>PRICE ASC</Button>
    </Container>
  );
};

export default FilterByPrice;
