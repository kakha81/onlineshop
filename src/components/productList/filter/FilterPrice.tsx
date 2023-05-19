import styled from "styled-components";

const Select = styled.select`
  font-size: 1.2em;
  font-weight: 600;
  margin: 0.5em 0em;
`;
const Option = styled.option``;

const FilterPrice = () => {
  return (
    <Select>
      <Option selected>Newest</Option>
      <Option>Price (asc)</Option>
      <Option>Price (desc)</Option>
    </Select>
  );
};

export default FilterPrice;
