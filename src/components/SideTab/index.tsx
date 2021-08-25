import React from "react";
import paths from "../../routes/paths.json";
import { Container, OpenSideTab, SideTabLayout, TextLink } from "./styles";

const SideTab = () => {
  return (
    <Container >
      <OpenSideTab >
        <SideTabLayout>
          <TextLink to={paths.about}>about</TextLink>
          <TextLink to={paths.worship}>worship</TextLink>
          <TextLink to={paths.photo}>photo</TextLink>
        </SideTabLayout>
      </OpenSideTab>
    </Container>
  );
};

// const SideTab = () => {
//   return (
//     <div>
//       <h1>side</h1>
//     </div>
//   );
// }


export default SideTab;
