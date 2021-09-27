import React, { useRef } from "react";
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
  const buttonRef = useRef<any>();
  const scrollToButtom = () => {
    buttonRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const button2Ref = useRef<any>();
  const scrollToButtom2 = () => {
    button2Ref.current.scrollIntoView({ behavior: "smooth" });
  };

  const button3Ref = useRef<any>();
  const scrollToTop = () => {
    button3Ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Container >
      <Wrapper ref={button3Ref}>
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
      <Wrapper ref={buttonRef}>
        <h2>간단한 예배 소개 글</h2>
        <ScrollBtn onClick={scrollToButtom2}>밑으로 가기</ScrollBtn>
      </Wrapper>
      <Wrapper style={{ backgroundColor: "pink" }} ref={button2Ref}>
        <h2>pages 3</h2>
        <ScrollBtn onClick={scrollToTop}>맨 위로</ScrollBtn>
      </Wrapper>
    </Container>
  );
}

export default AboutPage;