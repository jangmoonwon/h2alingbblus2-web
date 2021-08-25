import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, MainWrapper, MainLogo, SideLogo, SideTabBtn, Content } from "./styles";
import paths from "../../routes/paths.json";
import SideTab from "../SideTab";

export default function Header() {
  const [open, setOpen] = useState(false);

  const onSideTabOpen = () => setOpen(!open);

  return (
    <Container>
      <MainWrapper>
        <Link to={paths.main}>
          <MainLogo src="/images/mainLogo.jpg" />
        </Link>
      </MainWrapper>
      <Content>
        {open && <SideTab />}
        <SideTabBtn onClick={onSideTabOpen}>
          <SideLogo
            src={open === false ? "/images/sidemenu.png" : "/images/close.png"}
          />
        </SideTabBtn>
      </Content>
    </Container>
  );
}
