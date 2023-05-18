import styled from "styled-components";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";
import MenuContent from "../components/MenuContent";
import { colors, sizes } from "../data";

const Container = styled.div``;

const Header = styled.div`
  position: sticky;
  top: 0;
  z-index: 1;
`;

const Title = styled.h1`
  margin: 1.2em;
`;
const FilterContainer = styled.div`
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

const Select = styled.select`
  font-size: 1.2em;
  font-weight: 600;
  margin: 0.5em 0em;
`;
const Option = styled.option``;

const ProductList = () => {
  return (
    <Container>
      <Header>
        <Navbar />
        <MenuContent />
      </Header>
      <Title>SHOES</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select>
            <Option disabled selected>
              Color
            </Option>
            {colors.map((item) => (
              <Option key={item.id}>{item.color}</Option>
            ))}
          </Select>
          <Select>
            <Option disabled selected>
              Size
            </Option>
            {sizes.map((item) => (
              <Option key={item.id}>{item.size}</Option>
            ))}
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select>
            <Option selected>Newest</Option>
            <Option>Price (asc)</Option>
            <Option>Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <NewsLetter />
      <Footer />
    </Container>
  );
};

export default ProductList;
