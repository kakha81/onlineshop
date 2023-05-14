import styled from 'styled-components';

const Container = styled.div`
  margin: 1em;
  background-color: white;
`;

const Image = styled.img`
  width: 12em;
  height: 12em;
`;

const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ItemName = styled.div`
  margin-bottom: 0.5em;
`;

const ItemPrice = styled.div`
  margin: 0.5em;
`;

const Button = styled.button`
  padding: 3%;
  margin-bottom: 1em;
  border-radius: 2em;
  font-size: 1em;
  font-weight: 700;
  color: white;
  background-color: teal;
  cursor: pointer;
  transition: 0.3s all ease;
  &:active {
    transform: scale(1.05);
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
      <Image src={item.img} />
      <ItemInfo>
        <ItemName>NIKE</ItemName>
        <ItemPrice>30$</ItemPrice>
        <Button>Add To Cart</Button>
      </ItemInfo>
    </Container>
  );
};

export default Product;
