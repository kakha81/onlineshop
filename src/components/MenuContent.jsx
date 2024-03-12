import styled from "styled-components";
import { tablet } from "../responsive";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: teal;
  ${tablet({ display: "none" })};
`;
const MenuContainer = styled.li`
  list-style: none;
  margin-right: 2em;
  margin-bottom: 0.5em;
  padding: 0.2em;
  color: white;
  border-bottom: 4px solid teal;
  transition: 0.5s all ease-out;
  cursor: pointer;
  &:active {
    font-weight: 600;
  }
  &:hover {
    border-bottom: 4px solid white;
  }
`;

const MenuContent = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <MenuContainer onClick={() => navigate("/")}>HOME</MenuContainer>
      <MenuContainer onClick={() => navigate("/Cart")}>MY BASKET</MenuContainer>
      <MenuContainer onClick={() => navigate("/wishlist")}>
        MY WISHLIST
      </MenuContainer>
      <MenuContainer onClick={() => navigate("/profile")}>
        MY ACCOUNT
      </MenuContainer>
    </Container>
  );
};

export default MenuContent;
