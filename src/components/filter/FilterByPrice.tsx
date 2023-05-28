import styled from 'styled-components';

const Select = styled.select`
  max-width: 7em;
  font-size: 1.2em;
  font-weight: 600;
  margin: 0.5em;
`;
const Option = styled.option`
  text-transform: uppercase;
`;

const FilterByPrice = () => {
  return (
    <Select>
      <Option selected>PRICE</Option>
      <Option>Price (asc)</Option>
      <Option>Price (desc)</Option>
    </Select>
  );
};

export default FilterByPrice;
