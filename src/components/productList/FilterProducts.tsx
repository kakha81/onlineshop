import styled from "styled-components";
import FilterColor from "./filter/FilterColor";
import FilterCategory from "./filter/FilterCategory";
import FilterPrice from "./filter/FilterPrice";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  width: 0em 1.2em;
  display: flex;
  flex-direction: column;
  margin: 1.2em;
`;

const FilterText = styled.span`
  font-size: 1.2em;
  font-weight: 600;
  margin-right: 0em;
`;

const FilterProducts = () => {
  return (
    <Container>
      <Filter>
        <FilterText>Filter Products:</FilterText>
        <FilterColor />
        <FilterCategory />
      </Filter>
      <Filter>
        <FilterText>Sort Products:</FilterText>
        <FilterPrice />
      </Filter>
    </Container>
  );
};

export default FilterProducts;
