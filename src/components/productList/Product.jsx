import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import { motion } from 'framer-motion';

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
  border: 0.2em solid teal;
  z-index: 1;
  cursor: pointer;
`;

const FavoriteIcon = styled.div`
  position: absolute;
  margin: 0.4em;
  color: #ffa200;
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
  text-transform: capitalize;
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
  &:active {
    background-color: red;
    border: 1px solid red;
  }
`;

const Product = ({ item }) => {
  const navigate = useNavigate();
  const [starFilled, setStarFilled] = useState(false);
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
      transition={{ duration: 0.7 }}
    >
      <Container>
        <FavoriteIcon onClick={() => setStarFilled(!starFilled)}>
          {starFilled ? <StarIcon /> : <StarBorderIcon />}
        </FavoriteIcon>
        <ItemContainer onClick={() => navigate(`/product/${item.id}`)}>
          <Image src={item.img} />
          <ItemInfo>
            <ItemName>{item.name}</ItemName>
            <ItemPrice>{item.price}$</ItemPrice>
          </ItemInfo>
        </ItemContainer>
        <Button>Add To Cart</Button>
      </Container>
    </motion.div>
  );
};

export default Product;
