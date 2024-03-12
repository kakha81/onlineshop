import Navbar from "../components/Navbar";
import MenuContent from "../components/MenuContent";
import ProfileInfo from "../components/ProfileInfo";
import Footer from "../components/Footer";
import styled from "styled-components";

const Header = styled.div`
  position: sticky;
  top: 0;
  z-index: 1;
`;

const Profile = () => {
  return (
    <>
      <Header>
        <Navbar />
        <MenuContent />
      </Header>
      <ProfileInfo />
      <Footer />
    </>
  );
};

export default Profile;
