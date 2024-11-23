import styled from "styled-components";
import React, { useEffect, useRef } from 'react';
import RegionSelector from "./RegionSelector";

export const VoteLocationContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 0 0 2em 0;
  flex-direction: column;
  align-items: center;
`

export const KakaoMap = styled.div`
  width: 500px;
  height: 400px;
  border: 1px solid gray;

`

/*
수도권: 서울, 인천, 경기도
충청권: 대전, 충청남도, 충청북도, 세종시
영남권: 부산, 대구, 울산, 경상남도, 경상북도
호남권: 광주, 전라남도, 전라북도
강원권: 강원도
제주권: 제주도
*/

const VoteLocationBox = () => {
  const mapContainer = useRef(null);

  useEffect(() => {
    // Kakao API가 로드되었는지 확인
    if (window.kakao && window.kakao.maps) {
      const kakao = window.kakao;
      const options = {
        center: new kakao.maps.LatLng(37.5665, 126.9780), // 서울 중심 좌표
        level: 3, // 확대 레벨
      };

      // 지도 생성
      new kakao.maps.Map(mapContainer.current, options);
    } else {
      console.error('Kakao Maps API를 불러오지 못했습니다.');
    }
  }, []);

  return (
    <VoteLocationContainer>
      <RegionSelector/>
      <KakaoMap ref={mapContainer} />
    </VoteLocationContainer>
  );
}

export default VoteLocationBox;

  /* 마커 추가
  const markerPosition = new kakao.maps.LatLng(37.5665, 126.9780); // 마커 좌표
  const marker = new kakao.maps.Marker({
    position: markerPosition,
  });
  marker.setMap(map);
  */