import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, MainLogo, SideLogo, SideTabBtn, Content } from "./styles";
import paths from "../../routes/paths.json";
import SideBar from "../SideBar";

 function Header() {
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const OpenSideBar = () => setSideBarOpen(!sideBarOpen);

  return (
    <Container>
      <Content >
        <Link to={paths.main}>
          <MainLogo src="/images/mainLogo.jpg" />
        </Link>
      </Content>
      <Content>
        {sideBarOpen && <SideBar active/>}
        <SideTabBtn onClick={OpenSideBar}>
          <SideLogo
            src={
              sideBarOpen === false
                ? "/images/more.png"
                : "/images/close.png"
            }
          />
        </SideTabBtn>
      </Content>
    </Container>
  );
}

export default Header;