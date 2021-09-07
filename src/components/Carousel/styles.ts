import styled from "styled-components";

type ArrowProps = {
  isLeft: boolean;
};

type BackgroundProps = {
  background: string;
};

const Container = styled.div`
  width: 70vw;
  height: 65vh;
  border-radius: 8px;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 65vh;
`;

const Images = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  object-fit: fill;
`;

const PickerWrapper = styled.div`
  position: absolute;
  z-index: 99;
  left: 50%;
  bottom: 10px;
  transform: translate(-50%, -10px);
  display: flex;
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
  width: 60px;
  height: 60px;
  background-color: transparent;
  border-radius: 20%;
  position: absolute;
  z-index: 99;
  top: 50%;
  ${(props) => (props.isLeft ? "left: 5px" : "right: 5px")};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 45px;
  color: #131313;
  cursor: pointer;
  transition: 0.175s all ease-in;
  &:hover {
    background-color: rgba(204, 198, 198, 0.75);
  }
`;

export { Container, Content, Images, PickerWrapper, SlideDot, Arrow };
