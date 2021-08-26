import React from "react";
import paths from "../../routes/paths.json";
import {
  Container,
  SideBarLayout,
  TextLink,
  TextWrapper,
  SnsWrapper,
  SnsLink,
} from "./styles";

type SideBarProps = {
  active: any;
};

const SideBar = (props: SideBarProps) => {
  const { active } = props;

  return (
    <Container>
      <SideBarLayout active={active}>
        <TextWrapper>
          <TextLink to={paths.about}>about</TextLink>
          <TextLink to={paths.worship}>worship</TextLink>
          <TextLink to={paths.photo}>photo</TextLink>
        </TextWrapper>
        <SnsWrapper>
          <SnsLink href={"https://www.instagram.com/h2aling_bblus2/"}>
            <p>인스타</p>
          </SnsLink>
          <SnsLink href={"http://www.gcmch.org/kjmch/index_tong.asp"}>
            <p>강화중앙교회</p>
          </SnsLink>
          <SnsLink
            href={"https://www.youtube.com/channel/UCz3IrmZSylgR8i5uOQi4eaw"}
          >
            <p>유튜브</p>
          </SnsLink>
          <SnsLink
            href={"https://www.facebook.com/GanghwajungAngGyohoeCheongnyeonbu/"}
          >
            <p>페이스북</p>
          </SnsLink>
        </SnsWrapper>
      </SideBarLayout>
    </Container>
  );
};

export default SideBar;
