import React from "react";
import styled from "styled-components";
import Carousel from "../../components/Carousel";

function SecondPage() {
  return (
    <Container>
      <NoticeContainer>
        <Carousel />
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
  background-color: #262526;
`;

const NoticeContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 70vh;
  background-color: #b8a89a;
`;
