import styled, { css, keyframes } from "styled-components";

type PhotoBoxProps = {
  active: any;
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

const PhotoBox = styled.div<PhotoBoxProps>`
  position: absolute;
  opacity: 0.67;
  width: 600px;
  height: 600px;
  margin: 0 auto;
  background-image: url("/images/colorPhotoTree.jpg");
  object-fit: contain;
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  box-shadow: 15px 15px 50px rgba(0, 0, 0, 0.2);
  ${(props) => {
    if (props.active) {
      return css`
        animation: ${PhotoBoxEffect} 10s infinite;
      `;
    }
  }};
  overflow: hidden;
`;

const Wrapper = styled.div`
  position: relative;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #d9cfc1;
`;

const Text = styled.h1<TextProps>`
  position: absolute;
  z-index: 1;
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

const PhotoBoxEffect = keyframes`
   0% {
      border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
      box-shadow: 15px 15px 50px rgba(0,0,0,0.2);
    }
    25% { 
      border-radius: 30% 70% 37% 63% / 60% 30% 70% 40% ;
    }
    50% {
      border-radius: 76% 24% 41% 59% / 40% 30% 70% 60% ;
      box-shadow: -10px -5px 50px rgba(0,0,0,0.2);
    }
    75% {
      border-radius: 33% 67% 58% 42% / 63% 68% 32% 37%;
    }
`;

export { Container, PhotoBox, Text, Wrapper, ScrollBtn };
