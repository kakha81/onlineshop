import styled from 'styled-components';
import { sizes } from '../../../data';

const Select = styled.select`
  font-size: 1.2em;
  font-weight: 600;
  margin: 0.5em 0em;
`;
const Option = styled.option`
  text-transform: uppercase;
`;

const FilterCategory = () => {
  return (
    <Select>
      <Option disabled selected>
        Category
      </Option>
      {sizes.map((item) => (
        <Option key={item.id}>{item.size}</Option>
      ))}
    </Select>
  );
};

export default FilterCategory;
