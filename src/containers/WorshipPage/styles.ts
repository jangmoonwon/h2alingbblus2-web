import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: auto;
  scroll-snap-type: y mandatory;
`;

const Wrapper = styled.div`
  position: absolute;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 35px;
  font-weight: 600;
`;

const Text = styled.text`
text-align: center;
font-family: "NanumSquareExtraBold";
font-weight: 900;
font-size: 50px;
`;

const Hr = styled.hr`
width: 47px;
height: 3px;
background-color: black;
border: transparent;
`;

const Box = styled.div`
width: 100vw;
height: 100vh;
position: relative;
z-index: 3;
background-color: blue;
top: 100%;
overflow: auto;
`;

const Box2 = styled.div`
width: 100vw;
height: 100vh;
position: relative;
z-index: 5;
background-color: black;
opacity: 0.67;
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


export { Container, Wrapper, Map, ErrorText, Box, Box2, ScrollBtn, Text, Hr };
