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
          서울특별시: { lat: 37.5905, lng: 126.9906 },
          부산광역시: { lat: 35.2111, lng: 129.0783 },
          대구광역시: { lat: 35.8802, lng: 128.5566 },
          제주특별자치도: { lat: 33.2532, lng: 126.5618 }
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
  const fetchData = async (location, limit) => {
    console.log("데이터 패칭 시작");
    try {
      // URL에 PathVariable 추가
      const url = `http://43.203.35.140:8080/poll/sdName/${location}`;

      const response = await fetch(url, {
        method: "GET", // PathVariable은 보통 GET 요청에 많이 사용됩니다.
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log(response);

      if (!response.ok) throw new Error("서버 오류");

      const data = await response.json();

      console.log(data);

      const kakao = window.kakao;
      const geocoder = new kakao.maps.services.Geocoder();

      // 주소를 위도/경도로 반환하는 함수
      const addressToCoords = (address) => {
        return new Promise((resolve, reject) => {
          geocoder.addressSearch(address, (result, status) => {
            if (status === kakao.maps.services.Status.OK) {
              const coords = new kakao.maps.LatLng(result[0].y, result[0].x);
              resolve({ lat: coords.getLat(), lng: coords.getLng() });
            } else {
              reject(new Error("Geocoding 실패"));
            }
          });
        });
      };

      // 데이터를 변환 및 제한 (Promise.all로 비동기 병렬 처리)
      const limitedData = await Promise.all(
        data.slice(0, limit).map(async (item, index) => {
          try {
            const { lat, lng } = await addressToCoords(item.addr); // Geocoding 호출
            return {
              name: `${index + 1}. ${item.psName} (${item.placeName})`,
              lat,
              lng,
            };
          } catch (geoError) {
            console.error("Geocoding 실패:", geoError.message); // <--- 에러 메시지 출력 개선
            return {
              name: `${item.psName} (${item.placeName})`,
              lat: null,
              lng: null, // Geocoding 실패 시 null 값으로 처리
            };
          }
        })
      );

      console.log("Parsed Data:", limitedData);

      return limitedData;
    } catch (error) {
      console.error("통신 오류:", error.message);
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

  const handleSearch = async () => {
    if (!selectedRegion || !selectedValue) {
      alert("권역과 지역을 모두 선택하세요.");
      return;
    }

    // 서버에서 데이터 가져오기
    const data = await fetchData(selectedValue);

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
