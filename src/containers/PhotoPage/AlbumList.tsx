import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import paths from "../../routes/paths.json";

type PhotoCardProps = {
  order: number;
};

function AlbumList() {
  return (
    <Container>
      <StickerImg src="/images/png/sticker.png" />
      <InfoMemo>사진을 눌러주세요 :)</InfoMemo>
      <PhotoCardContainer order={1}>
        <AlbumLink to={paths.album1}>
          <AlbumImage src="/images/albumCover.jpg" alt="albumCover" />
        </AlbumLink>
        <AlbumText>청년부 수련회</AlbumText>
      </PhotoCardContainer>
      <PhotoCardContainer order={2}>
        <AlbumLink to={paths.album2}>
          <AlbumImage src="/images/album2/album(2)12.jpg" alt="albumCover" />
        </AlbumLink>
        <AlbumText>가을맞이 운동회</AlbumText>
      </PhotoCardContainer>
      <PhotoCardContainer order={3}>
      <AlbumLink to={paths.album3}>
          <AlbumImage src="/images/album3/album3Cover.png" alt="albumCover" />
        </AlbumLink>
        <AlbumText>동아리 활동</AlbumText>
      </PhotoCardContainer>
    </Container>
  );
}

export default AlbumList;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: transparent;
`;

const PhotoCardContainer = styled.div<PhotoCardProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 25vw;
  height: 55vh;
  background-color: #f5f5f5;
  position: absolute;
  left: ${(props) => {
    if (props.order === 1) return "10%";
    if (props.order === 2) return 50;
    if (props.order === 3) return "67%";
  }};
  top: ${(props) => {
    if (props.order === 1) return "7%";
    if (props.order === 2) return "37%";
  }};
  transform: ${(props) => {
    if (props.order === 1) return "rotate(11deg)";
    if (props.order === 2) return "rotate(-3deg)";
    if (props.order === 3) return "rotate(3deg)";
  }};
  box-shadow: rgb(64, 62, 58) 0px 20px 30px -10px;
`;

const AlbumImage = styled.img`
  width: 22vw;
  height: 41vh;
`;

const AlbumLink = styled(NavLink)`
  width: 22vw;
  height: 41vh;
`;

const AlbumText = styled.div`
font-family: "Cafe24Oneprettynight";
  font-weight: 100;
  margin-top: 20px;
  font-size: 25px;
`;

const InfoMemo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 8%;
  left: 43%;
  width: 22vw;
  height: 9vh;
  font-size: 27px;
  background-color: #edcda5;
  box-shadow: rgb(64, 62, 58) 0px 20px 30px -10px;
  border-radius: 0% 10% 15% 0% / 10% 1% 3% 10%;
  transform: rotate(-5deg);
`;

const StickerImg = styled.img`
  position: absolute;
  z-index: 1;
  top: 7%;
  left: 40%;
  width: 64px;
  height: 64px;
  transform: rotate(-40deg);
`;
