import styled from "styled-components";

type WrapperProps = {
  name: string;
};

type TextProps = {
  name: string;
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
  border: 1px solid #f7d763;
  border-radius: 50%;
  box-shadow: rgba(214, 162, 88, 0.65) 0px 45px 50px,
    rgba(222, 172, 104, 0.22) 0px -45px 50px 20px,
    rgba(0, 0, 0, 0.12) -30px 35px 0px,
    rgba(214, 162, 88, 0.22) 0px 52px 43px 20px,
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
  background: ${(props) => {
    if (props.name === "mainPage")
      return "linear-gradient(#696661, #807d78, #999688)";
    if (props.name === "subPage")
      return "linear-gradient(to top, #696661, #807d78, #999688)";
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
  font-weight: 100;
  color: #f0b056;
  writing-mode: vertical-lr;
  text-shadow: 5px 5px 7px #474642;
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

const RightStyledBook = styled.div`
  background-color: #eae6dd;
  width: 535px;
  height: 605px;
  position: relative;
  top: 0;
  box-shadow: rgb(0, 0, 0, 0.7) 0px 20px 30px -10px;
`;

const LeftStyledBook = styled.div`
  position: relative;
  z-index: 3;
  background-color: #eae6dd;
  width: 530px;
  height: 630px;
  border-radius: 50% 50% 45% 55% / 1% 2% 2% 1%;
  box-shadow: rgb(0, 0, 0, 0.55) 5px 30px 40px -1px;
`;

const RightStyledBook2 = styled.div`
  position: relative;
  top: 1px;
  z-index: 2;
  background-color: #eae6dd;
  width: 530px;
  height: 630px;
  border-radius: 50% 50% 45% 55% / 1% 2% 2% 1%;
  box-shadow: rgb(0, 0, 0, 0.7) 0px 20px 30px -10px;
`;

const LeftStyledBook2 = styled.div`
  background-color: #cec5b4;
  width: 530px;
  height: 630px;
  border-radius: 50% 50% 45% 55% / 1% 2% 2% 1%;
  box-shadow: rgb(0, 0, 0, 0.75) 0px 20px 30px -10px;
  transform: scaleX(-1);
`;

export {
  Container,
  PhotoBox,
  Text,
  Wrapper,
  ScrollBtn,
  RightStyledBook,
  LeftStyledBook,
  RightStyledBook2,
  LeftStyledBook2,
};
