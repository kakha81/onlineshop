import styled from "styled-components";
import WishlistItem from "./WishlistItem";
import { useContext } from "react";
import { DataContext } from "../../App";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const WishlistItems = () => {
  const { wishlist } = useContext(DataContext);
  return (
    <Container>
      {wishlist.map((item) => (
        <WishlistItem item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default WishlistItems;
