import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  align-items: center;
  /* position: fixed; */
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.6);
`;

const OpenSideTab = styled.section`
  width: 330px;
  max-width: 450px;
  margin-left: auto;
  border-radius: 0.3rem;
  overflow: hidden;
`;

const SideTabLayout = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  margin-bottom: auto;
  width: 40vw;
  height: 100vh;
  background-color: rgba(173, 142, 142, 0.3);
`;

const TextLink = styled(Link)`
  font-size: 30px;
  font-weight: 600;
  text-decoration: none;
  /* background-color: hotpink; */
`;

export { Container, OpenSideTab, SideTabLayout, TextLink };
