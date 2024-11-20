import styled from "styled-components";
import { Link } from "react-router-dom";

const FactorLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
`

const FactorImg = styled.img`
  width: 20em;
  height: 13em;
  border: 2px solid gray;
  border-radius: 5%;
`

const FactorTitle = styled.p`
  font-size: 1.1em;
  color: black;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 18em;
`

const NewsFactor = ({ item }) => {
  return (
    <FactorLink to={item.newsUrl}>
      <FactorImg
        src={item.imgUrl}
        alt="다음 뉴스 이미지"
      />
      <FactorTitle>
        {item.newsTitle}
      </FactorTitle>
    </FactorLink>
  );
}

// NewsFactor.defaultProps = {
//   item: {
//     newsUrl: "https://v.daum.net/v/0sb2eXDxzJ",
//     imgUrl: "https://img1.daumcdn.net/thumb/R658x0.q70/?fname=https://t1.daumcdn.net/news/202411/16/yonhap/20241116135827186ekot.jpg",
//     newsTitle: "프랑스 프로축구 명문 리옹, '빚더미'에 2부 강등 위기"
//   }
// }

export default NewsFactor;