import React, { useState } from "react";

const RegionSelector = () => {
  const regions = {
    수도권: ["서울", "인천", "경기도"],
    충청권: ["대전", "충청남도", "충청북도", "세종시"],
    영남권: ["부산", "대구", "울산", "경상남도", "경상북도"],
    호남권: ["광주", "전라남도", "전라북도"],
    강원권: ["강원도"],
    제주권: ["제주도"],
  };

  const [selectedRegion, setSelectedRegion] = useState(""); // 선택된 권역
  const [selectedValue, setSelectedValue] = useState(""); // 선택된 지역

  return (
    <div>
      <h1>지역 선택</h1>

      {/* 첫 번째 드롭다운: 권역 선택 */}
      <select
        value={selectedRegion}
        onChange={(e) => {
          setSelectedRegion(e.target.value);
          setSelectedValue(""); // 두 번째 드롭다운 초기화
        }}
      >
        <option value="">권역을 선택하세요</option>
        {Object.keys(regions).map((region) => (
          <option key={region} value={region}>
            {region}
          </option>
        ))}
      </select>

      {/* 두 번째 드롭다운: 지역 선택 */}
      <select
        value={selectedValue}
        onChange={(e) => setSelectedValue(e.target.value)}
        disabled={!selectedRegion} // 첫 번째 드롭다운이 선택되지 않으면 비활성화
      >
        <option value="">지역을 선택하세요</option>
        {selectedRegion &&
          regions[selectedRegion].map((value) => (
            <option key={value} value={value}>
              {value}
            </option>
          ))}
      </select>


      <p>선택한 지역: <strong>{selectedRegion ? selectedRegion : "권역"} - {selectedValue ? selectedValue : "지역"}</strong></p>
    </div>
  );
};

export default RegionSelector;
