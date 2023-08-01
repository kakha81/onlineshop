import { useContext, useState } from "react";
import { DataContext } from "../../App";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { tablet, minScreen, midScreen, maxScreen } from "../../responsive";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import { motion } from "framer-motion";
import { productsArray } from "../../data";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 8em;
  margin: 0.5em;
  background-color: white;
  transition: 0.2s all ease-in;
  ${tablet({ width: "8em" })};
  ${minScreen({ width: "10em" })};
  ${midScreen({ width: "12em" })};
  ${maxScreen({ width: "12em" })};
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
  width: 100%;
  height: 7em;
  object-fit: contain;
  ${tablet({ height: "7em" })};
  ${minScreen({ height: "10em" })};
  ${midScreen({ height: "12em" })};
  ${maxScreen({ height: "12em" })};
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
  const { cart, setCart, wishlist, setWishlist } = useContext(DataContext);

  const specifiedProduct = productsArray.find(
    (product) => product.id === item.id
  );

  const addToCart = () => {
    const itemInCart = cart.find((item) => item.id === specifiedProduct.id);

    if (itemInCart) {
      const updatedCart = cart.map((item) =>
        item.id === specifiedProduct.id
          ? { ...item, orderedItem: item.orderedItem + 1 }
          : item
      );
      setCart(updatedCart);
    } else {
      const updatedCart = [...cart, { ...specifiedProduct, orderedItem: 1 }];
      setCart(updatedCart);
    }
  };

  const addToWishlist = () => {
    const itemInWishlist = wishlist.find(
      (item) => item.id === specifiedProduct.id
    );

    if (itemInWishlist) {
      const updatedWishlist = wishlist.map((item) =>
        item.id === specifiedProduct.id
          ? { ...item, orderedItem: item.orderedItem + 1 }
          : item
      );
      setWishlist(updatedWishlist);
    } else {
      const updatedWishlist = [
        ...wishlist,
        { ...specifiedProduct, orderedItem: 1 },
      ];
      setWishlist(updatedWishlist);
    }
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
      transition={{ duration: 0.7 }}
    >
      <Container>
        <FavoriteIcon
          onClick={() => {
            setStarFilled(!starFilled);
            addToWishlist();
          }}
        >
          {starFilled ? <StarIcon /> : <StarBorderIcon />}
        </FavoriteIcon>
        <ItemContainer onClick={() => navigate(`/product/${item.id}`)}>
          <Image src={item.img} />
          <ItemInfo>
            <ItemName>{item.brand}</ItemName>
            <ItemPrice>{item.price}$</ItemPrice>
          </ItemInfo>
        </ItemContainer>
        <Button onClick={() => addToCart()}>Add To Cart</Button>
      </Container>
    </motion.div>
  );
};

export default Product;
