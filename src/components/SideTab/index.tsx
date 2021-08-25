import React from "react";
import paths from "../../routes/paths.json";
import { Container, SideTabLayout, TextLink, TextWrapper } from "./styles";

const SideTab = () => {
  return (
    <Container>
      <SideTabLayout>
        <TextWrapper>
          <TextLink to={paths.about}>about</TextLink>
          <TextLink to={paths.worship}>worship</TextLink>
          <TextLink to={paths.photo}>photo</TextLink>
        </TextWrapper>
      </SideTabLayout>
    </Container>
  );
};

export default SideTab;
