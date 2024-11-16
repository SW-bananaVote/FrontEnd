import { useEffect, useState } from 'react';
import HotNews from "./HotNews/HotNews"
import styled from "styled-components";

const NewsBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`




const NewsBox = () => {
  const [data, setData] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        // 서버에서 데이터 가져오기 시도
        const response = await fetch("https://localhost:8080/get/news");
        const serverData = await response.json();
        setData(serverData);
        // alert
        alert('서버에서 데이터 가져오기');
      } catch (error) {
        const localResponse = await fetch('/DummyData/News/News.json');
        const localData = await localResponse.json();
        setData(localData);
        // alert
        //alert('로컬에서 더미데이터 가져오기');
      }
    }

    fetchData();
  }, []);




  return (
    <NewsBoxContainer>
      <HotNews></HotNews>
    </NewsBoxContainer>
  );
}

export default NewsBox;