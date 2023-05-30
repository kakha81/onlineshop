import { useState, useEffect } from "react";
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

const FilterByBrand = ({ setCard }) => {
  const [selectedBrand, setSelectedBrand] = useState("brand");

  const handleBrandChange = (event) => {
    const value = event.target.value;
    setSelectedBrand(value);

    if (value === "brand") {
      setCard(productsArray);
    } else {
      const filtered = productsArray.filter((item) => item.brand === value);
      setCard(filtered);
    }
  };

  useEffect(() => {
    handleBrandChange({ target: { value: selectedBrand } });
  }, [selectedBrand]);

  return (
    <Select value={selectedBrand} onChange={handleBrandChange}>
      <Option value="brand">brand</Option>
      <Option value="nike">nike</Option>
      <Option value="puma">puma</Option>
      <Option value="air jordan">air jordan</Option>
      <Option value="levis">levis</Option>
      <Option value="tommy hilfiger">tommy hilfiger</Option>
      <Option value="reabok">reabok</Option>
      <Option value="new balance">new balance</Option>
      <Option value="adidas">adidas</Option>
    </Select>
  );
};

export default FilterByBrand;
