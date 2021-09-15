import React, { useRef } from "react";
import {
  Container,
  TextWrapper,
  CrimsonBox,
  TurquoiseBox,
  YellowBox,
  StyledBorder,
  HeaderText,
  ArticleText,
  ProfileWrapper,
  ProfileCard,
  Profile,
  ProfileContent,
  ScrollButton,
  ProfileName,
  ProfileLabel,
  ScrollImg,
  ScrollText,
} from "./styles";


function AboutPage() {
  const buttonRef = useRef<any>();
  const scrollToTop = () => {
    window.scrollTo({
      behavior: "smooth",
      top: buttonRef.current.offsetTop,
    });
  };

  return (
    <Container ref={buttonRef}>
      <CrimsonBox />
      <TurquoiseBox />
      <YellowBox />
      <StyledBorder />
      <TextWrapper>
        <HeaderText>
          사랑스럽고, <br />
          과즙미넘치는 <br />
          유쾌하고,
          <br />
          자유로운
          <br />
          청년부
        </HeaderText>
      </TextWrapper>
      <ProfileWrapper>
        <ArticleText>청년부 섬김이들을 소개합니다.</ArticleText>
        <ProfileCard style={{ marginTop: 300 }} label="pastorCard">
          <ProfileContent>
            <ProfileName>OOO 목사님</ProfileName>
            <ProfileLabel>교육목사</ProfileLabel>
          </ProfileContent>
          <Profile src="/images/userImg.jpg" alt="Profile" />
        </ProfileCard>
      </ProfileWrapper>
      <ProfileWrapper
        style={{
          gap: 100,
          flexWrap: "wrap",
          height: "170vh",
        }}
      >
        <ProfileCard label="executivesCard">
          <ProfileContent>
            <ProfileName>OOO 청년</ProfileName>
            <ProfileLabel>청년부 임원</ProfileLabel>
          </ProfileContent>
          <Profile src="/images/userImg.jpg" alt="Profile" />
        </ProfileCard>
        <ProfileCard label="executivesCard">
          <ProfileContent>
            <ProfileName>OOO 청년</ProfileName>
            <ProfileLabel>청년부 임원</ProfileLabel>
          </ProfileContent>
          <Profile src="/images/userImg.jpg" alt="Profile" />
        </ProfileCard>
        <ProfileCard label="executivesCard">
          <ProfileContent>
            <ProfileName>OOO 청년</ProfileName>
            <ProfileLabel>청년부 임원</ProfileLabel>
          </ProfileContent>
          <Profile src="/images/userImg.jpg" alt="Profile" />
        </ProfileCard>
        <ProfileCard style={{ marginBottom: "350px" }} label="executivesCard">
          <ProfileContent>
            <ProfileName>OOO 청년</ProfileName>
            <ProfileLabel>청년부 임원</ProfileLabel>
          </ProfileContent>
          <Profile src="/images/userImg.jpg" alt="Profile" />
        </ProfileCard>
        <ProfileCard label="executivesCard">
          <ProfileContent>
            <ProfileName>OOO 청년</ProfileName>
            <ProfileLabel>청년부 임원</ProfileLabel>
          </ProfileContent>
          <Profile src="/images/userImg.jpg" alt="Profile" />
        </ProfileCard>
      </ProfileWrapper>
      <ProfileWrapper
        style={{
          gap: 100,
          flexWrap: "wrap",
          height: "150vh",
        }}
      >
        <ProfileCard label="choirCard">
          <ProfileContent>
            <ProfileName>OOO 청년</ProfileName>
            <ProfileLabel>청년부 찬양단</ProfileLabel>
          </ProfileContent>
          <Profile src="/images/userImg.jpg" alt="Profile" />
        </ProfileCard>
        <ProfileCard label="choirCard">
          <ProfileContent>
            <ProfileName>OOO 청년</ProfileName>
            <ProfileLabel>청년부 찬양단</ProfileLabel>
          </ProfileContent>
          <Profile src="/images/userImg.jpg" alt="Profile" />
        </ProfileCard>
        <ProfileCard label="choirCard">
          <ProfileContent>
            <ProfileName>OOO 청년</ProfileName>
            <ProfileLabel>청년부 찬양단</ProfileLabel>
          </ProfileContent>
          <Profile src="/images/userImg.jpg" alt="Profile" />
        </ProfileCard>
        <ProfileCard style={{ marginBottom: "350px" }} label="choirCard">
          <ProfileContent>
            <ProfileName>OOO 청년</ProfileName>
            <ProfileLabel>청년부 찬양단</ProfileLabel>
          </ProfileContent>
          <Profile src="/images/userImg.jpg" alt="Profile" />
        </ProfileCard>
        <ProfileCard label="choirCard">
          <ProfileContent>
            <ProfileName>OOO 청년</ProfileName>
            <ProfileLabel>청년부 찬양단</ProfileLabel>
          </ProfileContent>
          <Profile src="/images/userImg.jpg" alt="Profile" />
        </ProfileCard>
        <ProfileCard label="choirCard">
          <ProfileContent>
            <ProfileName>OOO 청년</ProfileName>
            <ProfileLabel>청년부 찬양단</ProfileLabel>
          </ProfileContent>
          <Profile src="/images/userImg.jpg" alt="Profile" />
        </ProfileCard>
        <ScrollButton onClick={scrollToTop}>
          <ScrollImg src="/images/scrollTop.png" alt="scrollbtn" />
          <ScrollText>TOP</ScrollText>
        </ScrollButton>
      </ProfileWrapper>
    </Container>
  );
}

export default AboutPage;