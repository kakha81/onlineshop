import { useState } from "react";
import styled from "styled-components";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'
import { ProductsArray } from "../data";

const SliderContainer = styled.section`
  position: relative;
  
`;

const LeftArrow = styled(FaArrowAltCircleLeft)`
  position: absolute;
  top: 50%;
  left: 20px;
  font-size: 2em;
  color: teal;
  opacity: 0.8;
  transform: translateY(-50%);
  cursor: pointer;
`;

const RightArrow = styled(FaArrowAltCircleRight)`
  position: absolute;
  top: 50%;
  right: 20px;
  font-size: 2em;
  color: teal;
  opacity: 0.8;
  transform: translateY(-50%);
  cursor: pointer;
`;

const ImageContainer = styled.div`
display: flex;
justify-content: center;
`;

const Image = styled.img`
  width: 50%;
  height: 300px;
  object-fit: contain;
  
`;

const Slider = () => {
  const [current, setCurrent] = useState(0);
  const length = ProductsArray.length;

  const prevSlide = () => {
    setCurrent(current => (current === 0 ? length - 1 : current - 1));
  };

  const nextSlide = () => {
    setCurrent(current => (current === length - 1 ? 0 : current + 1));
  };

  if (!Array.isArray(ProductsArray) || ProductsArray.length === 0) {
    return null;
  }

  return (
    <SliderContainer>
      <LeftArrow onClick={prevSlide} />
      <RightArrow onClick={nextSlide} />
      {ProductsArray.map((slide, index) => (
        <ImageContainer key={index}>
          {index === current && (
            <Image src={slide.img} alt="" />
          )}
        </ImageContainer>
      ))}
    </SliderContainer>
  );
};

export default Slider;
