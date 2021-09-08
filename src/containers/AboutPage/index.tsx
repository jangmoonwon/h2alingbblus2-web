import React, { useRef } from "react";
import {
  Container,
  TextContainer,
  StyledBox,
  StyledBox2,
  StyledBorder,
  Text,
  ProfileContainer,
  ProfileLayout,
  ProfileComment,
  Profile,
} from "./styles";

function AboutPage() {
  const buttonRef = useRef<any>();
  const scrollToTop = () => {
    window.scrollTo({
      behavior: "smooth",
      top: buttonRef.current.offsetTop,
    });
  };

  return (
    <Container>
      <StyledBox />
      <StyledBox2 />
      <StyledBorder />
      <TextContainer ref={buttonRef}>
        <Text>
          사랑스럽고, <br />
          과즙미넘치는 <br />
          유쾌하고,
          <br />
          자유로운
          <br />
          청년부
        </Text>
      </TextContainer>
      <ProfileContainer>
        <ProfileLayout>
          <ProfileComment>
            <h3>"Hello"</h3>
          </ProfileComment>
          <Profile>
            <h3>목사님</h3>
          </Profile>
        </ProfileLayout>
        <ProfileLayout />
      </ProfileContainer>
      <button type="button" onClick={scrollToTop}>
        Btn
      </button>
    </Container>
  );
}

export default AboutPage;
