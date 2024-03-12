import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const coverImg = require("../Images/cover.jpg");

const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  width: 100%;
`;

const Wrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  padding: 1.2em;
  margin-right: 1.2em;
  background-color: transparent;
`;

const Title = styled.h1`
  font-size: 1.5em;
  font-weight: 900;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  font-size: 1em;
  font-weight: 700;
  margin: 0.5em 0em;
  padding: 0.8em;
`;

const Button = styled.button`
  width: 40%;
  font-size: 1em;
  font-weight: 900;
  border: none;
  padding: 1em 1.2em;
  border-radius: 2em;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 1em;
`;

const DirectLink = styled.a`
  margin: 0.5em 0em;
  font-size: 1em;
  font-weight: 600;
  text-decoration: underline;
  opacity: 0.7;
  cursor: pointer;
  transition: 0.3s all ease-in-out;
  &:hover {
    opacity: 1;
  }
`;

const LogIn = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Image src={coverImg} />
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Button onClick={() => navigate("/")}>LOGIN</Button>
          <DirectLink>DO NOT YOU REMEMBER THE PASSWORD?</DirectLink>
          <DirectLink onClick={() => navigate("/register")}>
            CREATE A NEW ACCOUNT
          </DirectLink>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default LogIn;
