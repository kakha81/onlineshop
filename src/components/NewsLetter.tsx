import SendIcon from '@mui/icons-material/Send';
import styled from 'styled-components';

const Container = styled.div`
  height: 60vh;
  margin: 1em;
  background-color: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 3em;
  margin-bottom: 1.2em;
`;

const Desc = styled.div`
  text-align: center;
  font-size: 1.5em;
  font-weight: 300;
  margin-bottom: 1.2em;
`;

const InputContainer = styled.div`
  width: 20em;
  height: 2.5em;
  background-color: white;
  display: flex;
  justify-content: center;
  border: 1px solid lightgray;
`;

const Input = styled.input`
  border: none;
  width: 100%;
  flex: 8;
  font-size: 1em;
  font-weight: 700;
  padding-left: 0.5em;
  color: teal;
`;

const Button = styled.button`
  flex: 1;
  border: none;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const NewsLetter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Get timely updates from your favorite products.</Desc>
      <InputContainer>
        <Input placeholder='Your email' />
        <Button>
          <SendIcon />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default NewsLetter;
