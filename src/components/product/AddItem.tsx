import React, { useState } from "react";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 2em;
  height: 2em;
  border-radius: 0.5em;
  border: 0.1em solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0em 0.5em;
`;

const Button = styled.button`
  padding: 1em;
  border: 0.1em solid teal;
  border-radius: 1em;
  color: white;
  background-color: teal;
  cursor: pointer;
  font-weight: 900;
`;

const AddItem: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const navigate = useNavigate();

  const decreaseCount = () => {
    setCount((prevCount) => Math.max(prevCount - 1, 0));
  };

  const increaseCount = () => {
    setCount((prevCount) => prevCount + 1);
  };
  return (
    <Container>
      <AmountContainer>
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
      </AmountContainer>
      <Button onClick={() => navigate("/cart")}>ADD TO CART</Button>
    </Container>
  );
};

export default AddItem;
