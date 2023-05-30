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

const FilterByBrand = () => {
  return (
    <Select defaultValue="BRAND">
      <Option disabled>BRAND</Option>
      <Option>New Balance</Option>
      <Option>Nike</Option>
      <Option>Puma</Option>
      <Option>Air Jordan</Option>
      <Option>Levis</Option>
      <Option>Tommy Hilfiger</Option>
      <Option>Reabok</Option>
    </Select>
  );
};

export default FilterByBrand;
