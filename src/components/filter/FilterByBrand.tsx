import styled from "styled-components";
import { productsArray } from "../../data";

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
      {productsArray.map((item) => (
        <Option key={item.id}>{item.name}</Option>
      ))}
    </Select>
  );
};

export default FilterByBrand;
