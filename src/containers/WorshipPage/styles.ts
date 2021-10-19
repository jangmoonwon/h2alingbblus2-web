import styled from "styled-components";

type TextProps = {
  name: string;
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: auto;
  scroll-snap-type: y mandatory;
`;

const ScrollWrapper = styled.div`
  position: absolute;
  overflow: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: auto;
  height: auto;
`;

const Text = styled.text<TextProps>`
  text-align: center;
  font-family: "NanumSquareExtraBold";
  font-weight: ${(props) => {
    if (props.name === "h1Tag") return "900";
    if (props.name === "h2Tag") return "600";
    if (props.name === "pTag") return "300";
    return 600;
  }};

  font-size: ${(props) => {
    if (props.name === "h1Tag") return "100px";
    if (props.name === "h2Tag") return "27px";
    if (props.name === "pTag") return "30px";
    return "40px";
  }};
  /* color: #333333; */
  color: ${(props) => {
    if (props.name === "h1Tag" || props.name === "h1Tag" ) return "#333333";
    if (props.name === "pTag") return "#848484";
    return "#333333";
  }};
`;

const Hr = styled.hr`
  width: 50px;
  height: 3px;
  background-color: #333333;
  border: transparent;
  margin-bottom: 25px;
`;

const Box = styled.div`
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: auto;
`;

const Box2 = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  z-index: 5;
  background-color: whitesmoke;
  opacity: 1;
  top: 100%;
  overflow: auto;
`;

const ErrorText = styled.text`
  font-size: 50px;
  text-align: center;
  color: #adacac;
`;

const Map = styled.div`
  width: 80vw;
  height: 70vh;
`;

const ScrollBtn = styled.button`
  position: absolute;
  z-index: 10;
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

const Link = styled.a`
  text-decoration: none;
  font-weight: 600;
  color: #333333;
  &:hover {
    color: #adacac;
    transition: 0.125s all ease-in;
  }
`;

export {
  Container,
  ScrollWrapper,
  Map,
  ErrorText,
  Box,
  Box2,
  ScrollBtn,
  Text,
  Hr,
  Link,
};
