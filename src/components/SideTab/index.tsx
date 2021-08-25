import React from "react";
import paths from "../../routes/paths.json";
import { Container, SideTabLayout, TextLink } from "./styles";

const SideTab = () => {
  return (
    <Container >
      
        <SideTabLayout>
          <TextLink to={paths.about}>about</TextLink>
        </SideTabLayout>
      
    </Container>
  );
};


export default SideTab;