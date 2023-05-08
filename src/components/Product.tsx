import styled from "styled-components";
import ShoppingCartOutlined from "@mui/icons-material/ShoppingCartOutlined";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

const Info = styled.div`
  position: absolute;
  opacity: 0;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: transparent;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  cursor: pointer;
`;

const Container = styled.div`
  position: relative;
  flex: 1;
  min-width: 17em;
  height: 22em;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfb;
  &:hover ${Info} {
    opacity: 1;
  }
`;
const Circle = styled.div`
  width: 12.5em;
  height: 12.5em;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;
const Image = styled.img`
  height: 75%;
  z-index: 2;
`;

const Icon = styled.div`
  width: 3em;
  height: 3em;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0.5em;
  transition: 0.5s all ease;
  &:hover {
    color: white;
    background-color: black;
    transform: scale(1.1);
  }
`;

type ProductProps = {
  item: {
    id: number;
    img: string;
  };
};

const Product: React.FC<ProductProps> = ({ item }) => {
  return (
    <Container>
      <Circle />
      <Image src={item.img} />
      <Info>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <SearchIcon />
        </Icon>
        <Icon>
          <FavoriteBorderOutlinedIcon />
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;
