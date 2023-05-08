import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlined from "@mui/icons-material/ShoppingCartOutlined";
import styled from "styled-components";
import // mobile,
// tablet,
// minScreen,
// midScreen,
// maxScreen
"../responsive";

const Container = styled.div`
  height: 3em;
`;

const Wrapper = styled.div`
  padding: 0.5em 0em;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 1em;
  font-weight: 900;
  cursor: pointer;
`;

const SearchContainer = styled.div`
  border: 0.1em solid lightgrey;
  display: flex;
  align-items: center;
  margin-left: 5%;
  padding: 0em;
  width: 8em;
`;

const Input = styled.input`
  border: none;
  width: 100%;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
  margin-left: 1em;
`;

const Logo = styled.h1`
  font-size: 0.7em;
  font-weight: 900;
`;

const Right = styled.div`
  flex: 3;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const MenuItem = styled.div`
  font-size: 0.7em;
  font-weight: 900;
  cursor: pointer;
  margin-right: 5%;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <SearchIcon style={{ color: "grey", fontSize: "1em" }} />
          </SearchContainer>
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
    </Container>
  );
};

export default Navbar;
