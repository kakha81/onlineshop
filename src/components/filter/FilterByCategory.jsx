import { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { DataContext } from "../../App";

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
  const { card, setCard } = useContext(DataContext);
  const [selectedCategory, setSelectedCategory] = useState("category");

  const handleCategoryChange = (event) => {
    const value = event.target.value;
    setSelectedCategory(value);
  };

  useEffect(() => {
    if (selectedCategory === "category") {
      setCard(card);
    } else {
      const filtered = card.filter(
        (item) => item.category === selectedCategory
      );
      setCard(filtered);
    }
  }, [selectedCategory, setCard, card]);

  return (
    <Select value={selectedCategory} onChange={handleCategoryChange}>
      <Option value="category">category</Option>
      <Option value="casual">casual</Option>
      <Option value="runners">runner</Option>
      <Option value="basketball">basketball</Option>
    </Select>
  );
};

export default FilterByCategory;
