import styled from "styled-components";

type WrapperProps = {
  name: string;
};

type TextProps = {
  name: string;
};

type AlbumCardProps = {
  isLeft: boolean;
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  scroll-snap-type: y mandatory;
  overflow: auto;
`;

const PhotoBox = styled.div`
  position: absolute;
  width: 600px;
  height: 600px;
  margin: 0 auto;
  background-image: url("/images/colorPhotoTree.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  object-fit: contain;
  /* border-radius: 62% 38% 70% 30% / 33% 61% 39% 67%; */
  border: 1px solid #f7d763;
  border-radius: 50%;
  box-shadow: rgba(222, 172, 104, 0.65) 0px 45px 50px,
    rgba(222, 172, 104, 0.22) 0px -45px 50px 20px,
    rgba(0, 0, 0, 0.12) -30px 35px 0px,
    rgba(222, 172, 104, 0.22) 0px 52px 43px 20px,
    rgba(0, 0, 0, 0.09) 40px -4px 5px;
  overflow: hidden;
`;

const Wrapper = styled.div<WrapperProps>`
  position: relative;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  /* background: linear-gradient(#696661, #807d78, #958a79); */
  background: ${(props) => {
  if (props.name === "mainPage") return "linear-gradient(#696661, #807d78, #999688)";
  if (props.name === "subPage") return "linear-gradient(to top, #696661, #807d78, #999688)";
  }};
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
  color: #dbd9d0;
  writing-mode: vertical-lr;
  text-shadow: 3px 3px 7px #474642;
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

const AlbumCard = styled.div<AlbumCardProps>`
  background-color: #ffffff;
  width: 600px;
  height: 600px;
  border-radius: 31% 1% 2% 13% / 5% 2% 3% 3%;
  transform: ${(props) => (props.isLeft ? "scaleX(-1)" : "none")};
  box-shadow: rgba(240, 46, 170, 0.4) 5px 5px, rgba(240, 46, 170, 0.3) 10px 10px,
    rgba(240, 46, 170, 0.2) 15px 15px, rgba(240, 46, 170, 0.1) 20px 20px,
    rgba(240, 46, 170, 0.05) 25px 25px;
  border-left: 0.9mm groove rgba(6, 74, 56, 0.1);
`;

// const PhotoBoxEffect = keyframes`
//    0% {
//       border-radius: 62% 38% 70% 30% / 33% 61% 39% 67%;

//     }
//     25% {
//       border-radius: 67% 33% 50% 50% / 45% 32% 68% 55%;
//     }
//     50% {
//       border-radius: 28% 72% 67% 33% / 40% 56% 44% 60%;

//     }
//     75% {
//       border-radius: 67% 33% 65% 35% / 35% 60% 40% 65%;
//     }
// `;

export { Container, PhotoBox, Text, Wrapper, ScrollBtn, AlbumCard };
