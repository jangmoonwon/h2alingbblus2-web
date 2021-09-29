import React, { useRef } from "react";
import SlidePage from "./SlidePage";
import {
  Container,
  Wrapper,
  VerticalText,
  PurpleBox,
  PinkBox,
  YellowBox,
  HorizontalText,
  TestBox,
  ScrollBtn,
} from "./styles";

function AboutPage() {
  const SecondPageRef = useRef<any>();
  const scrollToButtom = () => {
    SecondPageRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const ThirdPageRef = useRef<any>();
  const scrollToButtom2 = () => {
    ThirdPageRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const TopRef = useRef<any>();
  const scrollToTop = () => {
    TopRef.current.scrollIntoView({ behavior: "smooth" });
  };


  return (
    <Container>
      <Wrapper ref={TopRef}>
        <VerticalText>사과유자청</VerticalText>
        <HorizontalText>
          랑스럽고, <br />
          즙미넘치는 <br />
          쾌하고,
          <br />
          유로운
          <br />
          년부
        </HorizontalText>
        <PurpleBox />
        <PinkBox />
        <YellowBox />
        <TestBox />
        <ScrollBtn onClick={scrollToButtom}>밑으로 가기</ScrollBtn>
      </Wrapper>
      <Wrapper ref={SecondPageRef}>
        <h2>간단한 예배 소개 글</h2>
        <ScrollBtn onClick={scrollToButtom2}>밑으로 가기</ScrollBtn>
      </Wrapper>
      <Wrapper ref={ThirdPageRef}>
        <SlidePage />
        <ScrollBtn onClick={scrollToTop}>맨 위로 가기</ScrollBtn>
      </Wrapper>
    </Container>
  );
}

export default AboutPage;
