import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #e5e5e5;
  background-color: #e5e5e5;
  height: 20vh;
`;

const LinkWrapper = styled.div`
  display: flex;
  gap: 40px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const LogoLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  text-decoration: none;
`;

export { Container, LinkWrapper, LogoLink };
