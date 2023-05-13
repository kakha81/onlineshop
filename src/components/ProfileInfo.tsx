import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 1em auto;
  height: 100vh;
  width: 430px;
  background-color: grey;
`;

const TextContainer = styled.div``;

const ProfileName = styled.div``;

const Input = styled.input`
  margin-top: 1em;
  padding: 0.5em;
  font-size: 1em;
  font-weight: 700;
  border: 1px solid teal;
  color: teal;
`;

const ProfileInfo = () => {
  return (
    <Container>
      <TextContainer>
        <ProfileName>
          <Input placeholder='FIRST NAME' />
        </ProfileName>
        <ProfileName>
          <Input placeholder='LAST NAME' />
        </ProfileName>
        <ProfileName>
          <Input placeholder='ID NUMBER' />
        </ProfileName>
        <ProfileName>
          <Input placeholder='E-MAIL' />
        </ProfileName>
        <ProfileName>
          <Input placeholder='PASSWORD' />
        </ProfileName>
        <ProfileName>
          <Input placeholder='COUNTRY' />
        </ProfileName>
        <ProfileName>
          <Input placeholder='DELIVERY ADDRESS' />
        </ProfileName>
        <ProfileName>
          <Input placeholder='MOBILE NUMBER' />
        </ProfileName>
      </TextContainer>
    </Container>
  );
};

export default ProfileInfo;
