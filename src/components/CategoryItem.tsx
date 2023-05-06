import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
  margin: 1em;
  position: relative;
`;
const Image = styled.img`
  width: 80%;
  height: 80%;
  object-fit: cover;
  margin: 0.5em auto;
`;
const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 0.1em solid teal;
  border-radius: 1em;
`;

const Title = styled.h1`
  color: teal;
  margin-bottom: 7em;
`;
const Button = styled.button`
  border: none;
  padding: 0.7em;
  background-color: teal;
  color: white;
  cursor: pointer;
  font-weight: 600;
  border-radius: 1em;
  transition: 0.2s all ease-in;
  &:hover {
    transform: scale(1.05);
  }
`;

type CategoryItemProps = {
  item: {
    img: string;
    title: string;
  };
};

const CategoryItem: React.FC<CategoryItemProps> = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
    </Container>
  );
};

export default CategoryItem;
