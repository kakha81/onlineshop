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

const FilterByGender = () => {
  return (
    <Select>
      <Option disabled selected>
        GENDER
      </Option>
      <Option value='men'>FOR MAN</Option>
      <Option value='women'>FOR WOMAN</Option>
    </Select>
  );
};

export default FilterByGender;
