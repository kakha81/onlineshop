import styled from "styled-components";

const Select = styled.select`
  max-width: 7em;
  font-size: 1.2em;
  font-weight: 600;
  margin: 0.5em;
  text-transform: uppercase;
`;
const Option = styled.option`
  text-transform: uppercase;
`;

const FilterByCategory = () => {
  return (
    <Select defaultValue="CATEGORY">
      <Option disabled>CATEGORY</Option>
      <Option>classic</Option>
      <Option>casual</Option>
      <Option>golf</Option>
      <Option>runner</Option>
      <Option>basketball</Option>
    </Select>
  );
};

export default FilterByCategory;
