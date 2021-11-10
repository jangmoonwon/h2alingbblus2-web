import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";

type ArrowProps = {
  isLeft: boolean;
};

type ProfileCardProps = {
  desc: string;
};

const TOTAL_SLIDES = 2;

function SlidePage() {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const slideRef = useRef<any>(null);

  const nextClick = () => {
    if (currentSlide >= TOTAL_SLIDES) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
      
    }
    
  };
  const prevClick = () => {
    if (currentSlide === 0) {
      setCurrentSlide(TOTAL_SLIDES);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  useEffect(() => {
    slideRef.current.style.transition = "all 0.75s ease-in-out";
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`;
  }, [currentSlide]);

  return (
    <Container>
      <SlideContainer ref={slideRef}>
        <Content>
          <ProfileCard desc="pastorCard">
            <ProfileContent>
              <ProfileName>OOO 목사님</ProfileName>
              <ProfileLabel>교육목사</ProfileLabel>
            </ProfileContent>
            <Profile src="/images/userImg.jpg" alt="Profile" />
          </ProfileCard>
          <ProfileCard desc="executivesCard">
            <ProfileContent>
              <ProfileName>OOO 청년</ProfileName>
              <ProfileLabel>청년부 임원</ProfileLabel>
            </ProfileContent>
            <Profile src="/images/userImg.jpg" alt="Profile" />
          </ProfileCard>
          <ProfileCard desc="executivesCard">
            <ProfileContent>
              <ProfileName>OOO 청년</ProfileName>
              <ProfileLabel>청년부 임원</ProfileLabel>
            </ProfileContent>
            <Profile src="/images/userImg.jpg" alt="Profile" />
          </ProfileCard>
        </Content>
        <Content>
          <ProfileCard desc="executivesCard">
            <ProfileContent>
              <ProfileName>OOO 청년</ProfileName>
              <ProfileLabel>청년부 임원</ProfileLabel>
            </ProfileContent>
            <Profile src="/images/userImg.jpg" alt="Profile" />
          </ProfileCard>
          <ProfileCard desc="executivesCard">
            <ProfileContent>
              <ProfileName>OOO 청년</ProfileName>
              <ProfileLabel>청년부 임원</ProfileLabel>
            </ProfileContent>
            <Profile src="/images/userImg.jpg" alt="Profile" />
          </ProfileCard>
          <ProfileCard desc="executivesCard">
            <ProfileContent>
              <ProfileName>OOO 청년</ProfileName>
              <ProfileLabel>청년부 임원</ProfileLabel>
            </ProfileContent>
            <Profile src="/images/userImg.jpg" alt="Profile" />
          </ProfileCard>
        </Content>
        <Content>
          <ProfileCard desc="choirCard">
            <ProfileContent>
              <ProfileName>OOO 청년</ProfileName>
              <ProfileLabel>청년부 찬양단</ProfileLabel>
            </ProfileContent>
            <Profile src="/images/userImg.jpg" alt="Profile" />
          </ProfileCard>
          <ProfileCard desc="choirCard">
            <ProfileContent>
              <ProfileName>OOO 청년</ProfileName>
              <ProfileLabel>청년부 찬양단</ProfileLabel>
            </ProfileContent>
            <Profile src="/images/userImg.jpg" alt="Profile" />
          </ProfileCard>
          <ProfileCard desc="choirCard">
            <ProfileContent>
              <ProfileName>OOO 청년</ProfileName>
              <ProfileLabel>청년부 찬양단</ProfileLabel>
            </ProfileContent>
            <Profile src="/images/userImg.jpg" alt="Profile" />
          </ProfileCard>
        </Content>
        <Content>
          <ProfileCard desc="choirCard">
            <ProfileContent>
              <ProfileName>OOO 청년</ProfileName>
              <ProfileLabel>청년부 찬양단</ProfileLabel>
            </ProfileContent>
            <Profile src="/images/userImg.jpg" alt="Profile" />
          </ProfileCard>
          <ProfileCard desc="choirCard">
            <ProfileContent>
              <ProfileName>OOO 청년</ProfileName>
              <ProfileLabel>청년부 찬양단</ProfileLabel>
            </ProfileContent>
            <Profile src="/images/userImg.jpg" alt="Profile" />
          </ProfileCard>
          <ProfileCard desc="choirCard">
            <ProfileContent>
              <ProfileName>OOO 청년</ProfileName>
              <ProfileLabel>청년부 찬양단</ProfileLabel>
            </ProfileContent>
            <Profile src="/images/userImg.jpg" alt="Profile" />
          </ProfileCard>
        </Content>
      </SlideContainer>
      <Arrow isLeft={true} onClick={prevClick}>
        <Img src="/images/png/leftArrow.png" alt="prevClick" />
      </Arrow>
      <Arrow isLeft={false} onClick={nextClick}>
        <Img src="/images/png/rightArrow.png" alt="nextClick" />
      </Arrow>
    </Container>
  );
}

export default SlidePage;

const Container = styled.div`
  width: 90vw;
  height: 70vh;
  background-color: rgba(235, 235, 235, 1);
  border-radius: 25px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 10px 60px -30px;
  overflow: auto;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SlideContainer = styled.div`
  width: 90vw;
  height: 70vh;
  display: flex;
`;

const Arrow = styled.div<ArrowProps>`
  background-color: transparent;
  border-radius: 20%;
  position: absolute;
  z-index: 99;
  top: 45%;
  ${(props) => (props.isLeft ? "left: 7%" : "right: 7%")};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 45px;
  color: #131313;
  cursor: pointer;
`;

const Img = styled.img`
  width: 50px;
  height: 50px;
`;

const Content = styled.div`
  scroll-snap-align: center;
  width: 90vw;
  height: 70vh;
  display: flex;
  flex-shrink: 0;
  gap: 100px;
  justify-content: center;
  align-items: center;
`;

const ProfileCard = styled.div<ProfileCardProps>`
  display: flex;
  flex-direction: column;
  width: 270px;
  height: 450px;
  border-radius: 23px;
  background-color: ${(props) => {
    if (props.desc === "pastorCard") return "#654173";
    if (props.desc === "executivesCard") return "#bf4b75";
    if (props.desc === "choirCard") return "#d98c8b";
    return "#c7c7c7";
  }};
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
`;

const ProfileContent = styled.div`
  position: absolute;
  z-index: 12;
  width: 270px;
  height: 390px;
  background-color: #f5f5f5;
  border-radius: 23px;
`;

const Profile = styled.img`
  position: absolute;
  z-index: 12;
  width: 270px;
  height: 270px;
  border-radius: 23px;
`;

const ProfileName = styled.h1`
  margin-top: 310px;
  color: #002526;
  text-align: center;
  font-size: 30px;
  font-family: "Cafe24Oneprettynight";
`;

const ProfileLabel = styled.h1`
  margin-top: 63px;
  color: #f5ebe9;
  text-align: center;
  font-size: 30px;
  font-family: "Cafe24Oneprettynight";
`;
