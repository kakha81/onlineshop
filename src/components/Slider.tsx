import styled from "styled-components";
import KeyboardArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardArrowLeftOutlined";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import { useState } from "react";
import { sliderItems } from "../data";

enum SlideIndex {
  FIRST = 0,
  SECOND = 1,
  THIRD = 2,
}

interface ArrowProps {
  direction: "left" | "right";
}
interface sliderProps {
  slideIndex: SlideIndex;
}
interface SlideProps {
  bg: string;
}

const Container = styled.div`
  /* display: none; */
  width: 100%;
  height: 50vh;
  display: flex;
  position: relative;
  overflow: hidden;
`;

const Arrow = styled.div<ArrowProps>`
  width: 3em;
  height: 3em;
  color: teal;
  background-color: transparent;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "0.5em"};
  right: ${(props) => props.direction === "right" && "0.5em"};
  margin: auto;
  cursor: pointer;
  opacity: 1;
  z-index: 2;
  transition: 0.3s all ease-in-out;
  &:hover {
    transform: scale(2);
  }
`;

const Wrapper = styled.div<sliderProps>`
  height: 6em;
  height: 100vh;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div<SlideProps>`
  width: 100%;
  height: 5vh;
  display: flex;
  flex-direction: column;
  background-color: #${(props) => props.bg};
`;

const ImgContainer = styled.div`
  flex: 1;
  height: 50%;
`;

const Image = styled.img`
  height: 50vh;
`;

const InfoContainer = styled.div`
  flex: 1;
  height: 50%;
  margin-left: 3em;
`;

const Title = styled.h1`
  font-size: 1.5em;
  color: teal;
`;

const Button = styled.button`
  padding: 0.5em;
  font-size: 1em;
  color: teal;
  background-color: white;
  border: 0.1em solid teal;
  cursor: pointer;
  border-radius: 2em;
  transition: 0.1s all ease-in;
  &:hover {
    color: white;
    background-color: teal;
  }
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState<SlideIndex>(SlideIndex.FIRST);

  const handleClick = (direction: "left" | "right") => {
    if (direction === "left") {
      setSlideIndex((prev) =>
        prev === SlideIndex.FIRST ? SlideIndex.THIRD : prev - 1
      );
    } else {
      setSlideIndex((prev) =>
        prev === SlideIndex.THIRD ? SlideIndex.FIRST : prev + 1
      );
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <KeyboardArrowLeftOutlinedIcon />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide key={item.id} bg={item.bg}>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Button>SHOW NOW</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <KeyboardArrowRightOutlinedIcon />
      </Arrow>
    </Container>
  );
};

export default Slider;
