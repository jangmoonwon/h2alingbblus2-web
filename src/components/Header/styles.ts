import styled from "styled-components";

const Container = styled.div`
  display: flex;
  position: absolute;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 130px;
  /* background-color: pink; */
`;

const MainWrapper = styled.div`
  justify-content: center;
  align-items: center;
  background-color: blue;
  padding-left: 30px;
`;

const Content = styled.div`
  justify-content: center;
  align-items: center;
  /* background-color: yellow; */
  padding: 30px;
`;

const SideTabBtn = styled.button`
  position: absolute;
  z-index: 99999;
  top: 30px;
  right: 30px;
  background-color: transparent;
  border-color: transparent;
  cursor: pointer;
`;

const MainLogo = styled.img`
  position: absolute;
  z-index: 99999;
  top: 30px;
  left: 30px;
  width: 80px;
  height: 80px;
  border-radius: 50%;
`;

const SideLogo = styled.img`
  position: relative;
  bottom: 17px;
  width: 80px;
  height: 80px;
  /* background-color: green; */
`;

export { Container, Content, MainLogo, SideLogo, SideTabBtn, MainWrapper };
