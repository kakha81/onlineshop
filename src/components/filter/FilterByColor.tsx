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

const FilterByColor = () => {
  return (
    <Select defaultValue="COLOR">
      <Option disabled>COLOR</Option>
      <Option>white</Option>
      <Option>gray</Option>
      <Option>blue</Option>
      <Option>green</Option>
    </Select>
  );
};

export default FilterByColor;
