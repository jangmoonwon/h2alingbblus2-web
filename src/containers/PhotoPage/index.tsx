import React, { useRef } from "react";
import svg from "/images/test.svg";
import {
  Container,
  PhotoBox,
  Text,
  Wrapper,
  ScrollBtn,
  AlbumCard,
  RightStyledBook,
  LeftStyledBook,
} from "./styles";

function PhotoPage() {
  const buttonRef = useRef<any>();
  const scrollToBottom = () => {
    buttonRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <Container>
      <Wrapper name="mainPage">
        <PhotoBox />
        <Text name="desc1">우리 청년부의</Text>
        <Text name="desc2">사진첩</Text>
        <ScrollBtn onClick={scrollToBottom}>밑으로 가기</ScrollBtn>
      </Wrapper>
      <Wrapper
        name="subPage"
        ref={buttonRef}
        style={{
          flexDirection: "row",
        }}
      >
        <AlbumCard isLeft={true} />
        <AlbumCard isLeft={false} />
      </Wrapper>
      <Wrapper
        name="mainPage"
        style={{
          flexDirection: "row",
        }}
      >
        <LeftStyledBook />
        <RightStyledBook>
          <svg
            id="visual"
            viewBox="0 0 550 609"
            width="550"
            height="609"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            version="1.1"
          >
            <rect x="0" y="0" width="550" height="609" fill="#e5eaee"></rect>
            <defs>
              <linearGradient id="grad1_0" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="30%" stop-color="#e89c2b" stop-opacity="1"></stop>
                <stop offset="70%" stop-color="#e89c2b" stop-opacity="1"></stop>
              </linearGradient>
            </defs>
            <defs>
              <linearGradient id="grad1_1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="30%" stop-color="#e89c2b" stop-opacity="1"></stop>
                <stop offset="70%" stop-color="#e5eaee" stop-opacity="1"></stop>
              </linearGradient>
            </defs>
            <defs>
              <linearGradient id="grad2_0" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="30%" stop-color="#e89c2b" stop-opacity="1"></stop>
                <stop offset="70%" stop-color="#e89c2b" stop-opacity="1"></stop>
              </linearGradient>
            </defs>
            <defs>
              <linearGradient id="grad2_1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="30%" stop-color="#e5eaee" stop-opacity="1"></stop>
                <stop offset="70%" stop-color="#e89c2b" stop-opacity="1"></stop>
              </linearGradient>
            </defs>
            <g transform="translate(550, 0)">
              <path
                d="M0 389.8C-50.5 385.3 -101 380.7 -149.2 360.1C-197.3 339.5 -243.2 302.7 -256.7 256.7C-270.1 210.6 -251.1 155.3 -267.9 111C-284.7 66.7 -337.2 33.3 -389.8 0L0 0Z"
                fill="#88dbb4"
              ></path>
              <path
                d="M0 194.9C-25.2 192.6 -50.5 190.4 -74.6 180.1C-98.7 169.7 -121.6 151.4 -128.3 128.3C-135.1 105.3 -125.6 77.7 -134 55.5C-142.4 33.3 -168.6 16.7 -194.9 0L0 0Z"
                fill="#e89c2b"
              ></path>
            </g>
            <g transform="translate(0, 609)">
              <path
                d="M0 -389.8C53.5 -386.6 107.1 -383.4 149.2 -360.1C191.3 -336.8 222 -293.5 256 -256C290 -218.4 327.3 -186.7 350.2 -145C373 -103.3 381.4 -51.7 389.8 0L0 0Z"
                fill="#88dbb4"
              ></path>
              <path
                d="M0 -194.9C26.8 -193.3 53.5 -191.7 74.6 -180.1C95.6 -168.4 111 -146.8 128 -128C145 -109.2 163.6 -93.4 175.1 -72.5C186.5 -51.7 190.7 -25.8 194.9 0L0 0Z"
                fill="#e89c2b"
              ></path>
            </g>
          </svg>
        </RightStyledBook>
      </Wrapper>
    </Container>
  );
}

export default PhotoPage;
