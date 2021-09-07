import React from "react";
import styled from "styled-components";
import Carousel from "../../components/Carousel";

function SecondPage() {
  return (
    <Container>
      <NoticeWrapper>
        <Carousel />
      </NoticeWrapper>
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

const NoticeWrapper = styled.div`
  display: flex;
  width: 70vw;
  height: 65vh;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;