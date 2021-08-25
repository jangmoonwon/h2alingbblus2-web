import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 100;
  background-color: rgba(34, 34, 34, 0.5);
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20vh;
  gap: 40px;
  width: 30vw;
  height: 40vh;
  background-color: violet;
`;

const SideTabLayout = styled.div`
  width: 30vw;
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 100;
  background-color: rgba(235, 227, 202, 1);
`;

const TextLink = styled(Link)`
  /* margin: 50px; */
  text-align: center;
  font-size: 30px;
  font-weight: 600;
  text-decoration: none;
  background-color: greenyellow;
`;

export { Container, SideTabLayout, TextLink, TextWrapper };
