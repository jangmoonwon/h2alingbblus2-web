import React, { useState, useEffect } from "react";
import { Container, Wrapper } from "./styles";
// import  { Map, MapMarker } from "react-kakao-maps-sdk";

// 강화중앙교회 경도&위도 37.74528874052894, 126.48116906875377 //

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
      };
      const map = new kakao.maps.Map(container, options);

      const geocoder = new kakao.maps.services.Geocoder();
      // research coordinates from address
      geocoder.addressSearch(
        "인천광역시 강화군 강화읍 청하동길 36 강화중앙교회",
        function (result: any, status: any) {
          if (status === kakao.maps.services.Status.OK) {
            var coords = new kakao.maps.LatLng(result[0].y, result[0].x);

            // indication marker
            var marker = new kakao.maps.Marker({
              map: map,
              position: coords,
            });

            // custom location info
            var infowindow = new kakao.maps.InfoWindow({
              content:
                '<div style="width:150px;text-align:center;padding: 6px;color:#000;font-size:15px">강화중앙교회 입구</div>',
            });
            infowindow.open(map, marker);

            // move to center
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
      <div id="kakaomap" style={{ width: "360px", height: "360px" }}>
          {error ? (
            <p style={{ textAlign: "center", color: "darkgrey" }}>
              일시적인 오류로 인해 지도 확인이 불가능합니다
            </p>
          ) : undefined}
        </div>

      </Wrapper>
    </Container>
  );
}

export default Worship;
