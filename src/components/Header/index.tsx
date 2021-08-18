import React from "react";
import { Container, LinkWrapper, MainLink, TextLink } from "./styles";
import paths from "../../routes/paths.json";

export default function Header() {
  return (
    <Container>
      <h2>header</h2>
      <MainLink to={paths.main}>(Main)</MainLink>
      <LinkWrapper>
        <TextLink to={paths.about}>About</TextLink>
        <TextLink to={paths.worship}>Worship</TextLink>
        <TextLink to={paths.photo}>Photo</TextLink>
      </LinkWrapper>
    </Container>
  );
}
