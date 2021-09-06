import React from "react";
import Carousel from "../../components/Carousel";
import SecondPage from "./SecondPage";
import ThirdPage from "./ThirdPage";
import { Container, Wrapper } from "./styles";

function MainPage() {

  return (
    <Container>
      <Wrapper style={{ color: "#fff", fontSize: 100, fontWeight: 500 }} >
        <Carousel />
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
