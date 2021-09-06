import React from "react";
import styled from "styled-components";
import ReactPlayer from "react-player/youtube";

function ThirdPage() {
  return (
    <Container>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=cjj40kSS9c4"
        width="70%"
        height="70%"
        controls={true} /* 재생&멈춤, 음소거, 설정, 전체화면의 하단 나옴 */
      />
    </Container>
  );
}

export default ThirdPage;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #f5ebe9;
`;
