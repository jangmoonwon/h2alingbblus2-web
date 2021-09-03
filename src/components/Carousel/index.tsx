import React, { useState, useEffect, useCallback } from "react";
import { sildeImg } from "./slideImg";
import {
  Container,
  Images,
  PickerWrapper,
  Arrow,
  SlideDot,
  Content,
  TextWrapper,
} from "./styles";

const Carousel = (): JSX.Element => {
  const [pickers, setPickers] = useState<JSX.Element[]>([]);
  // 이미지 순서를 클릭하여 이동하는 pickers 배열
  const [pickIndex, setPickIndex] = useState<number>(0);
  // 기본으로 0번째 인덱스에 위치한 사진을 렌더링
  const [imageIndex, setImageIndex] = useState<number>(0);
  // 이미지 순서를 자동으로 이동하는 imageIndex 배열

  // 왼쪽 화살표 클릭
  const handlePrevClick = useCallback((): void => {
    if (pickIndex <= 0) {
      // state 업데이트 전, 해당 변수의 값이 0이라면

      setPickIndex(sildeImg.length - 1);
      // length의 -1로 지정하여 가장 마지막으로 이동한다.

      return;
    }

    setPickIndex(pickIndex - 1);
    // 인덱스 감소
  }, [pickIndex]);

  // 오른쪽 화살표 클릭
  const handleNextClick = useCallback((): void => {
    if (pickIndex + 1 === sildeImg.length) {
      // +1 했을 때, 배열의 인덱스를 벗어난다면

      setPickIndex(0);
      // 0으로 설정하여 가장 첫번째로 이동

      return;
    }

    setPickIndex(pickIndex + 1);
    // 인덱스 증가
  }, [pickIndex]);

  const onPickIndex = useCallback(
    (idx: number): void => {
      if (pickIndex === idx) {
        // 선택되어 있는 인덱스를 클릭시에는 아무것도 실행하지 않는다.
        return;
      }
      setPickIndex(idx);
    },
    [pickIndex]
  );

  useEffect(() => {
    setPickers(
      sildeImg.map((_, idx) => {
        return (
          <SlideDot
            onClick={() => onPickIndex(idx)}
            background={pickIndex === idx ? "white" : "transparent"}
            key={idx}
          >
            {/* state pickIndex와 자신의 idx가 같을시 색깔을 다르게 준다. */}
          </SlideDot>
        );
      })
    );
  }, [onPickIndex, pickIndex]);

  useEffect(() => {
    setImageIndex(0);
    const imageInterval = setInterval(() => {
      handlePrevClick();
      handleNextClick();
    }, 5000);
    return () => {
      clearInterval(imageInterval);
    };
  }, [imageIndex, handleNextClick, handlePrevClick]);

  return (
    <Container>
      <Content>
        <Images
          src={sildeImg[pickIndex]}
          style={{ backgroundColor: "ivory" }}
        />
        {/* pickIndex라는 state 변수를 이용하여 그에 맞는 이미지 렌더링 */}
        <Arrow isLeft={true} onClick={handlePrevClick}>
          @
        </Arrow>
        <Arrow isLeft={false} onClick={handleNextClick}>
          @
        </Arrow>
        <PickerWrapper>{pickers}</PickerWrapper>
        <TextWrapper>
          <h2>MINISTRY</h2>
          <div style={{ marginTop: "30px" }}>
            <h3>Scroll To</h3>
            <img src="/images/mouse.png" alt="mouse" />
          </div>
        </TextWrapper>
      </Content>
    </Container>
  );
};

export default Carousel;
