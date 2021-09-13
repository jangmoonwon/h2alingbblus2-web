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
  ProfileName,
  ProfileLabel,
  ScrollImg,
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
          backgroundColor: "#b9b4a8",
          height: "170vh",
        }}
      >
        <ProfileCard style={{ backgroundColor: "#bf4b75" }}>
          <ProfileContent>
            <ProfileName>OOO 청년</ProfileName>
            <ProfileLabel>청년부 임원</ProfileLabel>
          </ProfileContent>
          <Profile src="/images/userImg.jpg" alt="Profile" />
        </ProfileCard>
        <ProfileCard style={{ backgroundColor: "#bf4b75" }}>
          <ProfileContent>
            <ProfileName>OOO 청년</ProfileName>
            <ProfileLabel>청년부 임원</ProfileLabel>
          </ProfileContent>
          <Profile src="/images/userImg.jpg" alt="Profile" />
        </ProfileCard>
        <ProfileCard style={{ backgroundColor: "#bf4b75" }}>
          <ProfileContent>
            <ProfileName>OOO 청년</ProfileName>
            <ProfileLabel>청년부 임원</ProfileLabel>
          </ProfileContent>
          <Profile src="/images/userImg.jpg" alt="Profile" />
        </ProfileCard>
        <ProfileCard
          style={{ marginBottom: "350px", backgroundColor: "#bf4b75" }}
        >
          <ProfileContent>
            <ProfileName>OOO 청년</ProfileName>
            <ProfileLabel>청년부 임원</ProfileLabel>
          </ProfileContent>
          <Profile src="/images/userImg.jpg" alt="Profile" />
        </ProfileCard>
        <ProfileCard style={{ backgroundColor: "#bf4b75" }}>
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
          backgroundColor: "#b9b4a8",
          height: "150vh",
        }}
      >
        <ProfileCard style={{ backgroundColor: "#d98c8b" }}>
          <ProfileContent>
            <ProfileName>OOO 청년</ProfileName>
            <ProfileLabel>청년부 찬양단</ProfileLabel>
          </ProfileContent>
          <Profile src="/images/userImg.jpg" alt="Profile" />
        </ProfileCard>
        <ProfileCard style={{ backgroundColor: "#d98c8b" }}>
          <ProfileContent>
            <ProfileName>OOO 청년</ProfileName>
            <ProfileLabel>청년부 찬양단</ProfileLabel>
          </ProfileContent>
          <Profile src="/images/userImg.jpg" alt="Profile" />
        </ProfileCard>
        <ProfileCard style={{ backgroundColor: "#d98c8b" }}>
          <ProfileContent>
            <ProfileName>OOO 청년</ProfileName>
            <ProfileLabel>청년부 찬양단</ProfileLabel>
          </ProfileContent>
          <Profile src="/images/userImg.jpg" alt="Profile" />
        </ProfileCard>
        <ProfileCard
          style={{ backgroundColor: "#d98c8b", marginBottom: "350px" }}
        >
          <ProfileContent>
            <ProfileName>OOO 청년</ProfileName>
            <ProfileLabel>청년부 찬양단</ProfileLabel>
          </ProfileContent>
          <Profile src="/images/userImg.jpg" alt="Profile" />
        </ProfileCard>
        <ProfileCard style={{ backgroundColor: "#d98c8b" }}>
          <ProfileContent>
            <ProfileName>OOO 청년</ProfileName>
            <ProfileLabel>청년부 찬양단</ProfileLabel>
          </ProfileContent>
          <Profile src="/images/userImg.jpg" alt="Profile" />
        </ProfileCard>
        <ProfileCard style={{ backgroundColor: "#d98c8b" }}>
          <ProfileContent >
          <ProfileName>OOO 청년</ProfileName>
            <ProfileLabel>청년부 찬양단</ProfileLabel>
          </ProfileContent>
          <Profile src="/images/userImg.jpg" alt="Profile" />
        </ProfileCard>
        <ScrollButton onClick={scrollToTop}>
          <ScrollImg src="/images/scrollTop.png" alt="scrollbtn"/>
        </ScrollButton>
      </ProfileWrapper>
    </Container>
  );
}

export default AboutPage;
