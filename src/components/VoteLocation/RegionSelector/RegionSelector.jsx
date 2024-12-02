import React from "react";
import {
  RegionContainer, 
  Result, 
  Guide, 
  Selector, 
  Select, 
  Button
} from "./RegionSelectorStyle";

const RegionSelector = ({ selectedRegion, setSelectedRegion, selectedValue, setSelectedValue, onSearch, onReset }) => {
  const regions = {
    수도권: ["서울특별시"],
    영남권: ["부산광역시", "대구광역시", "울산광역시"],
    충청권: ["대전광역시"],
    강원권: ["강원특별자치도"],
    제주권: ["제주특별자치도"]
  };

  return (
    <RegionContainer>
      <Result>
        <Guide>
          선택한 지역: <strong>{selectedRegion || "권역"} - {selectedValue || "지역"}</strong>
        </Guide>

        <Selector>
          <Select
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
          </Select>

          <Select
            value={selectedValue}
            onChange={(e) => setSelectedValue(e.target.value)}
            disabled={!selectedRegion}
          >
            <option value="">지역을 선택하세요</option>
            {selectedRegion &&
              regions[selectedRegion].map((value) => (
                <option key={value} value={value}>
                  {value}
                </option>
              ))}
          </Select>
          <Button onClick={onSearch}>🔍︎</Button>
          <Button onClick={onReset}>초기화</Button>
        </Selector>
      </Result>
    </RegionContainer>
  );
};

export default RegionSelector;
