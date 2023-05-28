import styled from 'styled-components';
import { productsArray } from '../../data';

const Select = styled.select`
  max-width: 7em;
  font-size: 1.2em;
  font-weight: 600;
  margin: 0.5em;
`;
const Option = styled.option`
  text-transform: uppercase;
`;

const FilterByBrand = () => {
  return (
    <Select>
      <Option disabled selected>
        BRAND
      </Option>
      {productsArray.map((item) => (
        <Option key={item.id}>{item.name}</Option>
      ))}
    </Select>
  );
};

export default FilterByBrand;
