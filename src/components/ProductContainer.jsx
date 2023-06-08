import { useContext } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { productsArray } from "../data";
import { DataContext } from "../App";

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
  width: 50vw;
  object-fit: cover;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 1em;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-around;
  color: teal;
`;

const Title = styled.h1`
  font-weight: 700;
  text-transform: capitalize;
`;

const Price = styled.span`
  font-weight: 700;
  font-size: 2em;
`;

const Size = styled.h1`
  font-size: 2em;
  font-weight: 500;
  text-transform: capitalize;
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
  const specifiedProduct = productsArray[itemId - 1];
  const { cart, setCart } = useContext(DataContext);

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

  return (
    <Container>
      <ImgContainer>
        <Image src={specifiedProduct.img} alt="Product" />
      </ImgContainer>
      <InfoContainer>
        <TitleContainer>
          <Title>{specifiedProduct.brand}</Title>
          <Price>${specifiedProduct.price}</Price>
          <Size>size: {specifiedProduct.size}</Size>
        </TitleContainer>
      </InfoContainer>
      <ButtonContainer>
        <Button onClick={() => addToCart()}>ADD TO CART</Button>
      </ButtonContainer>
    </Container>
  );
};

export default ProductContainer;
