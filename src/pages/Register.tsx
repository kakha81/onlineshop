import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.05),
      rgba(255, 255, 255, 0.4)
    ),
    url("https://www.pixelstalk.net/wp-content/uploads/images6/Cool-Shoe-Backgrounds-Free-Download.jpg");
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 75%;
  padding: 1.2em;
  margin-right: 1.2em;
  background-color: white;
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

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  font-size: 1em;
  font-weight: 900;
  border: none;
  padding: 1em 1.2em;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 1em;
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="name" />
          <Input placeholder="last name" />
          <Input placeholder="username" />
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Input placeholder="confirm password" />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
