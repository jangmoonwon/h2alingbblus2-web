import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 170px;
  background-color: transparent;
`;

const MainLink = styled(Link)`
  font-size: 30px;
  text-decoration: none;
  margin: 20px;
`;

const MainLogo = styled.img`
  position: fixed;
  top: 30px;
  left: 30px;
  width: 80px;
  height: 80px;
  border-radius: 50%;
`;

const LinkWrapper = styled.div`
  display: flex;
  gap: 70px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
`;

const TextLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  font-weight: 600;
  text-decoration: none;
`;

export { Container, TextLink, MainLink, MainLogo, LinkWrapper };
