import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Content,
  MainLogo,
  SideLogo,
  SideTabBtn,
} from "./styles";
import paths from "../../routes/paths.json";
import SideTab from "../SideTab";

export default function Header() {
  const [open, setOpen] = useState(false);

  const onSideTabOpen = () => setOpen(!open);

  return (
    <Container>
      <Content>
        <Link to={paths.main}>
          <MainLogo src="/images/mainLogo.jpg" />
        </Link>
      </Content>
      <Content>
        {open && <SideTab />}
      </Content>
      <Content>
        <SideTabBtn onClick={onSideTabOpen}>
          <SideLogo
            src={open === false ? "/images/sidemenu.png" : "/images/close.png"}
          />
        </SideTabBtn>
      </Content>
    </Container>
  );
}
