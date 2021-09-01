import styled, { css, keyframes } from "styled-components";
import { Link } from "react-router-dom";

type SideBarLayoutProps = {
  active: any;
};

const Container = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 100;
  background-color: rgba(34, 34, 34, 0.7);
`;

const SideBarLayout = styled.div<SideBarLayoutProps>`
  justify-content: center;
  align-items: center;
  width: 27vw;
  height: 93vh;
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 100;
  background-color: #f5ebe9;
  border-radius: 17px;
  ${(props) => {
    if (props.active) {
      return css`
        animation: ${SideBarEffect} 0.45s;
      `;
    }
  }};
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 17vh 0 23vh 0;
  gap: 50px;
  width: 27vw;
  height: 40vh;
`;

const TextLink = styled(Link)`
  text-align: center;
  font-size: 50px;
  /* font-weight: 800; */
  text-decoration: none;
  color: #003638;
  &:hover {
    color: red;
  }
`;

const SnsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: auto;
  width: 25vw;
  height: 10vh;
  background-color: #d4c3c3;
  border-radius: 8px;
`;

const SnsLink = styled.a`
`;

const SnsLinkLogo = styled.img`
  width: 37px;
  height: 37px;
`;

const SideBarEffect = keyframes`
from {
  opacity: 0;
  margin-left: 30vw;
}

to {
  opacity: 1;
  margin-left: 0;
}
`;

export {
  Container,
  SideBarLayout,
  TextLink,
  TextWrapper,
  SnsLink,
  SnsWrapper,
  SnsLinkLogo,
};
