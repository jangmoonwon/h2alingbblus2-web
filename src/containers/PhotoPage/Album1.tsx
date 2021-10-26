import React from "react";
import styled from "styled-components";

type ButtonProps = {
  history: any;
}

function Album1({ history }: ButtonProps) {
  return (
    <Container>
      <HeaderTitle>앨범 제목</HeaderTitle>
     <Wrapper />
      {/* <Prevbutton onClick={() => history.goBack()}>Back</Prevbutton> */}
    </Container>
  );
}

export default Album1;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background-color: ivory;
`;

const Wrapper = styled.div`
  position: relative;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 85vh;
  font-size: 35px;
  font-weight: 600;
  background-color: #f5ebe9;
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
  /* background-color: khaki; */
`;



// const Prevbutton = styled.button`
// left: 45%;
// bottom: 3%;
// width: 120px;
// height: 50px;
// border: transparent;
// border-radius: 23px;
// background-color: turquoise;
// font-size: 30px;
// `;
