import React from "react";
import styled from "styled-components";
import Carousel from "../../components/Carousel";

function SecondPage() {
  return (
    <Container>
      <NoticeContainer>
        <SideLayout />
        <NoticeWrapper >
        <Carousel />
        </NoticeWrapper>
      </NoticeContainer>
    </Container>
  );
}

export default SecondPage;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #ffffff;
`;

const NoticeContainer = styled.div`
  display: flex;
  width: 60vw;
  height: 60vh;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const SideLayout = styled.div`
  display: flex;
  width: 20vw;
  height: 60vh;
  border-radius: 8px 0 0 8px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background-color: gray;
`;

const NoticeWrapper = styled.div`
  display: flex;
  width: 40vw;
  height: 60vh;
  border-radius: 0 8px 8px 0;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background-color: pink;
`;
