import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";

type ArrowProps = {
  isLeft: boolean;
};

const TOTAL_SLIDES = 3;

function SlidePage() {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const slideRef = useRef<any>(null);

  const nextSlide = () => {
    if (currentSlide >= TOTAL_SLIDES) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };
  const prevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(TOTAL_SLIDES);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  useEffect(() => {
    slideRef.current.style.transition = "all 0.75s ease-in-out";
    slideRef.current.style.transform = `translateX(-${currentSlide}00vw)`; // 백틱을 사용하여 슬라이드로 이동하는 애니메이션을 만듭니다.
  }, [currentSlide]);

  return (
    <Container>
      <SlideContainer ref={slideRef}>
        <Content style={{ backgroundColor: "ivory" }} >1</Content>
        <Content style={{ backgroundColor: "pink" }} >2</Content>
        <Content style={{ backgroundColor: "green" }} >3</Content>
        <Content style={{ backgroundColor: "blue" }} >4</Content>
      </SlideContainer>
      <Arrow isLeft={true} onClick={prevSlide}>◀︎</Arrow>
      <Arrow isLeft={false} onClick={nextSlide}>▶︎</Arrow>
    </Container>
  );
}

export default SlidePage;

const Container = styled.div`
  width: 100vw;
  height: 70vh;
  background-color: #ffffff;
  overflow: hidden;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
`;

const SlideContainer = styled.div`
  width: 100vw;
  height: 70vh;
  display: flex;
  background-color: gray;
`;

const Arrow = styled.div<ArrowProps>`
  width: 60px;
  height: 60px;
  background-color: transparent;
  border-radius: 20%;
  position: absolute;
  z-index: 99;
  top: 45%;
  ${(props) => (props.isLeft ? "left: 3%" : "right: 3%")};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 45px;
  color: #131313;
  cursor: pointer;
`;

const Content = styled.div`
  width: 100vw;
  height: 70vh;
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
`;
