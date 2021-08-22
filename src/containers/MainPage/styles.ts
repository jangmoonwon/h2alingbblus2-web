import styled from "styled-components";

const Container = styled.div`
  background-image: url("/images/dinosaur.png");
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  overflow: auto;
  scroll-snap-type: y mandatory;
`;

const Wrapper = styled.div`
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 35px;
  font-weight: 600;
`;

export { Container, Wrapper };
