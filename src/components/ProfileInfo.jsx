import styled from "styled-components";
import { cities } from "../data";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

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
  border-radius: 2em;
  font-size: 1em;
  font-weight: 700;
  color: white;
  background-color: teal;
  cursor: pointer;
  transition: 0.3s all ease;
  &:active {
    transform: scale(1.05);
  }
`;

const ProfileInfo = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <TextContainer>
        <ProfileName>First name</ProfileName>
        <InputContainer>
          <Input placeholder="First name" />
        </InputContainer>
      </TextContainer>

      <TextContainer>
        <ProfileName>Last name</ProfileName>
        <InputContainer>
          <Input placeholder="Last name" />
        </InputContainer>
      </TextContainer>

      <TextContainer>
        <ProfileName>Email</ProfileName>
        <InputContainer>
          <Input placeholder="Email" type="email" />
        </InputContainer>
      </TextContainer>
      <TextContainer>
        <ProfileName>Password</ProfileName>
        <InputContainer>
          <Input placeholder="Password" type="password" />
        </InputContainer>
      </TextContainer>

      <TextContainer>
        <ProfileName>Phone</ProfileName>
        <InputContainer>
          <Input placeholder="+995 XXX XXX XXX" type="number" />
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
          <Input
            placeholder="Month/Day/Year"
            type="date"
            style={{ paddingLeft: "0.5em", paddingRight: "3.5em" }}
          />
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
          <Input placeholder="Identification number" type="number" />
        </InputContainer>
      </TextContainer>

      <TextContainer>
        <ProfileName>Legal address</ProfileName>
        <InputContainer>
          <Input placeholder="Legal address" />
        </InputContainer>
      </TextContainer>

      <TextContainer>
        <ProfileName>Pysical address</ProfileName>
        <InputContainer>
          <Input placeholder="Pysical address" />
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
          {cities.map((item) => (
            <Option key={uuidv4()} value={item.city}>
              {item.city}
            </Option>
          ))}
        </Select>
      </TextContainer>
      <Button onClick={() => navigate("/")}>Save</Button>
    </Container>
  );
};

export default ProfileInfo;
