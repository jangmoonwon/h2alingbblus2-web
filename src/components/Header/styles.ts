import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 170px;
  border-bottom: 1px solid #e5e5e5;
`;

const MainLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  text-decoration: none;
`;

const LinkWrapper = styled.div`
  display: flex;
  gap: 30px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 20px;
`;

const TextLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  text-decoration: none;
`;

export { Container, TextLink, MainLink, LinkWrapper };
