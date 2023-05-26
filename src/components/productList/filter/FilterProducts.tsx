import styled from 'styled-components';
import FilterBrand from './FilterBrand';
import FilterCategory from './FilterCategory';
import FilterPrice from './FilterPrice';

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
  text-transform: uppercase;
`;

const FilterProducts = () => {
  return (
    <Container>
      <Filter>
        <FilterText>Filter Products:</FilterText>
        <FilterCategory />
        <FilterBrand />
      </Filter>
      <Filter>
        <FilterText>Sort Products:</FilterText>
        <FilterPrice />
      </Filter>
    </Container>
  );
};

export default FilterProducts;
