import React, { useRef } from "react";
import AlbumLayout from "./AlbumList";
import {
  Container,
  PhotoBox,
  Text,
  Wrapper,
  ScrollBtn,
} from "./styles";


function PhotoPage() {
  

  const buttonRef = useRef<any>();
  const scrollToBottom = () => {
    buttonRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <Container>
      <Wrapper name="mainPage">
        <PhotoBox />
        <Text name="desc1">우리 청년부의</Text>
        <Text name="desc2">사진첩</Text>
        <ScrollBtn onClick={scrollToBottom}>밑으로 가기</ScrollBtn>
      </Wrapper>
      
      <Wrapper name="subPage" ref={buttonRef}>
        <AlbumLayout />
      </Wrapper>
    </Container>
  );
}

export default PhotoPage;