import React from "react";
import Carousel from "../../components/Carousel";
import { Container, Wrapper } from "./styles";

function MainPage() {
  return (
    <Container>
      <Wrapper style={{ color: "#fff", fontSize: 100, fontWeight: 500 }}>
        <Carousel />
      </Wrapper>
      <Wrapper style={{ backgroundColor: "ivory" }}>Main Pages_2</Wrapper>
      <Wrapper style={{ backgroundColor: "#D4A5A5" }}>Main Pages_3</Wrapper>
    </Container>
  );
}

export default MainPage;
