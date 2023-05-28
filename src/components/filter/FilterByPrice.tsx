import styled from 'styled-components';

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

const FilterByPrice = () => {
  return (
    <Container>
      <Button>ALL</Button>
      <Button>PRICE ASC</Button>
      <Button>PRICE DESC</Button>
    </Container>
  );
};

export default FilterByPrice;
