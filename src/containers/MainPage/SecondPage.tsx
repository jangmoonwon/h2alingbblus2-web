import React from "react";
import styled from "styled-components";

function SecondPage() {
  return (
    <Container>
      <Div>
        <h3 style={{ color: "#fff" }}>청년부 공지사항</h3>
        <button>더 보기</button>
      </Div>
    </Container>
  );
}

/* <h1>게시판</h1>
      <p>게시판 이동 버튼 만들기</p> */

export default SecondPage;

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 70vw;
  height: 60vh;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const Div = styled.div`
  width: 25vw;
  height: 60vh;
  border-radius: 8px 0 0 8px;
  background: #f2994a; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to top,
    #f2c94c,
    #f2994a
  ); /* Chrome 10-25, Safari 5.1-6 */

  background: linear-gradient(
    to top,
    #f2c94c,
    #f2994a
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;
