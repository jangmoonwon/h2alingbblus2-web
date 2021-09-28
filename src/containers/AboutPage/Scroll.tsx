import React, { useState, useCallback } from "react";
import styled from "styled-components";

type ProfileCardProps = {
  desc: string;
};

type ArrowProps = {
    isLeft: boolean;
};
  
type ItemBoxProps = {
    idx: number;
};


function Scroll() {
  const [translateValue, setTranslateValue] = useState<number>(0);

  const handlePrevClick = useCallback((): void => {
    if (translateValue <= 0) {
      // state 업데이트 전, 해당 변수의 값이 0이라면
      
      setTranslateValue(ItemBox.idx - 1);
      // length의 -1로 지정하여 가장 마지막으로 이동한다.
  
      return;
    }
  
    setTranslateValue(translateValue - 1);
    // 인덱스 감소
  }, [translateValue]);
  
  // 오른쪽 화살표 클릭
  const handleNextClick = useCallback((): void => {
    if (translateValue + 1 === ItemBox.idx) {
      // +1 했을 때, 배열의 인덱스를 벗어난다면
      
      setTranslateValue(0);
      // 0으로 설정하여 가장 첫번째로 이동
      
      return;
    }
  
    setTranslateValue(translateValue + 1);
    // 인덱스 증가
  }, [translateValue]);

  return (
    <Container>
      <Wrapper>
        <ItemBox idx={1} >
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
        </ItemBox>
        <ItemBox idx={2}>
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
        </ItemBox>
        <ItemBox idx={3}>
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
        </ItemBox>
        <ItemBox idx={4}>
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
        </ItemBox>
        <Arrow isLeft={true} onClick={handlePrevClick}>
          ◀︎
        </Arrow>
        <Arrow isLeft={false} onClick={handleNextClick}>
          ▶︎
        </Arrow>
      </Wrapper>
    </Container>
  );
}

export default Scroll;

const Container = styled.div`
  background: transparent;
  display: block;
  overflow: hidden;
  width: 100vw;
  height: 70vh;
  margin: 0 auto;
  background-color: rgba(245, 235, 233, 0.2);
  /* border: 3px solid #f5ebe9; */
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const Wrapper = styled.div`
  display: flex;
  width: auto;
  height: 70vh;
  overflow-x: scroll;
  overflow-y: hidden;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  background-color: transparent;
`;

const ItemBox = styled.div<ItemBoxProps>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  scroll-snap-align: center;
  width: 100vw;
  height: 100%;
  gap: 50px;
`;

const ProfileCard = styled.div<ProfileCardProps>`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 500px;
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
  width: 300px;
  height: 430px;
  background-color: #f5f5f5;
  border-radius: 23px;
`;

const Profile = styled.img`
  position: absolute;
  z-index: 12;
  width: 300px;
  height: 300px;
  border-radius: 23px;
`;

const ProfileName = styled.h1`
  margin-top: 340px;
  color: #002526;
  text-align: center;
  font-size: 30px;
  font-family: "Cafe24Oneprettynight";
`;

const ProfileLabel = styled.h1`
  margin-top: 75px;
  color: #f5ebe9;
  text-align: center;
  font-size: 30px;
  font-family: "Cafe24Oneprettynight";
`;

const Arrow = styled.div<ArrowProps>`
  width: 60px;
  height: 60px;
  background-color: transparent;
  border-radius: 20%;
  position: absolute;
  z-index: 99;
  top: 50%;
  ${(props) => (props.isLeft ? "left: 5px" : "right: 5px")};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 45px;
  color: #131313;
  cursor: pointer;
  transition: 0.175s all ease-in;
  &:hover {
    background-color: rgba(204, 198, 198, 0.75);
  }
`;