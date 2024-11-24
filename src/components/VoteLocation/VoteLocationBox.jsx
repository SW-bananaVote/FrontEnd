import styled from "styled-components";
import React, { useEffect, useRef, useState } from 'react';
import RegionSelector from "./RegionSelector/RegionSelector";
import ResultTable from "./ResultTable/ResultTable";

export const VoteLocationContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 0 0 2em 0;
  flex-direction: column;
  align-items: center;
`;

export const KakaoMap = styled.div`
  width: 45vw;  // 630
  height: 45vh; // 400
  border: 5px solid gray;
  border-radius: 3%;
`;

const VoteLocationBox = () => {
  const mapContainer = useRef(null);

  // 지역 상태 관리
  const [selectedRegion, setSelectedRegion] = useState("");
  const [selectedValue, setSelectedValue] = useState("");
  // 지도 관리
  const [map, setMap] = useState(null);
  const [markers, setMarkers] = useState([]);

  // ResultTable에 전달할 데이터
  const [markerData, setMarkerData] = useState([]);

  useEffect(() => {
    if (window.kakao && window.kakao.maps) {
      const kakao = window.kakao;
      const options = {
        center: new kakao.maps.LatLng(37.5665, 126.9780), // 기본 좌표 (서울)
        level: 8, // 확대 레벨
      };

      const map = new kakao.maps.Map(mapContainer.current, options);
      setMap(map);

      // 사용자가 지역을 선택했을 때 지도 중심 변경
      if (selectedValue) {
        const regionCoordinates = {
          서울: { lat: 37.5665, lng: 126.9780 },
          인천: { lat: 37.4563, lng: 126.7052 },
          경기도: { lat: 37.4138, lng: 127.5183 },
          대전: { lat: 36.3504, lng: 127.3845 },
          충청남도: { lat: 36.6589, lng: 126.6727 },
          충청북도: { lat: 36.6357, lng: 127.4917 },
          세종시: { lat: 36.4801, lng: 127.2890 },
          부산: { lat: 35.1796, lng: 129.0756 },
          대구: { lat: 35.8714, lng: 128.6014 },
          울산: { lat: 35.5396, lng: 129.3114 },
          경상남도: { lat: 35.4606, lng: 128.2132 },
          경상북도: { lat: 36.4919, lng: 128.8889 },
          광주: { lat: 35.1595, lng: 126.8526 },
          전라남도: { lat: 34.8679, lng: 126.9910 },
          전라북도: { lat: 35.7175, lng: 127.1530 },
          강원도: { lat: 37.8813, lng: 127.7298 },
          제주도: { lat: 33.4996, lng: 126.5312 },
        };

        const coords = regionCoordinates[selectedValue];
        if (coords) {
          const newCenter = new kakao.maps.LatLng(coords.lat, coords.lng);
          map.setCenter(newCenter); // 지도 중심 변경
        }
      }
    } else {
      console.error("Kakao Maps API를 불러오지 못했습니다.");
    }
  }, [selectedValue]); // 선택된 지역 변경 시 실행

  // 통신 처리 함수
  const fetchData = async (url, payload) => {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error("서버 오류");

      return await response.json();
    } catch (error) {
      console.error("통신 오류:", error);
      return null;
    }
  };

  // 마커 추가 및 지도 업데이트 함수
  const updateMapMarkers = (data) => {
    if (!map) {
      console.error("지도 객체(map)가 초기화되지 않았습니다.");
      return;
    }

    // 기존 마커 제거
    markers.forEach((marker) => marker.setMap(null));
    setMarkers([]);

    if (!data || data.length === 0) {
      alert("표시할 데이터가 없습니다.");
      return;
    }

    // 새 마커 추가 및 테이블 데이터 생성
    const newMarkers = [];
    const markerEntries = [];

    data.forEach((place) => {
      const marker = new window.kakao.maps.Marker({
        position: new window.kakao.maps.LatLng(place.lat, place.lng),
        map: map,
      });

      const infoWindow = new window.kakao.maps.InfoWindow({
        content: `<div style="padding:5px;">${place.name}</div>`,
      });

      // 마커에 마우스를 올렸을 때 정보창 표시
      window.kakao.maps.event.addListener(marker, "mouseover", () => {
        infoWindow.open(map, marker);
      });

      // 마커에서 마우스를 뗐을 때 정보창 닫기
      window.kakao.maps.event.addListener(marker, "mouseout", () => {
        infoWindow.close();
      });

      markerEntries.push({ name: place.name, lat: place.lat, lng: place.lng });
      newMarkers.push(marker);
    });

    setMarkers(newMarkers);
    setMarkerData(markerEntries);
  };

  // 검색 핸들러
  const handleSearch = async () => {
    if (!selectedRegion || !selectedValue) {
      alert("권역과 지역을 모두 선택하세요.");
      return;
    }

    // 서버에서 데이터 가져오기
    const data = await fetchData("백엔드 주소", {
      region: selectedRegion,
      location: selectedValue,
    });

    if (data) {
      updateMapMarkers(data);
    } else {
      // 서버 통신 실패 시 더미 데이터로 표시
      const dummyResponse = await fetch("/DummyData/VoteLocation/VoteLocation.json");
      if (dummyResponse.ok) {
        const dummyData = await dummyResponse.json();
        updateMapMarkers(dummyData);
      } else {
        alert("더미 데이터를 표시할 수 없습니다.");
      }
    }
  };

  const handleReset = () => {
    setSelectedRegion(""); // 권역 초기화
    setSelectedValue(""); // 지역 초기화
    setMarkerData([]); // 테이블 데이터 초기화

    if (map) {
      // 지도 중심 및 확대 레벨 초기화
      const defaultCenter = new window.kakao.maps.LatLng(37.5665, 126.9780); // 기본 좌표 (서울)
      map.setCenter(defaultCenter);
      map.setLevel(8);

      // 마커 제거
      markers.forEach((marker) => marker.setMap(null));
      setMarkers([]);
    }
  };

  return (
    <VoteLocationContainer>
      <h1>투표소 위치 조회</h1>
      {/* 지역 선택 컴포넌트에 상태와 변경 함수 전달 */}
      <RegionSelector
        selectedRegion={selectedRegion}
        setSelectedRegion={setSelectedRegion}
        selectedValue={selectedValue}
        setSelectedValue={setSelectedValue}
        onSearch={handleSearch}
        onReset={handleReset} />
      <KakaoMap ref={mapContainer} />
      {/* ResultTable에 markerData 전달 */}
      <ResultTable data={markerData} />
    </VoteLocationContainer>
  );
};

export default VoteLocationBox;
