import styled from "styled-components";

type ArrowProps = {
  isLeft: boolean;
};

type BackgroundProps = {
  background: string;
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: auto;
  scroll-snap-type: y mandatory;
`;

const Content = styled.div`
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 35px;
  font-weight: 600;
`;

const Images = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  background-image: red;
`;

const PickerWrapper = styled.div`
  position: absolute;
  z-index: 99;
  left: 50%;
  bottom: 10px;
  transform: translate(-50%, -10px);
  display: flex;
`;

const TextWrapper = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: 800;
  background-image: linear-gradient(
    to bottom,
    rgba(34, 34, 34, 0.75),
    rgba(44, 62, 80, 0.23)
  );
`;

const SlideDot = styled.div<BackgroundProps>`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${(props) => props.background};
  margin: 0 4px;
  cursor: pointer;
  border: 2px solid white;
`;

const Arrow = styled.div<ArrowProps>`
  width: 50px;
  height: 50px;
  background-color: transparent;
  border-radius: 20%;
  position: absolute;
  z-index: 99;
  top: 50%;
  ${(props) => (props.isLeft ? "left: 7px" : "right: 7px")};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: white;
  cursor: pointer;
  transition: 0.175s all ease-in;
  &:hover {
    background-color: rgba(255, 255, 255, 0.45);
  }
`;

export {
  Container,
  Content,
  Images,
  PickerWrapper,
  SlideDot,
  Arrow,
  TextWrapper,
};
