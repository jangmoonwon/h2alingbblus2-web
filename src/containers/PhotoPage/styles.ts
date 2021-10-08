import styled, { css, keyframes } from "styled-components";

type PhotoBoxProps = {
  active: any;
};

type TextProps = {
  name: string;
};

type ImgProps = {
  isLeft: boolean;
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  scroll-snap-type: y mandatory;
  overflow: auto;
`;

const PhotoBox = styled.div<PhotoBoxProps>`
  position: absolute;
  opacity: 0.67;
  width: 600px;
  height: 600px;
  margin: 0 auto;
  background-image: url("/images/colorPhotoTree.jpg");
  object-fit: contain;
  border-radius: 62% 38% 70% 30% / 33% 61% 39% 67%;
  box-shadow: rgba(184, 156, 55, 0.65) 0px 40px 57px,
    rgba(184, 156, 55, 0.32) 0px -12px 37px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(184, 156, 55, 0.37) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  overflow: hidden;
  ${(props) => {
    if (props.active) {
      return css`
        animation: ${PhotoBoxEffect} 6.75s infinite;
      `;
    }
  }}
`;

const Wrapper = styled.div`
  position: relative;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #8f948f;
  box-shadow: rgba(113, 117, 113, 0.8) 45px 30px 100px 45px inset,
    rgba(113, 117, 113, 0.82) 0px 18px 36px -18px inset;
`;

const Text = styled.h1<TextProps>`
  position: absolute;
  z-index: 3;
  top: ${(props) => {
    if (props.name === "desc1") return "23%";
    if (props.name === "desc2") return "28%";
  }};
  left: ${(props) => {
    if (props.name === "desc1") return "41%";
    if (props.name === "desc2") return "44%";
  }};
  font-size: ${(props) => {
    if (props.name === "desc1") return "60px";
    if (props.name === "desc2") return "100px";
  }};
  font-family: "Cafe24Oneprettynight";
  font-weight: 300;
  color: #003638;
  writing-mode: vertical-lr;
  text-shadow: 3px 3px 7px #f4a69f;
  cursor: default;
`;

const ScrollBtn = styled.button`
  position: absolute;
  z-index: 1;
  bottom: 3%;
  width: 200px;
  height: 45px;
  background-color: transparent;
  border: transparent;
  font-size: 43px;
  font-family: "Cafe24Oneprettynight";
  font-weight: 300;
  color: #003638;
  cursor: pointer;
`;

const Img = styled.img<ImgProps>`
  width: 100px;
  height: 100px;
  position: absolute;
  z-index: 99;
  bottom: 0;
  ${(props) => (props.isLeft ? "left: 3%" : "right: 3%")};
  transform: ${(props) => {
    if (props.isLeft === false) return "scaleX(-1)";
    else return "none";
  }};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AlbumCard = styled.div`
  background-color: #f0f0f0;
  width: 300px;
  height: 500px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 35px -10px,
    rgba(0, 0, 0, 0.7) 0px 18px 30px -8px;
`;

const PhotoBoxEffect = keyframes`
   0% {
      border-radius: 62% 38% 70% 30% / 33% 61% 39% 67%;
      
    }
    25% {
      border-radius: 67% 33% 50% 50% / 45% 32% 68% 55%;
    }
    50% {
      border-radius: 28% 72% 67% 33% / 40% 56% 44% 60%;
      
    }
    75% {
      border-radius: 67% 33% 65% 35% / 35% 60% 40% 65%;
    }
`;

export { Container, PhotoBox, Text, Wrapper, ScrollBtn, Img, AlbumCard };
