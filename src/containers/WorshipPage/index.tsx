import React, { useState, useEffect, useRef } from "react";
import {
  Container,
  Wrapper,
  Map,
  ErrorText,
  Box,
  Box2,
  ScrollBtn,
  Text,
  Hr,
} from "./styles";

declare global {
  interface Window {
    kakao: any;
  }
}

const { kakao } = window;

function Worship() {
  const [error, setError] = useState(false);

  const TopRef = useRef<any>();
  const scrollToTop = () => {
    TopRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    try {
      const container = document.getElementById("kakaomap");
      const options = {
        center: new kakao.maps.LatLng(37.745054, 126.481176),
        level: 3,
        draggable: false,
      };
      const map = new kakao.maps.Map(container, options);

      const geocoder = new kakao.maps.services.Geocoder();

      geocoder.addressSearch(
        "인천광역시 강화군 강화읍 청하동길 36 강화중앙교회",
        function (result: any, status: any) {
          if (status === kakao.maps.services.Status.OK) {
            var coords = new kakao.maps.LatLng(result[0].y, result[0].x);
            var marker = new kakao.maps.Marker({
              map: map,
              position: coords,
            });
            var infowindow = new kakao.maps.InfoWindow({
              content:
                '<div style="width:150px;text-align:center;padding: 6px;color:#000;font-size:15px">강화중앙교회 입구</div>',
            });
            infowindow.open(map, marker);
            map.setCenter(coords);
          }
        }
      );
    } catch (error) {
      console.log("cannot use kakaomap api, please check your URL");
      setError(true);
    }
  }, []);

  return (
    <Container>
      <Wrapper>
        <Text>WORSHIP</Text>
        <Hr />
        <ScrollBtn onClick={scrollToTop}>지도보기</ScrollBtn>
      </Wrapper>
      <Box>
        <h1>1</h1>
      </Box>
      <Box2 ref={TopRef}>
      <Map id="kakaomap">
          {error ? (
            <ErrorText>
              일시적인 오류로 인해 지도 확인이 불가능합니다.
            </ErrorText>
          ) : undefined}
        </Map>
      </Box2>
    </Container>
  );
}

export default Worship;
