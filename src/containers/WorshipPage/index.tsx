import React, { useState, useEffect } from "react";
import {
  Container,
  ScrollWrapper,
  Map,
  ErrorText,
  Text,
  Hr,
  Link,
  BibleVerse,
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
        <Text name="h1Tag">WORSHIP</Text>
        <Hr />
        <Text name="h2Tag">강화중앙교회 청년부 토요예배</Text>
        <br />
        <Text name="pTag">
          강화중앙교회 청년부 토요예배는 매주 토요일 오후 6시, <br />
          인천광역시 강화군 강화읍 신문리에 위치한{" "}
          <Link href="http://www.gcmch.org/kjmch/index_tong.asp">
            강화중앙교회
          </Link>
          에서 예배드리고 있습니다.
          <br />
          청년부예배는{" "}
          <Link href="https://www.youtube.com/channel/UCz3IrmZSylgR8i5uOQi4eaw">
            YouTube
          </Link>
          라이브 송출, 대면예배로 동시진행되고 있습니다.
          <br />
          <br />
          <br />
        </Text>
        <BibleVerse>
          오직 여호와를 앙망하는 자는 새 힘을 얻으리니 독수리가 날개치며 올라감
          같을 것이요
          <br />
          달음박질하여도 곤비하지 아니하겠고 걸어가도 피곤하지 아니하리로다.
          <br />
          <br />
          이사야 40:31
        </BibleVerse>
        <br />
        <br />
        <br />
        <Text name="pTag">
          찬양과 예배를 통해 힘들고 지쳤던 마음들을 위로받으며,
          <br />
          독수리가 날개치며 올라감 같이 새 힘을 얻으시는 건 어떠신가요?
        </Text>
        <Text name="h1Tag">LOCATION</Text>
        <Hr />
        <Text name="h2Tag">강화중앙교회 위치 안내</Text>
        <Map id="kakaomap">
          {error ? (
            <ErrorText>일시적인 오류로 지도를 올 수 없습니다.</ErrorText>
          ) : undefined}
        </Map>
      </ScrollWrapper>
    </Container>
  );
}

export default Worship;
