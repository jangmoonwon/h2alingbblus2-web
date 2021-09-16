import React from "react";
import SecondPage from "./SecondPage";
import ThirdPage from "./ThirdPage";
import { Container, Wrapper, Text } from "./styles";

function MainPage() {
  return (
    <Container>
      <Wrapper>
        <Text title="sub">강화중앙교회 청년부 웹사이트</Text>
        <Text title="main">힐링플러스 미니스트리</Text>
      </Wrapper>
      <Wrapper>
        <SecondPage />
      </Wrapper>
      <Wrapper>
        <ThirdPage />
      </Wrapper>
    </Container>
  );
}

export default MainPage;
