import React, { useState, useEffect } from "react";
import {
  Container,
  ScrollWrapper,
  Box,
  Box2,
  Map,
  ErrorText,
  Text,
  Hr,
  Link,
} from "./styles";

declare global {
  interface Window {
    kakao: any;
  }
}

const { kakao } = window;

function Worship() {
  const [error, setError] = useState(false);

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
      <ScrollWrapper>
        <Box>
          <Text name="h1Tag">WORSHIP</Text>
          <Hr />
          <Text name="h2Tag" style={{marginBottom: "30px"}}>강화중앙교회 청년부 토요예배</Text>

          <Text name="pTag">
            강화중앙교회 청년부 토요예배는 매주 토요일 오후 6시, <br />
            인천광역시 강화군 강화읍 신문리에 위치한{" "}
            <Link href="http://www.gcmch.org/kjmch/index_tong.asp">
              강화중앙교회
            </Link>
            에서 예배드리고 있습니다.
            <br />
            .<br />

          </Text>
        </Box>
        <Box2>
          <Map id="kakaomap">
            {error ? (
              <ErrorText>일시적인 오류로 지도를 올 수 없습니다.</ErrorText>
            ) : undefined}
          </Map>
        </Box2>
      </ScrollWrapper>
    </Container>
  );
}

export default Worship;
