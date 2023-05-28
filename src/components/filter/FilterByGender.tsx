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

const FilterByGender = () => {
  return (
    <Select>
      <Option disabled selected>
        GENDER
      </Option>
      {productsArray.map((item) => (
        <Option key={item.id}>{item.gender}</Option>
      ))}
    </Select>
  );
};

export default FilterByGender;
