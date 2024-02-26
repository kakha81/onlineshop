import styled from "styled-components";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import PhoneIcon from "@mui/icons-material/Phone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

const bankOfGeorgia: string = require("../Images/bank/bankOfGeorgia.jpg");
const libertyBank: string = require("../Images/bank/libertyBank.png");
const tbcBank: string = require("../Images/bank/tbcBank.jpeg");

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1em;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 1.5em;
`;

const Logo = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Desc = styled.p`
  margin: 1.5em 0em;
`;

const SocialContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SocialIcon = styled.div`
  width: 3em;
  height: 3em;
  border-radius: 50%;
  color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 5%;
  cursor: pointer;
`;

const Center = styled.div`
  display: none;
  flex: 1;
  padding: 1.5em;
`;

const Title = styled.h2`
  margin-bottom: 1em;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 0.5em;
`;

const Right = styled.div`
  flex: 1;
  background-color: lightgray;
  padding: 1.2em;
`;

const ContactItem = styled.div`
  margin-bottom: 1.2em;
  display: flex;
  align-items: center;
`;
const BankImg = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
`;

const PaymentImg = styled.img`
  max-width: 5em;
  margin-right: 1em;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>ONLINE SHOP</Logo>
        <Desc>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat sit
          dolores eveniet sapiente. Libero reiciendis itaque harum, facere
          repellendus possimus temporibus similique ipsum voluptatibus!
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <FacebookIcon style={{ width: "2em", height: "2em" }} />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <InstagramIcon style={{ width: "2em", height: "2em" }} />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <TwitterIcon style={{ width: "2em", height: "2em" }} />
          </SocialIcon>
          <SocialIcon color="E60023">
            <PinterestIcon style={{ width: "2em", height: "2em" }} />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <FmdGoodIcon style={{ marginRight: "5%" }} />
          21 district, Rustavi, 3700
        </ContactItem>
        <ContactItem>
          <PhoneIcon style={{ marginRight: "5%" }} />
          (+995) 599614190
        </ContactItem>
        <ContactItem>
          <MailOutlineIcon style={{ marginRight: "5%" }} />
          kakha81@gmail.com
        </ContactItem>
        <BankImg>
          <PaymentImg src={bankOfGeorgia} />
          <PaymentImg src={libertyBank} />
          <PaymentImg src={tbcBank} />
        </BankImg>
      </Right>
    </Container>
  );
};

export default Footer;
