import { useState } from "react";
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

const FilterByGender = ({ card, setCard }) => {
  const [selectedGender, setSelectedGender] = useState("GENDER");

  const handleGenderChange = (event) => {
    const value = event.target.value;
    setSelectedGender(value);

    if (value === "GENDER") {
      setCard(productsArray);
    } else {
      const filtered = productsArray.filter((item) => item.gender === value);
      setCard(filtered);
      console.log(filtered);
    }
  };

  return (
    <Select value={selectedGender} onChange={handleGenderChange}>
      <Option value="GENDER">GENDER</Option>
      <Option value="men">FOR MEN</Option>
      <Option value="woman">FOR WOMEN</Option>
    </Select>
  );
};

export default FilterByGender;
