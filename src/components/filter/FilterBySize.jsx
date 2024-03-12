import { useContext } from 'react';
import { DataContext } from '../../App';
import styled from 'styled-components';

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
  const { product } = useContext(DataContext);
  return (
    <Select defaultValue='SIZE'>
      <Option disabled>SIZE</Option>
      {product.map((item) => (
        <Option key={item.id}>{item.size}</Option>
      ))}
    </Select>
  );
};

export default FilterBySize;
