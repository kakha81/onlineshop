import styled from 'styled-components';
import { colors } from '../../../data';

const Select = styled.select`
  font-size: 1.2em;
  font-weight: 600;
  margin: 0.5em 0em;
`;
const Option = styled.option`
  text-transform: uppercase;
`;

const FilterColor = () => {
  return (
    <Select>
      <Option disabled selected>
        Brand
      </Option>
      {colors.map((item) => (
        <Option key={item.id}>{item.color}</Option>
      ))}
    </Select>
  );
};

export default FilterColor;
