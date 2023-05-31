import { useState } from "react";
import { productsArray } from "../../data";
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

const FilterByGender = ({ setCard }) => {
  const [selectedGender, setSelectedGender] = useState("gender");

  const handleGenderChange = (event) => {
    const value = event.target.value;
    setSelectedGender(value);

    if (value === "gender") {
      setCard(productsArray);
    } else {
      const filtered = productsArray.filter((item) => item.gender === value);
      setCard(filtered);
    }
  };
  handleGenderChange({ target: { value: selectedGender } });

  return (
    <Select value={selectedGender} onChange={handleGenderChange}>
      <Option value="gender">GENDER</Option>
      <Option value="men">FOR MEN</Option>
      <Option value="women">FOR WOMEN</Option>
    </Select>
  );
};

export default FilterByGender;
