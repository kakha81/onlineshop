import { useContext } from "react";
import styled from "styled-components";
import WishlistItems from "./WishlistItems";
import WishlistEmpty from "./WishlistEmpty";
import { DataContext } from "../../App";

const ClearButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 2em auto;
`;

const ClearButton = styled.button`
  width: 15em;
  color: white;
  padding-top: 0.4em;
  padding-bottom: 0.4em;
  background-color: red;
  border: 0.25em solid red;
  border-radius: 0.3em;
  cursor: pointer;
  &:active {
    box-shadow: 5px 5px 5px gray;
  }
`;

const WishlistItemsContainer = () => {
  const { wishlist, setWishlist } = useContext(DataContext);

  const ClearWishlist = () => {
    setWishlist([]);
  };

  return (
    <>
      {wishlist.length === 0 ? <WishlistEmpty /> : <WishlistItems />}
      <ClearButtonContainer>
        <ClearButton onClick={ClearWishlist}>CLEAR WISHLIST</ClearButton>
      </ClearButtonContainer>
    </>
  );
};

export default WishlistItemsContainer;
