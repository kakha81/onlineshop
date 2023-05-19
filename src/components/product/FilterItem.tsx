import { colors, sizes } from "../../data";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  margin: 2em 0em;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const FilterTitle = styled.span`
  font-size: 1.2em;
  font-weight: 500;
`;

const FilterColor = styled.select`
  margin-left: 0.5em;
  padding: 0.5em;
  font-weight: 900;
`;

const FilterColorOption = styled.option`
  font-weight: 900;
`;

const FilterSize = styled.select`
  margin-left: 0.5em;
  padding: 0.5em;
  font-weight: 900;
`;

const FilterSizeOption = styled.option`
  font-weight: 900;
`;

const FilterItem = () => {
  return (
    <Container>
      <FilterColor>
        {colors.map((item) => (
          <FilterColorOption key={item.id}>{item.color}</FilterColorOption>
        ))}
      </FilterColor>
      <FilterTitle>Size</FilterTitle>
      <FilterSize>
        {sizes.map((item) => (
          <FilterSizeOption key={item.id}>{item.size}</FilterSizeOption>
        ))}
      </FilterSize>
    </Container>
  );
};

export default FilterItem;
