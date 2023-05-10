import { FC, useState } from "react";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlined from "@mui/icons-material/ShoppingCartOutlined";
import styled from "styled-components";

interface burgerMenu {}

const Container = styled.div`
  height: 3em;
`;

const Wrapper = styled.div`
  position: relative;
  padding: 0.5em 0em;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Left = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const MenuLabel = styled.label`
  cursor: pointer;
  width: 3em;
  margin-top: 0.5em;
`;

interface IconProps {
  clicked: boolean;
}

interface SideNavProps {
  clicked: boolean;
}

const Icon = styled.span<IconProps>`
  position: relative;
  background-color: ${(props) => (props.clicked ? "transparent" : "teal")};
  width: 2em;
  height: 6px;
  display: inline-block;
  transition: 0.3s all ease;
  &::before,
  &::after {
    content: "";
    background-color: teal;
    width: 2em;
    height: 6px;
    display: inline-block;
    position: absolute;
    left: 0;
    transition: 0.3s all ease;
  }
  &::before {
    top: ${(props) => (props.clicked ? "0" : "-0.8rem")};
    transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
  }
  &::after {
    top: ${(props) => (props.clicked ? "0" : "0.8rem")};
    transform: ${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
  }
`;

const Center = styled.div`
  position: absolute;
`;

const Logo = styled.h1`
  font-size: 0.7em;
  font-weight: 900;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
  font-size: 0.7em;
  font-weight: 900;
  cursor: pointer;
  margin-right: 0.8em;
`;
const SideNav = styled.div<SideNavProps>`
  position: absolute;
  width: 50%;
  height: 100%;
  background-color: teal;
  transform: translateX(${(props) => (props.clicked ? "0%" : "-100%")});
  transition: all 0.5s ease-in-out;
`;

const MenuContainer = styled.ul`
  position: fixed;
  list-style: none;
  display: flex;
  flex-direction: column;
`;

const ListItem = styled.li`
  color: white;
  height: 4em;
  font-size: 2em;
  margin-top: 1em;
`;

const BurgerMenu: FC<burgerMenu> = () => {
  const [click, setClick] = useState<boolean>(false);
  const handleClick = () => setClick(!click);
  return (
    <Container>
      <Wrapper>
        <Left>
          <MenuLabel htmlFor="navi-toggle" onClick={handleClick}>
            <Icon clicked={click}>&nbsp;</Icon>
          </MenuLabel>
        </Left>
        <Center>
          <Logo>ONLINE SHOP</Logo>
        </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
            <Badge badgeContent={2} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
      <SideNav clicked={click}>
        <MenuContainer>
          <ListItem>HOME</ListItem>
          <ListItem>PRODUCTS</ListItem>
          <ListItem>MY BASKET</ListItem>
          <ListItem>CONTACT</ListItem>
        </MenuContainer>
      </SideNav>
    </Container>
  );
};

export default BurgerMenu;
