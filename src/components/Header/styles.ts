import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 130px;
  /* background-color: pink; */
  background-color: transparent;
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
  background-color: yellow;
  padding-right: 30px;
`;

const SideTabBtn = styled.button`
  background-color: transparent;
  border-color: transparent;
  cursor: pointer;
`;

const MainLogo = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
`;

const SideLogo = styled.img`
position: relative;
  width: 60px;
  height: 60px;
  background-color: green;
`;

const TextLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  font-weight: 600;
  text-decoration: none;
`;

export { Container, Content, TextLink, MainLogo, SideLogo, SideTabBtn, MainWrapper };
