import React, { useState } from "react";
import paths from "../../routes/paths.json";
import {
  Container,
  SideBarLayout,
  TextLink,
  CloseButton,
  Wrapper,
  SnsLink,
  SnsLinkLogo,
} from "./styles";

type SideBarProps = {
  active: any;
  close: any;
};

const SideBar = (props: SideBarProps) => {
  const { active, close } = props;

  const [linkClose, setLinkClose] = useState(false);
  const handleClose = () => setLinkClose(!linkClose);

  return (
    <Container>
      <SideBarLayout active={active}>
        <Wrapper desc="textLink">
          <CloseButton onClick={close}>
            <TextLink to={paths.about} onClick={handleClose}>
              소개
            </TextLink>
          </CloseButton>
          <CloseButton onClick={close}>
            <TextLink to={paths.worship} onClick={handleClose}>
              예배안내
            </TextLink>
          </CloseButton>
          <CloseButton onClick={close}>
            <TextLink to={paths.photo} onClick={handleClose}>
              사진첩
            </TextLink>
          </CloseButton>
        </Wrapper>
        <Wrapper desc="snsLink">
          <SnsLink href={"https://www.instagram.com/h2aling_bblus2/"}>
            <SnsLinkLogo src="/images/instagram.png" alt="instagram" />
          </SnsLink>
          <SnsLink
            href={"https://www.facebook.com/GanghwajungAngGyohoeCheongnyeonbu/"}
          >
            <SnsLinkLogo src="/images/facebook.png" alt="facebook" />
          </SnsLink>
          <SnsLink
            href={"https://www.youtube.com/channel/UCz3IrmZSylgR8i5uOQi4eaw"}
          >
            <SnsLinkLogo src="/images/youtube.png" alt="youtube" />
          </SnsLink>
          <SnsLink href={"http://www.gcmch.org/kjmch/index_tong.asp"}>
            <SnsLinkLogo src="/images/church.png" alt="church" />
          </SnsLink>
        </Wrapper>
      </SideBarLayout>
    </Container>
  );
};

export default SideBar;
