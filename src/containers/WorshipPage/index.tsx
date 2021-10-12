import React, { useEffect, useState } from "react";
import { Container, Wrapper } from "./styles";

// 37.74528874052894, 126.48116906875377 //
declare global {
  interface Window {
    kakao: any;
  }
}

const { kakao } = window;

function Worship() {
  const [error, setError] = useState(false);
  useEffect(() => {
    // create map
    try {
      const container = document.getElementById("kakaomap");
      const options = {
        center: new kakao.maps.LatLng(37.74528874052894, 126.48116906875377),
        level: 3,
      };

      const map = new kakao.maps.Map(container, options);

      // create address-coordinates change obj
      const geocoder = new kakao.maps.services.Geocoder();
      // research coordinates from address
      geocoder.addressSearch(
        "인천 강화군 강화읍 충렬사로 138",
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
                '<div style="width:150px;text-align:center;padding:6px 0;color:#000;">Here!</div>',
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
        <div
          id="kakaomap"
          style={{
            width: "500px",
            height: "500px",
          }}
        >
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
