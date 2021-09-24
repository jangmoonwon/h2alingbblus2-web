import React, { useRef } from "react";
import { Container, PhotoBox, Text, Wrapper, ScrollBtn } from "./styles";

function PhotoPage() {
  const buttonRef = useRef<any>();
  const scrollToBottom = () => {
    buttonRef.current.scrollIntoView({behavior: 'smooth'});
  };
  return (
    <Container>
      <Wrapper style={{ backgroundColor: "#d9cfc1", opacity: 1 }}>
        <PhotoBox active />
        <Text name="desc1">우리 청년부의</Text>
        <Text name="desc2">사진첩</Text>
        <ScrollBtn onClick={scrollToBottom}>밑으로 가기</ScrollBtn>
      </Wrapper>
      <Wrapper ref={buttonRef}>
        <h1>Photo Pages.</h1>
      </Wrapper>
    </Container>
  );
}

export default PhotoPage;
