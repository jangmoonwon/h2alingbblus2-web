import styled from "styled-components";

type TextProps = {
  title: string;
};

const Container = styled.div`
  /* background-image-size: 1440 X 790 */

  background-image: linear-gradient(
      to bottom,
      rgba(34, 34, 34, 0.7),
      rgba(44, 62, 80, 0.45)
    ),
    url("/images/mainImg.jpg");
  width: 100vw;
  height: 100vh;
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
`;

const Text = styled.text<TextProps>`
  font-size: ${(props) => {
    if (props.title === "main") return "100px";
    if (props.title === "sub") return "30px";
    return "12px";
  }};
  font-family: "NanumSquareExtraBold";
  font-weight: ${(props) => {
    if (props.title === "main") return 800;
    if (props.title === "sub") return 300;
  }};
  color: #f5ebe9;
  margin: 0;
  padding: 0;
`;

export { Container, Wrapper, Text };
