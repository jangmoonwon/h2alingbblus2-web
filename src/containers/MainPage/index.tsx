import React from "react";
import { Container, Wrapper } from "./styles";

function MainPage() {
  return (
    <Container>
      <Wrapper style={{color: "#fff", fontSize: 100 ,fontWeight: 600}}>Main Pages_1</Wrapper>
      <Wrapper style={{backgroundColor: 'ivory'}}>Main Pages_2</Wrapper>
      <Wrapper style={{backgroundColor: 'white'}}>Main Pages_3</Wrapper>
    </Container>
  );
}

export default MainPage;
