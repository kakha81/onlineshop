import styled from 'styled-components';

const Button = styled.button`
  max-width: 7em;
  min-width: 7em;
  font-size: 1.2em;
  font-weight: 600;
  margin: 0.5em;
`;

const FilterByPriceAscending = () => {
  return <Button>PRICE ASC</Button>;
};

export default FilterByPriceAscending;
