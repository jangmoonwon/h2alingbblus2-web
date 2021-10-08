import React, { useRef } from "react";
import { Container, PhotoBox, Text, Wrapper, ScrollBtn, Img, AlbumCard } from "./styles";



function PhotoPage() {
  const buttonRef = useRef<any>();
  const scrollToBottom = () => {
    buttonRef.current.scrollIntoView({behavior: 'smooth'});
  };
  return (
    <Container>
      <Wrapper style={{ backgroundColor: "#8f948f", opacity: 1 }}>
        <PhotoBox active />
        <Text name="desc1">우리 청년부의</Text>
        <Text name="desc2">사진첩</Text>
        <ScrollBtn onClick={scrollToBottom}>밑으로 가기</ScrollBtn>
      </Wrapper>
      <Wrapper ref={buttonRef}
        style={{
          flexDirection: "row",
          gap: "70px",
          
        }}>
        <AlbumCard style={{backgroundColor: "#949c81"}} />
        <AlbumCard style={{backgroundColor: "#f5cf63"}} />
        <AlbumCard style={{backgroundColor: "#d3c0d1"}} />
        <Img isLeft={true} src="/images/spotlight.png" alt="img" />
        <Img isLeft={false} src="/images/spotlight.png" alt="img" />
      </Wrapper>
    </Container>
  );
}

export default PhotoPage;
