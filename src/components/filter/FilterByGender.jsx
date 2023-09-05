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

const FilterByGender = () => {
  const { product, setProduct } = useContext(DataContext);

  const [selectedGender, setSelectedGender] = useState("gender");

  const handleGenderChange = (event) => {
    const value = event.target.value;
    setSelectedGender(value);
  };

  useEffect(() => {
    if (selectedGender === "gender") {
      setProduct(product);
    } else {
      const filtered = product.filter((item) => item.gender === selectedGender);
      setProduct(filtered);
    }
  }, [product, setProduct, selectedGender]);

  return (
    <Select value={selectedGender} onChange={handleGenderChange}>
      <Option value="gender">GENDER</Option>
      <Option value="men">FOR MEN</Option>
      <Option value="women">FOR WOMEN</Option>
    </Select>
  );
};

export default FilterByGender;
