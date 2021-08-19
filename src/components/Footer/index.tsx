import React from "react";
import { Container, LinkWrapper, LogoLink } from "./styles";

export default function Footer() {
  return (
      <Container>
          <h1>Footer</h1>
      <LinkWrapper>
              <LogoLink href={"https://www.instagram.com/h2aling_bblus2/"}>
                  <p>인스타</p>
              </LogoLink>
              <LogoLink href={"https://www.youtube.com/channel/UCz3IrmZSylgR8i5uOQi4eaw"}>
                  <p>유튜브</p>
        </LogoLink>
      </LinkWrapper>
    </Container>
  );
}
