import styled from 'styled-components';
import Navbar from '../components/Navbar';
import NewsLetter from '../components/NewsLetter';
import Footer from '../components/Footer';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import MenuContent from '../components/MenuContent';
import { useState } from 'react';
const imageSrc: string = require('../Images/1.png');

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 0.5em;
  display: flex;
  flex-direction: column;
`;
const ImgContainer = styled.div`
  flex: 1;
  max-width: 100%;
`;
const Image = styled.img`
  width: 60vw;
  object-fit: cover;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 1em;
`;
const Title = styled.h1`
  font-weight: 800;
`;
const Desc = styled.p`
  margin: 1em 0em;
`;
const Price = styled.span`
  font-weight: 500;
  font-size: 2em;
`;

const FilterContainer = styled.div`
  width: 100%;
  margin: 2em 0em;
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 1.2em;
  font-weight: 500;
`;

const FilterColor = styled.div<{ color: string }>`
  width: 1.2em;
  height: 1.2em;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0em 0.5em;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 0.5em;
  padding: 0.5em;
  font-weight: 900;
`;

const FilterSizeOption = styled.option`
  font-weight: 900;
`;

const AddContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 2em;
  height: 2em;
  border-radius: 0.5em;
  border: 0.1em solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0em 0.5em;
`;

const Button = styled.button`
  padding: 1em;
  border: 0.1em solid teal;
  border-radius: 1em;
  color: white;
  background-color: teal;
  cursor: pointer;
  font-weight: 900;
`;

const Product: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const decreaseCount = () => {
    setCount((prevCount) => Math.max(prevCount - 1, 0));
  };

  const increaseCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <Container>
      <Navbar />
      <MenuContent />
      <Wrapper>
        <ImgContainer>
          <Image src={imageSrc} alt='Product' />
        </ImgContainer>
        <InfoContainer>
          <Title>Denim Jumpsuit</Title>
          <Desc>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui eaque
            a obcaecati amet. Veniam laboriosam veritatis vitae, hic eius rerum
            itaque vel saepe magnam nesciunt animi quidem natus dolores a.
          </Desc>
          <Price>$ 20</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color='black' />
              <FilterColor color='darkblue' />
              <FilterColor color='gray' />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
                <FilterSizeOption>XXL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <RemoveIcon
                onClick={() => {
                  decreaseCount();
                }}
              />
              <Amount>{count}</Amount>
              <AddIcon
                onClick={() => {
                  increaseCount();
                }}
              />
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <NewsLetter />
      <Footer />
    </Container>
  );
};

export default Product;
