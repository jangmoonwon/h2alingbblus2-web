import React from "react";
import Carousel from "../../components/Carousel";
import { Container, Wrapper } from "./styles";
import ReactPlayer from "react-player/youtube";

function MainPage() {
  return (
    <Container>
      <Wrapper style={{ color: "#fff", fontSize: 100, fontWeight: 500 }}>
        <Carousel />
      </Wrapper>
      <Wrapper style={{ backgroundColor: "ivory" }}>MainPage_2</Wrapper>
      <Wrapper style={{ backgroundColor: "#D4A5A5" }}>
        <ReactPlayer
          url="https://www.youtube.com/watch?v=cjj40kSS9c4"
          width="70%"
          height="70%"
          controls={true} /* 재생&멈춤, 음소거, 설정, 전체화면의 하단 나옴 */
        />
      </Wrapper>
    </Container>
  );
}

export default MainPage;
