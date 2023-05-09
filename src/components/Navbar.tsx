import { FC, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlined from '@mui/icons-material/ShoppingCartOutlined';
import styled from 'styled-components';

const UsFlag = require('../Images/flags/united-states-flag.png');
const GeoFlag = require('../Images/flags/georgian-flag.png');

interface NavbarProps {}

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
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: left;
`;

const FlagsContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

interface FlagProps {
  isActive: boolean;
}

const Flag = styled.img<FlagProps>`
  width: 2em;
  margin-right: 0.3em;
  cursor: pointer;
  opacity: ${({ isActive }) => (isActive ? 1 : 0.3)};
  transform: scale(${({ isActive }) => (isActive ? 1.1 : 1)});
  transition: 0.3s all ease-in-out;
`;

const SearchContainer = styled.div`
  border: 0.1em solid lightgrey;
  display: flex;
  align-items: center;
  width: 7em;
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

const Navbar: FC<NavbarProps> = () => {
  const [activeFlag, setActiveFlag] = useState<'us' | 'geo'>('us');
  return (
    <Container>
      <Wrapper>
        <Left>
          <FlagsContainer>
            <Flag
              src={UsFlag}
              isActive={activeFlag === 'us'}
              onClick={() => setActiveFlag('us')}
            />
            <Flag
              src={GeoFlag}
              isActive={activeFlag === 'geo'}
              onClick={() => setActiveFlag('geo')}
            />
          </FlagsContainer>
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

export default Navbar;
