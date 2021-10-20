import styled, { css, keyframes } from "styled-components";

type TextProps = {
  title: string;
};

type ArrowProps = {
  active: any;
};

const Container = styled.div`
  /* background-image-size: 1440 X 790 */

  background-image: linear-gradient(
      to bottom,
      rgba(34, 34, 34, 0.7),
      rgba(44, 62, 80, 0.45)
    ),
    url("/images/mainImg.jpg");
  width: 100vw;
  height: 100vh;
  overflow: auto;
  scroll-snap-type: y mandatory;
`;

const Wrapper = styled.div`
  position: relative;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Text = styled.text<TextProps>`
  position: absolute;
  top: ${(props) => {
    if (props.title === "main") return "45%";
    if (props.title === "sub") return "40%";
    return "none";
  }};

  font-size: ${(props) => {
    if (props.title === "main") return "100px";
    if (props.title === "sub") return "30px";
    return "12px";
  }};
  font-family: "NanumSquareExtraBold";
  font-weight: ${(props) => {
    if (props.title === "main") return 800;
    if (props.title === "sub") return 300;
  }};
  color: #f5ebe9;
  margin: 0;
  padding: 0;
  cursor: default;
`;


const DownArrow = styled.img<ArrowProps>`
  position: absolute;
  bottom: 5px;
  width: 64px;
  height: 64px;
  cursor: pointer;
  ${(props) => {
    if (props.active) {
      return css`
        animation: ${ArrowEffect} 1.45s infinite;
      `;
    }
  }}
`;

const ScrollBtn = styled.button`
  position: absolute;
  z-index: 1;
  bottom: 3%;
  width: 300px;
  height: 45px;
  background-color: transparent;
  border: transparent;
  font-size: 43px;
  font-family: "Cafe24Oneprettynight";
  font-weight: 300;
  color: #003638;
  cursor: pointer;
`;

const ArrowEffect = keyframes`
  from {
  opacity: 0;
  margin-bottom: 0px;
}

to {
  opacity: 1;
  margin-bottom: 7px;
}
`;

export { Container, Wrapper, Text, DownArrow, ScrollBtn };
