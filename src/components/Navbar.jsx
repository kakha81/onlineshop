import { useContext, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlined from "@mui/icons-material/ShoppingCartOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { DataContext } from "../App";
import styled from "styled-components";
import { tablet, minScreen, midScreen, maxScreen } from "../responsive";

const UsFlag = require("../Images/flags/united-states-flag.png");
const GeoFlag = require("../Images/flags/georgian-flag.png");

const Container = styled.div`
  height: 3em;
  background-color: teal;
`;

const Wrapper = styled.div`
  padding: 0.5em 0em;
  display: flex;
  align-items: center;
  justify-content: center;
  ${tablet({ flexDirection: "row" })};
  ${minScreen({ flexDirection: "row" })};
`;

const Left = styled.div`
  display: flex;
  align-items: center;
`;

const MenuLabel = styled.label`
  cursor: pointer;
  width: 3em;
  margin-top: 0.5em;
  ${minScreen({ display: "none" })};
  ${midScreen({ display: "none" })};
  ${maxScreen({ display: "none" })};
`;

const Icon = styled.span`
  position: relative;
  background-color: ${(props) => (props.clicked ? "transparent" : "white")};
  width: 2em;
  height: 3px;
  margin: 0.3em;
  display: inline-block;
  transition: 0.3s all ease;
  &::before,
  &::after {
    content: "";
    background-color: white;
    width: 2em;
    height: 3px;
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

const FlagsContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 0.3em;
`;

const Flag = styled.img`
  width: 2em;
  margin-right: 0.3em;
  cursor: pointer;
  opacity: ${({ isActive }) => (isActive ? 1 : 0.3)};
  transform: scale(${({ isActive }) => (isActive ? 1.1 : 1)});
  transition: 0.3s all ease-in-out;
`;

const SearchContainer = styled.div`
  border: 0.1em solid teal;
  display: flex;
  align-items: center;
  margin-left: 0.2em;
  width: 7em;
  ${tablet({ display: "none" })};
  ${minScreen({ width: "15em" })};
  ${midScreen({ width: "20em" })};
  ${maxScreen({ width: "20em" })};
`;

const Input = styled.input`
  border: none;
  width: 100%;
  padding: 0.2em 0.5em;
`;

const Center = styled.div`
  position: absolute;
`;

const Logo = styled.h1`
  font-size: 0.8em;
  font-weight: 600;
  color: white;
  cursor: pointer;
  ${minScreen({ fontSize: "1em" })};
  ${midScreen({ fontSize: "1.5em" })};
  ${maxScreen({ fontSize: "1.7em" })};
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  color: white;
  margin-right: 0.5em;
`;

const MenuItem = styled.div`
  font-size: 0.6em;
  font-weight: 700;
  cursor: pointer;
  margin-right: 0.8em;
`;
const SideNav = styled.div`
  position: fixed;
  width: 15em;
  height: 100%;
  background-color: teal;
  transform: translateX(${(props) => (props.clicked ? "0%" : "-100%")});
  transition: all 0.5s ease-in-out;
  ${midScreen({ display: "none" })};
  ${maxScreen({ display: "none" })};
  z-index: 1000;
`;

const MenuContainer = styled.ul`
  position: fixed;
  list-style: none;
  display: flex;
  flex-direction: column;
`;

const ListItem = styled.li`
  color: white;
  font-size: 1.5em;
  font-weight: 900;
  margin-top: 2em;
  margin-left: 1em;
  border-bottom: 4px solid teal;
  transition: 0.5s all ease-out;
  cursor: pointer;
  &:hover {
    border-bottom: 4px solid white;
  }
`;

const Navbar = () => {
  const {
    cart,
    product,
    setProduct,
    activeFlag,
    setActiveFlag,
    click,
    setClick,
    searchField,
    setSearchField,
  } = useContext(DataContext);

  const navigate = useNavigate();

  // Active language function
  const handleClick = () => setClick(!click);
  // Active language function

  // Input function
  const handleChange = (e) => {
    setSearchField(e.target.value);
  };

  const getFilteredProduct = (product, searchField) => {
    return product.filter((item) => item.brand.includes(searchField));
  };
  useEffect(() => {
    const filteredProduct = getFilteredProduct(product, searchField);
    setProduct(filteredProduct);
  }, [product, setProduct, searchField]);
  // Input function

  // Cart badge quantity function
  const totalOrderCount = useMemo(
    () => cart.reduce((sum, item) => sum + item.orderedItem, 0),
    [cart]
  );
  // Cart badge quantity function

  return (
    <Container>
      <Wrapper>
        <Left>
          <MenuLabel htmlFor="navi-toggle" onClick={handleClick}>
            <Icon clicked={click}>&nbsp;</Icon>
          </MenuLabel>
          {/* Languages */}
          <FlagsContainer>
            <Flag
              src={UsFlag}
              isActive={activeFlag === "US"}
              onClick={() => setActiveFlag("US")}
            />
            <Flag
              src={GeoFlag}
              isActive={activeFlag === "GEO"}
              onClick={() => setActiveFlag("GEO")}
            />
          </FlagsContainer>
          {/* Languages */}
          <SearchContainer>
            <Input
              placeholder="SEARCH"
              type="search"
              value={searchField}
              onChange={handleChange}
            />
            <SearchIcon
              style={{
                color: "white",
                fontSize: "1.5em",
                paddingLeft: "0.2em",
              }}
            />
          </SearchContainer>
        </Left>
        <Center>
          <Logo onClick={() => navigate("/")}>ONLINESHOP</Logo>
        </Center>
        <Right>
          <MenuItem onClick={() => navigate("/register")}>SIGN UP</MenuItem>
          <MenuItem onClick={() => navigate("/login")}>LOG IN</MenuItem>
          <MenuItem>
            <Badge
              badgeContent={totalOrderCount}
              color="error"
              onClick={() => navigate("/cart")}
            >
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
      <SideNav clicked={click}>
        <MenuContainer>
          <ListItem onClick={() => navigate("/")}>HOME</ListItem>
          <ListItem onClick={() => navigate("/cart")}>MY BASKET</ListItem>
          <ListItem onClick={() => navigate("/wishlist")}>MY WISHLIST</ListItem>
          <ListItem onClick={() => navigate("/profile")}>MY ACCOUNT</ListItem>
          <ListItem onClick={() => navigate("/login")}>SIGN OUT</ListItem>
        </MenuContainer>
      </SideNav>
    </Container>
  );
};

export default Navbar;
