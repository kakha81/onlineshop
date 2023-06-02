import { useState } from "react";
import styled from "styled-components";

import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { maxScreen, midScreen, minScreen, tablet } from "../responsive";
import DeleteIcon from "@mui/icons-material/Delete";

const Product = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: 0.5em;
  border: 0.15em solid teal;
`;

const ProductDetail = styled.div`
  display: flex;
  align-items: center;
`;

const Image = styled.img`
  width: 6em;
  border-radius: 0.5em;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.2em;
`;

const ProductName = styled.span`
  font-weight: 500;
  margin: 0.1em;
`;

const ProductId = styled.span`
  font-weight: 500;
  margin: 0.1em;
`;

const ProductSize = styled.span`
  font-weight: 500;
  margin: 0.1em;
`;

const PriceDetail = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 1em;
`;

const Amount = styled.span`
  width: 1.5em;
  height: 1.5em;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0.1em solid teal;
  border-radius: 0.5em;
  margin: auto 0.1em;
  font-weight: 700;
  ${tablet({ width: "1.7em", height: "1.7em" })}
  ${minScreen({ width: "2em", height: "2em" })}
  ${midScreen({ width: "2.2em", height: "2.2em" })}
  ${maxScreen({ width: "2.5em", height: "2.5em" })}
`;

const ProductPrice = styled.div`
  font-size: 1em;
  font-weight: 700;
  color: teal;
  margin-right: 0.1em;
  ${minScreen({ fontSize: "1.2em" })}
  ${minScreen({ fontSize: "1.5em" })}
  ${midScreen({ fontSize: "1.7em" })}
  ${maxScreen({ fontSize: "2em" })}
`;

const RedDeleteIcon = styled(DeleteIcon)`
  color: red;
  cursor: pointer;
  transform: scale(1.3);
  &:active {
    transform: scale(1);
  }
`;

const CartItem = () => {
  const [count, setCount] = useState(1);
  const productItem = 30;

  const decreaseCount = () => {
    setCount((prevCount) => Math.max(prevCount - 1, 1));
  };

  const increaseCount = () => {
    setCount((prevCount) => Math.min(prevCount + 1, 10));
  };

  const reduceCount = () => {
    setCount((prevCount) => Math.max(prevCount - 1, 1));
  };

  return (
    <Product>
      <ProductDetail>
        <Image src={require("../Images/1.png")} />
        <Details>
          <ProductName>Product: ADIDAS</ProductName>
          <ProductId>ID: 1</ProductId>
          <ProductSize>Size: 37.5</ProductSize>
        </Details>
      </ProductDetail>
      <PriceDetail>
        <ProductPrice>${productItem}</ProductPrice>
        <ProductAmountContainer>
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
        </ProductAmountContainer>
        <ProductPrice>${productItem * count}</ProductPrice>
        <RedDeleteIcon onClick={() => reduceCount()} />
      </PriceDetail>
    </Product>
  );
};

export default CartItem;
