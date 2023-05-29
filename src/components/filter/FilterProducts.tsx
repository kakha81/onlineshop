import styled from "styled-components";
import FilterByBrand from "./FilterByBrand";
import FilterByCategory from "./FilterByCategory";
import FilterByColor from "./FilterByColor";
import FilterByGender from "./FilterByGender";
import { maxScreen, midScreen, minScreen, tablet } from "../../responsive";
import FilterByPrice from "./FilterByPrice";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const FilterText = styled.span`
  font-size: 1em;
  font-weight: 600;
  margin: 0em auto;
  margin-top: 1em;
  text-transform: uppercase;
`;

const Filter = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 0em auto;
  flex-wrap: wrap;
  ${tablet({ gridTemplateColumns: "repeat(2, 1fr)" })};
  ${minScreen({ gridTemplateColumns: "repeat(4, 1fr)" })};
  ${midScreen({ gridTemplateColumns: "repeat(4, 1fr)" })};
  ${maxScreen({ gridTemplateColumns: "repeat(4, 1fr)" })};
`;

const FilterProducts = () => {
  return (
    <Container>
      <FilterText>Filter Products:</FilterText>
      <FilterByPrice />
      <Filter>
        <FilterByGender />
        <FilterByCategory />
        <FilterByBrand />
        <FilterByColor />
      </Filter>
    </Container>
  );
};

export default FilterProducts;
