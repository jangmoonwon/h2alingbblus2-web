import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  MainLogo,
  SideBarLogo,
  SideBarBtn,
  Content,
} from "./styles";
import paths from "../../routes/paths.json";
import SideBar from "../SideBar";

function Header() {
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const ClickSideBar = () => setSideBarOpen(!sideBarOpen);

  return (
    <Container>
      <Content>
        <Link to={paths.main}>
          <MainLogo src="/images/mainLogo.jpg" alt="mainLogo" />
        </Link>
      </Content>
      <Content>
        {sideBarOpen && <SideBar active />}
        <SideBarBtn onClick={ClickSideBar} isOpen={sideBarOpen}>
          <SideBarLogo src="/images/plus.png" alt="sideBarMenu" />
        </SideBarBtn>
      </Content>
    </Container>
  );
}

export default Header;
