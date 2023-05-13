import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1em 1em;
  background-color: white;
`;

const TextContainer = styled.div`
  width: auto;
`;

const ProfileName = styled.div`
  color: gray;
  font-size: 1em;
  padding-bottom: 0.2em;
`;

const InputContainer = styled.div`
  margin-bottom: 0.7em;
`;

const Input = styled.input`
  padding: 0.5em 0.8em;
  font-size: 1em;
  font-weight: 600;
  border: 0.5px solid gray;
  border-radius: 0.3em;
  background-color: #eee;
`;

const Select = styled.select`
  width: 14em;
  margin-bottom: 0.7em;
  padding: 0.5em;
  font-size: 1em;
  font-weight: 600;
  border: 0.5px solid gray;
  border-radius: 0.3em;
  font-weight: 600;
  background-color: #eee;
`;

const Option = styled.option`
  padding: 0.5em;
  font-size: 1em;
  font-weight: 600;
  background-color: #eee;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25%;
  padding: 0.5em;
  font-size: 1em;
  font-weight: 700;
  color: white;
  background-color: teal;
`;

const ProfileInfo = () => {
  return (
    <Container>
      <TextContainer>
        <ProfileName>First name</ProfileName>
        <InputContainer>
          <Input placeholder='First name' />
        </InputContainer>
      </TextContainer>

      <TextContainer>
        <ProfileName>Last name</ProfileName>
        <InputContainer>
          <Input placeholder='Last name' />
        </InputContainer>
      </TextContainer>

      <TextContainer>
        <ProfileName>Email</ProfileName>
        <InputContainer>
          <Input placeholder='Email' />
        </InputContainer>
      </TextContainer>

      <TextContainer>
        <ProfileName>Phone</ProfileName>
        <InputContainer>
          <Input placeholder='+995 XXX XXX XXX' />
        </InputContainer>
      </TextContainer>

      <TextContainer>
        <ProfileName>Gender</ProfileName>
        <Select>
          <Option>Male</Option>
          <Option>Female</Option>
        </Select>
      </TextContainer>

      <TextContainer>
        <ProfileName>Date of Birth</ProfileName>
        <InputContainer>
          <Input placeholder='Day/Month/Year' />
        </InputContainer>
      </TextContainer>

      <TextContainer>
        <ProfileName>Citizen</ProfileName>
        <Select>
          <Option>Georgian Citizen</Option>
          <Option>Not Citizen</Option>
        </Select>
      </TextContainer>

      <TextContainer>
        <ProfileName>Identification number</ProfileName>
        <InputContainer>
          <Input placeholder='Identification number' />
        </InputContainer>
      </TextContainer>

      <TextContainer>
        <ProfileName>Legal address</ProfileName>
        <InputContainer>
          <Input />
        </InputContainer>
      </TextContainer>

      <TextContainer>
        <ProfileName>Pysical address</ProfileName>
        <InputContainer>
          <Input />
        </InputContainer>
      </TextContainer>

      <TextContainer>
        <ProfileName>Country</ProfileName>
        <Select>
          <Option>Georgia</Option>
        </Select>
      </TextContainer>

      <TextContainer>
        <ProfileName>City</ProfileName>
        <Select>
          <Option>Tbilisi</Option>
          <Option>Kutaisi</Option>
          <Option>Rustavi</Option>
          <Option>Batumi</Option>
          <Option>Zugdidi</Option>
          <Option>Telavi</Option>
          <Option>Akhaltsikhe</Option>
          <Option>Gori</Option>
          <Option>Abasha</Option>
          <Option>Akhalkalaki</Option>
          <Option>Bagdati</Option>
          <Option>Bolnisi</Option>
          <Option>Borjomi</Option>
          <Option>Dedoplistskaro</Option>
          <Option>Dmanisi</Option>
          <Option>Dusheti</Option>
          <Option>Gardabani</Option>
          <Option>Gurjaani</Option>
          <Option>Adigeni</Option>
          <Option>Vale</Option>
          <Option>Vani</Option>
          <Option>Zestaponi</Option>
          <Option>Tetritskaro</Option>
          <Option>Terjola</Option>
          <Option>Tianeti</Option>
          <Option>Kaspi</Option>
          <Option>Lagodekhi</Option>
          <Option>Lanchkhuti</Option>
          <Option>Marneuli</Option>
          <Option>Martvili</Option>
          <Option>Mestia</Option>
          <Option>Mtskheta</Option>
          <Option>Ninotsminda</Option>
          <Option>Ozurgeti</Option>
          <Option>Oni</Option>
          <Option>Sagarejo</Option>
          <Option>Samtredia</Option>
          <Option>Sachkhere</Option>
          <Option>Senaki</Option>
          <Option>Sighnaghi</Option>
          <Option>Stepantsminda</Option>
          <Option>Surami</Option>
          <Option>Tkibuli</Option>
          <Option>Poti</Option>
          <Option>Qareli</Option>
          <Option>Qobuleti</Option>
          <Option>Kvareli</Option>
          <Option>Chokhatauri</Option>
          <Option>Chkhorotsku</Option>
          <Option>Tsageri</Option>
          <Option>Tsalenjikha</Option>
          <Option>Tsalka</Option>
          <Option>Tsnori</Option>
          <Option>Tskaltubo</Option>
          <Option>Chiatura</Option>
          <Option>Kharagauli</Option>
          <Option>Khashuri</Option>
          <Option>Khobi</Option>
          <Option>Khoni</Option>
          <Option>Jvari</Option>
        </Select>
      </TextContainer>

      <Button>Save</Button>
    </Container>
  );
};

export default ProfileInfo;
