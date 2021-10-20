import styled, {css, keyframes} from "styled-components";

type ArrowProps = {
  active: any;
};

const Container = styled.div`
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
  font-size: 35px;
  font-weight: 600;
  background-color: #f5ebe9;
`;

const VerticalText = styled.h1`
  position: absolute;
  z-index: 11;
  top: 17%;
  left: 40%;
  font-size: 84px;
  font-weight: 300;
  font-family: "Cafe24Oneprettynight";
  color: #c65847;
  writing-mode: vertical-lr;
  cursor: default;
`;

const HorizontalText = styled.h1`
  position: absolute;
  z-index: 11;
  top: 11%;
  left: 50%;
  font-size: 80px;
  font-weight: 300;
  font-family: "Cafe24Oneprettynight";
  color: #002526;
  writing-mode: horizontal-tb;
  cursor: default;
`;

const PurpleBox = styled.div`
  position: absolute;
  z-index: 10;
  top: 25%;
  left: 7%;
  width: 450px;
  height: 450px;
  background-color: #765e8d;
  border-radius: 19% 81% 74% 26% / 22% 30% 70% 78%;
  box-shadow: rgba(0, 87, 127, 0.25) 0px 50px 50px,
    rgba(0, 87, 127, 0.72) 0px 12px 20px, rgba(0, 87, 127, 0.12) 0px 4px 6px,
    rgba(0, 87, 127, 0.17) 0px 12px 13px, rgba(0, 87, 127, 0.09) 0px -3px 5px;
`;

const PinkBox = styled.div`
  position: absolute;
  z-index: 11;
  bottom: 13%;
  right: 13%;
  width: 250px;
  height: 250px;
  background-color: #ed717f;
  border-radius: 62% 38% 71% 29% / 35% 57% 43% 65%;
  box-shadow: rgba(198, 116, 134, 0.25) 50px 30px 50px,
    rgba(198, 116, 134, 0.72) 0px 12px 20px,
    rgba(198, 116, 134, 0.12) 0px 4px 6px,
    rgba(198, 116, 134, 0.17) 0px 12px 13px,
    rgba(198, 116, 134, 0.09) 0px -3px 5px;
`;

const YellowBox = styled.div`
  position: absolute;
  z-index: 11;
  top: 5%;
  right: 25%;
  width: 130px;
  height: 130px;
  background-color: #f8b73b;
  border-radius: 82% 18% 33% 67% / 47% 22% 78% 53%;
  box-shadow: rgba(237, 113, 127, 0.65) 3px 4px 10px,
    rgba(237, 113, 127, 0.42) 10px 10px 12px;
`;

const BgBox = styled.div`
  position: absolute;
  z-index: 10;
  top: 0;
  right: 0;
  width: 740px;
  height: 100vh;
  border-radius: 15% 24% 0% 47% / 50% 0% 10% 50%;
  background-color: #f5ad92;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

const StyledBorder = styled.div`
  position: absolute;
  top: 80px;
  left: 47%;
  width: 370px;
  height: 500px;
  border: 7.5px solid #f3c09f;
  border-radius: 3px;
`;

const ScrollBtn = styled.button`
  position: absolute;
  z-index: 1;
  bottom: 5%;
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

const DownArrow = styled.img<ArrowProps>`
  position: absolute;
  bottom: 15px;
  z-index: 13;
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

const ArrowEffect = keyframes`
  from {
    opacity: 0;
    margin-bottom: 0px
  }

  to {
    opacity: 1;
    margin-bottom: 7px
  }
`;

export {
  Container,
  Wrapper,
  VerticalText,
  HorizontalText,
  PurpleBox,
  PinkBox,
  YellowBox,
  StyledBorder,
  BgBox,
  ScrollBtn,
  DownArrow,
};
