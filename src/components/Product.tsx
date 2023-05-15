import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1em;
  background-color: white;
`;

const ItemContainer = styled.div`
  border: 3px solid white;
  cursor: pointer;
  &:active {
    border: 3px solid gray;
  }
`;

const Image = styled.img`
  width: 18em;
  height: 18em;
`;

const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ItemName = styled.div`
  font-weight: 700;
  margin-bottom: 0.5em;
`;

const ItemPrice = styled.div`
  font-weight: 700;
  margin: 0.5em;
`;

const Button = styled.button`
  width: 100%;
  padding: 0.5em;
  font-size: 1em;
  font-weight: 700;
  color: white;
  background-color: teal;
  cursor: pointer;
  transition: 0.3s all ease;
  &:active {
    transform: scale(1.05);
  }
`;

type ProductProps = {
  item: {
    id: number;
    name: string;
    price: number;
    img: string;
  };
};

const Product: React.FC<ProductProps> = ({ item }) => {
  const navigate = useNavigate();
  return (
    <Container>
      <ItemContainer onClick={() => navigate(`/product/${item.id}`)}>
        <Image src={item.img} />
        <ItemInfo>
          <ItemName>{item.name}</ItemName>
          <ItemPrice>{item.price}$</ItemPrice>
        </ItemInfo>
      </ItemContainer>
      <Button>Add To Cart</Button>
    </Container>
  );
};

export default Product;
