import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.6);
`;

// const OpenSideTab = styled.section`
//   display: inline;
//   width: 330px;
//   max-width: 450px;
//   margin-left: auto;
//   border-radius: 0.3rem;
//   overflow: hidden;
//   background-color: brown;
// `;

const SideTabLayout = styled.div`
  width: 50vh;
  height: 100vh;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 100;
  background-color: rgba(235, 227, 202, 0.3);
  overflow-x: hidden;
  transform: matrix(1, 0, 0, 1, 1, 0);
  transition: all 0.5s;
  display: table-cell;
  vertical-align: middle;
`;

const TextLink = styled(Link)`
  font-size: 30px;
  font-weight: 600;
  text-decoration: none;
  padding-left: 80px;
  background-color: hotpink;
`;

export { Container, SideTabLayout, TextLink };
