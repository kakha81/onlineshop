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

const FilterByCategory = () => {
  return (
    <Select defaultValue="CATEGORY">
      <Option disabled>CATEGORY</Option>
      {productsArray.map((item) => (
        <Option key={item.id}>{item.category}</Option>
      ))}
    </Select>
  );
};

export default FilterByCategory;
