import React from "react";
import paths from "../../routes/paths.json";
import {
  Container,
  SideBarLayout,
  TextLink,
  Wrapper,
  SnsLink,
  SnsLinkLogo,
} from "./styles";

type SideBarProps = {
  active: any;
};

const SideBar = (props: SideBarProps) => {
  const { active } = props;

  return (
    <Container>
      <SideBarLayout active={active}>
        <Wrapper label="textLink">
          <TextLink to={paths.about}>about</TextLink>
          <TextLink to={paths.worship}>worship</TextLink>
          <TextLink to={paths.photo}>photo</TextLink>
        </Wrapper>
        <Wrapper label="snsLink">
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
