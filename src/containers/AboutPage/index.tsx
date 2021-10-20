import React, { useRef } from "react";
import SlidePage from "./Profile";
import {
  Container,
  Wrapper,
  VerticalText,
  PurpleBox,
  PinkBox,
  YellowBox,
  HorizontalText,
  BgBox,
  ScrollBtn,
  DownArrow,
} from "./styles";

function AboutPage() {
  const TopRef = useRef<any>();
  const scrollToTop = () => {
    TopRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const BottomToSecondRef = useRef<any>();
  const SecondPageRef = () => {
    BottomToSecondRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const BottomToThirdRef = useRef<any>();
  const ThirdPageRef = () => {
    BottomToThirdRef.current.scrollIntoView({ behavior: "smooth" });
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
        <BgBox />
        <DownArrow
          src="/images/GreenDownArrow.png"
          alt="GreenDownArrow"
          onClick={SecondPageRef}
          active
        />
      </Wrapper>
      <Wrapper ref={BottomToSecondRef}>
        <h2>간단한 예배 소개 글</h2>
        <DownArrow
          src="/images/GreenDownArrow.png"
          alt="GreenDownArrow"
          onClick={ThirdPageRef}
          active
        />
      </Wrapper>
      <Wrapper style={{ backgroundColor: "#d9d9d9" }} ref={BottomToThirdRef}>
        <SlidePage />
        <ScrollBtn onClick={scrollToTop}>맨 위로 가기</ScrollBtn>
      </Wrapper>
    </Container>
  );
}

export default AboutPage;
