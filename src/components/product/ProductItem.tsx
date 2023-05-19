import styled from "styled-components";
import FilterItem from "./FilterItem";
import AddItem from "./AddItem";
import { useParams } from "react-router-dom";
const imageSrc: string = require("../../Images/1.png");

const Container = styled.div`
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

const ProductItem = () => {
  const { itemId } = useParams();
  return (
    <Container>
      <ImgContainer>
        <Image src={imageSrc} alt="Product" />
      </ImgContainer>
      <InfoContainer>
        <Title>Item ID: {itemId}</Title>
        <Desc>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui eaque a
          obcaecati amet. Veniam laboriosam veritatis vitae, hic eius rerum
          itaque vel saepe magnam nesciunt animi quidem natus dolores a.
        </Desc>
        <Price>$ 20</Price>
        <FilterItem />
        <AddItem />
      </InfoContainer>
    </Container>
  );
};

export default ProductItem;
