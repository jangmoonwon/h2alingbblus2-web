import styled from "styled-components";

const Container = styled.div`
  /* background-image-size: 1440 X 790 */

  background-image: linear-gradient(
      to bottom,
      rgba(34, 34, 34, 0.7),
      rgba(44, 62, 80, 0.45)
    ),
    url("/images/mainBg_1440.jpg");
  /* background-image: url("/images/mainBg_1440.jpg"); */
  width: 100vw;
  height: 100vh;
  object-fit: contain;
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
