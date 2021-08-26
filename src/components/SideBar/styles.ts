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
  background-color: rgba(34, 34, 34, 0.5);
`;

const SideBarLayout = styled.div<SideBarLayoutProps>`
  justify-content: center;
  align-items: center;
  width: 30vw;
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 100;
  background-color: #f3f1f5;
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
  margin-top: 20vh;
  gap: 50px;
  width: 30vw;
  height: 40vh;
  /* background-color: palegoldenrod; */
`;

const SnsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-content: space-around;
  margin-top: 20vh;
  width: 30vw;
  height: 20vh;
  flex-direction: column;

  background-color: #FFE2E2;
`;

const TextLink = styled(Link)`
  text-align: center;
  font-size: 50px;
  font-weight: 600;
  text-decoration: none;
  color: #131313;
`;

const SnsLink = styled.a`
  display: flex;
  margin: 0 auto;
  font-size: 20px;
  font-weight: 600;
  text-decoration: none;
  color: #444941;
  /* background-color: violet; */
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

export { Container, SideBarLayout, TextLink, TextWrapper, SnsLink, SnsWrapper };
