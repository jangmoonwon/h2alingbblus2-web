import React, { useRef } from "react";
import {
  Container,
  TextWrapper,
  StyledBox,
  StyledBox2,
  StyledBox3,
  StyledBorder,
  HeaderText,
  ArticleText,
  ProfileWrapper,
  ProfileCard,
  Profile,
  ProfileContent,
  ScrollButton,
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
    <Container>
      <StyledBox />
      <StyledBox2 />
      <StyledBox3 />
      <StyledBorder />
      <TextWrapper ref={buttonRef}>
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
        <ProfileCard style={{ marginTop: 300 }}>
          <ProfileContent />
          <Profile src="/images/userImg.jpg" alt="Profile" />
        </ProfileCard>
      </ProfileWrapper>
      <ProfileWrapper
        style={{
          gap: 100,
          flexWrap: "wrap",
          backgroundColor: "#b9b4a8",
          height: "150vh",
        }}
      >
        <ProfileCard>
          <ProfileContent />
          <Profile src="/images/userImg.jpg" alt="Profile" />
        </ProfileCard>
        <ProfileCard>
          <ProfileContent />
          <Profile src="/images/userImg.jpg" alt="Profile" />
        </ProfileCard>
        <ProfileCard>
          <ProfileContent />
          <Profile src="/images/userImg.jpg" alt="Profile" />
        </ProfileCard>
        <ProfileCard style={{marginBottom: "350px"}}>
          <ProfileContent />
          <Profile src="/images/userImg.jpg" alt="Profile" />
        </ProfileCard>
        <ProfileCard>
          <ProfileContent />
          <Profile src="/images/userImg.jpg" alt="Profile" />
        </ProfileCard>
        <ScrollButton onClick={scrollToTop}>↑</ScrollButton>
      </ProfileWrapper>
    </Container>
  );
}

export default AboutPage;
