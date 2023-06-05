import { useState, useEffect, useContext } from "react";
import { DataContext } from "../../App";
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

const FilterByColor = () => {
  const { card, setCard } = useContext(DataContext);
  const [selectedColor, setSelectedColor] = useState("color");

  const handleColorChange = (event) => {
    const value = event.target.value;
    setSelectedColor(value);
  };

  useEffect(() => {
    if (selectedColor === "color") {
      setCard(card);
    } else {
      const filtered = card.filter((item) => item.color === selectedColor);
      setCard(filtered);
    }
  }, [selectedColor, setCard, card]);
  return (
    <Select value={selectedColor} onChange={handleColorChange}>
      <Option value="color">color</Option>
      <Option value="white">white</Option>
      <Option value="gray">gray</Option>
      <Option value="blue">blue</Option>
      <Option value="green">green</Option>
      <Option value="red">red</Option>
      <Option value="black">black</Option>
      <Option value="yellow">yellow</Option>
    </Select>
  );
};

export default FilterByColor;
