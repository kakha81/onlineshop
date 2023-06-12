import { useContext } from "react";
import styled from "styled-components";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { maxScreen, midScreen, minScreen, tablet } from "../../responsive";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import { DataContext } from "../../App";

const ItemContainer = styled.div`
  display: flex;
  align-self: center;
  width: 100%;
  height: 7em;
  margin-bottom: 0.5em;
  border-radius: 0.5em;
  &:active {
    box-shadow: 5px 5px 10px lightgray;
  }
  ${tablet({ width: "100%" })}
  ${minScreen({ width: "40em" })}
  ${midScreen({ width: "40em" })}
  ${maxScreen({ width: "40em" })}
`;

const DeleteContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 3em;
  min-width: 3em;
  align-items: center;
  justify-content: center;
  background-color: red;
  border-top-right-radius: 0.5em;
  border-bottom-right-radius: 0.5em;
  border: 0.15em solid red;
  cursor: pointer;
`;

const RedDeleteIcon = styled(DeleteForeverOutlinedIcon)`
  cursor: pointer;
  color: white;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  border: 0.1em solid lightgray;
  border-right-color: red;
  border-top-left-radius: 0.5em;
  border-bottom-left-radius: 0.5em;
`;

const ImageContainer = styled.div`
  flex: 1;
`;

const ProductDetail = styled.div`
  display: flex;
  flex: 2;
  align-items: center;
  margin-left: 0.5em;
`;

const Image = styled.img`
  width: 6em;
  height: 100%;
  border-radius: 0.5em;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProductName = styled.span`
  font-weight: 700;
  margin-left: 0;
`;

const ProductId = styled.span`
  font-weight: 500;
  margin-left: 0;
`;

const ProductSize = styled.span`
  font-weight: 500;
  margin-left: 0;
`;

const PriceDetail = styled.div`
  display: flex;
  flex: 2;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin: auto;
`;

const RemoveIconItem = styled(RemoveIcon)`
  color: teal;
  cursor: pointer;
`;

const AddIconItem = styled(AddIcon)`
  color: teal;
  cursor: pointer;
`;

const Amount = styled.span`
  width: 1.5em;
  height: 1.5em;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0.1em solid teal;
  border-radius: 0.5em;
  margin: auto;
  font-weight: 700;
  ${tablet({ width: "1.7em", height: "1.7em" })}
  ${minScreen({ width: "2em", height: "2em" })}
  ${midScreen({ width: "2.2em", height: "2.2em" })}
  ${maxScreen({ width: "2.2em", height: "2.2em" })}
`;

const ProductPrice = styled.div`
  font-size: 1em;
  font-weight: 700;
  color: teal;
  margin: auto;
  ${minScreen({ fontSize: "1.2em" })}
  ${minScreen({ fontSize: "1.5em" })}
  ${midScreen({ fontSize: "1.5em" })}
  ${maxScreen({ fontSize: "1.5em" })}
`;

const CartItem = ({ item }) => {
  const { cart, setCart } = useContext(DataContext);

  const decreaseCount = () => {
    if (item.orderedItem > 1) {
      const updatedCart = cart.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, orderedItem: cartItem.orderedItem - 1 }
          : cartItem
      );
      setCart(updatedCart);
    }
  };

  const increaseCount = () => {
    const updatedCart = cart.map((cartItem) =>
      cartItem.id === item.id
        ? { ...cartItem, orderedItem: cartItem.orderedItem + 1 }
        : cartItem
    );
    setCart(updatedCart);
  };

  const removeFromCart = () => {
    const updatedCart = cart.filter((cartItem) => cartItem.id !== item.id);
    setCart(updatedCart);
  };

  return (
    <ItemContainer>
      <Container>
        <ImageContainer>
          <Image src={item.img} alt="Product" />
        </ImageContainer>
        <ProductDetail>
          <Details>
            <ProductName>{item.brand}</ProductName>
            <ProductId>ID: {item.id}</ProductId>
            <ProductSize>Size: {item.size}</ProductSize>
          </Details>
        </ProductDetail>
        <PriceDetail>
          <ProductPrice>${item.price}</ProductPrice>
          <ProductAmountContainer>
            <RemoveIconItem onClick={decreaseCount} />
            <Amount>{item.orderedItem}</Amount>
            <AddIconItem onClick={increaseCount} />
          </ProductAmountContainer>
          <ProductPrice>${item.price * item.orderedItem}</ProductPrice>
        </PriceDetail>
      </Container>
      <DeleteContainer onClick={removeFromCart}>
        <RedDeleteIcon />
      </DeleteContainer>
    </ItemContainer>
  );
};

export default CartItem;
