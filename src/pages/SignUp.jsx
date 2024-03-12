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
  width: 50%;
  display: flex;
  flex-direction: column;
  background-color: transparent;
`;

const Title = styled.h1`
  align-self: center;
  font-size: 1.5em;
  font-weight: 900;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  flex: 1;
  width: 15em;
  font-size: 1em;
  font-weight: 700;
  margin: 0.5em 0em;
  padding: 0.8em;
  border-radius: 0.5em;
  &:hover {
    box-shadow: 3px 3px 5px black;
  }
`;

const Agreement = styled.span`
  font-size: 1em;
  font-weight: 500;
  margin: 1.2em 0em;
`;

const Button = styled.button`
  font-size: 1em;
  font-weight: 900;
  border: none;
  padding: 1em 1.2em;
  border-radius: 2em;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const SignUp = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Image src={coverImg} />
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="name" />
          <Input placeholder="last name" />
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Input placeholder="confirm password" />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button onClick={() => navigate("/login")}>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default SignUp;
