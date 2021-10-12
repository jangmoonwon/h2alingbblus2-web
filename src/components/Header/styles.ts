import styled, { css } from "styled-components";

type SideBarBtnProps = {
  isOpen: boolean;
};

const Container = styled.div`
  display: flex;
  position: absolute;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 130px;
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
  padding: 30px;
`;

const SideBarBtn = styled.button<SideBarBtnProps>`
  position: absolute;
  z-index: 99999;
  top: 33px;
  right: 33px;
  width: 70px;
  height: 70px;
  background-color: #003638;
  border-color: transparent;
  border-radius: 50%;
  cursor: pointer;
  &:hover {
    background-color: #005659;
  }
  &:active {
    background: #002526;
  }
  transition: 0.125s all ease-in;
  ${(props) => {
    if (props.isOpen === true) {
      return css`
        background: #962d2d;
        &:hover {
          background: #ba3a3a;
        }
        &:active {
          background: #6e2222;
        }
        transform: rotate(45deg);
      `;
    }
  }};
`;

const MainLogo = styled.img`
  position: absolute;
  z-index: 99999;
  top: 33px;
  left: 33px;
  width: 70px;
  height: 70px;
  border-radius: 50%;
`;

const SideBarLogo = styled.img`
  width: 35px;
  height: 35px;
`;


export { Container, Content, MainLogo, SideBarLogo,  SideBarBtn, MainWrapper };