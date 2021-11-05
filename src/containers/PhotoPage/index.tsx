import React, { useRef } from "react";
import paths from "../../routes/paths.json";
import AlbumLayout from "./AlbumList";
import {
  Container,
  PhotoBox,
  Text,
  Wrapper,
  ScrollBtn,
  RightStyledBook,
  LeftStyledBook,
  AlbumText,
  AlbumPhoto,
  AlbumLink,
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
      <Wrapper
        name="subPage"
        ref={buttonRef}
        style={{
          flexDirection: "row",
        }}
      >
        <LeftStyledBook>
          <AlbumText name="title">청년부 수련회</AlbumText>
          <AlbumText name="date">8월 7일</AlbumText>
        </LeftStyledBook>
        <RightStyledBook>
          <AlbumLink to={paths.album1}>
            <AlbumPhoto src="/images/albumCover.jpg" alt="albumCover" />
          </AlbumLink>
        </RightStyledBook>
      </Wrapper>
      <Wrapper name="subPage">
        <AlbumLayout />
      </Wrapper>
    </Container>
  );
}

export default PhotoPage;