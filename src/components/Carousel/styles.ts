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
`;

const PickerWrapper = styled.div`
  position: absolute;
  left: 50%;
  bottom: 10px;
  transform: translate(-50%, -10px);
  display: flex;
`;
const TextWrapper = styled.div`
  position: absolute;
  width: 50vw;
  height: 50vh;
  /* left: 50%;
  transform: translate(-50%, -50%); */
  z-index: 99999;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 100px;
  background-image: linear-gradient(
      to bottom,
      rgba(34, 34, 34, .45),
      rgba(44, 62, 80, 0.23)
    );
  
    /* border-radius: 30% 70% 20% 40% ; */
`;

const MainText = styled.text`
  font-size: 100px;
  text-align: center;
`;

const SlideDot = styled.div<BackgroundProps>`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${(props) => props.background};
  margin: 0 6px;
  cursor: pointer;
`;

const Arrow = styled.div<ArrowProps>`
  width: 50px;
  height: 50px;
  background-color: gray;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  ${(props) => (props.isLeft ? "left: 5px" : "right: 5px")};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: white;
  cursor: pointer;
`;

export {
  Container,
  Content,
  Images,
  PickerWrapper,
  SlideDot,
  Arrow,
  TextWrapper,
  MainText,
};
