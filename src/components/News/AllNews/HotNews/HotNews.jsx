import { useEffect, useState } from "react";
import NewsFactor from "../../NewsFactor/NewsFactor";
import {
  NewsContainer,
  NewsCategory,
  NewsLink
} from "../AllNewsStyle";


const HotNews = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchStaticData = async () => {
      try {
      const REACT_APP_BASE = process.env.REACT_APP_BASE;
        // `${REACT_APP_BASE}/news/headline`
        const response = await fetch("서버 URL");
        const staticData = await response.json();
        setData(staticData);
      } catch (error) {
        const localResponse = await fetch("/DummyData/News/HotNews.json");
        const localStaticData = await localResponse.json();
        setData(localStaticData);
      }
    };
    fetchStaticData();
  }, [])

  return (
    <NewsContainer>
      <NewsCategory>
        어제 가장 조회수가 높았던 뉴스
      </NewsCategory>
      <NewsLink>
        {data.map((item, index) => (
          <NewsFactor key={index} item={item} />
        ))}
      </NewsLink>
    </NewsContainer>
  );
}

export default HotNews;