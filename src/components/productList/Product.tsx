import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.5em;
  background-color: white;
  transition: 0.2s all ease-in;
  &:hover {
    box-shadow: 10px 10px 5px grey;
  }
`;

const ItemContainer = styled.div`
  position: relative;
  z-index: 1;
  cursor: pointer;
`;

const FavoriteIcon = styled.div`
  position: absolute;
  color: orange;
  z-index: 2;
  cursor: pointer;
`;

const Image = styled.img`
  width: 10em;
  height: 10em;
  object-fit: contain;
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
  border: 1px solid teal;
  cursor: pointer;
  transition: 0.3s all ease;
  &:active {
    background-color: red;
    border: 1px solid red;
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
  const [isClicked, setIsClicked] = useState<boolean>(false);
  return (
    <Container>
      <FavoriteIcon onClick={() => setIsClicked(!isClicked)}>
        {isClicked ? <StarIcon /> : <StarBorderIcon />}
      </FavoriteIcon>
      <ItemContainer onClick={() => navigate(`/product/${item.id}`)}>
        <Image src={item.img} />
        <ItemInfo>
          <ItemName>{item.name}</ItemName>
          <ItemPrice>{item.price}$</ItemPrice>
        </ItemInfo>
      </ItemContainer>
      <Button onClick={() => navigate('/cart')}>Add To Cart</Button>
    </Container>
  );
};

export default Product;
