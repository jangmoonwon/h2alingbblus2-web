import React, { useRef } from "react";
import SecondPage from "./SecondPage";
import ThirdPage from "./ThirdPage";
import { Container, Wrapper, Text, DownArrow, ScrollBtn } from "./styles";

function MainPage() {
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
        <Text title="sub">강화중앙교회 청년부 웹사이트</Text>
        <Text title="main">힐링플러스 미니스트리</Text>

        <DownArrow
          src="/images/png/downArrow.png"
          alt="downArrow"
          onClick={SecondPageRef}
          active
        />
      </Wrapper>
      <Wrapper ref={BottomToSecondRef}>
        <SecondPage />
        <DownArrow
          src="/images/png/GreenDownArrow.png"
          alt="downArrow"
          onClick={ThirdPageRef}
          active
        />
      </Wrapper>
      <Wrapper ref={BottomToThirdRef}>
        <ThirdPage />
        <ScrollBtn onClick={scrollToTop}>맨 위로 가기</ScrollBtn>
      </Wrapper>
    </Container>
  );
}

export default MainPage;
