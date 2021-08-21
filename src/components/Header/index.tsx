import React from "react";
import { Container, LinkWrapper, MainLink, MainLogo, TextLink } from "./styles";
import paths from "../../routes/paths.json";

export default function Header() {
  return (
    <Container>
      <MainLink to={paths.main} >
        <MainLogo src= "/images/mainLogo.jpg"/>
      </MainLink>
      <LinkWrapper>
        <TextLink to={paths.about}>About</TextLink>
        <TextLink to={paths.worship}>Worship</TextLink>
        <TextLink to={paths.photo}>Photo</TextLink>
      </LinkWrapper>
    </Container>
  );
}
