import { colors, sizes } from '../../data';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  margin: 2em 0em;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const FilterSizeTitle = styled.span`
  font-size: 1.2em;
  margin-right: 0.5em;
`;

const FilterColorContainer = styled.select`
  margin-left: 0.5em;
  padding: 0.5em;
`;

const FilterColorOption = styled.option``;

const FilterSizeContainer = styled.div``;

const FilterSize = styled.select`
  padding: 0.5em;
`;

const FilterSizeOption = styled.option``;

const FilterItem = () => {
  return (
    <Container>
      <FilterColorContainer>
        {colors.map((item) => (
          <FilterColorOption key={item.id}>{item.color}</FilterColorOption>
        ))}
      </FilterColorContainer>
      <FilterSizeContainer>
        <FilterSizeTitle>Size</FilterSizeTitle>
        <FilterSize>
          {sizes.map((item) => (
            <FilterSizeOption key={item.id}>{item.size}</FilterSizeOption>
          ))}
        </FilterSize>
      </FilterSizeContainer>
    </Container>
  );
};

export default FilterItem;
