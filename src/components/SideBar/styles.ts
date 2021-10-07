import styled, { css, keyframes } from "styled-components";
import { NavLink } from "react-router-dom";

type SideBarLayoutProps = {
  active: any;
};

type WrapperProps = {
  desc: string;
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
  position: absolute;
  width: 27vw;
  height: 93vh;
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

const Wrapper = styled.div<WrapperProps>`
  display: flex;
  flex-direction: ${(props) => {
    if (props.desc === "textLink") return "column";
    if (props.desc === "snsLink") return "row";
  }};
  justify-content: ${(props) => {
    if (props.desc === "textLink") return "center";
    if (props.desc === "snsLink") return "space-around";
  }};
  align-items: center;
  margin: auto;
  width: 25vw;
  height: ${(props) => {
    if (props.desc === "textLink") return "40vh";
    if (props.desc === "snsLink") return "10vh";
  }};
  background-color: ${(props) => {
    if (props.desc === "textLink") return "transparent";
    if (props.desc === "snsLink") return "#d4c3c3";
  }};
  border-radius: ${(props) => {
    if (props.desc === "textLink") return "none";
    if (props.desc === "snsLink") return "8px";
  }};
  box-shadow: ${(props) => {
    if (props.desc === "textLink") return "none";
    if (props.desc === "snsLink") return "rgba(0, 0, 0, 0.24) 0px 3px 8px";
  }};
  margin-top: 150px;
`;

const TextLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  font-size: 50px;
  font-family: "NanumSquareExtraBold";
  font-weight: 400;
  text-decoration: none;
  color: #003638;
  width: 17vw;
  height: 11vh;
  &:hover {
    color: #00a5ab;
    background-color: #d6d4d4;
    border-radius: 15px;
  }
  &:active {
    color: #00858a;
  }
  &.active {
    color: #00a5ab;
    border-radius: 15px;
  }
`;

const CloseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  width: 17vw;
  height: 11vh;
  background-color: transparent;
  border: transparent;
`;

const SnsLink = styled.a``;

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
  Wrapper,
  TextLink,
  CloseButton,
  SnsLink,
  SnsLinkLogo,
};
