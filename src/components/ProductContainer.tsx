import { productsArray } from '../data';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import FilterBySize from './filter/FilterBySize';

const Container = styled.div`
  padding: 0.5em;
  display: flex;
  flex-direction: column;
`;
const ImgContainer = styled.div`
  flex: 1;
  align-self: center;
`;
const Image = styled.img`
  width: 40vw;
  max-width: 400px;
  object-fit: cover;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 1em;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Title = styled.h1`
  font-weight: 800;
`;

const Price = styled.span`
  font-weight: 500;
  font-size: 2em;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  width: 12em;
  padding: 0.4em;
  font-weight: 500;
  color: white;
  background-color: teal;
  border: 0.25em solid teal;
  border-radius: 2em;
  cursor: pointer;
  &:active {
    border-color: red;
    background-color: red;
  }
`;

const ProductContainer = () => {
  const { itemId } = useParams();

  return (
    <Container>
      <ImgContainer>
        <Image src={require(`../Images/${itemId}.png`)} alt='Product' />
      </ImgContainer>
      <InfoContainer>
        <TitleContainer>
          <Title>{productsArray[`${Number(itemId) - 1}`].name}</Title>
          <Price>${productsArray[`${Number(itemId) - 1}`].price}</Price>
        </TitleContainer>
        <FilterBySize />
      </InfoContainer>
      <ButtonContainer>
        <Button>ADD TO CART</Button>
      </ButtonContainer>
    </Container>
  );
};

export default ProductContainer;
