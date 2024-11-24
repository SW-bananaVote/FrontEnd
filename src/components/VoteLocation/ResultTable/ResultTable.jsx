import React, { useEffect, useState } from "react";
import {
  TableContainer,
  Table
} from "./ResultTableStyle";

const ResultTable = ({ data }) => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    if (!data || data.length === 0) {
      setTableData([]); // 데이터가 없으면 초기화
      return;
    }

    const fetchAddresses = async () => {
      if (!window.kakao || !window.kakao.maps || !window.kakao.maps.services) {
        console.error("Kakao Maps API가 로드되지 않았습니다.");
        return;
      }

      const geocoder = new window.kakao.maps.services.Geocoder();

      const promises = data.map((item) => {
        return new Promise((resolve) => {
          const coords = new window.kakao.maps.LatLng(item.lat, item.lng);
          geocoder.coord2Address(coords.getLng(), coords.getLat(), (result, status) => {
            if (status === window.kakao.maps.services.Status.OK) {
              const address = result[0]?.address?.address_name || "주소 없음";
              resolve({ ...item, address });
            } else {
              resolve({ ...item, address: "주소 조회 실패" });
            }
          });
        });
      });

      const results = await Promise.all(promises);
      setTableData(results);
    };

    fetchAddresses();
  }, [data]);

  if (!tableData || tableData.length === 0) {
    return <p style={{ textAlign: "center", color: "#555" }}>표시할 데이터가 없습니다.</p>;
  }

  return (
    <TableContainer>
      <Table>
        <thead>
          <tr>
            <th>이름</th>
            <th>주소</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.address}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </TableContainer>
  );
};

export default ResultTable;
