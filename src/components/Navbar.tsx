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
  height: 50px;
`;

const Wrapper = styled.div`
  padding: 10px 0px;
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
  display: none;
  font-size: 14px;
  cursor: pointer;
`;

const SearchContainer = styled.div`
  border: 0.1em solid lightgrey;
  display: flex;
  align-items: center;
  margin-left: 10%;
  padding: 0px;
`;

const Input = styled.input`
  border: none;
  width: 100%;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
  margin-left: 2em;
`;

const Logo = styled.h1`
  font-size: 0.8em;
  font-weight: 900;
`;

const Right = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MenuItem = styled.div`
  font-size: 0.5em;
  font-weight: 900;
  cursor: pointer;
  margin-left: 10%;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <SearchIcon style={{ color: "grey", fontSize: "16px" }} />
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
