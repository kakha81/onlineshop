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

const FilterBySize = () => {
  return (
    <Select defaultValue="SIZE">
      <Option disabled>SIZE</Option>
      {productsArray.map((item) => (
        <Option key={item.id}>{item.size}</Option>
      ))}
    </Select>
  );
};

export default FilterBySize;
