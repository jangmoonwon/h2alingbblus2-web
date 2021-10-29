import React from "react";
import styled from "styled-components";

type ButtonProps = {
  history: any;
};

const Album1 = ({ history }: ButtonProps) => {
  return (
    <Container>
      <HeaderTitle>청년부 수련회</HeaderTitle>
      <ImageContainer>
        <Wrapper>
          <Images src="/images/mainImg.jpg" />
          <Images src="/images/colorPhotoTree.jpg" />
          <Images src="/images/album1/album1(1).jpg" />
          <Images src="/images/album1/album1(2).jpg" />
          <Images src="/images/album1/album1(3).jpg" />
          <Images src="/images/album1/album1(4).jpg" />
          <Images src="/images/album1/album1(5).jpg" />
          <Images src="/images/album1/album1(6).jpg" />
          <Images src="/images/album1/album1(7).jpg" />
          <Images src="/images/album1/album1(8).jpg" />
          <Images src="/images/album1/album1(9).jpg" />
          <Images src="/images/album1/album1(10).jpg" />
          <Images src="/images/album1/album1(11).jpg" />
          <Images src="/images/album1/album1(12).jpg" />
        </Wrapper>
        <Prevbutton onClick={() => history.goBack()}>
          <ButtonImg src="/images/png/leftArrow.png" />
        </Prevbutton>
      </ImageContainer>
    </Container>
  );
};

export default Album1;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background-color: ivory;
  gap: 20px;
`;

const ImageContainer = styled.div`
  width: 100vw;
  height: 80vh;
  overflow: auto;
  scroll-snap-type: y mandatory;
  /* background-color: blueviolet; */
`;

const Wrapper = styled.div`
  scroll-snap-align: center;
  width: 100vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px 20px;
`;

const HeaderTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 15vh;
  font-size: 55px;
  font-family: "Cafe24Oneprettynight";
  font-weight: 900;
`;

const Images = styled.img`
  width: 700px;
  height: 500px;
  object-fit: cover;
`;

const Prevbutton = styled.button`
  position: absolute;
  left: 33px;
  bottom: 33px;
  width: 70px;
  height: 70px;
  border: transparent;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.75);
  color: #000000;
  font-size: 20px;
  cursor: pointer;
  &:hover {
    background-color: rosybrown;
    transition: 0.12s all ease-in;
  }
`;

const ButtonImg = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 30px;
  height: 30px;
`;
