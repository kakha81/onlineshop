import styled from "styled-components";
import FilterItem from "./FilterItem";
import AddItem from "./AddItem";
import { useParams } from "react-router-dom";
import { ProductsArray } from "../../data";

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
const Title = styled.h1`
  font-weight: 800;
`;
const Price = styled.span`
  font-weight: 500;
  font-size: 2em;
`;

const ProductContainer = () => {
  const { itemId } = useParams();

  return (
    <Container>
      <ImgContainer>
        <Image src={require(`../../Images/${itemId}.png`)} alt="Product" />
      </ImgContainer>
      <InfoContainer>
        <Title>{ProductsArray[`${Number(itemId) - 1}`].name}</Title>
        <Price>${ProductsArray[`${Number(itemId) - 1}`].price}</Price>
        <FilterItem />
        <AddItem />
      </InfoContainer>
    </Container>
  );
};

export default ProductContainer;
