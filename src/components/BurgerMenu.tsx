import { FC, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlined from '@mui/icons-material/ShoppingCartOutlined';
import styled from 'styled-components';

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
  height: 3em;
  margin-top: 0.5em;
`;

interface IconProps {
  clicked: boolean;
}

const Icon = styled.span<IconProps>`
  position: relative;
  background-color: ${(props) => (props.clicked ? 'transparent' : 'teal')};
  width: 2em;
  height: 6px;
  display: inline-block;
  transition: 0.3s all ease;
  &::before,
  &::after {
    content: '';
    background-color: teal;
    width: 2em;
    height: 6px;
    display: inline-block;
    position: absolute;
    left: 0;
    transition: 0.3s all ease;
  }
  &::before {
    top: ${(props) => (props.clicked ? '0' : '-0.8rem')};
    transform: ${(props) => (props.clicked ? 'rotate(135deg)' : 'rotate(0)')};
  }
  &::after {
    top: ${(props) => (props.clicked ? '0' : '0.8rem')};
    transform: ${(props) => (props.clicked ? 'rotate(-135deg)' : 'rotate(0)')};
  }
`;

const SearchContainer = styled.div`
  border: 0.1em solid lightgrey;
  display: flex;
  width: 8em;
`;

const Input = styled.input`
  border: none;
  width: 100%;
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
  justify-content: right;
`;

const MenuItem = styled.div`
  font-size: 0.7em;
  font-weight: 900;
  cursor: pointer;
  margin-right: 0.8em;
`;

const BurgerMenu: FC<burgerMenu> = () => {
  const [click, setClick] = useState<boolean>(false);
  const handleClick = () => setClick(!click);
  return (
    <Container>
      <Wrapper>
        <Left>
          <MenuLabel htmlFor='navi-toggle' onClick={handleClick}>
            <Icon clicked={click}>&nbsp;</Icon>
          </MenuLabel>
          <SearchContainer>
            <Input placeholder='Search' />
            <SearchIcon style={{ color: 'grey', fontSize: '1em' }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>ONLINE SHOP</Logo>
        </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
            <Badge badgeContent={2} color='primary'>
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default BurgerMenu;
