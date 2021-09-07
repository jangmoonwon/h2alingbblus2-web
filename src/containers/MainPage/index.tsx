import React from "react";
import SecondPage from "./SecondPage";
import ThirdPage from "./ThirdPage";
import { Container, Wrapper } from "./styles";

function MainPage() {

  return (
    <Container>
      <Wrapper >
        
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
