import { useState, useEffect } from "react";
import styled from "styled-components";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import { ProductsArray } from "../data";
const SliderContainer = styled.section`
  position: relative;
`;

const LeftArrow = styled(FaArrowAltCircleLeft)`
  position: absolute;
  top: 50%;
  left: 20px;
  font-size: 3em;
  color: teal;
  transform: translateY(-50%);
  cursor: pointer;
  transition: 0.1s all ease-in;
  &:active {
    color: red;
  }
`;

const RightArrow = styled(FaArrowAltCircleRight)`
  position: absolute;
  top: 50%;
  right: 20px;
  font-size: 3em;
  color: teal;
  transform: translateY(-50%);
  cursor: pointer;
  transition: 0.1s all ease-in;
  &:active {
    color: red;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Image = styled.img`
  height: 300px;
  object-fit: contain;
`;

const Slider = () => {
  const [current, setCurrent] = useState(0);
  const slideCount = ProductsArray.length;

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrent(current => (current === slideCount - 1 ? 0 : current + 1));
    }, 2000);
    return () => clearTimeout(timer);
  }, [current]);

  const prevSlide = () => {
    setCurrent(current => (current === 0 ? slideCount - 1 : current - 1));
  };

  const nextSlide = () => {
    setCurrent(current => (current === slideCount - 1 ? 0 : current + 1));
  };

  return (
    <SliderContainer>
      <LeftArrow onClick={prevSlide} />
      <RightArrow onClick={nextSlide} />
      {ProductsArray.map((slide, index) => (
        <ImageContainer key={index}>
          {index === current && <Image src={slide.img} alt="" />}
        </ImageContainer>
      ))}
    </SliderContainer>
  );
};

export default Slider;
