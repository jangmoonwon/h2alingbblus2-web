import React from "react";
import { Container, Wrapper } from "./styles";

function MainPage() {
  return (
    <Container>
      <Wrapper>Main Pages_1</Wrapper>
      <Wrapper style={{backgroundColor: 'red'}}>Main Pages_2</Wrapper>
      <Wrapper style={{backgroundColor: 'blue'}}>Main Pages_3</Wrapper>
    </Container>
  );
}

export default MainPage;
