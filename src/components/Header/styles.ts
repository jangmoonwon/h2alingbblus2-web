import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 130px;
  background-color: pink;
`;

const Content = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: yellow;
`;

const SideTabBtn = styled.button`
  position: absolute;
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
left: 100%;
  width: 60px;
  height: 60px;
`;

const TextLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  font-weight: 600;
  text-decoration: none;
`;

export { Container, Content, TextLink, MainLogo, SideLogo, SideTabBtn };
