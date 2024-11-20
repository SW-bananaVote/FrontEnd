import react, { useEffect, useState } from 'react';
import VoteBox from "./VoteBox/VoteBox/VoteBox";
import SearchBar from "./SearchBar/SearchBar";
import {VoteInfoContainer} from "./VoteInfoBoxStyle";

const VoteInfoBox = () => {
  const [data, setData] = useState([]); // 전체 데이터
  const [filteredData, setFilteredData] = useState([]); // 검색된 데이터

  useEffect(() => {
    const fetchData = async () => {
      try {
        // 서버에서 데이터 가져오기 시도
        const response = await fetch("https://localhost:8080/get/voteinfo");
        const serverData = await response.json();
        setData(serverData);
        setFilteredData(serverData); // 초기 데이터로 필터링 데이터 설정
        // alert
        alert('서버에서 데이터 가져오기');
      } catch (error) {
        const localResponse = await fetch('/DummyData/VoteInfo/VoteInfo.json');
        const localData = await localResponse.json();
        setData(localData);
        setFilteredData(localData); // 초기 데이터로 필터링 데이터 설정
        // alert
        alert('로컬에서 더미데이터 가져오기');
      }
    }

    fetchData();
  }, []);

  const handleSearch = (searchType, searchQuery) => {
    const lowerQuery = searchQuery.toLowerCase();
  
    const filtered = data.filter((item) => {
      // 각 필드가 undefined일 경우 빈 문자열로 처리
      const title = item.word ? item.word.toLowerCase() : ""; // word 필드를 사용
      const content = item.content ? item.content.toLowerCase() : ""; // content 필드는 그대로 사용
  
      // searchType에 따라 검색 대상 필드 결정
      if (searchType === 'title') {
        return title.includes(lowerQuery); // 제목에서 검색 (word 필드 사용)
      }
      if (searchType === 'content') {
        return content.includes(lowerQuery); // 내용에서 검색 (content 필드 사용)
      }
      if (searchType === 'title+content') {
        return title.includes(lowerQuery) || content.includes(lowerQuery); // 제목 또는 내용에서 검색
      }
      return false;
    });
  
    setFilteredData(filtered); // 필터링된 결과로 상태 업데이트
  };
  
  

  return (
    <VoteInfoContainer>
      <SearchBar onSearch={handleSearch} keywordCount = {filteredData.length}></SearchBar>
      <VoteBox data={filteredData}></VoteBox>
    </VoteInfoContainer>
  )
}

export default VoteInfoBox;